import { useEffect } from 'react';
import { site } from './data/site';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReservationsPage } from './pages/ReservationsPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailsPage } from './pages/BlogDetailsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { usePathPage } from './hooks/usePathPage';
import { useScrollReveal } from './hooks/useScrollReveal';

const pages = {
  home: HomePage,
  about: AboutPage,
  menu: MenuPage,
  gallery: GalleryPage,
  reservations: ReservationsPage,
  blogs: BlogsPage,
  'blog-details': BlogDetailsPage,
  faq: FaqPage,
  contact: ContactPage,
};

const titles = {
  home: 'Multi-cuisine dining & bar in Mysuru',
  about: 'Our story',
  menu: 'Menu',
  gallery: 'Gallery',
  reservations: 'Reservations',
  blogs: 'Journal',
  'blog-details': 'Journal',
  faq: 'FAQ',
  contact: 'Contact',
};

export default function App() {
  const page = usePathPage(site.nav);
  useScrollReveal(page);

  useEffect(() => {
    document.title = `${site.name} | ${titles[page] || titles.home}`;
  }, [page]);

  const Page = pages[page] || HomePage;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-forest focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Header currentPage={page} />
      <main id="main" className="flex-1">
        <Page />
      </main>
      <Footer />
    </>
  );
}
