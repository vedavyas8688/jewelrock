import { home } from '../../data/content';
import { journal } from '../../data/pages';
import { PostCard } from '../blogs/PostCard';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

/** Latest three journal posts with a staggered lift-in. */
export function JournalTeaser() {
  const copy = home.journal;
  const posts = journal.posts.slice(0, 3);

  return (
    <Section tone="paper">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        text={copy.text}
        align="split"
        action={
          <Button href={copy.cta.href} variant="secondary" arrow>
            {copy.cta.label}
          </Button>
        }
      />
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} variant="medium" data-reveal data-reveal-delay={index * 90} className="lift-card" />
        ))}
      </div>
    </Section>
  );
}
