import Image from '@/components/helpers/SiteImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogDate from '@/components/BlogDate';
import { posts } from '@/utils/blog';

export const dynamicParams = false;
export function generateStaticParams() { return posts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find(post => post.slug === slug);
  return post ? { title: `${post.title} | IEEE UCSC Blog`, description: post.description } : {};
}
export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = posts.find(post => post.slug === slug);
  if (!post) notFound();
  return (
    <main id="main-content" className="mx-auto max-w-5xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <Link href="/blog/" className="inline-block font-semibold text-primary-blue underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">← All blog posts</Link>
      <article className="mt-10 min-w-0">
        <header>
          <p className="mb-5 font-medium text-secondary-blue"><BlogDate date={post.publishedAt} /></p>
          <h1 className="text-3xl font-semibold leading-tight text-primary-blue [overflow-wrap:anywhere] sm:text-5xl">{post.title}</h1>
        </header>
        <Image src={post.image} alt={post.imageAlt} width={1200} height={1600} sizes="(max-width: 1024px) 100vw, 960px" priority className="my-10 h-auto w-full rounded-sm" />
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-secondary-blue [overflow-wrap:anywhere]">
          {post.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
      </article>
      <Link href="/blog/" className="mt-12 inline-block border-b border-primary-blue pb-1 font-semibold text-primary-blue focus-visible:outline-2 focus-visible:outline-offset-4">Back to all blog posts</Link>
    </main>
  );
}
