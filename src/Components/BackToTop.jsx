import { useState, useEffect } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  if (!show) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-11 h-11 bg-dark-700 border border-dark-300 text-white rounded-full z-[99] text-base cursor-pointer hover:bg-dark-500 transition-colors"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

export default BackToTop;
