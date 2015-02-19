one at a time
=============

I made this because I needed something like this:

```js
var sync = oneAtATime(function(done) {

  ajaxPost('/sync', { data: data }, function(err, res) {
    // ...
    done();
  });

});

sync();  // kicks off an AJAX request
sync();  // does nothing because the AJAX request is still going

// time passes and AJAX request completes

sync();  // kicks off a new AJAX request because the previous one completed
```

Still a WIP; haven't quite evaluated whether this is good for me.
