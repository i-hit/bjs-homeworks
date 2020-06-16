"use strict";

// task 1

function getSolutions(a, b, c) {
  const D = getDiscriminant(a, b, c);
  const result = {
    D: D,
    roots: getRoots(a, b, D),
  };

  return result;
}

function getRoots(a, b, D) {
  const firstRoot = (-b + Math.sqrt(D)) / (2 * a);
  const secondRoot = (-b - Math.sqrt(D)) / (2 * a);
  let result = [];
  if (D >= 0) {
    result.push(firstRoot);
    if (D > 0) {
      result.push(secondRoot);
    }
  }

  return result;
}

function getDiscriminant(a, b, c) {
  const result = b ** 2 - 4 * a * c;

  return result;
}

function showSolutionsMessage(a, b, c) {
  const result = getSolutions(a, b, c);
  const D = result.D;
  const message = {
    str1: `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`,
    str2: `Значение дискриминанта: ${D}`,
    str3: "Уравнение не имеет вещественных корней",
  };

  if (D >= 0) {
    message.str3 = `Уравнение имеет один корень X₁ = ${result.roots}`;
    if (D > 0) {
      message.str3 = `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
    }
  }

  for (let prop in message) {
    let value = message[prop];
    console.log(value);
  }
}

//  task 2

function getAverageScore(data) {
  let result = {};
  let average = [];

  for (let prop in data) {
    result[prop] = getAverageMark(data[prop]);
    average.push(result[prop]);
  }

  result.average = getAverageMark(average);
  
  return result;
}

function getAverageMark(marks) {
  let result = 0;
  if (marks.length) {
    for (let i = 0; i < marks.length; i++) {
      result += marks[i];
    }
    result /= marks.length;
  }

  return result;
}

//  task 3

function getPersonData(secretData) {
  let result = {};

  for (let prop in secretData) {
    result[ getDecodeKey(prop) ] = getDecodedValue(secretData[prop]);
  }
  console.log(result);
  return result;
}

function getDecodedValue(secret) {
  let result = 'Родриго';
  if (secret) {
    result = 'Эмильо';
  }

  return result;
}

function getDecodeKey(key) {
  let result = 'firstName';
  if (key === 'bbb') {
    result = 'lastName';
  }

  console.log(key);
  return result;
}