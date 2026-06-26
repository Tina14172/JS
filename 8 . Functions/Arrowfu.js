//2 Arrow Function
// i. without argument and without return type 
var greeting =  ()=>{
    console.log("Welcome to JS.");
    // alert("Welcome");
    document.write("Hello");
}

// greeting(); // Invoked Function

//  ---------------------------------------------------------

// ii. with argument and without return type 
var addition =   (n1,n2)=>{   //n1,n2   Parameter
    console.log("Addition is : ",n1+n2);
}

// addition(1,2); // 1,2 Argument
//  ---------------------------------------------------------


// iii. without argument and with return type 

const PI =   ()=>{
    return 3.14;
}

// console.log(PI());

//  ---------------------------------------------------------

// iv. with argument and with return type 

let result =  (marks)=>{
    if(marks>=35){
        return "Pass";
    }else{
        return "Fail";
    }
}

// console.log(result(65));

//  ---------------------------------------------------------
var printNumber = n1 => console.log(n1);


printNumber(12);