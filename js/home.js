let brs = document.getElementById('brs');
let nav = document.querySelector('.navbrand');
brs.addEventListener('click', ()=>{
    nav.classList.toggle('active');
});

let set_dark_mode = document.querySelector('.set_dark_mode');

let bdy = document.querySelector('.bdy');
set_dark_mode.addEventListener('click',()=>{
    bdy.classList.toggle('dark_room');
})