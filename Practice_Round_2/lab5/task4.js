/* Task 4 code here */
window.onload = function(){
  var addButton = document.getElementById("add");
  addButton.onclick = addFunction;
  var deleteButton = document.getElementById("delete");
  deleteButton.onclick = deleteFunction;
}

function addFunction(){
  var inputContent = document.getElementById("input");
  var outputContent = document.getElementById("output");
  if(inputContent != ""){
    var newPara = document.createElement("p");
    newPara.innerHTML = inputContent.value;
    outputContent.appendChild(newPara);
  }
}

function deleteFunction(){
  var outputContent = document.getElementById("output");
  var arrayParas = outputContent.getElementsByTagName("p");
  if(arrayParas.length > 0){
    outputContent.removeChild(arrayParas[0]);
  }
  else{
    alert("No paragraph to delete!");
  }
}
