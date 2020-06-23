'use strict';

// task 1

function parseCount(string) {
  if (!(isNaN(Number.parseInt(string)))) {
    return Number.parseInt(string);
  }
  const err = new Error('Невалидное значение')
  throw err;
}

function validateCount(string) {
  try {
    if (!isNaN(Number.parseInt(string))) {
      return Number.parseInt(string);
    }
    const err = new Error('Невалидное значение')
    throw err;
  }

  catch(err) {
    return err;
  }
}