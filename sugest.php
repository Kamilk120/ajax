<?php
    require './names.php';
    $n = $_GET['value'];
    foreach ($names as $name) {
        $name = strtolower($name);
        if ($n == '') {
            echo "";
            break;
        } 
        else if (str_contains($name, $n)) {
            echo "$name, ";
        }
    }
?>