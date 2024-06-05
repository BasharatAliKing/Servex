let menuBar = document.getElementById('menu-bar');
let leftMenu = document.querySelector('.menu-sub');

menuBar.addEventListener('click', () =>{
    if(leftMenu.style.display === "none") {
        leftMenu.style.display = "flex";
    } else {
        leftMenu.style.display = "none";
    }

    if(menuBar.classList.contains ('bx-menu')){
        menuBar.classList.remove('bx-menu');
        menuBar.classList.add('bx-x');
    } else if(menuBar.classList.contains('bx-x')){
        menuBar.classList.add('bx-menu');
        menuBar.classList.remove('bx-x');
    }
});