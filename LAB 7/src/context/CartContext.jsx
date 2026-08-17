import React, { createContext, useContext, useState, useEffect } from 'react';
import { products } from '../data/products';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('amazon_cart');
    return saved ? JSON.parse(saved) : [
      { product: products[0], quantity: 1, giftWrap: false },
      { product: products[5], quantity: 1, giftWrap: true }
    ];
  });

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('amazon_orders');
    return saved ? JSON.parse(saved) : [
      {
        orderId: "114-8794621-392015",
        date: "August 12, 2026",
        total: 129.99,
        status: "Delivered",
        trackingStep: 4,
        address: "Akanksha Gowda, 10001 New York NY",
        items: [
          { name: "Sony WH-1000XM5 Headphones", price: 129.99, quantity: 1, image: products[1].image }
        ]
      }
    ];
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Departments');
  const [deliveryLocation, setDeliveryLocation] = useState({ zipCode: '10001', city: 'New York' });
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('amazon_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('amazon_orders', JSON.stringify(orders));
  }, [orders]);

  const showToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast({ visible: false, message: '', type: 'success' });
    }, 3500);
  };

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prevCart, { product, quantity, giftWrap: false }];
    });
    showToast(`Added "${product.name.slice(0, 30)}..." to Shopping Cart!`);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
    showToast(`Item removed from cart`, 'info');
  };

  const updateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const toggleGiftWrap = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId ? { ...item, giftWrap: !item.giftWrap } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = (orderDetails) => {
    const totalAmount = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const newOrder = {
      orderId: `114-${Math.floor(1000000 + Math.random() * 9000000)}-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      total: totalAmount + (totalAmount > 35 ? 0 : 5.99),
      status: "Arriving Tomorrow",
      trackingStep: 1,
      address: `${orderDetails.name}, ${orderDetails.address}, ${orderDetails.city} ${orderDetails.zipCode}`,
      paymentMethod: orderDetails.paymentMethod || "Credit Cardending in 4242",
      items: cart.map(item => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        image: item.product.image
      }))
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    showToast("🎉 Order placed successfully! Thank you for shopping with Amazon.", "success");
    return newOrder;
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        deliveryLocation,
        setDeliveryLocation,
        toast,
        showToast,
        isLocationModalOpen,
        setIsLocationModalOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleGiftWrap,
        clearCart,
        placeOrder,
        totalCartItems,
        cartSubtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
