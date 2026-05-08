import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Side: Text Content */}
          <div className={`${styles.textContent} reveal slide-left`}>
            <p className={styles.kicker}>INDIA'S TRUSTED BUSINESS SOCIAL NETWORKING PLATFORM</p>
            <h2 className={styles.title}>
              <span>ABOUT</span> TRUSTED NETWORK
            </h2>
            <p className={styles.description}>
              At Trusted Network (TN), we bring together a dynamic community of business leaders, entrepreneurs, and professionals from diverse industries. Our mission is to foster meaningful connections, share valuable insights, and fuel personal and professional growth to drive sustainable business success.
            </p>
            
            <ul className={styles.featureList}>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Connect with like-minded achievers
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Collaborate on real opportunities
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Grow your professional network
              </li>
            </ul>

            <button className={styles.readMoreBtn}>
              Read More 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>

          {/* Right Side: Image and Video Player */}
          <div className={`${styles.imageContent} reveal slide-right`}>
            <div className={styles.imageWrapper}>
              <img src="/about-handshake.png" alt="Trusted Network Community" className={styles.mainImage} />
              
              <div className={styles.videoOverlay}>
                <div className={styles.playButton}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <div className={styles.videoLabel}>
                  GRAND LAUNCHING VIDEO - ITC CHOLA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
