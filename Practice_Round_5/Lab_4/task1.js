/* Task1.js - Add your Java Script Code Here */
function myFunction()
{
  var p = document.getElementById("mydata");

  // set p.innerHTML equal to YES or NO
  var num = Math.random();
  if (num > 0.5){
    p.innerHTML = "YES";
  }
  else{
    p.innerHTML = "NO";
  }
}
