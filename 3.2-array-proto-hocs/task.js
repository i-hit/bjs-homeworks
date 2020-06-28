"use strict";

// task 1

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  return arr1.every((e, i) => e === arr2[i]);
}

function memorize(func, limit) {
  const memory = [];
  console.log(memory);

  function result() {
    const savedResalt = memory.find(e => compareArrays(e.args, Array.from(arguments)));
    if (savedResalt) {
      console.log("taken from memory");
      return savedResalt.result
    }
    memory.push( { args: Array.from(arguments), result: func(...arguments) } );
    if (memory.length > limit) {
      memory.shift();
    }
    return memory[memory.length - 1].result;
  }
  return result;
}

const M = memorize(sum, 5);
console.log(M(1,3, 5));
console.log(M(1,3));
console.log(M(3,3));
console.log(M(3,3));
console.log(M(8,3));
console.log(M(7,3));
console.log(M(6,3));
console.log(M(5,3));
console.log(M(5,3));
console.log(M(15,3, 20));

// task 2

function testCase(testFunction, timer, name) {
  console.time(timer);
  for (let i = 0; i <= 100; i++) {
    testArray.forEach(e => testFunction(...arguments));
  }
  console.timeEnd(timer)
  return console.log(`${name} выполнена`);
}

function sum1(...args) {
  // Замедления нет
  sleep(0); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

const testArray = [
  [1, 2, 3],
  [1, 2],
  [1, 2, 3],
  [1, 2, 8],
  [1, 2, 3, 4],
  [1, 2, 3],
  [1],
  [],
  [1, 2],
  [1, 2, 3],
];

// за 100 итераций
// testCase(sum, "timer", "sum"); // timer: 102237.69995117188ms
// testCase(sum1, "timer", "sum1"); // timer: 1119.7548828125ms

// const mSum = memorize(sum, 5);
// testCase(mSum, "timer", "mSum"); // timer: 411.0419921875ms

