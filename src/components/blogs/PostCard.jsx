import { ArrowRight } from 'lucide-react';
import { images } from '../../data/images';
import { Picture } from '../ui/Picture';
import { cx } from '../../lib/cx';

export const postHref = (post) => `/blog/${post.id}/${post.slug}`;

export function PostMeta({ post, light = false, className }) {
  return (
    <p className={cx('flex flex-wrap items-center gap-x-2 text-caption', light ? 'text-cream/65' : 'text-muted', className)}>
      <span className={light ? 'text-gold-light' : 'text-gold'}>{post.category}</span>
      <span aria-hidden="true">·</span>
      <span>{post.date}</span>
      <span aria-hidden="true">·</span>
      <span>{post.readTime}</span>
    </p>
  );
}

/**
 * variant: 'feature' (large image, big title) | 'medium' (image + copy stacked) | 'compact' (thumb + title row)
 */
export function PostCard({ post, variant = 'medium', className, ...rest }) {
  const href = postHref(post);

  if (variant === 'feature') {
    return (
      <article className={cx('group grid overflow-hidden rounded-xl bg-paper shadow-soft lg:grid-cols-[1.3fr_1fr]', className)} {...rest}>
        <a href={href} className="block" aria-hidden="true" tabIndex={-1}>
          <Picture src={images[post.image]} alt="" ratio="aspect-[16/10] lg:aspect-auto lg:h-full" radius="rounded-none" zoom />
        </a>
        <div className="flex flex-col p-8 lg:p-10">
          <PostMeta post={post} />
          <h2 className="mt-4 text-display-md">
            <a href={href} className="hover:text-forest-soft">
              {post.title}
            </a>
          </h2>
          <p className="mt-4 text-body text-muted">{post.excerpt}</p>
          <p className="mt-auto flex items-center justify-between gap-4 pt-8 text-small">
            <span className="text-muted">By {post.author}</span>
            <a href={href} className="inline-flex items-center gap-2 font-medium text-forest">
              Read <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </p>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className={cx('group flex gap-5 border-t border-line py-5', className)} {...rest}>
        <a href={href} className="w-24 shrink-0 sm:w-28" aria-hidden="true" tabIndex={-1}>
          <Picture src={images[post.image]} alt="" ratio="aspect-square" radius="rounded-md" zoom />
        </a>
        <div className="min-w-0">
          <PostMeta post={post} />
          <h3 className="mt-2 text-display-sm">
            <a href={href} className="hover:text-forest-soft">
              {post.title}
            </a>
          </h3>
          <p className="mt-2 line-clamp-2 text-small text-muted">{post.excerpt}</p>
        </div>
      </article>
    );
  }

  return (
    <article className={cx('group', className)} {...rest}>
      <a href={href} aria-hidden="true" tabIndex={-1}>
        <Picture src={images[post.image]} alt="" ratio="aspect-[4/3]" radius="rounded-lg" zoom />
      </a>
      <PostMeta post={post} className="mt-5" />
      <h3 className="mt-3 text-display-sm">
        <a href={href} className="hover:text-forest-soft">
          {post.title}
        </a>
      </h3>
      <p className="mt-3 text-small text-muted">{post.excerpt}</p>
    </article>
  );
}
