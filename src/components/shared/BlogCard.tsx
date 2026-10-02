import { Link } from "react-router";
import type { Blog } from "../../types/blog";

const BlogCard = ({
  blog,
  variant = "compact",
}: {
  blog: Blog;
  variant?: "featured" | "compact";
}) => {
  if (variant === "featured") {
    return (
      <Link
        to={`/blogs/${blog.slug}`}
        className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card h-full"
      >
        <div className="flex h-full w-full shrink min-h-58 overflow-hidden sm:h-48">
          <img
            src={blog.image}
            alt={blog.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
              {blog.title}
            </h3>
            <p className="line-clamp-3 text-sm text-muted-foreground">
              {blog.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-2 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blogs/${blog.slug}`}
      className="group flex flex-row items-stretch gap-4 rounded-xl border border-border bg-card p-3 shadow-card"
    >
      <div className="h-28 w-28 aspect-square shrink-0 overflow-hidden rounded-lg">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
        <div className="flex flex-col gap-1.5">
          <h3 className="line-clamp-1 text-base font-semibold text-card-foreground transition-colors group-hover:text-primary">
            {blog.title}
          </h3>
          <p className="line-clamp-2 text-xs text-muted-foreground">
            {blog.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-2 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
