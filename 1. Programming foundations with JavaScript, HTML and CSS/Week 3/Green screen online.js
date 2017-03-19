// NOTE: A good idea to initialize empty variables to null, for checking purposes
var fgImage = null;
var bgImage = null;
var fgCanvas = document.getElementById("c1");
var bgCanvas = document.getElementById("c2");

function loadFgImage() {
  var file = document.getElementById("fgFile");
  fgImage = new SimpleImage(file);
  fgImage.drawTo(fgCanvas);
}

function loadBgImage() {
  var file = document.getElementById("bgFile");
  bgImage = new SimpleImage(file);
  bgImage.drawTo(bgCanvas);
}

function checkSizes() {
  fgImageSize = fgImage.getWidth() * fgImage.getHeight();
  bgImageSize = bgImage.getWidth() * bgImage.getHeight();
  if (fgImageSize != bgImageSize) {
    alert(fgImageSize + " " + bgImageSize);
    alert('images differ in size, please upload similar sizes');
    return false;
  }
  return true;
}

function createComposite() {
    // Create blank image with dimensions of fgImage
  var composite = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
  for (var pixel of fgImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    // If green value exceeds threshold, grab background pixel
    var greenThreshold = 240;
    if (pixel.getGreen() > greenThreshold) {
      var bgPixel = bgImage.getPixel(x, y);
      composite.setPixel(x, y, bgPixel);
    } else {
      // Otherwise, grab foreground pixel
      composite.setPixel(x, y, pixel);
    }
  }
  return composite;
}

function doGreenScreen() {
  // Check if images have been loaded before continuing to create composite
  // NOTE: I think .complete() is a function written by Duke for their SimpleImage object
  if (fgImage == null || !fgImage.complete()) {
    alert("Foreground image has not been loaded");
  }
  if (bgImage == null || !bgImage.complete()) {
    alert("Background image has not been loaded");
  } 
  checkSizes();
  clearCanvas();
  var output = createComposite();
  output.drawTo(fgCanvas);
}

function clearCanvas() {
  doClear(fgCanvas);
  doClear(bgCanvas);
}

function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}

