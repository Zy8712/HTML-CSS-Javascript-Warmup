/* Task6.js - Add your Java Script Code Here */
var count = 20;
function myFunction(){
  var p = document.getElementById("mydata");
  p.innerHTML = count;
  if(count <= 0){
    p.innerHTML = "BOOM!";
  }
  count--;

}
