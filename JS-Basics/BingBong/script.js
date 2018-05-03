function bingBong (){

  let result = "";

    for(let i=0; i<100; i++){
      if (i%3 == 0 && i%5 == 0) result = "Bing Bong";
      else if (i % 3 == 0) result = "Bing";
      else if (i % 5 == 0) result = "Bong";
      else result = i;
      document.getElementById("output").innerHTML += result + ' \n';
      i++;
    }
  }
