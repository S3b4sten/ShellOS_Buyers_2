import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { Send, Sparkles, Loader, ShoppingBag } from 'lucide-react';
import { chatWithAssistant, ChatMessage } from '../services/geminiService';
import { Product } from '../types';
import { ChatTurn } from '../App';

interface SearchProps {
  addToCart: (p: Product) => void;
  inventory: Product[];
  chatHistory: ChatTurn[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatTurn[]>>;
}

export const Search: React.FC<SearchProps> = ({ addToCart, inventory, chatHistory, setChatHistory }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, loading]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    const userText = query.trim();
    setQuery('');

    const newUserTurn: ChatTurn = {
      id: Date.now().toString(),
      role: 'user',
      text: userText
    };

    setChatHistory(prev => [...prev, newUserTurn]);
    setLoading(true);

    try {
      // Format history for the API
      const apiHistory: ChatMessage[] = chatHistory.map(turn => ({
        role: turn.role,
        text: turn.text
      })).concat({ role: 'user', text: userText });

      const { advice, recommendedProductIds } = await chatWithAssistant(apiHistory, inventory);

      let recommendedProducts: Product[] = [];
      if (recommendedProductIds && recommendedProductIds.length > 0) {
        recommendedProducts = inventory.filter(p => recommendedProductIds.includes(p.id));
      }

      const newModelTurn: ChatTurn = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: advice,
        recommendedProducts: recommendedProducts.length > 0 ? recommendedProducts : undefined
      };

      setChatHistory(prev => [...prev, newModelTurn]);
    } catch (err) {
      console.error(err);
      const errorTurn: ChatTurn = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "Désolé, j'ai rencontré un problème de connexion. Pouvez-vous répéter ?"
      };
      setChatHistory(prev => [...prev, errorTurn]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in flex flex-col h-[calc(100dvh-176px)] md:h-[calc(100dvh-128px)]">
      <div className="flex items-center gap-3 mb-4 md:mb-6 flex-shrink-0">
        <Sparkles className="text-blue-600" size={28} />
        <h1 className="text-2xl md:text-3xl font-black text-black">Assistant Personnel</h1>
      </div>

      {/* Chat History Area */}
      <div className="flex-1 overflow-y-auto mb-4 md:mb-6 space-y-4 md:space-y-6 pr-2 custom-scrollbar">
        {chatHistory.map((turn) => (
          <div key={turn.id} className={`flex flex-col ${turn.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`flex flex-col gap-2 md:gap-3 max-w-[85%] ${turn.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`px-4 py-3 rounded-2xl ${turn.role === 'user' ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-white border border-slate-200 text-slate-900 rounded-tl-sm shadow-sm'}`}>
                <p className="font-medium leading-relaxed whitespace-pre-wrap text-sm md:text-base">{turn.text}</p>
              </div>

              {/* Recommended Products */}
              {turn.recommendedProducts && turn.recommendedProducts.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mt-1 md:mt-2 w-full">
                  {turn.recommendedProducts.map(product => (
                    <GlassCard
                      key={product.id}
                      className="flex gap-3 items-center group cursor-pointer border border-blue-200 hover:border-blue-500 bg-white/80 transition-all duration-300 p-2"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-slate-100 flex-shrink-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-black text-sm truncate">{product.name}</h4>
                        <p className="text-xs text-slate-600 font-bold">{product.price.toFixed(2)} €</p>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                        }}
                        className="p-2 bg-black text-white rounded-full hover:bg-slate-800 transition-all shadow-md hover:scale-110 active:scale-95 flex-shrink-0"
                      >
                        <ShoppingBag size={14} />
                      </button>
                    </GlassCard>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex flex-col items-start max-w-[85%]">
            <div className="px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 rounded-tl-sm shadow-sm">
              <div className="flex gap-1 items-center h-6">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex-shrink-0 bg-white rounded-full border border-slate-300 shadow-sm px-2 py-1.5 md:py-2 flex items-center">
        <form onSubmit={handleSearch} className="flex-1 flex items-center relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Répondez à l'assistant..."
            className="w-full bg-transparent border-none py-2 pl-4 pr-12 text-black font-medium placeholder-slate-400 focus:outline-none focus:ring-0 text-base"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="absolute right-1 p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-full transition-colors flex items-center justify-center"
          >
            <Send size={16} className="md:w-4 md:h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};