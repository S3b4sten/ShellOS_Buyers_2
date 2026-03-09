import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Lock, CreditCard as CreditCardIcon, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';
import { CreditCard } from '../App';

interface CheckoutProps {
  cartItems: CartItem[];
  onCheckout: () => void;
  creditCards: CreditCard[];
}

export const Checkout: React.FC<CheckoutProps> = ({ cartItems, onCheckout, creditCards }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<string>('new');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      onCheckout();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center animate-fade-in text-center">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600 animate-bounce shadow-sm border border-green-200">
          <CheckCircle size={48} />
        </div>
        <h1 className="text-3xl font-black mb-2 text-black">Paiement Réussi !</h1>
        <p className="text-slate-600 font-medium mb-8 max-w-md">Merci pour votre commande. Vous recevrez un email de confirmation avec les détails de suivi.</p>
        <Link to="/" className="text-black hover:text-slate-700 font-bold underline underline-offset-4">
          Retourner à la boutique
        </Link>
      </div>
    );
  }

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto animate-fade-in pb-20 md:pb-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-200">
             <Lock className="text-black" size={24} />
        </div>
        <h1 className="text-3xl font-black text-black">Paiement Sécurisé</h1>
      </div>

      <GlassCard className="p-8 border-slate-300" hoverEffect={false}>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="space-y-5">
            <h3 className="text-sm font-black text-slate-500 uppercase tracking-wide mb-4">Détails de la carte</h3>
            
            {creditCards.length > 0 && (
              <div className="mb-6 space-y-3">
                <label className="text-sm font-bold text-slate-800">Choisir une carte enregistrée</label>
                <div className="space-y-2">
                  {creditCards.map(card => (
                    <label key={card.id} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${selectedCardId === card.id ? 'border-black bg-slate-50' : 'border-slate-200 hover:border-slate-300'}`}>
                      <input 
                        type="radio" 
                        name="savedCard" 
                        value={card.id}
                        checked={selectedCardId === card.id}
                        onChange={() => setSelectedCardId(card.id)}
                        className="text-black focus:ring-black"
                      />
                      <div className="flex-1 flex justify-between items-center">
                        <span className="font-bold text-sm">•••• {card.number.slice(-4)}</span>
                        <span className="text-xs text-slate-500">Exp: {card.expiry}</span>
                      </div>
                    </label>
                  ))}
                  <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${selectedCardId === 'new' ? 'border-black bg-slate-50' : 'border-slate-200 hover:border-slate-300'}`}>
                    <input 
                      type="radio" 
                      name="savedCard" 
                      value="new"
                      checked={selectedCardId === 'new'}
                      onChange={() => setSelectedCardId('new')}
                      className="text-black focus:ring-black"
                    />
                    <span className="font-bold text-sm">Utiliser une nouvelle carte</span>
                  </label>
                </div>
              </div>
            )}

            {selectedCardId === 'new' && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-800">Nom sur la carte</label>
                  <input 
                    type="text" 
                    placeholder="Alexandre Dupont"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-black font-medium placeholder-slate-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    required={selectedCardId === 'new'}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-800">Numéro de carte</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="0000 0000 0000 0000"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 pl-12 text-black font-medium placeholder-slate-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all font-mono"
                      required={selectedCardId === 'new'}
                    />
                    <CreditCardIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-800">Expiration</label>
                    <input 
                      type="text" 
                      placeholder="MM/AA"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-black font-medium placeholder-slate-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-center"
                      required={selectedCardId === 'new'}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-800">CVC</label>
                    <input 
                      type="text" 
                      placeholder="123"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-black font-medium placeholder-slate-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-center"
                      required={selectedCardId === 'new'}
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="pt-8 border-t border-slate-200 mt-6">
            <button 
              type="submit" 
              disabled={isProcessing || cartItems.length === 0}
              className={`
                w-full bg-black hover:bg-slate-900 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex justify-between px-6
                ${isProcessing || cartItems.length === 0 ? 'opacity-70 cursor-not-allowed' : ''}
              `}
            >
              <span>{isProcessing ? 'Traitement en cours...' : 'Payer maintenant'}</span>
              <span>{total.toFixed(2)}€</span>
            </button>
            <div className="flex justify-center gap-4 mt-6 opacity-50">
               {/* Mock Payment Icons */}
               <div className="w-10 h-6 bg-slate-400 rounded-sm"></div>
               <div className="w-10 h-6 bg-slate-400 rounded-sm"></div>
               <div className="w-10 h-6 bg-slate-400 rounded-sm"></div>
            </div>
            <p className="text-center text-xs text-slate-500 font-medium mt-4">
              Vos informations de paiement sont chiffrées (256-bit SSL) et sécurisées.
            </p>
          </div>

        </form>
      </GlassCard>
    </div>
  );
};