import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
    return (
        <>
            <Head>
                <title>Privacy Policy | Intactic Innovations</title>
            </Head>
            <Header />
            <main className="homepage-main" style={{ paddingTop: '150px', paddingBottom: '80px', minHeight: '70vh' }}>
                <div className="section-container">
                    <span className="section-pretitle">Legal Framework</span>
                    <h1 className="section-title">Privacy Policy</h1>
                    <div className="section-desc" style={{ maxWidth: '1000px', textAlign: 'left', margin: '0' }}>
                        <p style={{ marginBottom: '24px', color: 'var(--color-text-muted)' }}><strong>Effective Date: June 2026</strong></p>

                        <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                            At <strong>Intactic Innovations</strong>, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, engage our services, or interact with our proprietary platforms (such as Proctoring Pro, Omnizia, Time2Publish, or NeuraFlow).
                        </p>

                        <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.4rem' }}>1. Information We Collect</h3>
                        <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
                            We collect personal information that you voluntarily provide to us — including your name, email address, organization, and project details — when you submit a lead form, request a consultation, or sign a Statement of Work (SOW). We also automatically receive technical data such as IP address, browser type, and device information when you browse our site.
                        </p>

                        <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.4rem' }}>2. How We Use Your Information</h3>
                        <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
                            We use the information we collect to: respond to your inquiries, deliver and improve our services, coordinate engineering teams for client engagements, send periodic updates (only when you have opted in), and comply with legal obligations. We do not sell, rent, or trade your personal data to third parties.
                        </p>

                        <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.4rem' }}>3. Data Security</h3>
                        <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
                            As an ISO 27001-certified organization, we implement enterprise-grade administrative, physical, and technical safeguards. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Access to production systems is governed by role-based controls and audited on a continuous basis.
                        </p>

                        <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.4rem' }}>4. Cookies & Tracking</h3>
                        <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
                            Our website uses a minimal set of strictly necessary and analytics cookies. You can review the specific categories and manage your preferences at any time via our <Link href="/cookies" style={{ color: 'var(--color-brand)' }}>Cookie Policy</Link> page.
                        </p>

                        <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.4rem' }}>5. Your Rights</h3>
                        <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
                            Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. To exercise any of these rights, please contact our Data Protection Officer via the contact page and we will respond within 30 days.
                        </p>

                        <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '1.4rem' }}>6. Updates to This Policy</h3>
                        <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
                            We may update this Privacy Policy from time to time. The most current version will always be posted on this page with a revised effective date. Material changes will be communicated through our website or via direct email where appropriate.
                        </p>

                        <p style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
                            For privacy-related inquiries or to lodge a formal complaint, please contact our legal department via the contact page.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}