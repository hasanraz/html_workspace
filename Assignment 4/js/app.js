//Variable used for the current position of the slider. Initial value is 0.
var current_pos = 0;

//Assigning left and right arrows respectively with queryselector
var slider_img = document.querySelectorAll(".images");

var arrowLeft = document.getElementsByClassName("prev");
var arrowRight = document.getElementsByClassName("next");

//Function to clear out all the images.
function clear() {
  for (let i = 0; i < slider_img.length; i++) {
    slider_img[i].style.display = "none";
  }
}

//Starts the slider. This displays the first image in the carousel.
function carousel_start() {
  clear();
  slider_img[0].style.display = "block";
}

//This will change the image to the previous image
function left_slider() {
  clear(); // First it will clear out the carousal images
  slider_img[current_pos - 1].style.display = "block"; // It decrements the value of current_position insider the slider_img array so that the previous image will be displayed.
  current_pos--;
}

//Similar to left slider
function right_slider() {
  clear();
  slider_img[current_pos + 1].style.display = "block";
  current_pos++;
}

//Adding a click Event listener to the arrow so that we can modify the current position based on what the user has clicked
arrowLeft[0].addEventListener("click", function () {
  if (current_pos === 0) {
    current_pos = slider_img.length;
  }
  left_slider();
});

//Creating an event listener for right arrow

arrowRight[0].addEventListener("click", function () {
  if (current_pos === slider_img.length - 1) {
    current_pos = -1;
  }
  right_slider();
});
