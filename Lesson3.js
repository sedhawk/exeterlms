/*********************************************************************************
 * Don Speer
 * Course: FSWO101 Lesson 3
 * Date: February 10, 2018
 * Purpose: Hands-On: Scope and Operators
*********************************************************************************/

// PART 1
// Checks highSchoolGrade to see if you are in 9, 10, 11 or 12:
let highSchoolGrade = 11;
let yourGrade;

switch(highSchoolGrade){
    case 9:
        yourGrade = "Freshman";
        break;
    case 10:
        yourGrade = "Sophomore";
        break;
    case 11:
        yourGrade = "Junior";
        break;
    case 12:
        yourGrade = "Senior";
        break;
    default:
        yourGrade = "Invalid";
}

console.log("Your grade is: " + yourGrade);
// OUTPUT: Your grade is: Junior

// PART 2:
// Prints the words "Hello World" to the screen hovering your mouse over the page
/*document.addEventListener("mouseover", myFunction);
document.addEventListener("mouseout", mySecondFunction);

function myFunction(){
    document.getElementById("mouse").innerHTML += "Hello World <br>";
}

function mySecondFunction(){
    document.getElementById("mouse").innerHTML += "Good Bye <br>";
}*/

// PART 3:
// Create a web page that will take a user's input and print it to the screen

function getBirthday() {

    let getMonth = document.getElementById('month').value;
    let getDay = document.getElementById('day').value;
    let getYear = document.getElementById('year').value;

    let showBirthday = "Your Birthday is: <br>" + getMonth + " " + getDay + ", " + getYear;
    
    document.addEventListener("click", myBirthdayFunction);
    function myBirthdayFunction(){
        document.getElementById("postBirthday").innerHTML = showBirthday;
    }
    
}
