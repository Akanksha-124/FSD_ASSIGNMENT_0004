import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShieldCheck, CreditCard, CheckCircle2, Lock, Truck } from 'lucide-react';

export const Checkout = () => {
  const { cart, cartSubtotal, placeOrder, deliveryLocation } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState('Akanksha Gowda');
  const [address, setAddress] = useState('123 Innovation Way, Apt 4B');
  const [city, setCity] = useState(deliveryLocation.city || 'New York');
  const [zipCode, setZipCode] = useState(deliveryLocation.zipCode || '10001');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const shippingFee = cartSubtotal > 35 ? 0 : 5.99;
  const tax = cartSubtotal * 0.08;
  const totalAmount = cartSubtotal + shippingFee + tax;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      placeOrder({ name, address, city, zipCode, paymentMethod });
      setIsProcessing(false);
      navigate('/orders');
    }, 2000);
  };

  if (cart.length === 0 && !isProcessing) {
    return (
      <div style={{ padding: '60px 0', textAlign: 'center' }}>
        <h2>No items to checkout!</h2>
        <button onClick={() => navigate('/')} className="btn-primary-yellow" style={{ marginTop: '16px' }}>
          Back to Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--amazon-bg-gray)', padding: '30px 0', minHeight: '85vh' }}>
      <div className="amazon-container">
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '20px', borderBottom: '1px solid #ccc', marginBottom: '30px' }}>
          <div style={{ fontSize: '26px', fontWeight: 900, color: 'var(--amazon-nav-bg)' }}>
            amazon<span style={{ fontSize: '14px', color: 'var(--amazon-orange)' }}>.in</span> <span style={{ fontSize: '20px', fontWeight: 400, color: '#555' }}>| Checkout</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#007600', fontWeight: 700 }}>
            <Lock size={18} /> Secure 256-Bit SSL Encryption
          </div>
        </div>

        <form onSubmit={handleSubmitOrder} style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '30px' }}>
          
          {/* Main Checkout Steps Container */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Step 1: Shipping Address */}
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ backgroundColor: 'var(--amazon-nav-bg)', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>1</span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, margin: 0 }}>Select Delivery Address</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #888' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>Street Address</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #888' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #888' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>ZIP Code</label>
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #888' }}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Payment Method */}
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ backgroundColor: 'var(--amazon-nav-bg)', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>2</span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, margin: 0 }}>Payment Method</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', backgroundColor: paymentMethod === 'card' ? '#fff9e6' : '#fff' }}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <CreditCard size={20} color="var(--amazon-blue-link)" />
                  <div>
                    <strong style={{ fontSize: '14px' }}>Credit or Debit Card</strong>
                    <div style={{ fontSize: '12px', color: '#565959' }}>Visa, Mastercard, American Express ending in •••• 4242</div>
                  </div>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', backgroundColor: paymentMethod === 'upi' ? '#fff9e6' : '#fff' }}>
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div>
                    <strong style={{ fontSize: '14px' }}>UPI / Net Banking / QR Code</strong>
                    <div style={{ fontSize: '12px', color: '#565959' }}>Instant pay via GPay, PhonePe or Amazon Pay UPI</div>
                  </div>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', backgroundColor: paymentMethod === 'cod' ? '#fff9e6' : '#fff' }}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div>
                    <strong style={{ fontSize: '14px' }}>Pay on Delivery / Cash on Delivery</strong>
                    <div style={{ fontSize: '12px', color: '#565959' }}>Pay cash or scan QR code when package is delivered</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Step 3: Review Items */}
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ backgroundColor: 'var(--amazon-nav-bg)', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>3</span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, margin: 0 }}>Review Items and Shipping</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {cart.map(({ product, quantity }) => (
                  <div key={product.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '14px', fontWeight: 600 }}>{product.name}</div>
                      <div style={{ fontSize: '12px', color: '#565959' }}>Qty: {quantity} | Guaranteed Delivery: Tomorrow</div>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '15px' }}>
                      ${(product.price * quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Order Summary Box */}
          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', height: 'fit-content' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
              Order Summary
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Items Subtotal:</span> <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Shipping & Handling:</span> <span>{shippingFee === 0 ? <strong style={{ color: '#007600' }}>FREE</strong> : `$${shippingFee.toFixed(2)}`}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Estimated Tax (8%):</span> <span>${tax.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 800, borderTop: '1px solid #ddd', paddingTop: '10px', color: '#cc0c39' }}>
                <span>Order Total:</span> <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="btn-primary-yellow"
              style={{ width: '100%', padding: '14px 0', fontSize: '16px', fontWeight: 800, cursor: isProcessing ? 'not-allowed' : 'pointer' }}
            >
              {isProcessing ? 'Processing Order...' : 'Place Your Order'}
            </button>

            <p style={{ fontSize: '11px', color: '#565959', marginTop: '12px', textAlign: 'center' }}>
              By placing your order, you agree to Amazon's conditions of use and privacy notice.
            </p>
          </div>

        </form>

      </div>
    </div>
  );
};
