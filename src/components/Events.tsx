import styles from './Events.module.css';

const Events = () => {
  const events = [
    {
      title: "Monthly Networking Meet - Bangalore",
      date: "May 25, 2026",
      location: "Hotel Royal Orchid, Bangalore",
      type: "Physical Meet",
      image: "/event-bangalore.png"
    },
    {
      title: "Virtual Business Exchange",
      date: "June 05, 2026",
      location: "Online (Zoom)",
      type: "Webinar",
      image: "/event-virtual.png"
    }
  ];

  return (
    <section id="events" className={styles.events}>
      <div className="container">
        <h2 className="section-title">Upcoming Events</h2>
        <div className={styles.grid}>
          {events.map((event, index) => (
            <div key={index} className={styles.eventCard}>
              <div className={styles.imageBox}>
                <img src={event.image} alt={event.title} />
                <div className={styles.dateBadge}>{event.date}</div>
              </div>
              <div className={styles.eventInfo}>
                <span className={styles.type}>{event.type}</span>
                <h3>{event.title}</h3>
                <p>{event.location}</p>
                <button className="btn btn-outline">Register Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
