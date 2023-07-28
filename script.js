function executeJava() {
  // Send a GET request to the server to execute the Java file
  fetch("execute.php")
    .then(function (response) {
      // Convert the response to text format
      return response.text();
    })
    .then(function (output) {
      // Display the output on the webpage
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (error) {
      // Handle any error that occurs
      console.log(error);
    });
}
