const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {  //Used breakpoints in the debugger to examine each function 
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Changed <= to <
      total += cart[i].price; // Changed cartItems[i] to cart
  }
  return total;
}


function applyDiscount(total, discountRate) {
  if (!isNaN(discountRate) && discountRate >= 0 && discountRate <= 1) {
  return total - total * discountRate; // Added validation for discountRate
}else{
  throw new Error("Discount rate must be a number between 0 and 1.");
}

}

function generateReceipt(cartItems, total) {
  if (isNaN(total)) {
    throw new Error("Total must be a number.");
  }
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Added a conditional to check if total is a number
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

let totalElement = document.getElementById("total").textContent = `Total: $${discountedTotal}`;
let receiptElement = document.getElementById("receipt").textContent = receipt;

console.log(totalElement);
console.log(receiptElement);