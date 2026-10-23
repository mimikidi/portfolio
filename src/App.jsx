import { useState } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  Plus,
  Minus,
  X,
  Sparkles,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Glow Serum",
    category: "Skincare",
    price: 24.99,
    emoji: "🧴",
    color: "peach",
  },
  {
    id: 2,
    name: "Rose Cleanser",
    category: "Skincare",
    price: 18.5,
    emoji: "🫧",
    color: "pink",
  },
  {
    id: 3,
    name: "Velvet Lipstick",
    category: "Makeup",
    price: 15,
    emoji: "💄",
    color: "berry",
  },
  {
    id: 4,
    name: "Daily Sun Care",
    category: "Skincare",
    price: 21,
    emoji: "☀️",
    color: "cream",
  },
  {
    id: 5,
    name: "Blush Palette",
    category: "Makeup",
    price: 27.5,
    emoji: "🎨",
    color: "lilac",
  },
  {
    id: 6,
    name: "Body Butter",
    category: "Body Care",
    price: 19.99,
    emoji: "🧴",
    color: "sand",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });

    setCartOpen(true);
  }

  function changeQuantity(id, amount) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  return (
    <div className="app">
      <div className="announcement">
        ✨ Your beauty, your glow — free shipping over $50
      </div>

      <header className="navbar">
        <a className="logo" href="#home">
          <Sparkles size={23} />
          <span>
            glow.
            <small>BEAUTY STORE</small>
          </span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Shop</a>
          <a href="#about">About</a>
        </nav>

        <div className="header-actions">
          <label className="search-box">
            <Search size={18} />
            <input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>

          <button
            className="cart-button"
            onClick={() => setCartOpen(true)}
            aria-label="Open shopping cart"
          >
            <ShoppingBag size={22} />
            <span>{cartCount}</span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-text">
            <p className="eyebrow">YOUR EVERYDAY BEAUTY RITUAL</p>

            <h1>
              Let your natural
              <br />
              beauty <em>glow.</em>
            </h1>

            <p className="hero-description">
              Discover skincare and beauty essentials designed to make every day
              feel special.
            </p>

            <a href="#products" className="primary-button">
              Explore products ↗
            </a>
          </div>

          <div className="hero-image" aria-label="Beauty products">
            <div className="sun-circle" />
            <div className="hero-product product-one">🧴</div>
            <div className="hero-product product-two">💄</div>
            <div className="hero-product product-three">🌸</div>
            <p>Love your skin ♡</p>
          </div>
        </section>

        <section className="benefits">
          <div>
            ♡ <span>Beauty essentials</span>
          </div>
          <div>
            ✿ <span>Everyday self-care</span>
          </div>
          <div>
            ✧ <span>Made for your glow</span>
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="section-heading">
            <p className="eyebrow">FIND YOUR FAVORITES</p>
            <h2>
              Our beauty <em>collection.</em>
            </h2>
            <p>Little things that make you feel wonderful.</p>
          </div>

          <div className="filters">
            {["All", "Skincare", "Makeup", "Body Care"].map((item) => (
              <button
                key={item}
                className={category === item ? "filter active" : "filter"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
            <span>{filteredProducts.length} products</span>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className={`product-image ${product.color}`}>
                  <span className="product-emoji">{product.emoji}</span>

                  <button
                    className={
                      favorites.includes(product.id)
                        ? "favorite selected"
                        : "favorite"
                    }
                    onClick={() => toggleFavorite(product.id)}
                    aria-label="Toggle favorite"
                  >
                    <Heart
                      size={19}
                      fill={
                        favorites.includes(product.id) ? "currentColor" : "none"
                      }
                    />
                  </button>
                </div>

                <p className="product-category">{product.category}</p>

                <div className="product-details">
                  <h3>{product.name}</h3>
                  <strong>${product.price.toFixed(2)}</strong>
                </div>

                <button
                  className="add-button"
                  onClick={() => addToCart(product)}
                >
                  <Plus size={17} /> Add to bag
                </button>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="empty-results">
              <h3>No products found</h3>
              <p>Try a different search or category.</p>
              <button
                className="filter"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        <section className="about-section" id="about">
          <Sparkles size={28} />
          <h2>
            Beauty begins with <em>self-love.</em>
          </h2>
          <p>
            Take a moment for yourself. Find your routine, celebrate your
            beauty, and let yourself glow.
          </p>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          glow.
        </a>
        <p>Made with love for your everyday beauty.</p>
        <small>© 2026 Glow Beauty Store</small>
      </footer>

      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}>
          <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-heading">
              <h2>Your shopping bag ({cartCount})</h2>
              <button
                className="close-button"
                onClick={() => setCartOpen(false)}
                aria-label="Close shopping cart"
              >
                <X />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <ShoppingBag size={42} />
                <h3>Your bag is empty</h3>
                <p>Discover something lovely for yourself.</p>
                <button
                  className="primary-button"
                  onClick={() => setCartOpen(false)}
                >
                  Continue shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <div className={`cart-thumb ${item.color}`}>
                        {item.emoji}
                      </div>

                      <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <p>${item.price.toFixed(2)}</p>

                        <div className="quantity">
                          <button
                            onClick={() => changeQuantity(item.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() => changeQuantity(item.id, 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      <strong>
                        ${(item.price * item.quantity).toFixed(2)}
                      </strong>
                    </div>
                  ))}
                </div>

                <div className="cart-total">
                  <p>
                    <span>Subtotal</span>
                    <strong>${cartTotal.toFixed(2)}</strong>
                  </p>

                  <p className="shipping-message">
                    {cartTotal >= 50
                      ? "You've unlocked free shipping!"
                      : `Spend $${(50 - cartTotal).toFixed(
                          2,
                        )} more for free shipping.`}
                  </p>

                  <button
                    className="primary-button checkout-button"
                    onClick={() =>
                      alert(
                        "This is a demo store. Real payments are not enabled.",
                      )
                    }
                  >
                    Checkout ↗
                  </button>

                  <small>Demo only — no real payment is taken.</small>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}

export default App;
