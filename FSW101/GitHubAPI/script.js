let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("gitBio").innerHTML = gitObject.bio;
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/sedhawk", true);
gitHubRequest.send();