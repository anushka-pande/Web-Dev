/*Amazon Shipping Calculator*/

/*
String(25)
console.log('25' - 5);   // Type coercion or Automatic type conversion
console.log('25' + 5);

window.document
window.console.log('window');
window.alert
*/

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value) * 100;

  document.querySelector('.js-total-cost').innerHTML = '';
  document.querySelector('.js-error-message').innerHTML = '';

  if(cost < 0) {
    document.querySelector('.js-error-message').innerHTML = 'Error: cost cannot be less than $0';
    return;
  }

  if(cost < 4000) {
    cost = cost + 1000;
  }

  document.querySelector('.js-total-cost')
  .innerHTML = `$${cost / 100}`;
}