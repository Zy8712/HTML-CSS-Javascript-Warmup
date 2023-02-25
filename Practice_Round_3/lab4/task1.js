/* Task1.js - Add your Java Script Code Here */
function myFunction(){
  var p = document.getElementById("mydata");
  // set p.innerHTML equal to YES or NO
  var ranNum = Math.random();
  if(ranNum < 0.5){
    p.innerHTML = "NO";
  }
  else{
    p.innerHTML = "YES";
  }
}
