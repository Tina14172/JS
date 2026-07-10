// keyboardEvents :

// 1. onkeydown :
// document.body.onkeyup = function (){
//     console.log("on Key UP");
// }
// document.body.onkeydown = function (){
//     console.log("on Key Down");
// }



// 2. onkeyup:
// 3. onkeypress :
// document.body.onkeypress = function (event){
//     // console.log(event.key);
//     console.log(event.key);
// }


var mydata = document.querySelector('div').innerText;
document.querySelector('div').innerHTML = "";
for (const i in mydata) {
    document.querySelector('div').innerHTML +=`<span>${mydata[i]}</span>`;
}
// console.log(event.key,mydata[0],"Match");
var index = 0;
document.body.onkeypress = function (event){
    if(event.key == mydata[index]){
        // document.querySelectorAll('span')[index].classList.add("success");
        document.querySelectorAll('span')[index].style.color = "lime";
    }else{
        console.log(event.key,mydata[index],"Not Match");
        // document.querySelectorAll('span')[index].classList.add("error");
        document.querySelectorAll('span')[index].style.color = "red";
        console.log(event.key,mydata[index],"No Match");
    }
    index++;
    // console.log(event);

}