import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  Plus,
  Minus,
  X,
  Sparkles,
  ArrowLeft,
  Check,
} from "lucide-react";
import { initialCosmeticProducts } from "../data/cosmeticProducts";
import "./CosmeticStore.css";

export default function CosmeticStore({ onClose, isModal = false }) {
  const [products] = useState(initialCosmeticProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Glow Serum",
      category: "Skincare",
      price: 24.99,
      emoji: "🧴",
      color: "peach",
      quantity: 1,
    },
  ]);
  const [favorites, setFavorites] = useState([1]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

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

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 2500);
  };

  const addToCart = (product) => {
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
    showNotification(`Added ${product.name} to shopping bag`);
  };

  const changeQuantity = (id, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  return (
    <div className="cosmetic-store-scope">
      {/* Top Demo Bar */}
      <div className="cosmetic-top-banner">
        <div className="flex items-center gap-2">
          <span className="cosmetic-demo-badge">Interactive Project Demo</span>
          <span>✨ Your beauty, your glow — free shipping over $50</span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1 bg-white/20 hover:bg-white/30 text-white rounded text-xs transition"
          >
            <ArrowLeft size={14} /> Back to Projects
          </button>
        )}
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-4 py-2 rounded-full text-xs shadow-lg flex items-center gap-2 animate-bounce">
          <Check size={14} className="text-emerald-400" />
          {toastMessage}
        </div>
      )}

      {/* Cosmetic Navbar */}
      <header className="cosmetic-navbar">
        <a className="cosmetic-logo" href="#cosmetic-home">
          <Sparkles size={22} />
          <span>
            glow.
            <small>BEAUTY STORE</small>
          </span>
        </a>

        <div className="cosmetic-nav-links">
          <button
            className={category === "All" ? "active" : ""}
            onClick={() => setCategory("All")}
          >
            Catalog
          </button>
          <button
            className={category === "Skincare" ? "active" : ""}
            onClick={() => setCategory("Skincare")}
          >
            Skincare
          </button>
          <button
            className={category === "Makeup" ? "active" : ""}
            onClick={() => setCategory("Makeup")}
          >
            Makeup
          </button>
          <button
            className={category === "Body Care" ? "active" : ""}
            onClick={() => setCategory("Body Care")}
          >
            Body Care
          </button>
        </div>

        <div className="cosmetic-header-actions">
          <label className="cosmetic-search-box">
            <Search size={16} />
            <input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>

          <button
            className="cosmetic-cart-btn"
            onClick={() => setCartOpen(true)}
            aria-label="Open shopping cart"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="cosmetic-cart-badge">{cartCount}</span>
            )}
          </button>
        </div>
      </header>

      {/* Cosmetic Hero */}
      <section className="cosmetic-hero" id="cosmetic-home">
        <div className="cosmetic-hero-text">
          <p className="cosmetic-eyebrow">YOUR EVERYDAY BEAUTY RITUAL</p>
          <h1>
            Let your natural
            <br />
            beauty <em>glow.</em>
          </h1>
          <p className="cosmetic-hero-desc">
            Discover skincare and beauty essentials crafted with clean ingredients,
            designed to make everyday routines feel luxurious and effortless.
          </p>
          <a href="#cosmetic-products" className="cosmetic-btn-primary">
            Explore products ↗
          </a>
        </div>

        <div className="cosmetic-hero-visual" aria-label="Beauty products showcase">
          <div className="cosmetic-sun-circle" />
          <div className="cosmetic-hero-prod c-prod-one">🧴</div>
          <div className="cosmetic-hero-prod c-prod-two">💄</div>
          <div className="cosmetic-hero-prod c-prod-three">🌸</div>
          <p className="cosmetic-hero-tag">Love your skin ♡</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="cosmetic-benefits">
        <div className="cosmetic-benefit-item">
          ♡ <span>Clean Beauty Essentials</span>
        </div>
        <div className="cosmetic-benefit-item">
          ✿ <span>Everyday Self-Care</span>
        </div>
        <div className="cosmetic-benefit-item">
          ✧ <span>Cruelty-Free & Natural</span>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="cosmetic-products-sec" id="cosmetic-products">
        <div className="cosmetic-sec-heading">
          <p className="cosmetic-eyebrow">CURATED COLLECTION</p>
          <h2>
            Our beauty <em>collection.</em>
          </h2>
          <p>Hand-picked formulas for radiant, healthy, and happy skin.</p>
        </div>

        {/* Filter controls */}
        <div className="cosmetic-filters">
          {["All", "Skincare", "Makeup", "Body Care"].map((item) => (
            <button
              key={item}
              className={`cosmetic-filter-btn ${
                category === item ? "active" : ""
              }`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
          <span className="cosmetic-product-count">
            {filteredProducts.length} items found
          </span>
        </div>

        {/* Products Grid */}
        <div className="cosmetic-grid">
          {filteredProducts.map((product) => (
            <article className="cosmetic-card" key={product.id}>
              <div className={`cosmetic-card-image ${product.color}`}>
                <span className="cosmetic-card-emoji">{product.emoji}</span>

                <button
                  className={`cosmetic-card-fav ${
                    favorites.includes(product.id) ? "selected" : ""
                  }`}
                  onClick={() => toggleFavorite(product.id)}
                  aria-label="Save to favorites"
                >
                  <Heart
                    size={17}
                    fill={
                      favorites.includes(product.id) ? "currentColor" : "none"
                    }
                  />
                </button>
              </div>

              <div className="cosmetic-card-body">
                <span className="cosmetic-card-cat">{product.category}</span>

                <div className="cosmetic-card-header">
                  <h3>{product.name}</h3>
                  <strong>${product.price.toFixed(2)}</strong>
                </div>

                <p className="cosmetic-card-tagline">{product.tagline}</p>

                <button
                  className="cosmetic-card-add-btn"
                  onClick={() => addToCart(product)}
                >
                  <Plus size={15} /> Add to bag
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="cosmetic-empty">
            <h3>No products found</h3>
            <p>Try searching for a different keyword or resetting filters.</p>
            <button
              className="cosmetic-btn-primary mt-3"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Cosmetic Brand Philosophy */}
      <section className="cosmetic-about-sec">
        <Sparkles size={28} />
        <h2>
          Beauty begins with <em>self-love.</em>
        </h2>
        <p>
          Take a moment for yourself every day. Find your rhythm, celebrate your
          uniqueness, and let your natural inner confidence shine bright.
        </p>
      </section>

      {/* Cosmetic Footer */}
      <footer className="cosmetic-footer">
        <span className="cosmetic-footer-logo">glow.</span>
        <p>Crafted with love for everyday wellness.</p>
        <small>© 2026 Glow Beauty Store • Kidist Demo Project</small>
      </footer>

      {/* Cart Drawer */}
      {cartOpen && (
        <div
          className="cosmetic-cart-overlay"
          onClick={() => setCartOpen(false)}
        >
          <aside
            className="cosmetic-cart-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cosmetic-cart-header">
              <h2>Your shopping bag ({cartCount})</h2>
              <button
                className="cosmetic-cart-close"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-slate-500">
                <ShoppingBag size={42} className="text-slate-300 mb-3" />
                <h3 className="font-serif text-lg text-slate-800">Your bag is empty</h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  Discover radiant essentials and add your favorites.
                </p>
                <button
                  className="cosmetic-btn-primary text-xs"
                  onClick={() => setCartOpen(false)}
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cosmetic-cart-items">
                  {cart.map((item) => (
                    <div className="cosmetic-cart-item" key={item.id}>
                      <div className={`cosmetic-cart-thumb ${item.color}`}>
                        {item.emoji}
                      </div>

                      <div className="cosmetic-cart-info">
                        <h4>{item.name}</h4>
                        <p>${item.price.toFixed(2)}</p>

                        <div className="cosmetic-qty-controls">
                          <button
                            onClick={() => changeQuantity(item.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => changeQuantity(item.id, 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>

                      <strong className="cosmetic-cart-item-total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </strong>
                    </div>
                  ))}
                </div>

                <div className="cosmetic-cart-footer">
                  <div className="cosmetic-subtotal-row">
                    <span>Subtotal</span>
                    <strong>${cartTotal.toFixed(2)}</strong>
                  </div>

                  <div className="cosmetic-shipping-notice">
                    {cartTotal >= 50
                      ? "✨ You've unlocked FREE Shipping!"
                      : `Add $${(50 - cartTotal).toFixed(
                          2,
                        )} more to unlock Free Shipping.`}
                  </div>

                  <button
                    className="cosmetic-btn-primary cosmetic-checkout-btn"
                    onClick={() =>
                      alert(
                        "Demo Notice: This is an interactive demo built by Kidist. No real payments are processed.",
                      )
                    }
                  >
                    Proceed to Checkout ↗
                  </button>

                  <small>Demo store mode • No live payments required</small>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
