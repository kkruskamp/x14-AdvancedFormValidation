function validate(){

  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if (userEntered.length < 6) {
  document.getElementById("usernameError").innerHTML="Username can't be shorter than 6!";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if (userEntered.length > 20) {
    document.getElementById("usernameError").innerHTML="Username too long!";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if (passEntered == userEntered) {
    document.getElementById("usernameError").innerHTML="Username cant be the password!";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if ( /\s/.test(userEntered) ) {
    document.getElementById("usernameError").innerHTML="Username cant have spaces!";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else {
    document.getElementById("usernameGroup").classList.add("has-success");
  }

  if (passEntered.match(/password/i)) {
  document.getElementById("passwordError").innerHTML="Password can't be password!";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.add("has-error");
  }

  else if (passEntered == userEntered) {
    document.getElementById("passwordError").innerHTML="Password can't match username!";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  else {
    document.getElementById("usernameGroup").classList.add("has-success");
  }
}
