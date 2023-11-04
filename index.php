<?php
include("database.php");
include("index.html");


    $reserve_btn = $_POST["reserve-btn"];
    if(isset($reserve_btn)){
        $people_count = $_POST["people_count"];
        $reservation_name = $_POST["reservation-name"];
        $daterange = $_POST["daterange"];
        
        echo"$people_count <br>";
        echo"$reservation_name <br>";
        echo"$daterange <br>";


    }


//     if($_SERVER["REQUEST_METHOD"] == "POST"){
//         echo"hi";

// }

mysqli_close($conn);
?>