var n=1;
window.onload = function()
{
  $("myImg").observe("mouseover", change);
}

function change ()
{
 var x;
 while(n == x)
 {
  x = Math.floor((Math.random() * 4) + 1);
 }
 n = x;
 if (n == 1)
 {
  document.getElementById("myImg").src = "face1.png";
 }
 else if (n == 2)
 {
  document.getElementById("myImg").src = "face2.png";
 }
 else if (n == 3)
 {
  document.getElementById("myImg").src = "face3.png";
 }
 else if (n == 4)
 {
  document.getElementById("myImg").src = "face4.png";
 }
}
