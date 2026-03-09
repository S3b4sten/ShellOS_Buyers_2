import React from 'react';
import { CartItem } from '../types';
import { GlassCard } from '../components/GlassCard';
import { Trash2, CreditCard, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartProps {
  items: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
}

export const Cart: React.FC<CartProps> = ({ items, updateQuantity, removeFromCart }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tva = subtotal * 0.20;
  const total = subtotal + tva;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] animate-fade-in">
        <GlassCard className="text-center p-12 max-w-md bg-white border-slate-300">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CreditCard className="text-slate-500" size={32} />
          </div>
          <h2 className="text-2xl font-black mb-2 text-black">Votre panier est vide</h2>
          <p className="text-slate-600 font-medium mb-8">Découvrez nos collections uniques pour commencer.</p>
          <Link
            to="/"
            className="inline-block bg-black hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-lg transition-all shadow-lg shadow-slate-900/20"
          >
            Voir les articles
          </Link>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-black mb-8 text-black">Votre Panier</h1>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Cart Items List */}
        <div className="flex-1 space-y-4">
          {items.map((item) => (
            <GlassCard key={item.id} className="flex items-center gap-6 group border-slate-300" hoverEffect={false}>
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-black text-lg truncate mb-1">{item.name}</h3>
                <p className="text-slate-800 font-bold">{item.price.toFixed(2)} $</p>
              </div>

              <div className="flex items-center gap-3 bg-white rounded-lg p-1 border border-slate-300 shadow-sm">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-100 text-slate-700 hover:text-black transition-all"
                >
                  <Minus size={16} />
                </button>
                <span className="text-sm font-bold w-6 text-center text-black">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-100 text-slate-700 hover:text-black transition-all"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="p-3 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </GlassCard>
          ))}
        </div>

        {/* Summary Sidebar */}
        <div className="lg:w-96">
          <GlassCard className="sticky top-24 border-slate-300" hoverEffect={false}>
            <h2 className="text-xl font-bold mb-6 border-b border-slate-200 pb-4 text-black">Résumé</h2>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between text-slate-600 font-medium">
                <span>Sous-total</span>
                <span className="font-bold text-slate-900">{subtotal.toFixed(2)} $</span>
              </div>
              <div className="flex justify-between text-slate-600 font-medium">
                <span>TVA (20%)</span>
                <span className="font-bold text-slate-900">{tva.toFixed(2)} $</span>
              </div>
              <div className="flex justify-between text-slate-600 font-medium">
                <span>Livraison</span>
                <span className="text-green-600 font-bold">Gratuite</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-xl font-black text-black mb-8 pt-4 border-t border-slate-200">
              <span>Total</span>
              <span>{total.toFixed(2)} $</span>
            </div>

            <Link
              to="/checkout"
              className="w-full bg-black hover:bg-slate-900 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-[1.02]"
            >
              <CreditCard size={18} />
              Paiement Sécurisé
            </Link>
          </GlassCard>
        </div>

      </div>
    </div>
  );
};