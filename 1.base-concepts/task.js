"use strict";
/*№1*/ 
console.log("Задание №1");

function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - (4 * a * c); 
  let x1, x2;
  if (D > 0) {
    console.log("Дискриминант: " + D + " > 0, => 2 корня: ");
    x1 = ((-1) * b + Math.sqrt(D)) / (2 * a);
    x2 = ((-1) * b - Math.sqrt(D)) / (2 * a);  
    arr.push(x1.toFixed(0));   
    arr.push(x2.toFixed(0)); 
    console.log(arr);
  } else if (D === 0) {
    console.log("Дискриминант: " + D + " = 0, => 1 корень: ");
    x1 = ((-1) * b) / (2 * a);
    arr.push(x1.toFixed(0));  
    console.log(arr);
  } else if (D < 0) {
    console.log("Дискриминант: " + D + " < 0, => корней нет");
    console.log(arr);
  }
};
/*
// D > 0 
solveEquation(1, 5, 4);
// D = 0 
solveEquation(1, 2, 1);
// D < 0 
solveEquation(1, 2, 10);
*/

/*№2*/
console.log("\nЗадание №2");

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
