const form = document.querySelector('#form');
const email = document.querySelector('#email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputValidation();
});

function inputValidation() {
    const emailtrim = email.value.trim();
    let isValid = true;

    if (emailtrim === '') {
        setError(email, 'Email is empty');
        isValid = false;
    } else if (!validateEmail(emailtrim)) {
        setError(email, 'Please enter a valid email');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (isValid) {
        // Handle the password reset logic here (not implemented in this example)
        alert('Password reset request submitted!');
        form.reset(); // Reset the form after submission (optional)
    }
}

function setError(input, message) {
    const inputboxes = input.parentElement;
    let err = inputboxes.querySelector('small');
    if (!err) {
        err = document.createElement('small');
        inputboxes.appendChild(err);
    }
    err.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');

    // Log error message to console
    console.log(`Error: ${message} for input: ${input.id}`);
}

function setSuccess(input) {
    const inputboxes = input.parentElement;
    let err = inputboxes.querySelector('small');
    if (err) {
        err.innerText = '';
    }
    input.classList.add('success');
    input.classList.remove('error');

    // Log success message to console
    console.log(`Success: Input validated successfully for input: ${input.id}`);
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
