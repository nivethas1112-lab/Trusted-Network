import styles from './Membership.module.css';

const Membership = () => {
  const plans = [
    {
      name: "Startup Plan",
      desc: "Ideal for new entrepreneurs and small businesses starting their networking journey.",
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
      desc: "Designed for growing businesses looking for more visibility and networking opportunities.",
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
      desc: "Perfect for serious business professionals and companies focused on maximum networking growth.",
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
              <h3>{plan.name}</h3>
              <p className={styles.planDesc}>{plan.desc}</p>
              <ul className={styles.featureList}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>
                    <svg className={styles.check} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
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
