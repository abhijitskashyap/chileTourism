export type CultureItem = {
  id: string;
  type: 'cuisine' | 'tradition' | 'festival';
  name: string;
  description: string;
  imageUrl: string;
  season?: string;
};

export const cultureItems: CultureItem[] = [
  {
    id: "empanadas",
    type: "cuisine",
    name: "Empanadas de Pino",
    description: "Chile's national dish - savory pastries filled with seasoned ground beef, onions, olives, raisins, and hard-boiled eggs.",
    imageUrl: "https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg"
  },
  {
    id: "curanto",
    type: "cuisine",
    name: "Curanto",
    description: "A traditional feast from Chiloé Island, prepared in a pit lined with heated stones, containing seafood, meat, potatoes, and vegetables.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Curanto.jpg"
  },
  {
    id: "vendimia",
    type: "festival",
    name: "Vendimia Wine Festivals",
    description: "Celebrating Chile's wine harvest with dancing, grape stomping, and plenty of wine tasting in various regions throughout March and April.",
    imageUrl: "https://images.pexels.com/photos/2449533/pexels-photo-2449533.jpeg",
    season: "March-April"
  },
  {
    id: "cueca",
    type: "tradition",
    name: "Cueca Dance",
    description: "Chile's national dance representing the courtship between a rooster and a hen, performed with handkerchiefs and traditional attire.",
    imageUrl: "https://images.pexels.com/photos/5768105/pexels-photo-5768105.jpeg"
  },
  {
    id: "pastel-de-choclo",
    type: "cuisine",
    name: "Pastel de Choclo",
    description: "A hearty corn pie filled with ground beef, chicken, olives, raisins, and hard-boiled eggs, topped with a sweet corn crust.",
    imageUrl: "https://images.pexels.com/photos/6605929/pexels-photo-6605929.jpeg"
  },
  {
    id: "tapati",
    type: "festival",
    name: "Tapati Rapa Nui",
    description: "Easter Island's most important cultural festival featuring traditional competitions, music, dance, and ceremonies celebrating Rapa Nui heritage.",
    imageUrl: "https://www.turavion.travel/wp-content/uploads/2022/11/Tapati-Festival-Rapa-Nui.jpg",
    season: "February"
  },
  {
    id: "completo",
    type: "cuisine",
    name: "Completo",
    description: "Chile's elaborate hot dog, typically topped with avocado, tomato, mayonnaise, sauerkraut, and various sauces.",
    imageUrl: "https://images.pexels.com/photos/2118046/pexels-photo-2118046.jpeg"
  },
  {
    id: "minga",
    type: "tradition",
    name: "Minga de Tiradura",
    description: "A Chiloé tradition where communities work together to move entire wooden houses across land or water using oxen and wooden logs.",
    imageUrl: "https://images.pexels.com/photos/6647900/pexels-photo-6647900.jpeg"
  }
];