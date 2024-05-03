// set timeout

// setTimeout(()=>{
//     console.log("hello world");
// },3000)

// console.log("hello");

// set Interval
// let count = 0

// let printCounter = setInterval(()=>{
//     count = count + 1
//     console.log(count);
// },1000)

// setTimeout(()=>{
//     clearInterval(printCounter)
// },10000)

// ================================================================================

// callback

// callbacks are just a functions that passing other function as a parameters

let calculateAge = (birthyear) => {
    return 2024 - birthyear
}

let printAge = (birthyear, callback) => {
    return console.log(callback(birthyear));
}

printAge(1995, calculateAge) // here passing calculate age function as a paramenter


let findAvg = (a, b, c) => {
    return (a + b + c) / 3
}

let printAvg = (a, b, c, findAvg) => {
    return console.log(findAvg(a, b, c));
}

printAvg(5, 5, 5, findAvg)   // here passing calculate average function as a paramenter

// following code will be example for callback hell

// setTimeout(() => {
//     console.log(10);
//     setTimeout(() => {
//         console.log(9);
//         setTimeout( ()=>{
//             console.log(8);
//             setTimeout( ()=>{
//                 console.log(7);
//                 setTimeout( ()=>{
//                     console.log(6);
//                     setTimeout( ()=>{
//                         console.log(5);
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     }, 1000)
// }, 1000)


/// Promise

// let wait = (timeout) =>{
//     return new Promise((resolve) =>{
//         setTimeout(resolve , timeout)
//     })
// }

// wait(1000) 

// .then(() => {                      // this thenables are called as promise chaining
//     console.log(10);
//     return wait(1000);
// })
// .then(() => {
//     console.log(9);
//     return wait(1000);
// })
// .then(() => {
//     console.log(8);
//     return wait(1000);
// })
// .then(() => {
//     console.log(7);
//     return wait(1000);
// })
// .then(() => {
//     console.log(6);
//     return wait(1000);
// })
// .then(() => {
//     console.log(5);
// });


// 3 states are there in promise pending , fulfilled , rejected

// const users = fetch("https://jsonplaceholder.typicode.com/users")

// // pending
// console.log(users);

// // fullfilled
// users
// .then(resp => resp.json())
// .then(data => {
//     console.log(data) 
//     return data
// })

// .then(names => names.forEach(element => {
//     console.log(element.name);
// }))


