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

    // Update cart count badge
    const cartCount = document.getElementById('cart-count');
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = count;

    // Update order summary in checkout form
    updateOrderSummary();
}

function updateOrderSummary() {
    const summary = document.getElementById('order-summary-items');
    const checkoutTotal = document.getElementById('checkout-total');
    if (!summary || !checkoutTotal) return;
    summary.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        summary.innerHTML += `<div>${item.name} x${item.qty} - $${(item.price * item.qty).toFixed(2)}</div>`;
        total += item.price * item.qty;
    });
    checkoutTotal.textContent = total.toFixed(2);
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
    updateOrderSummary();
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

// Close cart sidebar
function closeCart() {
    document.getElementById('cart').classList.remove('active');
}

// Close checkout form
function closeCheckoutForm() {
    document.getElementById('checkout-form').classList.remove('active');
}

// --- PRODUCT SEARCH FUNCTIONALITY ---
function searchProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const sections = document.querySelectorAll('.store-section');
    sections.forEach(section => {
        let foundInSection = false;
        const cards = section.querySelectorAll('.product-card');
        cards.forEach(card => {
            const name = card.getAttribute('data-name')?.toLowerCase() || '';
            if (name.includes(query)) {
                card.style.display = '';
                foundInSection = true;
            } else {
                card.style.display = 'none';
            }
        });
        // Hide section if no products match
        section.style.display = foundInSection || query === '' ? '' : 'none';
    });
}

// --- CATEGORY FILTER FUNCTIONALITY ---
function filterByCategory(category) {
    const sections = document.querySelectorAll('.store-section');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    sections.forEach(section => {
        if (category === 'all') {
            section.style.display = '';
        } else {
            section.style.display = section.id === category ? '' : 'none';
        }
    });
}

// --- OPTIONAL: ADD TO CART BUTTONS FOR PRODUCT CARDS ---
// Example: Assign prices and enable clicking on product cards to add to cart
document.addEventListener('DOMContentLoaded', () => {
    // Price mapping matching HTML
    const priceMap = {
        "Holy Bible": 25,
        "Bible Reading Guide": 7,
        "Family Bible": 30,
        "Study Bible": 18,
        "Daily Devotional": 10,
        "Bible Story Book": 15,
        "Prayer Guide": 12,
        "Youth Devotional": 9,
        "Classic T-Shirt": 17,
        "Trendy T-Shirt": 25,
        "Logo T-Shirt": 20,
        "Faith T-Shirt": 22,
        "Church Flyer Pack": 5,
        "Gospel Flyers": 6,
        "Conference Flyers": 8,
        "Youth Flyers": 7
    };

    // Add "Add to Cart" buttons dynamically
    document.querySelectorAll('.product-card').forEach(card => {
        const name = card.getAttribute('data-name');
        if (!name) return;
        // Prevent duplicate buttons
        if (card.querySelector('.add-to-cart-btn')) return;
        const price = priceMap[name] || 10;
        const btn = document.createElement('button');
        btn.textContent = `Add to Cart - $${price}`;
        btn.className = 'add-to-cart-btn';
              btn.onclick = () => addToCart(name, price);

        // If .product-info exists, append there, else append to card
        const infoDiv = card.querySelector('.product-info') || card;
        infoDiv.appendChild(btn);
    });
});