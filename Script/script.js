// Funcionalidade de navegação:
const navbar = document.querySelector("#navbar");

const btnMenu = document.querySelector("#icon-menu");


btnMenu.addEventListener("click", () => {
    if(navbar.classList.contains('navbar-off')){
        openNavbar();
    }else{
        closeNavbar();
    }

});

function openNavbar(){
    navbar.classList.remove('navbar-off');
    navbar.classList.add('navbar-active');
};

function closeNavbar(){
    navbar.classList.remove("navbar-active");
    navbar.classList.add("navbar-off");
};