/* Lab 6 - Task 1 */
/* add your code here. Recommend you use the prototype library */
/* There is a local copy in your folder */
var currImage = -1;
window.onload = function(){
  var images = ["face1.png", "face2.png", "face3.png", "face4.png"];
  var randomImg = Math.floor(Math.random()*4);
  currImage = randomImg;
  $("myImg").src = images[randomImg];
  $("myImg").observe("mouseover", changeImage);
}

function changeImage(){
  var imageGet = document.getElementById("myImg");
  var randomImg = Math.floor(Math.random()*4);
  var images = ["face1.png", "face2.png", "face3.png", "face4.png"];
  while(randomImg == currImage){
    randomImg = Math.floor(Math.random()*4);
  }
  imageGet.src = images[randomImg];
  currImage = randomImg;
}
