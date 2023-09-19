//order form handler
async function newFormHandler() {
  event.preventDefault();
  //get values from form
  const productId = document.querySelector('#productId').value.trim();
  const userId = document.querySelector('#userId').value.trim();
  const address = document.querySelector('#address').value.trim();
  const quantity = document.querySelector('#quantity').value;
  const city = document.querySelector('#city').value.trim();
  const state = document.querySelector('#state').value.trim();
  const zipcode = document.querySelector('#zipcode').value;
  const paymentType = document.querySelector('#payment-method').value.trim();
//if all values are present, make a post request to create a new order
  if (address && quantity && city && state && zipcode && productId && userId) {
    const response = await fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify({
        product_id: productId,
        user_id: userId,
        address,
        quantity,
        city,
        state,
        zip: zipcode,
        paymentType,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // Maybe send user to order confirmation page or successful order page
      document.location.replace(`confirmation/${userId}`);
    } else {
      alert('Failed to create order');
    }
  }
}
//event listener for order button
document
  .querySelector('#orderButton')
  .addEventListener('click', newFormHandler);
