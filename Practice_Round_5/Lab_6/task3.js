/* Lab 6 - Task 3.  This is related to DOM (not Events), but you can
   still use the prototype library */
window.onload = function(){
  var monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  for(var i = 0; i < 7; i++){
    var newDay = document.createElement("option");
    newDay.innerHTML = week[i];
    $("days").appendChild(newDay);
  }

  for(var j = 0; j < 12; j++){
    var newMonth = document.createElement("option");
    newMonth.innerHTML = monthList[j];
    $("months").appendChild(newMonth);
  }

  for(var k = 1970; k <= 2018; k++){
    var newYear = document.createElement("option");
    newYear.innerHTML = k;
    $("years").appendChild(newYear);
  }
}
