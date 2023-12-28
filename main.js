document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const signupMessage = document.getElementById('signupMessage');
    const loginMessage = document.getElementById('loginMessage');
  
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
  
      if (!localStorage.getItem(email) && name && email && password) {
        const user = {
          name: name,
          password: password
        };
        localStorage.setItem(email, JSON.stringify(user));
        signupMessage.textContent = 'Account created successfully! Click below to login.';
        loginForm.reset(); // Reset login form
      } else {
        signupMessage.textContent = 'Please provide valid information or the email already exists!';
      }
    });
  
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
  
      const user = JSON.parse(localStorage.getItem(email));
  
      if (user && user.password === password) {
        loginMessage.textContent = `Welcome, ${user.name}!`;
      } else {
        loginMessage.textContent = 'Invalid email or password!';
      }
    });
  });
  