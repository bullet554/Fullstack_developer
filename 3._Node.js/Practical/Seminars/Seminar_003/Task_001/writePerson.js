const fs = require('fs');
const path = require('path');

const Person = {
    name: 'John',
    surname: 'Ka',
    age: 30,
    city: 'Moskow'
};

fs.writeFileSync(path.join(__dirname, 'person.json'), JSON.stringify(Person, null, 2));
