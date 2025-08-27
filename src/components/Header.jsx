import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", route: "/about" },
    { name: "Experience", route: "/experience" },
    { name: "Projects", route: "/projects" },
    { name: "Resume", route: "/resume" },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-red-600">
        Adil Khan
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6">
        {links.map((l) => (
          <Link
            key={l.name}
            to={l.route}
            className="text-gray-300 hover:text-white transition"
          >
            {l.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-300"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-neutral-900 flex flex-col items-center py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.name}
              to={l.route}
              className="py-2 text-gray-300 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
