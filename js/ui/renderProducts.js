export function renderProducts(products) {
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = "";

    products.forEach(function (products) {
        productContainer.innerHTML += `<div class="product">
                                        <h4>${products.title}</h4>
                                        <h5>$${products.price}</h5>
                                    </div>`;
    });
}
