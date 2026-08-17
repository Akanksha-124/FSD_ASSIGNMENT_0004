import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, RotateCcw, ShieldCheck, CreditCard, User, MessageSquare, ChevronDown, ChevronUp, Send, Bot, X } from 'lucide-react';

export const CustomerService = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hello! Welcome to Amazon Customer Support. How can I help you today?' }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const helpTopics = [
    { title: 'Your Orders', desc: 'Track packages, edit or cancel orders', icon: <Package size={32} color="var(--amazon-blue-link)" />, link: '/orders' },
    { title: 'Returns & Refunds', desc: 'Return items, track return status', icon: <RotateCcw size={32} color="var(--amazon-blue-link)" />, link: '/orders' },
    { title: 'Payment & Gift Cards', desc: 'Manage payment methods, redeem cards', icon: <CreditCard size={32} color="var(--amazon-blue-link)" />, link: '/checkout' },
    { title: 'Account Settings', desc: 'Change email, password or addresses', icon: <User size={32} color="var(--amazon-blue-link)" />, link: '/orders' },
    { title: 'Prime Membership', desc: 'View benefits, manage membership', icon: <ShieldCheck size={32} color="var(--amazon-blue-link)" />, link: '/' }
  ];

  const faqs = [
    {
      q: "Where is my order & package tracking?",
      a: "You can track your package anytime by visiting 'Your Orders' tab in the top navigation. Once an order is placed, live tracking updates (Ordered -> Packed -> Out for Delivery -> Delivered) will update automatically."
    },
    {
      q: "How do I request a return or replacement?",
      a: "Go to Your Orders, select the item you wish to return, click 'Return or replace items', select your reason from the dropdown, and print your free prepaid shipping label."
    },
    {
      q: "What benefits are included with Prime?",
      a: "Amazon Prime members enjoy FREE Same-Day & One-Day Delivery, Prime Video streaming access, exclusive Lightning Deals discounts, and Amazon Music streaming."
    },
    {
      q: "How can I change my delivery address?",
      a: "Click on 'Delivering to...' in the top navigation bar to enter your updated City Name or Zip Code."
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    const userText = inputMsg;
    setChatMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputMsg('');

    // Generate automated bot response after 800ms
    setTimeout(() => {
      let botReply = "I understand you need help. You can check package status in 'Your Orders' tab or modify your delivery address using the top bar.";
      if (userText.toLowerCase().includes('return') || userText.toLowerCase().includes('refund')) {
        botReply = "All items purchased on Amazon are eligible for easy 30-day free returns. Visit your Orders page to print a prepaid return label.";
      } else if (userText.toLowerCase().includes('prime') || userText.toLowerCase().includes('delivery')) {
        botReply = "Prime members get free One-Day delivery on eligible products labeled with the Prime badge!";
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 800);
  };

  return (
    <div style={{ backgroundColor: 'var(--amazon-bg-gray)', padding: '30px 0', minHeight: '85vh' }}>
      <div className="amazon-container">
        
        {/* Help Banner */}
        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', marginBottom: '30px', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#0f1111', marginBottom: '8px' }}>
            Welcome to Amazon Customer Service
          </h1>
          <p style={{ fontSize: '16px', color: '#565959' }}>
            What can we help you with today? Select a topic below or chat with our automated AI Assistant.
          </p>
        </div>

        {/* Quick Help Topics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '36px' }}>
          {helpTopics.map((topic, idx) => (
            <Link
              key={idx}
              to={topic.link}
              style={{
                backgroundColor: '#fff',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-sm)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                border: '1px solid #e7e7e7',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              className="product-card-hover"
            >
              <div>{topic.icon}</div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f1111', marginBottom: '4px' }}>{topic.title}</h4>
                <p style={{ fontSize: '12px', color: '#565959' }}>{topic.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f1111', marginBottom: '20px' }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ border: '1px solid #e7e7e7', borderRadius: '6px', overflow: 'hidden' }}>
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    backgroundColor: activeFaq === idx ? '#f8f9fa' : '#fff',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#0f1111',
                    cursor: 'pointer'
                  }}
                >
                  {faq.q}
                  {activeFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {activeFaq === idx && (
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: '#444', borderTop: '1px solid #eee', lineHeight: '1.6' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Live Chat Simulator Widget */}
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000 }}>
          {!isChatOpen ? (
            <button
              onClick={() => setIsChatOpen(true)}
              className="btn-secondary-orange"
              style={{ padding: '14px 20px', borderRadius: '30px', fontSize: '15px', fontWeight: 700, boxShadow: 'var(--shadow-lg)' }}
            >
              <MessageSquare size={20} /> Live Customer Assistant
            </button>
          ) : (
            <div
              style={{
                width: '360px',
                height: '460px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                border: '1px solid #ccc'
              }}
            >
              {/* Chat Header */}
              <div style={{ backgroundColor: 'var(--amazon-nav-bg)', color: '#fff', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                  <Bot size={20} color="var(--amazon-yellow)" /> Amazon Support Bot
                </div>
                <button onClick={() => setIsChatOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              {/* Chat Messages Log */}
              <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: '#f9f9f9' }}>
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    style={{
                      alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                      backgroundColor: msg.sender === 'user' ? 'var(--amazon-btn-yellow)' : '#fff',
                      color: '#111',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      maxWidth: '80%',
                      fontSize: '13px',
                      boxShadow: 'var(--shadow-sm)',
                      border: msg.sender === 'bot' ? '1px solid #e0e0e0' : 'none'
                    }}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Chat Input Form */}
              <form onSubmit={handleSendMessage} style={{ display: 'flex', padding: '10px', backgroundColor: '#fff', borderTop: '1px solid #ddd' }}>
                <input
                  type="text"
                  placeholder="Ask a question..."
                  value={inputMsg}
                  onChange={(e) => setInputMsg(e.target.value)}
                  style={{ flex: 1, padding: '8px 12px', borderRadius: '20px', border: '1px solid #ccc', outline: 'none', fontSize: '13px' }}
                />
                <button type="submit" style={{ background: 'none', border: 'none', padding: '0 10px', cursor: 'pointer', color: 'var(--amazon-orange)' }}>
                  <Send size={18} />
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
