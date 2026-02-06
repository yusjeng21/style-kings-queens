import mensCollection from "@/assets/mens-collection.jpg";
import womensCollection from "@/assets/womens-collection.jpg";
import accessoriesCollection from "@/assets/accessories-collection.jpg";
import newArrivals from "@/assets/new-arrivals.jpg";

// Product type that will come from CMS (Strapi/Sanity)
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "men" | "women" | "accessories" | "new-arrivals";
  image: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

// Collection type for featured collections
export interface Collection {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

// Testimonial type
export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  avatar?: string;
}

// FAQ type
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Mock data - will be replaced by CMS data
export const collections: Collection[] = [
  {
    id: "1",
    name: "Men's Wear",
    slug: "men",
    image: mensCollection,
    description: "Stylish and modern menswear for every occasion",
  },
  {
    id: "2",
    name: "Women's Wear",
    slug: "women",
    image: womensCollection,
    description: "Elegant and trendy fashion for the modern woman",
  },
  {
    id: "3",
    name: "Accessories",
    slug: "accessories",
    image: accessoriesCollection,
    description: "Complete your look with our premium accessories",
  },
  {
    id: "4",
    name: "New Arrivals",
    slug: "new-arrivals",
    image: newArrivals,
    description: "Discover the latest additions to our collection",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Navy Blazer",
    price: 12500,
    description:
      "A stylish and comfortable piece made with quality fabric. Perfect for casual wear and special occasions.",
    category: "men",
    image: mensCollection,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Grey"],
    isFeatured: true,
  },
  {
    id: "2",
    name: "Elegant Evening Dress",
    price: 18000,
    description:
      "A stunning evening dress perfect for special occasions. Made with premium fabric for comfort and style.",
    category: "women",
    image: womensCollection,
    sizes: ["S", "M", "L"],
    colors: ["Black", "Red", "Navy"],
    isFeatured: true,
  },
  {
    id: "3",
    name: "Gold Chain Necklace",
    price: 8500,
    description:
      "Premium gold-plated chain necklace. Durable and stylish accessory for any outfit.",
    category: "accessories",
    image: accessoriesCollection,
    sizes: ["One Size"],
    colors: ["Gold"],
    isFeatured: true,
  },
  {
    id: "4",
    name: "Trendy Casual Set",
    price: 15000,
    description:
      "Modern casual outfit perfect for everyday wear. Comfortable and stylish.",
    category: "new-arrivals",
    image: newArrivals,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Coral", "Blue", "White"],
    isNew: true,
    isFeatured: true,
  },
  {
    id: "5",
    name: "Premium Cotton Shirt",
    price: 7500,
    description:
      "High-quality cotton shirt with a modern fit. Perfect for work or casual outings.",
    category: "men",
    image: mensCollection,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Pink"],
  },
  {
    id: "6",
    name: "Designer Handbag",
    price: 22000,
    description:
      "Luxurious designer handbag with premium leather finish. Spacious and elegant.",
    category: "accessories",
    image: accessoriesCollection,
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Red"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Modou G.",
    quote:
      "Great quality and fast delivery. I'm always impressed with Style Kings and Queens!",
    rating: 5,
  },
  {
    id: "2",
    name: "Kebba J.",
    quote:
      "Stylish, affordable, and reliable. My go-to fashion store for all occasions.",
    rating: 5,
  },
  {
    id: "3",
    name: "Aisha B.",
    quote:
      "Style Kings and Queens never disappoints. The quality is always top-notch!",
    rating: 5,
  },
  {
    id: "4",
    name: "Yusupha J.",
    quote:
      "Best fashion store I've ever shopped from. Delivery is always on time.",
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Do you offer delivery?",
    answer:
      "Yes, we offer fast and reliable delivery across the country. Delivery times vary depending on your location, typically between 2-5 business days.",
  },
  {
    id: "2",
    question: "How do I place an order?",
    answer:
      "You can place an order through our website by adding items to your cart and proceeding to checkout, or directly via WhatsApp for a more personalized experience.",
  },
  {
    id: "3",
    question: "What payment methods do you accept?",
    answer:
      "We accept Mobile Money, Bank Transfer, and Cash on Delivery (where available). All payment options are secure and convenient.",
  },
  {
    id: "4",
    question: "Can I return or exchange items?",
    answer:
      "Yes, we offer returns and exchanges within 7 days of delivery. Items must be unworn, unwashed, and in original packaging with tags attached.",
  },
  {
    id: "5",
    question: "How do I know my size?",
    answer:
      "We provide a detailed size guide on each product page. If you're unsure, contact us via WhatsApp and our team will help you find the perfect fit.",
  },
];

// WhatsApp configuration
export const whatsappConfig = {
  phoneNumber: "+2202317808", // Replace with actual phone number
  defaultMessage: "Hello! I'm interested in your products.",
  communityLink: "https://chat.whatsapp.com/your-community-link", // Replace with actual link
};

// Format price for display
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "GMD",
    minimumFractionDigits: 0,
  }).format(price);
};

// Generate WhatsApp order link
export const getWhatsAppOrderLink = (product: Product): string => {
  const message = encodeURIComponent(
    `Hi! I'd like to order:\n\n*${product.name}*\nPrice: ${formatPrice(product.price)}\n\nPlease let me know the next steps.`,
  );
  return `https://wa.me/${whatsappConfig.phoneNumber.replace("+", "")}?text=${message}`;
};

// Get WhatsApp chat link
export const getWhatsAppChatLink = (): string => {
  const message = encodeURIComponent(whatsappConfig.defaultMessage);
  return `https://wa.me/${whatsappConfig.phoneNumber.replace("+", "")}?text=${message}`;
};
