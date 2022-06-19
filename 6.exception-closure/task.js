"use strict"

console.log("-----1 Задание-----");
function parseCount(n) {
  let result = Number.parseInt(n, 10);
  if (isNaN(result)) throw new Error("Невалидное значение");
  return result;
}
function validateCount(n) {
   try { return parseCount(n); } 
   catch (error) { return error; }
}

console.log("-----2 Задание-----");
class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a)
      throw new Error("Треугольник с такими сторонами не существует");
    this.a = a;
    this.b = b;
    this.c = c;
}
  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    let halfPerimetr = 0.5 * this.getPerimeter();
    let square = Number(Math.sqrt(halfPerimetr * (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c)).toFixed(3));  
    return square;
  }
}
/*
const triangle = new Triangle(5, 5, 5);
console.log(triangle);
console.log(triangle.getPerimeter());
console.log(triangle.getArea());*/

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return new Object({
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },
            getArea() {
                return "Ошибка! Треугольник не существует";
            }
        });
    }
}
console.log(getTriangle(5, 5, 5));