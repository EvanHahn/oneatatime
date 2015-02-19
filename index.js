function oneAtATime(fn) {

  var released = true;

  function release() {
    released = true;
  }

  return function() {
    if (released) {
      fn(release);
      released = false;
    }
  };

}

if (typeof module !== 'undefined') {
  module.exports = oneAtATime;
}
