/* write your code here */
window.onload = function(){
  var greenButton = document.getElementById("gr");
  greenButton.onclick = changeGreen;
  var blueButton = document.getElementById("bl");
  blueButton.onclick = changeBlue;
  var monoButton = document.getElementById("mn");
  monoButton.onclick = changeMono;
  var sansserifButton = document.getElementById("ss");
  sansserifButton.onclick = changeSansSerif;
  var serifButton = document.getElementById("sf");
  serifButton.onclick = changeSerif;
  var plusSizeButton = document.getElementById("plus");
  plusSizeButton.onclick = changePlus;
  var minusSizeButton = document.getElementById("minus");
  minusSizeButton.onclick = changeMinus;
  var refreshButton = document.getElementById("ref");
  refreshButton.onclick = refreshPage;
}

function changeGreen(){
  document.getElementById("paragraph").style.color = "green";
}

function changeBlue(){
  document.getElementById("paragraph").style.color = "blue";
}

function changeMono(){
  document.getElementById("paragraph").style.fontFamily = "monospace";
}

function changeSansSerif(){
  document.getElementById("paragraph").style.fontFamily = "sans-serif";

}

function changeSerif(){
  document.getElementById("paragraph").style.fontFamily = "serif";
}

function changePlus(){
  var p = document.getElementById("paragraph");
  var style = window.getComputedStyle(p, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  p.style.fontSize = (fontSize + 1) + 'px';
}

function changeMinus(){
  var p = document.getElementById("paragraph");
  var style = window.getComputedStyle(p, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  p.style.fontSize = (fontSize - 1) + 'px';
}

function refreshPage(){
  location.reload();
}
