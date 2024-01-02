document.getElementById("licence").addEventListener('submit', function (event) {
    console.log('Form submitted');
    var name = document.getElementById('name').value.trim();
    console.log('Name:', name);
    var age = parseInt(document.getElementById('age').value.trim());
    console.log('Age:', age);
    var gender = document.getElementById('gender').value.trim();
    console.log('Gender:', gender);
    var city = document.getElementById('city').value.trim();
    console.log('City:', city);

    // Check for empty fields
    if (name === '' || age === '' || gender === '' || city === '') {
        event.preventDefault(); // stop the form from submitting
        console.log('Empty fields detected');
        // Display the error message
        displayErrorMessage('Please fill in all fields.');
    } else {
        // Perform age validation
        if (age <= 0) {
            event.preventDefault(); // stop the form from submitting
            displayErrorMessage("You are kidding with the program; you can't teach your father how to ****.");
        } else if (age < 9) {
            event.preventDefault(); // stop the form from submitting
            displayErrorMessage("You are just a kid and you are not even supposed to think of driving at such an age!");
        } else if (age >= 9 && age < 18) {
            event.preventDefault(); // stop the form from submitting
            displayErrorMessage("You are a kid and you should wait to reach an age of 18 to be allowed to drive!");
        } else if (age > 50) {
            event.preventDefault(); // stop the form from submitting
            displayErrorMessage("You are allowed to drive if you are medically permitted to do so.");
        } else {
            event.preventDefault(); // stop the form from submitting
            displayErrorMessage("You are eligible to drive.");
        }
    }

    function displayErrorMessage(message) {
        // Display error message
        var errorMessageElement = document.getElementById("error-message");
        errorMessageElement.innerHTML = "<p class='error-message'>" + message + "</p>";
        errorMessageElement.style.display = 'block';
    }
});
