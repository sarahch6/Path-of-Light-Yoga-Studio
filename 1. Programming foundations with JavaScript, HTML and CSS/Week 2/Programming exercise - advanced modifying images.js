//////////////////////// PART 2 ////////////////////////

var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  // Add red to the left column
  if (x < img.getWidth() / 2) {
    px.setRed(255);
  }
  // Add blue to the bottom row
  if (y > img.getHeight() / 2) {
      px.setBlue(255);
  }
  // Add green to the top right box
  if (x >= img.getWidth() / 2 && y <= img.getHeight() / 2) {
      px.setGreen(255);
  }
}
print (img);


//////////////////////// PART 3 ////////////////////////

// Change rgb components so that the pixel's color is black
function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return pixel;
}

// Add a border of size thickness to the image, covering up part of image
function addBorder(img, thickness) {
    // Go through every pixel in the image
    for (var pixel of img.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        // Set left vertical and upper horizontal borders
        if (x < thickness || y < thickness) {
            pixel = setBlack(pixel);
        }
        // Set right vertical and lower horizontal borders
        if (x >= img.getWidth() - thickness || y >= img.getHeight() - thickness) {
            pixel = setBlack(pixel);
        }
    }
    return img;
}

var img = new SimpleImage("smallpanda.png");
print(addBorder(img, 20));