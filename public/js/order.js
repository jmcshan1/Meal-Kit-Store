const productId = document.querySelector('#productId').value.trim();
const userId = document.querySelector('#userId').value.trim();

const address = document.querySelector('#address').value.trim();
const quantity = document.querySelector('#quantity').value;
const city = document.querySelector('#city').value.trim();
const state = document.querySelector('#state').value.trim();
const zipcode = document.querySelector('#zipcode').value;

async function newFormHandler() {
  if (address && quantity && city && state && zipcode && productId && userId) {
    const response = await fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify({
        address,
        quantity,
        city,
        state,
        zipcode,
        productId,
        userId,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // Maybe send user to order confirmation page or successful order page
      document.location.replace('/');
    } else {
      alert('Failed to create order');
    }
  }
}

document.querySelector('#orderButton').addEventListener('click', newFormHandler);