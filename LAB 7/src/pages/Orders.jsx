import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Package, Truck, CheckCircle2, Clock, RefreshCw, ChevronRight } from 'lucide-react';

export const Orders = () => {
  const { orders, addToCart } = useCart();

  return (
    <div style={{ backgroundColor: 'var(--amazon-bg-gray)', padding: '24px 0', minHeight: '85vh' }}>
      <div className="amazon-container">
        
        <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '20px', color: '#0f1111' }}>
          Your Orders & Package Tracking
        </h1>

        {orders.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {orders.map((order) => (
              <div
                key={order.orderId}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  border: '1px solid #d5d9d9',
                  boxShadow: 'var(--shadow-sm)',
                  overflow: 'hidden'
                }}
              >
                {/* Order Header Summary Bar */}
                <div
                  style={{
                    backgroundColor: '#f0f2f2',
                    padding: '14px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #d5d9d9',
                    fontSize: '13px',
                    color: '#565959',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', gap: '30px' }}>
                    <div>
                      <div style={{ textTransform: 'uppercase' }}>Order Placed</div>
                      <div style={{ fontWeight: 700, color: '#0f1111' }}>{order.date}</div>
                    </div>
                    <div>
                      <div style={{ textTransform: 'uppercase' }}>Total</div>
                      <div style={{ fontWeight: 700, color: '#0f1111' }}>${order.total.toFixed(2)}</div>
                    </div>
                    <div>
                      <div style={{ textTransform: 'uppercase' }}>Ship To</div>
                      <div style={{ fontWeight: 700, color: 'var(--amazon-blue-link)' }}>{order.address.split(',')[0]}</div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div>ORDER # {order.orderId}</div>
                    <a href="#" style={{ fontSize: '13px', color: 'var(--amazon-blue-link)' }}>View Invoice</a>
                  </div>
                </div>

                {/* Tracking Progress Stepper */}
                <div style={{ padding: '20px', borderBottom: '1px solid #eee', backgroundColor: '#fafafa' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <Truck size={22} color="var(--amazon-orange)" />
                    <span style={{ fontSize: '18px', fontWeight: 800, color: order.status === 'Delivered' ? '#007600' : '#0f1111' }}>
                      Status: {order.status}
                    </span>
                  </div>

                  {/* 4-Step Tracker Visual */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', position: 'relative' }}>
                    {['Ordered', 'Packed & Shipped', 'Out for Delivery', 'Delivered'].map((stepName, idx) => {
                      const isCompleted = idx + 1 <= order.trackingStep;
                      return (
                        <div key={idx} style={{ textAlign: 'center', position: 'relative' }}>
                          <div
                            style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '50%',
                              backgroundColor: isCompleted ? '#007600' : '#e0e0e0',
                              color: '#fff',
                              margin: '0 auto 6px auto',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '12px',
                              fontWeight: 800
                            }}
                          >
                            {isCompleted ? '✓' : idx + 1}
                          </div>
                          <div style={{ fontSize: '12px', fontWeight: isCompleted ? 700 : 400, color: isCompleted ? '#111' : '#888' }}>
                            {stepName}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Order Items Body */}
                <div style={{ padding: '20px' }}>
                  {order.items.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: idx < order.items.length - 1 ? '1px solid #eee' : 'none', paddingBottom: '14px', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
                        <div>
                          <div style={{ fontSize: '16px', fontWeight: 700, color: '#0f1111' }}>{item.name}</div>
                          <div style={{ fontSize: '13px', color: '#565959', marginTop: '2px' }}>
                            Qty: {item.quantity} | Price: ${item.price.toFixed(2)}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <button
                          onClick={() => addToCart({ id: item.id || `reorder-${idx}`, name: item.name, price: item.price, image: item.image })}
                          className="btn-primary-yellow"
                          style={{ fontSize: '13px', padding: '6px 14px' }}
                        >
                          <RefreshCw size={14} /> Buy Again
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div style={{ backgroundColor: '#fff', padding: '60px', textAlign: 'center', borderRadius: '8px' }}>
            <Package size={50} color="#ccc" style={{ marginBottom: '14px' }} />
            <h2>No orders placed yet</h2>
            <p style={{ color: '#666', marginTop: '6px' }}>When you complete checkout, your package tracking will appear here.</p>
          </div>
        )}

      </div>
    </div>
  );
};
