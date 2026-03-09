<?php

function power(int $val, int $pow) : int {
    if ($pow === 0) {
        return 1;
    }

    return $val * power($val, $pow - 1);
}

print_r(power(2, 2) . PHP_EOL);
print_r(power(2, 5) . PHP_EOL);