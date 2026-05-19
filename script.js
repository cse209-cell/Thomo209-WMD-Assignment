let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price) {

    cart.push({
        product: product,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product + " added to cart!");
}

function loadCart() {

    let cartItems = document.getElementById("cart-items");
    let total = document.getElementById("total");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    let totalPrice = 0;

    cart.forEach(function(item) {

        let li = document.createElement("li");

        li.textContent = item.product + " - P" + item.price;

        cartItems.appendChild(li);

        totalPrice += item.price;
    });

    total.textContent = "Total: P" + totalPrice;
}

function searchProducts() {

    let input = document.getElementById("search").value.toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        let text = product.innerText.toLowerCase();

        if (text.includes(input)) {
            product.style.display = "block";
        }

        else {
            product.style.display = "none";
        }
    });
}
   
