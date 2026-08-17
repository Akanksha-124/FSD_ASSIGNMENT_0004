export const categories = [
  "All Departments",
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Gaming",
  "Beauty & Personal Care",
  "Books",
  "Sports & Outdoors"
];

export const products = [
  {
    id: "p1",
    name: "Apple AirPods Pro (2nd Generation) Wireless Earbuds with USB-C Charging",
    category: "Electronics",
    price: 199.00,
    originalPrice: 249.00,
    discount: 20,
    rating: 4.7,
    reviewCount: 48920,
    prime: true,
    fastDelivery: "Tomorrow, Aug 18",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Active Noise Cancellation reduces unwanted background noise. Transparency mode lets outside sound in while allowing you to interact with the world around you. Personalized Spatial Audio with dynamic head tracking.",
    specs: {
      "Brand": "Apple",
      "Color": "White",
      "Connectivity": "Bluetooth 5.3",
      "Battery Life": "Up to 6 hours",
      "Water Resistance": "IP54"
    },
    stock: 45,
    dealTimer: "04:12:35"
  },
  {
    id: "p2",
    name: "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones",
    category: "Electronics",
    price: 328.00,
    originalPrice: 399.99,
    discount: 18,
    rating: 4.6,
    reviewCount: 15420,
    prime: true,
    fastDelivery: "Today by 8 PM",
    badge: "Top Choice",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Magnificent Sound, engineered to perfection with the new Integrated Processor V1. Ultra-comfortable lightweight design with soft fit leather.",
    specs: {
      "Brand": "Sony",
      "Color": "Silver / Black",
      "Battery Life": "30 Hours",
      "Fast Charge": "3 min for 3 hours"
    },
    stock: 18,
    dealTimer: "08:45:10"
  },
  {
    id: "p3",
    name: "PlayStation 5 Console (Slim) - 1TB SSD Storage",
    category: "Gaming",
    price: 449.99,
    originalPrice: 499.99,
    discount: 10,
    rating: 4.8,
    reviewCount: 32150,
    prime: true,
    fastDelivery: "Tomorrow, Aug 18",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio.",
    specs: {
      "Brand": "Sony PlayStation",
      "Storage": "1TB SSD",
      "Resolution": "4K 120Hz",
      "Optical Drive": "Included"
    },
    stock: 8
  },
  {
    id: "p4",
    name: "SAMSUNG Galaxy S24 Ultra 5G AI Smartphone (256GB, Titanium Gray)",
    category: "Electronics",
    price: 1099.99,
    originalPrice: 1299.99,
    discount: 15,
    rating: 4.5,
    reviewCount: 8940,
    prime: true,
    fastDelivery: "Tomorrow, Aug 18",
    badge: "Limited Time Deal",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Unleash new ways to create, connect and more with Galaxy AI. Circle to Search, Live Translate, Note Assist, and Photo Assist right at your fingertips.",
    specs: {
      "Brand": "Samsung",
      "Display": "6.8 inch AMOLED 120Hz",
      "Camera": "200 MP Quad Camera",
      "Processor": "Snapdragon 8 Gen 3"
    },
    stock: 22,
    dealTimer: "02:15:00"
  },
  {
    id: "p5",
    name: "Men's Minimalist Slim Fit Casual Oxford Cotton Button-Down Shirt",
    category: "Fashion",
    price: 29.99,
    originalPrice: 45.00,
    discount: 33,
    rating: 4.3,
    reviewCount: 3410,
    prime: true,
    fastDelivery: "Tomorrow, Aug 18",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80"
    ],
    description: "100% breathable natural long-staple cotton shirt. Tailored cut suitable for casual weekend outings or smart office wear.",
    specs: {
      "Material": "100% Cotton",
      "Fit": "Slim Fit",
      "Care": "Machine Washable"
    },
    stock: 60
  },
  {
    id: "p6",
    name: "Nespresso VertuoPlus Coffee and Espresso Machine by De'Longhi",
    category: "Home & Kitchen",
    price: 129.00,
    originalPrice: 169.00,
    discount: 24,
    rating: 4.6,
    reviewCount: 22100,
    prime: true,
    fastDelivery: "Today by 9 PM",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1517668808822-9e4288246d76?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1517668808822-9e4288246d76?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Automatic coffee maker brews single serve coffee or espresso cups at the touch of a button using Centrifusion extraction technology.",
    specs: {
      "Brand": "Nespresso",
      "Capacity": "40 oz Water Tank",
      "Heats Up": "25 Seconds"
    },
    stock: 14,
    dealTimer: "06:30:00"
  },
  {
    id: "p7",
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker (6 Qt)",
    category: "Home & Kitchen",
    price: 79.95,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.7,
    reviewCount: 145000,
    prime: true,
    fastDelivery: "Tomorrow, Aug 18",
    badge: "Customer Favorite",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
    ],
    description: "7-in-1 functionality: pressure cook, slow cook, rice cooker, yogurt maker, steamer, sauté pan and food warmer.",
    specs: {
      "Capacity": "6 Quarts",
      "Safety": "10+ Safety Features",
      "Material": "Stainless Steel"
    },
    stock: 35
  },
  {
    id: "p8",
    name: "Logitech MX Master 3S Performance Wireless Ergonomic Mouse",
    category: "Electronics",
    price: 99.99,
    originalPrice: 119.99,
    discount: 17,
    rating: 4.8,
    reviewCount: 19800,
    prime: true,
    fastDelivery: "Tomorrow, Aug 18",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Quiet clicks with 90% less click noise. Electromagnetic scrolling that is 90% faster and 87% more precise.",
    specs: {
      "DPI": "8000 DPI Glass Sensor",
      "Battery": "70 Days on full charge",
      "Connectivity": "Bluetooth / Logi Bolt"
    },
    stock: 50
  },
  {
    id: "p9",
    name: "Women's Classic Leather Waterproof Ankle Combat Boots",
    category: "Fashion",
    price: 54.99,
    originalPrice: 89.99,
    discount: 39,
    rating: 4.4,
    reviewCount: 5120,
    prime: true,
    fastDelivery: "Tomorrow, Aug 18",
    badge: "Fashion Pick",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Durable genuine leather upper with anti-slip rubber lug sole. Cushioned memory foam insoles for all-day walkability.",
    specs: {
      "Material": "Waterproof Leather",
      "Sole": "Synthetic Lug Rubber",
      "Closure": "Lace-up & Side Zip"
    },
    stock: 28
  },
  {
    id: "p10",
    name: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    category: "Books",
    price: 13.79,
    originalPrice: 27.00,
    discount: 49,
    rating: 4.8,
    reviewCount: 112000,
    prime: true,
    fastDelivery: "Tomorrow, Aug 18",
    badge: "#1 Best Seller in Books",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80"
    ],
    description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear reveals practical strategies to form good habits.",
    specs: {
      "Author": "James Clear",
      "Format": "Hardcover",
      "Pages": "320 pages",
      "Publisher": "Avery"
    },
    stock: 120
  },
  {
    id: "p11",
    name: "CeraVe Hydrating Facial Cleanser for Normal to Dry Skin 16 oz",
    category: "Beauty & Personal Care",
    price: 15.49,
    originalPrice: 19.99,
    discount: 23,
    rating: 4.7,
    reviewCount: 94300,
    prime: true,
    fastDelivery: "Today by 8 PM",
    badge: "Amazon Choice",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80"
    ],
    description: "Formulated with hyaluronic acid, ceramides, and glycerin to hydrate skin without stripping moisture. Essential for daily skincare.",
    specs: {
      "Skin Type": "Dry, Normal",
      "Form": "Lotion Gel",
      "Specialty": "Fragrance-Free, Non-Comedogenic"
    },
    stock: 85
  },
  {
    id: "p12",
    name: "Hydro Flask Wide Mouth Bottle with Flex Straw Cap (32 oz)",
    category: "Sports & Outdoors",
    price: 33.71,
    originalPrice: 44.95,
    discount: 25,
    rating: 4.7,
    reviewCount: 38200,
    prime: true,
    fastDelivery: "Tomorrow, Aug 18",
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80"
    ],
    description: "TempShield double-wall vacuum insulation keeps drinks cold up to 24 hours and hot up to 12 hours. Made with 18/8 pro-grade stainless steel.",
    specs: {
      "Capacity": "32 oz",
      "Material": "Pro-Grade Stainless Steel",
      "Dishwasher Safe": "Yes"
    },
    stock: 40,
    dealTimer: "05:10:00"
  }
];

export const heroBanners = [
  {
    id: "b1",
    title: "Great Indian Electronics Festival",
    subtitle: "Up to 60% OFF on Laptops, Headphones & Smartwatches",
    cta: "Shop Electronics",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&auto=format&fit=crop&q=80",
    bgGradient: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)"
  },
  {
    id: "b2",
    title: "Prime Exclusive Deals",
    subtitle: "Unlock free fast delivery & up to 50% discount for Prime Members",
    cta: "Explore Prime Deals",
    category: "Deals",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&auto=format&fit=crop&q=80",
    bgGradient: "linear-gradient(90deg, #1f1c2c, #928dab)"
  },
  {
    id: "b3",
    title: "Revamp Your Home & Living",
    subtitle: "Smart appliances, luxury coffee machines, pressure cookers & decor",
    cta: "Explore Home",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1600&auto=format&fit=crop&q=80",
    bgGradient: "linear-gradient(90deg, #3a1c71, #d76d77, #ffaf7b)"
  }
];
