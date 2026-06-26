// What is an Object ? :
// It's Collection of Properties and Methods.
// Property : key + value
// Method : Object : functionality (function)

// How to Create an Object : 
// 1. Using Object Literal : {}
// var user = {};
// console.log(user,typeof user);

// 2. Using Object Class : 
// var user = new Object();
// console.log(user,typeof user);


// 3. Using Object.create() Method : 
// var user = Object.create({});
// console.log(user,typeof user);

// 4. Using Object.assign() Method : 
// var user = Object.assign({});
// console.log(user,typeof user);

// 5. Using Function ()

// =====================================
var user = {
    //key  +  value    =property
    fname : "Raj",
    lname : "shah",
    age : 12,
    gender :"Male",
    bioData : function(){
        //Method
        console.log(`My Name is ${this.fname} ${this.age}`);
    }
};
user.bioData();


// 1. How to Access Object
// console.log(user);

// 2. How to Access Object Property Value 
// i. using Dot Notation
// console.log(user.gender);
// ii.using Bracket Notation  []
// console.log(user["gender"]);


// 3. How to Modify Object Property Value
// i. using Dot Notation
// user.fname = "Sahil";
// ii.using Bracket Notation  []
// user['lname'] = "Patel";

// console.log(user);

// 4. How to Add Property 
// i. using Dot Notation
// user.contactNo = 1234567890;
// user.firstname = "sahil";

// ii.using Bracket Notation  []
// user["position"] = `CEO`;
// console.log(user);

// 5. How to remove Property 
// i. using Dot Notation
// delete user.age;

// // ii.using Bracket Notation  []
// delete user['lname'];

// console.log(user);

// 6. How to User Method : 
// user.bioData();



//7. Ho


/*
Object : 
    Dot Bracket
*/ 