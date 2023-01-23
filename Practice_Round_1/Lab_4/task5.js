/* Task5.js - Add your Java Script Code Here */
function todayDate(){
  var p = document.getElementById("mydata");
  var myDate = new Date();
  var date = myDate.getDate();
  var day = myDate.getDay();
  var month = myDate.getMonth();
  var year = myDate.getFullYear();
  var week = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  var monthSelect = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  p.innerHTML = "Today is the "+date +" ("+week[day]+") " +monthSelect[month] +" "+year;
}
