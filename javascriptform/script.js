document.getElementById('submitBtn').addEventListener('click', function() {
    event.preventDefault(); // Prevents the default form submission
    try {
        validateAllFields(); // Call the main validation function
        document.getElementById('message').innerText = "All inputs are valid.";
        return; // Ensures the function exits after all validations are passed
    } catch (error) {
        document.getElementById('message').innerText = error.message; // Display the specific error message
    }
});

function validateAllFields() {
    checkFirstname();
    checkSurname();
    checkEmail()
    checkAge();
    checkDateofbirth();
    return; // Ensures the function exits after all validations are passed
}

function checkFirstname() { 
    const firstname = document.getElementById('firstname').value.trim();
    const namePattern = /^[a-z ,.'-]+$/i;

    if (firstname === "" || !namePattern.test(firstname)) {
        throw new Error('Please enter a valid first name');
    }
}

function checkSurname() {
    const surname = document.getElementById('surname').value.trim();
    const namePattern = /^[a-zA-Z]{2,}$/;

    if (surname === "" || !namePattern.test(surname)) {
        throw new Error('Please enter a valid surname');
    }
}

function checkEmail() {
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email === "" || !emailPattern.test(email)) {
        throw new Error('Please enter a valid email address');
    } 
}

function checkAge() {
    const age = document.getElementById('age').value.trim();

    if (age === "" || isNaN(age)) {
        throw new Error('Please enter a valid age');
    } else if (age < 18) {
        throw new Error('You must be 18 years or older to submit this form');
    }
}  

function checkDateofbirth() {
    const dateofbirth = document.getElementById('date').value.trim();
    const dateofbirthPattern = /^\d{4}-\d{2}-\d{2}$/;

    if (dateofbirth === "" || !dateofbirthPattern.test(dateofbirth)) {
        throw new Error('Please enter a valid date of birth');
    }
}

