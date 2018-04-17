function getGrades (){

    let n = parseInt(document.getElementById("enterGrade").value);
    let grade = "";

    if (n >= 90) grade = "A";
    else if (n >= 80) grade = "B";
    else if (n >= 70) grade = "C";
    else if (n >= 70) grade = "D";
    else grade = "F";

    document.getElementById("printGrade").innerHTML = "Your letter grade is an: " + grade;

  }
