function productExceptSelf(numArray) {
	let product = 1;
	let size = numArray.length;
	let output = [];

  // From first array: [1, 2, 4, 16]
  // The last number in this case is already in the right spot (allows for us)
  // to just multiply by 1 in the next step.
  // This step essentially gets the product to the left of the index at index + 1
	for (let x = 0; x < size; x++) {
		output.push(product);
		product = product * numArray[x];
	}

  // From the back, we multiply the current output element (which represents the product
  // on the left of the index, and multiplies it by the product on the right of the element)
	product = 1;
	
	for (let i = size - 1; i > -1; i--) {
		output[i] = output[i] * product;
		product = product * numArray[i];
	}

  return output;
}
