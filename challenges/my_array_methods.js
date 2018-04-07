// Write an Array function, myEach(callback), that passes each element to
// `callback` and does not modify the original array. Do NOT call the built-in
// Array#forEach method in your implementation.
Array.prototype.myEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// Write an Array method, myFilter(callback), that returns an array made up of
// the elements in the original array for which `callback` returns `true`.
// Use the Array#myEach method you defined above. Do NOT call the built-in
// Array#forEach or Array#filter methods in your implementation.

Array.prototype.myFilter = function(callback) {
  var result = [];

  this.myEach((el) => {
    if (callback(el)) {
      result.push(el);
    }
  });

  return result;
};
