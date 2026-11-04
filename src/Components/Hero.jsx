import ahmedImg from "../assets/images/ahmed.jpg";

function Hero() {
  return (
    <section className="min-h-screen pt-28 pb-16 flex items-center" id="home">
      <div className="w-[90%] max-w-[1100px] mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-12">
        <div className="w-full lg:w-[55%] text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-3">
            AHMED ISSA
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-5">
            Frontend Developer | React.js & Tailwind CSS
          </p>
          <p className="text-gray-400 text-sm sm:text-[15px] mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Frontend Developer specialized in React.js and Tailwind CSS.
            Passionate about building modern, responsive, and user-friendly web
            applications.
          </p>
          <a
            href="#contact"
            className="inline-block bg-dark-700 border border-dark-300 px-7 py-3 rounded-lg text-[15px] transition-colors duration-300 hover:bg-dark-300"
          >
            Hire Me
          </a>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100091553002278"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 border border-dark-300 rounded-full flex items-center justify-center text-gray-400 hover:bg-dark-500 hover:text-white transition-all duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/ahmedissa.webdev/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 border border-dark-300 rounded-full flex items-center justify-center text-gray-400 hover:bg-dark-500 hover:text-white transition-all duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-issa-62665b400/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 border border-dark-300 rounded-full flex items-center justify-center text-gray-400 hover:bg-dark-500 hover:text-white transition-all duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/dev-ahmedissa"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 border border-dark-300 rounded-full flex items-center justify-center text-gray-400 hover:bg-dark-500 hover:text-white transition-all duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-dark-500 shadow-[0_0_40px_rgba(255,255,255,0.08)] shrink-0">
          <img
            src={ahmedImg}
            alt="Ahmed Issa"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
