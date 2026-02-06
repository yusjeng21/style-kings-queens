import mensCollection from "@/assets/mens-collection.jpg";
import womensCollection from "@/assets/womens-collection.jpg";
import accessoriesCollection from "@/assets/accessories-collection.jpg";
import newArrivals from "@/assets/new-arrivals.jpg";

import { sanityClient } from "@/sanity/sanityClient";

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

// Sanity client import
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

export const getProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"]{
    "id": _id,
    name,
    price,
    description,
    category,
    "image": image.asset->url,
    sizes,
    colors,
    isNew,
    isFeatured
  }`;

  return await sanityClient.fetch(query);
};

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
    name: "Ebrima M.",
    quote:
      "Best fashion store I've ever shopped from. Delivery is always on time.",
    rating: 5,
  },

  // Extras

  {
    id: "5",
    name: "Fatou S.",
    quote:
      "The fit is always perfect and fabrics feel premium. I get compliments every time I wear pieces from here!",
    rating: 5,
  },
  {
    id: "6",
    name: "Binta M.",
    quote:
      "Finally found a store that understands modern fashion without breaking the bank. My wardrobe has been transformed!",
    rating: 5,
  },
  {
    id: "7",
    name: "Abdoulie G.",
    quote:
      "From casual wear to formal attire, Style Kings and Queens has everything. Customer service is exceptional too!",
    rating: 5,
  },
  {
    id: "8",
    name: "Adama K.",
    quote:
      "Their new arrivals section is always fresh and trendy. I never have to look elsewhere for the latest styles.",
    rating: 5,
  },
  {
    id: "9",
    name: "Jibel J.",
    quote:
      "What sets them apart is the attention to detail. Even the packaging feels luxurious. 10/10 experience!",
    rating: 5,
  },
  {
    id: "10",
    name: "Mariama S.",
    quote:
      "As someone who shops online frequently, I appreciate their accurate sizing and true-to-color products. Highly recommend!",
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
  phoneNumber: "+2203833126",
  defaultMessage: "Hello! I'm interested in your products.",
  communityLink: "https://chat.whatsapp.com/CiRHBtAnEzqLT6RopWGDpF",
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
export const getWhatsAppOrderLink = (
  product: Product,
  selectedSize?: string,
  selectedColor?: string,
): string => {
  // Create a clean link to the product on your site
  // Replace 'your-site.com' with your actual domain once deployed
  const productUrl = `${window.location.origin}/product/${product.id}`;

  const sizeText = selectedSize ? `\nSize: *${selectedSize}*` : "";
  const colorText = selectedColor ? `\nColor: *${selectedColor}*` : "";

  const message = encodeURIComponent(
    `Hi! I'd like to order from Style Kings and Queens:\n\n` +
      `*Product:* ${product.name}\n` +
      `*Price:* ${formatPrice(product.price)}` +
      `${sizeText}` +
      `${colorText}\n\n` +
      `Let me know the next steps to complete my order. Thanks!\n\n` +
      `*Product Link:* ${productUrl}`,
  );

  return `https://wa.me/${whatsappConfig.phoneNumber.replace("+", "")}?text=${message}`;
};

// Get WhatsApp chat link
export const getWhatsAppChatLink = (): string => {
  const message = encodeURIComponent(whatsappConfig.defaultMessage);
  return `https://wa.me/${whatsappConfig.phoneNumber.replace("+", "")}?text=${message}`;
};
