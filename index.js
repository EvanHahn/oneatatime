function oneAtATime(fn) {

  var released = true;

  function release() {
    released = true;
  }

  return function() {
    if (released) {
      released = false;
      try {
        fn(release);
      } catch (err) {
        release();
        throw err;
      }
    }
  };

}

if (typeof module !== 'undefined') {
  module.exports = oneAtATime;
}
