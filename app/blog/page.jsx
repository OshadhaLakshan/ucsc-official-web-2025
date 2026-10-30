import BlogCard from '@/components/BlogCard';
import { posts } from '@/utils/blog';

export const metadata = { title: 'Blog | IEEE Student Branch of UCSC', description: 'Event highlights, ideas and stories from our UCSC IEEE community.' };

export default function BlogPage() {
  return (
    <main id="main-content" className="mx-auto min-h-screen max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <header className="mb-12 border-b border-primary-blue/25 pb-10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary-blue">Our community, in words</p>
        <h1 className="text-5xl font-semibold uppercase text-primary-blue sm:text-7xl">The Blog</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-secondary-blue">Event highlights, technical ideas, and the people who bring our branch to life.</p>
      </header>
      <div className="grid items-start gap-8 md:grid-cols-2">
        {posts.map(post => <BlogCard key={post.slug} post={post} />)}
      </div>
    </main>
  );
}
