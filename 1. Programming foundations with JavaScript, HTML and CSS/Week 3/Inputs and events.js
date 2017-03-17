function doBlue() {
  var canvas = document.getElementById("c1");
  canvas.style.backgroundColor = "blue";
}

function doColor() {
  // Get canvas element
  var canvas = document.getElementById("c1");
  // Set background color to color input value
  var colorInput = document.getElementById("clr");
  canvas.style.backgroundColor = colorInput.value;
}

function doSquare() {
  // Get slider element and value
  var slider = document.getElementById("sldr");
  var size = slider.value;
  // Get canvas element and context
  var canvas = document.getElementById("c1");
  var ctx = canvas.getContext("2d");
  // Clear context of previous square
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw the squares
  
  var x = 10;
  var y = 10;
  
  ctx.fillStyle = "black";
  ctx.fillRect(x, y, size, size);
  ctx.fillStyle = "black";
  // Apparently first two variables 
  ctx.fillRect(x + parseInt(size) + 10, y, size, size);
}