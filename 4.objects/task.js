//Конструктор
console.log("-----1/ Конструктор-----");

function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age
};

//Экземпляры студентов
let Alex = new Student("Alex", "man", 18);
let Dasha = new Student("Dasha", "woman", 21);

console.log(Alex);
console.log(Dasha);

//Предмет
console.log("\n-----2/ Предмет-----");

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Alex.setSubject("Algebra"); 
console.log(Alex);

//Оценки
console.log("\n-----3/ Оценка-----");
let arrMark = [];

Student.prototype.addMark = function (mark) {
  arrMark.push(mark);
  if (this.marks === undefined) { 
  // добавить первую оценку 
  this.marks = mark;
  } else {
    // добавить вторую и последующие оценки в массив
    this.marks = arrMark;
  }
};

Alex.addMark(2);
console.log(Alex);
Alex.addMark(3);
console.log(Alex);

//Оценки
console.log("\n-----4/ Оценки-----");

Student.prototype.addMarks = function (...mark) {
  arrMark.push(...mark);
  if (this.marks === undefined) { 
  // добавить первую оценку 
  this.marks = mark;
  } else {
    // добавить вторую и последующие оценки в массив
    this.marks = arrMark;
  }
};

Alex.addMarks(3, 5);
console.log(Alex);

//Среднее
console.log("\n-----5/ Среднее-----");

Student.prototype.getAverage = function (Student) {
  let sum = 0;
  let average = 1;
  /*for (let i = 0; i < this.marks; i++) {
    sum += this.marks[i];
    average = (sum / this.marks.length);
  }*/
for (let i in Student) {
  sum += this.marks[i];
  average = (sum / this.marks.length);
}
  return average;
};
console.log(Alex);
let result = Alex.getAverage();
console.log(`Среднее африфметическое оценок: ${result}`);

//Исключение
console.log("\n-----6/ Исключение-----");

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

console.log(Alex);
console.log(Alex.exclude("low grades"));
console.log(Alex);