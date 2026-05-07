import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './SubPage.module.css';

interface SubPageProps {
  title: string;
  children: React.ReactNode;
}

const SubPage = ({ title, children }: SubPageProps) => {
  return (
    <>
      <Navbar />
      <div className={styles.subPageWrapper}>
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.title}>{title}</h1>
          </div>
        </section>
        <section className={styles.content}>
          <div className="container">
            <div className={styles.inner}>
              {children}
              <div className={styles.backHome}>
                <Link href="/" className="btn btn-outline">Back to Home</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SubPage;
