import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Check, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  // Helper for rendering star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={15} fill="#ffa41c" color="#ffa41c" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} style={{ position: 'relative', display: 'inline-block' }}>
            <Star size={15} color="#ffa41c" />
            <span style={{ position: 'absolute', left: 0, top: 0, width: '50%', overflow: 'hidden' }}>
              <Star size={15} fill="#ffa41c" color="#ffa41c" />
            </span>
          </span>
        );
      } else {
        stars.push(<Star key={i} size={15} color="#d5d9d9" />);
      }
    }
    return stars;
  };

  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid #e7e7e7',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        position: 'relative'
      }}
      className="product-card-hover"
    >
      <div>
        {/* Badge header */}
        {product.badge && (
          <div style={{ marginBottom: '8px' }}>
            <span className={product.badge.includes('Best') ? 'badge-best-seller' : 'badge-limited'}>
              {product.badge}
            </span>
          </div>
        )}

        {/* Product Image */}
        <Link to={`/product/${product.id}`} style={{ display: 'block', textAlignment: 'center', marginBottom: '12px' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'contain',
              borderRadius: '4px'
            }}
          />
        </Link>

        {/* Category & Title */}
        <div style={{ fontSize: '12px', color: '#565959', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {product.category}
        </div>
        <Link
          to={`/product/${product.id}`}
          style={{
            fontSize: '15px',
            fontWeight: 600,
            color: '#0f1111',
            lineHeight: '1.3',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            marginBottom: '8px',
            textDecoration: 'none'
          }}
          className="title-hover"
        >
          {product.name}
        </Link>

        {/* Rating & Reviews */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {renderStars(product.rating)}
          </div>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--amazon-blue-link)' }}>
            {product.rating}
          </span>
          <span style={{ fontSize: '12px', color: '#565959' }}>
            ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price & Discounts */}
        <div style={{ marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            {product.discount > 0 && (
              <span className="badge-discount">-{product.discount}%</span>
            )}
            <span style={{ fontSize: '22px', fontWeight: 800, color: '#0f1111' }}>
              ${product.price.toFixed(2)}
            </span>
          </div>

          {product.originalPrice > product.price && (
            <div style={{ fontSize: '12px', color: '#565959', marginTop: '2px' }}>
              List Price: <span style={{ textDecoration: 'line-through' }}>${product.originalPrice.toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* Prime Tag & Fast Delivery */}
        {product.prime && (
          <div style={{ marginBottom: '12px', fontSize: '12px' }}>
            <div className="badge-prime" style={{ marginBottom: '2px' }}>
              prime <span>✓</span>
            </div>
            <div style={{ color: '#0f1111', fontWeight: 500 }}>
              FREE Delivery <strong>{product.fastDelivery}</strong>
            </div>
          </div>
        )}
      </div>

      {/* Add to Cart CTA */}
      <div style={{ marginTop: '12px' }}>
        <button
          onClick={() => addToCart(product)}
          className="btn-primary-yellow"
          style={{ width: '100%', padding: '10px 0' }}
        >
          <ShoppingCart size={16} /> Add to Cart
        </button>
      </div>

      <style>{`
        .product-card-hover:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
          border-color: #c8c8c8;
        }
        .title-hover:hover {
          color: var(--amazon-blue-link-hover) !important;
        }
      `}</style>
    </div>
  );
};
