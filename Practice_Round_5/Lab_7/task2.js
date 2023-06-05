/* Lab 6 - Task 2  */
 window.onload = function() {
  /* Please have a look at the HTML file for the ids of the input elements */
  /* add in your event handlers here */
  /* you are highly encourage to look at the lecture notes and code on JS and Forms */
 $("userid").observe("keyup", checkID);
 $("code").observe("keyup", checkCourse);
 $("number").observe("keyup", checkNum);
 $("submitButton").observe("click", submitForm);
}

 function checkID()
 {
   var re = /^[A-Z]+[0-9]*/i;
   var testString = $("userid").value;
   if (re.test(testString) == true)
   {
     $("userid").nextElementSibling.innerHTML = "CORRECT";
   }
   else {
     $("userid").nextElementSibling.innerHTML = "INCORRECT";
   }
 }

 function checkCourse()
 {
   var course = ["EECS", "ESSE", "MATH", "HIST", "CHEM", "BIO"];
   var testString = $("code").value;
   testString = testString.toUpperCase();
   if (course.include(testString) == true)
   {
     $("code").nextElementSibling.innerHTML = "CORRECT";
   }
   else {
     $("code").nextElementSibling.innerHTML = "INCORRECT";
   }
 }

 function checkNum()
 {
   var re = /^[0-9][0-9][0-9][0-9]$/;
   var testString = $("number").value;
   if (re.test(testString) == true)
   {
     $("number").nextElementSibling.innerHTML = "CORRECT";
   }
   else {
     $("number").nextElementSibling.innerHTML = "INCORRECT";
   }
 }

  function submitForm()
  {
    var spans = document.getElementsByClassName("message");
    var valid = true;

    for (var i=0; i < spans.length; i++)
    {
      if (spans[i].innerHTML === "INCORRECT")
      {
        valid = false;
      }
    }
    if (valid)
    {
      $("myForm").submit();
    }
    else {
      alert("Form is incorrect.");
    }
  }
