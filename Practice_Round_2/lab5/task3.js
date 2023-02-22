/* Task3: write your code here */
var contentHighlighted = false;
window.onload = function(){
  var highButton = document.getElementById("button");
  highButton.onclick = highlight;
}

function highlight(){
  var content = document.getElementById("poem");
  var allParas = content.getElementsByTagName("p");
  if(contentHighlighted == false){
    for(var i = 0; i < allParas.length; i++){
      allParas[i].style.backgroundColor = "yellow";
    }
    var highButton = document.getElementById("button");
    highButton.innerHTML = "Click to unhighlight"
    contentHighlighted = true;
  }
  else{
    for(var i = 0; i < allParas.length; i++){
      allParas[i].style.backgroundColor = "silver";
    }

    var highButton = document.getElementById("button");
    highButton.innerHTML = "Click to highlight"
    contentHighlighted = false;
  }
}
