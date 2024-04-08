const header=document.querySelector("header");
window.addEventListener("scroll",function()
{
    header.classList.toggle("sticky", window.scrollY>70)
})
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.nevbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}
