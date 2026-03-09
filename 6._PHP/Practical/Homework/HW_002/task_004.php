<?php

$alfabet = [
    'а' => 'a',   'б' => 'b',   'в' => 'v',
    'г' => 'g',   'д' => 'd',   'е' => 'e',
    'ё' => 'e',   'ж' => 'zh',  'з' => 'z',
    'и' => 'i',   'й' => 'y',   'к' => 'k',
    'л' => 'l',   'м' => 'm',   'н' => 'n',
    'о' => 'o',   'п' => 'p',   'р' => 'r',
    'с' => 's',   'т' => 't',   'у' => 'u',
    'ф' => 'f',   'х' => 'h',   'ц' => 'c',
    'ч' => 'ch',  'ш' => 'sh',  'щ' => 'sch',
    'ь' => '\'',  'ы' => 'y',   'ъ' => '\'',
    'э' => 'e',   'ю' => 'yu',  'я' => 'ya'
];

function transliterationWords(string $words): string
{
    global $alfabet;

    $result = '';

    for ($i = 0; $i < mb_strlen($words); $i++) {

        $char = mb_substr($words, $i, 1);

        $isUpper = $char === mb_strtoupper($char);

        $charLower = mb_strtolower($char);

        if (isset($alfabet[$charLower])) {

            $translit = $alfabet[$charLower];

            if ($isUpper) {
                $translit = ucfirst($translit);
            }

            $result .= $translit;

        } else {
            $result .= $char;
        }
    }

    return $result;
}

print_r(transliterationWords("Привет мир!"));