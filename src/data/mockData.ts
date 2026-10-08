import { Ionicons } from "@expo/vector-icons";

// type for ionicons names
export type IconName = keyof typeof Ionicons.glyphMap;

// types

export interface Category {
  id: string;
  name: string;
  icon: IconName;
}

export interface FoodType {
  id: string;
  name: string;
  icon: IconName;
  color: string;
}

export interface Cuisine {
  id: string;
  name: string;
  color: string;
}

export interface Restaurant {
  id: string;
  name: string;
  initials: string; // using initials instead of real logos
  logoColor: string;
  rating: number;
  area: string;
  deliveryTime: string;
  deliveryFee: number;
  offer?: string; // optional
}

export interface Order {
  id: string;
  restaurantName: string;
  initials: string;
  logoColor: string;
  date: string;
  orderNumber: string;
  status: "Complete" | "Cancelled";
  total: number;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  endsIn: string;
}

export interface SavingsItem {
  id: string;
  label: string;
  amount: number;
  icon: IconName;
  points?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  lastOrdered?: string;
}

// data

export const DELIVERY_ADDRESS = "123 Main Street SW";

export const CATEGORIES: Category[] = [
  { id: "1", name: "Restaurants", icon: "restaurant" },
  { id: "2", name: "Offers", icon: "pricetag" },
  { id: "3", name: "Grocery", icon: "cart" },
  { id: "4", name: "Alcohol", icon: "wine" },
  { id: "5", name: "Convenience", icon: "storefront" },
];

export const FOOD_TYPES: FoodType[] = [
  { id: "1", name: "New", icon: "sparkles", color: "#F26B0A" },
  { id: "2", name: "Only on Skip", icon: "bag-handle", color: "#5B3A5E" },
  { id: "3", name: "Fast Food", icon: "fast-food", color: "#F2A7B1" },
  { id: "4", name: "Burgers", icon: "restaurant", color: "#B9D9DE" },
  { id: "5", name: "Pizza", icon: "pizza", color: "#F6C445" },
];

export const CUISINES: Cuisine[] = [
  { id: "1", name: "Japanese", color: "#FBDDC5" },
  { id: "2", name: "Italian", color: "#E4EEF0" },
  { id: "3", name: "Vietnamese", color: "#FADDE1" },
  { id: "4", name: "Chinese", color: "#FBEBC3" },
  { id: "5", name: "Pho", color: "#E6D9EA" },
  { id: "6", name: "Asian", color: "#F5EBDD" },
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: "1",
    name: "Shawarma Palace",
    initials: "SP",
    logoColor: "#F26B0A",
    rating: 7.4,
    area: "Kensington Rd. NW",
    deliveryTime: "31–41 mins",
    deliveryFee: 2.09,
    offer: "Buy 1, get 1 free",
  },
  {
    id: "2",
    name: "Cluck Chicken",
    initials: "CC",
    logoColor: "#E85D2A",
    rating: 8.1,
    area: "17 Ave SW",
    deliveryTime: "25–35 mins",
    deliveryFee: 1.99,
  },
  {
    id: "3",
    name: "Sub Station",
    initials: "SS",
    logoColor: "#1E8A3E",
    rating: 7.9,
    area: "Beltline",
    deliveryTime: "20–30 mins",
    deliveryFee: 0.99,
    offer: "$3 off orders $20+",
  },
  {
    id: "4",
    name: "Burger Barn",
    initials: "BB",
    logoColor: "#C8102E",
    rating: 8.4,
    area: "Mission",
    deliveryTime: "30–40 mins",
    deliveryFee: 2.49,
  },
];

export const ORDERS: Order[] = [
  {
    id: "1",
    restaurantName: "Shawarma Palace",
    initials: "SP",
    logoColor: "#F26B0A",
    date: "Sep 27, 2026",
    orderNumber: "#100234",
    status: "Complete",
    total: 15.29,
  },
  {
    id: "2",
    restaurantName: "Cluck Chicken",
    initials: "CC",
    logoColor: "#E85D2A",
    date: "Sep 6, 2026",
    orderNumber: "#100198",
    status: "Complete",
    total: 22.55,
  },
  {
    id: "3",
    restaurantName: "Burger Barn",
    initials: "BB",
    logoColor: "#C8102E",
    date: "Aug 21, 2026",
    orderNumber: "#100145",
    status: "Complete",
    total: 18.4,
  },
];

export const RECENT_SEARCHES: string[] = ["shawarma", "pizza"];

export const POINTS = 10900;
export const POINTS_VALUE = 10.9;
export const TOTAL_SAVED = 425.23;

export const OFFERS: Offer[] = [
  {
    id: "1",
    title: "Collect 300 bonus points",
    description:
      "Order once with a subtotal of $30+ (before taxes, tips and fees).",
    endsIn: "Ends today",
  },
  {
    id: "2",
    title: "$5 off your next order",
    description: "Valid on orders of $25+ from participating restaurants.",
    endsIn: "Ends in 3 days",
  },
];

export const SAVINGS_BREAKDOWN: SavingsItem[] = [
  { id: "1", label: "Skip+ Member Savings", amount: 84.02, icon: "bag-handle" },
  { id: "2", label: "Other Offer Savings", amount: 341.21, icon: "pricetag" },
  { id: "3", label: "Points Redeemed", amount: 0, icon: "star", points: 0 },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    name: "BOGO – Classic Chicken Wings (10 pcs)",
    description: "Plain, Ranch Sauce",
    price: 23.99,
    lastOrdered: "Sep 27, 2026",
  },
  {
    id: "2",
    name: "Chicken Shawarma Wrap",
    description: "Garlic sauce, pickles, fries inside",
    price: 12.99,
  },
  {
    id: "3",
    name: "Beef Shawarma Plate",
    description: "Rice, salad, hummus, pita",
    price: 18.49,
  },
];
