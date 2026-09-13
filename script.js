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
    selectedProductField.value = `Palm Oil - ${selectedSize}`;
}

if (productField && selectedSize) {
    productField.value = "palm-oil";
}


const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", async function (event) {

        event.preventDefault();

        const formData = new FormData(form);

        try {

            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                window.location.href = "thank-you.html";

            } else {

                alert("There was a problem submitting your request. Please try again.");

            }

        } catch (error) {

            alert("There was a problem submitting your request. Please check your internet connection and try again.");

        }

    });

}
