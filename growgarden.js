// A2Z F17
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F17

console.log("growgarden is running");

var roseGrow = document.getElementsByClassName("wXeWr islib nfEiy mM5pbd");
var avatar = document.getElementsByClassName('avatar');

// Call swapImg() for all of these DOM elements
for (var i = 0; i < roseGrow.length; i++) {
  swapImg(roseGrow[i]);
}

for (var j = 0; i < avatar.length; j++) {
  swapImg(avatar[j]);
}

function swapImg(img) {
  var newimg = chrome.extension.getURL("images/cornflower.jpg");
  img.src = newimg;
}
