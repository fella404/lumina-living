import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import { Search } from "lucide-react";
import { blogs } from "../data/blogs";
import BlogCard from "../components/shared/BlogCard";
import EmptyState from "../components/shared/EmptyState";
import Button from "../components/ui/Button";

const PAGE_SIZE = 6;

const filterBlogs = (blogs, q) => {
  const query = q.trim().toLowerCase();
  if (!query) return blogs;
  return blogs.filter((blog) =>
    [blog.title, blog.subtitle, ...blog.tags]
      .join(" ")
      .toLowerCase()
      .includes(query),
  );
};

const BlogsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") ?? "";

  const filtered = useMemo(() => filterBlogs(blogs, q), [q]);

  // Pagination ikut ter-reset otomatis saat pencarian berubah.
  const [pagination, setPagination] = useState({ key: q, count: PAGE_SIZE });
  const visibleCount = pagination.key === q ? pagination.count : PAGE_SIZE;

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const hasQuery = q.trim().length > 0;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Blogs
        </h1>
        <p className="mt-2 text-muted-foreground">
          Tips, guides, and insights about property and home living.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "article" : "articles"}{" "}
          found
        </p>
        <div className="relative w-full sm:w-64 sm:flex-none">
          <Search
            size={16}
            aria-hidden
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            aria-label="Cari artikel"
            placeholder="Search articles"
            value={q}
            onChange={(event) =>
              setSearchParams(
                event.target.value ? { q: event.target.value } : {},
                { replace: true },
              )
            }
            className="w-full rounded-full border border-border bg-input py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="mt-8">
        {visible.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
            {visible.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <EmptyState
            heading="No articles match your search"
            description="Try adjusting your search to find more articles."
            canReset={hasQuery}
            resetLabel="Reset Search"
            onReset={() => setSearchParams({}, { replace: true })}
          />
        )}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <Button
            type="button"
            variant="primary"
            size="lg"
            onClick={() =>
              setPagination({ key: q, count: visibleCount + PAGE_SIZE })
            }
          >
            View More
          </Button>
        </div>
      )}
    </main>
  );
};

export default BlogsPage;
