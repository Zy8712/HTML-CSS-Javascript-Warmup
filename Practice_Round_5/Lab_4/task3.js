/* Task3.js - Add your Java Script Code Here */
function myFunction(num){
  var p = document.getElementById("mydata");
  var sum = 0;
  for (var i = 0; i <= num; i++){
    sum += i;
  }
  p.innerHTML = "Result = " +sum;
}
