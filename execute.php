<?php
// Execute the Java file
$output = shell_exec('java -jar filename.jar');

// Send the output as the HTTP response
echo $output;
?>
