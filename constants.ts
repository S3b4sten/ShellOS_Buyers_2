import { Product, UserProfile } from './types';

export const MOCK_USER: UserProfile = {
  name: "Alexandre Dupont",
  email: "alex.dupont@example.com",
  avatar: "https://picsum.photos/200/200?random=99",
  address: "331B, Baker Street, Londre"
};

export const CATEGORIES = ["Tout", "Rock", "Hip Hop", "Pop", "Jazz", "Electronic"];

export const CATEGORY_BG_MAP: Record<string, string> = {
  "Tout": "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=2070",
  "Rock": "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=2070",
  "Hip Hop": "https://images.pexels.com/photos/1644613/pexels-photo-1644613.jpeg?auto=compress&cs=tinysrgb&w=2070",
  "Pop": "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=2070",
  "Jazz": "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=2070",
  "Electronic": "https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=2070"
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'v1',
    name: 'Tyler The Creator - Igor',
    category: 'Hip Hop',
    price: 26.95,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQLQjOa3AEB8CYlg5d7xlSOpC7F4nO9umnNyTNP1TK8xCyCcToP7ICbhw8VpUH35tNma-MuFMg0HTlrj2eWcWho7bOjoqhbindqUHKKdIlSkUNuWZt_MidD",
    isNew: true,
    description: 'Album vinyle LP de Tyler The Creator, incluant les hits "EARFQUAKE" et "NEW MAGIC WAND".',
    details: {
      "Format": "Vinyl LP",
      "Label": "Columbia Records",
      "Sortie": "2019",
      "Genre": "Hip Hop / Experimental",
      "Poids": "180g"
    }
  },
  {
    id: 'v2',
    name: 'Michael Jackson - Thriller',
    category: 'Pop',
    price: 19.97,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSX8zad1AB_Q-vxaTYnojuNQ_0yqbABKao92ciHPAE5NdaXu6lYJueViJXcWroLJ2j_tvlIOcA8EZFwSP807T1AdnmUipmOP4m6hVQQZQNh",
    isNew: false,
    description: 'L\'album le plus vendu de tous les temps. Une œuvre monumentale de la pop.',
    details: {
      "Format": "Vinyl LP",
      "Label": "Epic",
      "Sortie": "1982",
      "Genre": "Pop / Funk / Rock",
      "Poids": "140g"
    }
  },
  {
    id: 'v3',
    name: 'Nirvana - Nevermind (Silver Vinyl)',
    category: 'Rock',
    price: 24.99,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSEvvE11Afe6OLliV2ZVy8PQhB3y2rPgm6Y7RSHvmBQsmCcqsBgnpoZsk3dQVMbRVcrHMNRwWz_dSr9WHEcxYolT8_mRSpPYA",
    isNew: true,
    description: 'Édition limitée en vinyle argenté de l\'album culte qui a lancé le mouvement grunge.',
    details: {
      "Format": "LP Silver Vinyl",
      "Label": "Geffen",
      "Sortie": "1991 (Réédition)",
      "Genre": "Grunge / Rock",
      "Poids": "180g"
    }
  },
  {
    id: 'v4',
    name: 'SZA - Ctrl',
    category: 'Hip Hop',
    price: 27.99,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS9F9GJ74ztbaRdOqGUsnp-cH918q8mMApeadnN6j07DrnWDkIXeCeaWldJEAsotPDmZ4cOeB7yF5r1T-lJ2_MkdtYuGmyNOMhhJbN9s1Sz",
    isNew: false,
    description: 'Le premier album studio de SZA, une exploration intime du R&B et du Hip Hop.',
    details: {
      "Format": "Green Vinyl",
      "Label": "TDE / RCA",
      "Sortie": "2017",
      "Genre": "Neo-Soul / R&B",
      "Poids": "180g"
    }
  },
  {
    id: 'v5',
    name: 'Kendrick Lamar - GNX',
    category: 'Hip Hop',
    price: 33.97,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR0onyq_hVNXmpZ5lv81t-9eUwiUU6KTwwv7UQMLgg4QQi2-EFwwADvBqLnj7inIxPOtG5BfHNf-gefKKEiYBwkdrv8MdIV",
    isNew: true,
    description: 'Exclusivité Target. Le dernier projet percutant de Kendrick Lamar.',
    details: {
      "Format": "Target Exclusive Vinyl",
      "Label": "Interscope",
      "Sortie": "2024",
      "Genre": "Hip Hop",
      "Poids": "180g"
    }
  },
  {
    id: 'v6',
    name: 'Arctic Monkeys - AM',
    category: 'Rock',
    price: 23.99,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTU2kCTkOg05iCaWr7l1BqkqhBlyN_sjbxuNNUVI-tMYJry-yut4ayzdplmDpKwQsQfccbY0myFNnRWg2oSh5Zg4Yc0VkYJjg",
    isNew: false,
    description: 'Un mélange parfait de rock indépendant et de rythmes hip-hop.',
    details: {
      "Format": "Vinyl LP",
      "Label": "Domino",
      "Sortie": "2013",
      "Genre": "Indie Rock",
      "Poids": "180g"
    }
  },
  {
    id: 'v7',
    name: 'Green Day - Dookie',
    category: 'Rock',
    price: 24.98,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTr3vMi8QXdaYpeKW3cbYyql3JTZ9G4APK8lqnEdeobzNX7vzH0ZApwewm5s0SNVxGchoSWnMse7ietYWUgfJk7Kog7c8Mrd5bdpjtRW991DU7noX8_q9s",
    isNew: true,
    description: 'Édition 30ème anniversaire en vinyle bleu. L\'album qui a popularisé le punk-rock.',
    details: {
      "Format": "Blue Vinyl LP",
      "Label": "Reprise",
      "Sortie": "1994 (30th Anniv.)",
      "Genre": "Punk Rock",
      "Poids": "140g"
    }
  },
  {
    id: 'v8',
    name: 'Tame Impala - Currents',
    category: 'Electronic',
    price: 35.78,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRvGH0ujDWGrjGPZvY_qqohGYQXpL03JpVELGG4FkN4-twPTW1go4u4bl20RybRXaPfUqCEHOhcq0ZUliHaOSyIfE63Gif7ECP59CTpp_c",
    isNew: false,
    description: 'Une odyssée psychédélique moderne avec des influences synth-pop puissantes.',
    details: {
      "Format": "2-Disc LP",
      "Label": "Interscope",
      "Sortie": "2015",
      "Genre": "Psychedelic Pop / Electronic",
      "Poids": "180g"
    }
  },
  {
    id: 'v9',
    name: 'Miles Davis - The Musings of Miles',
    category: 'Jazz',
    price: 38.98,
    image: "https://serpapi.com/searches/69af4e47d08cfe829cc8678c/images/GN6WTxKcixIgPrN0W87C18Ybn0VpI7menTkFNYtE7xRvAC27-Uz70uPLKf8KzfzZgKHzl_FLndSlQg8WHQFvsQ.webp",
    isNew: false,
    description: 'Une pièce d\'histoire du jazz, 180g Original Jazz Classics Series.',
    details: {
      "Format": "180g LP",
      "Label": "Prestige",
      "Sortie": "1955",
      "Genre": "Bop / Jazz",
      "Poids": "180g"
    }
  },
  {
    id: 'v10',
    name: 'Taylor Swift - Folklore',
    category: 'Pop',
    price: 24.99,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRuDeDQZy1nHxKdvaTA0F7BzY0__75cKoSDdydwm8UIo1J9ogLv9OfsTkQ5dIYLRlWMvzCdxW1gFHiHUgGXHAG9VqXcgpS3gg",
    isNew: true,
    description: 'Une escapade folk contemplative et acclamée par la critique.',
    details: {
      "Format": "Red Vinyl LP",
      "Label": "Republic",
      "Sortie": "2020",
      "Genre": "Indie Folk / Pop",
      "Poids": "140g"
    }
  },
  {
    id: 'v11',
    name: 'Daft Punk - Discovery',
    category: 'Electronic',
    price: 32.50,
    image: "https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'L\'album qui a redéfini la musique électronique au début des années 2000.',
    details: {
      "Format": "Double Vinyl LP",
      "Label": "Virgin",
      "Sortie": "2001",
      "Genre": "French House / Electronic",
      "Poids": "180g"
    }
  },
  {
    id: 'v12',
    name: 'John Coltrane - A Love Supreme',
    category: 'Jazz',
    price: 29.99,
    image: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    isNew: false,
    description: 'Un chef-d\'œuvre du jazz spirituel, considéré comme l\'un des plus grands albums de tous les temps.',
    details: {
      "Format": "Vinyl LP",
      "Label": "Impulse!",
      "Sortie": "1965",
      "Genre": "Free Jazz / Spiritual Jazz",
      "Poids": "180g"
    }
  }
];