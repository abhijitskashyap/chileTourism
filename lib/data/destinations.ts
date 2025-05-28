export type Destination = {
  id: string;
  name: string;
  region: string;
  description: string;
  imageUrl: string;
  highlights: string[];
};

export const destinations: Destination[] = [
  {
    id: "torres-del-paine",
    name: "Torres del Paine",
    region: "Patagonia",
    description: "Dramatic granite peaks, turquoise lakes, and stunning glaciers make this national park one of Chile's crown jewels.",
    imageUrl: "https://torresdelpaine.com/wp-content/uploads/sites/6/2023/08/tdp-atractivo-panoramicas-06-600x338.jpg",
    highlights: [
      "Hike the famous W Trek",
      "See the three iconic towers",
      "Spot Andean condors",
      "Visit Grey Glacier"
    ]
  },
  {
    id: "atacama-desert",
    name: "Atacama Desert",
    region: "Northern Chile",
    description: "The driest non-polar desert in the world, offering otherworldly landscapes and some of the clearest skies for stargazing.",
    imageUrl: "https://images.pexels.com/photos/3369526/pexels-photo-3369526.jpeg",
    highlights: [
      "Valle de la Luna (Moon Valley)",
      "El Tatio Geysers",
      "Stargazing at ALMA Observatory",
      "Flamingo-filled salt flats"
    ]
  },
  {
    id: "valparaiso",
    name: "Valparaíso",
    region: "Central Chile",
    description: "A colorful port city known for its bohemian culture, steep hills, funiculars, and street art.",
    imageUrl: "https://images.pexels.com/photos/16847300/pexels-photo-16847300.jpeg",
    highlights: [
      "Ride the historic funiculars",
      "Explore vibrant street art",
      "Visit Pablo Neruda's house",
      "Enjoy fresh seafood at the port"
    ]
  },
  {
    id: "easter-island",
    name: "Easter Island",
    region: "Polynesia",
    description: "A remote volcanic island famous for its mysterious moai statues and Polynesian culture.",
    imageUrl: "https://images.pexels.com/photos/8961395/pexels-photo-8961395.jpeg",
    highlights: [
      "Ancient moai statues",
      "Anakena Beach",
      "Orongo ceremonial village",
      "Rano Kau volcano crater"
    ]
  },
  {
    id: "chiloe-island",
    name: "Chiloé Island",
    region: "Southern Chile",
    description: "Known for its distinctive wooden churches, unique mythology, and palafitos (houses on stilts).",
    imageUrl: "https://images.pexels.com/photos/5358077/pexels-photo-5358077.jpeg",
    highlights: [
      "UNESCO wooden churches",
      "Colorful palafitos in Castro",
      "Mythological stories and culture",
      "Penguin colonies at Puñihuil"
    ]
  },
  {
    id: "santiago",
    name: "Santiago",
    region: "Central Chile",
    description: "Chile's vibrant capital city set against the stunning backdrop of the Andes mountains.",
    imageUrl: "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg",
    highlights: [
      "Sky Costanera observation deck",
      "Historic Plaza de Armas",
      "Cerro San Cristóbal views",
      "Bellavista neighborhood"
    ]
  }
];