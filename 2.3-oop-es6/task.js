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

let library, printItem;
library = new Library('Библиотека имени Ленина');
printItem = new PrintEditionItem('Типовой школьный журнал', 2019, 102);
console.log(library.name);
console.log(library.books);
// library.addBook(printItem);
// console.log(library.books[0].name);
// console.log(library.books.length);
// library.addBook(printItem);
// const firstBook = library.findBookBy("releaseDate", 2019);
// console.log(firstBook.name);
// const secondBook = library.findBookBy("releaseDate", 2154);
// console.log(secondBook);
library.addBook(printItem);
console.log(library.books);
const firstBook = library.giveBookByName('Типовой школьный журнал');
console.log(firstBook.name);
console.log(library.books.length);
const secondBook = library.giveBookByName('Судовой журнал');
console.log(secondBook);

let qwe = library.addBook(new Book(123, 234, 345, 456));
console.log(library.books);
let wer = library.giveBookByName(234);
console.log(wer.name);