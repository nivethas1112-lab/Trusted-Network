import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.logo}>Trusted<span>Network</span></span>
            <p className={styles.tagline}>India’s Trusted Business Social Networking Platform</p>
          </div>
          
          <div className={styles.linkGroup}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#how-it-works">How It Works</Link></li>
              <li><Link href="#membership">Membership Plans</Link></li>
              <li><Link href="#events">Events</Link></li>
              <li><Link href="#blog">Blog</Link></li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
              <li><Link href="/community-guidelines">Community Guidelines</Link></li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4>Support</h4>
            <ul>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/partner">Partner With Us</Link></li>
              <li><Link href="#download">Download App</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Designed and Developed by <a href="https://www.oceansoftwares.com">Ocean Software.</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
