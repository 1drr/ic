import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | Intactic Innovations</title>
      </Head>
      <Header />
      <main className="homepage-main" style={{ paddingTop: '150px', paddingBottom: '80px', minHeight: '70vh' }}>
        <div className="section-container">
          <span className="section-pretitle">Legal Framework</span>
          <h1 className="section-title">Terms of Service</h1>
          <div className="section-desc" style={{ maxWidth: '1000px', textAlign: 'left', margin: '0' }}>
            <p style={{ marginBottom: '24px', color: 'var(--color-text-muted)' }}><strong>Effective Date: June 2026</strong></p>
            
            <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
              Welcome to <strong>Intactic Innovations</strong>. By accessing our website, engaging our services, or utilizing our proprietary platforms (such as Proctoring Pro, Omnizia, Time2Publish, or NeuraFlow), you agree to be bound by the following Terms of Service. As an ISO 27001-certified and CMMI Level 3 organization, we prioritize transparency, security, and professional integrity in all our engagements.
            </p>

            <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.4rem' }}>1. Scope of Services</h3>
            <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
              Intactic Innovations provides high-end technology consulting, managed IT services, digital transformation architectures, and custom software development (including AI and Machine Learning engineering). Specific deliverables, SLAs, and timelines for client engagements are outlined in separate Master Service Agreements (MSAs) or Statements of Work (SOWs).
            </p>

            <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.4rem' }}>2. Intellectual Property Rights</h3>
            <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
              Unless explicitly transferred via a formal NDA or MSA, all methodologies, frameworks, baseline codes, and pre-existing AI models utilized by Intactic Innovations remain our exclusive intellectual property. Custom code written specifically for a client becomes the intellectual property of the client upon full settlement of associated invoices, subject to the terms of the specific agreement.
            </p>

            <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.4rem' }}>3. Data Security and Confidentiality</h3>
            <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
              We operate under stringent ISO 27001 information security standards. Any data shared with Intactic Innovations during the "Discover & Map" or "Assemble & Embed" phases is treated with the highest level of confidentiality. We employ enterprise-grade encryption and access controls, particularly when integrating with AWS or Microsoft Azure cloud environments.
            </p>

            <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.4rem' }}>4. Acceptable Use of Platforms</h3>
            <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
              When accessing our proprietary products or client portals, users must not engage in reverse engineering, vulnerability scanning (without prior authorization), or any action that compromises the structural integrity or availability of the platforms. Violations will result in immediate termination of access and potential legal recourse.
            </p>

            <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.4rem' }}>5. Limitation of Liability</h3>
            <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
              While we aim for 99.9% defect-free delivery, software engineering is an iterative process. Intactic Innovations shall not be liable for indirect, incidental, or consequential damages arising from the use of our services, beyond the scope explicitly defined in your service level agreement (SLA).
            </p>

            <p style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
              For formal legal inquiries or to review our standard MSA, please contact our legal department via the contact page.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
