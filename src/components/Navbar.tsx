
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mainNavItems = [
    { name: "About", path: "/", color: "rust" },
    { name: "Projects", path: "/projects", color: "blue" },
    { name: "Contact", path: "/contact", color: "sage" },
  ];
  
  const secondaryNavItems = [
    { name: "CV", path: "/cv", color: "sand" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="text-rust hover:text-rust/80 transition-colors">
          <motion.h1 
            className="font-serif text-xl md:text-2xl font-medium bg-gradient-to-r from-rust to-blue bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Alisa M. Loosen, PhD
          </motion.h1>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {mainNavItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `navigation-link hover:text-${item.color} ${isActive ? `active text-${item.color}` : ""}`
                }
                end={item.path === "/"}
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}
          
          {/* Secondary Navigation Items */}
          {secondaryNavItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (mainNavItems.length + index) * 0.1 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `navigation-link text-muted-foreground text-sm hover:text-${item.color} ${isActive ? `active text-${item.color}` : ""}`
                }
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground hover:text-rust transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.nav
          className="md:hidden bg-gradient-to-b from-cream/95 to-sage/20 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `navigation-link text-lg py-2 ${isActive ? `active text-${item.color}` : ""} hover:text-${item.color}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
                end={item.path === "/"}
              >
                {item.name}
              </NavLink>
            ))}
            
            <div className="border-t border-muted my-2 pt-2">
              {secondaryNavItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `navigation-link text-muted-foreground py-2 ${isActive ? `active text-${item.color}` : ""} hover:text-${item.color}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
