<?php

function mathOperation(int $arg1, int $arg2, string $operation): int|float|string {
    switch ($operation) {
        case '+':
            return $arg1 + $arg2;
        case '-':
            return $arg1 - $arg2;
        case '*':
            return $arg1 * $arg2;
        case '/':
            return $arg2 !== 0 ? $arg1 / $arg2 : 'Деление на ноль недопустимо';
        default:
            return "Недопустимая операция";
    }
}

print_r(mathOperation(2, 2, '+') . "\r\n");
print_r(mathOperation(2, 2, '-') . "\r\n");
print_r(mathOperation(2, 3, '*') . "\r\n");
print_r(mathOperation(6, 3, '/') . "\r\n");
print_r(mathOperation(6, 0, '/') . "\r\n");
print_r(mathOperation(6, 0, '^') . "\r\n");