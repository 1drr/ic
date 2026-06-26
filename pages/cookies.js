import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Cookie Policy | Intactic Innovations</title>
      </Head>
      <Header />
      <main className="homepage-main" style={{ paddingTop: '150px', paddingBottom: '80px', minHeight: '70vh' }}>
        <div className="section-container">
          <span className="section-pretitle">Privacy & Tracking</span>
          <h1 className="section-title">Cookie Policy</h1>
          <div className="section-desc" style={{ maxWidth: '1000px', textAlign: 'left', margin: '0' }}>
            <p style={{ marginBottom: '24px', color: 'var(--color-text-muted)' }}><strong>Effective Date: June 2026</strong></p>
            
            <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
              At <strong>Intactic Innovations</strong>, safeguarding your digital footprint is embedded in our engineering culture. As an ISO 27001-certified enterprise, we are committed to full transparency regarding how we collect, store, and utilize data. This policy explains how and why we use cookies and similar tracking technologies on our website and digital platforms.
            </p>

            <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.4rem' }}>1. What Are Cookies?</h3>
            <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
              Cookies are small data fragments stored on your device (computer, tablet, or mobile) when you access digital platforms. They enable the system to recognize your device, remember preferences, and provide a seamless, optimized user experience. In modern web architectures, cookies are essential for maintaining session states and load-balancing traffic.
            </p>

            <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.4rem' }}>2. How We Utilize Cookies</h3>
            <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
              We classify our cookie usage into the following functional categories:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '32px', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '12px' }}><strong>Strictly Necessary (Essential):</strong> Core cookies required for the website's technical operation, security protocols, and session management. These cannot be disabled without breaking the platform's functionality.</li>
              <li style={{ marginBottom: '12px' }}><strong>Performance & Analytics:</strong> Used to analyze traffic patterns, monitor server response times, and measure engagement. We leverage advanced analytics tools to continuously optimize our UI/UX and infrastructure.</li>
              <li style={{ marginBottom: '12px' }}><strong>Functional Preferences:</strong> These allow our platforms to remember your tailored configurations, such as language preferences or customized dashboard layouts in platforms like Proctoring Pro and Omnizia.</li>
              <li style={{ marginBottom: '12px' }}><strong>Targeting & Advertising:</strong> We may deploy minimal third-party cookies (e.g., Google or LinkedIn) to measure the effectiveness of our B2B outreach and deliver relevant enterprise solutions to you.</li>
            </ul>

            <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.4rem' }}>3. Third-Party Integrations</h3>
            <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
              Given our extensive partnerships with cloud providers (AWS, Microsoft Azure, Google Cloud), some embedded services or analytics engines may place third-party cookies on your device. These entities are governed by their respective privacy policies and comply with global data protection standards.
            </p>

            <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.4rem' }}>4. Managing Your Preferences</h3>
            <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
              You retain full control over your telemetry data. You can configure your browser settings to reject non-essential cookies or alert you when cookies are being deployed. Please note that restricting essential cookies may degrade the performance and security of your session on our enterprise platforms.
            </p>

            <p style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
              If you have any questions regarding our data telemetry or cookie deployment, please contact our Information Security Officer via our contact portal.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
