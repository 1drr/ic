import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-upper">
        <div className="footer-brand-col">
          <Link href="/" className="footer-logo" scroll={true}>
            <Image
              src="https://res.cloudinary.com/det1qnlrh/image/upload/v1782432654/Intactic-white_vmyikx.png"
              alt="Intactic Logo"
              width={200}
              height={40}
              style={{ width: 'auto', height: '36px', objectFit: 'contain', marginBottom: '8px' }}
            />
          </Link>

          <div className="footer-socials">
            <a href="https://www.facebook.com/intactic" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://twitter.com/intactic" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/intactic" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.youtube.com/@intactic" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>Services</h4>
          <ul>

            <li><a href="#services">Managed Services</a></li>
            <li><a href="#services">MVP Development</a></li>
            <li><a href="#services">Technology Consulting</a></li>
            <li><a href="#services">Digital Transformation</a></li>

          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Products</h4>
          <ul>
            <li><a href="#products">Proctoring Pro</a></li>
            <li><a href="#products">Omnizia</a></li>
            <li><a href="#products">Time2Publish</a></li>
            <li><a href="#products">NeuraFlow</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about-us">About Us</Link></li>
            <li><a href="#contact">Blog Insights</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><Link href="/contact-us">Contact Inquiry</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-middle">
        <div className="compliance-logos">
          <span className="compliance-badge" title="ISO 27001 Security Certified"><i className="fa-solid fa-user-shield"></i> ISO 27001</span>
          <span className="compliance-badge" title="AWS Advanced Consulting Partner"><i className="fa-brands fa-aws"></i> AWS Partner</span>
          <span className="compliance-badge" title="Certified Moodle Partner"><i className="fa-solid fa-graduation-cap"></i> Moodle Partner</span>
          <span className="compliance-badge" title="ISTQB Member"><i className="fa-solid fa-vial"></i> ISTQB Certified</span>
        </div>
      </div>

      <div className="footer-lower">
        <p>&copy; 2026 Intactic Innovations. All rights reserved.</p>
        <div className="footer-policies">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/cookies">Cookie Policy</Link>
          <a href="#contact">NDA Agreement Templates</a>
        </div>
      </div>
    </footer>
  );
}
