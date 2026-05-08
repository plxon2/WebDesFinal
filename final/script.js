var toggleButton = document.querySelector('#theme-toggle');
var body = document.querySelector('body');

toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
});

var form = document.querySelector('#contact-form');
var thankYou = document.querySelector('#thank-you');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.style.display = 'none';
                thankYou.style.display = 'block';
            } else {
                alert('There was an error sending your message. Please try again.');
            }
        }).catch(error => {
            alert('There was an error sending your message. Please try again.');
        });
    });
}
