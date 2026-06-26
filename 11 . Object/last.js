// Array De-structuring  : 
// var arr = [11,23,5634,25,78,236];

// // console.log(arr);

// // console.log(arr[2]);

// var [,,n1,,n2] = arr;

// console.log(n1);
// console.log(n2);






// Object De-structuring  : 

var user = {
    firstname : "Raj",
    lastname : "Shah",
    age :12,
    gender : "Male",
    contactNo : 1234567890,
    address : {
        city : "RJK",
        state : "Gujarat",
        nation : "India"
    }
};
// console.log(user.address.state);


var { address :{state},firstname : fname} = user;

// console.log(address);
console.log(state);

console.log(fname);