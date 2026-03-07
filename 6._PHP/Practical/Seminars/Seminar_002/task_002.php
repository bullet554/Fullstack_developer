<?php

$str = "(())()()";

print_r(checkStr($str) ? "Строка валидна" : "Ошибка");

function checkStr(string $str) : bool {
    $count = 0;
    for ($i=0; $i < strlen($str); $i++) { 
        if ($str[$i] === "(") {
            $count++;
        } else if ($str[$i] === ")") {
            $count--;
        }

        if ($count < 0) {
            return false;
        }
    }

    return $count === 0;
};