import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Events from '@/components/Events';
import Membership from '@/components/Membership';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Benefits />
      <HowItWorks />
      <Events />
      <Membership />
      <Download />
      <Footer />
    </main>
  );
}
