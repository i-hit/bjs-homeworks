'use srict';

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
    switch (number) {
      case number <= 0:
        this._state = 0;
        break;
      case (number) => 100:
        this._state = 100;
        break;
      default:
        this._state = 100;
        break;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = 'detective';
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
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (!this[subject]) {
      this[subject] = [];
    }

    if (grade >= 1 && grade <= 5) {
      this[subject].push(grade);
      return this[subject].length;
    } else {
      return `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5. \n ${this[subject].length}`
    }
  }

  getAverageBySubject(subject) {
    let sum = 0;
    this[subject].forEach(element => sum += element);
    let result = sum / this[subject].length;
    return result;
  }
}