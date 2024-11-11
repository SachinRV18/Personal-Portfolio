// Initialize EmailJS
emailjs.init(process.env.APP_EMAILJS_USER_ID);

// Get the form and submit event
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Show loading message
    document.querySelector(".loading").style.display = "block";

    // Send the email
    emailjs
      .sendForm(
        process.env.APP_EMAILJS_SERVICE_ID,
        process.env.PP_EMAILJS_TEMPLATE_ID,
        this
      )
      .then(
        function (response) {
          // Hide loading and show success message
          document.querySelector(".loading").style.display = "none";
          document.querySelector(".sent-message").style.display = "block";

          // Redirect to the homepage after 3 seconds
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
        },
        function (error) {
          // Hide loading and show error message
          document.querySelector(".loading").style.display = "none";
          document.querySelector(".error-message").style.display = "block";
        }
      );
  });
