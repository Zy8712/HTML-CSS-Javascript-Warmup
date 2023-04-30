/* Lab 6, Task 2.  Use the prototype library */
window.onload = function(){
  $("input1").observe("keydown", clearVals);
  $("input2").observe("keydown", clearVals);
  $("input3").observe("keydown", clearVals);
  $("submitButton").observe("click", submitForm);
  $("reset").observe("click", resetForm);
}

function clearVals(){
  this.value = "";
  this.stopObserving("keydown");
}

function submitForm(){
  if($("input1").value != "" && $("input2").value != "" && $("input3").value != ""){
    $("myForm").submit();
  }
  else{
    $("ErrorMessage").innerHTML = "One of your fields has an error!";
  }
}

function resetForm(){
  location.reload();
}
