/* Lab 6 - Task 1 */
/* add your code here. Recommend you use the prototype library */
/* There is a local copy in your folder */
var images = ["face1.png", "face2.png", "face3.png", "face4.png"];
var current = 0;
window.onload = function(){
  var val = Math.ceil(Math.random() * 4);
  current = val;
  $("myImg").src = images[val-1];
  $("myImg").observe("mouseover", changeImage);
}

function changeImage(){
  var val = Math.ceil(Math.random() * 4);
  while(val == current){
    val = Math.ceil(Math.random() * 4)
  }
  current = val;
  $("myImg").src = images[val-1];
}
