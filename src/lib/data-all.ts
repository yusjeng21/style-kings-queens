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
// COLLECTIONS
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

// PRODUCTS
export const products: Product[] = [
  // ACCESSORIES
  {
    id: "acc-001",
    name: "Minimalist Backpack",
    price: 950,
    description:
      "This versatile black backpack is crafted from durable, water-resistant material and features multiple compartments for daily essentials, including a dedicated laptop pocket.",
    category: "accessories",
    image: "/accessories/backpack.jpeg",
    sizes: ["One Size"],
    colors: ["Black"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "acc-002",
    name: "Top-Handle Handbag Collection",
    price: 1200,
    description:
      "This elegant collection of structured handbags offers a chic and versatile accessory that securely carries your essentials while elevating any outfit",
    category: "accessories",
    image: "/accessories/women-bag-4.jpeg",
    sizes: ["One Size"],
    colors: ["Black", "White", "Cream"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "acc-003",
    name: "LV Alma BB handbag",
    price: 1700,
    description:
      "This compact and timeless handbag, an Art Deco original from 1934, features the iconic brown checkerboard canvas, a double zip closure with a padlock, and a detachable strap for versatile wear.",
    category: "accessories",
    image: "/accessories/women-bag-5.jpeg",
    sizes: ["One Size"],
    colors: ["Brown"],
    // isNew: false,
    isFeatured: true,
  },
  {
    id: "acc-004",
    name: "Ruched Dumpling Handbags",
    price: 900,
    description:
      "This compact and timeless handbag, an Art Deco original from 1934, features the iconic brown checkerboard canvas, a double zip closure with a padlock, and a detachable strap for versatile wear.",
    category: "accessories",
    image: "/accessories/women-bag-2.jpeg",
    sizes: ["One Size"],
    colors: ["White", "Black"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "acc-005",
    name: "The Rose Gold Stack",
    price: 350,
    description:
      "This exquisite set of stackable rose gold bracelets offers versatile elegance and sparkling charm for any occasion.",
    category: "accessories",
    image: "/accessories/women-bracelets-1.jpeg",
    sizes: ["Adjustable"],
    colors: ["Rose Gold"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "acc-006",
    name: "Women's Gold-Diamond Watch",
    price: 1250,
    description:
      "This elegant BS Bee Sister women's watch features a luxurious two-tone (gold and silver) design with a rhinestone-encrusted bezel and a reliable quartz movement, perfect for adding a touch of sparkle to any outfit.",
    category: "accessories",
    image: "/accessories/women-watch-2.jpeg",
    sizes: ["Adjustable"],
    colors: ["Gold"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "acc-007",
    name: "CHICUTIE Gold Knuckle Rings",
    price: 400,
    description:
      "This set includes multiple trendy rings with a combination of various styles, such as twist, hollow, and crystal designs, that can be worn as stackable, thumb, or knuckle rings.",
    category: "accessories",
    image: "/accessories/women-finger-ring-1.jpeg",
    sizes: ["One Size"],
    colors: ["Gold"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "acc-008",
    name: "Gold Knuckle Rings Set",
    price: 200,
    description:
      "This set features a variety of trendy, stackable gold-toned rings in different styles, perfect for mixing, matching, and layering on fingers and knuckles for a complete bohemian look.",
    category: "accessories",
    image: "/accessories/women-finger-ring-2.jpeg",
    sizes: ["One Size"],
    colors: ["Gold"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "acc-009",
    name: "Multivariant Hoop Earring",
    price: 350,
    description:
      "This range provides versatile and trendy style options for various occasions, featuring a mix of gold-toned metal, pearl, and crystal elements in assorted designs including hoops, studs, and dangle earrings.",
    category: "accessories",
    image: "/accessories/women-earring-1.jpeg",
    sizes: ["One Size"],
    colors: ["White", "Rose Gold"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "acc-010",
    name: "Natural Stone Beaded Bracelets",
    price: 200,
    description:
      "This versatile collection features a variety of stylish beaded bracelets for men, crafted from high-quality natural stones and materials suitable for any style or stacking preference.",
    category: "accessories",
    image: "/accessories/men-bracelets-2.jpeg",
    sizes: ["Adjustable"],
    colors: ["Black", "Brown", "Green"],
    // isNew: false,
    isFeatured: true,
  },
  {
    id: "acc-011",
    name: "Assorted Gold-Tone Earrings",
    price: 300,
    description:
      "A diverse collection of durable, stylish stainless steel earrings featuring various designs perfect for everyday wear.",
    category: "accessories",
    image: "/accessories/women-earring-3.jpeg",
    sizes: ["One Size"],
    colors: ["Gold"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "acc-012",
    name: "Stone Beaded Bracelets",
    price: 250,
    description:
      "These adjustable, 8mm natural stone beaded bracelets, featuring tiger eye, lava rock, and matte onyx, are designed for both men and women and can be used for essential oil diffusion and stress relief.",
    category: "accessories",
    image: "/accessories/men-bracelets-1.jpeg",
    sizes: ["Adjustable"],
    colors: ["Tiger Eye", "Lava Rock", "Matte Onyx"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "acc-013",
    name: "North Face Lumbar Sling Bag",
    price: 600,
    description:
      "A versatile, water-resistant crossbody bag perfect for carrying essentials on the go.",
    category: "accessories",
    image: "/accessories/men-bag-1.jpeg",
    sizes: ["Adjustable"],
    colors: ["Black", "Cream"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "acc-014",
    name: "Rolex Submariner watch",
    price: 2000,
    description:
      "The Rolex Submariner is a timeless and iconic luxury diver's watch, known for its exceptional durability and classic design that has defined professional timekeeping since 1953.",
    category: "accessories",
    image: "/accessories/men-watch-1.jpeg",
    sizes: ["One Size"],
    colors: ["Gold"],
    isNew: true,
    // isFeatured: true,
  },
  {
    id: "acc-015",
    name: "LV Trio Messenger Bag",
    price: 1200,
    description:
      "This functional hybrid bag, crafted from Monogram Eclipse canvas, combines a main compartment with a removable front zipped pocket and a detachable coin purse on the strap.",
    category: "accessories",
    image: "/accessories/men-bag-2.jpeg",
    sizes: ["Adjustable"],
    colors: ["Black"],
    // isNew: false,
    // isFeatured: true,
  },

  // NEW ARRIVALS
  {
    id: "new-001",
    name: "Louis Vuitton Fastline Bag",
    price: 1400,
    description:
      "Combining style and functionality, this black cowhide leather messenger bag is a practical accessory for daily essentials.",
    category: "new-arrivals",
    image: "/new-arrivals/men-bag-3.jpeg",
    sizes: ["Adjustable"],
    colors: ["Black"],
    // isNew: false,
    isFeatured: true,
  },
  {
    id: "new-002",
    name: "Stylish Leather Shoulder Bag",
    price: 900,
    description:
      "This versatile, square-shaped faux leather bag features a secure flap closure with a stylish metallic buckle accent, perfect for carrying daily essentials from casual outings to office environments.",
    category: "new-arrivals",
    image: "/new-arrivals/women-bag-3.jpeg",
    sizes: ["One Size"],
    colors: ["Black", "Brown", "White", "Beige"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "new-003",
    name: "Rose Gold Women's",
    price: 1600,
    description:
      "This elegant set features a rose pink gold quartz watch with a mesh strap and a matching crystal-studded bracelet with star charms, perfect for a stylish accessory choice.",
    category: "new-arrivals",
    image: "/new-arrivals/women-watch-1.jpeg",
    sizes: ["Adjustable"],
    colors: ["Rose Gold"],
    // isNew: false,
    isFeatured: true,
  },
  {
    id: "new-004",
    name: "Boho Butterfly Charm Bracelets",
    price: 150,
    description:
      "This set features elegant, stackable, and multi-colored beaded bracelets adorned with charming gold-tone butterfly pendants, perfect for adding a touch of whimsy and a bohemian flair to any outfit.",
    category: "new-arrivals",
    image: "/new-arrivals/women-bracelets-2.jpeg",
    sizes: ["Adjustable"],
    colors: ["Blue", "Pink", "Black", "White"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "new-005",
    name: "Assorted Fashion Earring Set",
    price: 400,
    description:
      "This versatile collection features 12 unique pairs of gold-toned earrings, including elegant hoops, charming butterfly and heart drops, and faux pearl accents, perfect for mixing and matching styles.",
    category: "new-arrivals",
    image: "/new-arrivals/women-earring-2.jpeg",
    sizes: ["One Size"],
    colors: ["Gold", "White", "Pink"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "new-006",
    name: "Titan Metropolitan Charm Watch",
    price: 1700,
    description:
      "This all-black men's watch features a multifunctional black dial, a durable metal strap, and metallic accents, making it a sophisticated timepiece for the modern man.",
    category: "new-arrivals",
    image: "/new-arrivals/men-watch-2.jpeg",
    sizes: ["Adjustable"],
    colors: ["Black"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "new-007",
    name: "Branded Casual Shorts",
    price: 500,
    description:
      "This collection features several pairs of comfortable, stylish men's shorts with prominent brand logos and patterns, suitable for casual wear or athletic activities.",
    category: "new-arrivals",
    image: "/new-arrivals/men-shorts-2.jpeg",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Grey", "Navy", "White"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "new-008",
    name: "Nike Benassi JDI Slides.",
    price: 350,
    description:
      "This lightweight sports slide features a soft midsole foam and jersey lining on the one-piece synthetic leather strap for all-day comfort and athletic style.",
    category: "new-arrivals",
    image: "/new-arrivals/nike-b&w-slides.jpeg",
    sizes: ["42", "43", "44", "45"],
    colors: ["Black", "Black & White"],
    // isNew: false,
    isFeatured: true,
  },
  {
    id: "new-009",
    name: "Air Jordan 1 Retro",
    price: 2000,
    description:
      "This shoe features a sail leather upper with black leather overlays, radiating seasonal tones and paying homage to the iconic 'Black Toe' Air Jordan 1.",
    category: "new-arrivals",
    image: "/new-arrivals/men-sneakers-2.jpeg",
    sizes: ["42", "43", "44", "45"],
    colors: ["Black", "White", "Dark Mocha"],
    // isNew: false,
    isFeatured: true,
  },
  {
    id: "new-010",
    name: "Vans Old Skool Sneakers",
    price: 1500,
    description:
      "These iconic low-top sneakers, known for the signature Vans Sidestripe, effortlessly blend style with comfort and have become a staple in both skate culture and everyday fashion.",
    category: "new-arrivals",
    image: "/new-arrivals/men-vans-1.jpeg",
    sizes: ["42", "43", "44", "45"],
    colors: ["Black", "Black & White"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "new-011",
    name: "Vintage Spliced Texture Oxford Shoes.",
    price: 1800,
    description:
      "These elegant lace-up shoes feature a polished brown finish with a distinctive spliced, textured upper, perfect for formal business events or weddings.",
    category: "new-arrivals",
    image: "/new-arrivals/men-office-footwear.jpeg",
    sizes: ["43", "44", "45"],
    colors: ["Brown", "Dark Brown", "Black"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "new-012",
    name: "Massimo Dutti High-Heel Sandals.",
    price: 2100,
    description:
      "These classic heels feature a sophisticated red suede material with gold-toned trim and ankle straps, ensuring a stylish accompaniment for any formal or casual outfit.",
    category: "new-arrivals",
    image: "/new-arrivals/red-heels.jpeg",
    sizes: ["37", "38", "39", "40"],
    colors: ["Red"],
    //colors: [""],
    // isNew: false,
    // isFeatured: true,
  },

  // MEN'S WEAR
  {
    id: "men-001",
    name: "Oversized T-shirt & Cargo Shorts",
    price: 800,
    description:
      "This stylish, relaxed-fit cotton set offers a modern, laid-back look perfect for casual wear.",
    category: "men",
    image: "/men/men-full-outfit-1.jpeg",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "White", "Grey"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "men-002",
    name: "Marble Print Streetwear Trousers",
    price: 600,
    description:
      "These comfortable, loose-fit pants feature a trendy marble print effect, perfect for a modern streetwear look.",
    category: "men",
    image: "/men/men-pants.jpeg",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Navy", "Grey"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "men-003",
    name: "R-Patch Fleece Lined Crewneck Pullover",
    price: 900,
    description:
      "This stylish men's winter sweater features a round neckline, fleece lining for warmth, and a unique 'R' letter patch detail.",
    category: "men",
    image: "/men/men-shirt-1.jpeg",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "White", "Grey", "Beige"],
    // isNew: false,
    isFeatured: true,
  },
  {
    id: "men-004",
    name: "Fashionable Shorts.",
    price: 500,
    description:
      "These are a collection of comfortable, drawstring-waist shorts in various colors and styles, suitable for leisurewear or athletic activities.",
    category: "men",
    image: "/men/men-shorts-1.jpeg",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Red", "Grey", "Navy", "Green"],
    // isNew: false,
    isFeatured: true,
  },
  {
    id: "men-005",
    name: "Distressed Washed Two-Piece Set",
    price: 750,
    description:
      "This casual outfit set, available in various earthy tones including olive green, brown, and charcoal, features a short-sleeve top and matching pants with a stylish distressed finish and exposed seam detailing.",
    category: "men",
    image: "/men/men-full-outfit-2.jpeg",
    sizes: ["M", "L", "XL"],
    colors: ["Olive Green", "Brown", "Charcoal"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "men-006",
    name: "DRYKORN RAPHAEL Basic T-shirt",
    price: 400,
    description:
      "This classic, regular-fit crew-neck t-shirt is crafted from soft, breathable cotton fabric, perfect for everyday comfort and versatile styling.",
    category: "men",
    image: "/men/men-shirt-3.jpeg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Grey", "Blue"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "men-007",
    name: "Long Sleeve Zip Polo Shirt",
    price: 650,
    description:
      "A classic long-sleeve polo shirt featuring a stylish zip placket and subtle embroidered logo, perfect for smart casual wear.",
    category: "men",
    image: "/men/men-shirt-2.jpeg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Grey", "Navy"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "men-008",
    name: "Baggy Denim Culottes",
    price: 400,
    description:
      "These unique black denim culottes feature a wide, cropped fit and eye-catching abstract red and blue designs with clock face graphics, perfect for a bold streetwear look.",
    category: "men",
    image: "/men/men-short-jean.jpeg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Navy"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "men-009",
    name: "Air Jordan 4 Retro 'Infrared' Sneaker",
    price: 1600,
    description:
      "This iconic sneaker features a dark grey nubuck upper with striking infrared accents, offering a classic style with legendary design elements.",
    category: "men",
    image: "/men/men-sneakers-1.jpeg",
    sizes: ["42", "43", "44", "45"],
    colors: ["Black", "White", "Grey", "Red"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "men-010",
    name: "Echor Men's Casual Shoes",
    price: 1200,
    description:
      "These stylish Echor men's casual shoes feature a modern brown and white design with unique graphic details, perfect for comfortable everyday wear.",
    category: "men",
    image: "/men/men-sneakers-3.jpeg",
    sizes: ["42", "43", "44", "45"],
    colors: ["Brown", "White", "Beige"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "men-011",
    name: "Nike Benassi JDI Slides.",
    price: 350,
    description:
      "This lightweight sports slide features a soft midsole foam and jersey lining on the one-piece synthetic leather strap for all-day comfort and athletic style.",
    category: "men",
    image: "/men/nike-all-black-slides.jpeg",
    sizes: ["42", "43", "44", "45"],
    colors: ["Black", "Black & White"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "men-012",
    name: "Adidas Adilette Aqua Slides.",
    price: 300,
    description:
      "These lightweight, quick-drying slip-on sandals feature enhanced Cloudfoam cushioning for post-swim comfort or casual everyday wear.",
    category: "men",
    image: "/men/adidas-slides.jpeg",
    sizes: ["42", "43", "44", "45"],
    colors: ["Black", "White", "Black & White"],
    // isNew: false,
    // isFeatured: true,
  },

  // WOMEN'S WEAR
  {
    id: "women-001",
    name: "Faux Leather Cargo Pants",
    price: 500,
    description:
      "High-waisted, wide-leg faux leather pants with multiple cargo pockets and a shiny finish. They feature a button and zipper closure and offer a modern, stylish look.",
    category: "women",
    image: "/women/womens-leather-pants.jpeg",
    sizes: ["S", "M", "L"],
    colors: ["Burgundy", "Black", "White", "Grey"],
    // isNew: false,
    isFeatured: true,
  },
  {
    id: "women-002",
    name: "Chic Embellished Deep V-Neck Dress",
    price: 1000,
    description:
      "Make a lasting impression at any special event with this stunning black bandage dress, which features a sexy deep V-neckline, a body-contouring fit, and dazzling diamond embellishments on the straps and bust to exude confidence and glamour.",
    category: "women",
    image: "/women/dress-6.jpeg",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Burgundy", "Navy Blue"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "women-003",
    name: "High-Waisted Drawstring Wide Leg Pants",
    price: 500,
    description:
      "These Y2K-style, high-waisted, wide-leg sweatpants feature a bold colorblock design with black fabric, white side stripes, and striking leopard print panels, complete with a drawstring waist and pockets.",
    category: "women",
    image: "/women/women-cargo-pants-1.jpeg",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Grey"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "women-004",
    name: "Textured Animal Print Mini Dress",
    price: 1100,
    description:
      "This avant-garde 2-in-1 mini dress features a sheer, designer-inspired logo mesh top and a high-volume fuzzy faux fur leopard print skirt, perfect for a unique and daring look.",
    category: "women",
    image: "/women/short-dress.jpeg",
    sizes: ["S", "M", "L"],
    colors: ["Leopard Print", "Black"],
    // isNew: false,
    isFeatured: true,
  },
  {
    id: "women-005",
    name: "Strapless Corset Top",
    price: 900,
    description:
      "This vibrant, overbust corset top features a unique orange and white abstract pattern with a structured fit, perfect for making a bold fashion statement.",
    category: "women",
    image: "/women/women-top.jpeg",
    sizes: ["S", "M", "L"],
    colors: ["Orange", "White", "Black"],
    // isNew: false,
    isFeatured: true,
  },
  {
    id: "women-006",
    name: "Feather Trim Floral Two-Piece Maxi Set",
    price: 1200,
    description:
      "This elegant two-piece outfit features a crop top with a plush feather trim and a form-fitting maxi skirt adorned with delicate 3D floral appliques, perfect for a sophisticated evening event.",
    category: "women",
    image: "/women/dress-7.jpeg",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Pink", "Black"],
    // isNew: false,
    isFeatured: true,
  },
  {
    id: "women-007",
    name: "Wanni Fuga Dress",
    price: 1350,
    description:
      "This elegant midi dress features a fitted bodice with a square neckline and puff sleeves, complemented by a flared skirt with a high slit, perfect for formal occasions or stylish outings.",
    category: "women",
    image: "/women/dress-5.jpeg",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "White"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "women-008",
    name: "Luxury Slit Hem Two Piece",
    price: 800,
    description:
      "This stylish ensemble features an oversized, half-zip denim top paired with matching wide-leg trousers, perfect for a chic casual look.",
    category: "women",
    image: "/women/women-full-jean-outfit-2.jpeg",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Grey"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "women-009",
    name: "Feather Cuff Ruched Bodycon Midi Dress",
    price: 1000,
    description:
      "This elegant, form-fitting midi dress features stylish feather cuffs and flattering all-over ruching, perfect for a sophisticated evening look.",
    category: "women",
    image: "/women/dress-1.jpeg",
    sizes: ["S", "M", "L"],
    colors: ["Green", "White", "Pink"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "women-010",
    name: "Asymmetrical Neck Tie Strap Crop Top",
    price: 700,
    description:
      "This stylish, solid-color crop top features an asymmetrical neckline and tie-strap details, perfect for a chic and modern look. It has a stretchy, slim fit for comfort and style.",
    category: "women",
    image: "/women/women-jean-and-shirt.jpeg",
    sizes: ["S", "M", "L"],
    colors: ["All Colors"],
    // isNew: false,
    // isFeatured: true,
  },
  {
    id: "women-011",
    name: "Black Textured Shirt and Wide-Leg Pants Co-ord Set",
    price: 750,
    description:
      "This two-piece set features a stylish black oversized textured button-down shirt and matching wide-leg pants for a comfortable and chic look.",
    category: "women",
    image: "/women/womens-full-outfit-black-1.jpeg",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White"],
    // isNew: false,
    // isFeatured: true,
  },
];

// TESTIMONIALS/REVIEWS
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
  {
    id: "5",
    name: "Binta S.",
    quote:
      "I love the variety of styles available. There's something for everyone at Style Kings and Queens.",
    rating: 5,
  },
];

// FAQS
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
  phoneNumber: "+2202317808",
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
