import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={`${styles.content} animate-fade-in`}>
<h1 className={styles.title}>
  India’s Trusted Business Social Networking Platform
</h1>
          <p className={styles.description}>
            Connect with verified business owners, build meaningful relationships, 
            exchange recommendations, and grow your professional network through 
            a trusted business community.
          </p>
          <div className={styles.actions}>
            <button className="btn btn-primary">Join TN</button>
            <button className="btn btn-outline">Download App</button>
            <button className={`${styles.btnGhost} btn`}>Start Free Trial</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
