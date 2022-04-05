const sub = document.querySelector('#sub');
const text =  document.querySelector('h1');
const add = document.querySelector('#add');
const reset = document.querySelector('#reset');

let count = 0;


add.addEventListener('click', ()=>{
    count++;
    text.innerText = count;
    
});


sub.addEventListener('click',()=>{
    count--;
    text.innerText = count;
});

reset.addEventListener('click',()=>{
    count=0;
    text.innerText = count;
})