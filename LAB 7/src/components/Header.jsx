import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, MapPin, ChevronDown, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { categories } from '../data/products';

export const Header = () => {
  const {
    totalCartItems,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    deliveryLocation,
    setIsLocationModalOpen
  } = useCart();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?q=${encodeURIComponent(searchQuery)}&cat=${encodeURIComponent(selectedCategory)}`);
  };

  return (
    <header style={{ backgroundColor: 'var(--amazon-nav-bg)', color: '#fff', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '60px', padding: '0 16px', gap: '16px' }}>
        
        {/* Amazon Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', padding: '6px 8px', borderRadius: '2px', border: '1px solid transparent' }} className="nav-hover">
          <div style={{ display: 'flex', alignItems: 'baseline', fontWeight: 800, fontSize: '24px', letterSpacing: '-0.5px', color: '#fff' }}>
            amazon<span style={{ fontSize: '13px', color: 'var(--amazon-orange)', fontWeight: 700, marginLeft: '2px' }}>.in</span>
          </div>
        </Link>

        {/* Location Selector */}
        <div
          onClick={() => setIsLocationModalOpen(true)}
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '6px 8px', borderRadius: '2px' }}
          className="nav-hover"
        >
          <MapPin size={18} style={{ color: 'var(--amazon-yellow)', marginRight: '4px', marginTop: '10px' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '12px', color: '#ccc', lineHeight: '12px' }}>Delivering to {deliveryLocation.city}</span>
            <span style={{ fontSize: '14px', fontWeight: 700, lineHeight: '16px' }}>Update location ({deliveryLocation.zipCode})</span>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} style={{ display: 'flex', flex: 1, height: '40px', borderRadius: '4px', overflow: 'hidden' }}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              backgroundColor: '#f3f3f3',
              border: 'none',
              padding: '0 10px',
              fontSize: '13px',
              color: '#333',
              cursor: 'pointer',
              outline: 'none',
              borderRight: '1px solid #ddd'
            }}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              padding: '0 12px',
              border: 'none',
              outline: 'none',
              fontSize: '15px'
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: 'var(--amazon-yellow)',
              border: 'none',
              width: '45px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--amazon-yellow-hover)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--amazon-yellow)'}
          >
            <Search size={22} color="#111" />
          </button>
        </form>

        {/* Right Side Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          
          {/* Language Flag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', padding: '6px' }} className="nav-hover">
            <span style={{ fontSize: '16px' }}>🇺🇸</span>
            <span style={{ fontSize: '14px', fontWeight: 700 }}>EN</span>
            <ChevronDown size={12} color="#888" />
          </div>

          {/* Account & Lists */}
          <Link to="/orders" style={{ color: '#fff', padding: '6px 8px' }} className="nav-hover">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '12px', color: '#ccc', lineHeight: '12px' }}>Hello, Sign in</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                <span style={{ fontSize: '14px', fontWeight: 700, lineHeight: '16px' }}>Account & Lists</span>
                <ChevronDown size={12} color="#888" />
              </div>
            </div>
          </Link>

          {/* Returns & Orders Tab */}
          <Link to="/orders" style={{ color: '#fff', padding: '6px 8px' }} className="nav-hover">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '12px', color: '#ccc', lineHeight: '12px' }}>Returns</span>
              <span style={{ fontSize: '14px', fontWeight: 700, lineHeight: '16px' }}>& Orders</span>
            </div>
          </Link>

          {/* Cart Icon & Tab */}
          <Link to="/cart" style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 8px', position: 'relative' }} className="nav-hover">
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <ShoppingCart size={32} color="#fff" />
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  left: '13px',
                  color: 'var(--amazon-orange)',
                  fontSize: '16px',
                  fontWeight: 800,
                  minWidth: '18px',
                  textAlign: 'center'
                }}
              >
                {totalCartItems}
              </span>
            </div>
            <span style={{ fontSize: '14px', fontWeight: 700, marginTop: '10px' }}>Cart</span>
          </Link>

        </div>
      </div>
      
      <style>{`
        .nav-hover:hover {
          outline: 1px solid #fff;
          border-radius: 2px;
        }
      `}</style>
    </header>
  );
};
