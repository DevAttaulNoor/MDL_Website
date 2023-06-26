// Making Navbar Black
let nav_black = document.querySelector('nav')
if (nav_black){
    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 100) {
            nav_black.classList.add('bg-dark', 'shadow');
        }
        else{
            nav_black.classList.remove('bg-dark');
        }
    })
}

