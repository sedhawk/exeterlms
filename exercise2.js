/***************************************************************************************************** 
 * Don Speer
 * Course: TODO: find the course name
 * Date: February 10, 2018
 * Purpose: Hands-On: Scope and Operators
*****************************************************************************************************/

// PART1
// Write three functions that take in two parameters, with one of the parameters being a default parameter

// Function 1: return the sum of all numbers
function addNumbers(a, b=24){
    return a+b;
}
// INPUT: addNumbers(4); OUTPUT: 28

// Function 2: return the quotient of all numbers
function divideNumbers(a, b=24){
    return a/b;
}
// INPUT: divideNumbers(48); OUTPUT: 2

// Function 3: return the average of all numbers
function averageNumbers(a, b=24){
    return (a+b) / 2;
}
// INPUT: averageNumbers(6); OUTPUT: 15

/*============================================================================================================= */

// PART 2
// Write the three previous functions as arrow functions. NO default parameters are needed.

//Function 1: return teh sum of all numbers
const addNumbers = (a,b) => a+b;
// INPUT: addNumbers(2,3); OUTPUT: 5

// Function 2: return the quotient of all numbers
const divideNumbers = (a,b) => a/b;
// INPUT: divideNumbers(10,5); OUTPUT: 2;

// Function 3: return the average of all numbers
const averageNumbers = (a,b) => (a+b) / 2;
// INPUT: averageNumberss(15,90); OUTPUT: 52.5

/*=============================================================================================================== */

// PART 3
// Create TWO JavaScript objects. Objects have at least THREE properties and ONE method each using the this keyword.

let newProduct = {
    Car: "Tesla",
    Truck: "Tacoma",
    Bike: "Indian",
    newProducts: function(){
        console.log(this.Car + ", " + this.Truck + ", " + this.Bike);
    }
};

let wishList = {
    Game: "Kingdom Come: Deliverance",
    Gym: "PRX Gym",
    Yard: "Greenhouse",
    printWishList: function(){
        console.log(this.Game + ", " + this.Gym + ", " + this.Yard);
    }
};