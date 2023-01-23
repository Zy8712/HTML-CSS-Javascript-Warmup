/* Lab 6 - Task 3.  This is related to DOM (not Events), but you can
   still use the prototype library */
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
window.onload= function()
{
  var option1 = null;
  for (var i = 0 ; i < day.length; i++)
  {
    option1 = new Option (day[i]);
    $("days").appendChild(option1);
  }
  var option2 = null;
  for (var i = 0 ; i < month.length; i++)
  {
    option2 = new Option (month[i]);
    $("months").appendChild(option2);
  }
  var option3 = null;
  for (var i = 1970 ; i < 2019; i++)
  {
    option3 = new Option (i);
    $("years").appendChild(option3);
  }
}
