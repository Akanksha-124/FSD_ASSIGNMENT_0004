import React, { useState } from 'react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Zap, Clock, Filter, Tag } from 'lucide-react';

export const Deals = () => {
  const [selectedDept, setSelectedDept] = useState('All Departments');
  const [minDiscount, setMinDiscount] = useState(0);

  const dealProducts = products.filter(product => {
    const matchesDept = selectedDept === 'All Departments' || product.category === selectedDept;
    const matchesDiscount = product.discount >= minDiscount;
    return matchesDept && matchesDiscount && product.discount > 0;
  });

  return (
    <div style={{ backgroundColor: 'var(--amazon-bg-gray)', padding: '24px 0', minHeight: '80vh' }}>
      <div className="amazon-container">
        
        {/* Banner Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #131921 0%, #232f3e 100%)',
            color: '#fff',
            borderRadius: '12px',
            padding: '30px 40px',
            marginBottom: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Zap color="var(--amazon-yellow)" fill="var(--amazon-yellow)" size={28} />
              <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--amazon-yellow)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Amazon Deals Hub
              </span>
            </div>
            <h1 style={{ fontSize: '32px', fontWeight: 800, margin: 0 }}>
              Today's Lightning Deals & Offers
            </h1>
            <p style={{ fontSize: '15px', color: '#ccc', marginTop: '6px' }}>
              Save big on thousands of top-rated electronics, fashion, home essentials & gaming.
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '16px 24px', borderRadius: '8px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--amazon-yellow)', fontWeight: 700 }}>
              <Clock size={18} /> Limited Time Offers
            </div>
            <div style={{ fontSize: '24px', fontWeight: 900, marginTop: '4px' }}>
              Ends in 05:42:18
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div style={{ backgroundColor: '#fff', padding: '16px 24px', borderRadius: '8px', marginBottom: '24px', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 700 }}>
            <Filter size={18} color="var(--amazon-blue-link)" /> Department Filter:
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {categories.map((dept, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDept(dept)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: selectedDept === dept ? 700 : 500,
                  backgroundColor: selectedDept === dept ? 'var(--amazon-nav-bg)' : '#f0f2f2',
                  color: selectedDept === dept ? '#fff' : '#0f1111',
                  border: '1px solid #d5d9d9',
                  transition: 'all 0.15s ease'
                }}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Discount threshold filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid #eee', paddingTop: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#565959' }}>Discount Amount:</span>
            {[0, 15, 25, 40].map((disc) => (
              <button
                key={disc}
                onClick={() => setMinDiscount(disc)}
                style={{
                  fontSize: '13px',
                  fontWeight: minDiscount === disc ? 700 : 500,
                  color: minDiscount === disc ? 'var(--amazon-blue-link)' : '#333',
                  background: 'none',
                  border: 'none',
                  textDecoration: minDiscount === disc ? 'underline' : 'none',
                  cursor: 'pointer'
                }}
              >
                {disc === 0 ? 'All Discounts' : `${disc}% Off or More`}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {dealProducts.length > 0 ? (
          <div className="product-grid">
            {dealProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div style={{ backgroundColor: '#fff', padding: '60px', textAlign: 'center', borderRadius: '8px' }}>
            <Tag size={48} color="#ccc" style={{ marginBottom: '12px' }} />
            <h3>No active deals found matching your selected filters</h3>
            <p style={{ color: '#666', marginTop: '6px' }}>Try resetting department or discount threshold.</p>
          </div>
        )}

      </div>
    </div>
  );
};
