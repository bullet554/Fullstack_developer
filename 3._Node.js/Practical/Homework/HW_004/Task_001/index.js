const express = require('express');
const joi = require('joi');
const fs = require('fs');
const path = require('path');

const app = express();

const usersFile = path.join(__dirname, 'personsData.json');

const userSchema = joi.object({
    firstName: joi.string().min(1).required(),
    surname: joi.string().min(1).required(),
    age: joi.number().min(0).max(150).required(),
    city: joi.string().min(1).optional()
});

app.use(express.json());

function readData() {
    try {
        const rawData = fs.readFileSync(usersFile, 'utf-8');
        if (rawData.trim() === '') {
            return [];
        }

        return JSON.parse(rawData);
    }
    catch (err) {
        console.error('Ошибка при чтении файла:', err.message);
        return [];
    }
}

function writeData(data) {
    try {
        fs.writeFileSync(usersFile, JSON.stringify(data, null, 2), 'utf-8');
        console.log('Данный успешно сохранены в', usersFile);
    }
    catch (err) {
        console.error('Ошибка при записи файла:', err.message);
    }
}

app.get('/users', (req, res) => {
    const users = readData();
    res.json({ users });

})

app.get('/users/:id', (req, res) => {
    const users = readData();
    const userId = parseInt(req.params.id, 10);

    const user = users.find((user) => user.id === userId);
    if (user) {
        res.json({ user });
    } else {
        res.status(404);
        res.json({ user: null });
    }
})

app.post('/users', (req, res) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const users = readData();
    const newUser = {
        id: Date.now(),
        ...req.body
    };

    users.push(newUser);
    writeData(users);

    res.status(201).json(newUser);
})

app.put('/users/:id', (req, res) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const users = readData();
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        res.status(404).json({ user: null });
    }

    users[userIndex] = {
        ...users[userIndex],
        ...req.body,
        id: userId
    };

    writeData(users);
    res.json(users[userIndex]);
})

app.delete('/users/:id', (req, res) => {
    const users = readData();
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        res.status(404).json({ user: null });
    }

    const deletedUser = users.splice(userIndex, 1)[0];
    writeData(users);
    res.json({ message: 'Пользователь удалён', user: deletedUser });
})

app.listen(3000);