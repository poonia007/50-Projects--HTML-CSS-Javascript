const boxes=document.querySelectorAll('.box')
window.addEventListener('scroll',animate)

function animate(){
    const triggerPoint=window.innerHeight/4*3
    boxes.forEach(box=>{
       const boxPoint =box.getBoundingClientRect().top
       if(boxPoint<triggerPoint){
          box.classList.add('show');
       }
       else{
        box.classList.remove('show');
       }
    })
}