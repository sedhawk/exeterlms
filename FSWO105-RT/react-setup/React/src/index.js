import React from 'react';
import ReactDOM from 'react-dom';

var data = [
    {Firstname: 'Janet', Lastname: 'James'},
    {Firstname: 'John', Lastname: 'Jameson'}
];

ReactDOM.render(
    React.createElement(
        'table',
        null,
        React.createElement(
            'tr',
            null,
            React.createElement('th', null, 'Firstname'),
            React.createElement('th', null, 'Lastname')
            ),
        React.createElement(
            'tr',
            null,
            React.createElement('td', null, 'Janet'),
            React.createElement('td', null, 'James')
        ),
        React.createElement(
            'tr',
            null,
            React.createElement('td', null, 'John'),
            React.createElement('td', null, 'Jameson')
        )
      ),
    document.getElementById('root')
  );

//Hands On Project 2 ES6 conversions: arrow functions, let/const, and interpolation

function hasUsernameAndPassword(user) {
    return user.name.length > 0 && user.password.length > 0;
}


function filterInvalidUsers(users) {
    //var validUsers = [];
    const validUsers = [];

    //for (var user of users) {
    for (const user of users) {
        if (hasUsernameAndPassword(user)) {
            validUsers.push(user);
        }
    }

    return validUsers;
}

function userToFormattedString(user) {
    //return 'name: ' + user.name + '\nrole: ' + user.role;
    return `name: ${user.name}\nrole: ${user.role}`;
}

//var users = [
const users = [
    {
        name: 'Kirk Douglass',
        password: 'iamspartacus',
        role: 'revolutionary'
    },
    {
        name: 'Charlie Chaplain',
        password: '',
        role: 'tramp'
    },
    {
        name: 'Harrison Ford',
        password: 'AnythingButSnakes',
        role: 'archaeologist'
    }
];

//var validUsers = filterInvalidUsers(users);
const validUsers = filterInvalidUsers(users);

//for (var i = 0; i < validUsers.length; i++) {
for (let i = 0; i < validUsers.length; i++) {
    console.log(userToFormattedString(validUsers[i]));
}

//Hands On Project 3 ES6 conversion: with class keyword

// Players really dislike true randomness, so it is generally modeled with a
// 'grab bag' approach. In this style every value within a range is generated
// and inserted into a collection and then randomized. When a new value is
// requested it is taken off the array. Typically every value is inserted 2-3
// times to allow for seemingly 'random' runs of the same number.

// The DieBag constructor function creates a grab bag of 3x values for a die with
// a number of faces specified in the constructor

//function DieBag(numberOfFaces) {
class DieBag {
    constructor(numberOfFaces){
        this.values = [];

        for (let iterationCount = 0; iterationCount < 3; iterationCount++) {
            for (let faceCount = 0; faceCount < numberOfFaces; faceCount++) {
                this.values.push(faceCount + 1);
            }
        }
    }

//DieBag.prototype.drawValue = function() {
    drawValue () {
        return this.values.shift();
    }

//DieBag.prototype.shuffle = function() {
    suffle() {
        //for (var i = 0; i < this.values.length; i++) {
        for (const temp of this.value){
            //var temp = this.values[i];
            //var swapIndex = Math.floor(Math.random() * this.values.length);
            const swapIndex = Math.floor(Math.random() * this.values.length);
            this.values[i] = this.values[swapIndex];
            this.values[swapIndex]= temp;
        }
    }

    itemsRemaining() {
        return this.values.length;
    }
}

const bag = new DieBag(10);

bag.shuffle();

while (bag.itemsRemaining()) {
    console.log(bag.drawValue());
}
