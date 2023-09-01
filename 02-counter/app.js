// let value = document.getElementById('value')
// let increase = document.querySelector('.increase')
// let reset = document.querySelector('.reset')
// let decrease = document.querySelector('.decrease')

// let count =0

// increase.addEventListener('click',function (){
//     count++;
//     value.textContent=count
// })
// decrease.addEventListener('click',function (){
//     if(count>0) count--;
//     value.textContent=count
// })
// reset.addEventListener('click',function (){
//     count=0;
//     value.textContent=count
// })

let count =0

let value = document.getElementById('value')
let btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')) count--;
        else if(styles.contains('increase')) count++;
        else count=0;

        if(count>0) value.style.color='green'
        else if(count<0) value.style.color='red'
        else value.style.color='#222'
        value.textContent=count
    })
})


