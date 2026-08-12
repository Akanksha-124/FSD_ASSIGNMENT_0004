import React, { useState } from 'react';
import ProductCard from './ProductCard';

function App() {
  const [closetItemCount, setClosetItemCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filterMood, setFilterMood] = useState('All');

  const handleAddToCloset = (title) => {
    setClosetItemCount(prev => prev + 1);
  };

  // Expanded Product List with 8 items across different categories
  const closetItems = [
    {
      id: 1,
      title: 'Linen Blend Oversized Blazer',
      designer: 'SAVANA EDITION',
      category: 'Clothing',
      price: 68.00,
      oldPrice: 89.00,
      rating: 4.9,
      reviews: 320,
      badge: 'TRENDING',
      imageIcon: '🧥',
      description: 'Relaxed fit tailored linen jacket with tortoise shell buttons.'
    },
    {
      id: 2,
      title: 'Pleated Midi Sun Dress',
      designer: 'SAVANA CHIC',
      category: 'Dresses',
      price: 54.50,
      oldPrice: 72.00,
      rating: 4.7,
      reviews: 198,
      badge: 'NEW',
      imageIcon: '👗',
      description: 'Flowy sleeveless midi dress featuring soft accordion pleats.'
    },
    {
      id: 3,
      title: 'Minimalist Leather Tote',
      designer: 'SAVANA ESSENTIALS',
      category: 'Accessories',
      price: 95.00,
      oldPrice: 120.00,
      rating: 4.8,
      reviews: 412,
      badge: 'POPULAR',
      imageIcon: '👜',
      description: 'Structured Italian leather tote bag with magnetic clip enclosure.'
    },
    {
      id: 4,
      title: 'Chunky Knit Crop Cardigan',
      designer: 'SAVANA COZY',
      category: 'Clothing',
      price: 49.99,
      oldPrice: 65.00,
      rating: 4.6,
      reviews: 145,
      badge: '15% OFF',
      imageIcon: '🧶',
      description: 'Ultra-soft hand-knitted crop cardigan in natural oatmeal shade.'
    },
    {
      id: 5,
      title: 'Monochrome Strap Sandals',
      designer: 'SAVANA FOOTWEAR',
      category: 'Shoes',
      price: 58.00,
      oldPrice: 75.00,
      rating: 4.8,
      reviews: 112,
      badge: 'BEST SELLER',
      imageIcon: '👡',
      description: 'Handcrafted leather open-toe sandals with cushioned insoles.'
    },
    {
      id: 6,
      title: 'Silk Satin Wrap Top',
      designer: 'SAVANA CHIC',
      category: 'Clothing',
      price: 42.00,
      oldPrice: 59.00,
      rating: 4.9,
      reviews: 89,
      badge: 'NEW DROP',
      imageIcon: '👚',
      description: 'Lustrous v-neck wrap blouse with adjustable side tie tie-ups.'
    },
    {
      id: 7,
      title: 'High-Waist Tailored Trousers',
      designer: 'SAVANA EDITION',
      category: 'Clothing',
      price: 62.00,
      oldPrice: 80.00,
      rating: 4.7,
      reviews: 167,
      badge: 'POPULAR',
      imageIcon: '👖',
      description: 'Wide-leg relaxed pleat trousers crafted from lightweight twill.'
    },
    {
      id: 8,
      title: 'Vintage Amber Sunglasses',
      designer: 'SAVANA ACCESSORIES',
      category: 'Accessories',
      price: 28.00,
      oldPrice: 38.00,
      rating: 4.9,
      reviews: 254,
      badge: 'MUST HAVE',
      imageIcon: '🕶️',
      description: 'Retro square UV400 protection sunglasses in warm tortoiseshell.'
    }
  ];

  // Filtering Logic for categories
  const filteredItems = closetItems.filter(item => {
    if (activeCategory !== 'All' && item.category !== activeCategory) return false;
    if (filterMood === 'Under $60' && item.price >= 60) return false;
    if (filterMood === 'New Drop' && !item.badge.includes('NEW')) return false;
    return true;
  });

  return (
    <div className="app-container">
      {/* Savana Announcement Ticker */}
      <div className="top-ticker">
        ✨ Free Worldwide Shipping On Orders Over $75 | Use Code: SAVANA2026 ✨
      </div>

      {/* Header */}
      <header className="mycloset-header">
        <div className="header-top">
          <a href="#home" className="brand-logo">
            my<span className="logo-sparkle">closet</span>
            <span className="logo-badge">SAVANA EDIT</span>
          </a>

          <div className="header-search">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search dresses, linen, sandals, bags..."
            />
            <button className="search-btn">🔍</button>
          </div>

          <div className="header-actions">
            <button className="action-btn">👤 Account</button>
            <button className="action-btn">❤️ Wishlist</button>
            <button className="action-btn">
              <span>🛍️ Bag</span>
              <span className="closet-counter">{closetItemCount}</span>
            </button>
          </div>
        </div>

        {/* Category Navigation Bar - Options */}
        <nav className="closet-nav">
          {['All', 'Clothing', 'Dresses', 'Accessories', 'Shoes', 'Outerwear', 'Knitwear', 'Sale'].map((cat) => (
            <span 
              key={cat} 
              className={`closet-nav-item ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </span>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Savana Warm Hero Banner */}
        <section className="hero-closet-banner">
          <div>
            <div className="hero-pill">Summer Collection '26</div>
            <h1 className="hero-heading">
              Elegance in <span>Simplicity</span>
            </h1>
            <p className="hero-description">
              Discover eco-crafted linen, flowy dresses, and timeless accessories designed for effortless everyday wear.
            </p>
            <div className="hero-cta-group">
              <button className="btn-savana-dark">Shop Collection</button>
              <button className="btn-savana-light">Stylist Edit 🌾</button>
            </div>
          </div>

          {/* AI / Style Assistant Card */}
          <div className="ai-style-card">
            <div className="ai-card-title">Explore Style Aesthetics</div>
            <p className="ai-card-desc">Filter collections by your favorite aesthetic:</p>
            <div className="ai-chip-group">
              <span className="ai-chip">🌾 Eco Linen</span>
              <span className="ai-chip">🏖️ Resort Luxe</span>
              <span className="ai-chip">☕ Neutral Minimalist</span>
              <span className="ai-chip">✨ Evening Glow</span>
            </div>
          </div>
        </section>

        {/* Section Header */}
        <div className="section-bar">
          <div>
            <h2 className="section-head-title">Curated Arrivals ({filteredItems.length})</h2>
          </div>
          <div className="filter-pills">
            {['All', 'New Drop', 'Under $60'].map((f) => (
              <span 
                key={f} 
                className={`filter-pill ${filterMood === f ? 'active' : ''}`}
                onClick={() => setFilterMood(f)}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Reusable Product Card Grid */}
        <div className="mycloset-cards-grid">
          {filteredItems.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              designer={item.designer}
              price={item.price}
              oldPrice={item.oldPrice}
              rating={item.rating}
              reviews={item.reviews}
              badge={item.badge}
              imageIcon={item.imageIcon}
              description={item.description}
              onAddToCloset={handleAddToCloset}
            />
          ))}
        </div>
      </main>

      {/* Savana Chic Footer */}
      <footer className="mycloset-footer">
        <div className="stylist-banner">
          <h3 className="stylist-title">Join The <span>Savana Club</span></h3>
          <p className="stylist-sub">Get 15% off your first order & exclusive access to capsule launches.</p>
          <div className="subscribe-box">
            <input 
              type="email" 
              className="subscribe-input" 
              placeholder="Enter your email address..."
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>

        <div className="footer-main-grid">
          <div className="footer-about">
            <h3>my<span style={{ color: '#d4a373' }}>closet</span></h3>
            <p>Thoughtfully crafted apparel for conscious living and effortless beauty.</p>
          </div>

          <div className="footer-column">
            <h4>Shop</h4>
            <ul>
              <li><a href="#new">New Arrivals</a></li>
              <li><a href="#bestsellers">Best Sellers</a></li>
              <li><a href="#linen">Linen Collection</a></li>
              <li><a href="#sale">Sale & Outlet</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#sustainability">Sustainability</a></li>
              <li><a href="#ethical">Ethical Factories</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Customer Care</h4>
            <ul>
              <li><a href="#shipping">Shipping & Returns</a></li>
              <li><a href="#orders">Track Order</a></li>
              <li><a href="#size">Size Guide</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2026 MyCloset x Savana Edition Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
