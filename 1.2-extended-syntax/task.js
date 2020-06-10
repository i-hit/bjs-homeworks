function getResult(a, b, c) {
  // код для задачи №1 писать здесь
  let discriminantis = b ** 2 - 4 * a * c;
  let result = [];

  if (discriminantis >= 0) {
    result.push(getFirstRoot(a, b, discriminantis));
    if (discriminantis > 0) {
      result.push(getSecondRoot(a, b, discriminantis));
    }
  }
  // return x;
  return result;
}

function getFirstRoot(a, b, discriminantis) {
  let root = (-b + Math.sqrt(discriminantis)) / (2 * a);
  return root;
}

function getSecondRoot(a, b, discriminantis) {
  let root = (-b - Math.sqrt(discriminantis)) / (2 * a);
  return root;
}

// 

function getAverageMark(marks) {
  // код для задачи №2 писать здесь
  let result = 0;
  if (marks.length) {
    if (marks.length > 5) {
      console.log("в массиве больше 5 оценок");
      marks.splice(5);
    }
    for (let i = 0; i < marks.length; i++) {
      result += marks[i];
    }
    result /= marks.length;
  }
  // return averageMark;
  return result;
}

function askDrink(name, dateOfBirthday) {
  // код для задачи №3 писать здесь
  // return result;
}
