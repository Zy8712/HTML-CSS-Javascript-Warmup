/* Lab 6 - Task 1 */
/* add your code here. Recommend you use the prototype library */
/* There is a local copy in your folder */
var curr = -1;
var imageSet = ["./face1.png", "./face2.png", "./face3.png", "./face4.png"];
window.onload = function(){
  var randomStarter = Math.ceil(Math.random()*4);
  curr = randomStarter;
  $("myImg").src = imageSet[randomStarter-1];
  $("myImg").observe("mouseover", changeRandom);
}

function changeRandom(){
  var randomStarter = Math.ceil(Math.random()*4);
  while(randomStarter == curr){
    randomStarter = Math.ceil(Math.random()*4);
  }
  curr = randomStarter;
  $("myImg").src = imageSet[randomStarter-1];
}
