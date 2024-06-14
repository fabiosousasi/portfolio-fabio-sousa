var abrirMenu = document.querySelector(".abrir-menu-icon");
var fecharMenu = document.querySelector(".fechar-menu-icon");
var menuAtivo =document.querySelector(".menu-hamburger");

abrirMenu.addEventListener('click', function() {
    abrirMenu.style.display = "none";
    fecharMenu.style.display = "block";
    menuAtivo.classList.add("menu-hamburger-ativo");
});

fecharMenu.addEventListener('click', function() {
    fecharMenu.style.display = "none";
    abrirMenu.style.display = "block";
    menuAtivo.classList.remove("menu-hamburger-ativo");
});