import { useEffect } from 'react';
import { site } from './data/site';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { CateringPage } from './pages/CateringPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReservationsPage } from './pages/ReservationsPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailsPage } from './pages/BlogDetailsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { usePathPage } from './hooks/usePathPage';
import { useScrollReveal } from './hooks/useScrollReveal';
import { defaultMeta, pageMeta } from './data/meta';

const pages = {
  home: HomePage,
  about: AboutPage,
  menu: MenuPage,
  catering: CateringPage,
  gallery: GalleryPage,
  reservations: ReservationsPage,
  blogs: BlogsPage,
  'blog-details': BlogDetailsPage,
  faq: FaqPage,
  contact: ContactPage,
};

export default function App() {
  const page = usePathPage(site.nav);
  useScrollReveal(page);

  useEffect(() => {
    const meta = pageMeta[page] || defaultMeta;
    document.title = `${site.name} | ${meta.title}`;
    setMetaContent('description', meta.description);
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

function setMetaContent(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}
