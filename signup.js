// signup.js
document.addEventListener("DOMContentLoaded", function () {
  const signupButton = document.querySelector(".register-button");
  const errorLabel = document.createElement("label");
  errorLabel.style.color = "red"; // Change to desired error color
  errorLabel.style.display = "none"; // Initially hidden
  errorLabel.textContent = "* All fields are required!";

  const ageErrorLabel = document.createElement("label");
  ageErrorLabel.style.color = "red"; // Change to desired error color
  ageErrorLabel.style.display = "none"; // Initially hidden
  ageErrorLabel.textContent = "You must be at least 18 years old!";

  const registerForm = document.querySelector(".register-form");
  registerForm.appendChild(errorLabel);
  registerForm.appendChild(ageErrorLabel);

  signupButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    const inputs = registerForm.querySelectorAll("input");
    let allFilled = true;

    // Check if all input fields are filled
    inputs.forEach((input) => {
      if (!input.value) {
        allFilled = false;
      }
    });

    // Check if the user is at least 18 years old
    const day = parseInt(registerForm.querySelector(".dob-day").value);
    const monthString = registerForm.querySelector(".dob-month").value;
    const year = parseInt(registerForm.querySelector(".dob-year").value);

    // Convert month string to numeric value
    const monthMapping = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };

    const month = monthMapping[monthString]; // Get numeric month

    const dob = new Date(year, month, day);
    const age = new Date().getFullYear() - dob.getFullYear();
    const isAdult = age > 18 || (age === 18 && new Date() >= dob);

    // Show or hide the error messages
    if (!allFilled) {
      errorLabel.style.display = "block"; // Show error
      ageErrorLabel.style.display = "none"; // Hide age error
    } else if (!isAdult) {
      ageErrorLabel.style.display = "block"; // Show age error
      errorLabel.style.display = "none"; // Hide general error
    } else {
      errorLabel.style.display = "none"; // Hide general error
      ageErrorLabel.style.display = "none"; // Hide age error
      // Redirect to success.html
      window.location.href = "success.html"; // Adjust the path if needed
    }
  });
});
