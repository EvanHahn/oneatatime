var oneAtATime = require("..");

var assert = require("assert");

describe("one at a time", function() {

  it("won't call a function while it's running", function(done) {

    var counter = 0;

    var wrapped = oneAtATime(function(release) {
      counter ++;
      setTimeout(release, 10);
    });

    assert.equal(counter, 0);

    wrapped();
    assert.equal(counter, 1);

    wrapped();
    wrapped();
    wrapped();
    assert.equal(counter, 1);

    setTimeout(function() {

      wrapped();
      assert.equal(counter, 2);

      wrapped();
      wrapped();
      wrapped();
      assert.equal(counter, 2);

      setTimeout(function() {
        assert.equal(counter, 2);
        done();
      }, 20);

    }, 20);

  });

});
