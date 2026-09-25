const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  console.log(products[0]);
}

function updateProductName(position, newName) {
  products[position] = newName;
}

function removeLastProduct() {
  products.pop();
}