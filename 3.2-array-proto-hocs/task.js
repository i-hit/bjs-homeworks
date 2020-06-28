"use strict";

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