const addToCartButtons = document.querySelectorAll(".addTocart");
const cartContainer = document.querySelector(".cartItems");
addToCartButtons.forEach(button=>{
    button.addEventListener("clicked",  addToCart);
});

function addToCart(event)
{const product = event.target.closest(".product");
const proName = product.querySelector("proTitle").innerText;
const proPrice = product.querySelector("cost").innerText;
const cartItem = document.createElement("li");
cartItem.innerHTML = `${proName} : ₹${proPrice} <button class = "removeCart"> Remove </button> `;
cartContainer.appendChild(cartItem);
const remCartBtn = cartItem.querySelector(".removeCart");
remCartBtn.addEventListener("clicked", remFromCart());

}
function remFromCart(event){
const cartItem = event.target.closest("li");
cartContainer.removeChild(cartItem);

}