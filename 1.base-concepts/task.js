"use strict";

/*№1*/ 
console.log("Задание №1");
function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - (4 * a * c); 
  let x1, x2;

  if (D > 0) {
    console.log("Дискриминант: " + D + " > 0, => 2 корня: ");
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);  
    arr.push(Math.trunc(x1));   
    arr.push(Math.trunc(x2)); 
    return arr;
  } else if (D === 0) {
    console.log("Дискриминант: " + D + " = 0, => 1 корень: ");
    x1 = (-b) / (2 * a);
    arr.push(Math.trunc(x1)); 
    return arr;
  } else {
    console.log("Дискриминант: " + D + " < 0, => корней нет");
    return arr;
  }
};
let result = solveEquation();
console.log(result);

/*
// D > 0 
let result1 = solveEquation(1, 5, 4);
console.log(result1);
// D = 0 
let result2 = solveEquation(1, 2, 1);
console.log(result2);
// D < 0 
let result3 = solveEquation(1, 2, 10);
console.log(result3);
*/

/*№2*/
console.log("\nЗадание №2");
function calculateTotalMortgage(percent, contribution, amount, date) {

  let p = percent;
  let c = contribution;
  let a = amount;
  let d = date;
  
//Данные введённые в prompt преобразуются в тип Number.
  p = prompt("Процент", ""); //процентная ставка (percent)
 // alert(typeof p);
  
  alert(typeof p);
  if (typeof percent == "string") {
    parseInt(percent);
    alert(typeof p);
    if (isNaN(percent) == true) {
     return console.log(`Параметр <percent> содержит неправильное значение ${percent}`);
    }
    
  } 
  /*
  c = +prompt("Взнос", ""); //первоначальный взнос
  a = +prompt("Кредит", ""); //сумма кредита
  d = +prompt("Срок", ""); //дата окончания кредита срок в месяцах (n) */
  
  let interestRate = p / 100;  //процентная ставка (в %)
  let S = a - c; //тело кредита (сумма, которую необходимо вернуть банку (сумма кредита минус первоначальный взнос)
  let P = interestRate / 12; // процентная ставка в месяц
  let monthlyFee = S * (P + (P / ((Math.pow((1 + P), d) - 1)))); //Ежемесячная оплата
  let initialPayment = c; //первоначальный взнос
  let interestLoan = S * interestRate; // сумма процентов по кредиту
  let totalAmount = monthlyFee * d ; //сумму, которую в итоге заплатит клиент

  console.log("\nТело кредита: " + S.toFixed(2));
  console.log("Процентная ставка: " + interestRate.toFixed(2));
  console.log("Сумма процентов по кредиту: " + interestLoan.toFixed(2));
  console.log("Ежемесячная оплата: " + monthlyFee.toFixed(2));
  console.log("Срок кредита: " + d + "\n");
  
  if (totalAmount === 0) {
     return totalAmount;
  } else {
     return totalAmount.toFixed(2);
  }
}
//1
/*let result2 = Number(calculateTotalMortgage(10, 0, 50000, 12));
console.log("Общая сумма долга: " + result2);
console.log(typeof result2); //*/

let result2 = Number(calculateTotalMortgage());
console.log("Общая сумма долга: " + result2);
console.log(typeof result2); //*/
/*
//calculateTotalMortgage(10, 0, 50000, 12);     //52749.53
calculateTotalMortgage(10, 1000, 50000, 12);  //51694.54
calculateTotalMortgage(10, 0, 20000, 24);     //22149.56
calculateTotalMortgage(10, 1000, 20000, 24);  //21042.09
calculateTotalMortgage(10, 20000, 20000, 24); //0
calculateTotalMortgage(10, 0, 10000, 36);     //11616.19
calculateTotalMortgage(15, 0, 10000, 36);     //12479.52*/
//2
//calculateTotalMortgage();










