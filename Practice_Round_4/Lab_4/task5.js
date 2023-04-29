/* Task5.js - Add your Java Script Code Here */
function myFunction(){
  var week = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var p = document.getElementById("mydata");
  var myDate = new Date();

  var thisDate = myDate.getDate();
  var thisDay = week[myDate.getDay()];
  var thisYear = myDate.getFullYear();
  var thisMonth = month[myDate.getMonth()];

  p.innerHTML = "Today is the " +thisDate +" (" +thisDay +") " +thisMonth +" " +thisYear;

}
