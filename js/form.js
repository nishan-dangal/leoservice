document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from being submitted normally
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
  
    // Reset the message
    formMessage.style.color = 'red';
    formMessage.textContent = '';
  
    // Simple validation
    if (!name || !email || !phone || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      return;
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      return;
    }
  
    // If all fields are valid
    formMessage.style.color = 'green';
    formMessage.textContent = 'Form submitted successfully!';
    
    // Clear the form (optional)
    document.getElementById('contactForm').reset();
  });
  