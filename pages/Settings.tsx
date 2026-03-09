import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Bell, Shield, Smartphone, Moon } from 'lucide-react';

export const Settings: React.FC = () => {
  const SettingRow = ({ icon: Icon, title, desc, toggle = true }: any) => (
    <div className="flex items-center justify-between p-4 border-b border-slate-200 last:border-0 hover:bg-slate-50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-white border border-slate-200 rounded-lg text-black shadow-sm">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="font-bold text-black text-sm">{title}</h3>
          <p className="text-xs text-slate-600 font-medium">{desc}</p>
        </div>
      </div>
      {toggle && (
        <div className="w-11 h-6 bg-slate-200 rounded-full relative cursor-pointer border border-slate-300">
          <div className="absolute right-1 top-1 w-4 h-4 bg-black rounded-full shadow-sm"></div>
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-black mb-8 text-black">Paramètres</h1>

      <div className="space-y-6">
        
        <GlassCard className="!p-0 overflow-hidden border-slate-300" hoverEffect={false}>
          <div className="p-4 border-b border-slate-200 bg-slate-50">
            <h2 className="font-black text-black text-sm uppercase tracking-wide">Préférences Générales</h2>
          </div>
          <SettingRow icon={Moon} title="Mode Sombre" desc="Utiliser le thème sombre par défaut" />
          <SettingRow icon={Bell} title="Notifications" desc="Recevoir des alertes pour les promos" />
        </GlassCard>

        <GlassCard className="!p-0 overflow-hidden border-slate-300" hoverEffect={false}>
          <div className="p-4 border-b border-slate-200 bg-slate-50">
            <h2 className="font-black text-black text-sm uppercase tracking-wide">Sécurité</h2>
          </div>
          <SettingRow icon={Shield} title="2FA" desc="Authentification à deux facteurs" />
          <SettingRow icon={Smartphone} title="Appareils Connectés" desc="Gérer vos sessions actives" toggle={false} />
        </GlassCard>

        <div className="flex justify-end pt-4">
            <button className="text-red-600 text-sm font-bold hover:text-white hover:bg-red-600 px-4 py-2 rounded-lg transition-all border border-transparent hover:border-red-600">Se déconnecter</button>
        </div>

      </div>
    </div>
  );
};