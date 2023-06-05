/* Task6.js - Add your Java Script Code Here */
var i = 20;
function myFunction(){
  var p = document.getElementById("mydata");
  if(i <= 0){
    p.innerHTML = "BOOM!";
  }
  else{
    p.innerHTML = i;
    i = --i; // must be --i not i-- or else it'll keep assigning 20 to i, since it decrements after assigning the value 
  }
}
