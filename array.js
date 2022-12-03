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

// const list = ["Груша", "Банан", "Апельсин", "Виноград"];

// list.unshift("Яблоко");
// list.pop();
// list.push("Клубника");
// console.log(list);

// const list = ["Груша", "Банан", undefined, "Апельсин", "Виноград"];

// function compactArray(arr) {
//     const result = [];
//     for (let item of arr) {
//         if(Boolean(item)) {
//             result.push(item);
//         }
//     }
//     return result;
// }
// console.log(compactArray(list));

// ex.9.2

// const list = ["Груша", "Банан", "Апельсин", "Виноград"];

// function printMaxLengthItem(arr) {
//     let maxLength = arr[0];
//     for (let item of arr) {
//         if(item.length > maxLength.length) {
//             maxLength = item;
//         }
//     }
//     return console.log(maxLength) ;    
// }
// printMaxLengthItem(list);

// ex.9.3

// const list = [23, 13, 2];

// function getSumOfItems(arr) {
//     let sum = 0;
//     for (let item of arr) {
//         sum += item;
//     }
//    return console.log(sum);
// }
// getSumOfItems(list);

// ex.9.4

// let list_1 = [12, 5];
// let list_2 = [2, 1];

// function getNewArray(arr) {
//     let list_3  = list_1;
//     for (let item of arr) {
//         list_3.push(item);
//     }
//     for (let i = 0; i < list_3.length; i++ ) {
//         list_3[i] = list_3[i]**2;
//     }
//     return list_3;
// }
// console.log(getNewArray(list_2));

// ex.9.5

// const list = [12, -4, -5, 32, 2];

// function getSum (arr) {
//     let sum = 0;
//     for (let item of arr) {
//         if (item > 0) {
//             sum += item;
//         }
//     }
//     return console.log(sum);
// }
// getSum(list);


// ex.9.6

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 25, 60];

// function getSumOfPrimes(arr) {
//     const seive = [];
//     const primes = [];
//     let num = 0;
//     let sum = 0;

//     (function getMaxNum(arr) {
//         num = arr[arr.length-1];
//         return num;    
//     })(arr);

//     for (let i = 2; i <= num; i++) {
//         if(!seive[i]) {
//             primes.push(i);
//             for (let j = i * i; j <=num; j +=i) {
//                 seive[j] = true;
//             }
//         }
//     }
//     (function getSumOfItems(arr) {
//             for (let item of arr) {
//                 sum += item;
//             }
//             return sum;
//         })(primes);    
//         return console.log(sum);    
// }
// getSumOfPrimes(list);
        
 
// ex.9.7

// const list = [4, 45, 3, 23, 6];
// function getProductOfNums(arr) {
//     let maxNum = arr[0];
//     let minNum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//     if (maxNum < arr[i]) {
//         maxNum = arr[i];
//     } else if(minNum > arr[i]) {
//         minNum = arr[i];
//     }
//  }
//  return console.log(maxNum * minNum);
// };
// getProductOfNums(list);

// ex. 9.8

// const list = [4, 45, 3, 23, 6];
// const newList = [];
// function getReverseArray(arr){
//     for (let i = arr.length-1; i >= 0 ; i--) {
//         newList.push(arr[i]);
//     }
// return console.log(newList);
// }
// getReverseArray(list)


// ex.9.10

// const list = [2, 45, 3, 23, 6];

// function count(arr) {
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0) {
//             counter += 1;
//         }
//     }
//     return console.log(counter);
// }
// count(list);

// ex.9.11

// const list = [2, 45, 3, 23, 6];

// function average(arr) {
//     let result = 0;
//     for (let item of arr) {
//         result += item;
//     }
//     return console.log(Math.round(result / arr.length)) ;
    
// }
// average(list);   

// ex.9.12

// const list = [2, 54, 2, 54, false, 2];

// function getSum(arr) {
//     let sum = 0;
//     for (let item of arr) {
//         if (Number.isFinite(item) === true) {
//             sum += item;
//         } else {
//             break;
//         }
//     }
//     return console.log(sum);
// };
// getSum(list);

// ex.9.13 

// let list = [];
// for (i = 10; i <=20; i++) {
//     list.push(i);
// }
// console.log(list);

// ex.9.14

// const list = [2, "привет", 23, true, 2, false, 2];

// function getNewArray(arr) {
//     let numbers_list = [];
//     for(let item of arr) {
//         if (Number.isFinite(item) === true) {
//             numbers_list.push(item)
//         } else if (item === false) {
//             break;
//         } else {
//         continue;
//         }
//     }
//     return console.log(numbers_list)
// }
// getNewArray(list);

// ex.9.15

// const list = ["Лёша", "default", "полке", "клопа", "нашёл"];

// function stringsCounter (arr) {
//     let newArr = [];
//     for (let item of arr) {
//         if (item.toLowerCase() !== "default") {
//             newArr.push(item);
//         }
//     } return console.log(newArr.length);
// }
// stringsCounter(list);

// ex.9.16

// const list = ["почтовый","желание","абсолютный","закрытый"];

// function getFirstLetter(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i][0]);

//     }
//     return console.log(newArr.join(''));
// }
// getFirstLetter(list)

// ex. 9.18

// const list = [
//     {product: "Apple", price: 25},
//     {product: "Cherry", price: 32},
//     {product: "Strawberry", price: 45}
//    ]

//    let highPrice = list[0].price;
//    for (let i = 0; i < list.length; i++) {
//        if (highPrice < list[i].price) {
//         highPrice = list[i].price
//        }
//    }
//    for (let item of list) {
//        if (item['price'] == highPrice) {
//            console.log(item['product'])
//        }
//    }


