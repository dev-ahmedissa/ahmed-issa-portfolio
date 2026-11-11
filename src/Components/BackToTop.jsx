import { useState, useEffect } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.pageYOffset > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      id="backToTop"
      onClick={() => window.scrollTo(0, 0)}
      className="fixed bottom-6 right-6 w-11 h-11 bg-dark-800 border border-dark-500 text-white rounded-full z-[99] text-[15px] cursor-pointer hover:bg-dark-600 transition-colors"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

export default BackToTop;
