import { galleryImages } from './images';

/* ------------------------------------------------------------------ GALLERY
   Each entry maps to src/assets/gallery/gallery-NN.webp.
   span controls the editorial grid: 'wide' | 'tall' | 'large' | undefined (1×1).
*/
export const gallery = {
  title: 'A feast for the eyes',
  text: 'Fresh ingredients, meaningful moments, and the vibrant flavours that bring people together. A look inside our kitchen, our room and our tables.',
  filters: [
    { id: 'all', label: 'All' },
    { id: 'food', label: 'Food' },
    { id: 'drinks', label: 'Bar' },
    { id: 'space', label: 'The room' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'events', label: 'Events' },
  ],
  items: [
    { src: galleryImages[0], alt: 'Dinner service at JewelRock', category: 'space', span: 'large' },
    { src: galleryImages[1], alt: 'A table set for a celebration', category: 'events' },
    { src: galleryImages[2], alt: 'Chef plating a tandoor dish', category: 'kitchen', span: 'tall' },
    { src: galleryImages[3], alt: 'Assorted kabab platter', category: 'food' },
    { src: galleryImages[4], alt: 'Morning produce delivery', category: 'kitchen' },
    { src: galleryImages[5], alt: 'Dessert with berries', category: 'food', span: 'wide' },
    { src: galleryImages[6], alt: 'Soup course', category: 'food' },
    { src: galleryImages[7], alt: 'Kitchen prep before service', category: 'kitchen' },
    { src: galleryImages[8], alt: 'Weekend brunch plate', category: 'food', span: 'tall' },
    { src: galleryImages[9], alt: 'Fresh garden plate', category: 'food' },
    { src: galleryImages[10], alt: 'Family lunch spread', category: 'events', span: 'wide' },
    { src: galleryImages[11], alt: 'Chilled dessert bowl', category: 'drinks' },
    { src: galleryImages[12], alt: 'Signature plates ready for the pass', category: 'food' },
    { src: galleryImages[13], alt: 'Spice mise en place', category: 'kitchen', span: 'large' },
  ],
  cta: { title: 'Hungry yet?', text: 'The menu has 250 more reasons to visit.', label: 'View the menu', href: '/menu' },
};

/* ------------------------------------------------------------- RESERVATIONS */
export const reservations = {
  eyebrow: 'Let’s make memories',
  title: 'Great food tastes better together',
  text: 'Dine. Celebrate. Belong. Book a table for two or a room for forty — we will have it ready.',
  image: 'occasion',
  imageAlt: 'Friends raising glasses over dinner',
  perks: [
    { title: 'Any occasion', text: 'Birthdays, anniversaries, office lunches and quiet weekday dinners.' },
    { title: 'Easy booking', text: 'Pick a date, time and party size. We confirm on phone or WhatsApp within the hour.' },
    { title: 'Private dining', text: 'A separate room for up to forty guests with its own bar service.' },
  ],
  form: {
    title: 'Reserve your table',
    text: 'Bookings up to 30 days ahead. Same-day tables for groups under six can walk in.',
    submit: 'Request a table',
    success: {
      title: 'Request received',
      text: 'We will confirm your table by phone shortly. For same-day changes call us directly.',
    },
    guestOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11–15', '16–25', '26–40'],
    timeSlots: ['11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'],
    occasions: ['No occasion', 'Birthday', 'Anniversary', 'Business', 'Family gathering', 'Other'],
  },
  info: {
    title: 'Good to know',
    items: [
      'Tables are held for 15 minutes past the booked time.',
      'Groups of 8 or more: a 10% service charge applies.',
      'Last kitchen order 10:30 PM; bar closes at 11:00 PM.',
      'Children welcome until 9 PM. High chairs available.',
    ],
  },
};

/* ------------------------------------------------------------------ JOURNAL */
export const journal = {
  eyebrow: 'Journal',
  title: 'Notes from the kitchen',
  text: 'Recipes we can share, stories we cannot keep to ourselves, and what is in season this month.',
  posts: [
    {
      id: 1,
      slug: 'why-our-tandoor-never-goes-cold',
      category: 'Behind the pass',
      title: 'Why our tandoor never goes cold',
      excerpt: 'A clay oven is a living thing. Decades of lighting it at 10 AM have taught us how to keep it honest.',
      date: 'September 2026',
      author: 'Chef Arjun Rao',
      readTime: '6 min read',
      image: 'chef',
      content: [
        { heading: 'A fire with a memory', paragraphs: ['Our tandoor is seasoned by decades of marinades dripping onto clay. The smoke it gives is not something you can buy or fake — it is the accumulated history of every kabab that has gone before.', 'That is why it is lit every single morning, even on days we are closed for maintenance. A cold tandoor loses its seasoning.'] },
        { heading: 'Heat is a tool, not a setting', paragraphs: ['Different kababs want different fire. A malai kabab wants the top of the oven; a full tandoori chicken wants the deep centre. The tandoor cook reads the coals like a baker reads dough.'] },
        { heading: 'What we will never do', paragraphs: ['Red food colouring. If it is red, it is because of Kashmiri chilli and time.'] },
      ],
      sidebar: { title: 'In this story', items: ['Seasoning clay', 'Reading the coals', 'Overnight marinades', 'No colouring'] },
    },
    {
      id: 2,
      slug: 'the-szechwan-sauce-we-are-not-allowed-to-share',
      category: 'From the wok',
      title: 'The Szechwan sauce we are not allowed to share',
      excerpt: 'Chef Wong has been asked for the recipe more times than we can count. Here is everything except the recipe.',
      date: 'August 2026',
      author: 'JewelRock Kitchen',
      readTime: '4 min read',
      image: 'plates',
      content: [
        { heading: 'What is in it', paragraphs: ['Dried red chillies, garlic, ginger, a little sugar, a lot of patience. The proportions are the part we keep.', 'It is made in a single batch every morning and used across the Szechwan chicken, the fried rice and the tripple Szechwan.'] },
        { heading: 'Why it works', paragraphs: ['Heat that arrives late. The first bite is sweet and garlicky; the chilli catches up a few seconds later, which is exactly when you reach for the beer.'] },
      ],
      sidebar: { title: 'Try it in', items: ['Szechwan Chicken', 'Szechwan Fried Rice', 'Tripple Szechwan', 'Chilly Garlic Noodles'] },
    },
    {
      id: 3,
      slug: 'a-guide-to-ordering-for-a-mixed-table',
      category: 'How to order',
      title: 'A guide to ordering for a mixed table',
      excerpt: 'Two vegetarians, one pescatarian and a kabab loyalist. Here is how we would build the order.',
      date: 'July 2026',
      author: 'Meera Shetty',
      readTime: '5 min read',
      image: 'platter',
      content: [
        { heading: 'Start with things everyone can reach', paragraphs: ['Paneer tikka, drums of heaven and a plate of golden fried fish cover every camp. Add a masala papad because nobody has ever regretted a masala papad.'] },
        { heading: 'Mains: one gravy per camp, two breads per person', paragraphs: ['Paneer makhanwala, chicken chettinad, prawn masala. Butter naan and garlic naan. A mutton biryani for the middle of the table.'] },
        { heading: 'Finish', paragraphs: ['Gulab jamoon for the table and a kulfi for whoever ordered the chettinad.'] },
      ],
      sidebar: { title: 'Sample order for four', items: ['Paneer Tikka', 'Drums of Heaven', 'Golden Fried Fish', 'Paneer Makhanwala', 'Chicken Chettinad', 'Mutton Biryani', 'Garlic Naan ×4', 'Gulab Jamoon'] },
    },
    {
      id: 4,
      slug: 'what-is-in-season-this-month',
      category: 'Seasonal',
      title: 'What is in season this month',
      excerpt: 'Monsoon greens, the first good prawns of the year and why the palak dishes taste better right now.',
      date: 'July 2026',
      author: 'JewelRock Kitchen',
      readTime: '3 min read',
      image: 'farm',
      content: [
        { heading: 'Greens', paragraphs: ['Palak is at its sweetest after the first rains. Order the palak paneer, the saag gosh or the plain palak while it lasts.'] },
        { heading: 'From the sea', paragraphs: ['Prawns are back in size. Garlic prawns and prawn hydrabadi are both worth it this month.'] },
      ],
      sidebar: { title: 'Order now', items: ['Palak Paneer', 'Saag Gosh', 'Garlic Prawns', 'Prawn Hydrabadi'] },
    },
    {
      id: 5,
      slug: 'how-we-built-the-cocktail-list',
      category: 'The bar',
      title: 'How we built the cocktail list',
      excerpt: 'Eight drinks, no more. Rahul explains why a short list is a good list and what goes into a Death Wish.',
      date: 'June 2026',
      author: 'Rahul Mehta',
      readTime: '4 min read',
      image: 'dessert',
      content: [
        { heading: 'Why eight', paragraphs: ['A cocktail list should be something a bartender can make fast and well on a Saturday night. Eight is what we can make perfectly with four hands.'] },
        { heading: 'About the Death Wish', paragraphs: ['Brandy, gin, vodka, rum and whisky. Pineapple to make peace between them. It is ordered as a dare and finished as a favourite.'] },
      ],
      sidebar: { title: 'On the list', items: ['Orange Blossom', 'Planter’s Punch', 'Gimlet', 'Pinacolada', 'Death Wish'] },
    },
  ],
};

/* ---------------------------------------------------------------------- FAQ */
export const faq = {
  eyebrow: 'FAQ',
  title: 'Good to know before you visit',
  text: 'Quick answers on booking, the menu and the room. Anything else, just call.',
  groups: [
    {
      id: 'booking',
      title: 'Booking & timings',
      items: [
        { q: 'Do I need a reservation?', a: 'Walk-ins are welcome for tables under six. For weekends, groups or the private room we recommend booking through the Reservations page or by phone.' },
        { q: 'What are your hours?', a: 'Open every day from 11 AM to 11 PM. Weekend brunch starts at 9 AM. Last kitchen order is 10:30 PM.' },
        { q: 'How long is a table held?', a: 'Fifteen minutes past the booked time. If you are running late, a quick call keeps the table yours.' },
      ],
    },
    {
      id: 'menu',
      title: 'The menu',
      items: [
        { q: 'Is the menu vegetarian or non-vegetarian?', a: 'Both. Every section — tandoor, Chinese, gravies, biryani — has a full vegetarian line. Dishes are marked veg, non-veg or egg on the menu.' },
        { q: 'Do you serve alcohol?', a: 'Yes. The bar carries Indian and imported whisky, rum, brandy, gin, vodka, wine, beer and eight house cocktails, plus mocktails.' },
        { q: 'Can dishes be made less spicy?', a: 'Most gravies and wok dishes can be adjusted. Tandoor items are marinated overnight so their heat is fixed — ask your server which ones run mild.' },
        { q: 'Are veg and non-veg cooked separately?', a: 'Vegetarian dishes are cooked in dedicated pans and, in the tandoor, on separate skewers.' },
      ],
    },
    {
      id: 'events',
      title: 'Groups & events',
      items: [
        { q: 'Can you host a private event?', a: 'Our private room seats up to forty with its own bar service. Set menus are available for groups over twelve.' },
        { q: 'Is there a service charge for groups?', a: 'A 10% service charge applies to tables of eight or more.' },
        { q: 'Are children welcome?', a: 'Yes, until 9 PM. High chairs are available and the kitchen is happy to do plain rice, dal and roti.' },
      ],
    },
  ],
  support: {
    title: 'Still have a question?',
    text: 'Call between 11 AM and 11 PM or send a message and we will reply the same day.',
    primaryCta: { label: 'Contact us', href: '/contact' },
  },
};

/* ------------------------------------------------------------------ CONTACT */
export const contact = {
  eyebrow: 'Visit us',
  title: 'Good food, closer than you think',
  text: 'Find us in Mysuru. Call, write, or just come by.',
  image: 'contact',
  imageAlt: 'The JewelRock kitchen preparing for service',
  form: {
    title: 'Send a message',
    text: 'Feedback, events, press, jobs — anything that is not a table booking.',
    subjects: ['General enquiry', 'Private event', 'Feedback', 'Careers', 'Press'],
    submit: 'Send message',
    success: { title: 'Message sent', text: 'Thanks — we reply to every message within a working day.' },
  },
};
