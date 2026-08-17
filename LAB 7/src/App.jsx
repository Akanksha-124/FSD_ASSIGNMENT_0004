import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { SubHeader } from './components/SubHeader';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { LocationModal } from './components/LocationModal';

import { Home } from './pages/Home';
import { Deals } from './pages/Deals';
import { ProductCatalog } from './pages/ProductCatalog';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Orders } from './pages/Orders';
import { CustomerService } from './pages/CustomerService';

function App() {
  return (
    <CartProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <SubHeader />
          
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/products" element={<ProductCatalog />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customer-service" element={<CustomerService />} />
            </Routes>
          </main>

          <Footer />
          <Toast />
          <LocationModal />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
