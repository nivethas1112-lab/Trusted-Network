import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Register Your Account",
      desc: "Download the TN mobile application and register using your mobile number and email address with OTP verification."
    },
    {
      step: "Step 2",
      title: "Verify Your Business",
      desc: "Complete GST verification to activate your business profile inside the platform."
    },
    {
      step: "Step 3",
      title: "Complete Your Profile",
      desc: "Add your company details, services, networking interests, referrals required, and business information."
    },
    {
      step: "Step 4",
      title: "Connect with Professionals",
      desc: "Follow and connect with verified business owners relevant to your industry and interests."
    },
    {
      step: "Step 5",
      title: "Share Business Activities",
      desc: "Post your business requirements, recommendations, wins, opportunities, and professional updates."
    },
    {
      step: "Step 6",
      title: "Build Business Relationships",
      desc: "Conduct business discussions, exchange recommendations, and create trusted business opportunities."
    }
  ];

  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className="container">
        <h2 className="section-title">How Trusted Network Works</h2>
        <p className={styles.subtitle}>Simple Steps to Build Your Business Network</p>
        <div className={styles.timeline}>
          {steps.map((item, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{item.step}</div>
              <div className={styles.stepContent}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
