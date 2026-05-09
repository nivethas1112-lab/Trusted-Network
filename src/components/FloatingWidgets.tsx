'use client';
import { useState, useEffect } from 'react';
import styles from './FloatingWidgets.module.css';

const FloatingWidgets = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [showChat, setShowChat] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      {/* Scroll to Top Button */}
      <button 
        className={`${styles.scrollTop} ${showScroll ? styles.visible : ''}`} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>

      {/* Chat Widget */}
      {showChat && (
        <div className={styles.chatWidget}>
          <button 
            className={styles.closeBtn} 
            onClick={() => setShowChat(false)}
            aria-label="Close chat widget"
          >
            &times;
          </button>
          
          <div className={styles.chatContainer}>
            {/* Waving Hand */}
            <div className={styles.wavingHand}>
              👋
              <span className={styles.motionLines}></span>
            </div>

            {/* Curved Text SVG */}
            <div className={styles.curvedTextContainer}>
              <svg viewBox="0 0 140 140" className={styles.curvedTextSvg}>
                <path id="curve" d="M 15 95 A 55 55 0 0 1 125 95" fill="transparent" />
                <text className={styles.curvedText}>
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    We Are Here!
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Main Chat Button */}
            <div className={styles.chatButton}>
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.chatIcon}>
                <path d="M20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0589 2 20C2 23.3642 2.92318 26.5126 4.54464 29.2136L3 37L10.7864 35.4554C13.4874 37.0768 16.6358 38 20 38Z" fill="white"/>
              </svg>
              
              {/* Notification Badge */}
              <div className={styles.badge}>1</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingWidgets;
