import { useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName === "" || lastName === "" || email === "" || message === "") {
      alert("Please fill all required fields");
      return;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      alert("Please enter a valid email");
      return;
    }

    alert("Thank you " + firstName + "! Your message has been sent.");
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-16 sm:py-20 bg-dark-900" id="contact">
      <div className="w-[90%] max-w-[1150px] mx-auto">
        <p className="text-center text-xs text-gray-500 tracking-[2px] mb-2.5">
          GET IN TOUCH
        </p>
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-3">
          Contact Me
        </h2>
        <p className="text-center text-gray-400 text-sm max-w-md mx-auto mb-10">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="text-lg font-medium mb-4">Let's talk</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <a
              href="mailto:ahmednashatissa@gmail.com"
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors mb-4"
            >
              <i className="fas fa-envelope"></i>
              ahmednashatissa@gmail.com
            </a>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/in/ahmed-issa-62665b400/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-dark-500 rounded-full flex items-center justify-center text-gray-400 hover:border-dark-300 hover:text-white transition-all"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/dev-ahmedissa"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-dark-500 rounded-full flex items-center justify-center text-gray-400 hover:border-dark-300 hover:text-white transition-all"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/ahmedissa.webdev/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-dark-500 rounded-full flex items-center justify-center text-gray-400 hover:border-dark-300 hover:text-white transition-all"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100091553002278"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-dark-500 rounded-full flex items-center justify-center text-gray-400 hover:border-dark-300 hover:text-white transition-all"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-dark-900 border border-dark-500 rounded-xl px-3.5 py-3 text-[13px] text-[#f0f0f0] outline-none focus:border-dark-300 transition-colors placeholder:text-gray-600"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-dark-900 border border-dark-500 rounded-xl px-3.5 py-3 text-[13px] text-[#f0f0f0] outline-none focus:border-dark-300 transition-colors placeholder:text-gray-600"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-dark-900 border border-dark-500 rounded-xl px-3.5 py-3 text-[13px] text-[#f0f0f0] outline-none focus:border-dark-300 transition-colors placeholder:text-gray-600 mb-3"
              />
              <textarea
                placeholder="Your message..."
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-dark-900 border border-dark-500 rounded-xl px-3.5 py-3 text-[13px] text-[#f0f0f0] outline-none focus:border-dark-300 transition-colors placeholder:text-gray-600 resize-y mb-4"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#e8e8e8] text-[#111] py-3 rounded-xl text-sm font-semibold hover:bg-white transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
