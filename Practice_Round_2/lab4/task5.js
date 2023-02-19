/* Task5.js - Add your Java Script Code Here */
function myFunction(){
  var p = document.getElementById("mydata");
  var week = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var myDate = new Date();
  var dayMonth = myDate.getDate(); // gets day of month (1-31)
  var dayWeek = myDate.getDay(); // gets day of week (0-6)
  var myMonth = myDate.getMonth(); // gets month (0-11)
  var myYear = myDate.getFullYear(); // gets year
  p.innerHTML = "Today is the " + dayMonth +" (" + week[dayWeek] +") " + month[myMonth] +" " +myYear;
}
