document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const responseDiv = document.getElementById('response');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        fetch('your_server_endpoint_here', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            responseDiv.textContent = data.message;
            contactForm.reset();
        })
        .catch(error => {
            responseDiv.textContent = 'An error occurred. Please try again later.';
        });
    });
});
