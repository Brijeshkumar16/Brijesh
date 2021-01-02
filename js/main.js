// ===== TOGGLE BTN =====
const btn = document.querySelector('nav .nav-center .logo i');
const menu = document.querySelector('nav .nav-center .nav-link ul');
btn.addEventListener('click',function(){
menu.classList.toggle("active");
});

// ===== LOADER =====
window.addEventListener("load", function () {
    const loader = document.querySelector('.loader');
    loader.classList.add('finish');
});