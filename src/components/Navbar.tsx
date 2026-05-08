'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <img src="/logo.png" alt="Trusted Network Logo" className={styles.logoImg} />
            </Link>
          </div>

          <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>

          <div className={`${styles.navLinksContainer} ${isMenuOpen ? styles.menuActive : ''}`}>
            <ul className={styles.navLinks}>
              <li><Link href="#home" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link href="#about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li><Link href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</Link></li>
              <li><Link href="#membership" onClick={() => setIsMenuOpen(false)}>Membership Plans</Link></li>
              <li><Link href="#events" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
              <li><Link href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
              <li><Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            </ul>
            <div className={styles.cta}>
              <Link href="#download" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Download App</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
