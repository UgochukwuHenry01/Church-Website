// for my navbars
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const body = document.querySelector('body');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('active');
    body.classList.toggle('hide-home');

    if (navLinks.classList.contains('active')) {
        menuToggle.innerHTML = '&times;'; // Exit icon
    } else {
        menuToggle.innerHTML = '&#9776;'; // Menu icon
    }
}



const cart = [];

function toggleCart() {
    document.getElementById('cart').classList.toggle('active');
}

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.qty;
        cartItems.innerHTML += `
            <div class="cart-item">
                <p>${item.name} ($${item.price})</p>
                <div>
                    <button onclick="changeQty(${index}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${index}, 1)">+</button>
                </div>
            </div>
        `;
    });
    document.getElementById('total').innerText = total.toFixed(2);
}

function changeQty(index, change) {
    cart[index].qty += change;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCart();
}   

function showCheckout() {
    document.getElementById('checkout-form').classList.add('active');
}

function submitOrder() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const payment = document.getElementById('payment').value;

    if (!name || !email || !payment) {
        alert('Please complete all fields.');
        return;
    }

    alert(`Thank you ${name}, your order has been submitted!`);
    cart.length = 0;
    updateCart();
    document.getElementById('checkout-form').classList.remove('active');
    document.getElementById('cart').classList.remove('active');
}


 // Dynamically update year
        document.getElementById('year').textContent = new Date().getFullYear();