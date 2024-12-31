function handleLogin(event) {
    event.preventDefault(); // Prevents the form from submitting
  
    // Get the email and password from the form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Simple validation check (this should be replaced with actual server-side validation)
    if (email && password) {
      // Here you can check the credentials with an API or a database
      alert("Login successful! Redirecting to your profile page...");
      
      // Redirect to the user profile/dashboard page after login (replace 'user_profile.html' with your actual page)
      window.location.href = "user_profile.html"; // Redirect to the profile page
    } else {
      alert("Please enter valid login credentials!");
    }
  }
  