import { blogs } from "../../data/blogs";
import BlogCard from "../shared/BlogCard";
import Button from "../ui/Button";

const HomeBlogs = () => {
  const homeBlogs = blogs.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-foreground">
            Learn about property
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tips, guides, and insights to help you make smarter property decisions.
          </p>
        </div>
        <Button className="hidden md:flex" variant="outline" size="sm" to="/blogs">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {homeBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="primary" size="lg" to="/blogs">
          View More
        </Button>
      </div>
    </section>
  );
};

export default HomeBlogs;
