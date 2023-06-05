/* Task3: write your code here */
var highlightStatus = 0; // 0 means false, 1 means true
window.onload = function(){
  var changeButton = document.getElementById("change");
  changeButton.onclick = adjustHighlight;
}

function adjustHighlight(){
  if (highlightStatus == 0){
    var insidePoemBox = document.getElementById("poem");
    var allParas = insidePoemBox.getElementsByTagName("p");
    for (var i = 0; i < allParas.length; i++){
      allParas[i].style.backgroundColor = "yellow";
    }
    var changeButton = document.getElementById("change");
    changeButton.innerHTML = "Click to unhighlight";
    highlightStatus = 1;
  }
  else{
    var insidePoemBox = document.getElementById("poem");
    var allParas = insidePoemBox.getElementsByTagName("p");
    for (var i = 0; i < allParas.length; i++){
      allParas[i].style.backgroundColor = "silver";
    }
    var changeButton = document.getElementById("change");
    changeButton.innerHTML = "Click to highlight";
    highlightStatus = 0;
  }
}
