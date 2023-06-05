/* Task5.js - Add your Java Script Code Here */
function myFunction(){
  var p = document.getElementById("mydata");

  var monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var week = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  var dateObj = new Date();
  var day = dateObj.getDay(); // day of the week
  var date = dateObj.getDate(); // day of the month
  var month = dateObj.getMonth(); // month
  var year = dateObj.getFullYear(); // year

  p.innerHTML = "Today is the " +date +" (" +week[day] +") " +monthList[month] +" " +year;
}
