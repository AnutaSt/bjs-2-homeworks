function solveEquation(a, b, c) {
  let arr;
  "use strict";
  const d = b ** 2 - 4 * a * c;
  if (d < 0) {
   arr = []; 
  }
  if (d > 0) {
    x1 = (- b  + Math.sqrt(d) ) / (2 * a);
		x2 = (- b  - Math.sqrt(d) ) / (2 * a);
    arr = [x1, x2];
  }
if (d === 0) {
  x = -b / (2 * a);
  arr = [x];
}
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  let checkedPercent = parseInt(percent, 10);
  let checkedContribution = parseInt(contribution, 10);
  let checkedAmount = parseInt(amount, 10);

  if (checkedPercent <= 0 || Number.isNaN(checkedPercent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (checkedContribution < 0 || Number.isNaN(checkedContribution)){
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (checkedAmount <= 0 || Number.isNaN(checkedAmount)){
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let s = checkedAmount - checkedContribution;
  
  let n = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()))
  
  let p = checkedPercent / 100 / 12; 
  
  let monthPayment = s * (p + p / (Math.pow((1 + p), n) - 1));
  
  totalAmount = monthPayment * n;
  
  console.log(totalAmount.toFixed(2))
  
  return +totalAmount.toFixed(2);

  return totalAmount;
}
