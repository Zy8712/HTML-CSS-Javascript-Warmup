/* write your code here */
window.onload = function(){
  var greenButton = document.getElementById("greenText");
  greenButton.onclick = greenFunction;
  var blueButton = document.getElementById("blueText");
  blueButton.onclick = blueFunction;
  var monoButton = document.getElementById("monoText");
  monoButton.onclick = monoFunction;
  var sansButton = document.getElementById("sansText");
  sansButton.onclick = sansFunction;
  var serifButton = document.getElementById("serifText");
  serifButton.onclick = serifFunction;
  var plusButton = document.getElementById("plusText");
  plusButton.onclick = plusFunction;
  var minusButton = document.getElementById("minusText");
  minusButton.onclick = minusFunction;
  var refreshButton = document.getElementById("refresh");
  refreshButton.onclick = refreshFunction;
}

function greenFunction(){
  var text = document.getElementById("paragraph");
  text.style.color = "green";
}

function blueFunction(){
  var text = document.getElementById("paragraph");
  text.style.color = "blue";
}

function monoFunction(){
  var text = document.getElementById("paragraph");
  text.style.fontFamily = "monospace";
}

function sansFunction(){
  var text = document.getElementById("paragraph");
  text.style.fontFamily = "sans-serif";
}

function serifFunction(){
  var text = document.getElementById("paragraph");
  text.style.fontFamily = "serif";
}

function plusFunction(){
  var text = document.getElementById("paragraph");
  var size = window.getComputedStyle(text, null).getPropertyValue("font-size");
  var fontSize = parseFloat(size);
  text.style.fontSize = (fontSize + 1) + "px";
}

function minusFunction(){
  var text = document.getElementById("paragraph");
  var size = window.getComputedStyle(text, null).getPropertyValue("font-size");
  var fontSize = parseFloat(size);
  text.style.fontSize = (fontSize - 1) + "px";
}

function refreshFunction(){
  location.reload();
}
