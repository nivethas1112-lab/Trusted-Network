'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Stats.module.css';

interface CounterProps {
  value: string;
}

const Counter = ({ value }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Parse prefix, target number, and suffix
  // Examples: "5,000+", "50+", "₹100Cr+", "25,000+"
  const numberMatch = value.match(/(\d+[,.]?\d*)/);
  const target = numberMatch ? parseFloat(numberMatch[0].replace(/,/g, '')) : 0;
  const prefix = value.split(numberMatch ? numberMatch[0] : '')[0] || '';
  const suffix = value.split(numberMatch ? numberMatch[0] : '')[1] || '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentCount = Math.floor(easeProgress * target);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return (
    <div ref={elementRef} className={styles.value}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const Stats = () => {
  const stats = [
    { label: "Verified Members", value: "5,000+" },
    { label: "Business Chapters", value: "50+" },
    { label: "Business Generated", value: "₹100Cr+" },
    { label: "Successful Referrals", value: "25,000+" }
  ];

  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`${styles.statItem} reveal slide-up`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Counter value={stat.value} />
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

