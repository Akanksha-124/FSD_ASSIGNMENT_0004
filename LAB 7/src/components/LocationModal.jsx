import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MapPin, X } from 'lucide-react';

export const LocationModal = () => {
  const { isLocationModalOpen, setIsLocationModalOpen, deliveryLocation, setDeliveryLocation, showToast } = useCart();
  const [zipCode, setZipCode] = useState(deliveryLocation.zipCode);
  const [city, setCity] = useState(deliveryLocation.city);

  if (!isLocationModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setDeliveryLocation({ zipCode, city });
    setIsLocationModalOpen(false);
    showToast(`Delivery location updated to ${city} (${zipCode})`);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          width: '440px',
          maxWidth: '90%',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          overflow: 'hidden'
        }}
      >
        <div style={{ backgroundColor: '#f0f2f2', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #d5d9d9' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0, color: '#0f1111' }}>Choose your location</h3>
          <button onClick={() => setIsLocationModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={20} color="#555" />
          </button>
        </div>

        <div style={{ padding: '20px' }}>
          <p style={{ fontSize: '13px', color: '#565959', marginBottom: '16px' }}>
            Delivery options and delivery speeds may vary for different locations.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>City Name</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: '1px solid #888', fontSize: '14px' }}
                required
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>US / Postal Zip Code</label>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: '1px solid #888', fontSize: '14px' }}
                required
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setIsLocationModalOpen(false)}
                className="btn-gray"
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary-yellow">
                Apply Location
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
