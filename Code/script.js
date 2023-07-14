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

//* Get the global reset button
let resetButton = document.querySelector('.reset');
if (resetButton){
    resetButton.addEventListener('click', function () {
        let forms = document.querySelectorAll('form');
        forms.forEach(function (form) {
            form.reset();
        });
    });
}

//* Get the global submit button
let submitButton = document.querySelector('.submit');
let forms = document.querySelectorAll('.needs-validation');
if (submitButton){
    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission
    
        var allFormsValid = true; // Flag to track if all forms are valid
    
        forms.forEach(function (form) {
            if (!form.checkValidity()) {
                allFormsValid = false; // Set flag to false if any form is invalid
                form.classList.add('was-validated');
            }
        });
    
        if (allFormsValid) {
            forms.forEach(function (form) {
                form.submit(); // Submit each form if all are valid
            });
        }
    });
}

//* Changing the Pic of Testimonals
let myCarousel = document.getElementById('myCarousel')
if (myCarousel){
    myCarousel.addEventListener('slid.bs.carousel', function () {
        const activeItem = this.querySelector(".active");
        document.querySelector(".testi-img img").src = activeItem.getAttribute("data-img");
    })
}