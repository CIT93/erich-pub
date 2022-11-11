'use strict';

let completedOrders = [];

class CustomerOrder {
  constructor(item1, quantity1, item2, quantity2) {
    this.item1 = item1;
    this.quantity1 = quantity1;
    this.item2 = item2;
    this.quantity2 = quantity2;
    this.cost1 = this.getPrice1();
    this.cost2 = this.getPrice2();
  }
  getPrice1() {
    if (this.item1 === 'Organic Soil' || this.item1 === 'Hose 50ft')
      return 29.99;
    if (this.item1 === 'Leaf Rake' || this.item1 === 'Work Gloves')
      return 19.99;
    if (this.item1 === 'Potting Soil') return 9.99;
    if (this.item1 === 'Flower Seeds');
    return 4.99;
  }
  getPrice2() {
    if (this.item2 === 'Organic Soil' || this.item2 === 'Hose 50ft')
      return 29.99;
    if (this.item2 === 'Leaf Rake' || this.item2 === 'Work Gloves')
      return 19.99;
    if (this.item2 === 'Potting Soil') return 9.99;
    if (this.item2 === 'Flower Seeds');
    return 4.99;
  }
item1Total() {
  return this.cost1 * this.quantity1
}
item2Total() {
  return this.cost2 * this.quantity2
}
  itemsTotal() {
    let finalcost = (this.cost1 * this.quantity1)+(this.cost2 * this.quantity2)
    return finalcost;
  }

  orderTotal() {
    let orderTotal = 0;
    completedOrders.forEach((order) => {
      orderTotal += order.itemsTotal();
    });
    return orderTotal.toFixed(2);
  }

  displayTotal() {
    let grandtotal = document.getElementById('grandtotal');
    grandtotal.textContent = `Your order total is: $${this.orderTotal()}`;
  }

  displayOrder() {
    let orders = document.getElementById('orders');
    let listEl = document.createElement('li');
    completedOrders.forEach((order) => {
      if (order.quantity2 === '0' || order.item2 === 'null'){
        listEl.textContent = `Items Ordered: (${order.quantity1}) ${order.item1} for $ ${order.item1Total()} for a cost of: $${order.item1Total().toFixed(2)}`;
        orders.appendChild(listEl);
      }  else {
      listEl.textContent = `Items Ordered: (${order.quantity1}) ${order.item1} for $ ${order.item1Total()} , (${order.quantity2}) ${order.item2} for $ ${order.item2Total()} for a cost of: $${order.itemsTotal().toFixed(2)}`;
      orders.appendChild(listEl);
      }
    });
  }
}

const createOrder = (item1, quantity1, item2, quantity2) => {
  let order = new CustomerOrder(item1, quantity1, item2, quantity2);
  return order;
};
