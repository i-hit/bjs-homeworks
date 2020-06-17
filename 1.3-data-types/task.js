"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №1 писать здесь
  if (isNaN(+percent)) {
    return `Параметр Процентная ставка содержит неправильное значение ${percent}`;
  }
  if (isNaN(+contribution)) {
    return `Параметр Начальный взнос содержит неправильное значение ${contribution}`;
  }
  if (isNaN(+amount)) {
    return `Параметр Общая стоимость содержит неправильное значение ${amount}`;
  }
  if (amount < contribution) {
    return 'Начальный взнос больше чем Общая стоимость';
  }
  

  const credit = (amount - contribution) * 100;
  const months = getSumMonths(date);
  if (months <= 0 || months === '') {
    return 'Срок ипотеки задан некорректно';
  }
  const monthlyPercent = percent / 100 / 12;

  const denominator = Math.pow(1 + monthlyPercent, months) - 1;
  const monthlyPayment =
    (credit * (monthlyPercent + monthlyPercent / denominator)) / 100;

  const totalAmount = (monthlyPayment * months).toFixed(2);

  // return totalAmount;
  console.log(totalAmount);
  return +totalAmount;
}

function getSumMonths(date) {
  const todayMonth = new Date().getMonth();
  const todayYear = new Date().getFullYear();
  const endMonth = date.getMonth();
  const endYear = date.getFullYear();

  const result = endMonth - todayMonth + (endYear - todayYear) * 12;

  return result;
}

calculateTotalMortgage(10, 1000, 50000, new Date(new Date().setFullYear(new Date().getFullYear() + 1)));

//

function getGreeting(name) {
  // код для задачи №2 писать здесь
  let result = `Привет, мир! Меня зовут ${name || 'Аноним'}`;

  // return greeting;
  console.log(result);
  return result;
}
