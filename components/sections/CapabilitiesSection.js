import { capabilitiesData } from '../../data/contentData';
import styles from './CapabilitiesSection.module.css';

export default function CapabilitiesSection() {
  return (
    <section className={styles['capabilities-section']} id="services">
        <div className={styles['caps-bg-grid']} aria-hidden="true" />
        <div className="section-container">
          <div className={styles['caps-header']}>
            <div>
              <span className="section-pretitle">Our Capabilities</span>
              <h2 className="section-title">Drive Growth with Our Core<br /><span className="gradient-text">Capabilities</span></h2>
              <p className={styles['caps-subtitle']}>Full-spectrum engineering services to build, scale, and evolve your digital products.</p>
            </div>
            <a href="#contact" className={styles['btn-outline']}>Explore All Services <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div className={styles['caps-grid']}>
            {capabilitiesData.map((svc, i) => (
              <a href="#contact" key={i} className={styles['cap-card']} style={{ '--cap-accent': svc.accent, textDecoration: 'none', color: 'inherit' }}>
                <div className={styles['cap-card-top']}>
                  <div className={styles['cap-icon']}><i className={svc.icon}></i></div>
                  <span className={styles['cap-tag']}>{svc.tag}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <ul className={styles['cap-highlights']}>
                  {svc.highlights.map((h, j) => (
                    <li key={j}><i className="fa-solid fa-circle-check"></i> {h}</li>
                  ))}
                </ul>
                <span className={styles['cap-link']}>Get Started <i className="fa-solid fa-arrow-right"></i></span>
                <div className={styles['cap-card-glow']} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>
  );
}
