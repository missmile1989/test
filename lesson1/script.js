'use strict'

var a = 5;
console.log(a);
//новый урок
/*
*/

var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);
let something;
console.log(something);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone.age);
console.log(persone["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];
console.log(arr[0]);


//alert("Hello world");

//let answer = confirm("Are you ready?");
//console.log(answer);

//let answer = +prompt("Do you have 18","Yes");
//console.log(typeof(null));
//console.log("arr" + " - object");
//console.log(4 + " - object");

let incr = 10,
decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" === 2);


let isChecked = true,
isClose = false;
console.log(isChecked || isClose);