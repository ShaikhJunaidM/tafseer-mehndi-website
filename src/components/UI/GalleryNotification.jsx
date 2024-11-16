import { useState, useEffect } from "react";

const GalleryNotification = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Set a timer to show the message after 10 seconds
    const timer = setTimeout(() => setShowMessage(true), 7000);

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  const handleClose = () => {
    setShowMessage(false); // Manually hide the message
  };

  return (
    showMessage && (
      <div style={styles.notification}>
        <p style={styles.text}>
          Want to see the latest designs? Check out on instagram -{" "}
          <a
            href="https://www.instagram.com/tafseer_mehndi_artist/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            @tafseer_mehndi_artist
          </a>
        </p>
        <button onClick={handleClose} style={styles.closeButton}>
          ✖
        </button>
      </div>
    )
  );
};

const styles = {
  notification: {
    position: "fixed",
    bottom: "20px",
    right: "5px",
    backgroundColor: "#fff",
    color: "crimson",
    fontFamily: "var(--content-font-family)",
    fontWeight: "500",
    padding: "10px ",
    border: "1px solid gray",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  text: {
    margin: 0,
    fontSize: "14px",
    flexGrow: 1,
    letterSpacing: "1px",
  },
  link: {
    color: "crimson",
    textDecoration: "none",
    fontWeight: "800",
    fontSize: "1.1rem",
    padding: "0 2px",
  },
  closeButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "crimson",
    fontSize: "2rem",
    cursor: "pointer",
    padding: "5px",
    marginLeft: "10px",
  },
};

export default GalleryNotification;
