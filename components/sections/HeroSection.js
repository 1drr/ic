import { useEffect, useState } from 'react';
import { heroConfig, trustLogos } from '../../data/contentData';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const {
    pill,
    heading,
    subheading,
    primaryCta,
    secondaryCta,
    metrics,
    illustration,
    chatWidget,
  } = heroConfig;

  // Cycle the "typing" placeholder lines for the AI chat widget
  const prompts = [
    chatWidget.prompt,
    'Tell me about your AI engineering services.',
    'What industries do you serve?',
    'Can you scope an MVP for our startup?',
    'How fast can you ship a SaaS MVP?',
  ];
  const [promptIdx, setPromptIdx] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const text = prompts[promptIdx];
    let i = 0;
    setTyped('');
    const typer = setInterval(() => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i >= text.length) clearInterval(typer);
    }, 35);
    const rotator = setTimeout(() => {
      setPromptIdx((p) => (p + 1) % prompts.length);
    }, 5200);
    return () => {
      clearInterval(typer);
      clearTimeout(rotator);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promptIdx]);

  const marqueeLogos = [...trustLogos, ...trustLogos];

  return (
    <section
      className={styles.heroSection}
      id="hero"
      aria-label="Intactic Innovations hero"
    >
      {/* ═══ Background ambient glow + radial canvas ═══ */}
      <div className={styles.heroBgGradient} aria-hidden="true" />
      <div className={styles.heroBgGrid} aria-hidden="true" />
      <div className={styles.heroGlowOrbA} aria-hidden="true" />
      <div className={styles.heroGlowOrbB} aria-hidden="true" />
      <div className={styles.heroNoiseLayer} aria-hidden="true" />

      <div className={styles.heroInner}>
        {/* ═══ Small ecosystem pill tag ═══ */}
        <div className={styles.heroPill}>
          <span className={styles.heroPillDot} />
          <i className={pill.icon} aria-hidden="true" />
          <span>{pill.text}</span>
        </div>

        {/* ═══ Massive headline — three stacked words with mixed weight ═══ */}
        <h1 className={styles.heroHeading}>
          <span className={styles.heroH1Line}>{heading.pre}</span>
          <span className={`${styles.heroH1Line} ${styles.heroH1Highlight}`}>
            {heading.highlight}
          </span>
          <span className={styles.heroH1Line}>{heading.post}</span>
        </h1>

        {/* ═══ Subheading copy ═══ */}
        <p className={styles.heroSub}>{subheading}</p>

        {/* ═══ CTA pair ═══ */}
        <div className={styles.heroCtaRow}>
          <a
            className={`${styles.heroBtn} ${styles.heroBtnPrimary}`}
            href={primaryCta.href}
          >
            <span>{primaryCta.label}</span>
            <i className="fa-solid fa-arrow-right-long" aria-hidden="true" />
          </a>
          <a
            className={`${styles.heroBtn} ${styles.heroBtnSecondary}`}
            href={secondaryCta.href}
          >
            <i className="fa-solid fa-rocket" aria-hidden="true" />
            <span>{secondaryCta.label}</span>
          </a>
        </div>

        {/* ═══ Brand / ecosystem pill row ═══ */}
        <div className={styles.heroBrandRow} aria-label="Ecosystem brands">
          {marqueeLogos.map((logo, i) => (
            <span className={styles.heroBrandChip} key={`${logo.label}-${i}`}>
              <i className={logo.icon} aria-hidden="true" />
              <span>{logo.label}</span>
            </span>
          ))}
        </div>

        {/* ═══ Illustration stage with metrics strip ═══ */}
        <div className={styles.heroStage} aria-hidden="false">
          <div className={styles.heroStageImageWrap}>
            {/* Looping background video — autoplay, muted, inline on mobile */}
            <video
              className={styles.heroStageVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={illustration.poster}
              aria-label={illustration.caption}
            >
              <source src={illustration.video.webm} type="video/webm" />
              <source src={illustration.video.mp4} type="video/mp4" />
              <source src={illustration.video.mp4Low} type="video/mp4" />
              {/* Static fallback for browsers that can't play the video */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.heroStageImage}
                src={illustration.poster}
                alt={illustration.caption}
                loading="eager"
              />
            </video>
            <div className={styles.heroStageScrim} />
            <div className={styles.heroStageVignette} />

            {/* Caption badge */}
            <div className={styles.heroStageBadge}>
              <i className="fa-solid fa-microchip" aria-hidden="true" />
              <span>{illustration.caption}</span>
            </div>

            {/* Metric cards floating on the illustration */}
            <div className={`${styles.heroMetricPill} ${styles.heroMetricPillA}`}>
              <div className={styles.heroMetricPillIcon}>
                <i className="fa-solid fa-chart-line" aria-hidden="true" />
              </div>
              <div>
                <div className={styles.heroMetricPillNum}>{metrics[0].num}</div>
                <div className={styles.heroMetricPillLbl}>{metrics[0].label}</div>
              </div>
            </div>

            <div className={`${styles.heroMetricPill} ${styles.heroMetricPillB}`}>
              <div
                className={`${styles.heroMetricPillIcon} ${styles.heroMetricPillIconDark}`}
              >
                <i className="fa-solid fa-star" aria-hidden="true" />
              </div>
              <div>
                <div className={styles.heroMetricPillNum}>{metrics[1].num}</div>
                <div className={styles.heroMetricPillLbl}>{metrics[1].label}</div>
              </div>
            </div>

            <div className={`${styles.heroMetricPill} ${styles.heroMetricPillC}`}>
              <div
                className={`${styles.heroMetricPillIcon} ${styles.heroMetricPillIconAccent}`}
              >
                <i className="fa-solid fa-globe" aria-hidden="true" />
              </div>
              <div>
                <div className={styles.heroMetricPillNum}>{metrics[2].num}</div>
                <div className={styles.heroMetricPillLbl}>{metrics[2].label}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ AI chat widget — bottom-right floating card ═══ */}
      <aside
        className={styles.heroChat}
        role="complementary"
        aria-label="AI Assistant"
      >
        <div className={styles.heroChatShell}>
          <div className={styles.heroChatHeader}>
            <div className={styles.heroChatAvatarWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.heroChatAvatar}
                src={chatWidget.avatar}
                alt={`${chatWidget.name} avatar`}
              />
              <span className={styles.heroChatStatusDot} />
            </div>
            <div className={styles.heroChatHeaderText}>
              <strong>{chatWidget.name}</strong>
              <span>{chatWidget.handle}</span>
            </div>
            <i
              className={`fa-solid fa-xmark ${styles.heroChatClose}`}
              aria-hidden="true"
            />
          </div>

          <div className={styles.heroChatBody}>
            <div className={styles.heroChatBubble}>
              <i className="fa-solid fa-hand-sparkles" aria-hidden="true" />
              <p>
                <span className={styles.heroChatTyping}>
                  {typed}
                  <span className={styles.heroChatCaret}>|</span>
                </span>
              </p>
            </div>
          </div>

          <button type="button" className={styles.heroChatCta}>
            {chatWidget.cta}
            <i className="fa-solid fa-arrow-right-long" aria-hidden="true" />
          </button>
        </div>
      </aside>
    </section>
  );
}
