export interface CategoryItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  seller: string;
  image: string;
}
const categoryData: CategoryItem[]  = [
  {
    id: 1,
    name: "Aster Chrono",
    price: 75000,
    rating: 5,
    seller: "Lorejj",
    image: "/images/cardwatch.png"
  },
  {
    id: 2,
    name: "Nova Classic",
    price: 52000,
    rating: 4,
    seller: "TickTock",
    image: "/images/cardwatch.png"
  },
  {
    id: 3,
    name: "Orion Sport",
    price: 98000,
    rating: 5,
    seller: "Sportify",
    image: "/images/cardwatch.png"
  },
  {
    id: 4,
    name: "Luna Minimal",
    price: 42000,
    rating: 3,
    seller: "MinimalCo",
    image: "/images/cardwatch.png"
  },
  {
    id: 5,
    name: "Retro Voyager",
    price: 61000,
    rating: 4,
    seller: "RetroHub",
    image: "/images/cardwatch.png"
  },

];

export default categoryData;
