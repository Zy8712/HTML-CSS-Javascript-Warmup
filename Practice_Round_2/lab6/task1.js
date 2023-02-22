/* Lab 6 - Task 1 */
/* add your code here. Recommend you use the prototype library */
/* There is a local copy in your folder */
var curr = -1;
window.onload = function(){
  var imageGet = document.getElementById("myImg");
  var randomNum = Math.ceil(Math.random()*4);
  var images = ["face1.png", "face2.png", "face3.png", "face4.png"];
  imageGet.src = images[randomNum-1];
  curr = randomNum;
  $("myImg").observe("mouseover", changeImage);
}

function changeImage(){
  var imageGet = document.getElementById("myImg");
  var randomNum = Math.ceil(Math.random()*4);
  var images = ["face1.png", "face2.png", "face3.png", "face4.png"];
  while(randomNum == curr){
    randomNum = Math.ceil(Math.random()*4);
  }
  imageGet.src = images[randomNum-1];
  curr = randomNum;
}
