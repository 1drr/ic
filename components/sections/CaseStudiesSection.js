import { useState } from 'react';
import Image from 'next/image';
import { caseStudiesData } from '../../data/contentData';
import styles from './CaseStudiesSection.module.css';

export default function CaseStudiesSection() {
  const [active, setActive] = useState(0);
  const total = caseStudiesData.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const c = caseStudiesData[active];

  return (
    <section className={styles['case-studies-section']} id="case-studies">
      <div className="section-container">
        <div className={styles['case-header']}>
          <div>
            <span className="section-pretitle">Success Stories</span>
            <h2 className="section-title">
              Delivering <span className="gradient-text">High Impact</span> Globally
            </h2>
          </div>
          <div className={styles['case-nav-btns']}>
            <button
              className={styles['case-nav-btn']}
              onClick={prev}
              aria-label="Previous project"
            >
              <i className="fa-solid fa-arrow-left" />
            </button>
            <span className={styles['case-counter']}>
              {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button
              className={styles['case-nav-btn']}
              onClick={next}
              aria-label="Next project"
            >
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>

        <div className={styles['case-card']} style={{ '--case-color': c.color }}>
          <div className={styles['case-text-side']}>
            <span className={styles['case-badge']}>{c.badge}</span>

            <div className={styles['case-logo-wrap']}>
              <Image
                src={c.logo || c.img}
                alt={c.title + ' logo'}
                width={160}
                height={60}
                style={{ objectFit: 'contain', maxHeight: '60px', width: 'auto' }}
                unoptimized
              />
            </div>

            <h3 className={styles['case-title']}>{c.title}</h3>
            <p className={styles['case-desc']}>{c.desc}</p>
            <p className={styles['case-long-desc']}>{c.longDesc}</p>

            {c.highlights && (
              <ul className={styles['case-highlights']}>
                {c.highlights.map((h, i) => (
                  <li key={i}>
                    <i className={h.icon} style={{ color: c.color }} />
                    {h.label}
                  </li>
                ))}
              </ul>
            )}

            <div className={styles['case-stats-row']}>
              {c.stats.map((s, j) => (
                <div key={j} className={styles['case-stat']}>
                  <span className={styles['case-stat-num']}>{s.num}</span>
                  <span className={styles['case-stat-lbl']}>{s.lbl}</span>
                </div>
              ))}
            </div>

            <a href={c.link} className={styles['case-cta']} style={{ background: c.color }}>
              View Case Study <i className="fa-solid fa-arrow-right-long" />
            </a>
          </div>

          <div className={styles['case-visual-side']}>
            <div className={styles['case-img-wrap']} style={{ borderColor: c.color + '33' }}>
              <Image
                src={c.img}
                alt={c.title}
                width={540}
                height={380}
                style={{ objectFit: 'contain', width: '100%', height: 'auto', borderRadius: '12px' }}
                unoptimized
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className={styles['case-img-glow']} style={{ background: c.color }} />
            </div>
            <div className={styles['case-dots']}>
              {caseStudiesData.map((_, i) => (
                <button
                  key={i}
                  className={`${styles['case-dot']} ${i === active ? styles['case-dot-active'] : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to project ${i + 1}`}
                  style={i === active ? { background: c.color } : {}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
