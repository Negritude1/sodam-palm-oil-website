const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }
    });

    navLinks.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

}

const productSizeField = document.querySelector("#product-size");
const selectedProductField = document.querySelector("#selected-product");
const productField = document.querySelector("#product");
const urlParams = new URLSearchParams(window.location.search);
const selectedSize = urlParams.get("size");

if (productSizeField && selectedSize) {
    productSizeField.value = selectedSize;
}

if (selectedProductField && selectedSize) {
   selectedProductField.value = `Palm Oil - ${selectedSize}`;}
   if (productField && selectedSize) {
    productField.value = "palm-oil";
}