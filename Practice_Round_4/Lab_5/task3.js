/* Task3: write your code here */
var highlighted = false;
window.onload = function(){
  var changeButton = document.getElementById("change");
  changeButton.onclick = changeStyle;
}

function changeStyle(){
  var paras = document.getElementById("poem").getElementsByTagName("p");;
  var highButton = document.getElementById("change");

  if (highlighted == false){
    for(var i = 0; i < paras.length; i++){
      paras[i].style.backgroundColor = "yellow";
    }
    highButton.innerHTML = "Click to unhighlight";
    highlighted = true;
  }

  else{
    for(var i = 0; i < paras.length; i++){
      paras[i].style.backgroundColor = "silver";
    }
    highButton.innerHTML = "Click to highlight";
    highlighted = false;
  }
}
