
// Slide show controls
let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let index = 0;
function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// Accordion controls
let accordion = document.querySelectorAll('.faq .accordion-container .accordion');
accordion.forEach(function(acco) {
    acco.onclick = function() {
        accordion.forEach(function(remove) {
            remove.classList.remove('active');
        });
        acco.classList.add('active');
    };
});





document.querySelectorAll('.carForm').forEach(function(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Item added to cart!');
    });
});







function showAlert(event, message) {
    event.preventDefault(); // Prevent form submission
    alert(message);
}
