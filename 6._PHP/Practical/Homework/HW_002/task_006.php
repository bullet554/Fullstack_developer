<?php

function getWord($num, $one, $two, $five)
{
    $num = $num % 100;

    if ($num >= 11 && $num <= 14) {
        return $five;
    }

    $num = $num % 10;

    if ($num == 1) {
        return $one;
    }

    if ($num >= 2 && $num <= 4) {
        return $two;
    }

    return $five;
}

function getTimeString()
{
    $hours = date('G');
    $minutes = date('i');

    $hourWord = getWord($hours, 'час', 'часа', 'часов');
    $minuteWord = getWord($minutes, 'минута', 'минуты', 'минут');

    return "$hours $hourWord $minutes $minuteWord";
}

echo getTimeString();