// Initiate logout process
const logout = async () => {
  // Make a POST request to destroy the session on the back end
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
//if response is ok, redirect to homepage
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};
//event listener for logout button
document.querySelector('#logout').addEventListener('click', logout);
