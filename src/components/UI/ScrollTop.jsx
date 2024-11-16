// ScrollToTop.js
import { useState, useEffect } from "react";

export const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the button
  const toggleVisibility = () => {
    if (window.scrollY > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={styles.scrollToTopBtn}>
          <i className="fa-solid fa-angle-up"></i>
        </button>
      )}
    </div>
  );
};

const styles = {
  scrollToTopBtn: {
    position: "fixed",
    bottom: "10px",
    right: "15px",
    padding: "8px 11px",
    fontSize: "24px",
    backgroundColor: "crimson",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    zIndex: 1,
  },
};
