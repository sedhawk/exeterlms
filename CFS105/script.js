function idCard (){
  
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var address = document.getElementById('address').value;
    
    let postFullName = firstName + " " + lastName;
    document.getElementById("postFullName").innerHTML = postFullName;
    
    let postAddress = address;
    document.getElementById("postAddress").innerHTML = postAddress;
    
    var age = parseInt(document.getElementById('age').value);
    var phoneNumber = document.getElementById('phonenumber').value;
    
    let numberArray = [];
    numberArray.push(age);
    numberArray.push(phoneNumber);
    
    for(var i=0; i<=numberArray.length; i++){
      
      var postAge = "Age: " + age;
      if(numberArray[i] <= 100) document.getElementById('postAge').innerHTML = postAge;
      
      var postPhoneNumber = "Phone Number: (" + phoneNumber.substring(0,3) + ")" + phoneNumber.substring(3,6) + "-" + phoneNumber.substring(6,10);
      if(numberArray[i] > 100) document.getElementById('postPhoneNumber').innerHTML = postPhoneNumber;
      
    }
  }