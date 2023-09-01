let value = document.getElementById('value')
let increase = document.querySelector('.increase')
let reset = document.querySelector('.reset')
let decrease = document.querySelector('.decrease')

let count =0

increase.addEventListener('click',function (){
    count++;
    value.textContent=count
})
decrease.addEventListener('click',function (){
    if(count>0) count--;
    value.textContent=count
})
reset.addEventListener('click',function (){
    count=0;
    value.textContent=count
})

