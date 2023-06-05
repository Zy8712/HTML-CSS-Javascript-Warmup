/* Task 4 code here */
window.onload = function(){
  var addButton = document.getElementById("add");
  addButton.onclick = addValues;
  var deleteButton = document.getElementById("delete");
  deleteButton.onclick = deleteValues;
}

function addValues(){
  var inputValues = document.getElementById("input").value;
  if (inputValues != ""){
    var outputValues = document.getElementById("output");
    var newValue = document.createElement("p");
    newValue.innerHTML = inputValues;
    outputValues.append(newValue);
  }
}

function deleteValues(){
  var outputValues = document.getElementById("output");
  var paras = outputValues.getElementsByTagName("p");
  if (paras.length > 0){
    outputValues.removeChild(paras[paras.length-1]);
  }
  else{
    alert("No paragraph to delete!");
  }
}
