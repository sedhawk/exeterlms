function addAChild() {
    let newElem = document.createElement("div");
    newElem.innerHTML = "This is a new Element created by appendChild()";
    let container = document.getElementById("container");
    container.appendChild(newElem);
  }