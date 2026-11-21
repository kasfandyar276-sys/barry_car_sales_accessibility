// Enquiry form: show a confirmation message when the form is sent.
// This is a prototype with no server, so nothing is actually sent.
var form = document.getElementById("enquiry-form");
var message = document.getElementById("form-message");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        message.textContent = "Thank you. Your enquiry has been received. We aim to respond within two working days.";
        form.reset();
    });
}
