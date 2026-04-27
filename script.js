// i shton ne home page 18 produkte

const products = [
    { id: 1, name:  "Nike Women'S Sportswear t-shirt", price: 19.99, category: "women", img: "https://res.cloudinary.com/shelflife-online/image/upload/a_0,c_fill,f_auto,q_100,w_1280/v1575961299/assets/1017400_1017400-Blac_06.jpg" },
    { id: 2, name:  " Addidas OTR E t-shirt", price: 12.99, category: "men", img: "https://contents.mediadecathlon.com/m18673680/76c6590afe797f80d4ca9206c73dafc5/m18673680.jpg" },
    { id: 3, name:  "Mid-rise straight jeans in blue  jeans", price: 45.99, category: "women", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTPIRXsR_9kZMILVtP8EBvkL9huhcNFIDr0g&s" },
    { id: 4, name:  "Baggy jeans faded jeans", price: 39.99, category: "women", img: "https://wwd.com/wp-content/uploads/2024/06/frame-the-loose-jeans.jpg?w=1000" },
    { id: 5, name:  "t-shirt Nike JUST DO IT for ", price: 10.99, category: "men", img: "https://www.guernseywoollens.com/cdn/shop/products/traditional-guernsey-jumper-in-navy-jumpers-guernsey-knitwear-guernsey-jumper.jpg?v=1738584601" },
    { id: 6, name:  "Traditional Guernsey Jumper ", price: 30.99, category: "men", img: "https://www.guernseywoollens.com/cdn/shop/products/traditional-guernsey-jumper-in-navy-jumpers-guernsey-knitwear-guernsey-jumper.jpg?v=1738584601" },
    { id: 7, name:  "Women's Straight Leg Jeans", price: 39.99, category: "women", img: "https://cdn.shopify.com/s/files/1/0557/0612/4373/files/7UD70C31_21A_1.jpg?v=1770307164" },
    { id: 8, name:  " Baggy vintage wide jeans", price: 24.99, category: "men", img: "https://img.abercrombie.com/is/image/anf/KIC_131-4252-00291-278_prod1?policy=product-medium" },
    { id: 9, name:  "Black Funnel Neck Jumper", price: 14.99, category: "women", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMv5PQVBuK_fPvSG2G3x48S_mazlUsi6jp-g&s" },
    { id: 10, name: "Forest Green v-neck jumper", price: 5.99, category: "men", img: "https://www.tom-murphy.ie/wp-content/uploads/2023/10/IMG_0223.jpeg" },
    { id: 11, name: "Nike - Women's Team rLegend Tee t-shirt", price: 20.99, category: "women", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcfEhgyI3IgCcC7bepnY1dPkdB1mq8rC1kPQ&s" },
    { id: 12, name: "Baggy relaxed fit jeans", price: 79.99, category: "men", img: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/31798528/2024/12/7/264ae7c9-6409-4f47-aa62-08f8e546f82a1733549523325-DENIMLOOK-Men-Relaxed-Fit-Stretchable-Jeans-9461733549522928-1.jpg" },
    { id: 13, name: "Nike air t-shirt", price: 15.99, category: "men", img: "https://5thave-img-cdn.beyondstyle.us/pf/bd49724c-f223-3640-99f3-55f941868e49.jpg?x-oss-process=style/s1" },
    { id: 14, name: "high-rise slim jeans", price: 34.99, category: "women", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrbMjqu1kgvIUkSdmkN9HA1bOYJFKhZtv9Q&s" },
    { id: 15, name: " Relaxed-fit streachbale jeans", price: 25.99, category: "men", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsuOo6nyTMv2ovG3_8F3qxUlFrkgGfSMZcA&s" },
    { id: 16, name: " Nike Athlete t-shirt  ", price: 9.99, category: "men", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQTih4iO1yfH7Xz0sHlY-MHBtbOSggBXnlA&s" },
    { id: 17, name: " Addidas Oversize shark t-shirt ", price: 25.99, category: "men", img: "https://sharkshirts.in/wp-content/uploads/2023/08/Adidas-Originals-Oversized-T-Shirt4-scaled.jpg" },
    { id: 18, name: " Slim-fit faded jenas", price: 17.99, category: "men", img: "https://media.mango.com/is/image/punto/27031197-TO-021?wid=2048" }
];

// Blog Page i ka shtu me linke reale
const blogPosts = [
    {
        id: 1,
        title: "Cili material i rrobave eshte me e mira?",
        excerpt:
            "Këshilla praktike për të mos u mashtruar nga marketingu dhe për të blerë kufje që vërtet ia vlejnë.",
        image: "https://picsum.photos/id/1015/600/400",
        date: "28 Mars 2026",
        readTime: "5 min",
        link: "https://en.wikipedia.org/wiki/Headphones", // Wikipedia
    },
    {
        id: 2,
        title: "5 mënyra për të mbrojtur telefonin tënd nga dëmtimi",
        excerpt:
            "Si të zgjasësh jetën e telefonit tënd me aksesorët e duhur dhe zakone të mira.",
        image: "https://picsum.photos/id/201/600/400",
        date: "27 Mars 2026",
        readTime: "4 min",
        link: "https://www.google.com/search?q=si+t%C3%AB+mbrojm%C3%AB+telefonin", // Google search
    },
    {
        id: 3,
        title: "Stili i rrobave te vjeter vs Stili i rrobave moderne – Çfarë zgjedhin të rinjtë?",
        excerpt:
            "Krahasim i plotë midis rrobave te vjetra dhe rrobave moderne. Cila është më e mira për ty?",
        image: "https://picsum.photos/id/29/600/400",
        date: "25 Mars 2026",
        readTime: "7 min",
        link: "https://en.wikipedia.org/wiki/Smartwatch",
    },
    {
        id: 4,
        title: "Çfarë është Noise Cancelling dhe a ia vlen?",
        excerpt:
            "Shpjegim i thjeshtë se si funksionon anulimi i zhurmës dhe cilat kufje e kanë më të mirë.",
        image: "https://picsum.photos/id/237/600/400",
        date: "23 Mars 2026",
        readTime: "6 min",
        link: "https://en.wikipedia.org/wiki/Active_noise_control",
    },
    {
        id: 5,
        title: "Si të zgjedhësh Power Bank të mirë?",
        excerpt:
            "Çfarë duhet të shikosh kur blen një power bank (kapaciteti, shpejtësia, siguria).",
        image: "https://picsum.photos/id/180/600/400",
        date: "20 Mars 2026",
        readTime: "4 min",
        link: "https://www.google.com/search?q=best+power+bank+2026",
    },
    {
        id: 6,
        title: "Si të zgjedhësh kufje wireless të mira në 2026",
        excerpt:
            "Këshilla praktike për të mos u mashtruar nga marketingu dhe për të blerë kufje që vërtet ia vlejnë.",
        image: "https://picsum.photos/id/1015/600/400",
        date: "28 Mars 2026",
        readTime: "5 min",
        link: "https://en.wikipedia.org/wiki/Headphones", // Wikipedia
    },
];

// Funksioni që krijon kartat e blogut
function renderBlogPosts() {
    const container = document.getElementById("blog-posts");
    if (!container) return;

    let html = "";


    //i krijon kartat se si duken
    blogPosts.forEach((post) => {
        html += `
                <div class="blog-card bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer" 
                     onclick="window.open('${post.link}', '_blank')">
                    
                    <div class="relative">
                        <img src="${post.image}" 
                             class="w-full h-56 object-cover transition-transform duration-300">
                        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-2xl text-xs font-medium">
                            ${post.readTime}
                        </div>
                    </div>
                    
                    <div class="p-6">
                        <div class="flex justify-between text-xs text-slate-500 mb-3">
                            <span>${post.date}</span>
                        </div>
                        
                        <h3 class="font-semibold text-xl leading-tight mb-3 line-clamp-2">
                            ${post.title}
                        </h3>
                        
                        <p class="text-slate-600 text-[15px] line-clamp-3">
                            ${post.excerpt}
                        </p>
                        
                        <div class="mt-6 flex items-center text-sred-600 text-sm font-medium">
                            Lexo më shumë 
                            <i class="fa-solid fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                        </div>
                    </div>
                </div>`;
    });

    container.innerHTML = html;
}

// Thirr funksionin kur faqja ngarkohet
document.addEventListener("DOMContentLoaded", () => {
    renderBlogPosts();
    updateCartCount();
});
// Funksionet e tjera

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(id) {
    let cart = getCart();
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        const product = products.find(p => p.id === id);
        if (product) cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    updateCartCount();

    const toast = document.createElement('div');
    toast.className = "fixed bottom-6 right-6 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-50";
    toast.innerHTML = `✅ Produkti u shtua në shportë`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

function removeFromCart(id) {
    let cart = getCart().filter(item => item.id !== id);
    saveCart(cart);
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) renderCart();
}

function updateQuantity(id, change) {
    let cart = getCart();
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.quantity += change;
    if (item.quantity < 1) item.quantity = 1;

    saveCart(cart);
    if (window.location.pathname.includes('cart.html')) renderCart();
    updateCartCount();
}

function clearCart() {
    if (confirm('Je i sigurt që do të pastrosh shportën?')) {
        localStorage.removeItem('cart');
        updateCartCount();
        renderCart();
    }
}

function updateCartCount() {
    const countEl = document.getElementById('cart-count');
    if (!countEl) return;

    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    countEl.textContent = totalItems;
}

function renderCart() {
    const cart = getCart();
    const container = document.getElementById('cart-items');
    const empty = document.getElementById('cart-empty');
    const content = document.getElementById('cart-content');

    if (!container) return;

    if (cart.length === 0) {
        empty.classList.remove('hidden');
        content.classList.add('hidden');
        return;
    }

    empty.classList.add('hidden');
    content.classList.remove('hidden');

    let html = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        html += `
        <div class="flex gap-6 items-center border-b pb-6 last:border-none last:pb-0">
            <img src="${item.img}" class="w-20 h-20 object-cover rounded-2xl">
            <div class="flex-1 min-w-0">
                <h4 class="font-medium truncate">${item.name}</h4>
                <p class="text-slate-500 text-sm">${item.price.toFixed(2)} €</p>
                <div class="flex items-center gap-4 mt-4">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-8 h-8 flex items-center justify-center border rounded-xl hover:bg-slate-100">-</button>
                    <span class="font-semibold w-6 text-center">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-8 h-8 flex items-center justify-center border rounded-xl hover:bg-slate-100">+</button>
                    <button onclick="removeFromCart(${item.id})" class="ml-auto text-red-500 hover:text-red-600">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="text-right font-semibold whitespace-nowrap">${itemTotal.toFixed(2)} €</div>
        </div>`;
    });

    container.innerHTML = html;
    document.getElementById('cart-total').textContent = total.toFixed(2) + ' €';
}

function checkout() {
    const cart = getCart();
    if (cart.length === 0) return;
    alert(`🎉 Faleminderit!\n\nPorosia u krye me sukses (demo).\nTotali: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)} €`);
    localStorage.removeItem('cart');
    updateCartCount();
    renderCart();
}

function filterCategory(cat, btn) {
    // hiq active nga të gjithë
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('bg-red-600', 'text-white');
        b.classList.add('bg-white', 'border');
    });

    // vendos active vetëm te ai që u klikua
    btn.classList.remove('bg-white', 'border');
    btn.classList.add('bg-red-600', 'text-white');

    // funksioni yt ekzistues
    renderProducts(cat);
}

function renderProducts(category = 'all') {
    const container = document.getElementById('shop-products');
    if (!container) return;

    let filtered = category === 'all' ? products : products.filter(p => p.category === category);

    let html = '';
    filtered.forEach(product => {
        html += `
        <div class="product-card bg-white rounded-3xl overflow-hidden border hover:shadow-xl transition-all">
            <img src="${product.img}" class="w-full h-56 object-cover">
            <div class="p-6">
                <h3 class="font-semibold text-lg leading-tight">${product.name}</h3>
                <p class="text-2xl font-bold text-red-600 mt-2">${product.price.toFixed(2)} €</p>
                <button onclick="addToCart(${product.id})" 
                        class="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-medium flex items-center justify-center gap-2 transition-colors">
                    <i class="fa-solid fa-cart-plus"></i>
                    Shto në shportë
                </button>
            </div>
        </div>`;
    });

    container.innerHTML = html;
}

// Mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// Contact form
function handleContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✅ Mesazhi u dërgua me sukses! Faleminderit.');
            form.reset();
        });
    }
}

// Inicializimi
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    // Featured Products në Home → Tani 8 produkte
    const featuredContainer = document.getElementById('featured-products');
    if (featuredContainer) {
        const featuredProducts = products.slice(0, 8);   // Këtu ndryshon nga 6 në 8
        let html = '';

        featuredProducts.forEach(product => {
            html += `
            <div class="product-card bg-white rounded-3xl overflow-hidden border hover:shadow-xl transition-all">
                <img src="${product.img}" class="w-full h-56 object-cover">
                <div class="p-6">
                    <h3 class="font-semibold text-lg">${product.name}</h3>
                    <p class="text-2xl font-bold text-red-600 mt-2">${product.price.toFixed(2)} €</p>
                    <button onclick="addToCart(${product.id})" 
                            class="mt-6 w-full bg-red-600 hover:bg-sky-700 text-white py-4 rounded-2xl font-medium flex items-center justify-center gap-2">
                        <i class="fa-solid fa-cart-plus"></i>
                        Shto në shportë
                    </button>
                </div>
            </div>`;
        });

        featuredContainer.innerHTML = html;
    }

    // Shop page
    if (document.getElementById('shop-products')) {
        renderProducts('all');
    }

    // Cart page
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }

    handleContactForm();

    console.log('%c✅ Nova Store - Tani me 8 produkte në Home!', 'color:#0ea5e9; font-size:14px; font-weight:600');
});
