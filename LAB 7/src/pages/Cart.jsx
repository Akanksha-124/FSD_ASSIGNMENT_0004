import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShieldCheck, CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, toggleGiftWrap, cartSubtotal, totalCartItems } = useCart();
  const navigate = useNavigate();

  const freeDeliveryThreshold = 35;
  const progressPercent = Math.min(100, (cartSubtotal / freeDeliveryThreshold) * 100);
  const remainingForFree = Math.max(0, freeDeliveryThreshold - cartSubtotal);

  return (
    <div style={{ backgroundColor: 'var(--amazon-bg-gray)', padding: '24px 0', minHeight: '85vh' }}>
      <div className="amazon-container">
        
        <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '20px', color: '#0f1111' }}>
          Shopping Cart ({totalCartItems} {totalCartItems === 1 ? 'item' : 'items'})
        </h1>

        {cart.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px' }}>
            
            {/* Main Cart Items List */}
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              
              {/* Free Delivery Tracker Header */}
              <div style={{ backgroundColor: '#f0f8ff', border: '1px solid #b6e0fe', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
                {remainingForFree === 0 ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#007600', fontWeight: 700, fontSize: '14px' }}>
                    <CheckCircle2 size={20} /> Your order qualifies for FREE Shipping & Fast Prime Delivery!
                  </div>
                ) : (
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f1111', marginBottom: '6px' }}>
                      Add <strong style={{ color: 'var(--amazon-red-discount)' }}>${remainingForFree.toFixed(2)}</strong> more to get FREE Delivery!
                    </div>
                    <div style={{ width: '100%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${progressPercent}%`, height: '100%', backgroundColor: 'var(--amazon-orange)', transition: 'width 0.3s' }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Cart Headers */}
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', paddingBottom: '10px', fontSize: '14px', color: '#565959' }}>
                <span>Items</span>
                <span>Price</span>
              </div>

              {/* Items List */}
              {cart.map(({ product, quantity, giftWrap }) => (
                <div key={product.id} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 100px', gap: '20px', padding: '20px 0', borderBottom: '1px solid #eee' }}>
                  
                  {/* Product Image */}
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '120px', objectFit: 'contain' }} />
                  </Link>

                  {/* Details & Actions */}
                  <div>
                    <Link to={`/product/${product.id}`} style={{ fontSize: '16px', fontWeight: 700, color: '#0f1111', textDecoration: 'none' }}>
                      {product.name}
                    </Link>
                    
                    <div style={{ fontSize: '12px', color: '#007600', fontWeight: 600, margin: '4px 0' }}>
                      In Stock
                    </div>

                    {product.prime && (
                      <div className="badge-prime" style={{ fontSize: '12px', marginBottom: '8px' }}>
                        prime <span>✓</span> Eligible for FREE Shipping
                      </div>
                    )}

                    {/* Quantity Controls & Delete */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #adb1b8', borderRadius: '4px', overflow: 'hidden' }}>
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          style={{ padding: '4px 12px', backgroundColor: '#f0f2f2', border: 'none', cursor: 'pointer', fontWeight: 700 }}
                        >
                          -
                        </button>
                        <span style={{ padding: '4px 14px', fontSize: '14px', fontWeight: 700 }}>{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          style={{ padding: '4px 12px', backgroundColor: '#f0f2f2', border: 'none', cursor: 'pointer', fontWeight: 700 }}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(product.id)}
                        style={{ background: 'none', border: 'none', color: 'var(--amazon-blue-link)', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                      >
                        <Trash2 size={15} color="#cc0c39" /> Delete
                      </button>

                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', cursor: 'pointer', color: '#565959' }}>
                        <input
                          type="checkbox"
                          checked={giftWrap}
                          onChange={() => toggleGiftWrap(product.id)}
                        />
                        This is a gift ($2.99 wrap)
                      </label>
                    </div>

                  </div>

                  {/* Price */}
                  <div style={{ textAlign: 'right', fontSize: '18px', fontWeight: 800, color: '#0f1111' }}>
                    ${(product.price * quantity).toFixed(2)}
                  </div>

                </div>
              ))}

              <div style={{ textAlign: 'right', paddingTop: '16px', fontSize: '18px' }}>
                Subtotal ({totalCartItems} items): <strong style={{ color: '#0f1111' }}>${cartSubtotal.toFixed(2)}</strong>
              </div>

            </div>

            {/* Subtotal Order Summary Card */}
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', height: 'fit-content' }}>
              
              <div style={{ fontSize: '18px', marginBottom: '16px' }}>
                Subtotal ({totalCartItems} items): <strong style={{ fontWeight: 800, color: '#0f1111' }}>${cartSubtotal.toFixed(2)}</strong>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="btn-primary-yellow"
                style={{ width: '100%', padding: '12px 0', fontSize: '15px', fontWeight: 700, marginBottom: '16px' }}
              >
                Proceed to Checkout <ArrowRight size={18} />
              </button>

              <div style={{ fontSize: '13px', color: '#565959', borderTop: '1px solid #eee', paddingTop: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={20} color="var(--amazon-orange)" /> 100% Guaranteed Safe & Secure Checkout
              </div>

            </div>

          </div>
        ) : (
          <div style={{ backgroundColor: '#fff', padding: '60px', textAlign: 'center', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
            <ShoppingBag size={54} color="#ccc" style={{ marginBottom: '16px' }} />
            <h2>Your Amazon Cart is empty</h2>
            <p style={{ color: '#666', margin: '8px 0 20px 0' }}>Explore our lightning deals and broad catalog to add items.</p>
            <Link to="/products" className="btn-primary-yellow" style={{ padding: '10px 24px' }}>
              Continue Shopping
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};
