"use strict";

// task 1

function parseCount(string) {
  if (!isNaN(Number.parseInt(string))) {
    return Number.parseInt(string);
  }
  const err = new Error("Невалидное значение");
  throw err;
}

function validateCount(string) {
  try {
    if (!isNaN(Number.parseInt(string))) {
      return Number.parseInt(string);
    }
    const err = new Error("Невалидное значение");
    throw err;
  } catch (err) {
    return err;
  }
}

// task 2

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      const err = new Error("Треугольник с такими сторонами не существует");
      throw err;
    }

    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
  }

  getPerimeter() {
    const P = this.sideA + this.sideB + this.sideC;
    return P;
  }

  getArea() {
    const p = this.getPerimeter() / 2;
    const S = Math.sqrt(
      p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)
    );
    return +S.toFixed(3);
  }
}

class ErrorTriangle {
  constructor() {
    this.err = "Ошибка! Неправильный треугольник";
  }
  getArea() {
    return this.err;
  }

  getPerimeter() {
    return this.err;
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (err) {
    return new ErrorTriangle();
  }
}
