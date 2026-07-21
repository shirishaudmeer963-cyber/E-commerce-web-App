let cart = 0;

function addToCart() {
    cart++;

    document.getElementById("count").innerText = cart;

    alert("Product added to cart!");
}

function scrollToProducts() {
    document.getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });
}