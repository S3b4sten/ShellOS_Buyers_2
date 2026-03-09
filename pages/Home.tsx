import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';
import { Product } from '../types';
import { GlassCard } from '../components/GlassCard';
import { Sparkles, Star, ShoppingBag, Zap, Plus, LayoutGrid, X, Check } from 'lucide-react';
import { useBackground } from '../contexts/BackgroundContext';

interface HomeProps {
  addToCart: (product: Product) => void;
  inventory: Product[];
}

export const Home: React.FC<HomeProps> = ({ addToCart, inventory }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Tout");
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const { setCategory } = useBackground();

  // Sync background with selected category
  useEffect(() => {
    setCategory(selectedCategory);
  }, [selectedCategory, setCategory]);

  const filteredProducts = inventory.filter(p => {
    const categoryMatch = selectedCategory === "Tout" || p.category === selectedCategory;
    const newMatch = !showNewOnly || p.isNew;
    return categoryMatch && newMatch;
  });

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setIsCategoryMenuOpen(false);
  };

  return (
    <div className="space-y-6 md:space-y-12 animate-fade-in relative z-10">
        
        {/* Category Selection Modal (Mobile) */}
        {isCategoryMenuOpen && (
          <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl animate-fade-in flex flex-col">
             <div className="p-4 flex items-center justify-between border-b border-slate-100">
                <h2 className="text-xl font-black text-slate-900">Catégories</h2>
                <button 
                  onClick={() => setIsCategoryMenuOpen(false)}
                  className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                >
                  <X size={24} />
                </button>
             </div>
             <div className="flex-1 overflow-y-auto p-4 grid grid-cols-2 gap-3 content-start">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`
                      p-4 rounded-2xl text-left font-bold text-sm transition-all border flex items-center justify-between
                      ${selectedCategory === cat 
                        ? 'bg-black text-white border-black shadow-lg' 
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'}
                    `}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && <Check size={16} />}
                  </button>
                ))}
             </div>
          </div>
        )}

        {/* Commercial Hero Section */}
        <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-white/10 border border-white/40 shadow-xl backdrop-blur-xl mt-4 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-blue-900/30"></div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center relative z-10">
            
            <div className="p-6 md:p-16 flex flex-col items-start gap-4 md:gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-[10px] md:text-xs uppercase tracking-widest shadow-lg shadow-blue-500/30">
                  <Sparkles size={10} fill="currentColor" />
                  <span>Nouvelle Collection</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-serif italic text-white leading-[0.95] drop-shadow-md">
                  Trouver plus, <br/>
                  <span className="not-italic font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-100">
                      perdez moins
                  </span>
              </h1>
              
              <div className="flex flex-row gap-3 mt-2 w-full md:w-auto">
                <button 
                    onClick={() => navigate('/search')}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-slate-900 px-4 md:px-8 py-3 md:py-4 rounded-xl font-bold transition-all shadow-xl text-xs md:text-base"
                >
                    <Sparkles size={16} className="text-blue-600" />
                    <span>Assistant IA</span>
                </button>
                <button 
                    onClick={() => document.getElementById('shop-grid')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/30 px-4 md:px-8 py-3 md:py-4 rounded-xl font-bold transition-all backdrop-blur-md text-xs md:text-base"
                >
                    <span>Explorer</span>
                </button>
              </div>
            </div>

            <div className="relative h-32 md:h-full min-h-[150px] md:min-h-[400px] w-full hidden md:block">
              <img 
                src="https://loremflickr.com/800/800/fashion,luxury?lock=99" 
                alt="Hero Collection" 
                className="absolute inset-0 w-full h-full object-cover opacity-90 mask-image-gradient"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-l"></div>
            </div>
          </div>
        </div>

        {/* --- MOBILE CONTROL BAR (Replaces Scroll) --- */}
        <div id="shop-grid" className="md:hidden sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-white/50 -mx-3 px-3 py-3 shadow-sm">
           <div className="grid grid-cols-2 gap-3">
              {/* Category Button */}
              <button 
                onClick={() => setIsCategoryMenuOpen(true)}
                className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-800 py-3 rounded-xl font-bold text-sm shadow-sm active:scale-95 transition-transform"
              >
                 <LayoutGrid size={18} />
                 <span>Catégories</span>
              </button>
              
              {/* New Arrivals Toggle */}
              <button 
                onClick={() => setShowNewOnly(!showNewOnly)}
                className={`
                  flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm shadow-sm active:scale-95 transition-all border
                  ${showNewOnly 
                    ? 'bg-amber-100 border-amber-200 text-amber-900' 
                    : 'bg-white border-slate-200 text-slate-800'}
                `}
              >
                 <Zap size={18} fill={showNewOnly ? "currentColor" : "none"} />
                 <span>Nouveautés</span>
              </button>
           </div>
           
           {/* Active Filters Display */}
           {(selectedCategory !== 'Tout' || showNewOnly) && (
             <div className="flex gap-2 mt-3 overflow-x-auto">
               {selectedCategory !== 'Tout' && (
                 <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                   {selectedCategory}
                   <button onClick={() => setSelectedCategory('Tout')}><X size={12}/></button>
                 </span>
               )}
               {showNewOnly && (
                 <span className="bg-amber-400 text-amber-950 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                   <Zap size={10} fill="currentColor"/> Nouveautés
                 </span>
               )}
             </div>
           )}
        </div>

        {/* --- DESKTOP FILTERS (Hidden on Mobile) --- */}
        <div className="hidden md:block sticky top-20 z-30 py-4">
          <div className="bg-white/80 backdrop-blur-2xl p-2 rounded-2xl border border-white/60 shadow-lg shadow-slate-200/50 flex flex-row gap-3 items-center justify-between">
            <div className="flex gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-5 py-2.5 rounded-xl text-sm font-bold transition-all
                    ${selectedCategory === cat 
                      ? 'bg-black text-white shadow-md' 
                      : 'bg-transparent text-slate-600 hover:bg-slate-100'}
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <button 
               onClick={() => setShowNewOnly(!showNewOnly)}
               className={`
                 px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 border
                 ${showNewOnly 
                   ? 'bg-amber-50 text-amber-600 border-amber-200 shadow-sm' 
                   : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'}
               `}
            >
               <Zap size={16} fill={showNewOnly ? "currentColor" : "none"} />
               <span>Nouveautés</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {filteredProducts.map((product) => (
            <GlassCard 
              key={product.id} 
              className="group flex flex-col h-full !p-0 border-white/60 hover:border-white bg-white/60 hover:bg-white/90 overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {/* Badges */}
              <div className="absolute top-2 left-2 z-20 flex flex-col gap-1">
                  {product.isNew && (
                      <span className="bg-amber-400 text-amber-950 text-[9px] md:text-[10px] font-black px-1.5 py-0.5 rounded shadow-sm flex items-center gap-1">
                          <Zap size={8} fill="currentColor"/> NEW
                      </span>
                  )}
              </div>

              {/* Mobile Quick Add Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="md:hidden absolute bottom-2 right-2 z-20 bg-white text-black p-2 rounded-full shadow-lg border border-slate-100 active:scale-90 transition-transform"
              >
                 <Plus size={18} strokeWidth={3} />
              </button>

              {/* Image Area */}
              <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Desktop Quick Add Overlay */}
                <div className="hidden md:flex absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent items-end justify-center">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="w-full bg-white text-black font-bold py-3 rounded-lg shadow-xl hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingBag size={18} /> Ajouter
                    </button>
                </div>
              </div>

              {/* Info Area */}
              <div className="p-3 md:p-4 flex flex-col flex-1 bg-white/40 group-hover:bg-white/70 transition-colors backdrop-blur-sm">
                <div className="mb-1 flex justify-between items-start">
                    <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider truncate max-w-[80px]">{product.category}</p>
                    <div className="flex gap-0.5">
                       <Star size={10} className="fill-amber-400 text-amber-400" />
                       <span className="text-[10px] font-bold text-slate-400">4.8</span>
                    </div>
                </div>
                
                <h3 className="text-sm md:text-base font-bold text-slate-900 leading-tight mb-1 md:mb-2 line-clamp-2 min-h-[2.5em]">
                  {product.name}
                </h3>
                
                <div className="mt-auto flex items-end justify-between">
                  <span className="text-lg md:text-xl font-black text-slate-900">
                    {product.price.toFixed(0)}€
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        
        {/* Spacer for bottom nav */}
        <div className="h-8 md:hidden"></div>
    </div>
  );
};