function main(){
    var a = 12;
    return function (){
        return a;
    }
}


var output =  main();

console.log(output());



// Lexical Scope 
// How to JS Work ??