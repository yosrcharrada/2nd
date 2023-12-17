document.addEventListener("DOMContentLoaded", function () {
    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var emailInput = document.getElementById("email");
    var offerDescriptionInput = document.getElementById("offerDescription");
    var errorElement = document.getElementById("error");

    function validateName() {
        var nameError = document.getElementById("nameError");
        nameError.innerHTML = "";

        if (nameInput.value.trim().length < 3) {
            nameError.innerHTML = "Name must be at least 3 characters.";
            return false;
        }

        // making sure  the name contains only letters
        var lettersRegex = /^[A-Za-z]+$/;
        if (!lettersRegex.test(nameInput.value.trim())) {
            nameError.innerHTML = "Name should only contain letters.";
            return false;
        }

        return true;
    }

    function validatePhone() {
        var phoneError = document.getElementById("phoneError");
        phoneError.innerHTML = "";

        // making sure the phone is correct
        var phoneRegex = /^[0-9]+$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            phoneError.innerHTML = "Phone number should only contain numbers.";
            return false;
        }

        return true;
    }

    function validateEmail() {
        var emailError = document.getElementById("emailError");
        emailError.innerHTML = "";

        // Validating the email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.innerHTML = "Enter a valid email address.";
            return false;
        }

        return true;
    }

    function validateOfferDescription() {
        var offerDescriptionError = document.getElementById("offerDescriptionError");
        offerDescriptionError.innerHTML = "";

        if (offerDescriptionInput.value.trim() === "") {
            offerDescriptionError.innerHTML = "Please enter the offer description.";
            return false;
        }

        return true;
    }

    function validateForm() {
        var isValid = true;

        if (!validateName()) {
            isValid = false;
        }

        if (!validatePhone()) {
            isValid = false;
        }

        if (!validateEmail()) {
            isValid = false;
        }

        if (!validateOfferDescription()) {
            isValid = false;
        }

        if (!isValid) {
            errorElement.innerHTML = "Please fix the errors and try again.";
        } else {
            errorElement.innerHTML = ""; // for clearing, error message
            alert("Offer submitted successfully!");
        }

        return isValid;
    }

    // Event listener for submission
    document.getElementById("offerForm").addEventListener("submit", function (e) {
        if (!validateForm()) {
            e.preventDefault(); // do not submit if there is error
        }
    });

    // Event listeners for input validation on blur
    nameInput.addEventListener("blur", validateName);
    phoneInput.addEventListener("blur", validatePhone);
    emailInput.addEventListener("blur", validateEmail);
    offerDescriptionInput.addEventListener("blur", validateOfferDescription);
	// blur event happen when the user has clicked on or tabbed away from an input field and moved to another part of the webpage 
});
