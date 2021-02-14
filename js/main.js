// ===== TOGGLE BTN =====
const btn = document.querySelector('nav .nav-center .logo i');
const menu = document.querySelector('nav .nav-center .nav-link ul');
btn.addEventListener('click', function () {
    menu.classList.toggle("active");
});

// ===== CLOSE MENU IN MOBILE ON CLICK LINK =====
const link = document.querySelectorAll('nav .nav-center .nav-link ul li a');
link.forEach(function(item){
item.addEventListener('click',function(){
menu.classList.remove('active');
});
});
