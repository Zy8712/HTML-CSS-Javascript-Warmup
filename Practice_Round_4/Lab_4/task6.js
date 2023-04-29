/* Task6.js - Add your Java Script Code Here */
var i = 20;
function myFunction(){
  var p = document.getElementById("mydata");
  if(i == 0){
    p.innerHTML = "BOOM!";
  }
  else{
    p.innerHTML = i;
    i = --i;
  }
}
