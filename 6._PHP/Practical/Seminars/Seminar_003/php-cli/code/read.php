<?php

$fileContents = file_get_contents('./file.txt');

echo $fileContents;
// docker container run -it -v $(pwd)/php-cli/code:/code/ test php read.php