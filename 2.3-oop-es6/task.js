"use srict";

//  task 1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(number) {
    this._state = 0;
    if (number > 0) {
      this._state = number;
      if (number >= 100) {
        this._state = 100;
      }
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

//  task 2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }

    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        const result = this.books.splice(i, 1);
        return result[0];
      }
    }
    return null;
  }
}

// task 3

class StudentLog {
  constructor(name) {
    this.name = name;
    this.scores = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (!this.scores[subject]) {
      this.scores[subject] = [];
    }

    if (grade >= 1 && grade <= 5) {
      this.scores[subject].push(grade);
      return this.scores[subject].length;
    } else {
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
      return this.scores[subject].length;
    }
  }

  getAverageBySubject(subject) {
    let sum = 0;
    let result = 0;
    if (this.scores[subject] && this.scores[subject].length) {
      this.scores[subject].forEach((element) => (sum += element));
      result = sum / this.scores[subject].length;
    }

    return result;
  }

  getTotalAverage() {
    let sum = 0;
    let count = 0;

    for (let prop in this.scores) {
      for (let i = 0; i < this.scores[prop].length; i++) {
        sum += this.scores[prop][i];
        count++;
      }
    }

    let result = count ? (sum / count) : 0;

    return result;
  }
}

// task 3 tests

let studentLog;

studentLog = new StudentLog("Иван Петров");

console.log(studentLog.getName());

console.log(studentLog.addGrade(3, "algebra"));
console.log(studentLog.addGrade("5g", "algebra"));
console.log(studentLog.addGrade(23, "geometry"));
console.log(studentLog.addGrade(4, "geometry"));
console.log(studentLog.addGrade(5, "geometry"));

console.log(studentLog.getAverageBySubject("geometry")); // 4.5
console.log(studentLog.getAverageBySubject("algebra")); // 3
console.log(studentLog.getAverageBySubject("math")); // 0

console.log(studentLog.getTotalAverage());


studentLog = new StudentLog("Иван Dorn");

console.log(studentLog.getName());

console.log(studentLog.addGrade(34, "algebra"));
console.log(studentLog.addGrade(54, "geometry"));

console.log(studentLog.getAverageBySubject("geometry")); // 0
console.log(studentLog.getAverageBySubject("algebra")); // 0
console.log(studentLog.getAverageBySubject("math")); // 0

console.log(studentLog.getTotalAverage());


studentLog = new StudentLog("Garry Propper");

console.log(studentLog.getName());

console.log(studentLog.addGrade(3, "algebra"));
console.log(studentLog.addGrade(4, "geometry"));
console.log(studentLog.addGrade(5, "magls"));
console.log(studentLog.addGrade(1, "poison"));
console.log(studentLog.addGrade(3, "magicAttack"));
console.log(studentLog.addGrade(7, "defence"));
console.log(studentLog.addGrade(555, "speed"));
console.log(studentLog.addGrade(4, "runes"));
console.log(studentLog.addGrade(1, "liderChip"));

console.log(studentLog.getAverageBySubject("geometry")); // 4
console.log(studentLog.getAverageBySubject("algebra")); // 3
console.log(studentLog.getAverageBySubject("math")); // 0
console.log(studentLog.getAverageBySubject("magicAttack")); // 3

console.log(studentLog.getTotalAverage());
