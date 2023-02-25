/* Task 4 code here */
window.onload = function(){
  var addButton = document.getElementById("add");
  addButton.onclick = addOutput;
  var deleteButton = document.getElementById("delete");
  deleteButton.onclick = deleteOutput;
}

function addOutput(){
  var textInput = document.getElementById("input");
  if(textInput != ""){
    var textOutput = document.getElementById("output");
    var newParas = document.createElement("p");
    newParas.innerHTML = textInput.value;
    textOutput.appendChild(newParas);
  }
}

function deleteOutput(){
  var textOutput = document.getElementById("output");
  var paras = textOutput.getElementsByTagName("p");
  if(paras.length > 0){
    textOutput.removeChild(paras[0]);
  }
  else{
    alert("No paragraphs to delete!");
  }

}
