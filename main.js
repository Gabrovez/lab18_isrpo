console.log("Hello, JavaScript!")
let age = 20;
let name = "Denis";
let isStudent = true;

console.log("Name: ", name);
console.log("Age: ", age);
console.log("Is Student: ", isStudent);

let value = 10;
console.log(value);
value = "Теперь эта строка";
console.log(value);
value = true;
console.log(value);

let userName = "Алексей";
//шаблонная строка
console.log(`Привет, ${userName}!`);
// дробное число
let price = 99.99;
// отрицательное число
let temperature = -15;
// Infinity
let infinity = 1 / 0;
//NAN (Not a number)
let notANumber = 0/0;
// 0.3 00 04 
console.log(0.1 + 0.2)

let bigNumber = 90034203402323n;
let huge = BigInt("21312321471684632471674613894613");
let isAlive = true;
let isWorking = false;
let isAdult = age >= 18;
let x;
let y =undefined;
let userData = null;

let id = Symbol("id");

let person = {
  name: "Станислав",
  age: 30,
  isStudent: false,
  sayHello: function () {
    console.log("Привет!");
  },
};

console.log(person.name);

let fruits = ["яблоко", "банан", "апельсин"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["тест", 42, true, null];

function sum(a, b) {
  return a + b;
}

let multiply = function (x, y) {
  return x * y;
};

console.log(sum(5, 3));

let now = new Date();
let birthday = new Date("1111-11-11");

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(10 + "5");
console.log("10" - 5);

//Массивы
const numbersArray = [1, 2, 3];

numbersArray[0] = 10;
console.log(numbersArray);
//numbersArray = [5, 6, 7]
//  Объекты
const persons = { name: "Denis", age: 18 };

persons.age = 50;
persons.city = "Volgograd";
console.log(persons);
//person = {name: "Stas"}

console.log(typeof "тект");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof { });
console.log(typeof [ ]);
console.log(typeof function () {});

let numberX = null;
console.log(numberX === null);

let newPrice = 100;
console.log(newPrice);
console.log(typeof newPrice);

newPrice = "сто рублей";
console.log(newPrice);
console.log(typeof newPrice);

// В строку
let num = 42;
let str = String(num); // "42"
let str2 = num.toString(); // "42"
let str3 = "" + num; // "42"

// В число
let strNum = "123";
let int = Number(strNum); // 123
let int2 = parseInt("42.5"); // 42
let float = parseFloat("3.14"); // 3.14
let int3 = +"99"; // 99

// В булево значение
let bool1 = Boolean(1); // true
let bool2 = !!1; // true
let bool3 = Boolean(0); // false
let bool4 = Boolean(""); // false

// Неявное преобразование (coercion):
console.log("5" + 3); // "53" (конкатенация)
console.log("5" - 3); // 2 (преобразование в число)
console.log("5" * "2"); // 10
console.log(true + 1); // 2
console.log(false + 1); // 1
console.log(null + 1); // 1
console.log(undefined + 1); // NaN