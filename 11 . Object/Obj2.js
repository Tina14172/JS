// var user = {
//     firstname : "Raj",
//     lastname : "Shah",
//     age :12,
//     gender : "Male",
//     contactNo : 1234567890,
//     1234 : true
// };
// console.log(user);

// console.log(user."first name");
// console.log(user["first name"]);

/// basic for  , for-of for-in
// Object Loop : 
// for (const key in user) {
//    console.log(typeof key,user[key]);
// }



// Computing Object :   []
// var key1 = "fname";
// var key2 = "email";

// var value1 = "raj";
// var value2 = "raj@gmail.com";

// var obj = {
//     [key1] : value1,
//     [key2] : value2
// };

// console.log(obj);
/*
{
    fname : "Raj",
    email : "raj@gmail.com"
}

*/ 


// Nested Object :
// var user = {
//     firstname : "Raj",
//     lastname : "Shah",
//     age :12,
//     gender : "Male",
//     contactNo : 1234567890,
//     // address : {
//     //     city : "RJK",
//     //     state : "Gujarat",
//     //     nation : "India"
//     // }
// };
// console.log(user);
// console.log(user.address);
// console.log(user["address"]);

// console.log(user.address.city);
// console.log(user["address"].city);
// console.log(user.address["city"]);
// console.log(user["address"]["city"]);


// Optional Chaining : (?.)
// console.log(user?.address?.city);
// console.log(user?.["address"]?.city);
// console.log(user.address["city"]);
// console.log(user["address"]["city"]);
// console.log(user);

// Array in Object : 
// var user = {
//     firstname : "Raj",
//     lastname : "Shah",
//     age :12,
//     gender : "Male",
//     Hobbies : ["Cricket","Football"]
// };
// console.log(user.Hobbies[1]);
//  Object in Array  : 

// var arr = [
//     {id : 1,"fname" : "Raj"},
//     {id : 2,"fname" : "Rajesh"},
//     {id : 3,"fname" : "Rahul"}
// ]

// console.log(arr[0]);



// Array Descruturing :
// Object Descruturing :


// Json file :  OBJECT 

// [
//     {},{}

// ]

// {
//     fact : [
//         {},{}
//     ],
//     stu : [
//         {},{}
//     ]
// }