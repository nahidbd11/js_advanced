/*****
 * todo:Binary search
 * *array must be sorted
 * *compare key with mid index of array
 * *whem mid value == key value then return the index
 */

let arr = [25, 27, 29, 30, 35, 38, 40, 50, 60];

function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (key == arr[mid]) return mid;
    else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

// console.log(binarySearch([25,27,29,30,35,38,40,50,60],38));

//recursive binary search

function recursiveBinarySearch(arr, key, start, end) {
  let mid = Math.floor((start + end) / 2);
  if (start > end) return -1;
  if (key == arr[mid]) return mid;
  else if (key > arr[mid]) {
    return recursiveBinarySearch(arr, key, mid + 1, end);
  } else {
    return recursiveBinarySearch(arr, key, start, mid - 1);
  }
}

// console.log(recursiveBinarySearch(arr,38,0,8));

// timeComplexity-> O(logN)
// ============================

/*******
 *
 * todo:merge sort
 * time-> O(nLogN)
 */

let firstSortedArr = [30, 35, 48, 50];
let secondSortedArr = [50, 90, 92, 95, 99];

function twoWayMergeSort(firstSortedArr, secondSortedArr) {
  let i = 0;
  let j = 0;
  let k = 0;
  let sortedArr = [];
  //sort and keep element to another array
  while (i < firstSortedArr.length && j < secondSortedArr.length) {
    if (firstSortedArr[i] < secondSortedArr[j]) {
      sortedArr[k] = firstSortedArr[i];
      i += 1;
    } else {
      sortedArr[k] = secondSortedArr[j];
      j += 1;
    }
    k += 1;
  }
  //check remaining element of first array
  while (i < firstSortedArr.length) {
    sortedArr[k] = firstSortedArr[i];
    i++;
    k++;
  }

  //check remaining element of second array
  while (j < secondSortedArr.length) {
    sortedArr[k] = secondSortedArr[j];
    j++;
    k++;
  }

  return sortedArr;
}

// console.log(twoWayMergeSort(firstSortedArr, secondSortedArr));

function merge_Sort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let rightArr = [];
  let leftArr = [];
  for (let i = 0; i < mid; i++) {
    leftArr[i] = arr[i];
  }

  for (let j = mid; j < arr.length; j++) {
    rightArr[j - mid] = arr[j];
  }

  return twoWayMergeSort(merge_Sort(leftArr), merge_Sort(rightArr));
}

// console.log(merge_Sort([10, 9, 5, 2, -6, 7, 15]));

// time complexity->O(NlogN)

//=========================
/*****
 *
 * todo:Heapify
 * time complexity->O(N)
 */

function heapifyArr(arr, heapSize, nodeIndex) {
  if (nodeIndex < 0) return;
  let largestNodeIndex = nodeIndex; //initially assume parent node is the largest element
  let leftChildIndex = 2 * nodeIndex + 1;
  let rightChildIndex = 2 * nodeIndex + 2;

  if (
    leftChildIndex < heapSize &&
    arr[leftChildIndex] > arr[largestNodeIndex]
  ) {
    largestNodeIndex = leftChildIndex;
  }

  if (
    rightChildIndex < heapSize &&
    arr[rightChildIndex] > arr[largestNodeIndex]
  ) {
    largestNodeIndex = rightChildIndex;
  }

  if (largestNodeIndex != nodeIndex) {
    let swapVal = arr[nodeIndex];
    arr[nodeIndex] = arr[largestNodeIndex];
    arr[largestNodeIndex] = swapVal;
    heapifyArr(arr, heapSize, largestNodeIndex);
  }
}

let binaryArr = [1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17];

let ni = Math.floor(binaryArr.length / 2) - 1;

function buildHeap(binaryArr) {
  for (let i = ni; i >= 0; i--) heapifyArr(binaryArr, binaryArr.length, i);
}

buildHeap(binaryArr);

console.log(binaryArr);
//===================================
