// Homework
// 1-rasm

// 1-task -------------------
// function findNumber(){
//     let num = prompt("enter number !!!")
//     return (Number(num.split("").reverse().join("")));
// }
// console.log(findNumber());

// 2-task
// function countFactarial(a){
//     if(a === 0){
//         return 1
//     }
//     else{
//         return a * countFactarial(a-1)
//     }
// }
// console.log(countFactarial(3));

// 3-task
// let obj1 = {
//     id:1,
//     age: 19,
//     name: "Mohirjon",
//     hobby: "music, coding",
//     address: "tashkent",
// }
// let obj2 = {
//     id:1,
//     age: 21,
//     name: "Olim",
//     hobby: "music, coding",
//     address: "tashkent",
// }
// function sayMyname(a, b){
//     if(a.age > b.age){
//         return a.name
//     }
//     else{
//         return b.name
//     }
// }
// const result = sayMyname(obj1, obj2)
// console.log(result);

// 4-task
// function countNum(a){
//     console.log(a);
//     let b = a - 1
//     if(b > 0){
//         countNum(b)
//     }
// }
// countNum(8)

// 5-task
// let user = {name: "Shaxbod"}
// let age = {age: 25}
// let userJob = {job: "Developer"}
// const obj = Object.assign(user, age, userJob)
// console.log(obj);

// 6-task
// let salaries = {
//     aXodim:150,
//     bXodim:100,
//     cXodim:210
// }
// function findTotalSalary(totalSalary){
//     let evenRes = 0;
//     let arr = []
//     for(let salary of Object.values(totalSalary)){
//         evenRes += salary
//     }
//     return evenRes;
// }
// const result = findTotalSalary(salaries)
// console.log(result);

// 7-task
// let arr = [45,65,87,25,145]
// let max = arr[0]
// function findMax(maxNum){
//     for(num of maxNum){
//         if(num > max){
//             max = num
//         }
//     }
//     return max
// }
// const result = findMax(arr)
// console.log(result);

// 8-task
// let arr = [2,4,6,7, true,null,undefined]
// function findNumber(find){
//     let evenRes = 0
//     for(let i = 0; i < find.length; i++){
//         if(typeof find[i] == "undefined"){
//             find[i] = 0
//             evenRes += find[i]
//         }
//         else{
//             evenRes += find[i]
//         }
//     }
//     return evenRes
// }
// const result = findNumber(arr)
// console.log(result);


// 2-rasm

// 1-task
// let arrList = [
//     {
//         name: "Abdulloh",
//         age:21,
//         status: false
//     },
//     {
//         name: "Botir",
//         age:18,
//         status: true
//     },
//     {
//         name: "Shokir",
//         age:12,
//         status: false
//     }
// ]
// function findArr(totalArr){
//     let res = []
//     for(let arr of totalArr){
//         if(arr.status == false){
//             res.push(arr)
//         }
//     }
//     return res
// }
// const result = findArr(arrList)
// console.log(result);

// 2-task
// function findNumber(a){
//     if( a>10){
//         console.log("Iltimos 10 gaca son kiriting");
//     }
//     let evenRes = 0
//     for(i = 1; i <= a; i++){
//         evenRes += i
//     }
//     return evenRes
// }
// console.log(findNumber(10));
// 3-task
// let arr = [1,4,8,7,6]
// let arr2 = [4,6,8,7,3]
// function findNumber(a, b){
//     let res = [];
//     for(let num1 of a){
//         for(let num2 of b){
//             if(num1 == num2){
//                 res.push(num1)
//             }
//         }
//     }
//     return res;
// }
// const result = findNumber(arr, arr2)
// console.log(result);

// 4-task
// let arr = [1,4,8,7,6]
// let arr2 = [4,6,8,15,3]
// let res = []

// function findMax(a){
//     let maxNum1 = a[0]
//     for(let num1 of a){
//         if(num1 > maxNum1){
//             maxNum1 = num1;
//         }
//     }
//     res.push(maxNum1);
// }
// function findMax2(b){
//     let maxNum2 = b[0]
//     for(let num2 of b){
//         if(num2 > maxNum2){
//             maxNum2 = num2;
//         }
//     }
//     res.push(maxNum2);
    
// }
// function findTotalMax(c){
//     let max = c[0]
//     for(let num3 of c){
//         if(num3 > max){
//             max = num3;
//         }
//     }
//     return max;
// }
// findMax(arr);
// findMax2(arr2);
// const result = findTotalMax(res);
// console.log(result);

// 5-task
// let size = prompt("enter number !!!") - 0
// function createLoop(countSize){
//     let arr = []
//     for(let i = 1; i <= countSize; i++){
//         arr.push(i)
//     }
//     return arr
// }
// const result = createLoop(size)
// console.log(result);

// 3-rasm

// 1-task
// let size = prompt("enter size !!!")
// function findArr(sizeCount){
//     let collectionNum = []
//     let obj = {id:1,name:"Olim"}
//     for(let i=1; i <= sizeCount; i++){
//         let enterNum = prompt("enter number !!!")- 0
//         collectionNum.push(enterNum);
//     }
//     collectionNum.push(obj)
//     return collectionNum
// }
// console.log(findArr(size));

// 2-task
// const arrList = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
// function createArr(arr) {
//     let all = new Set(arr)
//     return all
// }
// const result = createArr(arrList);
// console.log(result);

// 3-task ------------
// let arrList = [88,75,342,21,45,67]
// let numbers = prompt("enter number") - 0
// function findNum(compare){
//     for(let num of compare){
//         if(numbers == num){
//             all.push(num)
//         }
//     }
// }

// 4-task -------------
// let arrList = [88,75,342,21,45,67]
// function findNum(compare){
//     let all = []
//     let numbers = prompt("enter number") - 0
//     for(let num of compare){
//         if(num == numbers){
//             num.pop(numbers)
//             all.push(num)
//         }
//     }
    
//     return all
// }
// const result = findNum(arrList)
// console.log(result);

