const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let length = array.length;
  console.log(array, "arrays at begining");

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log(array, "arrays at end");
  return array;
}

bubbleSort(numbers);
console.log(numbers);
