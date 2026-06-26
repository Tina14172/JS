// Q2. Write a named function to display numbers 1 to 5.

// function printData(){
//     for (let i = 1; i<=5; i++) {
//         console.log(i);
//     }
// }
// printData();

// function printData(){
//     var n1 = Number(prompt("Enter Starting Index : "));
//     var n2 = Number(prompt("Enter Ending Index : "));

//     for (let i = n1; i<=n2; i++) {
//         console.log(i);
//     }
// }
// printData();

// printData();


// Q4. Write a named function that prints the multiplication table of a given number.

// function printTable(num){
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
// }

// printTable(2);


// String : 
// "Zafar"  'zafar'
// `Zafar`


// console.log("Zafar",typeof "Zafar");
// console.log('Zafar',typeof 'Zafar');
// console.log(`Zafar`,typeof `Zafar`);

// String : Single Line  "" ''
//  Multiline  : ``

// This is New Line.
// This is Second Line.

// console.log("This is New Line.\nThis is Second Line.");
// console.log('This is New Line.\nThis is Second Line.');
// console.log(`This is New Line.
//     This is Second Line.`);

// var n = 2;
// var i = 10;
// console.log(`${n} * ${i} = ${n*i}`);   // String Formating



// Q5. Write a named function that returns today's date.

// function dateToday(){
//     return Date();
// }


// console.log(dateToday());


// function square(n){
//     return n*n;
// }

// console.log(square(2));
// console.log(square(12));


// var date = Date();

// console.log(date);


// peli :  121   12321

// string : zafar  rafaz
//  madam    madam


function isPeliStr(str) {
    var revstr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revstr += str[i];
    }
    if(revstr == str) 
        return true
    else    
        return false
}


console.log(isPeliStr("madam"));