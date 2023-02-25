/* Task 1 - write your code here */
var prev = 0;
function myFunction(val){
  var image = document.getElementById("light");
  var images = ["light_0.jpg", "light_1.jpg", "light_2.jpg", "light_3.jpg", "light_4.jpg", "light_5.jpg"];
  image.src = images[val];
  var buttonNum = "b"+val;
  var getButton = document.getElementById(buttonNum);
  getButton.innerHTML = "ON";
  getButton.style.backgroundColor = "red";
  if(prev != 0){
    var buttonNum2 = "b"+prev;
    var getButton2 = document.getElementById(buttonNum2);
    getButton2.innerHTML = "OFF";
    getButton2.style.backgroundColor = "white";
  }
  prev = val
}
