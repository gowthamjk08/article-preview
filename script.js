let button  = document.querySelector('button');
let btnImg = document.querySelector('img[alt="share icon"]');
let shareAct = document.getElementById('share-active')


button.addEventListener("click",()=>{
    if(button.className == 'btn-active'){
        button.className=''
        shareAct.style="display:none";
    }
    else{
        button.className='btn-active';
        shareAct.style="display:flex";
    }
})



