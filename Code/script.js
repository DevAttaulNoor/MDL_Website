//* Making Navbar Black
let nav_color = document.querySelector('nav')
let dropdown = document.querySelector('.dropdown-menu')
if (nav_color) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav_color.classList.add('nav-color', 'shadow');
            dropdown.classList.add('nav-color');
        }
        else {
            nav_color.classList.remove('nav-color');
            dropdown.classList.remove('nav-color');
        }
    })
}

// Changing the Pic of Testimonals
let myCarousel = document.getElementById('myCarousel')
myCarousel.addEventListener('slid.bs.carousel', function () {
    const activeItem = this.querySelector(".active");
    document.querySelector(".testi-img img").src = activeItem.getAttribute("data-img");
})