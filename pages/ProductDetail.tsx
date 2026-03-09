import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { ArrowLeft, ShoppingBag, Check, Truck, ShieldCheck, Star, Clock, Heart, Share2, Package, GitCompare } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailProps {
  addToCart: (product: Product) => void;
  inventory: Product[];
  likedProductIds: string[];
  toggleLike: (id: string) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ addToCart, inventory, likedProductIds, toggleLike }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = inventory.find(p => p.id === id);
  const [added, setAdded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return null;

  const isLiked = likedProductIds.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  // Calculate simulated delivery date
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };

  return (
    <div className="max-w-7xl mx-auto animate-fade-in pb-20 md:pb-12 text-black">

      {/* Breadcrumb / Back */}
      <nav className="flex items-center justify-between mb-4 md:mb-8 sticky top-16 z-20 bg-white/80 backdrop-blur-md p-2 rounded-xl md:static md:bg-transparent md:p-0">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-black hover:text-black font-bold text-sm transition-colors"
        >
          <div className="bg-white p-1.5 rounded-full shadow-sm border border-slate-200">
            <ArrowLeft size={16} />
          </div>
          <span className="md:inline">Retour</span>
        </button>
        <div className="flex gap-3">
          <button
            onClick={() => toggleLike(product.id)}
            className={`p-2 rounded-full bg-white border border-slate-200 shadow-sm transition-colors ${isLiked ? 'text-red-500' : 'text-black'}`}
          >
            <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
          </button>
          <button className="p-2 rounded-full bg-white border border-slate-200 shadow-sm text-black transition-colors"><Share2 size={18} /></button>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">

        {/* LEFT COLUMN: IMAGES */}
        <div className="lg:col-span-7 space-y-4">
          <div className="aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-200 relative group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.isNew && (
              <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg">
                NOUVEAUTÉ
              </div>
            )}
          </div>

          <div className="grid grid-cols-5 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`
                    aspect-square rounded-lg bg-white overflow-hidden border transition-all
                    ${selectedImage === i ? 'border-blue-600 ring-2 ring-blue-100' : 'border-slate-200 opacity-70'}
                `}
              >
                <img src={product.image} className="w-full h-full object-cover" alt="thumbnail" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: BUYING DECISION */}
        <div className="lg:col-span-5 flex flex-col">

          <div className="mb-4 md:mb-6 border-b border-slate-200/60 pb-4 md:pb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-amber-400">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <span className="text-xs font-bold text-black underline decoration-slate-300 underline-offset-2">
                128 Avis
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-serif font-bold text-black mb-2 leading-tight">{product.name}</h1>
            <p className="text-black font-medium text-xs md:text-sm">{product.category} • Réf: {product.id.padStart(6, '0')} • Stock: {product.stock}</p>
          </div>

          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-3xl md:text-4xl font-black text-black">{product.price.toFixed(2)} $</span>
            <span className="text-base text-black line-through font-medium">{(product.price * 1.2).toFixed(2)} $</span>
          </div>

          <div className="flex gap-3 mb-6">
            <button
              type="button"
              onClick={() => window.open(`https://www.google.com/search?q=prix+${encodeURIComponent(product.name)}`, '_blank')}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-300 rounded-xl font-bold text-black hover:bg-slate-50 transition-colors shadow-sm"
            >
              <GitCompare size={18} />
              <span className="hidden sm:inline">Comparer</span>
            </button>
            <Link
              to="/"
              onClick={() => addToCart(product)}
              className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 text-center flex items-center justify-center"
            >
              Acheter
            </Link>
          </div>

          <p className="text-black leading-relaxed text-sm md:text-base mb-8">
            {product.description}
          </p>

          {/* Desktop Action Area (Hidden on Mobile) */}
          <div className="hidden md:block bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/80 shadow-xl mb-8">
            <div className="flex items-center gap-3 text-sm text-black mb-6 pb-6 border-b border-slate-200">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Package size={20} />
              </div>
              <div>
                <p className="font-bold">Livraison estimée : <span className="text-green-700">{deliveryDate.toLocaleDateString('fr-FR', dateOptions)}</span></p>
                <p className="text-xs text-black">Expédié sous 24h depuis Paris</p>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`
                    w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-lg
                    ${added
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-slate-900 text-white hover:bg-blue-600 hover:shadow-blue-500/30'}
                    `}
            >
              {added ? (
                <>
                  <Check size={24} strokeWidth={3} />
                  <span>Ajouté au panier</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={24} strokeWidth={2.5} />
                  <span>Ajouter au panier</span>
                </>
              )}
            </button>
          </div>

          {/* Technical Details Accordion-style */}
          <div className="space-y-4">
            <h3 className="font-bold text-black text-sm uppercase tracking-wide border-b border-slate-200 pb-2">Caractéristiques</h3>
            <div className="grid grid-cols-1 gap-2 text-sm bg-white/50 p-4 rounded-xl border border-white">
              {product.details && Object.entries(product.details).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-slate-100 last:border-0">
                  <span className="text-black font-medium">{key}</span>
                  <span className="font-bold text-black text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassCard className="flex items-center gap-4 p-4 border-slate-200 bg-white/60" hoverEffect={false}>
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Truck size={20} />
          </div>
          <div>
            <h3 className="font-bold text-black text-sm">Livraison Express</h3>
            <p className="text-xs text-black">Gratuite dès 50 $.</p>
          </div>
        </GlassCard>
        <GlassCard className="flex items-center gap-4 p-4 border-slate-200 bg-white/60" hoverEffect={false}>
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h3 className="font-bold text-black text-sm">Garantie 2 Ans</h3>
            <p className="text-xs text-black">Sur tout le matériel.</p>
          </div>
        </GlassCard>
      </div>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-50 flex gap-3 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] pb-safe-area">
        <div className="flex flex-col justify-center">
          <span className="text-xs text-black font-bold">Total</span>
          <span className="text-xl font-black text-black">{product.price.toFixed(0)} $</span>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`
            flex-1 py-3 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg
            ${added
              ? 'bg-green-600 text-white'
              : 'bg-black text-white'}
            `}
        >
          {added ? <Check size={20} /> : <ShoppingBag size={20} />}
          {added ? 'Ajouté' : 'Ajouter au panier'}
        </button>
      </div>

    </div>
  );
};