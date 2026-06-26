//1 Expresion Function
// i. without argument and without return type 
var greeting = function (){
    console.log("Welcome to JS.");
    // alert("Welcome");
    document.write("Hello");
}

// greeting(); // Invoked Function

//  ---------------------------------------------------------

// ii. with argument and without return type 
var addition =  function (n1,n2){   //n1,n2   Parameter
    console.log("Addition is : ",n1+n2);
}

// addition(1,2); // 1,2 Argument
//  ---------------------------------------------------------


// iii. without argument and with return type 

const PI =  function (){
    return 3.14;
}

// console.log(PI());

//  ---------------------------------------------------------

// iv. with argument and with return type 

let result = function (marks){
    if(marks>=35){
        return "Pass";
    }else{
        return "Fail";
    }
}

console.log(result(65));

//  ---------------------------------------------------------



//2 arrow function
//3 IIFE
//4. Recursion
//5. nested functions
//6. Closure concepts
//7. callback(variables as a function)