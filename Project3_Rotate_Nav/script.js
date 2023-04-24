let open=document.querySelector('#open')
let close=document.querySelector('#close')
let container=document.querySelector('.container')
let nav=document.querySelector('nav')
open.addEventListener('click',()=>{
      container.classList.add('show-nav')
})
close.addEventListener('click',()=>{
    container.classList.remove('show-nav')
})

