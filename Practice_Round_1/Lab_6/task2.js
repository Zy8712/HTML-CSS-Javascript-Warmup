/* Lab 6, Task 2.  Use the prototype library */
window.onload = function()
{
  $("submitButton").observe("click", submit);
}
function submit()
{
  if ($("input1").value == "" || $("input2").value == "" || $("input3").value == "")
  {
   $("ErrorMessage").innerHTML = "One of your fields has an error!";
  }
  else
  {
   $("myForm").submit();
  }
}
