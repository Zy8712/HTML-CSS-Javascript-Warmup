/* Task3: write your code here */
var highlightedTF = false;
window.onload = function(){
  var highButton = document.getElementById("high");
  highButton.onclick = highlightText;
}

function highlightText(){
  var div = document.getElementById("poem");
  var highButton = document.getElementById("high");
  var paragraphs = div.getElementsByTagName("p");
  if(highlightedTF == false){
    for(var i = 0; i < paragraphs.length; i++){
      paragraphs[i].style.backgroundColor = "yellow";
    }
    highButton.innerHTML = "Click to unhighlight";
    highlightedTF = true;
  }
  else{
    for(var i = 0; i < paragraphs.length; i++){
      paragraphs[i].style.backgroundColor = "silver";
    }
    highButton.innerHTML = "Click to highlight";
    highlightedTF = false;
  }
}
