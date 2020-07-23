function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) indexMin = j;
    }
    [arr[indexMin], arr[i]] = [arr[i], arr[indexMin]];
  }
  console.log(arr);
}

// selectionSort([4, 2, 0, 45, 1, 4, 6, 9]);

function intersectionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    console.log(arr[i], arr[j + 1]);
    arr[j + 1] = currentValue;
  }
  // console.log("intersection sort : ", arr);
}

intersectionSort([4, 2, 0, 45, 1, 4, 6, 9]);

// Implement bubble sort
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  console.log(arr);
}

// bubbleSort([4, 2, 0, 45, 1, 4, 6, 9]);
