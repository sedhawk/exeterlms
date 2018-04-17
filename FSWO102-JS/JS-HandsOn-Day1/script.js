function getGrades (){

    let grade = parseInt(document.getElementById('enterGrade').value);
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;

    let postFullName = firstName + " " + lastName;
    document.getElementById("postFullName").innerHTML = postFullName;

    document.getElementById("postAddress").innerHTML = postAddress;

    var phoneNumber = document.getElementById('phonenumber').value;

    let gradeArray = [];

    for(var i=0; i<=gradeArray.length; i++){
      
      var postAge = "Age: " + age;
      if(numberArray[i] <= 100) document.getElementById('postAge').innerHTML = postAge;

      var postPhoneNumber = "Phone Number: (" + phoneNumber.substring(0,3) + ")" + phoneNumber.substring(3,6) + "-" + phoneNumber.substring(6,10);
      if(numberArray[i] > 100) document.getElementById('postPhoneNumber').innerHTML = postPhoneNumber;

    }
  }
