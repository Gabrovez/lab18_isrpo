// console.log("Hello, JavaScript!")
// let age = 20;
// let name = "Denis";
// let isStudent = true;

// console.log("Name: ", name);
// console.log("Age: ", age);
// console.log("Is Student: ", isStudent);

// let value = 10;
// console.log(value);
// value = "Теперь эта строка";
// console.log(value);
// value = true;
// console.log(value);

// let userName = "Алексей";
// //шаблонная строка
// console.log(`Привет, ${userName}!`);
// // дробное число
// let price = 99.99;
// // отрицательное число
// let temperature = -15;
// // Infinity
// let infinity = 1 / 0;
// //NAN (Not a number)
// let notANumber = 0/0;
// // 0.3 00 04 
// console.log(0.1 + 0.2)

// let bigNumber = 90034203402323n;
// let huge = BigInt("21312321471684632471674613894613");
// let isAlive = true;
// let isWorking = false;
// let isAdult = age >= 18;
// let x;
// let y =undefined;
// let userData = null;

// let id = Symbol("id");

// let person = {
//   name: "Станислав",
//   age: 30,
//   isStudent: false,
//   sayHello: function () {
//     console.log("Привет!");
//   },
// };

// console.log(person.name);

// let fruits = ["яблоко", "банан", "апельсин"];
// let numbers = [1, 2, 3, 4, 5];
// let mixed = ["тест", 42, true, null];

// function sum(a, b) {
//   return a + b;
// }

// let multiply = function (x, y) {
//   return x * y;
// };

// console.log(sum(5, 3));

// let now = new Date();
// let birthday = new Date("1111-11-11");

// let a = 10;
// let b = 3;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// console.log(10 + "5");
// console.log("10" - 5);

// //Массивы
// const numbersArray = [1, 2, 3];

// numbersArray[0] = 10;
// console.log(numbersArray);
// //numbersArray = [5, 6, 7]
// //  Объекты
// const persons = { name: "Denis", age: 18 };

// persons.age = 50;
// persons.city = "Volgograd";
// console.log(persons);
// //person = {name: "Stas"}

// console.log(typeof "тект");
// console.log(typeof 42);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof { });
// console.log(typeof [ ]);
// console.log(typeof function () {});

// let numberX = null;
// console.log(numberX === null);

// let newPrice = 100;
// console.log(newPrice);
// console.log(typeof newPrice);

// newPrice = "сто рублей";
// console.log(newPrice);
// console.log(typeof newPrice);

// // В строку
// let num = 42;
// let str = String(num); // "42"
// let str2 = num.toString(); // "42"
// let str3 = "" + num; // "42"

// // В число
// let strNum = "123";
// let int = Number(strNum); // 123
// let int2 = parseInt("42.5"); // 42
// let float = parseFloat("3.14"); // 3.14
// let int3 = +"99"; // 99

// // В булево значение
// let bool1 = Boolean(1); // true
// let bool2 = !!1; // true
// let bool3 = Boolean(0); // false
// let bool4 = Boolean(""); // false

// // Неявное преобразование (coercion):
// console.log("5" + 3); // "53" (конкатенация)
// console.log("5" - 3); // 2 (преобразование в число)
// console.log("5" * "2"); // 10
// console.log(true + 1); // 2
// console.log(false + 1); // 1
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN


// console.log(5 == "5"); // true (нестрогое, с преобразованием)
// console.log(5 === "5"); // false (строгое, без преобразования)
// console.log(0 == false); // true
// console.log(0 === false); // false
// console.log(null == undefined); // true
// console.log(null === undefined); // false

// let obj1 = { name: "John" };
// let obj2 = { name: "John" };

// console.log(obj1 == obj2); // false
// console.log(obj1 === obj2); // false

// let obj3 = obj1; // obj3 ссылается на тот же объект
// console.log(obj1 === obj3); // true

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3]; 
// console.log(arr1 === arr2); // false


let a2 = 15;
let b2 = 3;

console.log(a2 + b2);
console.log(a2 * b2);

let yourAge = 18;

if (yourAge >= 18) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}

let temperature = 15;

if (temperature < 0) {
    console.log("Холодно");
} else if (temperature >= 0 && temperature <= 20) {
    console.log("Прохладно");
} else {
    console.log("Тепло");
}

let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn && isAdmin) {
    console.log("Полный доступ");
} else if (isLoggedIn && !isAdmin) {
    console.log("Ограниченный доступ");
} else {
    console.log("Доступ запрещён");
}

let a3 = 10;
let b3 = "10";

console.log(a3 == b3);
console.log(a3 === b3);

let age = 19;
let message = age >= 18 ? "Совершеннолетний" : "Несовершеннолетний";
console.log(message);

let day = 3;
switch (day) {
  case 1: console.log("Понедельник"); break;
  case 2: console.log("Вторник"); break;
  case 3: console.log("Среда"); break;
  default: console.log("Неизвестный день");
}

let monthNumber = 11;

switch (monthNumber) {
  case 1: console.log("Январь"); break;
  case 2: console.log("Февраль"); break;
  case 3: console.log("Март"); break;
  case 4: console.log("Апрель"); break;
  case 5: console.log("Май"); break;
  case 6: console.log("Июнь"); break;
  case 7: console.log("Июль"); break;
  case 8: console.log("Август"); break;
  case 9: console.log("Сентябрь"); break;
  case 10: console.log("Октябрь"); break;
  case 11: console.log("Ноябрь"); break;
  case 12: console.log("Декабрь"); break;
  default: console.log("Неверное значение месяца");
}