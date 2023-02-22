/* Lab 6 - Task 3.  This is related to DOM (not Events), but you can
   still use the prototype library */
window.onload = function(){
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  for(var i = 0; i < days.length; i++){
    var newDay = document.createElement("option");
    newDay.innerHTML = days[i];
    $("days").appendChild(newDay);
  }
  for(var j = 0; j < months.length; j++){
    var newMonth = document.createElement("option");
    newMonth.innerHTML = months[j];
    $("months").appendChild(newMonth);
  }
  for(var k = 1970; k <= 2018; k++){
    var newYear = document.createElement("option");
    newYear.innerHTML = k;
    $("years").appendChild(newYear);
  }
}
