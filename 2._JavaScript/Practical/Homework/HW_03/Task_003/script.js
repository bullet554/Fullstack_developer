// option 1

/* function minNum(num1, num2, num3) {
    let isNum1 = !isNaN(Number(num1));
    let isNum2 = !isNaN(Number(num2));
    let isNum3 = !isNaN(Number(num3));

    if (isNum1 === true && isNum2 === true && isNum3 === true) {
        if (num1 < num2 && num1 < num3) {
            console.log(`Число ${num1} минимальное`);
        } else if (num2 < num1 && num2 < num3) {
            console.log(`Число ${num2} минимальное`);
        } else {
            console.log(`Число ${num3} минимальное`);
        }
    } else {
        console.log('Введено не число!');
    }
} */


// option 2

/* function minNum(num1, num2, num3) {
    let isNum1 = !isNaN(Number(num1));
    let isNum2 = !isNaN(Number(num2));
    let isNum3 = !isNaN(Number(num3));

    if (isNum1 === true && isNum2 === true && isNum3 === true) {
        let min = num1;

        if (num2 < min) {
            min = num2
        }
        if (num3 < min) {
            min = num3
        }

        console.log(min);
        alert(`Число ${min} минимальное`)
        // return min;
    } else {
        console.log('Введено не число!');
    }
}
 */

// option 3

function minNum(num1, num2, num3) {
    let isNum1 = !isNaN(Number(num1));
    let isNum2 = !isNaN(Number(num2));
    let isNum3 = !isNaN(Number(num3));

    if (isNum1 === true && isNum2 === true && isNum3 === true) {
        console.log(Math.min(num1, num2, num3));
        alert(`Число ${Math.min(num1, num2, num3)} минимальное`)
        // return Math.min(num1, num2, num3);
    } else {
        console.log('Введено не число!');
    }
}


let num1 = prompt('Введите первое число: ')
let num2 = prompt('Введите второе число: ')
let num3 = prompt('Введите третье число: ')

minNum(num1, num2, num3);