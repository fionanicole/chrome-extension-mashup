// A2Z F17
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F17

// Used this source as well for reference:
// https://stackoverflow.com/questions/42879213/chrome-extension-that-replaces-images-with-other-images

console.log("growgarden is running")

var googleImg = "images/cornflower.jpg",
  images = document.getElementsByTagName("img");

// Call swapImg() for all of these DOM elements
for (var i = 0; i < googleImg.length; i++) {
  swapImg(googleImg[i]);
}

function swapImg(img) {
  var newimg = chrome.extension.getURL("images/cornflower.jpg");
  img.src = newimg;
}
