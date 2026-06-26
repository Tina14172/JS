// function printData(){
//     console.log("Welcome to JS.");
//     console.log("This is Second Line");
// }


// document.querySelector('button').onclick = function (){
//     console.log("Welcome to JS.");
//     console.log("This is Second Line");
// }



// document.querySelector('button').onclick = function (){
    // How to CHeck Class List :
//    console.log(document.querySelector('h1').classList);

    // How to Add New Class : 
    // document.querySelector('h1').classList.add("show");

    // How to Remove Class : 
    // document.querySelector('h1').classList.remove("show");


    // How to Add Toggle : add+remove
//     document.querySelector('h1').classList.toggle('show');
// }

var books = [];

document.querySelector('button').onclick = function (){
    var book = {
        BookID : Number(prompt("ENter Book Id : ")),
        BookName : prompt("Enter Book Name : "),
        AuthorName : prompt("Enter Book Author Name : "),
        Category :prompt("Enter Book Cat : "),
        Quantity : Number(prompt("Enter Book Quentity : "))
    }

    books.push(book);

    console.log(books);
} 