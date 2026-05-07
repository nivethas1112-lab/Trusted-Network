'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <Link href="/">
              <img src="/logo.png" alt="Trusted Network Logo" className={styles.logoImg} />
            </Link>
          </div>
          <ul className={styles.navLinks}>
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#how-it-works">How It Works</Link></li>
            <li><Link href="#membership">Membership Plans</Link></li>
            <li><Link href="#events">Events</Link></li>
            <li><Link href="#blog">Blog</Link></li>
            <li><Link href="#contact">Contact Us</Link></li>
          </ul>
          <div className={styles.cta}>
            <Link href="#download" className="btn btn-primary">Download App</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
