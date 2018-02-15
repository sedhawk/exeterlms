function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("change").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "info.txt", true);
    xhttp.send();
  }