"use strict";

//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function () {
  let result = true;
  const strToLower = String(this).toLowerCase();
  const strDeleteSpaces =  strToLower.split(' ').join('')
  const strReverse = strDeleteSpaces.split('').reverse().join('');

  for (let i = 0; i < strToLower.length; i++) {
    if (strDeleteSpaces[i] !== strReverse[i]) {
      result = !result;
      break;
    }
  }

  return result;
};



//

function getAverageMark(marks) {
  // код для задачи №2 писать здесь
  let average = 0;

  if (marks.length) {
    for (let i = 0; i < marks.length; i++) {
      average += marks[i];
    }

    average /= marks.length;
  }

  const roundedAverage = Math.round(average);
  // return averageMark
  console.log(average, roundedAverage);
  return roundedAverage;
}

//

function checkBirthday(birthday) {
  // код для задачи №3 писать здесь
  // return verdict
}
