/* Задание 2 (20 минут)
У вас есть список задач, которые необходимо выполнить в определенном порядке. Каждая
задача должна быть выполнена через определенный промежуток времени, заданный в
миллисекундах. Вам необходимо написать функцию, которая принимает список задач и
интервал времени, а затем выполняет каждую задачу через определенный промежуток
времени.
const tasks = [
 { name: 'task 1', time: 1000 },
 { name: 'task 2', time: 2000 },
 { name: 'task 3', time: 3000 },
 { name: 'task 4', time: 4000 },
 { name: 'task 5', time: 5000 }
]; */


const tasks = [
    { name: 'task 1', time: 1000 },
    { name: 'task 2', time: 2000 },
    { name: 'task 3', time: 3000 },
    { name: 'task 4', time: 4000 },
    { name: 'task 5', time: 5000 }
];

function completeTasks(tasks) {
    tasks.forEach(task => {
        const { name, time } = task;

        setTimeout(() => {
            console.log(`Выполнена задача: ${name} (через ${time} мс)`);
        }, time);
    });
}

completeTasks(tasks);