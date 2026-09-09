import { journal } from '../data/pages';
import { PageHero } from '../components/ui/PageHero';
import { PostCard } from '../components/blogs/PostCard';

/** Editorial hierarchy: one feature, two medium, the rest compact in a side column. */
export function BlogsPage() {
  const [feature, ...rest] = journal.posts;
  const medium = rest.slice(0, 2);
  const compact = rest.slice(2);

  return (
    <>
      <PageHero eyebrow={journal.eyebrow} title={journal.title} text={journal.text} />
      <section className="container-site pb-section">
        <PostCard post={feature} variant="feature" data-reveal />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="grid gap-10 sm:grid-cols-2">
            {medium.map((post, index) => (
              <PostCard key={post.id} post={post} data-reveal data-reveal-delay={index * 80} />
            ))}
          </div>
          <div>
            <h2 className="font-body text-small font-semibold uppercase tracking-wide text-muted">More from the kitchen</h2>
            <div className="mt-4 border-b border-line">
              {compact.map((post, index) => (
                <PostCard key={post.id} post={post} variant="compact" data-reveal data-reveal-delay={index * 60} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
