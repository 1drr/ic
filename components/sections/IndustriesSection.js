import { industriesData } from '../../data/contentData';
import styles from './IndustriesSection.module.css';

export default function IndustriesSection() {
  return (
    <section className={styles['industries-section']} id="industries">
      <div className="section-container">
        <div className={styles['industries-header']}>
          <h2>
            Industries We Power <br />
            with Innovation
          </h2>
        </div>
        <div className={styles['industries-grid']}>
          {industriesData.map((ind, i) => (
            <a href="#contact" key={i} className={styles['industry-card']} style={{ textDecoration: 'none' }}>
              <div className={styles['industry-icon']}><i className={ind.icon}></i></div>
              <h3>{ind.label}</h3>
              <p>{ind.desc}</p>
              <span className={styles['industry-link']}>Learn More <i className="fa-solid fa-arrow-right"></i></span>
            </a>
          ))}
          <div className={styles['industry-cta-card']}>
            <p>Is your industry here?</p>
            <a href="#contact" className={styles['btn-lets-talk']}>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
}
