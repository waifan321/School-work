document.getElementById('submitBtn').addEventListener('click', function() {
    try {
        validateAllFields(); // Call the main validation function
<<<<<<< HEAD
        document.getElementById('message').innerText = "All inputs are valid.";
        return; // Ensures the function exits after all validations are passed
=======
        document.getElementById('message').innerText = "All inputs are valid."; // Display success message
>>>>>>> e33fc8f0facbfb8f179728ca932ec4aa0fb042c6
    } catch (error) {
        document.getElementById('message').innerText = error.message; // Display the specific error message
    }
});

function validateAllFields() {
    checkFirstname();
    checkSurname();
    checkEmail()
    checkAge();
    
    return; // Ensures the function exits after all validations are passed
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
        throw new Error('You are too young to register');
    }
}  

