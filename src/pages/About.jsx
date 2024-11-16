export const About = () => {
  return (
    <>
      <div className="container">
        <div className="about-content">
          <div className="frame-container">
            <img src="/images/hero-img.webp" alt="Framed Image" />
            <div className="corner-top-right"></div>
            <div className="corner-bottom-left"></div>
          </div>
          <div className="content">
            <div className="side-heading">Know about me : </div>
            <div className="short-content">
              Hello! <span>I'm Tafseer Shaikh,</span> a passionate and dedicated
              Mehndi artist with years of experience in creating intricate,
              personalized henna designs. From traditional Indian and Arabic
              styles to contemporary and fusion designs, I aim to bring your
              mehndi vision to life with creativity and precision. Each stroke
              of my work is crafted with love, blending age-old traditions with
              modern artistry to create unique, memorable designs for every
              occasion. Whether it’s for weddings, festivals, or special events,
              I believe in making each design a celebration of individuality and
              beauty. My journey with mehndi began as a childhood fascination,
              growing into a profession where I connect deeply with my clients,
              transforming ideas into stunning, intricate patterns. Your
              satisfaction is my highest priority, and I take pride in providing
              a warm, relaxing experience for each client.
            </div>
            <div className="social-media-links">
              <h2>Connect with me : </h2>
              <a
                href="https://www.instagram.com/tafseer_mehndi_artist/?hl=en"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.snapchat.com/add/sk_taffy001"
                target="_blank"
              >
                <i className="fa-brands fa-snapchat"></i>
              </a>
              <a href="https://www.facebook.com/login/" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.x.com/login/" target="_blank">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
