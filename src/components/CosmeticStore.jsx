import React, { useState, useEffect } from "react";
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
  Loader2,
} from "lucide-react";
import { initialCosmeticProducts } from "../data/cosmeticProducts";
import "./CosmeticStore.css";

// Backend API base URL — change to your deployed URL in production
const API_BASE = "http://localhost:5000";

export default function CosmeticStore({ onClose, isModal = false }) {
  // ── Products (fetched from PostgreSQL backend) ──────────────────────
  const [products, setProducts]     = useState([]);
  const [loadingDB, setLoadingDB]   = useState(true);
  const [dbConnected, setDbConnected] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/products`);
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        // Ensure every price is a JS number
        setProducts(data.map((p) => ({ ...p, price: parseFloat(p.price) })));
        setDbConnected(true);
      } catch {
        // Fallback to local static data if backend is offline
        setProducts(initialCosmeticProducts);
        setDbConnected(false);
      } finally {
        setLoadingDB(false);
      }
    };
    fetchProducts();
  }, []);

  // ── State ────────────────────────────────────────────────────────────
  const [search,   setSearch]   = useState("");
  const [category, setCategory] = useState("All");
  const [cart,     setCart]     = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // ── Derived values ───────────────────────────────────────────────────
  const filteredProducts = products.filter((p) => {
    const matchSearch   = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    return matchSearch && matchCategory;
  });

  // Real $ calculations — always precise to 2 decimal places
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = parseFloat(
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
  );
  const remainingForFreeShipping = parseFloat((50 - cartTotal).toFixed(2));

  // ── Cart actions ─────────────────────────────────────────────────────
  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 2500);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, price: parseFloat(product.price), quantity: 1 }];
    });
    showToast(`✔ Added ${product.name} — $${parseFloat(product.price).toFixed(2)}`);
  };

  // Add (+1) or subtract (-1) — removes item when quantity hits 0
  const changeQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // ── Render ───────────────────────────────────────────────────────────
  return (
    <div className="cosmetic-store-scope">

      {/* ── Top demo / DB status bar ── */}
      <div className="cosmetic-top-banner">
        <div className="flex items-center gap-2">
          <span className="cosmetic-demo-badge">Interactive Project Demo</span>
          <span>✨ Your beauty, your glow — free shipping over $50</span>
          {/* DB connection badge */}
          <span
            className={`ml-2 px-2 py-0.5 rounded-full text-[10px] font-bold ${
              dbConnected
                ? "bg-emerald-500/20 text-emerald-200"
                : "bg-amber-500/20 text-amber-200"
            }`}
          >
            {dbConnected ? "🟢 PostgreSQL" : "🟡 Offline mode"}
          </span>
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

      {/* ── Toast notification ── */}
      {toastMsg && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-4 py-2 rounded-full text-xs shadow-lg flex items-center gap-2">
          <Check size={14} className="text-emerald-400" />
          {toastMsg}
        </div>
      )}

      {/* ── Navbar ── */}
      <header className="cosmetic-navbar">
        <a className="cosmetic-logo" href="#cosmetic-home">
          <Sparkles size={22} />
          <span>glow.<small>BEAUTY STORE</small></span>
        </a>

        <div className="cosmetic-nav-links">
          {["All", "Skincare", "Makeup", "Body Care"].map((cat) => (
            <button
              key={cat}
              className={category === cat ? "active" : ""}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
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

      {/* ── Hero ── */}
      <section className="cosmetic-hero" id="cosmetic-home">
        <div className="cosmetic-hero-text">
          <p className="cosmetic-eyebrow">YOUR EVERYDAY BEAUTY RITUAL</p>
          <h1>Let your natural<br />beauty <em>glow.</em></h1>
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

      {/* ── Benefits ── */}
      <section className="cosmetic-benefits">
        <div className="cosmetic-benefit-item">♡ <span>Clean Beauty Essentials</span></div>
        <div className="cosmetic-benefit-item">✿ <span>Everyday Self-Care</span></div>
        <div className="cosmetic-benefit-item">✧ <span>Cruelty-Free & Natural</span></div>
      </section>

      {/* ── Products Catalog ── */}
      <section className="cosmetic-products-sec" id="cosmetic-products">
        <div className="cosmetic-sec-heading">
          <p className="cosmetic-eyebrow">CURATED COLLECTION</p>
          <h2>Our beauty <em>collection.</em></h2>
          <p>Hand-picked formulas for radiant, healthy, and happy skin.</p>
        </div>

        {/* Category filter pills */}
        <div className="cosmetic-filters">
          {["All", "Skincare", "Makeup", "Body Care"].map((item) => (
            <button
              key={item}
              className={`cosmetic-filter-btn ${category === item ? "active" : ""}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
          <span className="cosmetic-product-count">
            {filteredProducts.length} items found
          </span>
        </div>

        {/* Loading spinner */}
        {loadingDB ? (
          <div className="flex items-center justify-center py-16 gap-3 text-slate-500">
            <Loader2 size={22} className="animate-spin text-indigo-500" />
            <span className="text-sm">Loading products from database…</span>
          </div>
        ) : (
          <>
            {/* Products Grid */}
            <div className="cosmetic-grid">
              {filteredProducts.map((product) => (
                <article className="cosmetic-card" key={product.id}>
                  <div className={`cosmetic-card-image ${product.color}`}>
                    <span className="cosmetic-card-emoji">{product.emoji}</span>
                    <button
                      className={`cosmetic-card-fav ${favorites.includes(product.id) ? "selected" : ""}`}
                      onClick={() => toggleFavorite(product.id)}
                      aria-label="Save to favorites"
                    >
                      <Heart
                        size={17}
                        fill={favorites.includes(product.id) ? "currentColor" : "none"}
                      />
                    </button>
                  </div>

                  <div className="cosmetic-card-body">
                    <span className="cosmetic-card-cat">{product.category}</span>
                    <div className="cosmetic-card-header">
                      <h3>{product.name}</h3>
                      {/* Real $ price — always 2 decimal places */}
                      <strong>${parseFloat(product.price).toFixed(2)}</strong>
                    </div>
                    <p className="cosmetic-card-tagline">{product.tagline}</p>

                    {/* ── How to Use (shown only if product has this data) ── */}
                    {product.howToUse && (
                      <div className="mt-3 mb-2">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                          How to Use
                        </p>
                        <ol className="space-y-1">
                          {product.howToUse.map((step, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                              <span className="mt-0.5 w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {/* ── Advantages (shown only if product has this data) ── */}
                    {product.advantages && (
                      <div className="mt-2 mb-3">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                          Advantages
                        </p>
                        <ul className="space-y-1">
                          {product.advantages.map((adv, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                              <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                              {adv}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

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
                <p>Try a different keyword or reset filters.</p>
                <button
                  className="cosmetic-btn-primary mt-3"
                  onClick={() => { setSearch(""); setCategory("All"); }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* ── Brand Philosophy ── */}
      <section className="cosmetic-about-sec">
        <Sparkles size={28} />
        <h2>Beauty begins with <em>self-love.</em></h2>
        <p>
          Take a moment for yourself every day. Find your rhythm, celebrate your
          uniqueness, and let your natural inner confidence shine bright.
        </p>
      </section>

      {/* ── Footer ── */}
      <footer className="cosmetic-footer">
        <span className="cosmetic-footer-logo">glow.</span>
        <p>Crafted with love for everyday wellness.</p>
        <small>© 2026 Glow Beauty Store • Kidist Demo Project</small>
      </footer>

      {/* ── Cart Drawer ── */}
      {cartOpen && (
        <div className="cosmetic-cart-overlay" onClick={() => setCartOpen(false)}>
          <aside className="cosmetic-cart-drawer" onClick={(e) => e.stopPropagation()}>
            {/* Cart header */}
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
                {/* Cart items */}
                <div className="cosmetic-cart-items">
                  {cart.map((item) => {
                    // Real $ line total calculated live
                    const lineTotal = parseFloat((item.price * item.quantity).toFixed(2));

                    return (
                      <div className="cosmetic-cart-item" key={item.id}>
                        <div className={`cosmetic-cart-thumb ${item.color}`}>
                          {item.emoji}
                        </div>

                        <div className="cosmetic-cart-info">
                          <h4>{item.name}</h4>
                          {/* Unit price */}
                          <p>${parseFloat(item.price).toFixed(2)} each</p>

                          {/* ── Quantity controls with real $ feedback ── */}
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

                        <div className="flex flex-col items-end gap-2">
                          {/* Real $ line total — updates live on every +/− */}
                          <strong className="cosmetic-cart-item-total">
                            ${lineTotal.toFixed(2)}
                          </strong>
                          {/* Remove button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-400 hover:text-rose-500 transition"
                            aria-label="Remove item"
                          >
                            <X size={13} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Cart footer with real $ totals */}
                <div className="cosmetic-cart-footer">
                  {/* Subtotal */}
                  <div className="cosmetic-subtotal-row">
                    <span>Subtotal ({cartCount} item{cartCount !== 1 ? "s" : ""})</span>
                    <strong>${cartTotal.toFixed(2)}</strong>
                  </div>

                  {/* Free shipping progress */}
                  <div className="cosmetic-shipping-notice">
                    {cartTotal >= 50
                      ? "✨ You've unlocked FREE Shipping!"
                      : `Add $${remainingForFreeShipping.toFixed(2)} more for Free Shipping`}
                  </div>

                  {/* Free shipping progress bar */}
                  <div className="w-full bg-slate-100 rounded-full h-1.5 mb-3">
                    <div
                      className="bg-emerald-400 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((cartTotal / 50) * 100, 100)}%` }}
                    />
                  </div>

                  <button
                    className="cosmetic-btn-primary cosmetic-checkout-btn"
                    onClick={() =>
                      alert(
                        `Demo Notice: Cart total is $${cartTotal.toFixed(2)}.\nThis is an interactive demo built by Kidist. No real payments are processed.`
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
