console.log("---------Задание №1---------");
class PrintEditionItem {
//#1
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
//#2
  fix() {
    this.state = this.state * 1.5;
    return this.state;
  }
//#3
  set state(number) {
   this._state = number;
    if (this.state < 0) {
      this._state = 0;
    } else if (this.state > 100) {
      this._state = 100;
    } else {
      this._state = this.state;
    }
  }
//#4
  get state() {
    return this._state;
  }
}
//TEST
const sherlock = new PrintEditionItem (
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);
console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100*/
//#5
class Magazine extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
//#6
class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}
//#7
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
//TEST
const picknick = new FantasticBook (
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);
console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15*/

console.log("---------Задание №2---------");
//#1
class Library extends PrintEditionItem { 
    constructor (name, releaseDate, pagesCount) {
        super(releaseDate, pagesCount);
        this.name = name;
        this.books = [];
    }
//#2
   addBook(book = {}) {
    if (this.state > 30) this.books.push(book)
    else console.log(`Состояние книги ${this.state} -> "Книга в плохом состоянии"`);
  }
//#3
  findBookBy(type, value) { 
    let publication = this.books.find((object) => object[type] === value);
    if (publication) return publication;
    else return null; 
  }
  /*  for(let i = 0; i < this.books.length; i++) {
        if(this.books[i][type] === value) {
            return this.books[i];
        } 
    }
    return null;*/
//#4 
  /*giveBookByName(bookName) {
    let bookFinObject = this.books.find((object) => {
     if (object.name === bookName) return object;
     else return null;
   }); 
    console.log(bookFinObject);
    const index = this.books.findIndex((object) => (object.name === bookName));
    return this.books.splice(index, 1)[0];
  }*/
  giveBookByName(bookName) {
    for(let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
        }
    }
    return null;
  }
}
//TEST
const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3