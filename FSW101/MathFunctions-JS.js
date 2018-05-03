/***************************************************************************************************** 
 * Don Speer
 * Course: FSWO101 Lesson 1
 * Date: February 9, 2018
 * Purpose: Introduction to Front End Foundations
*****************************************************************************************************/


//The function totalPrice will calculate the cost of land with a given size (sqEdge) and price per square foot pricePerSqFt
function totalPrice(sqEdge, pricePerSqFt) {
    sqEdge^2 * pricePerSqFt;
}
// Input: totalPrice(10, 100);
// Output: 10000

// Self explanatory, prints birthday
let day = "11";
let month = "November";
let year = "1991";

let myBirthday = month + " " + day + ", " + year;

// Output: November 11, 1991

// Determine if the given age allows the attendee to see the movie
let age = 15;

if (age >= 18) console.log("Permitted to attend alone");
else if (age >= 15) console.log("Permitted with anyone over 18");
else if (age >= 10) console.log("Permitted with parent");
else console.log ("Not permitted");
