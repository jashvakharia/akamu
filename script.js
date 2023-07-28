function executeJava() {
  // Get the Java code from the text area
  var javaCode = document.getElementById("javaCode").value;

  // Create a form data object to send the code to the server
  var formData = new FormData();
  formData.append("javaCode", javaCode);

  // Send a POST request to the server to execute the code
  fetch("execute.php", {
      method: "POST",
      body: formData
    })
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
