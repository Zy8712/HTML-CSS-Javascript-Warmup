/* Task4.js - Add your Java Script Code Here */
function myFunction(){
  var p = document.getElementById("mydata");
  var num1 = Math.ceil(Math.random() * 6);
  var num2 = Math.ceil(Math.random() * 6);
  p.innerHTML = "Dice rolls are \"" +num1 +"\" \"" +num2 +"\"";
  if(num1 == num2){
    alert("DOUBLES!");
  }
}
