import { cx } from '../../lib/cx';

/**
 * Image with fixed aspect ratio, object-fit cover and optional hover zoom.
 * ratio: tailwind aspect class e.g. 'aspect-[4/5]'. radius: tailwind rounded class.
 */
export function Picture({
  src,
  alt,
  ratio = 'aspect-[4/3]',
  radius = 'rounded-lg',
  zoom = false,
  priority = false,
  position = 'object-center',
  className,
  imgClassName,
  ...rest
}) {
  return (
    <div className={cx('relative overflow-hidden bg-cream-deep', ratio, radius, zoom && 'media-zoom', className)} {...rest}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : undefined}
        className={cx('absolute inset-0 h-full w-full object-cover', position, imgClassName)}
      />
    </div>
  );
}
