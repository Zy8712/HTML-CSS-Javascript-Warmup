/* write your code here */
window.onload = function(){
  var greenButton = document.getElementById("gr");
  greenButton.onclick = greenText;
  var blueButton = document.getElementById("bl");
  blueButton.onclick = blueText;
  var monoButton = document.getElementById("mn");
  monoButton.onclick = monoText;
  var sansserifButton = document.getElementById("ss");
  sansserifButton.onclick = sansserifText;
  var serifButton = document.getElementById("s");
  serifButton.onclick = serifText;
  var plusButton = document.getElementById("sPlus");
  plusButton.onclick = plusText;
  var minusButton = document.getElementById("sMinus");
  minusButton.onclick = minusText;
  var refreshButton = document.getElementById("ref");
  refreshButton.onclick = refreshText;
}


function greenText(){
  var p = document.getElementById("paragraph");
  p.style.color = "green";
}

function blueText(){
  var p = document.getElementById("paragraph");
  p.style.color = "blue";
}

function monoText(){
  var p = document.getElementById("paragraph");
  p.style.fontFamily = "monospace"
}

function sansserifText(){
  var p = document.getElementById("paragraph");
  p.style.fontFamily = "sans-serif"
}

function serifText(){
  var p = document.getElementById("paragraph");
  p.style.fontFamily = "serif"
}

function plusText(){
  var p = document.getElementById("paragraph");
  var style = window.getComputedStyle(p, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  p.style.fontSize = (fontSize + 1) + 'px';
}

function minusText(){
  var p = document.getElementById("paragraph");
  var style = window.getComputedStyle(p, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  p.style.fontSize = (fontSize - 1) + 'px';

}

function refreshText(){
  location.reload();
}
