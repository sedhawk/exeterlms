/*********************************************************************************
 * Don Speer
 * Course: FSWO101 Lesson 5
 * Date: February 12, 2018
 * Purpose: Hands-On: OOP
*********************************************************************************/

// PART 1 and 2
class Stadium {
    constructor(name, city, capacity, sport, seats){
        this.name = name;
        this.city = city;
        this.capacity = capacity;
        this.sport = sport;
        this.seats = seats;
    }

    describeStadium(){
        console.log(
            "The " + name + " is in " + city + " and holds " + capacity + " fans."
        );
    }

    sportsPlayed(){
        console.log(
            "The following sport is mainly played in this stadium: " + sport
        );
    }

    seatsAvailable(){
        console.log(
            "There are " + seats + " seats still available for tonight's game."
        );
    }
}

let stadium1 = new Stadium("Mercedes Benz Arena", "Atlanta", 70000, "Football", 55000);
stadium1.describeStadium();

// PART 3
class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
}

class Manager extends Employee {
    constructor(name, salary, hireDate, job, years, degree) {
        super(name, salary, hireDate);
        this.job = job;
        this.years = years;
        this.degree = degree;
    }

    jobDescription(){

    }

    yearsExperience(){

    }

    degreeCompleted(){

    }
}

class Designer extends Employee {
    constructor(name, salary, hireDate, job, years, degree) {
        super(name, salary, hireDate);
        this.job = job;
        this.years = years;
        this.degree = degree;
    }

    jobDescription(){

    }

    yearsExperience(){

    }

    degreeCompleted(){

    }
}

class QA extends Employee {
    constructor(name, salary, hireDate, job, years, degree) {
        super(name, salary, hireDate);
        this.job = job;
        this.years = years;
        this.degree = degree;
    }

    jobDescription(){

    }

    yearsExperience(){

    }

    degreeCompleted(){

    }

}