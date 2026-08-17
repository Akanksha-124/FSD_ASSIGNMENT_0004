import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronRight, ShieldCheck, ShoppingBag, PhoneCall, Gift, Tag, Compass } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const SubHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { setSelectedCategory } = useCart();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav style={{ backgroundColor: 'var(--amazon-subnav-bg)', color: '#fff', fontSize: '14px', height: '39px', display: 'flex', alignItems: 'center', padding: '0 16px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%' }}>
          
          {/* Hamburger Drawer Trigger */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 700,
              padding: '4px 8px',
              borderRadius: '2px',
              cursor: 'pointer'
            }}
            className="subnav-item"
          >
            <Menu size={20} />
            <span>All</span>
          </button>

          {/* Nav Tab Links */}
          <NavLink to="/deals" className={({ isActive }) => `subnav-link ${isActive ? 'active' : ''}`}>
            <Tag size={15} style={{ color: 'var(--amazon-yellow)' }} /> Today's Deals
          </NavLink>

          <NavLink to="/products" className={({ isActive }) => `subnav-link ${isActive ? 'active' : ''}`}>
            <Compass size={15} /> All Products
          </NavLink>

          <NavLink to="/customer-service" className={({ isActive }) => `subnav-link ${isActive ? 'active' : ''}`}>
            <PhoneCall size={15} /> Customer Service
          </NavLink>

          <NavLink to="/products?cat=Electronics" className="subnav-link">
            Electronics
          </NavLink>

          <NavLink to="/products?cat=Fashion" className="subnav-link">
            Fashion
          </NavLink>

          <NavLink to="/products?cat=Home%20%26%20Kitchen" className="subnav-link">
            Home & Kitchen
          </NavLink>

          <NavLink to="/products?cat=Gaming" className="subnav-link">
            Gaming
          </NavLink>

          <NavLink to="/orders" className="subnav-link">
            <Gift size={15} /> Gift Cards & Orders
          </NavLink>

          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: 'var(--amazon-yellow)' }}>
            <ShieldCheck size={16} /> 100% Secure Shopping | Prime Fast Delivery
          </div>

        </div>
      </nav>

      {/* Hamburger Drawer Modal */}
      {isDrawerOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex' }}>
          <div style={{ width: '365px', height: '100%', backgroundColor: '#fff', overflowY: 'auto', boxShadow: '5px 0 15px rgba(0,0,0,0.3)', animation: 'slideRight 0.25s ease-out' }}>
            
            {/* Drawer Header */}
            <div style={{ backgroundColor: 'var(--amazon-subnav-bg)', color: '#fff', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', fontWeight: 700 }}>
                <ShoppingBag color="var(--amazon-yellow)" /> Hello, Sign In
              </div>
              <button onClick={() => setIsDrawerOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                <X size={24} />
              </button>
            </div>

            {/* Drawer Content Sections */}
            <div style={{ padding: '16px 0', color: '#111' }}>
              
              <div style={{ padding: '12px 20px 8px 20px', fontSize: '16px', fontWeight: 800, borderBottom: '1px solid #eee' }}>
                Trending & Deals
              </div>
              <NavLink to="/deals" onClick={() => setIsDrawerOpen(false)} className="drawer-item">
                Today's Lightning Deals <ChevronRight size={16} color="#888" />
              </NavLink>
              <NavLink to="/products" onClick={() => setIsDrawerOpen(false)} className="drawer-item">
                Best Sellers <ChevronRight size={16} color="#888" />
              </NavLink>

              <div style={{ padding: '20px 20px 8px 20px', fontSize: '16px', fontWeight: 800, borderBottom: '1px solid #eee' }}>
                Shop By Department
              </div>
              {["Electronics", "Fashion", "Home & Kitchen", "Gaming", "Beauty & Personal Care", "Books", "Sports & Outdoors"].map((cat, idx) => (
                <NavLink
                  key={idx}
                  to={`/products?cat=${encodeURIComponent(cat)}`}
                  onClick={() => handleCategoryClick(cat)}
                  className="drawer-item"
                >
                  {cat} <ChevronRight size={16} color="#888" />
                </NavLink>
              ))}

              <div style={{ padding: '20px 20px 8px 20px', fontSize: '16px', fontWeight: 800, borderBottom: '1px solid #eee' }}>
                Help & Settings
              </div>
              <NavLink to="/orders" onClick={() => setIsDrawerOpen(false)} className="drawer-item">
                Your Orders & Tracking <ChevronRight size={16} color="#888" />
              </NavLink>
              <NavLink to="/customer-service" onClick={() => setIsDrawerOpen(false)} className="drawer-item">
                Customer Service <ChevronRight size={16} color="#888" />
              </NavLink>

            </div>
          </div>
        </div>
      )}

      <style>{`
        .subnav-link {
          color: #fff;
          padding: 6px 8px;
          border-radius: 2px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-weight: 500;
          transition: border-color 0.2s;
          border: 1px solid transparent;
        }
        .subnav-link:hover, .subnav-item:hover {
          border-color: #fff;
        }
        .subnav-link.active {
          border-bottom: 2px solid var(--amazon-yellow);
          color: var(--amazon-yellow);
          font-weight: 700;
        }
        .drawer-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          color: #222;
          font-size: 14px;
          transition: background 0.15s;
        }
        .drawer-item:hover {
          background-color: #eaeded;
          color: #000;
          text-decoration: none;
        }
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
};
