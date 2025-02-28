document.addEventListener("DOMContentLoaded", function () {
    const buyButton = document.querySelector(".buy-btn");

    // Buy Now Button Click Effect
    buyButton.addEventListener("click", function (event) {
        event.preventDefault();
        alert("🎉 Jersey Added to Cart! 🛒 Get ready to cheer for CSK! 🏏");
    });
});
