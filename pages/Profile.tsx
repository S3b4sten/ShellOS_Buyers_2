import React, { useState } from 'react';
import { MOCK_USER } from '../constants';
import { GlassCard } from '../components/GlassCard';
import { MapPin, Mail, Package, CreditCard as CreditCardIcon, Edit2, Heart, Plus } from 'lucide-react';
import { Product } from '../types';
import { CreditCard } from '../App';
import { useNavigate } from 'react-router-dom';

interface ProfileProps {
  likedProductIds: string[];
  inventory: Product[];
  creditCards: CreditCard[];
  addCreditCard: (card: CreditCard) => void;
}

export const Profile: React.FC<ProfileProps> = ({ likedProductIds, inventory, creditCards, addCreditCard }) => {
  const navigate = useNavigate();
  const [showAddCard, setShowAddCard] = useState(false);
  const [newCardNumber, setNewCardNumber] = useState('');
  const [newCardExpiry, setNewCardExpiry] = useState('');
  const [newCardName, setNewCardName] = useState('');

  const likedProducts = inventory.filter(p => likedProductIds.includes(p.id));

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCardNumber && newCardExpiry && newCardName) {
      addCreditCard({
        id: Date.now().toString(),
        number: newCardNumber,
        expiry: newCardExpiry,
        name: newCardName
      });
      setShowAddCard(false);
      setNewCardNumber('');
      setNewCardExpiry('');
      setNewCardName('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in space-y-8 pb-20 md:pb-12">

      {/* Header Profile Card */}
      <GlassCard className="flex flex-col md:flex-row items-center gap-8 p-8 border-slate-300" hoverEffect={false}>
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg ring-1 ring-slate-200">
            <img src={MOCK_USER.avatar} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
        </div>

        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl font-black text-black mb-2">{MOCK_USER.name}</h1>
          <div className="flex flex-col md:flex-row gap-6 text-slate-600 text-sm justify-center md:justify-start font-medium">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-black" />
              <span>{MOCK_USER.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-black" />
              <span>{MOCK_USER.address}</span>
            </div>
          </div>
        </div>

        <button className="px-5 py-2.5 rounded-lg border border-slate-300 hover:bg-black hover:text-white hover:border-black transition-colors text-sm font-bold flex items-center gap-2 text-slate-800">
          <Edit2 size={14} />
          Modifier
        </button>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <GlassCard hoverEffect={false} className="border-slate-300">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-2 bg-slate-100 rounded-lg">
              <Package className="text-black" size={20} />
            </div>
            <h2 className="text-lg font-bold text-black">Commandes Récentes</h2>
          </div>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div>
                  <p className="font-bold text-black text-sm">Commande #{2390 + i}</p>
                  <p className="text-xs text-slate-600 font-medium">Il y a {i * 2} jours</p>
                </div>
                <span className="text-green-700 text-xs font-bold bg-green-100 px-2 py-1 rounded border border-green-200">Livré</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Payment Methods */}
        <GlassCard hoverEffect={false} className="border-slate-300">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 rounded-lg">
                <CreditCardIcon className="text-black" size={20} />
              </div>
              <h2 className="text-lg font-bold text-black">Moyens de Paiement</h2>
            </div>
            <button
              onClick={() => setShowAddCard(!showAddCard)}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Plus size={16} className="text-black" />
            </button>
          </div>

          {showAddCard && (
            <form onSubmit={handleAddCard} className="mb-4 space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <input
                type="text"
                placeholder="Numéro de carte"
                value={newCardNumber}
                onChange={(e) => setNewCardNumber(e.target.value)}
                className="w-full p-2 text-sm border border-slate-300 rounded focus:outline-none focus:border-black"
                required
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="MM/AA"
                  value={newCardExpiry}
                  onChange={(e) => setNewCardExpiry(e.target.value)}
                  className="w-1/2 p-2 text-sm border border-slate-300 rounded focus:outline-none focus:border-black"
                  required
                />
                <input
                  type="text"
                  placeholder="Nom sur la carte"
                  value={newCardName}
                  onChange={(e) => setNewCardName(e.target.value)}
                  className="w-1/2 p-2 text-sm border border-slate-300 rounded focus:outline-none focus:border-black"
                  required
                />
              </div>
              <button type="submit" className="w-full py-2 bg-black text-white text-sm font-bold rounded hover:bg-slate-800 transition-colors">
                Ajouter
              </button>
            </form>
          )}

          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-black text-white shadow-lg">
              <div className="w-10 h-6 bg-white/20 rounded"></div>
              <div>
                <p className="text-sm font-bold">•••• •••• •••• 4242</p>
                <p className="text-xs text-slate-400">Expire 12/25</p>
              </div>
            </div>
            {creditCards.map(card => (
              <div key={card.id} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800 text-white shadow-md">
                <div className="w-10 h-6 bg-white/20 rounded"></div>
                <div>
                  <p className="text-sm font-bold">•••• •••• •••• {card.number.slice(-4)}</p>
                  <p className="text-xs text-slate-400">Expire {card.expiry}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Liked Products */}
      <GlassCard hoverEffect={false} className="border-slate-300">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
          <div className="p-2 bg-red-50 rounded-lg">
            <Heart className="text-red-500" size={20} fill="currentColor" />
          </div>
          <h2 className="text-lg font-bold text-black">Articles Likés</h2>
        </div>

        {likedProducts.length === 0 ? (
          <p className="text-slate-500 text-sm text-center py-8">Vous n'avez pas encore liké d'articles.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {likedProducts.map(product => (
              <div
                key={product.id}
                className="group cursor-pointer border border-slate-200 rounded-xl overflow-hidden hover:border-black transition-colors"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="aspect-square bg-slate-100 overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 right-2 p-1.5 bg-white rounded-full text-red-500 shadow-sm">
                    <Heart size={14} fill="currentColor" />
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-black text-sm truncate">{product.name}</h3>
                  <p className="text-slate-600 text-xs font-bold mt-1">{product.price.toFixed(2)} $</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </GlassCard>

    </div>
  );
};