'use strict';

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.querySelector('#user-validation').innerHTML = '';
  let errorMessage = [];
  const errorDOM = document.createElement('p');

  let item = document.getElementById('item1').value;
  let quantity = document.getElementById('quantity1').value;

  if (item === 'null' || quantity === '0') {
    errorMessage.push('Please Choose an Item and Quantity for Purchase');
    errorDOM.textContent = errorMessage;
    document.querySelector('#user-validation').appendChild(errorDOM);
  } else {
    let order = createOrder(item, quantity);

    document.querySelector('#user-validation').innerHTML = '';
    completedOrders.push(order);
    order.displayOrder();
    order.displayTotal();

    document.getElementById('form').reset();
  }
});

// else if (item != 'null' && quantity === '0') {
//   errorMessage.push('Please Choose a Quantity Greater than 0')
//     errorDOM.textContent = errorMessage;
//     document.querySelector('#user-validation').appendChild(errorDOM)
// }
