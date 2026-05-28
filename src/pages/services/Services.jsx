import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './services.css';
import { DETAIL_SERVICES, SERVICES, WHY_CARDS } from '../../themes/constants/services';
import PageHero from '../../components/pageHero/PageHero';

/* ─────────────────────────────────────────
   Scroll reveal hook
───────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.10 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
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


const PROCESS_STEPS = [
  { n: '1', title: 'Download the App', desc: 'Install the Stark Rider App from the Play Store or App Store to get started instantly.' },
  { n: '2', title: 'Set Pickup & Drop', desc: 'Enter your pickup point and destination easily within the app interface.' },
  { n: '3', title: 'Get Matched', desc: 'Nearby verified drivers instantly receive your request and confirm your ride.' },
  { n: '4', title: 'Enjoy Your Ride', desc: 'Travel safely and comfortably to your destination with Stark Cabs.' },
];

/* ═══════════════════════════════════════
   SERVICES PAGE COMPONENT
═══════════════════════════════════════ */
export default function Services() {
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Stark Cabs Services | Cab Service in Kerala | Taxi &amp; Ride Booking</title>
        <meta name="description" content="Explore Stark Cabs services in Kerala including local taxi rides, airport transfers, outstation trips and ride booking through the Stark Rider App. Safe, affordable and reliable cab services." />
        <meta name="keywords" content="Stark Cabs Kerala, Stark Cabs taxi service, Stark Cabs app, cab booking Kerala, taxi booking Kerala, online taxi booking Kerala, ride booking app Kerala, Kerala cab service, Kerala taxi service, airport taxi Kerala, local taxi Kerala, outstation taxi Kerala, chauffeur service Kerala, premium cab service Kerala, affordable taxi Kerala, 24/7 cab service Kerala, best taxi app Kerala, taxi near me Kerala, cab near me Kerala, ride sharing Kerala, car rental Kerala, airport pickup Kerala, airport drop Kerala, Kochi taxi service, Trivandrum taxi service, Calicut taxi service, Thrissur taxi service, Kannur taxi service, Kollam taxi service, Alappuzha taxi service, Kottayam taxi service, Palakkad taxi service, Malappuram taxi service, Kasaragod taxi service, Pathanamthitta taxi service, Idukki taxi service, Wayanad taxi service, Ernakulam taxi service, Kozhikode taxi service, Thiruvananthapuram taxi service, taxi service Thiruvananthapuram, taxi service Kollam, taxi service Pathanamthitta, taxi service Alappuzha, taxi service Kottayam, taxi service Idukki, taxi service Ernakulam, taxi service Thrissur, taxi service Palakkad, taxi service Malappuram, taxi service Kozhikode, taxi service Wayanad, taxi service Kannur, taxi service Kasaragod, cab service Kochi, cab service Trivandrum, cab service Kozhikode, cab service Thrissur, cab service Kerala airport, Kerala travel taxi, Kerala tourist cab, Kerala travel app, driver app Kerala, Stark Cabs India" />
        <meta name="author" content="Stark Cabs" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kerala" />
        <meta name="geo.position" content="9.4981;76.3388" />
        <meta name="ICBM" content="9.4981,76.3388" />
        <meta property="og:title" content="Stark Cabs Services - Taxi & Ride Booking in Kerala" />
        <meta property="og:description" content="Discover Stark Cabs taxi services in Kerala including local rides, airport transfers and outstation trips." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://starkcabs.in/services" />

        <link rel="icon" href="/assets/images/favicon.png" sizes="any" />
        <meta property="og:image" content="https://starkcabs.in/assets/images/favicon.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://starkcabs.in/assets/images/favicon.png" />
      </Helmet>

      {/* ── PAGE HERO ── */}

      <PageHero
        title={"Our Cab"}
        highlight={"Services"}
        currentPage={'Services'}
        backgroundImage={'assets/images/bg_2.jpg'}

      />

      {/* ── CORE SERVICES ── */}
      <section className="core-services">
        <div className="container">
          <div className="core-header reveal">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Cab Services in Kerala</h2>
            <p className="section-desc">
              From instant local rides to long outstation journeys, Stark Cabs covers every travel need in
              Kerala with safety, speed, and comfort.
            </p>
          </div>
          <div className="core-grid">
            {SERVICES.map((s, i) => (
              <div key={s.num} className={`core-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                <div className="core-num">{s.num}</div>
                <div className="core-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETAILED SERVICES ── */}
      <section className="detail-section">
        <div className="container">
          <div className="detail-header">
            <div className="reveal">
              <span className="section-label">Service Details</span>
              <h2 className="section-title">Everything We Cover</h2>
            </div>
            <Link to="/download" className="btn-ghost reveal reveal-delay-1" style={{ flexShrink: 0 }}>
              Book a Ride <IconArrow />
            </Link>
          </div>
          <div className="detail-grid">
            {DETAIL_SERVICES.map((s) => (
              <div key={s.title} className={`detail-card reveal${s.delay ? ` ${s.delay}` : ''}`}>
                <div className="detail-img">
                  <img src={s.img} alt={s.alt} />
                  <div className="detail-img-overlay" aria-hidden="true" />
                </div>
                <div className="detail-body">
                  <span className="detail-tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link to="/download" className="detail-link">Book Now <span>→</span></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="why-section">
        <div className="container">
          <div className="why-header reveal">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Why Riders Choose Stark Cabs</h2>
            <p className="section-desc">
              We combine technology, verified drivers, and local expertise to deliver the best ride
              experience in Kerala.
            </p>
          </div>
          <div className="why-grid">
            {WHY_CARDS.map((c, i) => (
              <div key={c.title} className={`why-card reveal${i % 4 > 0 ? ` reveal-delay-${i % 4}` : ''}`}>
                <div className="why-img-wrap">
                  <img src={c.img} alt={c.alt} className="why-img" />
                </div>
                <div className="why-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO BOOK (PROCESS) ── */}
      <section className="process-section">
        <div className="container">
          <div className="process-header reveal">
            <span className="section-label">Simple Process</span>
            <h2 className="section-title">How to Book a Ride</h2>
            <p className="section-desc">
              Getting a reliable ride in Kerala with Stark Cabs takes just four simple steps.
            </p>
          </div>
          <div className="process-grid">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.n} className={`process-step reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                <div className="process-num">{step.n}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
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
            <h2>Ready to Book Your<br /><span>Next Ride?</span></h2>
            <p>
              Download the Stark Rider App and experience fast, safe, and affordable cab services
              anywhere in Kerala.
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