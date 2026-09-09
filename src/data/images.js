import hero from '../assets/images/hero-restaurant-action.webp';
import chef from '../assets/images/chef-plating.webp';
import soup from '../assets/images/soup-clean.png';
import breakfast from '../assets/images/veg-breakfast.webp';
import farm from '../assets/images/farm-produce.webp';
import pancakes from '../assets/images/pancakes.webp';
import avocado from '../assets/images/avocado-toast.webp';
import yogurt from '../assets/images/yogurt-bowl.webp';
import dessert from '../assets/images/dessert.webp';
import occasion from '../assets/images/occasion-table.webp';
import contact from '../assets/images/contact-prep.webp';
import platter from '../assets/images/menu-platter-banner.webp';
import spices from '../assets/images/menu-hero-spices.webp';
import plates from '../assets/images/masterpiece-plates-clean.png';
import guestWoman from '../assets/images/testimonial-woman.webp';
import guestMan from '../assets/images/testimonial-man.webp';
import cateringBuffetHero from '../assets/images/catering-buffet-hero.png';
import cateringLiveTheatreBg from '../assets/images/catering-live-theatre-bg.png';
import cateringMainCourse from '../assets/images/catering-main-course.png';
import cateringRegionalSpecialty from '../assets/images/catering-regional-specialty.png';
import cateringBeverages from '../assets/images/catering-beverages.png';

export const images = {
  hero,
  chef,
  soup,
  breakfast,
  farm,
  pancakes,
  avocado,
  yogurt,
  dessert,
  occasion,
  contact,
  platter,
  spices,
  plates,
  guestWoman,
  guestMan,
  cateringBuffetHero,
  cateringLiveTheatreBg,
  cateringMainCourse,
  cateringRegionalSpecialty,
  cateringBeverages,
};

const galleryFiles = import.meta.glob('../assets/gallery/gallery-*.webp', {
  eager: true,
  import: 'default',
});

export const galleryImages = Object.keys(galleryFiles)
  .sort()
  .map((path) => galleryFiles[path]);
