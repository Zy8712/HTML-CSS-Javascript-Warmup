/* Task1.js - Add your Java Script Code Here */
function myFunction(){
  var p = document.getElementById("mydata");
  var num = Math.floor(Math.random() * 100);
  // set p.innerHTML equal to YES or NO
  if(num < 50){
    p.innerHTML = "YES";
  }
  else{
    p.innerHTML = "NO";
  }
}
