/* Lab 6, Task 2.  Use the prototype library */
window.onload = function(){
  $("input1").observe("keydown", keypressFunction);
  $("input2").observe("keydown", keypressFunction);
  $("input3").observe("keydown", keypressFunction);
  $("submitButton").observe("click", subClick);
}

function keypressFunction(event){
  this.value = "";
}

function subClick(){
  if($("input1").value == "" || $("input2").value == "" || $("input3").value == ""){
    $("ErrorMessage").innerHTML = "One of your fields has an error!";
  }
  else{
    $("myForm").submit();
  }
}
