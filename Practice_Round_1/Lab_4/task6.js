/* Task6.js - Add your Java Script Code Here */
var i = 20;
function countDown(){
  var p = document.getElementById("mydata");
  p.innerHTML = i;
  if(i <= 0){
    p.innerHTML = "BOOM!";
  }
  i--;
}
