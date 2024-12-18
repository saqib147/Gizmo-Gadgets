// Mobiles.js
import img from "./img.webp";

export const Mobiles = [
  {
    id: 1,
    name: "Samsung Galaxy S23",
    category: "Mobiles",
    price: 999,
    brand: "Samsung",
    rating: 4.5,
    stock: 20,
    discount: 10,
    color: ["Black", "White", "Blue"],
    description:
      "High-end smartphone with 6.2-inch display and advanced camera features.",
    features: [
      "6.2-inch OLED display",
      "128GB storage",
      "8GB RAM",
      "4500mAh battery",
    ],
    imgUrl: img,
    releaseDate: "2023-02-01",
    tags: ["smartphone", "android", "samsung"],
    bestSeller: true,
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    category: "Mobiles",
    price: 1099,
    brand: "Apple",
    rating: 4.8,
    stock: 15,
    discount: 5,
    color: ["Black", "Silver", "Gold"],
    description:
      "Latest Apple iPhone with a powerful A15 chip and exceptional camera quality.",
    features: [
      "6.1-inch Super Retina XDR display",
      "128GB storage",
      "6GB RAM",
      "3200mAh battery",
    ],
    imgUrl: img,
    releaseDate: "2023-09-15",
    tags: ["smartphone", "ios", "apple"],
    bestSeller: false,
  },
  {
    id: 3,
    name: "Google Pixel 7",
    category: "Mobiles",
    price: 799,
    brand: "Google",
    rating: 4.6,
    stock: 30,
    discount: 8,
    color: ["White", "Black"],
    description:
      "Google's flagship with advanced AI capabilities and high-quality camera.",
    features: [
      "6.3-inch OLED display",
      "128GB storage",
      "8GB RAM",
      "4300mAh battery",
    ],
    imgUrl: img,
    releaseDate: "2023-03-10",
    tags: ["smartphone", "android", "google"],
    bestSeller: true,
  },
  {
    id: 4,
    name: "OnePlus 11",
    category: "Mobiles",
    price: 699,
    brand: "OnePlus",
    rating: 4.3,
    stock: 18,
    discount: 12,
    color: ["Green", "Black"],
    description:
      "Fast and smooth experience with Snapdragon 8 Gen 2 processor.",
    features: [
      "6.7-inch AMOLED display",
      "128GB storage",
      "12GB RAM",
      "5000mAh battery",
    ],
    imgUrl: img,
    releaseDate: "2023-06-01",
    tags: ["smartphone", "android", "oneplus"],
    bestSeller: false,
  },
  {
    id: 5,
    name: "Xiaomi Mi 12",
    category: "Mobiles",
    price: 599,
    brand: "Xiaomi",
    rating: 4.2,
    stock: 40,
    discount: 15,
    color: ["Blue", "Gray"],
    description: "High-performance phone with excellent value for money.",
    features: [
      "6.5-inch LCD display",
      "256GB storage",
      "8GB RAM",
      "5000mAh battery",
    ],
    imgUrl: "xiaomi-mi-12.jpg",
    releaseDate: "2023-04-22",
    tags: ["smartphone", "android", "xiaomi"],
    bestSeller: false,
  },
];

// Headphones.js
export const Headphones = [
  {
    id: 1,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 349,
    brand: "Sony",
    rating: 4.7,
    stock: 30,
    discount: 15,
    color: ["Black", "Silver"],
    description:
      "Premium noise-canceling headphones with immersive sound quality.",
    features: [
      "Noise Cancellation",
      "30 hours battery life",
      "Touch Controls",
      "Bluetooth 5.2",
    ],
    imgUrl: "sony-wh-1000xm5.jpg",
    releaseDate: "2023-04-10",
    tags: ["headphones", "noise-canceling", "bluetooth"],
    bestSeller: true,
  },
  {
    id: 2,
    name: "Bose QuietComfort 45",
    category: "Headphones",
    price: 329,
    brand: "Bose",
    rating: 4.6,
    stock: 25,
    discount: 10,
    color: ["Black", "White"],
    description:
      "Comfortable headphones with superb noise cancellation and sound quality.",
    features: [
      "Noise Cancellation",
      "25 hours battery life",
      "USB-C charging",
      "Bluetooth 5.1",
    ],
    imgUrl: "bose-quietcomfort-45.jpg",
    releaseDate: "2023-03-15",
    tags: ["headphones", "bose", "noise-canceling"],
    bestSeller: false,
  },
  {
    id: 3,
    name: "JBL Tune 750BT",
    category: "Headphones",
    price: 199,
    brand: "JBL",
    rating: 4.3,
    stock: 50,
    discount: 20,
    color: ["Black", "Blue"],
    description:
      "Affordable headphones with active noise-canceling and deep bass.",
    features: [
      "Noise Cancellation",
      "20 hours battery life",
      "Bluetooth 4.2",
      "Foldable",
    ],
    imgUrl: "jbl-tune-750bt.jpg",
    releaseDate: "2023-01-25",
    tags: ["headphones", "bluetooth", "jbl"],
    bestSeller: false,
  },
  {
    id: 4,
    name: "Sennheiser HD 450BT",
    category: "Headphones",
    price: 179,
    brand: "Sennheiser",
    rating: 4.4,
    stock: 45,
    discount: 18,
    color: ["Black", "White"],
    description:
      "Durable headphones with powerful bass and noise-canceling capabilities.",
    features: [
      "Noise Cancellation",
      "30 hours battery life",
      "USB-C charging",
      "Bluetooth 5.0",
    ],
    imgUrl: "sennheiser-hd-450bt.jpg",
    releaseDate: "2023-06-10",
    tags: ["headphones", "sennheiser", "noise-canceling"],
    bestSeller: false,
  },
];
// Airpods.js
export const Airpods = [
  {
    id: 1,
    name: "Apple AirPods Pro 2nd Gen",
    category: "Airpods",
    price: 249,
    brand: "Apple",
    rating: 4.8,
    stock: 40,
    discount: 5,
    color: ["White"],
    description:
      "Advanced noise-canceling AirPods with spatial audio and MagSafe charging.",
    features: [
      "Active Noise Cancellation",
      "24 hours battery life with case",
      "Spatial audio",
      "Bluetooth 5.3",
    ],
    imgUrl: "airpods-pro-2nd-gen.jpg",
    releaseDate: "2023-10-20",
    tags: ["airpods", "apple", "wireless-earbuds"],
    bestSeller: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy Buds 2 Pro",
    category: "Airpods",
    price: 229,
    brand: "Samsung",
    rating: 4.4,
    stock: 35,
    discount: 15,
    color: ["Black", "White", "Purple"],
    description:
      "High-quality wireless earbuds with noise cancellation and adaptive audio.",
    features: [
      "Noise Cancellation",
      "28 hours battery life",
      "Adaptive Sound",
      "Bluetooth 5.2",
    ],
    imgUrl: "galaxy-buds-2-pro.jpg",
    releaseDate: "2023-08-15",
    tags: ["earbuds", "samsung", "noise-canceling"],
    bestSeller: false,
  },
  {
    id: 3,
    name: "Sony WF-1000XM4",
    category: "Airpods",
    price: 279,
    brand: "Sony",
    rating: 4.6,
    stock: 20,
    discount: 10,
    color: ["Black", "Silver"],
    description:
      "Premium wireless earbuds with industry-leading noise cancellation.",
    features: [
      "Noise Cancellation",
      "36 hours battery life",
      "LDAC audio",
      "Bluetooth 5.2",
    ],
    imgUrl: "sony-wf-1000xm4.jpg",
    releaseDate: "2023-06-18",
    tags: ["earbuds", "sony", "high-resolution"],
    bestSeller: true,
  },
  {
    id: 4,
    name: "Jabra Elite 85t",
    category: "Airpods",
    price: 199,
    brand: "Jabra",
    rating: 4.3,
    stock: 25,
    discount: 20,
    color: ["Titanium Black", "Gold Beige"],
    description:
      "Compact and powerful earbuds with adjustable ANC and customizable sound.",
    features: [
      "Adjustable Noise Cancellation",
      "25 hours battery life",
      "Multi-point connection",
      "Bluetooth 5.0",
    ],
    imgUrl: "jabra-elite-85t.jpg",
    releaseDate: "2023-05-10",
    tags: ["earbuds", "jabra", "adjustable-anc"],
    bestSeller: false,
  },
  {
    id: 5,
    name: "Beats Fit Pro",
    category: "Airpods",
    price: 199,
    brand: "Beats",
    rating: 4.4,
    stock: 50,
    discount: 10,
    color: ["Stone Purple", "Beige", "Black"],
    description:
      "Secure-fit earbuds with Active Noise Cancellation and rich sound quality.",
    features: [
      "Active Noise Cancellation",
      "24 hours battery life",
      "Customizable fit",
      "Bluetooth 5.2",
    ],
    imgUrl: "beats-fit-pro.jpg",
    releaseDate: "2023-07-25",
    tags: ["earbuds", "beats", "active-fit"],
    bestSeller: true,
  },
];

// Keyboards.js
export const Keyboards = [
  {
    id: 1,
    name: "Logitech MX Mechanical",
    category: "Keyboards",
    price: 169,
    brand: "Logitech",
    rating: 4.5,
    stock: 50,
    discount: 10,
    color: ["Black", "Gray"],
    description:
      "Ergonomic mechanical keyboard with quiet keys and wireless connectivity.",
    features: [
      "Backlit keys",
      "Wireless",
      "Long battery life",
      "Bluetooth and USB-C",
    ],
    imgUrl: "logitech-mx-mechanical.jpg",
    releaseDate: "2023-07-10",
    tags: ["keyboard", "logitech", "mechanical"],
    bestSeller: true,
  },
  {
    id: 2,
    name: "Razer BlackWidow V3",
    category: "Keyboards",
    price: 139,
    brand: "Razer",
    rating: 4.7,
    stock: 40,
    discount: 20,
    color: ["Black"],
    description:
      "High-performance mechanical gaming keyboard with customizable RGB lighting.",
    features: [
      "RGB Lighting",
      "Mechanical Switches",
      "Detachable Wrist Rest",
      "USB-C",
    ],
    imgUrl: "razer-blackwidow-v3.jpg",
    releaseDate: "2023-02-25",
    tags: ["keyboard", "razer", "gaming"],
    bestSeller: false,
  },
  {
    id: 3,
    name: "Corsair K95 RGB Platinum XT",
    category: "Keyboards",
    price: 199,
    brand: "Corsair",
    rating: 4.6,
    stock: 30,
    discount: 15,
    color: ["Black"],
    description:
      "Premium mechanical keyboard with dedicated macro keys and customizable RGB.",
    features: [
      "RGB Lighting",
      "6 Macro Keys",
      "USB Pass-Through",
      "Mechanical Switches",
    ],
    imgUrl: "corsair-k95-platinum.jpg",
    releaseDate: "2023-03-10",
    tags: ["keyboard", "corsair", "macro-keys"],
    bestSeller: true,
  },
  {
    id: 4,
    name: "Keychron K6 Wireless",
    category: "Keyboards",
    price: 89,
    brand: "Keychron",
    rating: 4.4,
    stock: 45,
    discount: 10,
    color: ["Gray", "Black"],
    description:
      "Compact wireless mechanical keyboard ideal for productivity and gaming.",
    features: [
      "Wireless/Bluetooth",
      "Hot-Swappable",
      "Backlit",
      "Mechanical Switches",
    ],
    imgUrl: "keychron-k6.jpg",
    releaseDate: "2023-04-15",
    tags: ["keyboard", "keychron", "compact"],
    bestSeller: false,
  },
  {
    id: 5,
    name: "SteelSeries Apex Pro",
    category: "Keyboards",
    price: 179,
    brand: "SteelSeries",
    rating: 4.8,
    stock: 35,
    discount: 12,
    color: ["Black"],
    description:
      "Advanced gaming keyboard with adjustable actuation and OLED display.",
    features: [
      "Adjustable Actuation",
      "OLED Display",
      "RGB Lighting",
      "USB Pass-Through",
    ],
    imgUrl: "steelseries-apex-pro.jpg",
    releaseDate: "2023-05-01",
    tags: ["keyboard", "steelseries", "gaming"],
    bestSeller: true,
  },
];
