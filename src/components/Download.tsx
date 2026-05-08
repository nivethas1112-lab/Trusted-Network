import styles from './Download.module.css';

const Download = () => {
  return (
    <section id="download" className={styles.download}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className="container">
        <div className={styles.content}>
          <div className={`${styles.textSide} reveal slide-left`}>
            <div className={styles.trustBadge}>Trusted by 5,000+ Business Owners</div>
            <h2 className={styles.title}>Start Your Trusted Business Network Today</h2>
            <p className={styles.description}>
              Connect with verified professionals, business owners, and entrepreneurs 
              across your region with our secure mobile platform.
            </p>
            
            <ul className={styles.featureList}>
              <li>
                <div className={styles.featureIcon}>✓</div>
                <span>Verified Business Profiles</span>
              </li>
              <li>
                <div className={styles.featureIcon}>✓</div>
                <span>Secure B2B Recommendations</span>
              </li>
              <li>
                <div className={styles.featureIcon}>✓</div>
                <span>Exclusive Business Chapters</span>
              </li>
            </ul>

            <div className={styles.badges}>
              <a href="#" className={styles.badgeBtn}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
              </a>
              <a href="#" className={styles.badgeBtn}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
              </a>
            </div>
          </div>
          <div className={`${styles.imageSide} reveal slide-right`}>
            <div className={styles.phoneContainer}>
              <div className={styles.phoneMockup}>
                <div className={styles.phoneInner}>
                  <img src="/app-mockup.png" alt="Trusted Network App" className={styles.appScreen} />
                </div>
                <div className={styles.phoneGlass}></div>
              </div>
              <div className={styles.phoneShadow}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
