// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = (sum / arr.length);
    if (max < arr[i]) max = arr[i]; 
    if (min > arr[i]) min = arr[i];
  }
 return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}
getArrayParams();

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
   sum = arr.reduce((sum, value) => sum + value);
  }
    return sum;    
};

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let dif = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i]; 
    if (min > arr[i]) min = arr[i];
    dif = Math.abs(max - min);
  }
 return dif;
};

function makeWork(arrOfArr, func) {
  let maxArr = 0;
  let funArr = func;
  for (let i = 0; i < arrOfArr.length; i++) {
    for (let j = 0; j < arrOfArr[i].length; j++) {
      if (maxArr < funArr(arrOfArr[i])) maxArr = funArr(arrOfArr[i]);
    }
   // console.log(funArr);
  }
  console.log(maxArr);
  return maxArr;
};

makeWork();

/*
console.log("worker");
console.log(worker([1, 2, 3])); // 6
console.log(worker([4, 5, 6])); // 15
let arrOfArr = [[1, 2, 3], [4, 5, 6]];
makeWork(arrOfArr, worker); // 15

console.log(worker([10, 10, 11])); // 31
console.log(worker([20, 10])); // 30
arrOfArr = [[10, 10, 11], [20, 10]];
makeWork(arrOfArr, worker); // 31

console.log(worker([0, 0, 0])); // 0
console.log(worker([-1, -100])); // -101
arrOfArr = [[0, 0, 0], [-1, -100]];
makeWork(arrOfArr, worker); // 0

console.log("worker2");
console.log(worker2([-10, -20, -40])); // -40 - (-10) = -30 => 30
console.log(worker2([10, 20, 30])); // 30 - 10 = 20
arrOfArr = [[-10, -20, -40], [10, 20, 30]];
makeWork(arrOfArr, worker2); // 30

console.log(worker2([0, 0, 0])); // 0 - 0 = 0
console.log(worker2([-1, -99])); // -99 - (-1) = -98 => 98
arrOfArr = [[0, 0, 0], [-1, -99]];
makeWork(arrOfArr, worker2); // 98
*/