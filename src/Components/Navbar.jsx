import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        if (window.pageYOffset >= top && window.pageYOffset < top + height) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-5 transition-all duration-300 ${
        scrolled
          ? "bg-dark-900/98 border-b border-dark-300"
          : "bg-dark-900/90 backdrop-blur-sm"
      }`}
    >
      <div className="w-[90%] max-w-[1100px] mx-auto flex justify-between items-center">
        <a
          href="#"
          className="bg-dark-700 border border-dark-300 px-5 py-2.5 rounded-full text-sm transition-colors duration-300 hover:bg-dark-300"
        >
          Download Resume
        </a>

        <nav className="hidden sm:flex bg-dark-700 border border-dark-300 rounded-full px-5 py-2 gap-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm transition-colors duration-300 ${
                activeSection === link.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          className="sm:hidden text-gray-300 text-xl"
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>

      {menuOpen && (
        <nav className="sm:hidden bg-dark-800 border-t border-dark-700 mt-4">
          <div className="w-[90%] max-w-[1100px] mx-auto flex flex-col py-4 gap-3">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMenu}
                className="text-sm text-gray-400 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
