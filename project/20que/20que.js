//Task 1 create three variables:studentname using let.collegename using const,age using var.print all values in console.
let studentName = "tina";
const collegeName = "xyz College";
var age = 19;

console.log("Student Name :", studentName);
console.log("College Name :", collegeName);
console.log("Age :", age);



//Task 2 create a variable city='Rajkot' using let. change its value to 'Ahmedabad'and print the result

//let city = "ahemedabad";
//city = "surat";

//console.log("City :", city);



//Task 3 create a constant variable country='India'.Try changing its value and observe the output/error.

//const country = "India";
//console.log("Country :", country);

// Trying to change a constant value
//country = "UK";


//console.log(country);



//Task 4 create variable a=25 and b=10.print addition,subtraction,multiplication,division and modulus.
//let a = 25;
//let b = 10;

//console.log("Addition =", a + b);
//console.log("Subtraction =", a - b);
//console.log("Multiplication =", a * b);
//console.log("Division =", a / b);
//console.log("Modulus =", a % b);


//Task 5 create const=5.use count--print the value after each operation.
//let count = 5;

//console.log("Initial Value =", count);

//count++;
//console.log("After Increment =", count);

//count--;
//console.log("After Decrement =", count);


//Task 6 create marks=50.use +=,-=,*=,/= and print the result after every operation.
//let marks = 50;

//marks += 10;
//console.log("After += :", marks);

//marks -= 5;
//console.log("After -= :", marks);

//marks *= 2;
//console.log("After *= :", marks);

//marks /= 5;
//console.log("After /= :", marks);
//

//Task 7 create salary=10000.increase salary by 2000 using assignment operators.
//let salary = 10000;

//salary += 2000;

//console.log("Updated Salary =", salary);


//Task 8 compare x=20 and y=30 using ==,!=,>,<,>=,<=.
//let x = 20;
//let y = 30;

//console.log("x == y :", x == y);
//console.log("x != y :", x != y);
//console.log("x > y :", x > y);
//console.log("x < y :", x < y);
//console.log("x >= y :", x >= y);
//console.log("x <= y :", x <= y);



//Task 9 create num1='10' and num2=10.check num1 == num2 and num1 ===num2.
//let num1 = "10";
//let num2 = 10;

//console.log("num1 == num2 :", num1 == num2);
//console.log("num1 === num2 :", num1 === num2);


//Task 10 create age=22 and haslicense=true. check if a person can drive using &&.
//let age = 22;
//let hasLicense = true;

//let canDrive = age >= 18 && hasLicense;

//console.log("Can Drive :", canDrive);



//Task 11 create is weekend=false and isholiday=true. use || to determine if the office is closed.
////let isWeekend = false;
//let isHoliday = true;

//let officeClosed = isWeekend || isHoliday;

//console.log("Office Closed :", officeClosed);



//Task 12 create isLoggedln=flase. use !operator and print the result.
//console.log("Task 12");

//var isLoggedIn = false;

//console.log("Is Logged In :", isLoggedIn);
//console.log("Is Logged Out :", !isLoggedIn);


//Task 13 use console.log(),console.warn(),and console.error()to display different messages.
//console.log("This is a Normal Message");
//console.warn("This is Warning Message");
//console.error("This is Error Message");



//Task 14 use console.time('test');run a loop form 1 to 100000 and end with console.timeend('test')
//console.time("Test");
//for (let i = 1; i <= 100000; i++) { }

//console.timeEnd("Test");



//Task 15 create an aarray of 5 students and display it using console.table().
//var students = [prompt("Enter Name of 1st student"), prompt("Enter Name of 2nd student"), prompt("Enter Name of 3rd student"),
//prompt("Enter Name of 4th student"), prompt("Enter Name of 5th students")
//];



//Task 16 use console.clear()and observe what happens in the browser console.
//console.log("Message 1");
//console.log("Message 2");

//console.clear();
//console.log("Console cleared !");



//Task 17 create an html heading with an id . access it using document.getElementbyid() and print the element.

//var element = document.getElementById("heading");
//console.log(element);


//Task 18 create 3 paragraphs with the same class .access them using document.getElementsByClassName().
//var paragraphs = document.getElementsByClassName("demo");
//console.log(paragraphs);



//Task 19 create 5 list items . access them using document.getElementsByTagName().
//let items = document.getElementsByTagName("li");
//for (let i = 0; i < items.length; i++) {
//    console.log(items[i].innerText);
//}

//

//Task 20 create < h1 id='title'>hello javascript</h1>.use queryselector()and queryselectorall().change contact using innerHTML,innerText and textcontant.also print various typeof examples.
//let heading = document.querySelector("#title");

//heading.innerHTML = "<b>Hello JS</b>";

//heading.innerText = "Hello JavaScript using innerText";

//heading.textContent = "Hello JavaScript using textContent";

//let paras = document.querySelectorAll(".demo1");

// Various typeof examples
console.log(typeof "Hello");   // string
console.log(typeof 100);       // number
console.log(typeof true);      // boolean
console.log(typeof {});        // object
console.log(typeof []);        // object
console.log(typeof undefined); // undefined