import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import navigation from "../data/navigation";
import siteConfig from "../data/siteConfig";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" className="text-2xl font-bold tracking-wide">
          <span className="text-blue-500">{siteConfig.firstName}</span>
          <span className="text-white">.</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className="text-slate-300 transition-colors duration-300 hover:text-blue-500"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 text-slate-300 transition hover:bg-slate-900 hover:text-blue-500"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
