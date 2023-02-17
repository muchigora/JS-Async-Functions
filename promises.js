fs = require('fs')

//*********PROMISES*********************/


/**
 * CREATE A PROMISE
 * Promises are like the evolution of the idea of call backs
 * When creating a promise, you pass it a function that accepts both resolve and reject Promise((resolve,reject)=>{})
 * Its a callback the way it structured: Promise((resolve,reject)=>{})
 * Purpose of a promise is to create code that detects where 'this thing' is a success or fail:
 * >>success will call Resolve
 * >>fail will call Reject
 * 
 */

// const myPromises = new Promise((reject,resolve)=>{
//     const rand = Math.floor(Math.random()*2);
//     if(rand===0){
//         resolve();
//     }else{
//         reject();
//     }
// });
// myPromises
//     .then(()=>console.log("Yes! its Zero!")) //.then() only handles success
//     .catch(()=>console.log("Oh No! Only a Zero would work!")); //.catch() only handles failure


//applying Promises to fs readFile situation
// fs.promises.readFile('./assets/test.txt',{encoding:'utf-8'})
//     .then((data)=>console.log(data))
//     .catch((err)=>console.error(err))


/**
 * FETCH api with promises
 * fetch api is how we make xhr requests to a server
 * require a node-fetch package to be installed inorder to run
 */

fetch('https://www.anapioficeandfire.com/api/books')
    .then((res)=>res.json()) //converts the raw response from reading a pokemon
    .then((data)=>console.log(data)) //reads / display the data in the json format it has ben converted to
    .catch((err)=>console.error(err));






