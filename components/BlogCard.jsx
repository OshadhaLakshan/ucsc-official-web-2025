import Image from '@/components/helpers/SiteImage';
import Link from 'next/link';
import BlogDate from './BlogDate';

export default function BlogCard({ post }) {
  return (
    <article className="min-w-0 overflow-hidden rounded-sm border border-secondary-blue/20 bg-primary-white">
      <Link href={`/blog/${post.slug}/`} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-blue" aria-label={`Read ${post.title}`}>
        <Image src={post.image} alt={post.imageAlt} width={1200} height={1600}
          sizes="(max-width: 768px) 100vw, 50vw" className="aspect-[3/2] w-full object-cover" />
      </Link>
      <div className="p-6 sm:p-8">
        <p className="mb-3 text-sm font-medium text-secondary-blue"><BlogDate date={post.publishedAt} /></p>
        <h2 className="text-2xl font-semibold leading-tight text-primary-blue [overflow-wrap:anywhere] sm:text-3xl">
          <Link href={`/blog/${post.slug}/`} className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">{post.title}</Link>
        </h2>
        <p className="mt-4 leading-relaxed text-secondary-blue">{post.description}</p>
        <Link href={`/blog/${post.slug}/`} className="mt-6 inline-block border-b border-primary-blue pb-1 font-semibold text-primary-blue focus-visible:outline-2 focus-visible:outline-offset-4">Read full article <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
