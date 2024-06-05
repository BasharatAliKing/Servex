let menuBar = document.getElementById('menu-bar');
let leftMenu = document.querySelector('.left-menu');

menuBar.addEventListener('click', () =>{
    if(leftMenu.style.display === "block") {
        leftMenu.style.display = "none";
    } else {
        leftMenu.style.display = "block";
    }

    if(menuBar.classList.contains ('bx-menu')){
        menuBar.classList.remove('bx-menu');
        menuBar.classList.add('bx-x');
    } else if(menuBar.classList.contains('bx-x')){
        menuBar.classList.add('bx-menu');
        menuBar.classList.remove('bx-x');
    }
});