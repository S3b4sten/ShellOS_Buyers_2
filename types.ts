export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew: boolean;
  description: string;
  details: Record<string, string>;
  stock?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  address: string;
}

export enum Page {
  HOME = 'home',
  SEARCH = 'search',
  CART = 'cart',
  CHECKOUT = 'checkout',
  PROFILE = 'profile',
  SETTINGS = 'settings'
}