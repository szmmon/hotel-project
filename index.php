<?php
include("database.php");
include("index.html");
include("script.js?2");


    function date_formating($daterange){
        $datestart = substr($daterange, 0, strpos($daterange, " "));
        $dateend = substr($daterange, 13);
        $datestart = str_replace("/", "-", $datestart);
        $dateend = str_replace("/", "-", $dateend);
   
        $datestart = substr($datestart, 6) . "-" . substr($datestart,0,3) . substr($datestart,3,6);
        $dateend = substr($dateend, 6) . "-" . substr($dateend,0,3) . substr($dateend,3,6);


        $datestart = substr($datestart, 0, 10);
        $dateend = substr($dateend, 0, 10);

        
        $dates = array($datestart, $dateend);

        return $dates;
    }



    if(isset($_POST["reserve-btn-superior"]) || isset($_POST["reserve-btn-suite"]) || isset($_POST["reserve-btn-jrsuite"]))
    {
        $people_count = $_POST["people-count"];
        $reservation_name = preg_replace("/[^A-Za-z ]/", '',  $_POST["reservation-name"]);
        $daterange = $_POST["daterange"];
        $datestart = date_formating($daterange)[0];
        $dateend = date_formating($daterange)[1];

        if(isset($_POST["reserve-btn-suite"]) ){
        $room = "suite";
        }
        else if(isset($_POST["reserve-btn-jrsuite"])){
        $room = "jrsuite";

        }
        else if(isset($_POST["reserve-btn-superior"])){
        $room = "superior";    
        }

         $sql= "INSERT into bookings (booking_id, name, room, guests_num, date_start, date_end) VALUES (NULL, '$reservation_name', '$room', '$people_count', '$datestart', '$dateend')";
    }

     try{
        mysqli_query($conn, $sql);
    }
    catch(mysqli_sql_exception){
        echo "Could not reserve";

    }





    // if(isset($reserve_btn_suite)){
    //     $people_count = $_POST["people-count"];
    //     $reservation_name = preg_replace("/[^A-Za-z ]/", '',  $_POST["reservation-name"]);
    //     $daterange = $_POST["daterange"];
    //     $room = "suite";

    //     $datestart = date_formating($daterange)[0];
    //     $dateend = date_formating($daterange)[1];


    //     // echo"$people_count <br>";
    //     // echo"$reservation_name <br>";
    //     // echo"$daterange <br>";
    //     // echo"$datestart<br>";
    //     // echo"$dateend<br>";

    //     $sql= "INSERT into bookings (booking_id, name, room, guests_num, date_start, date_end) VALUES (NULL, '$reservation_name', '$room', '$people_count', '$datestart', '$dateend')";

    // }

    // try{
    //     mysqli_query($conn, $sql);
    // }
    // catch(mysqli_sql_exception){
    //     echo "Could not reserve";

    // }


//     if($_SERVER["REQUEST_METHOD"] == "POST"){
//         echo"hi";

// }

mysqli_close($conn);
?>