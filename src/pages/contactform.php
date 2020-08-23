<?php

if (isset($_POST['submit'])){
    $name = $_POST['firstname'];
    $Lname = $_POST['lastname'];
    $mailFrom = $_POST['emailaddress'];
    $message = $_POST['message'];

    $mailTo = "basharbodaseh@hotmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "you have recived an e-mail from".$name.".\n\n".$message;

    // mail($mailTo, $Lname, $txt,$headers);

    // header("location: contact?mailsent")
   
}

?>