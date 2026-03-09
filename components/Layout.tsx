import React from 'react';
import { Home, Search, ShoppingBag, User, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useBackground } from '../contexts/BackgroundContext';

interface LayoutProps {
  children: React.ReactNode;
  cartCount: number;
}

const NavItem = ({ to, icon: Icon, label, active, onClick, badgeCount }: any) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={`
      relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium
      ${active 
        ? 'text-black bg-slate-100 shadow-sm ring-1 ring-slate-200' 
        : 'text-slate-600 hover:text-black hover:bg-slate-50'}
    `}
  >
    <Icon size={20} strokeWidth={active ? 2.5 : 2} />
    <span className="text-sm">{label}</span>
    {badgeCount > 0 && (
      <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-md border border-white">
        {badgeCount}
      </span>
    )}
  </Link>
);

const MobileNavItem = ({ to, icon: Icon, label, active, badgeCount }: any) => (
  <Link 
    to={to} 
    className={`
      relative flex flex-col items-center justify-center w-full py-3 transition-colors
      ${active ? 'text-blue-600' : 'text-slate-500'}
    `}
  >
    <div className={`
      relative p-1 rounded-xl transition-all duration-300
      ${active ? 'bg-blue-50 translate-y-[-2px]' : ''}
    `}>
      <Icon size={24} strokeWidth={active ? 2.5 : 2} fill={active ? "currentColor" : "none"} className={active ? "text-blue-600 opacity-20" : ""} />
      <Icon size={24} strokeWidth={active ? 2.5 : 2} className="absolute top-1 left-1" />
    </div>
    <span className="text-[10px] font-bold mt-1">{label}</span>
    
    {badgeCount > 0 && (
       <span className="absolute top-2 right-1/4 translate-x-1 bg-red-500 text-white text-[10px] font-bold h-4 min-w-[16px] px-1 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
         {badgeCount}
       </span>
    )}
  </Link>
);

export const Layout: React.FC<LayoutProps> = ({ children, cartCount }) => {
  const location = useLocation();
  const { background } = useBackground();

  return (
    <div className="min-h-[100dvh] flex flex-col text-slate-950 font-sans selection:bg-slate-200 selection:text-black relative">
      
      {/* Global Dynamic Background Layer */}
      <div className="fixed inset-0 z-0 transition-all duration-1000 ease-in-out">
        {/* The Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105"
          style={{ backgroundImage: `url(${background})` }}
        />
        {/* Lighter Overlay for Sky/Cloud Effect */}
        <div className="absolute inset-0 bg-sky-100/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300/30 via-white/20 to-blue-200/50" />
      </div>

      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 h-16 glass-panel z-50 px-4 md:px-8 flex items-center justify-between shadow-sm">
        
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-lg">S</div>
          SHELLOS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <NavItem to="/" icon={Home} label="Accueil" active={location.pathname === '/'} />
          <NavItem to="/search" icon={Search} label="Recherche" active={location.pathname === '/search'} />
          <NavItem to="/profile" icon={User} label="Profil" active={location.pathname === '/profile'} />
          <NavItem to="/settings" icon={Settings} label="Options" active={location.pathname === '/settings'} />
          
          <div className="ml-4 pl-4 border-l-2 border-slate-200">
             <NavItem to="/cart" icon={ShoppingBag} label="Panier" active={location.pathname === '/cart'} badgeCount={cartCount} />
          </div>
        </nav>

        {/* Mobile Header Elements (Cart shortcut if needed, mostly clean) */}
        <div className="md:hidden">
           {/* Can add simplified actions here if needed */}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 pt-20 pb-24 md:pb-12 px-3 md:px-4 w-full max-w-7xl mx-auto flex-1 flex flex-col">
        {children}
      </main>

      {/* Mobile Bottom Navigation Bar - The "Pragmatic" Choice */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-200/60 z-50 pb-safe-area shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)]">
        <nav className="flex items-center justify-around">
          <MobileNavItem to="/" icon={Home} label="Accueil" active={location.pathname === '/'} />
          <MobileNavItem to="/search" icon={Search} label="Recherche" active={location.pathname === '/search'} />
          <MobileNavItem to="/cart" icon={ShoppingBag} label="Panier" active={location.pathname === '/cart'} badgeCount={cartCount} />
          <MobileNavItem to="/profile" icon={User} label="Profil" active={location.pathname === '/profile'} />
        </nav>
      </div>

    </div>
  );
};