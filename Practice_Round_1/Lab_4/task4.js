/* Task4.js - Add your Java Script Code Here */
function diceRoll(){
  var p = document.getElementById("mydata");
  var value1 = Math.round(Math.random() * 6);
  var value2 = Math.round(Math.random() * 6);
  p.innerHTML = "Dice rolls are \""+value1 +"\"\""+value2+"\"";
  if(value1 == value2){
    alert("DOUBLES!");
  }
}
