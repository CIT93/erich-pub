'use strict';

let completedOrders = [];

const CustomerOrder = function (item, quantity) {
  this.item = item;
  this.quantity = quantity;
  this.cost = this.getPrice();
};

CustomerOrder.prototype.getPrice = function () {
  if (this.item === 'Organic Soil' || this.item === 'Hose 50ft') return 29.99;
  if (this.item === 'Leaf Rake' || this.item === 'Work Gloves') return 19.99;
  if (this.item === 'Potting Soil') return 9.99;
  if (this.item === 'Flower Seeds');
  return 4.99;
};

CustomerOrder.prototype.itemTotal = function () {
  return this.cost * this.quantity;
};

const createOrder = (item, quantity) => {
  let order = new CustomerOrder(item, quantity);
  return order;
};

CustomerOrder.prototype.orderTotal = function () {
  let orderTotal = 0;
  completedOrders.forEach((order) => {
    orderTotal += order.itemTotal();
  });
  return orderTotal.toFixed(2);
};

CustomerOrder.prototype.displayTotal = function () {
  let grandtotal = document.getElementById('grandtotal');
  grandtotal.textContent = `Your order total is: $${this.orderTotal()}`;
};

CustomerOrder.prototype.displayOrder = function () {
  let orders = document.getElementById('orders');
  let listEl = document.createElement('li');
  completedOrders.forEach((order) => {
    listEl.textContent = `Item Ordered: ${order.item} Item Qty: ${
      order.quantity
    } for a cost of: $${order.itemTotal().toFixed(2)}`;
    orders.appendChild(listEl);
  });
};
