function greet() {
  alert("hello");
}

function greetConfirm() {
  var msg;
  var choice = confirm("Press a button!");
  if (choice == true) {
    msg = "You pressed OK!";
    alert(msg);
  } else {
    msg = "Are you sure you want to cancel?";
    alert(msg);
  }
}