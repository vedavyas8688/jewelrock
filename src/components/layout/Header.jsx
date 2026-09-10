import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { site } from "../../data/site";
import { Button } from "../ui/Button";
import { cx } from "../../lib/cx";
import { useLockBody } from "../../hooks/useLockBody";

export function Header({ currentPage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useLockBody(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation / escape
  useEffect(() => setOpen(false), [currentPage]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const telHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;

  return (
    <>
      <header
        className={cx(
          "sticky top-0 z-50 h-header transition-[background-color,box-shadow] duration-200",
          scrolled || open
            ? "bg-forest/95 shadow-soft backdrop-blur-md"
            : "bg-forest",
        )}
      >
        <div className="container-site flex h-full min-w-0 items-center justify-between gap-4">
          <a
            href="/"
            className="flex shrink-0 items-center gap-3"
            aria-label={`${site.name} home`}
          >
            <img
              src={site.logo}
              alt=""
              width={64}
              height={52}
              className="h-12 w-auto object-contain"
            />
            <span className="hidden font-display text-xl font-medium text-cream min-[400px]:inline">
              {site.name}
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {site.nav.map((item) => {
              const active =
                item.slug === currentPage ||
                (item.slug === "blogs" && currentPage === "blog-details");
              return (
                <a
                  key={item.slug}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cx(
                    "relative rounded-pill px-3.5 py-2 text-small font-medium transition-colors duration-150",
                    active ? "text-gold-light" : "text-cream/80 hover:text-cream",
                    "after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-200",
                    active && "after:scale-x-100",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={telHref}
              className="hidden items-center gap-2 text-small font-medium text-cream/85 hover:text-cream xl:inline-flex"
            >
              <Phone size={15} aria-hidden="true" />
              {site.phone}
            </a>
            <Button href="/reservations" size="sm" light className="max-md:hidden">
              Book a table
            </Button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-pill text-cream hover:bg-cream/10 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — sibling of the header so the blurred header doesn't become its containing block */}
      <div
        id="mobile-menu"
        className={cx(
          "fixed inset-0 z-[70] flex flex-col bg-forest transition-[opacity,transform] duration-200 ease-out-soft lg:hidden",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="container-site flex h-header shrink-0 items-center justify-between gap-4">
          <a
            href="/"
            tabIndex={open ? 0 : -1}
            className="flex shrink-0 items-center gap-3"
            aria-label={`${site.name} home`}
          >
            <img
              src={site.logo}
              alt=""
              width={64}
              height={52}
              className="h-12 w-auto object-contain"
            />
            <span className="font-display text-xl font-medium text-cream">
              {site.name}
            </span>
          </a>
          <button
            type="button"
            tabIndex={open ? 0 : -1}
            className="grid size-11 place-items-center rounded-pill text-cream hover:bg-cream/10"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <nav
          className="container-site hide-scrollbar flex flex-1 flex-col overflow-y-auto pt-2"
          aria-label="Mobile"
        >
          {site.nav.map((item, index) => (
            <a
              key={item.slug}
              href={item.href}
              tabIndex={open ? 0 : -1}
              aria-current={item.slug === currentPage ? "page" : undefined}
              className={cx(
                "flex items-center justify-between border-b border-gold/30 py-4 font-display text-display-sm",
                item.slug === currentPage ? "text-gold-light" : "text-cream",
              )}
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-auto flex flex-col gap-3 py-8">
            <Button href="/reservations" size="lg" light tabIndex={open ? 0 : -1}>
              Book a table
            </Button>
            <Button
              href={telHref}
              variant="secondary"
              size="lg"
              light
              tabIndex={open ? 0 : -1}
            >
              <Phone size={16} aria-hidden="true" />
              {site.phone}
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
