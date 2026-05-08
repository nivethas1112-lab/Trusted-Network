import styles from './Membership.module.css';

const Membership = () => {
  const plans = [
    {
      name: "Startup Plan",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13 0-2.97a2.1 2.1 0 0 0-3 0Z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
          <path d="M9 12H4s.5-1 1-4c1.5 0 3 .5 3 .5L9 12Z" />
          <path d="M12 15v5s1 .5 4 1c0-1.5-.5-3-.5-3L12 15Z" />
        </svg>
      ),
      desc: "Ideal for new entrepreneurs and small businesses.",
      features: [
        "Limited profile connections",
        "Limited activity posts",
        "Basic networking access",
        "Trial access included"
      ],
      popular: false
    },
    {
      name: "Advanced Plan",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      desc: "Designed for growing businesses seeking visibility.",
      features: [
        "Increased networking limits",
        "More daily activity access",
        "Higher profile reach",
        "Better visibility inside the platform"
      ],
      popular: true
    },
    {
      name: "Business Plan",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      desc: "Perfect for serious business professionals.",
      features: [
        "Maximum networking access",
        "Premium visibility",
        "Advanced recommendation features",
        "Full business networking benefits"
      ],
      popular: false
    }
  ];

  return (
    <section id="membership" className={styles.membership}>
      <div className="container">
        <h2 className="section-title">Membership Plans</h2>
        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div key={index} className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}>
              {plan.popular && <div className={styles.badge}>Most Popular</div>}
              <div className={styles.iconWrapper}>{plan.icon}</div>
              <h3>{plan.name}</h3>
              <p className={styles.planDesc}>{plan.desc}</p>
              <ul className={styles.featureList}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>
                    <div className={styles.checkIcon}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} ${styles.planBtn}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
