function doBlue() {
  var left = document.getElementById("d1");
  
  // Get context and clear it
  ctx = left.getContext("2d");
  ctx.clearRect(0, 0, left.width, left.height);
  
  // Set background color
  left.style.backgroundColor = "blue";
}

function doRed() {
  var left = document.getElementById("d1");
  left.style.backgroundColor = "red";
  
  // Add rectangle
  var ctx = left.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(10, 10, 80, 50);
  ctx.fillStyle = "yellow";
  ctx.fillRect(100, 10, 80, 50);
  
  // Add text
  ctx.font = "times";
  ctx.fillText("Hello", 15, 25);
  
}