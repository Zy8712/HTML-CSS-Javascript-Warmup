/* write your code here */
window.onload = function(){
  var greenButton = document.getElementById("gr");
  greenButton.onclick = makeGreen;
  var blueButton = document.getElementById("bl");
  blueButton.onclick = makeBlue;
  var monoButton = document.getElementById("mn");
  monoButton.onclick = makeMono;
  var sansserifButton = document.getElementById("ss");
  sansserifButton.onclick = makeSansSerif;
  var serifButton = document.getElementById("sf");
  serifButton.onclick = makeSerif;
  var plusButton = document.getElementById("sPlus");
  plusButton.onclick = makePlus;
  var minusButton = document.getElementById("sMinus");
  minusButton.onclick = makeMinus;
  var refreshButton = document.getElementById("ref");
  refreshButton.onclick = refreshPage;

}

function makeGreen(){
  var text = document.getElementById("paragraph");
  text.style.color = "green";
}

function makeBlue(){
  var text = document.getElementById("paragraph");
  text.style.color = "blue";
}

function makeMono(){
  var text = document.getElementById("paragraph");
  text.style.fontFamily = "monospace";
}

function makeSansSerif(){
  var text = document.getElementById("paragraph");
  text.style.fontFamily = "sans-serif";
}

function makeSerif(){
  var text = document.getElementById("paragraph");
  text.style.fontFamily = "serif";
}

function makePlus(){
  var text = document.getElementById("paragraph");
  // getComputedStyle returns an object containing all the CSS properties of an element
  var style = window.getComputedStyle(text, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  text.style.fontSize = (fontSize + 1) + 'px';
}

function makeMinus(){
  var text = document.getElementById("paragraph");
  // getComputedStyle returns an object containing all the CSS properties of an element
  var style = window.getComputedStyle(text, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  text.style.fontSize = (fontSize - 1) + 'px';
}

function refreshPage(){
  location.reload();
}
