function Footer() {
  return (
    <footer>
      <div className="bg-dark-900 border-t border-b border-dark-500 py-7">
        <div className="w-[90%] max-w-[1150px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-5 text-center sm:text-left">
          <div>
            <h4 className="text-base font-medium mb-1">Stay Updated</h4>
            <p className="text-[13px] text-gray-400">
              Subscribe to see my latest projects & articles.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-dark-900 border border-dark-500 rounded-full px-4 py-2.5 text-[13px] text-[#f0f0f0] outline-none focus:border-dark-300 w-full sm:w-56 placeholder:text-gray-600"
            />
            <button className="bg-[#e8e8e8] text-[#111] px-5 py-2.5 rounded-full text-[13px] font-semibold hover:bg-white transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="py-10 sm:py-12">
        <div className="w-[90%] max-w-[1150px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-8 sm:gap-10">
          <div>
            <div className="flex items-center gap-2 font-semibold text-base mb-3">
              <span className="w-2 h-2 rounded-full bg-gray-500"></span>
              Portfolio
            </div>
            <p className="text-[13px] text-gray-400 mb-4 leading-relaxed max-w-xs">
              Frontend Developer building beautiful, responsive web experiences
              with modern front-end technologies.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/ahmed-issa-62665b400/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-dark-500 rounded-full flex items-center justify-center text-gray-400 text-sm hover:border-dark-300 hover:text-white transition-all"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100091553002278"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-dark-500 rounded-full flex items-center justify-center text-gray-400 text-sm hover:border-dark-300 hover:text-white transition-all"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/ahmedissa.webdev/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-dark-500 rounded-full flex items-center justify-center text-gray-400 text-sm hover:border-dark-300 hover:text-white transition-all"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://github.com/dev-ahmedissa"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-dark-500 rounded-full flex items-center justify-center text-gray-400 text-sm hover:border-dark-300 hover:text-white transition-all"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-medium mb-4">Navigation</h5>
            <a
              href="#home"
              className="block text-[13px] text-gray-400 mb-2.5 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#skills"
              className="block text-[13px] text-gray-400 mb-2.5 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block text-[13px] text-gray-400 mb-2.5 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block text-[13px] text-gray-400 mb-2.5 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          <div>
            <h5 className="text-sm font-medium mb-4">What I Do</h5>
            <span className="block text-[13px] text-gray-400 mb-2.5">
              Front-End Development
            </span>
            <span className="block text-[13px] text-gray-400 mb-2.5">
              Responsive Web Design
            </span>
            <span className="block text-[13px] text-gray-400 mb-2.5">
              React & Tailwind Projects
            </span>
            <span className="block text-[13px] text-gray-400 mb-2.5">
              UI / UX Implementation
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-500 py-4">
        <div className="w-[90%] max-w-[1150px] mx-auto text-center">
          <p className="text-xs text-gray-600">
            © 2026 Ahmed Issa – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
