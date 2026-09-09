import logo from '../assets/images/JW-LOGO.webp';

export const site = {
  name: 'JewelRock',
  tagline: 'Multi-cuisine dining & bar',
  logo,
  phone: '073496 46314',
  email: 'hello@jewelrock.example',
  address: {
    lines: ['Jewel Rock, 2720, Sri Harsha Rd', 'Lashkar Mohalla, Mandi Mohalla', 'Mysuru, Karnataka 570001'],
    mapsUrl: 'https://maps.google.com/?q=Jewel+Rock+2720+Sri+Harsha+Rd+Lashkar+Mohalla+Mandi+Mohalla+Mysuru+Karnataka+570001',
  },
  hours: [
    { days: 'Monday – Friday', time: '11:00 AM – 11:00 PM' },
    { days: 'Saturday – Sunday', time: '9:00 AM – 11:30 PM' },
  ],
  hoursShort: 'Open daily, 11 AM – 11 PM',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
  ],
  // Order here is the header/footer nav order
  nav: [
    { label: 'Home', slug: 'home', href: '/' },
    { label: 'About', slug: 'about', href: '/about' },
    { label: 'Menu', slug: 'menu', href: '/menu' },
    { label: 'Gallery', slug: 'gallery', href: '/gallery' },
    { label: 'Reservations', slug: 'reservations', href: '/reservations' },
    { label: 'Journal', slug: 'blogs', href: '/blogs' },
    { label: 'FAQ', slug: 'faq', href: '/faq' },
    { label: 'Contact', slug: 'contact', href: '/contact' },
  ],
  copyright: `© ${new Date().getFullYear()} JewelRock. All rights reserved.`,
};
