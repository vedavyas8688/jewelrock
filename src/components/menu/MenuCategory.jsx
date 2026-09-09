import { MenuItemRow } from './MenuItemRow';

/** One category: title, optional subtitle, items in two columns on wide screens. */
export function MenuCategory({ category, showDiet, filterDiet }) {
  const items = filterDiet ? category.items.filter((item) => (item.diet || category.diet) === filterDiet) : category.items;
  if (items.length === 0) return null;

  return (
    <section id={`menu-${category.id}`} aria-labelledby={`menu-${category.id}-title`} className="scroll-mt-[calc(var(--spacing-header)+72px)]">
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-forest/20 pb-3">
        <h3 id={`menu-${category.id}-title`} className="text-display-md">
          {category.title}
        </h3>
        {category.subtitle ? <p className="text-small italic text-muted">{category.subtitle}</p> : null}
      </header>
      <ul className="mt-4 columns-1 gap-x-12 md:columns-2 [&>li]:break-inside-avoid">
        {items.map((item, index) => (
          <MenuItemRow key={`${item.name}-${index}`} item={item} diet={category.diet} showDiet={showDiet} />
        ))}
      </ul>
    </section>
  );
}
