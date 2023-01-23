/* Lab 6 - Task 4 - Use prototype library. Also, look at the DOM lecture
   to remember how to remove elements  */
window.onload = function()
{
  createBoxes();
  $("myButton").observe("click", createBoxes);
}
function createBoxes()
{
 var colors = ["red", "green", "blue", "silver", "orange"];
 for (var i=0; i<100; i++)
{
  var newP = document.createElement("p");
  var x = Math.floor(Math.random()*400);
  var y = Math.floor(Math.random()*400);
  var top = x + "px";
  var left = y + "px";
  newP.style.top  = top;
  newP.style.left  = left;
  newP.style.backgroundColor = colors[Math.floor(Math.random()*5)];
  newP.observe("mouseover", remove);
  $("container").appendChild(newP);
 }
}
function remove()
{
 var div = document.getElementById("container");
 var n = div.getElementsByTagName("p").length;
 if (n == 1)
 {
  alert("Last one!");
 }
 $("container").removeChild(this);
}
