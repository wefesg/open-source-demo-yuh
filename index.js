const laptops = [
    { id: 1, brand: "Dell", model: "XPS 13", price: 950 },
    { id: 2, brand: "Apple", model: "MacBook Air", price: 1200 },
    { id: 3, brand: "HP", model: "Spectre x360", price: 1100 },
    { id: 4, brand: "Lenovo", model: "ThinkPad X1", price: 1400 },
    { id: 5, brand: "Asus", model: "ROG Zephyrus", price: 1900 },
    { id: 6, brand: "Acer", model: "Swift 3", price: 600 }
];

const resultsDiv = document.getElementById('results');
const searchInput = document.getElementById('searchInput');
const priceFilter = document.getElementById('priceFilter');
const searchBtn = document.getElementById('searchBtn');

function displayLaptops(data) {
    resultsDiv.innerHTML = data.map(lap => `
        <div class="card">
            <h3>${lap.brand} ${lap.model}</h3>
            <p class="price">$${lap.price}</p>
            <a href="product.html?id=${lap.id}" class="view-btn">View Details →</a>
        </div>
    `).join('');
}

function filterData() {
    const query = searchInput.value.toLowerCase();
    const maxPrice = priceFilter;

    const filtered = laptops.filter(lap => {
        const matchesSearch = lap.brand.toLowerCase().includes(query);
        const matchesPrice = maxPrice === "all" || lap.price <= parseInt(maxPrice);
        return matchesSearch && matchesPrice;
    });

    displayLaptops(filtered);
}

searchBtn.addEventListener('click', filterData);
priceFilter.addEventListener('change', filterData);

// Initial Load
displayLaptops(laptops);