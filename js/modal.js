var openBtn = document.getElementById("button-link");
var modal = document.getElementById("modal")
var closeBtn = document.getElementsByClassName("closeBtn")[0];

openBtn.addEventListener('click', openModal);
function openModal(){
    modal.style.display ="block"
}
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click',outsideClick);
function closeModal(){
    modal.style.display ="none"
}

function outsideClick(e){
    if(e.target== modal)
    {modal.style.display ="none";}
}