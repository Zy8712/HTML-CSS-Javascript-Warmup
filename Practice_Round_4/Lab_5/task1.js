/* Task 1 - write your code here */
var prev = 0;
function myFunction(val){
  var lightImages = ["./light_1.jpg", "./light_2.jpg", "./light_3.jpg", "./light_4.jpg", "./light_5.jpg"];
  var imageChange = document.getElementById("light");
  imageChange.src = lightImages[val-1];
  var buttonID = "on" +val;
  document.getElementById(buttonID).innerHTML = "ON";
  document.getElementById(buttonID).style.backgroundColor = "red";
  if (prev != 0){
    var buttonID2 = "on"+prev;
    document.getElementById(buttonID2).innerHTML = "OFF";
    document.getElementById(buttonID2).style.backgroundColor = "white";
  }
  prev = val;

}
