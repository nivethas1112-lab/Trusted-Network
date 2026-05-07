import styles from './Download.module.css';

const Download = () => {
  return (
    <section id="download" className={styles.download}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textSide}>
            <h2 className={styles.title}>Start Your Trusted Business Network Today</h2>
            <p className={styles.description}>
              Download the TN mobile app and connect with verified professionals, 
              business owners, and entrepreneurs across your region.
            </p>
            <div className={styles.badges}>
              <a href="#" className={styles.badgeBtn}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
              </a>
              <a href="#" className={styles.badgeBtn}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
              </a>
            </div>
          </div>
          <div className={styles.imageSide}>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneInner}>
                <img src="/app-mockup.png" alt="Trusted Network App" className={styles.appScreen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
