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

const list = ["Груша", "Банан", "Апельсин", "Виноград"];

function printMaxLengthItem(arr) {
    let maxLength = arr[0];
    for (let item of arr) {
        if(item.length > maxLength.length) {
            maxLength = item;
        }
    }
    return console.log(maxLength) ;    
}
printMaxLengthItem(list);


