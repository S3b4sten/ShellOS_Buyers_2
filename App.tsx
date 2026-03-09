import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { Search } from './pages/Search';
import { ProductDetail } from './pages/ProductDetail';
import { Product, CartItem } from './types';
import { BackgroundProvider } from './contexts/BackgroundContext';
import { MOCK_PRODUCTS } from './constants';

export interface ChatTurn {
  id: string;
  role: 'user' | 'model';
  text: string;
  recommendedProducts?: Product[];
}

export interface CreditCard {
  id: string;
  number: string;
  expiry: string;
  name: string;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [inventory, setInventory] = useState<Product[]>(
    MOCK_PRODUCTS.map(p => ({ ...p, stock: 10 }))
  );
  const [chatHistory, setChatHistory] = useState<ChatTurn[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Bonjour ! Je suis votre conseiller personnel SHELLOS. Que recherchez-vous aujourd'hui ? Je peux vous aider à trouver la tenue parfaite ou l'accessoire idéal."
    }
  ]);
  const [likedProductIds, setLikedProductIds] = useState<string[]>([]);
  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // Update inventory based on cart items
    setInventory(prev => prev.map(product => {
      const cartItem = cartItems.find(item => item.id === product.id);
      if (cartItem) {
        return { ...product, stock: Math.max(0, (product.stock || 0) - cartItem.quantity) };
      }
      return product;
    }));
    setCartItems([]);
  };

  const toggleLike = (productId: string) => {
    setLikedProductIds(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addCreditCard = (card: CreditCard) => {
    setCreditCards(prev => [...prev, card]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <BackgroundProvider>
      <Router>
        <Layout cartCount={cartCount}>
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} inventory={inventory} />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} inventory={inventory} likedProductIds={likedProductIds} toggleLike={toggleLike} />} />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  items={cartItems} 
                  updateQuantity={updateQuantity} 
                  removeFromCart={removeFromCart} 
                />
              } 
            />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} onCheckout={handleCheckout} creditCards={creditCards} />} />
            <Route path="/search" element={<Search addToCart={addToCart} inventory={inventory} chatHistory={chatHistory} setChatHistory={setChatHistory} />} />
            <Route path="/profile" element={<Profile likedProductIds={likedProductIds} inventory={inventory} creditCards={creditCards} addCreditCard={addCreditCard} />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </BackgroundProvider>
  );
}

export default App;