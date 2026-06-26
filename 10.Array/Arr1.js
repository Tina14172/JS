// Array :-
// It's a Collection Of Element which is Same Datatype / Different Datatype.
// index : starting  : 0

//  Syntax : []

// Empty Array 
// var arr = [];
// var arr = [11,12,13];
// var arr = ["Zafar","Raj"];
// var arr = [11,12,13,"Raj",true,null,undefined];

// var arr = [11,12,13,14,15];

// console.log(arr);

// console.log(arr.length);

// console.log(arr[2]);


var arr = [11,12,13,14,15];
console.log(arr);


// 1. push  
//  add a new Element > last index
// return : new length
// var data = arr.push(100);
// arr.push(100,"Raj",400);
// console.log(arr);
// console.log(data);


// 2. pop
// remove elemnt  : last index
// return : removed value
// var data = arr.pop();
// console.log(data);
// console.log(arr);


// 3. unshift 
// add a new Element  : 0 index
// return : new length
// arr.unshift(100);
// arr.unshift(100,true);

// 4. shift
// remove elemnt  : 0 index
// return : removed value
// arr.shift();
// console.log(arr);

// 5. splice :- 
// arr.splice(2); // 2 index
arr.splice(0,2); // 0 index  : 2 num of element

console.log(arr);







// var str = "JZva";
// console.log(str[1]);