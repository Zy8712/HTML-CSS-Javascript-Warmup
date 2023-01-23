/* Task 1 - write your code here */
function changeLight(num){
    var images = ["light_1.jpg", "light_2.jpg", "light_3.jpg", "light_4.jpg", "light_5.jpg"];
    document.getElementById("light").src = images[num-1];
}
