// Using const (value will not change)
const shopName = "Fresh Mart";

// Using let (value can change)
let product = "Orange";
let price = 50;

// Template literals (using backticks ``)
console.log(`Welcome to ${shopName}`);
console.log(`Product: ${product}, Price: ₹${price}`);

// Function with default parameters
function showBill(item = "Unknown Item", cost = 0) {
  console.log(`You bought ${item} for ₹${cost}`);
}

// Function calls
showBill(product, price); 
showBill();
