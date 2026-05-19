let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(name + " added to cart!");
    updateCart();
}

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    let storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartList = document.getElementById("cartItems");

    if (!cartList) return;

    cartList.innerHTML = "";
    let total = 0;

    storedCart.forEach(item => {
        total += item.price;

        cartList.innerHTML += `
            <p>${item.name} - P${item.price}</p>
        `;
    });

    document.getElementById("total").innerText = "Total: P" + total;
}

function searchProducts() {
    let input = document.getElementById("search").value.toLowerCase();
    let products = document.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {
        let name = products[i].innerText.toLowerCase();
        products[i].style.display = name.includes(input) ? "block" : "none";
    }
}
