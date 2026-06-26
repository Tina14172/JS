// Normal Functions  // Name Function
// - parameters Function (with Arguments) Return type in function switch programs
/* 
Syntax : 
1. function initialization + declaration
function functionname (){
//code
}

functionname(); // function calling /Function Invoked

*/

// i. without argument and without return type 
// function greeting(){
//     console.log("Welcome to JS.");
//     // alert("Welcome");
//     document.write("Hello");
// }

// greeting(); // Invoked Function

// function changeText(){
//     document.querySelector('h1').innerHTML = "New Text";
// }
// changeText();


// greeting(); // Invoked Function


// ii. with argument and without return type 
/* 
Syntax : 
1. function initialization + declaration
function functionname (n1,n2){   //n1,n2 Parameter
//code
}

functionname(data1,data2); // function calling /Function Invoked

//data1,data2 : Argument

*/ 
// function addition(n1,n2){   //n1,n2   Parameter
//     console.log("Addition is : ",n1+n2);
// }

// addition(1,2); // 1,2 Argument


// iii. without argument and with return type 

// function PI(){
//     return 3.14;
// }


// console.log(PI());


// iv. with argument and with return type 


// function result(marks){
//     if(marks>=35){
//         return "Pass";
//     }else{
//         return "Fail";
//     }
// }

// console.log(result(5));



// function arithmatic(n1,n2,op){
//     switch (op) {
//         case "+":
//             return n1+n2;
//         case '-' : 
//             return n1-n2;
//         default: 
//             return "Please Enter Valid Choice!!";
//     }
// }


// alert(arithmatic(11,12,"+"));



/*
parent  : loop
break;
continue;

function :
return;



function(){
    loop(){
        return
    }
}
*/

// Addition only Two Numbers
// function addition(n1,n2){
//     console.log(n1+n2);
// }
// addition(11,13);


// function addition(n1,n2){
//     console.log(n1+n2);
// }
// addition(11);


//  Default Parameter
// function addition(n1=0,n2=0){
//     console.log(n1+n2);
// }
// addition(11,13);