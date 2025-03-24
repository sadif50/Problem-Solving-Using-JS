const arr = [0, 0, 1, 1, 1, 2, 3, 3, 4, 4, 4, 4, 5, 6, 8, 9, 10, 10, 11, 25, 25]

const removeDuplicates = (array) => {
  let currentIndex = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      arr[currentIndex] = arr[i]
      currentIndex += 1;
    }
  }
  arr.length = currentIndex
}

removeDuplicates(arr)
console.log(arr)