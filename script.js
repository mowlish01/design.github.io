document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');
    const addToCartButton = document.getElementById('add-to-cart');
    const quantityInput = document.getElementById('quantity');
    const cartCount = document.getElementById('cart-count');

    let cartItems = 0;

    // Change main image when thumbnail is clicked
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });

    // Add to cart functionality
    addToCartButton.addEventListener('click', function() {
        const quantity = parseInt(quantityInput.value);
        cartItems += quantity;
        cartCount.textContent = cartItems;
        alert(`${quantity} item(s) added to cart!`);
    });
});
