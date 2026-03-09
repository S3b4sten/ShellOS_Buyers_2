import { Product, UserProfile } from './types';

export const MOCK_USER: UserProfile = {
  name: "Alexandre Dupont",
  email: "alex.dupont@example.com",
  avatar: "https://picsum.photos/200/200?random=99",
  address: "331B, Baker Street, Londre"
};

export const CATEGORIES = ["Tout", "Tech", "Audio", "Mode", "Accessoires", "Maison"];

export const CATEGORY_BG_MAP: Record<string, string> = {
  "Tout": "https://tse2.mm.bing.net/th/id/OIP.pBI0zyPFM_W_5oZrsH5BOwHaEO?rs=1&pid=ImgDetMain&o=7&rm=3",
  "Tech": "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=2070",
  "Audio": "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=2070",
  "Mode": "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=2070",
  "Accessoires": "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=2070",
  "Maison": "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=2070"
};

export const MOCK_PRODUCTS: Product[] = [
  // TECH
  {
    id: '1',
    name: 'Smartphone Zenith X',
    category: 'Tech',
    price: 899.99,
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Le dernier cri en matière de performance mobile avec écran OLED 120Hz.',
    details: {
      "Écran": "6.7\" OLED LTPO 120Hz",
      "Processeur": "Snapdragon 8 Gen 3",
      "Stockage": "256 Go",
      "Batterie": "5000 mAh",
      "Caméra": "Triple capteur 50MP"
    }
  },
  {
    id: '2',
    name: 'Laptop Pro 15',
    category: 'Tech',
    price: 1499.00,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Puissance de travail ultime pour les créatifs et les professionnels.',
    details: {
      "Processeur": "M3 Pro",
      "RAM": "16 Go Unifiée",
      "SSD": "512 Go NVMe",
      "Écran": "15.4\" Liquid Retina",
      "Poids": "1.6 kg"
    }
  },
  {
    id: '3',
    name: 'Tablet Slate Air',
    category: 'Tech',
    price: 450.00,
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Légèreté et performance pour le divertissement et le travail nomade.',
    details: {
      "Écran": "10.9\" IPS LCD",
      "Connectivité": "Wi-Fi 6E + 5G",
      "Autonomie": "Jusqu'à 12h",
      "Stockage": "64 Go",
      "Compatibilité": "Stylet Actif 2"
    }
  },
  {
    id: '4',
    name: 'Drone Eagle Eye',
    category: 'Tech',
    price: 799.50,
    image: "https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Capturez des vues aériennes époustouflantes en 4K.',
    details: {
      "Résolution Vidéo": "4K HDR 60fps",
      "Portée": "10 km",
      "Temps de vol": "34 minutes",
      "Poids": "249g",
      "Capteurs": "Évitement d'obstacles 3D"
    }
  },
  {
    id: '5',
    name: 'Camera 4K Lens',
    category: 'Tech',
    price: 1200.00,
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Appareil photo hybride pour des clichés professionnels.',
    details: {
      "Capteur": "Plein Format 24MP",
      "ISO": "100-51200",
      "Rafale": "10 i/s",
      "Vidéo": "4K 10-bit 4:2:2",
      "Stabilisation": "5 axes intégrée"
    }
  },
  {
    id: '6',
    name: 'Console GameBox',
    category: 'Tech',
    price: 499.99,
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'La nouvelle génération de jeu vidéo dans votre salon.',
    details: {
      "GPU": "12 TFLOPS RDNA 2",
      "Stockage": "1 To SSD Custom",
      "Résolution": "4K 120Hz cible",
      "Audio": "Tempest 3D",
      "Lecteur": "Blu-ray 4K UHD"
    }
  },
  {
    id: '7',
    name: 'VR Headset Vision',
    category: 'Tech',
    price: 350.00,
    image: "https://images.pexels.com/photos/3761118/pexels-photo-3761118.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Immersion totale dans les mondes virtuels.',
    details: {
      "Résolution": "1832 x 1920 par œil",
      "Rafale": "90 Hz / 120 Hz",
      "Champ de vision": "110 degrés",
      "Suivi": "6 DoF interne",
      "Poids": "503g"
    }
  },
  {
    id: '8',
    name: 'Robot Vacuum CleanBot',
    category: 'Tech',
    price: 299.00,
    image: "https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Nettoyage intelligent et autonome de votre maison.',
    details: {
      "Aspiration": "4000 Pa",
      "Navigation": "LiDAR Laser",
      "Autonomie": "180 minutes",
      "Fonction": "Aspiration + Lavage",
      "Bruit": "Silencieux (60dB)"
    }
  },
  {
    id: '9',
    name: 'Smart Hub Central',
    category: 'Tech',
    price: 129.99,
    image: "https://images.pexels.com/photos/4790268/pexels-photo-4790268.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Contrôlez toute votre maison connectée depuis un seul appareil.',
    details: {
      "Écran": "7 pouces tactile",
      "Micro": "Longue portée",
      "Compatibilité": "Zigbee, Matter, Thread",
      "Audio": "Haut-parleur 40mm",
      "Caméra": "2MP avec cache"
    }
  },
  {
    id: '10',
    name: 'E-Reader PaperWhite',
    category: 'Tech',
    price: 119.00,
    image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Bibliothèque entière dans votre poche avec écran anti-reflet.',
    details: {
      "Écran": "6.8\" E-Ink Carta 1200",
      "Résolution": "300 ppp",
      "Éclairage": "Chaud/Froid ajustable",
      "Étanchéité": "IPX8",
      "Autonomie": "Jusqu'à 10 semaines"
    }
  },

  // AUDIO
  {
    id: '11',
    name: 'Casque NoiseCancel',
    category: 'Audio',
    price: 249.99,
    image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Silence absolu pour une musique pure.',
    details: {
      "Type": "Circum-aural fermé",
      "Réduction Bruit": "Active Adaptative (ANC)",
      "Autonomie": "30 heures",
      "Bluetooth": "5.3 Multipoint",
      "Codecs": "LDAC, AAC, SBC"
    }
  },
  {
    id: '12',
    name: 'Écouteurs True Wireless',
    category: 'Audio',
    price: 149.00,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Liberté de mouvement sans aucun fil.',
    details: {
      "Autonomie": "6h + 24h boîtier",
      "Résistance": "IPX4 (Sueur/Pluie)",
      "Micro": "4 micros beamforming",
      "Charge": "USB-C & Sans fil Qi",
      "Poids": "4.5g par écouteur"
    }
  },
  {
    id: '13',
    name: 'Enceinte BoomBox',
    category: 'Audio',
    price: 180.00,
    image: "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Son puissant et basses profondes pour vos soirées.',
    details: {
      "Puissance": "40 Watts RMS",
      "Étanchéité": "IP67 (Immersion)",
      "Batterie": "20 heures",
      "Fonction": "Powerbank intégrée",
      "Jumelage": "Mode PartyBoost"
    }
  },
  {
    id: '14',
    name: 'Barre de Son Cinema',
    category: 'Audio',
    price: 320.00,
    image: "https://images.pexels.com/photos/4995022/pexels-photo-4995022.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Transformez votre TV en véritable cinéma.',
    details: {
      "Canaux": "3.1.2 Dolby Atmos",
      "Puissance": "360W",
      "Subwoofer": "Sans fil inclus",
      "Entrées": "HDMI eARC, Optique",
      "Connectivité": "AirPlay 2, Chromecast"
    }
  },
  {
    id: '15',
    name: 'Platine Vinyle Retro',
    category: 'Audio',
    price: 199.50,
    image: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Le charme de l\'analogique avec la technologie moderne.',
    details: {
      "Entraînement": "Courroie",
      "Vitesse": "33 / 45 / 78 tours",
      "Sortie": "Préampli Phono intégré / USB",
      "Cellule": "Audio-Technica incluse",
      "Bluetooth": "Émission vers enceintes"
    }
  },
  {
    id: '16',
    name: 'Micro Studio Pro',
    category: 'Audio',
    price: 159.00,
    image: "https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Enregistrement vocal de qualité studio pour podcasteurs.',
    details: {
      "Type": "Condensateur Cardioïde",
      "Connectique": "USB-C Plug & Play",
      "Réponse": "20Hz - 20kHz",
      "Résolution": "24-bit / 96kHz",
      "Accessoires": "Pied et filtre pop inclus"
    }
  },
  {
    id: '17',
    name: 'Enceintes Monitoring',
    category: 'Audio',
    price: 280.00,
    image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Précision sonore pour le mixage et la production.',
    details: {
      "Woofer": "5 pouces Kevlar",
      "Tweeter": "1 pouce dôme soie",
      "Puissance": "70W Bi-amplifié",
      "Réponse": "43Hz - 40kHz",
      "Vendu": "Par paire"
    }
  },
  {
    id: '18',
    name: 'Ampli DAC Hi-Fi',
    category: 'Audio',
    price: 450.00,
    image: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Redécouvrez vos morceaux préférés en haute fidélité.',
    details: {
      "Puissance": "2x 60W sous 8 Ohms",
      "DAC": "ESS Sabre 32-bit",
      "Entrées": "USB-B, Coaxial, Optique, RCA",
      "Sortie Casque": "6.35mm Class A",
      "Formats": "DSD512, PCM 768kHz"
    }
  },
  {
    id: '19',
    name: 'Radio Vintage',
    category: 'Audio',
    price: 89.90,
    image: "https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Style rétro avec fonctionnalités Bluetooth modernes.',
    details: {
      "Bandes": "FM / DAB+",
      "Matériau": "Bois véritable",
      "Connectivité": "Bluetooth 5.0",
      "Autonomie": "12 heures sur batterie",
      "Auxiliaire": "Entrée Jack 3.5mm"
    }
  },
  {
    id: '20',
    name: 'Lecteur MP3 Sport',
    category: 'Audio',
    price: 49.99,
    image: "https://th.bing.com/th/id/OIP.UbPg0HBl3toOQgJxyMuzQQHaEs?w=279&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    isNew: false,
    description: 'Compagnon léger et robuste pour vos entraînements.',
    details: {
      "Stockage": "16 Go (2000 chansons)",
      "Poids": "25 grammes",
      "Clip": "Intégré",
      "Radio FM": "Oui",
      "Autonomie": "18 heures lecture"
    }
  },

  // MODE
  {
    id: '21',
    name: 'Veste Bomber Urbain',
    category: 'Mode',
    price: 120.00,
    image: "https://images.pexels.com/photos/1035685/pexels-photo-1035685.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Style intemporel pour la ville.',
    details: {
      "Matière": "Nylon déperlant",
      "Doublure": "Polyester orange",
      "Fermeture": "Zip YKK métal",
      "Poches": "2 latérales, 1 intérieure, 1 manche",
      "Entretien": "Lavage à sec recommandé"
    }
  },
  {
    id: '22',
    name: 'T-Shirt Coton Bio',
    category: 'Mode',
    price: 35.00,
    image: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Confort et durabilité au quotidien.',
    details: {
      "Composition": "100% Coton Biologique GOTS",
      "Grammage": "180 g/m² (Épais)",
      "Coupe": "Regular Fit",
      "Origine": "Fabriqué au Portugal",
      "Col": "Rond côtelé"
    }
  },
  {
    id: '23',
    name: 'Jean Slim Noir',
    category: 'Mode',
    price: 79.90,
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Coupe parfaite et matière extensible.',
    details: {
      "Coupe": "Slim Tapered",
      "Matière": "98% Coton, 2% Élasthanne",
      "Teinture": "Stay Black (résiste au délavage)",
      "Taille": "Standard",
      "Fermeture": "Boutons"
    }
  },
  {
    id: '24',
    name: 'Sneakers RunFast',
    category: 'Mode',
    price: 110.00,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Design sportif et amorti exceptionnel.',
    details: {
      "Dessus": "Mesh respirant technique",
      "Semelle": "Mousse EVA ultra-légère",
      "Drop": "8mm",
      "Usage": "Running / Lifestyle",
      "Poids": "240g (taille 42)"
    }
  },
  {
    id: '25',
    name: 'Hoodie Oversize',
    category: 'Mode',
    price: 65.00,
    image: "https://i5.walmartimages.com/seo/Womens-Oversized-Hoodies-Fleece-Sweatshirts-Long-Sleeve-Sweaters-Pullover-Fall-Outfits-with-Pocket_f7e46bfd-ffd7-4468-92d4-77505d811915.f8c37ec4a3a4c124107ac2eb5ddebaa2.jpeg",
    isNew: false,
    description: 'Chaleur et confort décontracté.',
    details: {
      "Matière": "80% Coton, 20% Polyester",
      "Intérieur": "Molleton gratté doux",
      "Capuche": "Doublée avec cordon",
      "Poche": "Kangourou ventrale",
      "Style": "Coupe large (Oversize)"
    }
  },
  {
    id: '26',
    name: 'Casquette Street',
    category: 'Mode',
    price: 25.00,
    image: "https://images.pexels.com/photos/1484759/pexels-photo-1484759.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'L\'accessoire indispensable pour compléter votre look.',
    details: {
      "Forme": "Baseball 6 panneaux",
      "Matière": "Coton Twill",
      "Ajustement": "Sangle arrière réglable",
      "Visière": "Courbée rigide",
      "Logo": "Broderie 3D"
    }
  },
  {
    id: '27',
    name: 'Écharpe Laine',
    category: 'Mode',
    price: 45.00,
    image: "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Douceur et protection contre le froid.',
    details: {
      "Composition": "100% Laine Mérinos",
      "Dimensions": "180cm x 30cm",
      "Toucher": "Doux, ne gratte pas",
      "Finition": "Franges aux extrémités",
      "Entretien": "Lavage main à froid"
    }
  },
  {
    id: '28',
    name: 'Lunettes Soleil Aviator',
    category: 'Mode',
    price: 130.00,
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Protection UV avec style classique.',
    details: {
      "Verres": "Polarisés gris catégorie 3",
      "Monture": "Acier inoxydable doré",
      "Protection": "100% UVA/UVB",
      "Largeur": "58mm",
      "Inclus": "Étui rigide et chiffon"
    }
  },
  {
    id: '29',
    name: 'Ceinture Cuir',
    category: 'Mode',
    price: 40.00,
    image: "https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Élégance discrète et robustesse.',
    details: {
      "Matière": "Cuir de vachette pleine fleur",
      "Largeur": "35mm",
      "Boucle": "Carrée argent brossé",
      "Taille": "Ajustable (vis)",
      "Couleur": "Marron cognac"
    }
  },
  {
    id: '30',
    name: 'Bottines Chelsea',
    category: 'Mode',
    price: 150.00,
    image: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Chic et facile à porter en toute saison.',
    details: {
      "Matière": "Daim véritable (Suède)",
      "Semelle": "Gomme crêpe antidérapante",
      "Élastiques": "Latéraux renforcés",
      "Doublure": "Cuir respirant",
      "Talon": "2.5 cm"
    }
  },

  // ACCESSOIRES
  {
    id: '31',
    name: 'Montre Connectée Fit',
    category: 'Accessoires',
    price: 199.00,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Suivez votre santé et restez connecté.',
    details: {
      "Capteurs": "Rythme cardiaque, SpO2, GPS",
      "Écran": "AMOLED 1.4 pouce",
      "Étanchéité": "5 ATM (Nage)",
      "Compatibilité": "iOS et Android",
      "Autonomie": "7 jours usage normal"
    }
  },
  {
    id: '32',
    name: 'Sac à Dos Voyage',
    category: 'Accessoires',
    price: 95.00,
    image: "https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Grande capacité et confort pour les baroudeurs.',
    details: {
      "Volume": "40 Litres (taille cabine)",
      "Matière": "Polyester 900D résistant",
      "Laptop": "Compartiment 17 pouces",
      "Dos": "Ventilé mousse 3D",
      "Extras": "Housse de pluie incluse"
    }
  },
  {
    id: '33',
    name: 'Portefeuille Minimaliste',
    category: 'Accessoires',
    price: 45.00,
    image: "https://th.bing.com/th/id/R.0c65ac613aa6f94dc02b04a67bb13bd9?rik=sQ998Of6ikYJPg&pid=ImgRaw&r=0",
    isNew: false,
    description: 'Fin et sécurisé pour vos cartes essentielles.',
    details: {
      "Capacité": "6-8 cartes + billets",
      "Protection": "RFID Blocage intégré",
      "Matière": "Cuir italien tannage végétal",
      "Dimensions": "10cm x 7cm",
      "Mécanisme": "Éjection rapide des cartes"
    }
  },
  {
    id: '34',
    name: 'Coque iPhone Silicone',
    category: 'Accessoires',
    price: 29.00,
    image: "https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Protection douce et colorée pour votre smartphone.',
    details: {
      "Compatibilité": "iPhone 15 / 15 Pro",
      "Matière": "Silicone liquide soft-touch",
      "Intérieur": "Microfibre anti-rayures",
      "MagSafe": "Aimants intégrés",
      "Rebords": "Surélevés pour écran/caméra"
    }
  },
  {
    id: '35',
    name: 'Housse Laptop Feutre',
    category: 'Accessoires',
    price: 35.00,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Élégance et protection contre les rayures.',
    details: {
      "Taille": "Pour MacBook 13/14 pouces",
      "Matière": "Feutre de laine gris chiné",
      "Fermeture": "Rabat velcro",
      "Poches": "2 (principale + accessoires)",
      "Doublure": "Tissu doux"
    }
  },
  {
    id: '36',
    name: 'PowerBank 20000mAh',
    category: 'Accessoires',
    price: 55.00,
    image: "https://tse3.mm.bing.net/th/id/OIP.oE7eb3y0U3cfO7bq9B2nhwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    isNew: true,
    description: 'Ne soyez plus jamais à court de batterie.',
    details: {
      "Capacité": "20 000 mAh",
      "Sortie": "USB-C PD 30W + USB-A",
      "Entrée": "USB-C 18W",
      "Poids": "350g",
      "Charge": "4x un smartphone standard"
    }
  },
  {
    id: '37',
    name: 'Chargeur Rapide GaN',
    category: 'Accessoires',
    price: 40.00,
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Chargez vos appareils plus vite en prenant moins de place.',
    details: {
      "Technologie": "GaN (Nitrure de Gallium)",
      "Puissance": "65W Max",
      "Ports": "2x USB-C, 1x USB-A",
      "Taille": "50% plus petit qu'un chargeur standard",
      "Sécurité": "Protection surchauffe/surtension"
    }
  },
  {
    id: '38',
    name: 'Câble USB-C Tressé',
    category: 'Accessoires',
    price: 15.00,
    image: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Résistance et durabilité accrues.',
    details: {
      "Longueur": "2 mètres",
      "Gaine": "Nylon tressé double couche",
      "Puissance": "Supporte jusqu'à 100W",
      "Données": "USB 2.0 (480 Mbps)",
      "Connecteurs": "Renforcés aluminium"
    }
  },
  {
    id: '39',
    name: 'Support Téléphone Bureau',
    category: 'Accessoires',
    price: 20.00,
    image: "https://images.pexels.com/photos/5081386/pexels-photo-5081386.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Idéal pour les appels vidéo et le multitâche.',
    details: {
      "Matière": "Aluminium anodisé",
      "Réglage": "Double charnière inclinable",
      "Protection": "Patins silicone anti-dérapants",
      "Compatibilité": "Tous smartphones 4-8 pouces",
      "Pliable": "Oui, format voyage"
    }
  },
  {
    id: '40',
    name: 'Porte-clés Organiseur',
    category: 'Accessoires',
    price: 22.00,
    image: "https://images.pexels.com/photos/2148519/pexels-photo-2148519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Fini les clés qui tintent dans la poche.',
    details: {
      "Capacité": "2 à 7 clés",
      "Matière": "Polymère et Acier",
      "Installation": "Sans outils",
      "Accessoire": "Anneau pour clé voiture inclus",
      "Dimensions": "Compact (taille clé USB)"
    }
  },

  // MAISON
  {
    id: '41',
    name: 'Lampe Bureau LED',
    category: 'Maison',
    price: 60.00,
    image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Éclairage ajustable pour un confort visuel optimal.',
    details: {
      "Luminosité": "500 Lumens max",
      "Température": "Réglable (2700K - 6500K)",
      "Bras": "Articulé 3 axes",
      "Fonction": "Chargeur sans fil Qi base",
      "Consommation": "8W"
    }
  },
  {
    id: '42',
    name: 'Chaise Ergonomique',
    category: 'Maison',
    price: 250.00,
    image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Soutien parfait pour les longues sessions de travail.',
    details: {
      "Dossier": "Mesh respirant",
      "Support": "Lombaire ajustable",
      "Assise": "Mousse haute densité",
      "Mécanisme": "Basculant synchrone",
      "Charge max": "120 kg"
    }
  },
  {
    id: '43',
    name: 'Bureau Assis-Debout',
    category: 'Maison',
    price: 400.00,
    image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Changez de position pour rester dynamique.',
    details: {
      "Plateau": "140 x 70 cm (Bois)",
      "Hauteur": "Électrique (72cm à 120cm)",
      "Moteur": "Double moteur silencieux",
      "Mémoire": "4 positions enregistrables",
      "Cadre": "Acier renforcé"
    }
  },
  {
    id: '44',
    name: 'Pot de Fleur Géométrique',
    category: 'Maison',
    price: 30.00,
    image: "https://images.pexels.com/photos/1125510/pexels-photo-1125510.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Touche moderne pour vos plantes d\'intérieur.',
    details: {
      "Matière": "Céramique blanche",
      "Support": "Socle bois hêtre",
      "Diamètre": "18 cm",
      "Drainage": "Trou au fond + bouchon",
      "Style": "Scandinave"
    }
  },
  {
    id: '45',
    name: 'Horloge Murale Design',
    category: 'Maison',
    price: 45.00,
    image: "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Minimaliste et silencieuse.',
    details: {
      "Diamètre": "30 cm",
      "Mouvement": "Quartz silencieux (continu)",
      "Cadran": "Sans chiffres, index bâtons",
      "Matière": "Aluminium brossé",
      "Pile": "1x AA (non incluse)"
    }
  },
  {
    id: '46',
    name: 'Miroir Rond Laiton',
    category: 'Maison',
    price: 85.00,
    image: "https://images.pexels.com/photos/1883424/pexels-photo-1883424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Agrandissez votre espace avec élégance.',
    details: {
      "Diamètre": "60 cm",
      "Cadre": "Métal finition laiton doré",
      "Profondeur": "3 cm",
      "Fixation": "Crochet renforcé au dos",
      "Verre": "Haute clarté"
    }
  },
  {
    id: '47',
    name: 'Tapis Salon Doux',
    category: 'Maison',
    price: 140.00,
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Confort moelleux sous vos pieds.',
    details: {
      "Dimensions": "160 x 230 cm",
      "Matière": "Polypropylène shaggy",
      "Hauteur poil": "30 mm",
      "Entretien": "Aspirateur, taches à l'eau",
      "Certification": "Oeko-Tex Standard 100"
    }
  },
  {
    id: '48',
    name: 'Coussin Velours',
    category: 'Maison',
    price: 25.00,
    image: "https://th.bing.com/th/id/OIP.vVCajYZj_QvmVrBE90SDFwHaGD?w=238&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    isNew: false,
    description: 'Touche de couleur et de douceur pour votre canapé.',
    details: {
      "Dimensions": "45 x 45 cm",
      "Housse": "Velours 100% Polyester",
      "Garnissage": "Fibres creuses inclus",
      "Fermeture": "Zip invisible",
      "Lavage": "Housse machine 30°C"
    }
  },
  {
    id: '49',
    name: 'Mug Thermos Inox',
    category: 'Maison',
    price: 20.00,
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Gardez vos boissons chaudes plus longtemps.',
    details: {
      "Contenance": "450 ml",
      "Isolation": "Double paroi vide d'air",
      "Maintien": "Chaud 6h / Froid 12h",
      "Matériau": "Inox alimentaire 304",
      "Couvercle": "Étanche avec clapet"
    }
  },
  {
    id: '50',
    name: 'Machine à Café Expresso',
    category: 'Maison',
    price: 180.00,
    image: "https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: true,
    description: 'Le goût authentique du café italien à la maison.',
    details: {
      "Pression": "15 Bars",
      "Compatible": "Café moulu et dosettes ESE",
      "Buse vapeur": "Pour cappuccino",
      "Réservoir": "1.2 Litres amovible",
      "Chauffe": "Thermoblock rapide"
    }
  }
];