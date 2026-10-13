import { Link, useParams } from "react-router";
import { ArrowLeft, CalendarDays, Clock, UserRound } from "lucide-react";
import { blogs } from "../data/blogs";
import BlogCard from "../components/shared/BlogCard";
import Button from "../components/ui/Button";

const ContentBlock = ({ block }) => {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-10 text-xl font-semibold text-foreground sm:text-2xl">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-primary pl-5 text-lg italic text-justify text-muted-foreground">
          {block.text}
        </blockquote>
      );
    default:
      return (
        <p className="text-justify leading-relaxed text-muted-foreground">
          {block.text}
        </p>
      );
  }
};

const BlogDetailPage = () => {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-4 py-12 text-center sm:px-6">
        <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Artikel tidak ditemukan
        </h1>
        <p className="mt-2 text-muted-foreground">
          Artikel yang Anda cari tidak ada atau sudah dihapus.
        </p>
        <Button to="/blogs" variant="primary" size="lg" className="mt-6">
          <ArrowLeft size={16} aria-hidden />
          Kembali ke Blogs
        </Button>
      </main>
    );
  }

  const more = blogs.filter((item) => item.id !== blog.id).slice(0, 2);

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <Link
        to="/blogs"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} aria-hidden />
        All Blogs
      </Link>

      <article className="mx-auto mt-6 max-w-3xl">
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-2 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
          {blog.title}
        </h1>
        <p className="mt-3 text-muted-foreground">{blog.subtitle}</p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <UserRound size={16} aria-hidden />
            {blog.author}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays size={16} aria-hidden />
            {blog.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={16} aria-hidden />
            {blog.readTime}
          </span>
        </div>
      </article>

      <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-xl border border-border shadow-card">
        <img
          src={blog.image}
          alt={blog.title}
          loading="eager"
          className="aspect-[16/9] w-full object-cover"
        />
      </div>

      <div className="mx-auto mt-8 max-w-3xl space-y-5">
        {blog.content.map((block, index) => (
          <ContentBlock key={index} block={block} />
        ))}
      </div>

      {more.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            More Articles
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {more.map((item) => (
              <BlogCard key={item.id} blog={item} variant="featured" />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogDetailPage;