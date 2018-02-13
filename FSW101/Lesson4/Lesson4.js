/*********************************************************************************
 * Don Speer
 * Course: FSWO101 Lesson 4
 * Date: February 10, 2018
 * Purpose: Hands-On: Decision Making
*********************************************************************************/

// PART 1
// Converting if...else into a ternary
function phoneNumberFormat(phoneNumber) {
    phoneNumber = document.getElementById("phNumber").value;
    let phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/g;
    phoneNumber.match(phoneRegex) ? alert("Valid number entered") : alert("Phone number entered is invalid");
}

//PART 2
// try...catch
let newNumber = 10;
try {
    if (newNumber < 5) throw true;
} catch {
    console.log("Error: Invalid Number");
}

// PART 3
// Checks the input of a user's name for the proper format
document.addEventListener("click", checkName);
function checkName(checkName){
    checkName = document.getElementById("name").value;
    validName = "The name " + checkName + " is valid";
    invalidName = "The name you entered is invalid";

    let nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+/g
    try {
        if (checkName.match(nameRegex)){
            document.getElementById("postName").innerHTML = validName;
        }
    }
    catch {
        document.getElementById("postName").innerHTML = invalidName;
    }
}