console.log("Loop Control Statement");

// for (let i = 0; i <=10; i++) {
//     console.log(i);
// }
// let i = 0;
// for (; i <=10; i++) {
//     console.log(i);
// }

// for(;;){
//     console.log("here");
// }

// for(let i = 0; i<=2;i++);{
//     console.log("here");
// }

// infinite Loop :

// var j = 0;
// while(j<=5){
//    console.log(j); 
//     j++;
// }

// while(1){

// }

/*
Entry Control Loop
Step : 
    1. Initialization
    2. Condition
    3. code
    4. inc/dec     variable change
*/
// do{

// }while(1);
// var m = 11;
// do{
//     console.log(m);
//     m++;
// }while(m<=15);

/*
Exit Control Loop : 
    1. Initialization
    2. code
    3. inc/dec
    4. condition
*/ 

/*
*
* * 
* * *
* * * *
*/

// for (let i = 0; i < 5; i++) {
//     var str = "";
//     for (let j = 0; j < i; j++) {
//         str += "* ";
//         //print
//     }
//     console.log(str);
//     //\n
// }


var bill = 0;
var quantity = 0 ;

var products = [{
    p_name : "Pen",
    price : 10
},{
    p_name : "Pencil",
    price : 5
},{
    p_name : "Bottle",
    price : 100
}];


for (let i = 0; i < products.length; i++) {
    alert(JSON.stringify(products[i]));
}

var choice =  prompt("1. for pen\n2. for pencil\n3. for bottle \n\nEnter Your Choice :");
console.log(choice);



switch (choice) {
    case '1': quantity = prompt("Enter Quantity : "); 
                bill+=(products[0].price*quantity);
                
        break;
    case '2': 
                quantity = prompt("Enter Quantity : "); 
                bill+=(products[1].price*quantity);
        break;
    case '3': 
                 quantity = prompt("Enter Quantity : "); 
                bill+=(products[2].price*quantity);
        break;
    default:
        break;
}

console.log(bill);