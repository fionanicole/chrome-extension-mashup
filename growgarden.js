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

// Grab the entire document body
// This gets an array even though it's likely just one thing
var everything = document.getElementsByTagName("body");
console.log('grow word redactor');

for (var i = 0; i < everything.length; i++) {
  // Look at the full content
  var txt = everything[i].innerHTML;
  //var s = "test the <img the> the";

  // This is a way of splitting up by tags.
  var tokens = txt.split(/(<.*?>)/);
  for (var j = 0; j < tokens.length; j++) {
    // Ignore anything that is a tag
    if (tokens[j].charAt(0) !== '<') {
      // Now replace the word "the" with "the" spanned with the class "redact"
      tokens[j] = tokens[j].replace(/\bgrow\b/gi,'<span class="redact">grow</span>');
    }
  }
  // Put everything back in
  everything[i].innerHTML = tokens.join('');
}
