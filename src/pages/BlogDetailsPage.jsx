import { ArrowLeft } from 'lucide-react';
import { journal } from '../data/pages';
import { images } from '../data/images';
import { Button } from '../components/ui/Button';
import { Picture } from '../components/ui/Picture';
import { PostCard, PostMeta } from '../components/blogs/PostCard';

function findPost() {
  const [, , id, slug] = window.location.pathname.split('/');
  return journal.posts.find((post) => String(post.id) === id) || journal.posts.find((post) => post.slug === (slug || id));
}

export function BlogDetailsPage() {
  const post = findPost();

  if (!post) {
    return (
      <section className="container-site py-section text-center">
        <h1 className="text-display-lg">Story not found</h1>
        <p className="mt-4 text-muted">That link may have moved. The journal is still here.</p>
        <Button href="/blogs" className="mt-8" variant="secondary">
          Back to journal
        </Button>
      </section>
    );
  }

  const related = journal.posts.filter((item) => item.id !== post.id).slice(0, 3);

  return (
    <>
      <article>
        <header className="container-site pt-10 md:pt-14">
          <a href="/blogs" className="inline-flex items-center gap-2 text-small text-muted hover:text-forest">
            <ArrowLeft size={15} aria-hidden="true" /> Journal
          </a>
          <div className="hero-in mx-auto mt-8 max-w-3xl text-center">
            <PostMeta post={post} className="justify-center" />
            <h1 className="mt-5 text-display-xl">{post.title}</h1>
            <p className="mt-6 text-lede text-muted">{post.excerpt}</p>
            <p className="mt-6 text-small text-muted">By {post.author}</p>
          </div>
          <Picture src={images[post.image]} alt={post.title} ratio="aspect-[16/9] md:aspect-[21/9]" radius="rounded-[var(--radius-xl)]" className="mt-12" priority />
        </header>

        <div className="container-site grid gap-12 py-section-tight lg:grid-cols-[1fr_300px] lg:gap-20">
          <div className="max-w-prose space-y-10">
            {post.content.map((block) => (
              <section key={block.heading}>
                <h2 className="text-display-md">{block.heading}</h2>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-lede text-ink/85">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <aside className="lg:sticky lg:top-[calc(var(--spacing-header)+2rem)] lg:self-start">
            <div className="rounded-lg bg-cream-deep p-6">
              <h2 className="font-body text-small font-semibold text-forest">{post.sidebar.title}</h2>
              <ul className="mt-4 space-y-2 text-small text-ink/80">
                {post.sidebar.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-pill bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Button href="/reservations" className="mt-6 w-full" arrow>
              Book a table
            </Button>
          </aside>
        </div>
      </article>

      <section className="bg-paper py-section-tight">
        <div className="container-site">
          <h2 className="text-display-md">Keep reading</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {related.map((item) => (
              <PostCard key={item.id} post={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
