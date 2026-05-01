// Main JS for PharmaStrategist Landing Page

document.addEventListener('DOMContentLoaded', function () {
    // FAQ toggle logic
    document.querySelectorAll('.faq-question').forEach(function (q) {
        q.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Lead form validation
    const form = document.getElementById('lead-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let valid = true;
            const name = form.elements['name'];
            const email = form.elements['email'];
            const message = form.elements['message'];
            if (!name.value.trim()) {
                name.style.borderColor = 'red';
                valid = false;
            } else {
                name.style.borderColor = '#b2bec3';
            }
            if (!email.value.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
                email.style.borderColor = 'red';
                valid = false;
            } else {
                email.style.borderColor = '#b2bec3';
            }
            if (!message.value.trim()) {
                message.style.borderColor = 'red';
                valid = false;
            } else {
                message.style.borderColor = '#b2bec3';
            }
            if (valid) {
                alert('Thank you! Your message has been received.');
                form.reset();
            }
        });
    }
});
