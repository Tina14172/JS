var arr = ["img1.jpg" , "img2.jpg" , "img3.jpg" , "img4.jpg" , "img5.jpg" , "img6.jpg"];


let index = 0;


document.querySelector('img').attributes.src.value = arr[0];


document.querySelector('.btn-1').onclick = function()
{
    index++;
    
    if(index == arr.length)
    {
        index = 0;
    }

    document.querySelector('img').attributes.src.value = `${arr[index]}`;
}


document.querySelector('.btn-2').onclick = function()
{
    index--;

    if(index < 0)
    {
        index = arr.length - 1;
    }

    document.querySelector('img').attributes.src.value = `${arr[index]}`;
}