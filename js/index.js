import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
import { displayMessage } from "./ui/displayMessage.js";

const url = "https://fakestoreapi.com/products";

async function getProducts() {
    try {
        const response = await fetch(url);
        const products = await response.json();

        renderProducts(products);
        searchProducts(products);

    } catch (error) {
        displayMessage("error", error, ".product-container");
    }
}

getProducts();
