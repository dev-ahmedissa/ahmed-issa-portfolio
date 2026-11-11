import { useState, useEffect } from "react";

function Hero() {
  const roles = [
    "Frontend Developer",
    "React Engineer",
    "UI Developer",
    "Web Developer",
  ];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === current.length) {
          setIsDeleting(true);
        }
      }, charIndex + 1 === current.length ? 1800 : 80);
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }, 45);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      className="py-16 sm:py-20 md:py-24 min-h-[85vh] flex items-center"
      id="home"
    >
      <div className="w-[90%] max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-dark-800 border border-dark-500 px-3.5 py-1.5 rounded-full text-[13px] text-gray-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold leading-tight mb-2">
            Hi! I'm <span className="text-gray-400">Ahmed</span>
            <br />
            Issa
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-[28px] text-gray-500 font-medium mb-5 min-h-[36px] sm:min-h-[40px]">
            <span>{text}</span>
            <span className="inline-block w-[2px] h-[1em] bg-gray-500 ml-0.5 align-middle animate-pulse"></span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-[15px] max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
            Crafting beautiful, responsive web applications with modern
            front-end technologies. Passionate about clean code, elegant UI, and
            delightful user experiences.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href="#projects"
              className="bg-[#e8e8e8] text-[#111] px-6 py-3 rounded-full text-sm font-semibold hover:bg-white transition-colors duration-300"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="border border-dark-500 text-gray-400 px-6 py-3 rounded-full text-sm hover:border-dark-300 hover:text-white transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="bg-dark-900 border border-dark-500 rounded-2xl overflow-hidden relative max-w-md mx-auto lg:max-w-none">
            <div className="bg-dark-800 px-4 py-3 flex items-center gap-2 border-b border-dark-500">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
              <span className="ml-2.5 text-xs text-gray-500">ahmed.jsx</span>
            </div>
            <div className="p-5 sm:p-6">
              <pre className="font-mono text-[12px] sm:text-[13.5px] leading-relaxed text-gray-300 overflow-x-auto">
                <code>
                  <span className="text-[#c678dd]">const</span>{" "}
                  <span className="text-[#61afef]">developer</span> = {"{"}
                  {"\n"}
                  {"  "}
                  <span className="text-[#e5c07b]">name</span>:{" "}
                  <span className="text-[#98c379]">"Ahmed Issa"</span>,{"\n"}
                  {"  "}
                  <span className="text-[#e5c07b]">role</span>:{" "}
                  <span className="text-[#98c379]">"Frontend Developer"</span>,
                  {"\n"}
                  {"  "}
                  <span className="text-[#e5c07b]">stack</span>: [{"\n"}
                  {"    "}
                  <span className="text-[#98c379]">"HTML"</span>,{" "}
                  <span className="text-[#98c379]">"CSS"</span>,{"\n"}
                  {"    "}
                  <span className="text-[#98c379]">"JavaScript"</span>,{" "}
                  <span className="text-[#98c379]">"React"</span>,{"\n"}
                  {"    "}
                  <span className="text-[#98c379]">"Tailwind"</span>
                  {"\n"}
                  {"  "}]{"\n"}
                  {"}"};{"\n\n"}
                  <span className="text-gray-500">&gt; ready_to_build()</span>
                </code>
              </pre>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <span className="bg-dark-800 border border-dark-500 px-3 py-1 rounded-full text-[11px] text-gray-500">
                React Dev
              </span>
              <span className="bg-dark-800 border border-dark-500 px-3 py-1 rounded-full text-[11px] text-gray-500">
                UI / UX
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
