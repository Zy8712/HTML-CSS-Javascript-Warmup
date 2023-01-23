/* Task3: write your code here */
var lighted = false;
window.onload = function(){
  var highLight = document.getElementById("highlight");
  highLight.onclick = changeBackground;
}

function changeBackground(){
  var content = document.getElementById("poem");
  var lines = content.getElementsByTagName("p");
  if(lighted == false){
    for(var i = 0; i < lines.length; i++){
      lines[i].style.backgroundColor = "yellow";
    }
    lighted = true;
  }
  else{
    for(var i = 0; i < lines.length; i++){
      lines[i].style.backgroundColor = "silver";
    }
    lighted = false;
  }
}
