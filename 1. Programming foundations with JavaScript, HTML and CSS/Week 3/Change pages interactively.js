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

function changeColor() {
  var div1 = document.getElementById("d1");
  var div2 = document.getElementById("d2");
  
  div1.className = "blueback";
  div2.className = "redback";
}

function changeText() {
  var div1 = document.getElementById("d1");
  var div2 = document.getElementById("d2");
  
  div1.innerHTML = "Hello";
  div2.innerHTML = "Goodbye";
}