import { Flame, Fish, Soup, Wine, Users, Clock, UtensilsCrossed, Sparkles, Leaf, Beef, Sun, Moon, PartyPopper, Briefcase, Heart } from 'lucide-react';

/* ------------------------------------------------------------------ HOME */
export const home = {
  hero: {
    eyebrow: 'Tandoor · Wok · Coast · Bar',
    title: 'One table, many kitchens.',
    text: 'Smoky kababs from the tandoor, fiery Szechwan from the wok, coastal fish and prawns, slow North Indian gravies — and a bar to match. JewelRock is where the whole table gets what it came for.',
    primaryCta: { label: 'Reserve a table', href: '/reservations' },
    secondaryCta: { label: 'See the menu', href: '/menu' },
    image: 'hero',
    imageAlt: 'A JewelRock table set with kababs, curries and drinks',
    facts: [
      { value: '250+', label: 'dishes across five kitchens' },
      { value: '1990', label: 'serving since' },
      { value: '11 – 11', label: 'open every day' },
    ],
  },

  kitchens: {
    title: 'Five kitchens, one dining room',
    text: 'Each section of our menu is run like its own kitchen, with its own cooks and its own fire.',
    items: [
      { icon: Flame, title: 'Hamara Tandoor', text: 'Clay-oven kababs, tikkas and tandoori chicken, marinated overnight.', href: '/menu#menu-tandoor-nonveg' },
      { icon: Soup, title: 'From the wok', text: 'Szechwan, Manchurian, Hong Kong — Indo-Chinese done at full flame.', href: '/menu#menu-chinese-starters-nonveg' },
      { icon: Fish, title: 'Samunder se', text: 'Fish and prawns fried golden or tossed in hot garlic sauce.', href: '/menu#menu-seafood' },
      { icon: UtensilsCrossed, title: 'Bawarchi khana', text: 'Slow gravies, dum biryanis and breads straight from the tandoor.', href: '/menu#menu-chicken-gravies' },
      { icon: Wine, title: 'The bar', text: 'Whiskies, rums, wines, beer and eight house cocktails.', href: '/menu#bar' },
    ],
  },

  signature: {
    title: 'What the regulars order',
    text: 'A short list of the plates that leave the kitchen most.',
    featured: {
      name: 'Tandoori Chicken (Full)',
      category: 'Hamara Tandoor',
      text: 'Whole bird, yoghurt and red-chilli marinade, a night in the fridge and twenty minutes in the clay oven. Comes with mint chutney, onion rings and lemon.',
      price: 290,
      diet: 'nv',
      image: 'chef',
      imageAlt: 'Tandoori chicken being plated',
    },
    items: [
      { name: 'Drums of Heaven', category: 'Wok starters', price: 175, diet: 'nv', image: 'platter' },
      { name: 'Paneer Makhanwala', category: 'Sabzi ke bagiche', price: 155, diet: 'v', image: 'soup' },
      { name: 'Golden Fried Prawns', category: 'Samunder se', price: 215, diet: 'nv', image: 'plates' },
      { name: 'Mutton Biryani', category: 'Basumathi ka bhandar', price: 180, diet: 'nv', image: 'breakfast' },
    ],
    cta: { label: 'Full menu', href: '/menu' },
  },

  story: {
    title: 'A Mysore favourite since 1990',
    text: 'JewelRock opened its doors on August 15, 1990 as a multi-cuisine restaurant created for Mysoreans who wanted generous food, warm service and a table that could please everyone.',
    cta: { label: 'Our story', href: '/about' },
    image: 'occasion',
    imageAlt: 'A JewelRock restaurant table set for guests',
    points: [
      { title: 'Cooked to order', text: 'Nothing sits under a lamp. Gravies are finished when you order them.' },
      { title: 'Everyone eats', text: 'Veg, non-veg and egg dishes clearly marked, with a full vegetarian run of every section.' },
      { title: 'A proper bar', text: 'Eight cocktails, Indian and imported whisky, wine, beer and mocktails.' },
    ],
  },

  moments: {
    title: 'Moments at our table',
    text: 'Fresh ingredients. Loud tables. Long lunches. A look inside our kitchen and our room.',
    cta: { label: 'View gallery', href: '/gallery' },
  },

  reviews: {
    title: 'Happy guests, happier us',
    text: 'What people say after the plates are cleared.',
    items: [
      { name: 'Priya S.', place: 'Mysuru', rating: 5, text: 'Came for the tandoori chicken, stayed for the chilly prawns. The kababs are properly smoky, not just coloured red.', avatar: 'guestWoman' },
      { name: 'Arjun M.', place: 'Andheri', rating: 5, text: 'Rare place where the veg half of the table is as happy as the non-veg half. Paneer makhanwala and garlic naan are the move.', avatar: 'guestMan' },
      { name: 'Nandini R.', place: 'Mahim', rating: 5, text: 'Drums of Heaven, a Kingfisher and the Szechwan fried rice. Our Friday routine for two years now.', avatar: 'guestWoman' },
      { name: 'Karthik U.', place: 'Dadar', rating: 5, text: 'Mutton biryani had actual dum flavour and the raitha was cold. That is all I ask of a biryani.', avatar: 'guestMan' },
      { name: 'Sneha P.', place: 'Mysuru', rating: 5, text: 'The service felt warm without being rushed. We ordered across tandoor, Chinese and the bar, and everything came well timed.', avatar: 'guestWoman' },
      { name: 'Rohit N.', place: 'Bengaluru', rating: 5, text: 'A proper old-school dining room. The portions are generous, the gravies have depth, and the cocktails are easy to recommend.', avatar: 'guestMan' },
    ],
  },

  reserve: {
    title: 'Let’s make your next meal special.',
    text: 'Birthdays, office lunches, Sunday family tables — tell us how many and we will hold the table.',
    primaryCta: { label: 'Book a table', href: '/reservations' },
    secondaryCta: { label: 'Explore menu', href: '/menu' },
    image: 'occasion',
    imageAlt: 'A long table set for a celebration at JewelRock',
  },


  /* Scrolling ticker under the hero */
  ticker: {
    items: ['Tandoori Chicken', 'Drums of Heaven', 'Golden Fried Prawns', 'Mutton Biryani', 'Paneer Makhanwala', 'Szechwan Fried Rice', 'Hot Garlic Fish', 'Garlic Naan', 'Death Wish', 'Chilly Prawns'],
  },

  /* Tabbed "table for every occasion" */
  occasions: {
    eyebrow: 'Every table has a reason',
    title: 'Come for the occasion, stay for the plates',
    text: 'Pick the evening you have in mind — we will tell you what the table usually orders.',
    items: [
      {
        id: 'family',
        icon: Sun,
        label: 'Sunday family',
        title: 'Long lunches, big platters',
        text: 'Twelve people, three generations and one argument about whether the biryani is better than last week. Order the tandoori platter for the table, a round of gravies and let the breads keep coming.',
        picks: ['Tandoori Platter', 'Mutton Rogan Josh', 'Dal Makhani', 'Butter Naan'],
        image: 'occasion',
        imageAlt: 'A long family table at JewelRock',
      },
      {
        id: 'date',
        icon: Heart,
        label: 'Date night',
        title: 'A corner table and a slow bar',
        text: 'Two chairs by the window, a cocktail each and small plates that arrive one at a time. The kitchen goes at your pace, not the other way round.',
        picks: ['Golden Fried Prawns', 'Malai Kabab', 'Orange Blossom', 'Gulab Jamun'],
        image: 'dessert',
        imageAlt: 'A dessert plate and two glasses',
      },
      {
        id: 'office',
        icon: Briefcase,
        label: 'Office lunch',
        title: 'In by one, out by two',
        text: 'Set thalis for the hurried, a la carte for the rest, and a bill that splits cleanly. Ask for the back room if you are more than eight.',
        picks: ['Chicken Biryani', 'Veg Manchurian', 'Szechwan Noodles', 'Masala Chaas'],
        image: 'plates',
        imageAlt: 'Plates ready for a group lunch',
      },
      {
        id: 'party',
        icon: PartyPopper,
        label: 'Birthdays & groups',
        title: 'The whole back room is yours',
        text: 'Groups of ten to forty. Fixed menus or a free-for-all, a cake we will keep cold, and a bar tab that runs as long as you do.',
        picks: ['Drums of Heaven', 'Fish Koliwada', 'Chicken Tikka', "Planter's Punch"],
        image: 'hero',
        imageAlt: 'A celebration table set with kababs and drinks',
      },
    ],
    cta: { label: 'Reserve for your occasion', href: '/reservations' },
  },

  /* Expanding bar panels */
  bar: {
    eyebrow: 'The bar',
    title: 'Eight cocktails we wrote ourselves',
    text: 'Hover or tap a panel. Every drink is ₹150 unless it is trying to kill you.',
    cta: { label: 'Bar menu', href: '/menu#bar' },
    items: [
      { name: 'Orange Blossom', base: 'Gin', note: 'Orange juice, a pinch of salt, sugar syrup.', price: 150, image: 'yogurt' },
      { name: "Planter's Punch", base: 'Black rum', note: 'Pineapple, lime and a dark rum finish.', price: 150, image: 'pancakes' },
      { name: 'Gimlet', base: 'Gin', note: 'Lime cordial and gin. Nothing to hide behind.', price: 150, image: 'avocado' },
      { name: 'Pinacolada', base: 'White rum', note: 'Pineapple, cream and white rum, properly cold.', price: 150, image: 'dessert' },
      { name: 'Death Wish', base: 'Everything', note: 'Brandy, gin, vodka, rum and whisky. One per guest.', price: 210, image: 'spices' },
    ],
  },

  /* Journal teaser */
  journal: {
    eyebrow: 'From the journal',
    title: 'Notes from the pass',
    text: 'What the kitchen is thinking about this month.',
    cta: { label: 'Read the journal', href: '/blogs' },
  },

  visit: {
    title: 'Good food, closer than you think',
    text: 'In the heart of Mysuru, close to the city’s familiar dining routes.',
    cta: { label: 'Get directions' },
    image: 'contact',
    imageAlt: 'The JewelRock kitchen preparing for evening service',
  },
};

/* ------------------------------------------------------------------ ABOUT */
export const about = {
  hero: {
    eyebrow: 'Our story',
    title: 'A true jewel for Mysoreans',
    text: 'Since August 15, 1990, JewelRock has welcomed guests with North Indian favourites, Chinese classics, tandoor specialities and a well-stocked mezzanine bar with cocktails and mocktails.',
    image: 'chef',
    imageAlt: 'Chef finishing a plate in the JewelRock kitchen',
    values: [
      { icon: Users, title: '100-seat dining room', text: 'A generous restaurant made for families, friends, travellers and celebrations.' },
      { icon: Clock, title: 'Since 1990', text: 'Opened on August 15, 1990 and loved by generations of Mysoreans.' },
      { icon: Sparkles, title: 'Multi-cuisine craft', text: 'North Indian, Chinese and tandoor dishes prepared by skilled speciality chefs.' },
    ],
  },

  timeline: {
    title: 'A JewelRock timeline',
    items: [
      { year: '1990', title: 'Doors open', text: 'JewelRock opens to the public on August 15 with a promise of generous multi-cuisine dining.' },
      { year: '1990s', title: 'Speciality chefs', text: 'Chefs from across the continent shape a menu of North Indian, Chinese and tandoor favourites.' },
      { year: '2000s', title: 'A Mysuru landmark', text: 'Families, travellers and regulars make JewelRock a familiar dining address in the city.' },
      { year: 'Today', title: 'The mezzanine bar', text: 'A well-stocked bar serves cocktails, mocktails and classic pours above the dining room.' },
      { year: 'Now', title: '100-seat dining room', text: 'The dining room continues with cocktails, mocktails and food made for every table.' },
    ],
  },

  philosophy: {
    title: 'Honest cooking, generous plates',
    text: 'We do not chase trends. We cook the food Mysuru has returned to for decades and keep making it a little better every year.',
    image: 'farm',
    imageAlt: 'Fresh vegetables and spices on the kitchen counter',
    points: [
      { title: 'Spice with purpose', text: 'Every marinade is ground in-house. Heat is there to lift flavour, not hide it.' },
      { title: 'Veg is not an afterthought', text: 'Every section of the menu has a full vegetarian line, cooked on separate pans.' },
      { title: 'Portions for sharing', text: 'Plates are sized for a table that passes things around.' },
    ],
  },

  team: {
    title: 'The people at the pass',
    text: 'A small team, most of whom have been here longer than the bar.',
    members: [
      { name: 'Chef Arjun Rao', role: 'Head chef, tandoor', image: 'chef' },
      { name: 'Chef Wong Lee', role: 'Wok & Indo-Chinese', image: 'plates' },
      { name: 'Meera Shetty', role: 'Front of house', image: 'guestWoman' },
      { name: 'Rahul Mehta', role: 'Bar', image: 'guestMan' },
    ],
  },


  /* Word-by-word manifesto */
  manifesto: {
    eyebrow: 'What we believe',
    lines: [
      'A restaurant is a promise kept nightly.',
      'The tandoor is lit at ten. The fish arrives at six.',
      'Nobody at the table should have to settle.',
    ],
    statements: [
      [
        'A promise kept nightly.',
        'The tandoor is lit at ten.',
        'Every table eats well.',
      ],
      [
        'Generous plates, steady hands.',
        'Spice with purpose.',
        "The kitchen's full attention.",
      ],
      [
        'Fresh produce every morning.',
        'Patient gravies every night.',
        'The JewelRock way.',
      ],
    ],
    sign: '- The JewelRock family, since 1990',
  },

  /* Animated counters */
  numbers: {
    eyebrow: 'By the numbers',
    title: 'JewelRock in figures',
    items: [
      { value: 1990, suffix: '', label: 'the year JewelRock opened' },
      { value: 250, suffix: '+', label: 'dishes across five kitchens' },
      { value: 8, suffix: '', label: 'house cocktails on the bar list' },
      { value: 100, suffix: '', label: 'seats in the dining room' },
    ],
  },

  /* Horizontal "a day at JewelRock" */
  day: {
    eyebrow: 'A day at JewelRock',
    title: 'From market to last order',
    text: 'Scroll sideways. This is what a Tuesday looks like.',
    items: [
      { time: '6:00 AM', title: 'Morning market', text: 'Fish, mutton and vegetables are picked by hand. Whatever is not good enough does not come back.', image: 'farm' },
      { time: '10:00 AM', title: 'Tandoor lit', text: 'Coal goes in, the clay warms for an hour. Marinades that rested overnight come out of the fridge.', image: 'chef' },
      { time: '11:00 AM', title: 'Doors open', text: 'First tables are office lunches. The wok station is already at full flame.', image: 'platter' },
      { time: '6:00 PM', title: 'Bar opens', text: 'Ice is cut, garnishes prepped, the whisky shelf wiped down. Cocktails are built to order.', image: 'yogurt' },
      { time: '8:30 PM', title: 'Full house', text: 'Every station is calling. The pass runs on one voice and a lot of hand signals.', image: 'hero' },
      { time: '11:00 PM', title: 'Last order', text: 'Tandoor banked for the night, the room reset, the same family locks the door.', image: 'occasion' },
    ],
  },

  /* Tilt cards — sourcing */
  sourcing: {
    eyebrow: 'What comes in every morning',
    title: 'Four things we never compromise on',
    text: 'The menu is only as good as the six o\'clock market run.',
    items: [
      { icon: Fish, title: 'Coastal catch', text: 'Surmai, prawns and pomfret from the morning boats. Never frozen.', image: 'platter' },
      { icon: Beef, title: 'Fresh meat', text: 'Chicken and mutton from the same two butchers for a decade.', image: 'chef' },
      { icon: Leaf, title: 'Market vegetables', text: 'Bought loose, cooked the same day. Paneer set in-house.', image: 'farm' },
      { icon: Moon, title: 'Ground spice', text: 'Whole spices roasted and ground weekly. No pre-mixed masala.', image: 'spices' },
    ],
  },

  cta: {
    title: 'Come see for yourself.',
    text: 'Fresh food, good company. See you at JewelRock.',
    primaryCta: { label: 'Book a table', href: '/reservations' },
    secondaryCta: { label: 'Explore menu', href: '/menu' },
    image: 'avocado',
    imageAlt: 'A fresh plate ready to serve',
  },
};
