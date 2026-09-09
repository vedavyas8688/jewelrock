import { useEffect, useMemo, useState } from 'react';
import { menu, menuIntro, menuTabs, flattenCategories, categoryCounts } from '../data/menu';
import { images } from '../data/images';
import { CategoryNav } from '../components/menu/CategoryNav';
import { MenuCategory } from '../components/menu/MenuCategory';
import { DietDot } from '../components/ui/DietDot';
import { Button } from '../components/ui/Button';
import { Eyebrow } from '../components/ui/Eyebrow';
import { cx } from '../lib/cx';

const dietFilters = [
  { id: null, label: 'All' },
  { id: 'v', label: 'Veg' },
  { id: 'nv', label: 'Non-veg' },
];

export function MenuPage() {
  const initialTab = window.location.hash === '#bar' ? 'bar' : 'food';
  const [tabId, setTabId] = useState(initialTab);
  const [filterDiet, setFilterDiet] = useState(null);
  const tab = menu[tabId];
  const categories = useMemo(() => flattenCategories(tab), [tab]);
  const [activeId, setActiveId] = useState(categories[0]?.id);

  useEffect(() => setActiveId(categories[0]?.id), [categories]);

  // Scroll spy
  useEffect(() => {
    const sections = categories.map((category) => document.getElementById(`menu-${category.id}`)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id.replace('menu-', ''));
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories, filterDiet]);

  const selectCategory = (id) => {
    setActiveId(id);
    document.getElementById(`menu-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const switchTab = (id) => {
    setTabId(id);
    setFilterDiet(null);
    window.history.replaceState({}, '', id === 'bar' ? '/menu#bar' : '/menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Dark hero */}
      <section className="on-dark relative overflow-hidden bg-forest-deep text-cream">
        <img src={images.spices} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/85 to-forest-deep/30" />
        <div className="container-site hero-in relative py-16 md:py-24">
          <Eyebrow light className="mb-5">
            Dine in · Takeaway
          </Eyebrow>
          <h1 className="text-display-xl text-cream">{menuIntro.title}</h1>
          <p className="mt-6 max-w-prose text-lede text-cream/75">{menuIntro.text}</p>

          <div role="tablist" aria-label="Menu sections" className="mt-10 inline-flex rounded-pill border border-line-dark bg-forest p-1">
            {menuTabs.map((item) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={tabId === item.id}
                onClick={() => switchTab(item.id)}
                className={cx(
                  'min-h-11 rounded-pill px-6 text-small font-medium transition-colors duration-150',
                  tabId === item.id ? 'bg-cream text-forest' : 'text-cream/80 hover:text-cream',
                )}
              >
                {item.label}
                <span className="ml-2 text-caption opacity-60">{categoryCounts(item)}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div id={tabId} className="container-site" role="tabpanel">
        <CategoryNav categories={categories} activeId={activeId} onSelect={selectCategory} />

        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-prose text-small text-muted">{menuIntro.note}</p>
          {tabId === 'food' ? (
            <div className="flex shrink-0 items-center gap-1 rounded-pill border border-line p-1" role="group" aria-label="Filter by diet">
              {dietFilters.map((filter) => (
                <button
                  key={filter.label}
                  type="button"
                  aria-pressed={filterDiet === filter.id}
                  onClick={() => setFilterDiet(filter.id)}
                  className={cx(
                    'inline-flex min-h-9 items-center gap-2 rounded-pill px-3.5 text-small transition-colors duration-150',
                    filterDiet === filter.id ? 'bg-forest text-cream' : 'text-ink/75 hover:text-forest',
                  )}
                >
                  {filter.id ? <DietDot diet={filter.id} size="sm" className={filterDiet === filter.id ? 'border-cream' : ''} /> : null}
                  {filter.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-20 pb-section">
          {tab.groups.map((group) => {
            const groupSections = group.categories
              .map((category) => <MenuCategory key={category.id} category={category} showDiet={tabId === 'food'} filterDiet={filterDiet} />)
              .filter((node) => node);
            return (
              <div key={group.id} className="grid gap-10 lg:grid-cols-[220px_1fr]">
                <div className="lg:sticky lg:top-[calc(var(--spacing-header)+80px)] lg:self-start">
                  <h2 className="text-display-md text-gold">{group.title}</h2>
                  {group.measure ? <p className="mt-1 text-small text-muted">All pours {group.measure}</p> : null}
                </div>
                <div className="space-y-14">{groupSections}</div>
              </div>
            );
          })}
        </div>
      </div>

      <section className="bg-cream-deep py-section-tight">
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-display-md">Decided?</h2>
            <p className="mt-2 text-body text-muted">Book a table and we will have the tandoor ready.</p>
          </div>
          <Button href="/reservations" size="lg" arrow>
            Reserve a table
          </Button>
        </div>
      </section>
    </>
  );
}
