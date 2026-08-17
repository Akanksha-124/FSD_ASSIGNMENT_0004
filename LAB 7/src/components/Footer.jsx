import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ marginTop: '40px', backgroundColor: '#232f3e', color: '#fff' }}>
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        style={{
          width: '100%',
          backgroundColor: '#37475a',
          color: '#fff',
          padding: '15px 0',
          fontSize: '13px',
          fontWeight: 600,
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transition: 'background 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#485769'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#37475a'}
      >
        <ArrowUp size={16} /> Back to top
      </button>

      {/* Main Links Container */}
      <div style={{ backgroundColor: '#232f3e', padding: '40px 16px', borderBottom: '1px solid #3a4553' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
          
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '14px', color: '#fff' }}>Get to Know Us</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#dddddd' }}>
              <li><a href="#" style={{ color: '#ddd' }}>About Amazon Replica</a></li>
              <li><a href="#" style={{ color: '#ddd' }}>Careers</a></li>
              <li><a href="#" style={{ color: '#ddd' }}>Press Releases</a></li>
              <li><a href="#" style={{ color: '#ddd' }}>Amazon Science</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '14px', color: '#fff' }}>Connect with Us</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#dddddd' }}>
              <li><a href="#" style={{ color: '#ddd' }}>Facebook</a></li>
              <li><a href="#" style={{ color: '#ddd' }}>Twitter / X</a></li>
              <li><a href="#" style={{ color: '#ddd' }}>Instagram</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '14px', color: '#fff' }}>Make Money with Us</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#dddddd' }}>
              <li><a href="#" style={{ color: '#ddd' }}>Sell on Amazon</a></li>
              <li><a href="#" style={{ color: '#ddd' }}>Sell under Amazon Accelerator</a></li>
              <li><a href="#" style={{ color: '#ddd' }}>Protect and Build Your Brand</a></li>
              <li><a href="#" style={{ color: '#ddd' }}>Amazon Global Selling</a></li>
              <li><a href="#" style={{ color: '#ddd' }}>Become an Affiliate</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '14px', color: '#fff' }}>Let Us Help You</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#dddddd' }}>
              <li><Link to="/orders" style={{ color: '#ddd' }}>Your Account & Orders</Link></li>
              <li><Link to="/customer-service" style={{ color: '#ddd' }}>Customer Service</Link></li>
              <li><a href="#" style={{ color: '#ddd' }}>Returns & Replacements</a></li>
              <li><a href="#" style={{ color: '#ddd' }}>Recall Notices</a></li>
              <li><a href="#" style={{ color: '#ddd' }}>Amazon App Download</a></li>
            </ul>
          </div>

        </div>

        {/* Brand & Language Selector Line */}
        <div style={{ maxWidth: '1000px', margin: '40px auto 0 auto', paddingTop: '20px', borderTop: '1px solid #3a4553', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
          <div style={{ fontWeight: 800, fontSize: '20px', color: '#fff' }}>amazon.in</div>
          <button style={{ background: 'none', border: '1px solid #848688', color: '#ccc', borderRadius: '3px', padding: '6px 12px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
            <Globe size={16} /> English
          </button>
          <span style={{ fontSize: '13px', color: '#ccc' }}>🇺🇸 United States / 🇮🇳 India</span>
        </div>
      </div>

      {/* Copyright Subfooter */}
      <div style={{ backgroundColor: '#131a22', padding: '30px 16px', textAlign: 'center', fontSize: '12px', color: '#999' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', marginBottom: '10px', flexWrap: 'wrap' }}>
          <a href="#" style={{ color: '#ddd' }}>Conditions of Use & Sale</a>
          <a href="#" style={{ color: '#ddd' }}>Privacy Notice</a>
          <a href="#" style={{ color: '#ddd' }}>Interest-Based Ads</a>
        </div>
        <p>© 2026, Amazon.com, Inc. or its affiliates. Full Replica created with React.js & Vite.</p>
      </div>
    </footer>
  );
};
