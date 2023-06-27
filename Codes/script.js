//* Making Navbar Black
let nav_color = document.querySelector('nav')
if (nav_color){
    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 80) {
            nav_color.classList.add('nav-color', 'shadow');
        }
        else{
            nav_color.classList.remove('nav-color');
        }
    })
}

