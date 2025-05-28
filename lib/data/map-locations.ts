export type MapLocation = {
  id: string;
  name: string;
  coords: {
    x: number; // percentage from left
    y: number; // percentage from top
  };
  description: string;
  imageUrl: string;
  infoPoints: string[];
};

export const mapLocations: MapLocation[] = [
  {
    id: "santiago",
    name: "Santiago",
    coords: { x: 42, y: 39 },
    description: "Chile's vibrant capital city, nestled in a valley surrounded by the snow-capped Andes mountains.",
    imageUrl: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-f3c8-61f7-b8a6-34196df807b3/raw?se=2025-05-18T19%3A41%3A02Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=04233560-0ad7-493e-8bf0-1347c317d021&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-18T00%3A30%3A57Z&ske=2025-05-19T00%3A30%3A57Z&sks=b&skv=2024-08-04&sig=e2tgaT0lh5jouXR8o0hKyagt5dMm9oaVObc4BSs2VRA%3D",
    infoPoints: [
      "Visit Plaza de Armas, the historic main square",
      "Explore trendy neighborhoods like Bellavista and Lastarria",
      "Take in panoramic views from Sky Costanera, Latin America's tallest building",
      "Experience Chilean wine culture at nearby vineyards"
    ]
  },
  {
    id: "valparaiso",
    name: "Valparaíso",
    coords: { x: 40, y: 36 },
    description: "A colorful, bohemian port city known for its hills, funiculars, and vibrant street art.",
    imageUrl: "https://images.pexels.com/photos/16847300/pexels-photo-16847300.jpeg",
    infoPoints: [
      "Ride the historic ascensores (funiculars) up the steep hills",
      "Visit La Sebastiana, one of Pablo Neruda's homes",
      "Wander through neighborhoods filled with colorful murals",
      "Enjoy fresh seafood at the bustling Mercado Cardonal"
    ]
  },
  {
    id: "atacama",
    name: "Atacama Desert",
    coords: { x: 47, y: 15 },
    description: "The driest non-polar desert on Earth with otherworldly landscapes and exceptional stargazing.",
    imageUrl: "https://images.pexels.com/photos/3369526/pexels-photo-3369526.jpeg",
    infoPoints: [
      "Explore Valle de la Luna (Moon Valley) at sunset",
      "Witness El Tatio geysers at dawn",
      "Stargaze in some of the clearest skies in the world",
      "Visit the salt flats and high-altitude lagoons"
    ]
  },
  {
    id: "patagonia",
    name: "Torres del Paine",
    coords: { x: 43, y: 85 },
    description: "A stunning national park in Patagonia featuring iconic granite peaks, glaciers, and turquoise lakes.",
    imageUrl: "https://torresdelpaine.com/wp-content/uploads/sites/6/2023/08/tdp-atractivo-panoramicas-06-600x338.jpg",
    infoPoints: [
      "Hike the famous W Trek or complete Circuit Trail",
      "Photograph the three granite towers at sunrise",
      "Take a boat to Grey Glacier",
      "Spot wildlife including guanacos, pumas, and condors"
    ]
  },
  {
    id: "easter-island",
    name: "Easter Island",
    coords: { x: 10, y: 30 },
    description: "A remote volcanic island known for its archaeological sites and mysterious moai statues.",
    imageUrl: "https://images.pexels.com/photos/8961395/pexels-photo-8961395.jpeg",
    infoPoints: [
      "Marvel at the iconic moai statues at Ahu Tongariki",
      "Learn about Rapa Nui culture at Orongo ceremonial village",
      "Relax on Anakena Beach, one of the island's few sandy beaches",
      "Explore lava tubes and volcanic craters"
    ]
  },
  {
    id: "chiloe",
    name: "Chiloé Island",
    coords: { x: 42, y: 65 },
    description: "Known for its unique folklore, UNESCO-listed wooden churches, and distinctive stilt houses.",
    imageUrl: "https://images.pexels.com/photos/5358077/pexels-photo-5358077.jpeg",
    infoPoints: [
      "Visit the colorful palafitos (stilt houses) in Castro",
      "Explore the UNESCO World Heritage wooden churches",
      "Sample curanto, a traditional pit-cooked feast",
      "Discover the island's rich mythology and folklore"
    ]
  }
];