/* Task5.js - Add your Java Script Code Here */
function myFunction(){
  var p = document.getElementById("mydata");
  var week = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var todayDate = new Date();
  var myWeek = todayDate.getDay(); // returns the day of the week
  var myDay = todayDate.getDate(); // returns the day of the month
  var myMonth = todayDate.getMonth(); // returns the month
  var myYear = todayDate.getFullYear(); // returns the year
  p.innerHTML = "Today is the " +myDay +" (" +week[myWeek] +") " +months[myMonth] +" " +myYear;
}
