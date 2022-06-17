"use strict"
console.log("-----1/ Конструктор-----");
	function Student(name, gender, age) {
		this.name = name,
		this.gender = gender,
		this.age = age
	};

	let Alex = new Student("Alex", "man", 18);
	let Dasha = new Student("Dasha", "woman", 21);
	/*console.log(Alex);
	console.log(Dasha);*/

console.log("\n-----2/ Предмет-----");
	Student.prototype.setSubject = function (subjectName) {
		this.subject = subjectName;
	};
	/*Alex.setSubject("Algebra"); 
	console.log(Alex);*/

console.log("\n-----3/ Оценка-----");
	Student.prototype.addMark = function (mark) {	
		this.marks = [];
		if (this.marks === undefined) {
			this.marks = mark;
		} else {
			this.marks.push(mark);
		}
	};
	/*Dasha.addMark(2);
	console.log(Alex);
	Alex.addMark(3);
	console.log(Alex);
	Dasha.addMark(8);
	console.log(Dasha);*/
/*
console.log("\n-----4/ Оценки-----");
	Student.prototype.addMarks = function (...mark) {
		if (this.marks === undefined) {
			this.marks = mark;
		}	else {
			this.marks.concat(...mark);
		}
	};
	/*Dasha.addMarks(4, 12);
	console.log(Dasha);*/

console.log("\n-----5/ Среднее-----");
	Student.prototype.getAverage = function (rating) {
		return rating = this.marks.reduce((sum, i) => ((sum + i) / this.marks.lenght), 1);
/*
		this.marks.reduce( function (sum, i) {
			return (sum + i) / this.marks.lenght;
		}, 1);*/
	}
	//console.log(Dasha.getAverage());

console.log("\n-----6/ Исключение-----");
	Student.prototype.exclude = function (reason) {
		delete this.subject;
		delete this.marks;
		this.excluded = reason;
	};
/*	console.log(Alex.exclude("low grades"));
	console.log(Alex);*/