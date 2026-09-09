import { Star } from 'lucide-react';

export function Stars({ count = 5, className }) {
  return (
    <span className={className} aria-label={`${count} out of 5 stars`} role="img">
      <span className="flex gap-0.5 text-gold" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={14} fill={index < count ? 'currentColor' : 'none'} strokeWidth={1.5} />
        ))}
      </span>
    </span>
  );
}
