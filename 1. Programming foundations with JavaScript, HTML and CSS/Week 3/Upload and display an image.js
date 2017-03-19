function upload() {
  // Get file
  var fInput = document.getElementById("fInput");
  // Convert to image
  var image = new SimpleImage(fInput);
  // Get canvas
  var canvas = document.getElementById("c1");
  // Draw image on canvas
  image.drawTo(canvas);
}

