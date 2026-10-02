import './style.css'



    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Transmission received! 🚀");

        contactForm.reset();

    });

