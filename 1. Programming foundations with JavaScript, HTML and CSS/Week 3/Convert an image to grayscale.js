// Global image variable
var image;
var grayImage;

function upload() {
  // Get file
  var fInput = document.getElementById("fInput");
  // Convert to image
  image = new SimpleImage(fInput);
  // Save for later
  grayImage = image;
  // Get canvas
  var canvas = document.getElementById("c1");
  // Draw image on canvas
  image.drawTo(canvas);
}

function makeGray() {
  // Loop through pixels in image
  for (var pixel of grayImage.values()) {
    // Get RGB color values
    var red = pixel.getRed();
    var green = pixel.getGreen();
    var blue = pixel.getBlue();
    // Calculate average
    var avg = (red + blue + green) / 3;
    // Set each pixel to value of average
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  // Get canvas
  var canvas = document.getElementById("c2");
  // Draw image on canvas
  grayImage.drawTo(canvas); 
}

