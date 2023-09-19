const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  //conditional statement to check if username and password are not empty
  if (username && password) {
    // Send a POST request to the login API endpoint
    const response = await fetch('api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      //redirect to homepage
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

//signup form handler
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
//conditional statement to check if username and password are not empty
  if (username && password) {
    // Send a POST request to the signup API endpoint
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      //redirect to homepage
      document.location.replace('/');
    } else {
      alert('Failed to sign up');
    }
  }
};
//event listeners for login and signup forms
if (document.querySelector('.login-form')) {
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
}
if (document.querySelector('.signup-form')) {
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
}
