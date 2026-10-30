import Image from 'next/image';

// Public-file URLs need the same prefix as routes on a GitHub Pages project site.
// Static imports already contain the build's asset prefix.
export default function SiteImage({ src, alt, ...props }) {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const source = typeof src === 'string' && src.startsWith('/') && !src.startsWith('//')
    ? `${prefix}${src}` : src;
  return <Image src={source} alt={alt} {...props} />;
}
