// ex.6.1
// let price = 80000;
// (function priceMessage (price) {
//     console.log(`Данный товар стоит ${price} рублей`);
// })(price);


// ex.6.2
// const num_1 = 3;
// const num_2 = 6;

// function mult (arg1, arg2) {
//     return arg1 * arg2
// }
// console.log(mult(num_1, num_2));

// //ex.6.3
// const num = 3;
// function square() {
//     return num * num;
// }
// console.log(square())

// ex.6.4
// let num = 3;
// let res = "";
// let i = 0;
// while (i < 3){
//     num = Math.pow(num, 2);
//     res = res.trim() + " " + num;
//     i += 1;
// }
//  console.log(res);


// ex.6.5
// const string = "px";
// function getNumber(data){
    
//     if (isNaN(parseInt(data))) {
//         return 0;
//     }
//     return parseInt(data);
// }
// console.log(getNumber(string));

// ex.6.6

// const value = 7;
// const total = 10;

// function getPercent (a, b) {
//    const result = a / b * 100;
//    return result;
// }
// console.log(getPercent(value, total));


// ************ARRAYS***************
// *********************************

// let arr = [1, 2, 3];
// console.log(arr[-1]);
// console.log(arr[9999]);
// console.log(arr['Hello']);

// let obj = {1: "3"};
// console.log(obj[-1]);
// console.log(obj[9999]);
// console.log(obj['Hello']);

// let arr1 = [4, 5, 6];
// let arr2 = arr1;
// arr2[0] = 2;
// console.log(arr1)

// let array = [4, 5, 6];
// function f1(arr) {
//     arr[0] = 'Ooops!';
// }
// f1(array);
// console.log(array);

// ex.9.1

const list = ["Груша", "Банан", "Апельсин", "Виноград"];

list.unshift("Яблоко");
list.pop();
list.push("Клубника");
console.log(list);