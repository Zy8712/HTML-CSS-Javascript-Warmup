/* Task 1 - write your code here */
var curr = 0;
function myFunction(num){
  var lights = ["./assets/light_0.jpg", "./assets/light_1.jpg", "./assets/light_2.jpg", "./assets/light_3.jpg", "./assets/light_4.jpg", "./assets/light_5.jpg"];
  var lightImage = document.getElementById("light");
  lightImage.src = lights[num];

  if(curr != 0){
    // change text of button for previous on light from ON to OFF
    var srcButton1 = "b"+curr;
    var buttonPrev = document.getElementById(srcButton1);
    buttonPrev.innerHTML = "OFF";
    buttonPrev.style.backgroundColor = "white";
  }

  // change text of button for new on light from OFF to ON
  var srcButton2 = "b"+num;
  var buttonCurr = document.getElementById(srcButton2);
  buttonCurr.innerHTML = "ON";
  buttonCurr.style.backgroundColor = "red";

  curr = num; // change value for current indicating a new light being on
}
