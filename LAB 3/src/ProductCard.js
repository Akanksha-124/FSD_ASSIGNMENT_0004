import React, { useState } from 'react';

// Reusable Savana Styled Product Card
const ProductCard = ({ 
  title, 
  designer = 'Savana Studio', 
  price, 
  oldPrice, 
  rating = 4.8, 
  reviews = 110, 
  badge, 
  imageIcon = '👗', 
  description, 
  onAddToCloset 
}) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="closet-card">
      <div className="closet-card-media">
        {badge && <span className="closet-badge">{badge}</span>}
        <button 
          className="card-favorite-btn" 
          onClick={() => setIsSaved(!isSaved)}
          title="Add to Wishlist"
        >
          {isSaved ? '❤️' : '🤍'}
        </button>
        <span>{imageIcon}</span>
      </div>

      <div className="closet-card-body">
        <div className="closet-card-designer">{designer}</div>
        <h3 className="closet-card-title">{title}</h3>

        <div className="closet-rating-row">
          <span className="stars">
            {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
          </span>
          <span>{rating} ({reviews} reviews)</span>
        </div>

        <div className="closet-price-row">
          <span className="closet-price">${price}</span>
          {oldPrice && <span className="closet-old-price">${oldPrice}</span>}
        </div>

        <p className="closet-card-desc">{description}</p>

        <button 
          className="btn-add-closet" 
          onClick={() => onAddToCloset && onAddToCloset(title)}
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
