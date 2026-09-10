import { useEffect, useState } from 'react';

/**
 * Tiny history-API router. Returns the current page slug.
 * Intercepts same-origin <a> clicks and pushes state instead of reloading.
 * Hash links (/menu#menu-tandoor) scroll to the target after the page renders.
 */
export function usePathPage(pages, defaultPage = 'home') {
  const [page, setPage] = useState(() => resolvePage(pages, defaultPage));

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const onNavigate = () => {
      setPage(resolvePage(pages, defaultPage));
      if (window.location.hash) {
        // wait for the new page to paint
        window.setTimeout(() => scrollToHash(window.location.hash), 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    const onClick = (event) => {
      const link = event.target.closest('a');
      if (!link || useBrowser(event, link)) return;
      event.preventDefault();

      const samePath = link.pathname === window.location.pathname;
      if (samePath && link.hash) {
        window.history.replaceState({}, '', link.pathname + link.hash);
        scrollToHash(link.hash);
        return;
      }
      if (samePath && !link.hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      window.history.pushState({}, '', link.pathname + link.hash);
      onNavigate();
    };

    window.addEventListener('popstate', onNavigate);
    document.addEventListener('click', onClick);
    if (window.location.hash) {
      window.setTimeout(() => scrollToHash(window.location.hash), 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    return () => {
      window.removeEventListener('popstate', onNavigate);
      document.removeEventListener('click', onClick);
    };
  }, [defaultPage, pages]);

  return page;
}

function resolvePage(pages, defaultPage) {
  const slug = window.location.pathname.replace(/^\/|\/$/g, '') || defaultPage;
  if (/^blogs?(\/[^/]+){1,2}$/.test(slug)) return 'blog-details';
  return pages.some((item) => item.slug === slug) ? slug : defaultPage;
}

function scrollToHash(hash) {
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function useBrowser(event, link) {
  const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
  const external = link.origin !== window.location.origin;
  const targeted = link.target && link.target !== '_self';
  return event.defaultPrevented || modified || event.button !== 0 || external || targeted || !link.pathname.startsWith('/') || link.hasAttribute('download');
}
