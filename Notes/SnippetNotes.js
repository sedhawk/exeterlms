function addUser() {
    let firstName = document.getElementById("firstName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    document.getElementById("fName").innerHTML = "Hello " + firstName + ",";
    document.getElementById("thankYou").innerHTML =
      "Thank you for your interest in our ROBOTEX 3000!";
    document.getElementById("reachYou").innerHTML =
      "When the product becomes available we will attempt to reach you at:";
    document.getElementById("pNumber").innerHTML = "Phone: " + phoneNumber;
    document.getElementById("emailAdd").innerHTML = "Email: " + email;
    document.getElementById("sincerely").innerHTML = "Thank you,";
    document.getElementById("teamName").innerHTML = "Products Team";
  }