import { blogs } from "../../data/blogs";
import BlogCard from "../shared/BlogCard";
import Button from "../ui/Button";

const [featuredBlog, ...restBlogs] = blogs;

const HomeBlogs = () => (
  <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 sm:px-6">
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl font-semibold text-foreground">
          Learn about property
        </h2>
      </div>
      <Button className="hidden md:flex" variant="outline" size="sm" to="/blogs">
        View All
      </Button>
    </div>

    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="hidden lg:block lg:h-full">
        <BlogCard blog={featuredBlog} variant="featured" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="lg:hidden">
          <BlogCard blog={featuredBlog} />
        </div>
        {restBlogs.slice(0, 3).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  </section>
);

export default HomeBlogs;
