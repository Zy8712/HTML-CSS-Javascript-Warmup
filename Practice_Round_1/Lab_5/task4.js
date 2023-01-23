/* Task 4 code here */
window.onload = function(){
  var addLine = document.getElementById("add");
  addLine.onclick = modifyAdd;
  var deleteLine = document.getElementById("delete");
  deleteLine.onclick = modifyDelete;
}

function modifyAdd(){
  var parasToAdd = document.getElementById("input");
  var parasAdded = document.getElementById("output");
  if(parasToAdd != ""){
    var newPara = document.createElement("p");
    newPara.innerHTML = parasToAdd.value;
    parasAdded.appendChild(newPara);
  }
}

function modifyDelete(){
  var div = document.getElementById("output");
  var n = div.getElementsByTagName("p").length;
  var pars = div.getElementsByTagName("p");
  if (n != 0){
    div.removeChild(pars[pars.length-1]);
  }
  else if (n == 0){
    alert("No paragraph to delete!");
  }
}
