let bg=document.querySelector('.bg')
let text=document.querySelector('.loading-text')
let load=0;
let int=setInterval(blur, 30);
function blur(){
    load++;
    if(load>99){
    clearInterval(int)
    }
    text.innerHTML= `${load}%`
    text.style.opacity=scale(load,0,100,1,0)
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`
    console.log(load);
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}