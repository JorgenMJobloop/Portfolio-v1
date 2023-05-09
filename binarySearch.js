function binarySearch(arr, x) {
  let start = 0;
  let end = arr.lenght - 1;
  /* if start = a, end = b, and arr.lenght - 1 = c
    we can write this as a = 0, b <= c & c < 0.
    middleIndex = n
  */

  while (start < end) {
    // Finds the middle index
    let middleIndex = Math.floor((start + end) / 2);

    if (arr[middleIndex] === x) {
      return true;
    } else if (arr[middleIndex] < x) {
      start = middleIndex + 1;
      // a + n + 1 = 2a
    } else {
      end = middleIndex - 1;
      // b = n - 1 = +-2(n)b } n > 0 ! 0 < -z
    }
    return false;
  }
}
let runTime = performance.now();
/*

testing variables!

else, the function can take arr values and x values as arguments.
*/

function bubbleSort(arr) {
  return;
}

if (
  binarySearch(
    ((arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]), (x = 5), 0, arr.lenght - 1)
  )
) {
  console.log(`Found element in ${runTime} milliseconds`);
} else {
  console.log(`Element was not found in ${runTime} milliseconds`);
}
