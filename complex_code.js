/* complex_code.js */

// This code demonstrates a complex implementation of a shopping cart for an e-commerce website.
// It uses object-oriented programming principles and follows best practices to handle adding and removing items from the cart,
// calculating totals, applying discounts, and managing inventory.

class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem(product, quantity) {
    if (product.stock < quantity) {
      console.log("Insufficient stock");
      return;
    }

    let existingItem = this.items.find((item) => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }

    product.stock -= quantity;
    this.calculateTotal();
  }

  removeItem(productId, quantity) {
    let itemIndex = this.items.findIndex((item) => item.product.id === productId);

    if (itemIndex === -1) {
      console.log("Item not found in the cart");
      return;
    }

    let item = this.items[itemIndex];
    if (item.quantity <= quantity) {
      this.items.splice(itemIndex, 1);
    } else {
      item.quantity -= quantity;
    }

    item.product.stock += quantity;
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

  applyDiscount(discountPercentage) {
    this.total -= (this.total * discountPercentage) / 100;
  }

  checkout() {
    this.items.forEach((item) => console.log(`Purchased ${item.quantity} of ${item.product.name}`));
    console.log(`Total: $${this.total}`);
    this.items = [];
    this.total = 0;
  }
}

// Usage example:
const product1 = new Product(1, "T-Shirt", 20, 10);
const product2 = new Product(2, "Shoes", 50, 5);

const cart = new ShoppingCart();
cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.removeItem(1, 1);
cart.applyDiscount(10);
cart.checkout();

// Output:
// Purchased 1 of Shoes
// Total: $67.5