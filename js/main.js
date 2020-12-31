const btn = document.querySelector('nav .nav-center .logo i');
const menu = document.querySelector('nav .nav-center .nav-link ul');
btn.addEventListener('click',function(){
menu.classList.toggle("active");
});