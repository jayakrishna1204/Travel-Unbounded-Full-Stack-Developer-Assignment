export const destinations = [
  // India Destinations
  {
    id: "kerala",
    name: "Kerala",
    country: "India",
    category: "india",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    description: "Cruising serene backwaters on a luxury houseboat, exploring tea estates in Munnar, and relaxing on tropical palms-fringed coastlines.",
    price: 24999,
    duration: "6 Days / 5 Nights",
    highlights: ["Alleppey Houseboat Stay", "Munnar Tea Plantations", "Thekkady Spice Plantations", "Kovalam Beach Sunset"]
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    country: "India",
    category: "india",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    description: "Soak in the majesty of pine valleys, snow-draped Himalayan peaks, serene monasteries, and alpine streams across Manali and Shimla.",
    price: 28500,
    duration: "7 Days / 6 Nights",
    highlights: ["Solang Valley Adventure", "Rohtang Pass Snow Tour", "Dharamshala & McLeod Ganj", "Kasol & Parvati River"]
  },
  {
    id: "ladakh",
    name: "Ladakh",
    country: "India",
    category: "india",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
    description: "Journey through high-altitude passes, azure Pangong Tso lake, double-humped camel safaris in Nubra Valley, and ancient cliffside monasteries.",
    price: 34999,
    duration: "7 Days / 6 Nights",
    highlights: ["Pangong Tso Blue Lake", "Nubra Valley Camel Safari", "Khardung La Pass (17,582 ft)", "Monasteries of Leh"]
  },
  {
    id: "andaman",
    name: "Andaman Islands",
    country: "India",
    category: "india",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80",
    description: "Unwind on Asia's finest turquoise beaches, dive into vibrant coral reefs, and experience the rich maritime heritage of Havelock Island.",
    price: 32000,
    duration: "6 Days / 5 Nights",
    highlights: ["Radhanagar Beach Sunset", "Scuba Diving in Havelock", "Cellular Jail Sound & Light", "Elephant Beach Snorkeling"]
  },
  {
    id: "goa",
    name: "Goa",
    country: "India",
    category: "india",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    description: "Savor golden palm-lined beaches, Portuguese heritage villas, spice plantation feasts, and vibrant sunset river cruises.",
    price: 18999,
    duration: "5 Days / 4 Nights",
    highlights: ["Old Goa Heritage Churches", "Dudhsagar Waterfall Jeep Trek", "Sunset Cruise on Mandovi", "North & South Goa Beaches"]
  },

  // International Destinations
  {
    id: "kenya",
    name: "Kenya",
    country: "Kenya",
    category: "international",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    description: "Witness the legendary Great Migration across the Masai Mara savannah, spot the Big Five at dawn, and connect with indigenous Maasai culture.",
    price: 145000,
    duration: "7 Days / 6 Nights",
    highlights: ["Masai Mara Game Safaris", "Lake Nakuru Flamingo Reserve", "Traditional Maasai Village Visit", "Amboseli Mt. Kilimanjaro View"]
  },
  {
    id: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    category: "international",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    description: "Sail past emerald karst islets in Ha Long Bay, stroll lantern-lit ancient streets in Hoi An, and discover rich culinary traditions in Hanoi.",
    price: 68999,
    duration: "7 Days / 6 Nights",
    highlights: ["Ha Long Bay Overnight Cruise", "Hoi An Ancient Lantern Town", "Cu Chi Tunnels Excursion", "Mekong Delta Boat Tour"]
  },
  {
    id: "tanzania",
    name: "Tanzania",
    country: "Tanzania",
    category: "international",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80",
    description: "Explore the wild expanses of Serengeti National Park, marvel at the UNESCO Ngorongoro Crater, and relax on Zanzibar's white coral shores.",
    price: 165000,
    duration: "8 Days / 7 Nights",
    highlights: ["Serengeti Wildlife Safari", "Ngorongoro Volcanic Crater", "Zanzibar Spice & Stone Town", "Tarangire Elephant Park"]
  },
  {
    id: "iceland",
    name: "Iceland",
    country: "Iceland",
    category: "international",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80",
    description: "Chase magical Northern Lights, bathe in geothermal Blue Lagoon hot springs, and witness roaring waterfalls, black sand beaches, and glaciers.",
    price: 189000,
    duration: "7 Days / 6 Nights",
    highlights: ["Golden Circle Geysir & Gullfoss", "Blue Lagoon Spa Entry", "Jökulsárlón Glacier Lagoon", "Northern Lights Hunting Tour"]
  },
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    category: "international",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    description: "Ride scenic mountain trains through mist-shrouded Ella tea plantations, climb Sigiriya Rock Fortress, and spot leopards in Yala.",
    price: 49999,
    duration: "6 Days / 5 Nights",
    highlights: ["Sigiriya Lion Rock Fortress", "Scenic Kandy to Ella Train", "Yala Leopard Safari", "Galle Fort & Bentota Beach"]
  }
];

export const indiaDestinations = destinations.filter(d => d.category === "india");
export const internationalDestinations = destinations.filter(d => d.category === "international");
