import styles from './Stats.module.css';

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
            <div key={index} className={styles.statItem}>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
