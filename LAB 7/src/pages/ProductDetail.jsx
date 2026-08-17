import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ShieldCheck, MapPin, ShoppingCart, Zap, Truck, RotateCcw, Check, Share2, Heart } from 'lucide-react';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, deliveryLocation } = useCart();
  const product = products.find(p => p.id === id) || products[0];

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);

  const imagesList = product.images && product.images.length > 0 ? product.images : [product.image];

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px 0', minHeight: '85vh' }}>
      <div className="amazon-container">
        
        {/* Breadcrumb Links */}
        <div style={{ fontSize: '12px', color: '#565959', marginBottom: '20px' }}>
          <Link to="/" style={{ color: '#565959' }}>Home</Link> &gt;{' '}
          <Link to={`/products?cat=${encodeURIComponent(product.category)}`} style={{ color: '#565959' }}>{product.category}</Link> &gt;{' '}
          <span style={{ color: '#111', fontWeight: 600 }}>{product.name}</span>
        </div>

        {/* Product Layout Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 340px', gap: '30px' }}>
          
          {/* Thumbnails Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {imagesList.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumbnail"
                onClick={() => setSelectedImage(img)}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  border: selectedImage === img ? '2px solid var(--amazon-orange)' : '1px solid #d5d9d9',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>

          {/* Main Product Info & Large Image */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            {/* Image Preview Area */}
            <div style={{ textAlign: 'center' }}>
              <img
                src={selectedImage}
                alt={product.name}
                style={{ width: '100%', maxHeight: '420px', objectFit: 'contain', borderRadius: '8px' }}
              />
            </div>

            {/* Title, Specs & Ratings */}
            <div>
              <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#0f1111', lineHeight: '1.3', marginBottom: '10px' }}>
                {product.name}
              </h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ display: 'flex' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "#ffa41c" : "none"} color={i < Math.floor(product.rating) ? "#ffa41c" : "#d5d9d9"} />
                  ))}
                </div>
                <span style={{ fontSize: '14px', color: 'var(--amazon-blue-link)', fontWeight: 600 }}>
                  {product.rating} ratings
                </span>
                <span style={{ color: '#ccc' }}>|</span>
                <span style={{ fontSize: '13px', color: '#565959' }}>
                  {product.reviewCount.toLocaleString()} answered questions
                </span>
              </div>

              {/* Price & Savings */}
              <div style={{ borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '14px 0', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                  {product.discount > 0 && <span className="badge-discount">-{product.discount}%</span>}
                  <span style={{ fontSize: '28px', fontWeight: 800, color: '#0f1111' }}>
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                {product.originalPrice > product.price && (
                  <div style={{ fontSize: '13px', color: '#565959', marginTop: '4px' }}>
                    Typical price: <span style={{ textDecoration: 'line-through' }}>${product.originalPrice.toFixed(2)}</span>
                  </div>
                )}
                {product.prime && (
                  <div style={{ marginTop: '8px' }} className="badge-prime">
                    prime <span>✓</span> Free One-Day Delivery
                  </div>
                )}
              </div>

              {/* Description */}
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>About this item</h4>
                <p style={{ fontSize: '14px', color: '#333', lineHeight: '1.6' }}>
                  {product.description}
                </p>
              </div>

              {/* Technical Specifications Table */}
              {product.specs && (
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>Specifications</h4>
                  <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
                    <tbody>
                      {Object.entries(product.specs).map(([key, val], idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid #f0f0f0' }}>
                          <td style={{ fontWeight: 700, color: '#565959', padding: '6px 0', width: '40%' }}>{key}</td>
                          <td style={{ color: '#111', padding: '6px 0' }}>{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

            </div>
          </div>

          {/* Amazon Buy Box (Right Sidebar) */}
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid #d5d9d9',
              borderRadius: '8px',
              padding: '20px',
              height: 'fit-content',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#0f1111', marginBottom: '8px' }}>
              ${(product.price * quantity).toFixed(2)}
            </div>

            <div style={{ fontSize: '13px', color: '#007600', fontWeight: 700, marginBottom: '12px' }}>
              In Stock ({product.stock} units left)
            </div>

            <div style={{ fontSize: '13px', color: '#565959', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={16} color="var(--amazon-blue-link)" />
              <span>Deliver to {deliveryLocation.city} {deliveryLocation.zipCode}</span>
            </div>

            {/* Quantity Selector */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '13px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Quantity:</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #adb1b8', fontSize: '14px', backgroundColor: '#f0f2f2' }}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
              <button
                onClick={() => addToCart(product, quantity)}
                className="btn-primary-yellow"
                style={{ width: '100%', padding: '12px 0' }}
              >
                <ShoppingCart size={18} /> Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="btn-secondary-orange"
                style={{ width: '100%', padding: '12px 0' }}
              >
                <Zap size={18} /> Buy Now
              </button>
            </div>

            <div style={{ fontSize: '12px', color: '#565959', borderTop: '1px solid #eee', paddingTop: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>Ships from</span> <strong>Amazon</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>Sold by</span> <strong>Amazon Retail</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Returns</span> <strong>Eligible for Return</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
