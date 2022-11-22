// ex.3.2

// const totalLength = name.trim() + last_name.trim();
// console.log(totalLength.length);

// //ex.3.3

// console.log(word[0].toUpperCase());



// ex.3.4

// const value = 78.3;

// const value1 = Math.sqrt(Math.ceil(value) + Math.floor(value) + Math.round(value));
// console.log(Math.trunc(value1));


//ex.3.5

// const a = 2;
// const b = 4;
// console.log((a * b)**2);

// ex.3.6
// const a = 3;
// const b = 4;

// console.log(Math.sqrt(a**2 + b**2));

// ex.3.7

// let obj = {
//     name: "Анатолий",
//     last_name: "Максимов",
//     age: 32
// }
// console.log(`Имя: "${obj.name}" Фамилия: '${obj.last_name}' Возраст: ${obj.age}`);

// //ex.3.8

// let name = "Анатолий";
// let last_name = "Максимов";
// let age = 32;

// let obj = {
//     name: name,
//     last_name: last_name,
//     age: age
// }
//  console.log(obj);
 
//  obj.name = "Harry";
//  console.log(obj);
 
//  obj.city = "Moscow";
//  console.log(obj);

//  delete obj.age;
//  console.log(obj);

//ex.3.9

// let value = null;
// if (value !== null) {
//     console.log(typeof value)
//   } else {
//       console.log('null')
//   }

//ex.3.10
// let num_1 = "3"
// let num_2 = "5"
// console.log(+num_1 + +num_2);

//ex.3.11
// let size = "500.5%";
// console.log(parseFloat(size));

//ex.3.12

// let a = "5px";
// let b = "7px";
// let c = "10px";
// console.log(parseFloat(a) * parseFloat(b) * parseFloat(c));


//ex.4.1

// let speed = 60;
 
// if (speed >= 0 && speed <= 30) {
//     console.log("Вы едете слишком медленно");
// } else if (speed >= 31 && speed <= 70) {
//     console.log("Вы едете с нормальной скоростью");
// } else {
//     console.log("Вы едете слишком быстро, сбавьте скорость");
// }

// ex.4.2

// const price = "-5 rub";
// const result = Number.parseInt(price);
// if (Number.isNaN(result)) {
//     console.log("Не число");
// }
// else if (result <= 0) {
//     console.log("Число не корректное");
// }
// else {
//     console.log(result);
// }

// ex.4.3

// const a = 32;
// const b = 5;
// const c = 14;

// if (a > b && a > c) {
//     console.log(a);
// } else if (b > a && b > c) {
//     console.log(b);
// } else {
//     console.log(c);
// }


// ex.4.4

// const temp = 24;
// const weather = "clear";

// let activity;

// if (temp >= 25 && weather == "clear") {
//     console.log(activity = "golf");
// } else if (temp >= 10 && weather == "clear") {
//     console.log(activity = "bowling");
// }
// else {
//     console.log(activity = "hiking");
// }

// ex.4.5

// const word_1 = "машина";
// const word_2 = "стол";

// console.log(word_1.length > word_2.length ? word_1 : word_2);

// ex.4.6
// let task = "редактировать";
// switch(task) {
//     case "удалить": console.log("delete");
//     break;
//     case "переименовать": console.log("rename");
//     break;
//     case "редактировать": console.log("edit");
//     break;
// }

// // ex.4.7

// let range = "week";
// let price = 10000;

// switch (range) {
//     case "day": range = "день"; console.log(`${price} Р в ${range}`);
//     break;
//     case "month": range = "месяц"; console.log(`${price} Р в ${range}`); 
//     break;
//     default: range = "неделю"; console.log(`${price} Р в ${range}`);  
// }

// // ex.4.8

// let a = 2;
// let b = 2;
// console.log(null + undefined)

// let sign = "/";

// switch(sign) {
//    case "+": console.log(a + b);
//    break;
//    case "-": console.log(a - b);
//    break;
//    case "/": console.log( b != 0 ? (a / b) : "Делить на 0 нельзя!");
//    break;
//    case "*": console.log(a * b);
//    break;
// }

