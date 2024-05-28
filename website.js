// toggle
const navbarNav = document.querySelector(".navbar-nav");
// when click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// click diluar
const hamburgerMenu = document.querySelector("#hamburger-menu");

document.addEventListener('click',function(e){
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})
