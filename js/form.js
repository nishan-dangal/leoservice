document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
  
    // Reset the message display
    formMessage.style.color = '';
    formMessage.textContent = '';
  
    // Simple validation for empty fields
    if (!name || !email || !phone || !message) {
      formMessage.style.color = 'red';
      formMessage.textContent = 'Please fill in all fields.';
      return;
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.style.color = 'red';
      formMessage.textContent = 'Please enter a valid email address.';
      return;
    }
  
    // Display success message
    formMessage.style.color = 'green';
    formMessage.textContent = 'Message sent successfully!';
  
    // Clear the form fields after success (optional)
    document.getElementById('contactForm').reset();
  
    // Optional: Hide the success message after 3 seconds
    setTimeout(() => {
      formMessage.textContent = '';
    }, 3000);
  });
  