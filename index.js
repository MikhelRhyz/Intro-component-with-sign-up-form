document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    // Reset error messages and icons
    resetErrors();

    // Validate Firstname, Lastname, Email, Password
    if (isEmpty("firstName")) {
      showError("firstName");
      event.preventDefault();
    }

    if (isEmpty("lastName")) {
      showError("lastName");
      event.preventDefault();
    }

    if (isEmpty("password")) {
      showError("password");
      event.preventDefault();
    }

    if(!isValidEmail("email")){
      showError("email");
      event.preventDefault();
    }

    function resetErrors() {
      let errorMessages = document.querySelectorAll(
        ".empty-error, .email-error"
      );
      errorMessages.forEach((element) => element.classList.add("hidden"));

      let errorIcons = document.querySelectorAll(".icon-error");
      errorIcons.forEach((icon) => icon.classList.add("hidden"));
    }

    function isEmpty(fieldId) {
      return document.getElementById(fieldId).value.trim() === "";
    }

    function showError(fieldId){
      document.getElementById(fieldId).nextElementSibling.classList.remove("hidden");
      document.getElementById(fieldId).nextElementSibling.nextElementSibling.classList.remove("hidden");
    };

    function isValidEmail(emailId){
      const email = document.getElementById(emailId).value.trim();
      const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
