function findKthMax(arr, k) {
  // Sort the array in descending order
  arr.sort(function(a, b) {
    return b - a;
  });

  // Return the k-th maximum element
  return arr[k - 1];
}

// Example usage
var array = [10, 5, 8, 3, 2, 9];
var k = 5;
var kthMax = findKthMax(array, k);
console.log(kthMax);