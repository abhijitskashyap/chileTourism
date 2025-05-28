export type TravelTip = {
  id: string;
  category: 'budget' | 'safety' | 'seasons' | 'language' | 'transportation';
  title: string;
  description: string;
};

export const travelTips: TravelTip[] = [
  // Budget Tips
  {
    id: "budget-1",
    category: "budget",
    title: "Travel in Shoulder Season",
    description: "Visit between March-May or September-November for lower prices on accommodations and fewer crowds at popular attractions."
  },
  {
    id: "budget-2",
    category: "budget",
    title: "Use Public Transportation",
    description: "Santiago's metro system is clean, efficient, and affordable. Long-distance buses are also comfortable and economical for traveling between cities."
  },
  {
    id: "budget-3",
    category: "budget",
    title: "Eat at Local Markets",
    description: "Visit markets like Mercado Central in Santiago for fresh, delicious food at much lower prices than tourist restaurants."
  },
  {
    id: "budget-4",
    category: "budget",
    title: "Free Museum Days",
    description: "Many museums offer free admission on Sundays, including the Museum of Memory and Human Rights and the National Museum of Fine Arts."
  },

  // Safety Tips
  {
    id: "safety-1",
    category: "safety",
    title: "Stay Alert in Cities",
    description: "While Chile is one of Latin America's safest countries, be cautious of pickpocketing in busy areas of Santiago and Valparaíso."
  },
  {
    id: "safety-2",
    category: "safety",
    title: "Register Hiking Plans",
    description: "When hiking in national parks, always register your route with park rangers and carry emergency supplies, especially in remote areas."
  },
  {
    id: "safety-3",
    category: "safety",
    title: "Use Registered Taxis",
    description: "In cities, use official taxis (black with yellow roof) or ride-sharing apps. Avoid unmarked taxis, especially at night."
  },
  {
    id: "safety-4",
    category: "safety",
    title: "Prepare for Altitude",
    description: "If visiting the Atacama Desert or Andean regions, allow time to acclimate to high altitudes and stay hydrated to prevent altitude sickness."
  },

  // Seasons Tips
  {
    id: "seasons-1",
    category: "seasons",
    title: "Summer in Patagonia (Dec-Feb)",
    description: "The best time to visit Torres del Paine and southern Chile, with milder temperatures and longer daylight hours for hiking."
  },
  {
    id: "seasons-2",
    category: "seasons",
    title: "Atacama Desert Year-Round",
    description: "The Atacama can be visited year-round due to its consistently dry climate, though nights can be very cold."
  },
  {
    id: "seasons-3",
    category: "seasons",
    title: "Avoid Santiago in Winter",
    description: "Santiago experiences poor air quality in winter (Jun-Aug) due to temperature inversions. Consider visiting in spring or fall instead."
  },
  {
    id: "seasons-4",
    category: "seasons",
    title: "Wine Harvest Season (Mar-May)",
    description: "Visit the Central Valley wine regions during harvest season for special events, festivals, and grape harvesting experiences."
  },

  // Language Tips
  {
    id: "language-1",
    category: "language",
    title: "Learn Basic Spanish",
    description: "Outside major tourist areas, English is not widely spoken. Learning basic Spanish phrases will greatly enhance your experience."
  },
  {
    id: "language-2",
    category: "language",
    title: "Chilean Spanish Quirks",
    description: "Chileans speak rapidly and use unique slang (chilenismos). They often drop 's' sounds and use 'po' at the end of sentences."
  },
  {
    id: "language-3",
    category: "language",
    title: "Download Translation Apps",
    description: "Have offline Spanish translation apps ready, especially when traveling to rural areas with limited connectivity."
  },
  {
    id: "language-4",
    category: "language",
    title: "Practice Politeness",
    description: "Chileans value politeness. Learn greetings like 'Buenos días' (good morning) and phrases like 'por favor' (please) and 'gracias' (thank you)."
  },

  // Transportation Tips
  {
    id: "transportation-1",
    category: "transportation",
    title: "BIP Card for Santiago",
    description: "Purchase a BIP card for Santiago's public transportation. It works on metro and buses and is much more convenient than buying single tickets."
  },
  {
    id: "transportation-2",
    category: "transportation",
    title: "Consider Domestic Flights",
    description: "Chile is over 4,300 km long. For long distances (like Santiago to Patagonia), domestic flights save considerable time over bus travel."
  },
  {
    id: "transportation-3",
    category: "transportation",
    title: "Rent a Car in Wine Country",
    description: "To explore Chile's wine regions at your own pace, renting a car is ideal. Roads are generally good and signage is clear."
  },
  {
    id: "transportation-4",
    category: "transportation",
    title: "Navimag Ferry Experience",
    description: "Consider the multi-day Navimag ferry through the Patagonian fjords as both transportation and an unforgettable scenic experience."
  }
];