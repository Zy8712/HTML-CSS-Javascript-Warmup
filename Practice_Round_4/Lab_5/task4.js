/* Task 4 code here */
window.onload = function(){
  var addButton = document.getElementById("add");
  addButton.onclick = addItem;
  var removeButton = document.getElementById("delete");
  removeButton.onclick = removeItem;
}

function addItem(){
  var textInput = document.getElementById("input");
  if(textInput != ""){
    var textOutput = document.getElementById("output");
    var newParas = document.createElement("p");
    newParas.innerHTML = textInput.value;
    textOutput.appendChild(newParas);
  }
}

function removeItem(){
  var textOutput = document.getElementById("output");
  var paras = textOutput.getElementsByTagName("p");
  if(paras.length > 0){
    textOutput.removeChild(paras[0]);
  }
  else{
    alert("No paragraphs to delete!");
  }
}
