function compareArrays(arr1, arr2) {
  let result = arr1.length == arr2.length && arr1.every((item, i) => item === arr2[i]);
  return result; 
}

function advancedFilter(arr) {
  let resultArr = arr.filter((i) => i > 0 && i % 3 === 0).map((i) => i * 10);
  return resultArr; 
}

