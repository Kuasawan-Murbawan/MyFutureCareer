function submit(){
    alert("Your feedback has been sent. Thank you for your suggestions.")
}

function validateForm() {
    var fn = document.forms["myForm"]["fname"].value;
    var ln = document.forms["myForm"]["lname"].value;
    var mail = document.forms["myForm"]["email"].value;
    var sub = document.forms["myForm"]["comment"].value;
  //username validation
    if (fn == ""){
      alert("Please insert your first name!");
      return false;
    }
  
   else if (ln == ""){
    alert("Please insert your last name");
    return false;
  }
  
  else if (mail == ""){
    alert("Please insert your email");
    return false;
  }
  
  else if (sub == ""){
    alert("Please elaborate your comments");
    return false;
  }

  else{
      submit();
  }
  }

  window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  })