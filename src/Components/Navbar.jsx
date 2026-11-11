import { useState, useEffect } from "react";

function Navbar({ isLight, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120;
        if (window.pageYOffset >= top) {
          current = sec.getAttribute("id");
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-dark-950/95 backdrop-blur-sm border-b border-dark-500">
      <div className="w-[90%] max-w-[1150px] mx-auto flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2 font-semibold text-base">
          <span className="w-2 h-2 rounded-full bg-gray-500"></span>
          Portfolio
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm transition-colors duration-300 ${
                active === link.id ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ahmed-issa-62665b400/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-[15px]"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/dev-ahmedissa"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-[15px]"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/ahmedissa.webdev/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-[15px]"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100091553002278"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-[15px]"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="text-gray-300 text-lg p-1"
            aria-label="Toggle theme"
          >
            <i className={isLight ? "fas fa-moon" : "fas fa-sun"}></i>
          </button>

          <a
            href="#contact"
            className="bg-dark-500 text-white px-4 py-2 rounded-full text-[13px] border border-dark-500 hover:bg-dark-400 transition-colors duration-300"
          >
            Let's Connect
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="text-gray-300 text-lg p-1"
            aria-label="Toggle theme"
          >
            <i className={isLight ? "fas fa-moon" : "fas fa-sun"}></i>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 text-xl p-1"
            aria-label="Toggle menu"
          >
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-dark-500 bg-dark-950">
          <div className="w-[90%] max-w-[1150px] mx-auto flex flex-col py-4 gap-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMenu}
                className="text-sm text-gray-400 hover:text-white py-2.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 bg-dark-500 text-white px-4 py-2 rounded-full text-[13px] border border-dark-500 text-center"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
