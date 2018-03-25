// example 1: simple array into object
// with forEach
function intoObj1(arr) {
  let obj = {};
  let i = 0;

  arr.forEach(el => {
    obj[i] = el;
    i++;
  });

  return obj;
}
// with a for loop
function intoObj2(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }

  return obj;
}

intoObj1([1,2,3,4,5]);

// example 2: turn array of key/value pair objects into an object
function intoObj3(arr) {
  let result = arr.reduce((obj, element) => {
    obj[element.key] = element.value;
    return obj;
  }, {});

  return result;
}

intoObj3([{key: 1, value: 1}, {key: 2, value: 2}, {key: 3, value: 3}]);
