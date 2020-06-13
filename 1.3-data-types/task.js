"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №1 писать здесь
  if ( checkCorrectInput() ) {
    return checkCorrectInput();
  }

  const credit = (amount - contribution) * 100;
  const months = getSumMonths(date);
  if (months <= 0 ||
    document.getElementById('date').value === '') {
    return 'Срок ипотеки задан некорректно';
  }
  const monthlyPercent = percent / 100 / 12;

  const denominator = Math.pow(1 + monthlyPercent, months) - 1;
  const monthlyPayment =
    (credit * (monthlyPercent + monthlyPercent / denominator)) / 100;

  const totalAmount = (contribution + monthlyPayment * months).toFixed(2);

  // return totalAmount;
  console.log(totalAmount);
  return totalAmount;
}

function checkCorrectInput() {
  if (checkIsNan()) {
    return checkIsNan();
  }
  if (checkContribution()) {
    return checkContribution();
  }
}

function checkIsNan() {
  const array = [
    ["Процентная ставка", document.getElementById('percent').value],
    ["Начальный взнос", document.getElementById('contribution').value],
    ["Общая стоимость", document.getElementById('amount').value],
  ];
  for (let i = 0; i < array.length; i++) {
    if (isNaN(+array[i][1]) || array[i][1] === "") {
      let result = `Параметр ${array[i][0]} содержит неправильное значение ${array[i][1]}`;
      return result;
    }
  }
}

function checkContribution() {
  if (document.getElementById('amount').value < document.getElementById('contribution').value) {
    return 'Начальный взнос больше чем Общая стоимость';
  }
}

function getSumMonths(date) {
  const todayMonth = new Date().getMonth();
  const todayYear = new Date().getFullYear();
  const endMonth = date.getMonth();
  const endYear = date.getFullYear();

  const result = endMonth - todayMonth + (endYear - todayYear) * 12;

  return result;
}

//

function getGreeting(name) {
  // код для задачи №2 писать здесь
  if (!name) {
    name = 'Аноним';
  }

  // return greeting;
  let result = `Привет, мир! Меня зовут ${name}`;
  console.log(result);
  return result;
}
