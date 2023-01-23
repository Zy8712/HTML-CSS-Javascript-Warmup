/* write your code here */
window.onload = function(){
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var button3 = document.getElementById("button3");
  var button4 = document.getElementById("button4");
  var button5 = document.getElementById("button5");
  var button6 = document.getElementById("button6");
  var button7 = document.getElementById("button7");
  var button8 = document.getElementById("button8");
  button1.onclick = myFunction1;
  button2.onclick = myFunction2;
  button3.onclick = myFunction3;
  button4.onclick = myFunction4;
  button5.onclick = myFunction5;
  button6.onclick = myFunction6;
  button7.onclick = myFunction7;
  button8.onclick = myFunction8;
}

function myFunction1 (){
  var p = document.getElementById("paragraph");
  p.style.color = "Green";
}

function myFunction2 (){
  var p = document.getElementById("paragraph");
  p.style.color = "Blue";
}

function myFunction3 (){
  var p = document.getElementById("paragraph");
  p.style.fontFamily = "Monospace";
}

function myFunction4 (){
  var p = document.getElementById("paragraph");
  p.style.fontFamily = "Sans-Serif";
}

function myFunction5 (){
  var p = document.getElementById("paragraph");
  p.style.fontFamily = "Serif";
}

function myFunction6 (){
  var p = document.getElementById("paragraph");
  var style = window.getComputedStyle(p, null).getPropertyValue("font-size");
  var fontSize = parseFloat(style);
  p.style.fontSize = (fontSize + 1) + "px";
}

function myFunction7 (){
  var p = document.getElementById("paragraph");
  var style = window.getComputedStyle(p, null).getPropertyValue("font-size");
  var fontSize = parseFloat(style);
  p.style.fontSize = (fontSize - 1) + "px";
}

function myFunction8 (){
  location.reload();
}
