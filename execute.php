<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the Java code from the request body
  $javaCode = $_POST['javaCode'];

  // Write the Java code to a temporary file
  $tempFile = tempnam(sys_get_temp_dir(), 'java');
  file_put_contents($tempFile . '.java', $javaCode);

  // Compile and execute the Java code
  exec('javac ' . $tempFile . '.java', $compileOutput);
  exec('java -classpath ' . escapeshellarg(dirname($tempFile)) . ' ' . escapeshellarg(basename($tempFile)), $executeOutput);

  // Delete the temporary files
  unlink($tempFile . '.java');
  unlink($tempFile . '.class');

  // Send the output as the HTTP response
  echo implode('<br>', $executeOutput);
}
?>
