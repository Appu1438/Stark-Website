import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './about.css';
import { TESTIMONIALS } from '../../themes/constants/testimonials';
import PageHero from '../../components/pageHero/PageHero';

/* ─────────────────────────────────────────
   Scroll reveal hook (same as Home)
───────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─────────────────────────────────────────
   Inline SVG icons
───────────────────────────────────────── */
function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconInfo() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2.5">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
function IconDollar() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2.5">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
function IconPlay() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}
function IconSun() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
function IconDownload() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const STATS = [
  { num: '500', suffix: '+', label: 'Happy Riders' },
  { num: '24', suffix: '/7', label: 'Availability' },
  { num: '100', suffix: '%', label: 'Verified Drivers' },
  { num: '4.8', suffix: '★', label: 'Average Rating' },
];

const HOW_STEPS = [
  { n: '1', title: 'Download the App', desc: 'Install the Stark Rider App from the Play Store or App Store to get started instantly.' },
  { n: '2', title: 'Set Pickup & Drop', desc: 'Enter your pickup point and destination easily within the app interface.' },
  { n: '3', title: 'Get Matched', desc: 'Nearby verified drivers instantly receive your ride request and accept it.' },
  { n: '4', title: 'Enjoy Your Ride', desc: 'Travel safely and comfortably to your destination with Stark Cabs.' },
];

const VALUES = [
  { icon: '🛡️', title: 'Safety First', desc: 'Every driver is verified and every ride is tracked. Your safety is never compromised — from booking to arrival.' },
  { icon: '⚡', title: 'Speed & Reliability', desc: 'We match you with the nearest available driver in seconds, so you spend less time waiting and more time moving.' },
  { icon: '💰', title: 'Affordable Fares', desc: 'Transparent, competitive pricing with no hidden charges. You always know what you\'ll pay before confirming.' },
  { icon: '🤝', title: 'Community Focus', desc: 'We\'re rooted in Kerala and committed to uplifting the local community — for passengers and driver partners alike.' },
  { icon: '📱', title: 'Smart Technology', desc: 'Our intuitive apps make booking, tracking, and paying for rides effortless — built with the rider at the center.' },
  { icon: '🌱', title: 'Continuous Growth', desc: 'We constantly listen to our riders and drivers to improve our platform, add features, and expand our reach.' },
];

function Stars() {
  return (
    <div className="testi-stars">
      {[...Array(5)].map((_, i) => <span key={i} className="testi-star">★</span>)}
    </div>
  );
}

/* ═══════════════════════════════════════
   ABOUT PAGE COMPONENT
═══════════════════════════════════════ */
export default function About() {
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>About Stark Cabs | Cab Service in Kerala | Ride Booking Platform</title>
        <meta name="description" content="Learn about Stark Cabs, a reliable ride booking platform providing fast, safe and affordable cab services in Kerala. Discover our mission, vision and commitment to modern transportation." />
        <meta name="keywords" content="About Stark Cabs Kerala, Stark Cabs taxi service, Stark Cabs app, cab booking Kerala, taxi booking Kerala, online taxi booking Kerala, ride booking app Kerala, Kerala cab service, Kerala taxi service, airport taxi Kerala, local taxi Kerala, outstation taxi Kerala, chauffeur service Kerala, premium cab service Kerala, affordable taxi Kerala, 24/7 cab service Kerala, best taxi app Kerala, taxi near me Kerala, cab near me Kerala, ride sharing Kerala, car rental Kerala, airport pickup Kerala, airport drop Kerala, Kochi taxi service, Trivandrum taxi service, Calicut taxi service, Thrissur taxi service, Kannur taxi service, Kollam taxi service, Alappuzha taxi service, Kottayam taxi service, Palakkad taxi service, Malappuram taxi service, Kasaragod taxi service, Pathanamthitta taxi service, Idukki taxi service, Wayanad taxi service, Ernakulam taxi service, Kozhikode taxi service, Thiruvananthapuram taxi service, taxi service Thiruvananthapuram, taxi service Kollam, taxi service Pathanamthitta, taxi service Alappuzha, taxi service Kottayam, taxi service Idukki, taxi service Ernakulam, taxi service Thrissur, taxi service Palakkad, taxi service Malappuram, taxi service Kozhikode, taxi service Wayanad, taxi service Kannur, taxi service Kasaragod, cab service Kochi, cab service Trivandrum, cab service Kozhikode, cab service Thrissur, cab service Kerala airport, Kerala travel taxi, Kerala tourist cab, Kerala travel app, driver app Kerala, Stark Cabs India" />
        <meta name="author" content="Stark Cabs" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kerala" />
        <meta name="geo.position" content="9.4981;76.3388" />
        <meta name="ICBM" content="9.4981,76.3388" />
        <meta property="og:title" content="About Stark Cabs - Cab Service in Kerala" />
        <meta property="og:description" content="Discover Stark Cabs, a trusted ride booking platform offering taxi services in Kerala." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://starkcabs.in/about" />

        <link rel="icon" href="/assets/images/favicon.png" sizes="any" />
        <meta property="og:image" content="https://starkcabs.in/assets/images/favicon.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://starkcabs.in/assets/images/favicon.png" />
      </Helmet>

      <PageHero
        title={"About"}
        highlight={'Stark'}
        subTitle={'Cabs'}
        currentPage={"About Us"}
        backgroundImage={'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315363/bg_2_xyc6ne.webp'}
      />

      {/* ── ABOUT INTRO ── */}
      <section className="about-intro">
        <div className="container">
          <div className="about-grid">
            {/* Image */}
            <div className="about-img-wrap reveal">
              <img src="https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315362/about_ttgik2.webp" alt="About Stark Cabs – Reliable cab service in Kerala" />
              <div className="about-img-overlay" aria-hidden="true" />
              <div className="about-tag">
                <div className="about-tag-icon"><IconCheck /></div>
                <div className="about-tag-text">
                  <strong>Trusted in Kerala</strong>
                  <span>Safe &amp; Verified Service</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="reveal reveal-delay-1">
              <span className="section-label">About Stark Cabs</span>
              <h2 className="section-title">Reliable Cab Service<br />in Kerala</h2>
              <p className="section-desc">
                Stark Cabs is a modern ride booking platform based in Kerala. We provide fast, safe, and
                affordable taxi services through our smart mobile applications — connecting passengers with
                nearby drivers instantly.
              </p>
              <p className="section-desc" style={{ marginTop: '14px' }}>
                Whether you need a quick city ride, airport transfer, or daily commute, Stark Cabs offers
                reliable transportation with verified drivers and comfortable vehicles. With real-time
                tracking and easy booking, every journey is smooth and stress-free.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon"><IconShield /></div>
                  <div>
                    <strong>Verified Drivers</strong>
                    <p>All driver partners undergo thorough background checks and training before onboarding.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><IconInfo /></div>
                  <div>
                    <strong>Real-time GPS Tracking</strong>
                    <p>Monitor your ride live from the moment your driver accepts until you arrive safely.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><IconDollar /></div>
                  <div>
                    <strong>Transparent Pricing</strong>
                    <p>See your estimated fare before confirming — no hidden fees or surprise charges ever.</p>
                  </div>
                </div>
              </div>
              <div className="about-cta-row">
                <Link to="/download" className="btn-primary">
                  <IconDownload /> Download the App
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Get in Touch <IconArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid reveal">
            {STATS.map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-num">{s.num}<span>{s.suffix}</span></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="mv-section">
        <div className="container">
          <div className="mv-header reveal">
            <span className="section-label">Our Purpose</span>
            <h2 className="section-title">Mission &amp; Vision</h2>
            <p className="section-desc">
              Everything we do is driven by a commitment to improving how Kerala moves.
            </p>
          </div>
          <div className="mv-grid">
            <div className="mv-card reveal reveal-delay-1">
              <div className="mv-icon"><IconPlay /></div>
              <h3>Our Mission</h3>
              <p>
                To improve local transportation in Kerala by providing a fast, dependable, and affordable
                ride booking service that empowers both riders and drivers. We aim to make every journey as
                seamless and stress-free as possible through modern technology and a commitment to safety.
              </p>
            </div>
            <div className="mv-card reveal reveal-delay-2">
              <div className="mv-icon"><IconSun /></div>
              <h3>Our Vision</h3>
              <p>
                To become the most trusted and widely used ride booking platform in Kerala — known for
                reliability, safety, and community commitment. We envision a future where getting from A to B
                is effortless, affordable, and safe for everyone in Kerala and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how-section">
        <div className="container">
          <div className="how-header reveal">
            <span className="section-label">Simple Process</span>
            <h2 className="section-title">How Stark Cabs Works</h2>
            <p className="section-desc">Getting a reliable ride in Kerala takes just four simple steps.</p>
          </div>
          <div className="how-grid">
            {HOW_STEPS.map((step, i) => (
              <div key={step.n} className={`how-step reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                <div className="how-num">{step.n}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="values-section">
        <div className="container">
          <div className="values-header reveal">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-desc">The principles that guide every decision we make at Stark Cabs.</p>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={v.title} className={`value-card reveal${i % 3 > 0 ? ` reveal-delay-${i % 3}` : ''}`}>
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header reveal">
            <span className="section-label">Customer Reviews</span>
            <h2 className="section-title">What Our Riders Say</h2>
            <p className="section-desc">
              Thousands of riders trust Stark Cabs for safe and reliable cab services across Kerala.
            </p>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`testi-card reveal${i % 3 > 0 ? ` reveal-delay-${i % 3}` : ''}`}>
                <div className="testi-quote">"</div>
                <Stars />
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className="testi-avatar" style={t.grad ? { background: t.grad } : undefined}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Ready to Ride with<br /><span>Stark Cabs?</span></h2>
            <p>
              Download the Stark Rider App and experience fast, safe, and affordable cab services
              in Kerala today.
            </p>
            <div className="cta-actions">
              <Link to="/download" className="btn-primary">
                <IconDownload /> Download the App
              </Link>
              <Link to="/driver" className="btn-ghost">
                Become a Driver <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}