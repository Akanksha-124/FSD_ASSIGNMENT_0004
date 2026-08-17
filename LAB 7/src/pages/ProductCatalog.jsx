import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Filter, Star, Check, ArrowUpDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductCatalog = () => {
  const [searchParams] = useSearchParams();
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useCart();
  
  const queryParam = searchParams.get('q') || searchQuery;
  const catParam = searchParams.get('cat') || selectedCategory;

  const [activeCategory, setActiveCategory] = useState(catParam || 'All Departments');
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1500);
  const [primeOnly, setPrimeOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    if (catParam) setActiveCategory(catParam);
  }, [catParam]);

  // Filtering logic
  let filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All Departments' || product.category === activeCategory;
    const matchesQuery = !queryParam || product.name.toLowerCase().includes(queryParam.toLowerCase()) || product.description.toLowerCase().includes(queryParam.toLowerCase());
    const matchesRating = product.rating >= minRating;
    const matchesPrice = product.price <= maxPrice;
    const matchesPrime = !primeOnly || product.prime;

    return matchesCategory && matchesQuery && matchesRating && matchesPrice && matchesPrime;
  });

  // Sorting logic
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div style={{ backgroundColor: 'var(--amazon-bg-gray)', padding: '20px 0', minHeight: '85vh' }}>
      <div className="amazon-container">
        
        {/* Results Header */}
        <div style={{ backgroundColor: '#fff', padding: '16px 20px', borderRadius: '8px', marginBottom: '20px', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ fontSize: '14px', color: '#565959' }}>
              Showing {filteredProducts.length} results {queryParam ? `for "${queryParam}"` : `in ${activeCategory}`}
            </span>
          </div>

          {/* Sort Control */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
            <ArrowUpDown size={14} /> Sort by:
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ padding: '6px 12px', borderRadius: '4px', border: '1px solid #adb1b8', fontSize: '13px', backgroundColor: '#f0f2f2' }}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Avg. Customer Review</option>
            </select>
          </div>
        </div>

        {/* Catalog Main Layout (Sidebar + Product Grid) */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '20px' }}>
          
          {/* Sidebar Filters */}
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', height: 'fit-content' }}>
            
            <h3 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '16px', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>
              Filters
            </h3>

            {/* Department List */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '10px' }}>Department</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px' }}>
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        setActiveCategory(cat);
                        setSelectedCategory(cat);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: activeCategory === cat ? 'var(--amazon-blue-link-hover)' : '#0f1111',
                        fontWeight: activeCategory === cat ? 700 : 400,
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prime Eligibility */}
            <div style={{ marginBottom: '24px', borderTop: '1px solid #eee', paddingTop: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}>
                <input
                  type="checkbox"
                  checked={primeOnly}
                  onChange={(e) => setPrimeOnly(e.target.checked)}
                />
                <span className="badge-prime">prime</span> Only Eligible
              </label>
            </div>

            {/* Customer Reviews Rating Filter */}
            <div style={{ marginBottom: '24px', borderTop: '1px solid #eee', paddingTop: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '10px' }}>Customer Reviews</h4>
              {[4, 3, 2].map((stars) => (
                <button
                  key={stars}
                  onClick={() => setMinRating(minRating === stars ? 0 : stars)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    width: '100%',
                    padding: '4px 0',
                    background: 'none',
                    border: 'none',
                    fontSize: '13px',
                    color: minRating === stars ? 'var(--amazon-blue-link-hover)' : '#0f1111',
                    fontWeight: minRating === stars ? 700 : 400,
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < stars ? "#ffa41c" : "none"} color={i < stars ? "#ffa41c" : "#d5d9d9"} />
                    ))}
                  </div>
                  <span>& Up</span>
                </button>
              ))}
            </div>

            {/* Max Price Range Slider */}
            <div style={{ borderTop: '1px solid #eee', paddingTop: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '8px' }}>
                Max Price: ${maxPrice}
              </h4>
              <input
                type="range"
                min="30"
                max="1500"
                step="20"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--amazon-orange)' }}
              />
            </div>

          </div>

          {/* Product Grid Area */}
          <div>
            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div style={{ backgroundColor: '#fff', padding: '60px', textAlign: 'center', borderRadius: '8px' }}>
                <h3>No products found</h3>
                <p style={{ color: '#666', marginTop: '6px' }}>Try resetting your filter parameters or search term.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
