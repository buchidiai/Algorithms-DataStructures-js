// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];

  for (const item of array) {
    const lastElementInChunked = chunked[chunked.length - 1]; //get last element/array of chunked array (array in the array)
    //only one has to be true for if statement to run

    //check if last element is undefined or its size is the same as param size (1st go around will evaluate to undefined so it will create a new array)
    // it will go to else block if size === param size

    if (!lastElementInChunked || lastElementInChunked.length === size) {
      //createn push new array to chunked
      chunked.push([item]);
    } else {
      //push item to end one array in chunked
      lastElementInChunked.push(item);
    }
  }

  return chunked;
}

function chunk1(array, size) {
  let chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, (index += size)));
  }

  return chunked;
}

chunk1([2, 131, 23, 3, 4, 65, 43, 232, 45, 43, 32], 5);

module.exports = chunk;
