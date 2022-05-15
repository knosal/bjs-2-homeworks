"use strict";

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

function calculateTotalMortgage(percent, contribution, amount, date) {

  let creditTerm = date.getMonth() - (new Date()).getMonth() + 12 * (date.getFullYear() - (new Date()).getFullYear()); //срок кредита
  let interestRate = percent / 100;  //процентная ставка (в %)
  let S = amount - contribution; //тело кредита (кредит - взнос)
  let P = interestRate / 12; // процентная ставка в месяц
  let monthlyFee = S * (P + (P / ((Math.pow((1 + P), creditTerm) - 1)))); // оплата/мес
  let totalAmount = monthlyFee * creditTerm; //общая сумма оплаты 
  
  if (typeof percent === "string" || Number.isNaN(percent) || percent == Infinity || percent == -Infinity) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  };

  if (typeof contribution === "string" || Number.isNaN(contribution) || contribution === Infinity || contribution === -Infinity) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  };

  if (typeof totalAmount === "string" || Number.isNaN(totalAmount) || totalAmount === Infinity || totalAmount === -Infinity) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "test"`);
  } else if (typeof percent === "string" || Number.isNaN(percent) || percent == Infinity || percent == -Infinity) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${percent}"`);
  } else if (typeof contribution === "string" || Number.isNaN(contribution) || contribution === Infinity || contribution === -Infinity) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${contribution}"`);
  } else if (totalAmount === 0) {
      return totalAmount;
  } else {
      return Number(totalAmount.toFixed(2));
  };
};