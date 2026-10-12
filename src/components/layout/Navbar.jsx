import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/properties", label: "Properties" },
  { to: "/regions", label: "Regions" },
  { to: "/blogs", label: "Blogs" },
];

const linkClass = ({ isActive }) =>
  `transition-colors hover:text-primary hover:font-medium ${
    isActive
      ? "text-primary underline underline-offset-4"
      : "text-foreground/60"
  }`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background border-b border-b-border">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" aria-label="Lumina Living — beranda">
          <img src="/logo.png" alt="Lumina Living" className="h-18 w-auto" />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Menu utama"
        >
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Button to="/contact" size="md" className="hidden md:inline-flex">
          Contact Us
        </Button>

        <button
          type="button"
          className="p-2 text-foreground md:hidden"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="flex flex-col gap-4 border-t border-border bg-background px-4 py-4 md:hidden"
          aria-label="Menu mobile"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Button
            to="/contact"
            size="md"
            className="w-full"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
