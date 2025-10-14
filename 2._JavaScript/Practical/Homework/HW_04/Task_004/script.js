/* Задание 4 Необязательное задание
Описание задачи: Используя цикл for, выведите в консоль "горку" из символов x с 20
рядами.
 */


function printPyramid(height) {
    for(let i = 1; i <= height; i++) {
        let line = '';
        // Добавляем пробелы для выравнивания
        for(let j = 0; j < height - i; j++) {
            line += ' ';
        }
        // Добавляем символы X
        for(let k = 0; k < 2 * i - 1; k++) {
            line += 'X';
        }
        console.log(line);
    }
}

printPyramid(20);