import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/sections/ContactSection';

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | Intactic Innovations</title>
      </Head>
      <Header />
      <main className="homepage-main" style={{ paddingTop: '100px', minHeight: '70vh' }}>
        {/* Reuse the existing Contact Section component */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
