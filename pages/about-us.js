import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Intactic Innovations</title>
        <meta name="description" content="Intactic Innovations is an ISO 27001-certified software development and consulting firm delivering AI-first engineering, scalable systems, and digital transformation." />
      </Head>
      <Header />
      <main className="homepage-main" style={{ paddingTop: '150px', paddingBottom: '80px', minHeight: '70vh' }}>
        <div className="section-container">
          <span className="section-pretitle">Inside Intactic</span>
          <h1 className="section-title">Architecting the Digital Future.</h1>
          <div className="section-desc" style={{ maxWidth: '1000px', textAlign: 'left', margin: '0' }}>
            <p style={{ marginBottom: '24px', fontSize: '1.25rem', color: 'var(--color-text-dark)', lineHeight: '1.8' }}>
              <strong>Intactic Innovations</strong> is a premier software engineering and technology consulting firm. We partner with visionaries—from disruptive startups to global enterprises—to engineer intelligent, cloud-native, and AI-powered solutions that drive measurable growth.
            </p>

            <h3 style={{ marginTop: '48px', marginBottom: '20px', fontSize: '1.6rem', color: 'var(--color-brand)' }}>Our Pedigree & Excellence</h3>
            <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
              We don't just write code; we build resilient digital ecosystems. With a stringent adherence to quality and security, Intactic holds top-tier global recognitions:
            </p>
            <ul style={{ listStyleType: 'none', padding: '0', marginBottom: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              <li style={{ background: 'var(--color-bg-light)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #6C63FF' }}><strong>ISO 27001 Certified</strong> – Uncompromising Information Security</li>
              <li style={{ background: 'var(--color-bg-light)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #FBAF32' }}><strong>CMMI Level 3</strong> – Maturity in Process & Delivery</li>
              <li style={{ background: 'var(--color-bg-light)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #00C896' }}><strong>AWS Advanced Consulting Partner</strong> – Cloud Native Scalability</li>
              <li style={{ background: 'var(--color-bg-light)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #E63B6F' }}><strong>Microsoft Gold Cloud Platform</strong> – Enterprise-grade Solutions</li>
            </ul>

            <h3 style={{ marginTop: '48px', marginBottom: '20px', fontSize: '1.6rem', color: 'var(--color-brand)' }}>How We Deliver: The Intactic Framework</h3>
            <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
              Our proprietary delivery methodology is designed for rapid iteration without sacrificing stability. We take a holistic approach to every engagement:
            </p>
            <div style={{ marginBottom: '32px', paddingLeft: '20px', borderLeft: '2px solid var(--color-border)' }}>
              <h4 style={{ marginBottom: '8px' }}>1. Discover & Map</h4>
              <p style={{ marginBottom: '16px', color: 'var(--color-text-muted)' }}>A 1-week rapid alignment process where we map resource allocations, tech stacks, and delivery schedules before kickoff. We cut tech waste by up to 30% right from the start.</p>
              
              <h4 style={{ marginBottom: '8px' }}>2. Assemble & Embed</h4>
              <p style={{ marginBottom: '16px', color: 'var(--color-text-muted)' }}>We deploy matching elite engineer profiles within 14 days. Our teams embed seamlessly into your culture to drive agile sprints.</p>

              <h4 style={{ marginBottom: '8px' }}>3. Iterate & QA</h4>
              <p style={{ marginBottom: '16px', color: 'var(--color-text-muted)' }}>Continuous building cycles backed by strict automated testing scripts and static security scanners, aiming for a 99.9% defect-free delivery.</p>

              <h4 style={{ marginBottom: '8px' }}>4. Scale with Confidence</h4>
              <p style={{ marginBottom: '0', color: 'var(--color-text-muted)' }}>Smooth transition pipelines and 24/7 SLA maintenance ensure your growth is autopiloted and secure.</p>
            </div>

            <h3 style={{ marginTop: '48px', marginBottom: '20px', fontSize: '1.6rem', color: 'var(--color-brand)' }}>Global Impact</h3>
            <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
              In just over 5 years, we have successfully deployed 100+ platforms across 4 countries, maintaining a phenomenal 99% client satisfaction rate. From AI-driven LMS systems in EdTech to microservice-based enterprise E-Commerce that triples daily orders, Intactic is the invisible force behind some of the most dynamic digital transformations today.
            </p>
            <p style={{ marginTop: '40px', fontSize: '1.1rem', fontWeight: 'bold' }}>
              Let's engineer the future, together.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
