/** Brand glyphs (lucide dropped brand icons). Minimal 24px strokes matching lucide's style. */
const paths = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8z" />,
  youtube: (
    <>
      <path d="M2.5 12c0-3 .3-4.6.8-5.4A2.6 2.6 0 0 1 5 5.4C6.6 5.1 12 5 12 5s5.4.1 7 .4a2.6 2.6 0 0 1 1.7 1.2c.5.8.8 2.4.8 5.4s-.3 4.6-.8 5.4a2.6 2.6 0 0 1-1.7 1.2c-1.6.3-7 .4-7 .4s-5.4-.1-7-.4a2.6 2.6 0 0 1-1.7-1.2c-.5-.8-.8-2.4-.8-5.4z" />
      <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" />
    </>
  ),
};

export function SocialIcon({ name, size = 16, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {paths[name]}
    </svg>
  );
}
