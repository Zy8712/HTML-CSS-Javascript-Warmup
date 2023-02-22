/* Task 1 - write your code here */
var current = 0;
function buttonClick(val){
  if(current != 0){
    var stringButton0 = "b" +current;
    var getButton0 = document.getElementById(stringButton0);
    getButton0.innerHTML ="OFF";
    getButton0.style.color = "black";
  }
  var lightImage = document.getElementById("light");
  var images = ["light_0.jpg", "light_1.jpg", "light_2.jpg", "light_3.jpg", "light_4.jpg", "light_5.jpg"];
  lightImage.src = images[val];
  var stringButton = "b" +val;
  var getButton = document.getElementById(stringButton);
  getButton.innerHTML ="ON";
  getButton.style.color = "red";
  current = val;
}
