"use strict"

	function Student(name, gender, age) {
		this.name = name,
		this.gender = gender,
		this.age = age
	};
	let Alex = new Student("Alex", "man", 18);
	let Dasha = new Student("Dasha", "woman", 21);

	Student.prototype.setSubject = function (subjectName) {
		this.subject = subjectName;
	};

	Student.prototype.addMark = function (mark) {
		if (this.marks === undefined) {
     		 this.marks = [mark];
    	}  else {
			this.marks.push(mark);
		}
	};

	Student.prototype.addMarks = function (...mark) {
		if (this.marks === undefined) {
			this.marks = mark;
		}	else {
			this.marks.push(...mark);
		}
	};

	Student.prototype.getAverage = function (marks) {
		if (this.marks.length === 0) return 0; 
		const sum = this.marks.reduce((sum, i) => sum + i, 0);
		let avg = (sum / this.marks.length);
		return avg;
	};

	Student.prototype.exclude = function (reason) {
		delete this.subject;
		delete this.marks;
		this.excluded = reason;
	};