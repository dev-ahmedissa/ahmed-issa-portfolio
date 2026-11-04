function Contact() {
  return (
    <section className="py-10 pb-16" id="contact">
      <div className="w-[90%] max-w-[1100px] mx-auto">
        <h2 className="text-2xl sm:text-[28px] font-semibold mb-8">
          Contact Me
        </h2>
        <div className="flex flex-col items-start gap-6">
          <a
            href="mailto:ahmednashatissa@gmail.com"
            className="flex items-center gap-3 bg-dark-800 px-6 py-3.5 rounded-xl text-[15px] text-gray-400 hover:bg-dark-600 hover:text-white transition-colors duration-300"
          >
            <i className="fas fa-envelope text-lg"></i>
            ahmednashatissa@gmail.com
          </a>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/ahmed-issa-62665b400/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 bg-dark-800 rounded-xl flex items-center justify-center text-gray-400 text-lg hover:bg-dark-500 hover:text-white transition-all duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/dev-ahmedissa"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 bg-dark-800 rounded-xl flex items-center justify-center text-gray-400 text-lg hover:bg-dark-500 hover:text-white transition-all duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100091553002278"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 bg-dark-800 rounded-xl flex items-center justify-center text-gray-400 text-lg hover:bg-dark-500 hover:text-white transition-all duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/ahmedissa.webdev/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 bg-dark-800 rounded-xl flex items-center justify-center text-gray-400 text-lg hover:bg-dark-500 hover:text-white transition-all duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
