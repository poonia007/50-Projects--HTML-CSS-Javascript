let btn=document.querySelector('.search-btn')
let container=document.querySelector('.container')
let input=document.querySelector('.search-input')
btn.addEventListener('click',()=>{
    container.classList.toggle('active');
    input.focus();
})