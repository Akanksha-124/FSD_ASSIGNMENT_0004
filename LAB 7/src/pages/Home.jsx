import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { heroBanners, products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ChevronLeft, ChevronRight, Zap, ArrowRight, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setSelectedCategory } = useCart();
  const navigate = useNavigate();

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
  };

  const dealProducts = products.filter(p => p.discount > 0);
  const featuredTech = products.filter(p => p.category === "Electronics");
  const fashionPick = products.filter(p => p.category === "Fashion");

  const categoryBoxes = [
    {
      title: "Up to 60% off | Electronics & Accessories",
      image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=600&auto=format&fit=crop&q=80",
      cat: "Electronics",
      linkText: "See all Electronics"
    },
    {
      title: "Revamp your home in style",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80",
      cat: "Home & Kitchen",
      linkText: "Explore Home collection"
    },
    {
      title: "Trendy Fashion & Footwear",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&auto=format&fit=crop&q=80",
      cat: "Fashion",
      linkText: "Shop top styles"
    },
    {
      title: "Next-Gen Gaming Consoles & Accessories",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop&q=80",
      cat: "Gaming",
      linkText: "Explore Gaming"
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--amazon-bg-gray)', paddingBottom: '40px' }}>
      
      {/* Hero Banner Carousel */}
      <div style={{ position: 'relative', width: '100%', maxHeight: '420px', overflow: 'hidden' }}>
        <div style={{ position: 'relative', height: '420px', width: '100%' }}>
          {heroBanners.map((banner, index) => (
            <div
              key={banner.id}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: index === currentSlide ? 1 : 0,
                transition: 'opacity 0.6s ease-in-out',
                background: banner.bgGradient,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {/* Background Cover Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${banner.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.35
                }}
              />

              {/* Banner Text Content */}
              <div className="amazon-container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
                <div style={{ maxWidth: '600px', color: '#fff', padding: '20px' }}>
                  <span className="badge-limited" style={{ marginBottom: '12px', fontSize: '13px' }}>
                    SPECIAL EVENT
                  </span>
                  <h1 style={{ fontSize: '38px', fontWeight: 800, lineHeight: 1.2, marginBottom: '10px' }}>
                    {banner.title}
                  </h1>
                  <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '20px' }}>
                    {banner.subtitle}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory(banner.category);
                      navigate('/deals');
                    }}
                    className="btn-primary-yellow"
                    style={{ padding: '12px 24px', fontSize: '16px', fontWeight: 700 }}
                  >
                    {banner.cta} <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Slider Controls */}
        <button
          onClick={handlePrevSlide}
          style={{
            position: 'absolute',
            left: '10px',
            top: '35%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.7)',
            border: 'none',
            borderRadius: '4px',
            padding: '20px 8px',
            cursor: 'pointer',
            zIndex: 20
          }}
        >
          <ChevronLeft size={28} color="#111" />
        </button>

        <button
          onClick={handleNextSlide}
          style={{
            position: 'absolute',
            right: '10px',
            top: '35%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.7)',
            border: 'none',
            borderRadius: '4px',
            padding: '20px 8px',
            cursor: 'pointer',
            zIndex: 20
          }}
        >
          <ChevronRight size={28} color="#111" />
        </button>

        {/* Gradient Fade to Content */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '140px',
            background: 'linear-gradient(to bottom, rgba(227, 230, 230, 0), rgba(227, 230, 230, 1))',
            zIndex: 15
          }}
        />
      </div>

      {/* Main Content Area overlapping Banner */}
      <div className="amazon-container" style={{ marginTop: '-120px', position: 'relative', zIndex: 30 }}>
        
        {/* Category Grid 4-Column Box */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          {categoryBoxes.map((box, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '14px', color: '#0f1111' }}>
                  {box.title}
                </h3>
                <div style={{ overflow: 'hidden', borderRadius: '6px', marginBottom: '14px' }}>
                  <img
                    src={box.image}
                    alt={box.title}
                    style={{ width: '100%', height: '220px', objectFit: 'cover', transition: 'transform 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              </div>
              <Link
                to={`/products?cat=${encodeURIComponent(box.cat)}`}
                onClick={() => setSelectedCategory(box.cat)}
                style={{ fontSize: '14px', fontWeight: 600, color: 'var(--amazon-blue-link)' }}
              >
                {box.linkText} →
              </Link>
            </div>
          ))}
        </div>

        {/* Value Proposition Bar */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '30px',
            boxShadow: 'var(--shadow-sm)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <Truck size={36} color="var(--amazon-orange)" />
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700 }}>Free Fast Shipping</h4>
              <p style={{ fontSize: '13px', color: '#565959' }}>On orders over $35 for Prime</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <RotateCcw size={36} color="var(--amazon-orange)" />
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700 }}>Easy 30-Day Returns</h4>
              <p style={{ fontSize: '13px', color: '#565959' }}>Hassle free returns policy</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <ShieldCheck size={36} color="var(--amazon-orange)" />
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700 }}>100% Payment Protection</h4>
              <p style={{ fontSize: '13px', color: '#565959' }}>Secured by Amazon Pay</p>
            </div>
          </div>
        </div>

        {/* Today's Lightning Deals Carousel / Grid */}
        <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px', marginBottom: '30px', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Zap size={24} color="var(--amazon-orange)" fill="var(--amazon-orange)" />
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f1111', margin: 0 }}>
                Today's Lightning Deals
              </h2>
              <span className="badge-discount">Up to 49% OFF</span>
            </div>
            <Link to="/deals" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--amazon-blue-link)' }}>
              See all deals →
            </Link>
          </div>

          <div className="product-grid">
            {dealProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Best Sellers Electronics Section */}
        <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px', marginBottom: '30px', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f1111', margin: 0 }}>
              Top Rated Electronics & Gadgets
            </h2>
            <Link to="/products?cat=Electronics" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--amazon-blue-link)' }}>
              Explore Electronics →
            </Link>
          </div>

          <div className="product-grid">
            {featuredTech.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
