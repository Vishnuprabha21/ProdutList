const fallbackImage =
  "https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&w=800&q=80";

const products = [
  {
    name: "Wireless Headphones",
    desc: "High quality sound with noise cancellation.",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Smart Watch",
    desc: "Track your health and notifications.",
    price: 4499,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
  
  {
    name: "Gaming Laptop",
    desc: "High performance laptop for gaming.",
    price: 89999,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Running Shoes",
    desc: "Comfortable & stylish running shoes.",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  
];

const productList = document.getElementById("productList");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img 
      src="${product.image}" 
      alt="${product.name}"
      onerror="this.onerror=null; this.src='${fallbackImage}'"
    >
    <div class="card-content">
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <div class="price">₹${product.price}</div>
      <button>Add to Cart</button>
    </div>
  `;

  productList.appendChild(card);
});
