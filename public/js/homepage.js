document
  .getElementById('style-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const style = document.getElementById('style').value;

    if (!style) {
      return;
    }

    window.location.href = '/product/style/${style)';
  });

document
  .getElementById('protien-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const protien = document.getElementById('style').value;

    if (!protien) {
      return;
    }

    window.location.href = '/product/protien/${protien)';
  });
