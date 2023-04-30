/* Lab 6 - Task 3.  This is related to DOM (not Events), but you can
   still use the prototype library */
window.onload = function(){
  var weekList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  for(var i = 0; i < weekList.length; i++){
    var newDay = document.createElement("option");
    newDay.innerHTML = weekList[i];
    $("days").appendChild(newDay);
  }

  for(var i = 0; i < monthList.length; i++){
    var newMonth = document.createElement("option");
    newMonth.innerHTML = monthList[i];
    $("months").appendChild(newMonth);
  }

  for(var i = 1970; i <= 2018; i++){
    var newYear = document.createElement("option");
    newYear.innerHTML = i;
    $("years").appendChild(newYear);
  }
}
