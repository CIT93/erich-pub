'use strict';

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.querySelector('#user-validation').innerHTML = '';
  let errorMessage = [];
  const errorDOM = document.createElement('p');

  let item1 = document.getElementById('item1').value;
  let quantity1 = document.getElementById('quantity1').value;
  let item2 = document.getElementById('item2').value;
  let quantity2 = document.getElementById('quantity2').value;

  if (item1 === 'null' || quantity1 === '0') {
    errorMessage.push('Please Choose an Item and Quantity for Purchase');
    errorDOM.textContent = errorMessage;
    document.querySelector('#user-validation').appendChild(errorDOM);
  } else {
    let order = createOrder(item1, quantity1, item2, quantity2);

    document.querySelector('#user-validation').innerHTML = '';
    completedOrders.push(order);
    order.displayOrder();
    order.displayTotal();

    document.getElementById('form').reset();
  }
});
