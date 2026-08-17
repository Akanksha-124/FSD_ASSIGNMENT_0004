import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, Info, AlertTriangle } from 'lucide-react';

export const Toast = () => {
  const { toast } = useCart();

  if (!toast.visible) return null;

  return (
    <div
      className="toast-animated"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        backgroundColor: '#131921',
        color: '#fff',
        padding: '14px 20px',
        borderRadius: '8px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        zIndex: 2000,
        maxWidth: '400px',
        borderLeft: toast.type === 'success' ? '4px solid #00a8e1' : '4px solid #febd69'
      }}
    >
      {toast.type === 'success' ? (
        <CheckCircle2 size={22} color="var(--amazon-yellow)" />
      ) : (
        <Info size={22} color="#00a8e1" />
      )}
      <span style={{ fontSize: '14px', fontWeight: 500 }}>{toast.message}</span>
    </div>
  );
};
