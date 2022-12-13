function doWhichKey(e) {
  e = e || window.event;
  let charCode = e.keyCode || e.which;
  return String.fromCharCode(charCode);
}

window.addEventListener('keypress', function (e) {
  console.log("You pressed " + doWhichKey(e));
}, false);
