// Booking Form Validation

const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    // Name Validation
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email.");
        return;
    }

    // Date Validation
    if (new Date(checkout) <= new Date(checkin)) {
        alert("Invalid booking dates.");
        return;
    }

    // Success Message
    alert("Booking Submitted Successfully!");

    bookingForm.reset();

});