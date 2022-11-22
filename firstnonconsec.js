const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])

function firstNonConsecutive(arr) {
  for (i = 0; i <= arr.length; i++) {
    if ((arr[i + 1] - arr[i]) != 1 && (arr[i + 1] - arr[i]) != (-1)) {
      return arr[i];
    } else {
      return null;
    }
  }
}

console.log(firstNonConsecutive(first));