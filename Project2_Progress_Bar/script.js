const next=document.querySelector('#next')
const prev=document.querySelector('#prev')
const progress=document.getElementById('progress')
const circles=document.querySelectorAll('.circle');
let currAct=1;
next.addEventListener('click',()=>{
       currAct++;
       update();
       if(currAct>4){
          currAct=4;
       }
    
})
prev.addEventListener('click',()=>{
     currAct--;
     update();
     if(currAct<1){
        currAct=1;
     }
})

// Function to handle event click--->
function update(){
  circles.forEach((circle,index)=>{
     if(index<currAct){
        circle.classList.add('active');
     }
     else{
        circle.classList.remove('active');
     }
  })
  
//   To extend length of the progress bar ---->
  switch(currAct){
    case 2: progress.style.width=33 +"%"
    break;
    case 3: progress.style.width=66 +"%"
    break;
    case 4: progress.style.width=100 +"%"
    break;
    default:
        progress.style.width=0 +"%"
  }


//   To enable /disable buttons--->
  if(currAct==4){
    next.disabled=true;
   }
   else{
    next.disabled=false;
   }
  if(currAct==1){
    prev.disabled=true;
   }
   else{
    prev.disabled=false;
   }
}

