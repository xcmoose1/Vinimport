import Image from "next/image";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Producers from '@/components/Producers';
import WineExplorer from '@/components/WineExplorer';
import Pricelist from '@/components/Pricelist';
import Team from '@/components/Team';
import Partners from '@/components/Partners';
import Newsletter from '@/components/Articles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Producers />
        <WineExplorer />
        <Pricelist />
        <Team />
        <Partners />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
