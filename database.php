<?php 
    $db_server = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_name = "hotel-app-db";
    $conn = "";

    try{
        $conn = mysqli_connect($db_server,
        $db_user,
        $db_pass,
        $db_name);

        // echo"success";
        }
    catch(mysqli_sql_exception){
        echo"Couldn't connect to a database";
    }


?>