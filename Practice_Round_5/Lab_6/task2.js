/* Lab 6, Task 2.  Use the prototype library */
window.onload = function(){
  $("input1").observe("keydown", clearBox);
  $("input2").observe("keydown", clearBox);
  $("input3").observe("keydown", clearBox);
  $("submitButton").observe("click", submitForm);
  $("resetButton").observe("click", resetForm);
}

function clearBox(){
  this.value = "";
  this.stopObserving("keydown");
}

function submitForm(){
  if($("input1").value != "" && $("input2").value != "" && $("input3").value != ""){
    $("form").submit();
  }
  else{
    $("ErrorMessage").innerHTML = "One of your fields has an error!";
  }
}

function resetForm(){
  location.reload();
}
