const apiData = {
    "original_total_price": 250000,
    "items": [
        {
            "id": 49839206859071,
            "quantity": 1,
            "title": "Asgaard sofa",
            "presentment_price": 250000,
            "discounted_price": 20000000,
            "image": "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/Asgaardsofa3.png?v=1728384481"
        }
    ],
    "currency": "INR",
    "items_subtotal_price": 25000000
};

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cartCountElement = document.getElementById('cart-count');

    // Clear previous items
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    apiData.items.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div>
                <h4>${item.title}</h4>
                <p>Price: ${item.presentment_price} ${apiData.currency}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        totalPrice += item.presentment_price * item.quantity;
    });

    totalPriceElement.innerText = `${totalPrice} ${apiData.currency}`;
    cartCountElement.innerText = apiData.items.length;
}

renderCart();

