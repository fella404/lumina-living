You are given a task to refactor an existing React component in the codebase: `src/components/shared/BlogCard.jsx`

The codebase supports:
- React 19 with JavaScript (JSX) — **do NOT use TypeScript**
- Tailwind CSS v4 (configured via `@tailwindcss/vite`, tokens in `src/index.css`)
- Custom UI components without shadcn/ui — custom Button is available at `src/components/ui/Button.jsx`
- Helper `cn()` available at `src/lib/utils.js`
- React Router (`react-router`) for navigation

**Do NOT:**
- Setup shadcn CLI or add `@/components/ui/badge` or `@/components/ui/button`
- Convert the project to TypeScript or use `.tsx` files
- Install `class-variance-authority` or `@radix-ui/react-slot`
- Use image carousels or image sliders (blog articles have single images)

---

## Design Tokens & Styling Rules (from `src/index.css`)

Always use the project's existing theme tokens:
- Background: `bg-background` (`#f9fafb`)
- Foreground: `text-foreground` (`#111827`)
- Card: `bg-card`, `text-card-foreground`
- Muted: `text-muted-foreground` (`#6b7280`)
- Border: `border-border` (`#f3f4f6`)
- Primary: `bg-primary` (`#384252`), `text-primary-foreground` (`#f9fafb`)
- Card Shadow: `shadow-card` (or hover shadow with `rgba(17, 24, 39, 0.1)`)
- Rounded: `rounded-2xl` for the card container, `rounded-full` for chips and buttons

---

## Target Component to Refactor: `src/components/shared/BlogCard.jsx`

```jsx
import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router";
import { cn } from "../../lib/utils";
import Button from "../ui/Button";

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export const BlogCard = ({ blog, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={contentVariants}
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 10px 30px -5px rgba(17, 24, 39, 0.1)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className={cn(
        "group/card flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-card",
        className,
      )}
    >
      {/* Image Header with Hover Zoom */}
      <div className="relative h-56 w-full overflow-hidden sm:h-60">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
        />

        {/* Top Badges (Tags) */}
        <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-1.5">
          {blog.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-border/60 bg-background/85 px-2.5 py-0.5 text-xs font-medium text-foreground backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Top Right Badge (Reading Time) */}
        {blog.readTime && (
          <div className="absolute right-3 top-3 z-10">
            <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/85 px-2.5 py-0.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <Clock size={12} aria-hidden />
              {blog.readTime}
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <motion.div
        variants={contentVariants}
        className="flex flex-1 flex-col justify-between p-5 space-y-4"
      >
        <div className="space-y-2.5">
          <motion.div variants={itemVariants}>
            <Link
              to={`/blogs/${blog.slug}`}
              className="transition-colors group-hover/card:text-primary"
            >
              <h3 className="line-clamp-2 text-lg font-bold text-foreground sm:text-xl">
                {blog.title}
              </h3>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-xs text-muted-foreground sm:text-sm"
          >
            <span>{blog.date}</span> &bull; <span>{blog.author}</span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="line-clamp-3 text-sm leading-relaxed text-muted-foreground"
          >
            {blog.subtitle}
          </motion.p>
        </div>

        {/* Bottom CTA Row */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between border-t border-border pt-3"
        >
          <span className="text-xs font-medium text-muted-foreground">
            By {blog.author}
          </span>
          <Button
            to={`/blogs/${blog.slug}`}
            variant="primary"
            size="sm"
            className="group/btn"
          >
            Read Article
            <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BlogCard;
```

---

## Required NPM Dependency

```bash
npm install framer-motion
```
