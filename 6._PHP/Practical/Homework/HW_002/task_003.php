<?php

$arr = [
  'Московская область' => [
      'Москва',
      'Зеленоград',
      'Клин',
  ],
    'Ленинградская область' => [
      'Санкт-Петербург',
      'Всеволожск',
      'Павловск',
      'Кронштадт',
  ],
    'Рязанская область' => [
      'Рязань',
      'Касимов',
      'Сасово',
      'Скопин',
  ]
];

foreach ($arr as $region => $cities) {
    print_r($region . ": ");

    $lastCity = count($cities) - 1;

    foreach ($cities as $index => $city) {
        print_r($city);

        if ($index !== $lastCity) {
            print_r(", ");
        }
    }

    print_r(PHP_EOL);
};