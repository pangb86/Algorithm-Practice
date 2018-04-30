function removeDuplicate(arr) {
  let exists = {};
  let outArr = [];
  let elm;

  for (let i = 0; i < arr.length; i++){
    elm = arr[i];

    if (!exists[elm]) {
      outArr.push(elm);
      exists[elm] = true;
   }
  }
  
  return outArr;
}
