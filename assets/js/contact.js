// Initialize EmailJS
emailjs.init("78a7SJFc0YaHV9odN"); // Replace with your EmailJS User ID

// Get the form and submit event
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Show loading message
    document.querySelector(".loading").style.display = "block";

    // Send the email
    emailjs.sendForm("service_zqcnd54", "template_fldz9fo", this).then(
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
