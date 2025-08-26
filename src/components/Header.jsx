import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const navLinks = [
    { name: "About", to: "/about" },
    { name: "Experience", to: "/experience" },
    { name: "Projects", to: "/projects" },
    { name: "Resume", to: "/resume" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-neutral-900/90 backdrop-blur-md shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-red-600">Adil</Link>
        <nav className="space-x-6 hidden md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-red-500 transition ${
                  isActive ? "text-red-500" : "text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
