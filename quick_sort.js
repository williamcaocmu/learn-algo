/**
 * đầu tiên chúng ta tạo một function chúng ta muốn sort . Nó sẽ bao gồm left, right .
 */

function quicksort(array, left, right) {
  left = left || 0;
  right = right || array.length - 1;

  const pivot = partitionHoare(array, left, right);

  if (left < pivot - 1) {
    quicksort(array, left, pivot - 1);
  }
  if (right > pivot) {
    quicksort(array, pivot, right);
  }
  console.log(array);
  return array;
}

// function chọn pivot
function partitionHoare(array, left, right) {
  const pivot = Math.floor(Math.random() * (right - left + 1) + left);
  while (left <= right) {
    while (array[left] < array[pivot]) {
      left++;
    }
    while (array[right] > array[pivot]) {
      right--;
    }
    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
    }
  }
  return left;
}

quicksort([3, 5, 1, 6, 2, 6, 3, 2, 5, 23, 5, 23, 64, 541, 2134, 12]);
