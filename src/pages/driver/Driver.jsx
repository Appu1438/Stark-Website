import { useState, useEffect, useRef } from "react";
import "./driver.css";
import { Helmet } from "react-helmet-async";
import PageHero from "../../components/pageHero/PageHero";
import { DRIVER_REVIEWS } from "../../themes/constants/testimonials";

/* ─────────────────────────────────────────────────────────────────────────
   useReveal — lightweight IntersectionObserver hook.
   Pass the returned ref to any element; adds .is-visible once it enters
   the viewport. Optional delay (ms) sets a CSS transition-delay.
   ───────────────────────────────────────────────────────────────────────── */
function useReveal(delayMs = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delayMs) el.style.transitionDelay = `${delayMs}ms`;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("is-visible"); obs.unobserve(el); }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delayMs]);
  return ref;
}

/* ─────────────────────────────────────────────────────────────────────────
   Data — unchanged from original
   ───────────────────────────────────────────────────────────────────────── */
const DRIVER_FEATURES = [
  "Accept Ride Requests", "Live GPS Navigation", "Trip History & Logs", "Driver Dashboard",
  "Earnings Summary", "Flexible Working Hours", "Daily Earnings Tracker", "Secure Payments",
  "Ride Notifications", "Driver Ratings", "Route Optimisation", "Fast Trip Matching",
  "Transparent Earnings", "Reliable Platform", "24/7 Driver Support",
];

const REQUIREMENTS = [
  { icon: "🪪", title: "Valid Driving Licence", desc: "A valid commercial or private vehicle driving licence issued by the relevant authority in India." },
  { icon: "🚗", title: "A Registered Vehicle", desc: "Your own registered vehicle in good working condition — car or auto — with valid insurance and registration documents." },
  { icon: "📱", title: "Android Smartphone", desc: "An Android smartphone to run the Stark Driver App and receive ride requests in real time." },
  { icon: "📄", title: "Vehicle Documents", desc: "RC book, insurance certificate, PUC certificate, and any other required vehicle documents." },
  { icon: "🪪", title: "Identity Proof", desc: "Government-issued identity proof such as Aadhaar card or PAN card for driver verification." },
  { icon: "✅", title: "Background Check", desc: "Willingness to undergo a basic background verification check as part of the onboarding process." },
];

export default function Driver() {
  const [activeTab, setActiveTab] = useState("features");
  const [tabKey, setTabKey] = useState(0);

  function handleTabChange(tab) {
    setActiveTab(tab);
    setTabKey(k => k + 1);
  }

  /* ── Refs for every animated block ──────────────────────────────────── */
  // Banner
  const bannerInnerRef = useReveal(0);
  const bannerContentRef = useReveal(150);
  const bannerImgRef = useReveal(250);

  // Strip
  const stripGridRef = useReveal(0);

  // Join
  const joinHeaderRef = useReveal(0);
  const joinStep1Ref = useReveal(0);
  const joinStep2Ref = useReveal(100);
  const joinStep3Ref = useReveal(200);
  const joinStep4Ref = useReveal(300);

  // Features section header + tabs
  const featHeaderRef = useReveal(0);
  const tabsRef = useReveal(100);

  // Earnings
  const earningsContentRef = useReveal(0);
  const earningsStatsRef = useReveal(150);

  // Requirements
  const reqHeaderRef = useReveal(0);
  const reqCard0Ref = useReveal(0);
  const reqCard1Ref = useReveal(80);
  const reqCard2Ref = useReveal(160);
  const reqCard3Ref = useReveal(240);
  const reqCard4Ref = useReveal(320);
  const reqCard5Ref = useReveal(400);
  const reqCardRefs = [reqCard0Ref, reqCard1Ref, reqCard2Ref, reqCard3Ref, reqCard4Ref, reqCard5Ref];

  // CTA
  const ctaBannerRef = useReveal(0);

  return (
    <>
      <Helmet>
        <title>Drive With Stark Cabs | Become a Driver Partner in Kerala</title>
        <meta name="description" content="Join Stark Cabs as a driver partner and earn money by accepting ride requests in Kerala. Download the Stark Driver App and start driving today." />
        <meta name="keywords" content="Stark Cabs driver partner, drive with Stark Cabs Kerala, driver app Kerala, earn money driving Kerala, cab driver jobs Kerala, taxi driver Kerala, ride sharing driver Kerala, flexible income Kerala, Alappuzha cab driver, Kochi cab driver, Trivandrum cab driver, Kozhikode cab driver, Thrissur cab driver, driver registration Kerala, Stark Cabs India" />
        <meta name="author" content="Stark Cabs" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kerala" />
        <meta name="geo.position" content="9.4981;76.3388" />
        <meta name="ICBM" content="9.4981,76.3388" />
        <meta property="og:title" content="Drive With Stark Cabs - Driver App" />
        <meta property="og:description" content="Become a Stark Cabs driver partner in Kerala and earn flexible income with the Stark Driver App." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://starkcabs.in/driver" />

        <link rel="icon" href="/assets/images/favicon.png" sizes="any" />
        <meta property="og:image" content="https://starkcabs.in/assets/images/favicon.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://starkcabs.in/assets/images/favicon.png" />

      </Helmet>

      {/* ── PAGE HERO — CSS keyframe, no observer needed ─────────────────── */}

      <PageHero
        title={"Drive With"}
        highlight={"Stark"}
        subTitle={"Cabs"}
        currentPage={'Drive With Us'}
        backgroundImage={'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315363/bg_2_xyc6ne.webp'}

      />

      {/* ── DRIVER BANNER ────────────────────────────────────────────────── */}
      <section className="driver-banner">
        <div className="container">
          <div ref={bannerInnerRef} className="driver-banner-inner anim-scale-up">
            <div ref={bannerContentRef} className="driver-banner-content anim-fade-left">
              <div className="driver-banner-badge">Now Accepting Drivers in Kerala</div>
              <h2>Drive with Stark Cabs<br />&amp; <span>Earn More</span></h2>
              <p>Join our growing network of driver partners in Kerala. Set your own hours, accept rides near you, and earn a reliable income — all through the Stark Driver App.</p>
              <div className="driver-cta-btns">
                <a href="https://play.google.com/store/apps/details?id=com.starkcabs.starkdriver" className="btn-primary">Download Driver App</a>
                <a href="/contact" className="btn-ghost">Contact Us</a>
              </div>
            </div>
            <div ref={bannerImgRef} className="driver-banner-img anim-fade-right">
              <img src="https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315362/bg_1_iqiaom.webp" alt="Stark Cabs Driver Partner" />
              <div className="driver-banner-img-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ───────────────────────────────────────────────── */}
      <section className="drv-strip-section">
        <div className="container">
          <div ref={stripGridRef} className="drv-strip-grid anim-fade-up anim-stagger">
            {[
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>, t: "Driver Dashboard", s: "Manage Trips" },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>, t: "Accept Requests", s: "Nearby Riders" },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>, t: "Earn More", s: "Flexible Income" },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>, t: "GPS Navigation", s: "Smart Directions" },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.07 19.79 19.79 0 0 1 1.61.45 2 2 0 0 1 3.62 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>, t: "24/7 Support", s: "Driver Assistance" },
            ].map((item, i) => (
              <div className="drv-strip-item" key={i}>
                <div className="drv-strip-icon">{item.icon}</div>
                <h4>{item.t}</h4><p>{item.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO JOIN ──────────────────────────────────────────────────── */}
      <section className="join-section">
        <div className="container">
          <div ref={joinHeaderRef} className="join-header anim-fade-up">
            <span className="section-label">Getting Started</span>
            <h2 className="section-title">How to Become a Driver</h2>
            <p className="section-desc">Joining Stark Cabs as a driver partner in Kerala is quick and straightforward.</p>
          </div>
          <div className="join-grid">
            {[
              { n: "1", t: "Download the App", p: "Install the Stark Driver App from the Google Play Store to get started immediately.", ref: joinStep1Ref },
              { n: "2", t: "Create Your Profile", p: "Register with your details, vehicle info, and upload the required documents for verification.", ref: joinStep2Ref },
              { n: "3", t: "Get Verified", p: "Our team reviews your documents and approves your driver account — usually within 24 hours.", ref: joinStep3Ref },
              { n: "4", t: "Start Earning", p: "Go online, accept ride requests nearby, and start earning flexible income with Stark Cabs.", ref: joinStep4Ref },
            ].map(s => (
              <div ref={s.ref} className="join-step anim-fade-up" key={s.n}>
                <div className="join-num">{s.n}</div>
                <h3>{s.t}</h3><p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES TABS ────────────────────────────────────────────────── */}
      <section className="drv-features-section">
        <div className="container">
          <div ref={featHeaderRef} className="drv-features-header anim-fade-up">
            <span className="section-label">Stark Driver App</span>
            <h2 className="section-title">Everything in One App</h2>
            <p className="section-desc">The Stark Driver App is built to make driving easy, profitable, and stress-free.</p>
          </div>
          <div ref={tabsRef} className="tabs anim-fade-up">
            {["features", "description", "reviews"].map(t => (
              <button key={t} className={`tab-btn${activeTab === t ? " active" : ""}`} onClick={() => handleTabChange(t)}>
                {t === "features" ? "App Features" : t === "description" ? "Description" : "Driver Reviews"}
              </button>
            ))}
          </div>

          {activeTab === "features" && (
            <div key={`feat-${tabKey}`} className="drv-feat-grid tab-panel-enter">
              {DRIVER_FEATURES.map((f, i) => (
                <div className="drv-feat-item" key={i} style={{ animationDelay: `${i * 0.04}s` }}>
                  <div className="feat-check"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "description" && (
            <div key={`desc-${tabKey}`} className="drv-desc-grid tab-panel-enter">
              <div className="drv-desc-img"><img src="https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315362/bg_1_iqiaom.webp" alt="Stark Driver App" /></div>
              <div className="drv-desc-content" style={{ animationDelay: "0.1s" }}>
                <span className="section-label">About the Driver App</span>
                <h3>Built for Drivers,<br />Powered by Smart Tech</h3>
                <p>The Stark Driver App allows drivers in Kerala to earn income by accepting ride requests from nearby passengers. With smart trip management, navigation support and transparent earnings, drivers can easily manage rides and maximise their daily income.</p>
                <p>Whether you drive part-time or full-time, Stark Cabs provides a reliable platform to connect with riders and grow your earnings. The app is designed to be simple, intuitive, and built around the needs of local drivers in Kerala.</p>
                <p>From live GPS navigation to a clean earnings dashboard, every feature is designed to help you focus on driving — and earning more.</p>
                <a href="https://play.google.com/store/apps/details?id=com.starkcabs.starkdriver" className="btn-primary" style={{ marginTop: "28px" }}>Download on Google Play</a>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div key={`rev-${tabKey}`} className="drv-reviews-grid tab-panel-enter">
              {DRIVER_REVIEWS.map((r, i) => (
                <div className="review-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="review-stars">{"★★★★★".split("").map((s, j) => <span key={j} className="review-star">{s}</span>)}</div>
                  <p className="review-text">{r.text}</p>
                  <div className="review-author">
                    <div className="review-avatar" style={r.color ? { background: r.color } : {}}>{r.initials}</div>
                    <div><div className="review-name">{r.name}</div><div className="review-date">{r.date}</div></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── EARNINGS & PERKS ─────────────────────────────────────────────── */}
      <section className="earnings-section">
        <div className="container">
          <div className="earnings-grid">
            <div ref={earningsContentRef} className="earnings-content anim-fade-left">
              <span className="section-label">Driver Benefits</span>
              <h2 className="section-title">Why Drive with<br />Stark Cabs?</h2>
              <p className="section-desc">We give our driver partners everything they need to succeed — from a simple app to transparent earnings and round-the-clock support.</p>
              <div className="earnings-perks">
                {[
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>, t: "Flexible Hours", p: "Work whenever you want. No fixed shifts — go online and offline anytime from within the app." },
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>, t: "Transparent Earnings", p: "See exactly what you earn on every trip. No hidden deductions, no surprises on your payout." },
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>, t: "Growing Rider Base", p: "As Stark Cabs grows across Kerala, more ride requests mean more earning opportunities for you." },
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.07 19.79 19.79 0 0 1 1.61.45 2 2 0 0 1 3.62 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>, t: "24/7 Driver Support", p: "Our support team is always available to help you with any issues on or off the road." },
                ].map((perk, i) => (
                  <div className="perk" key={i}>
                    <div className="perk-icon">{perk.icon}</div>
                    <div><strong>{perk.t}</strong><p>{perk.p}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div ref={earningsStatsRef} className="earnings-stats anim-fade-right anim-stagger">
              {[["500+", "Active Riders"], ["24/7", "Driver Support"], ["100%", "Transparent Pay"], ["4.8★", "Driver Rating"]].map(([n, l]) => (
                <div className="earn-stat" key={l}>
                  <div className="earn-num">{n}</div>
                  <div className="earn-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REQUIREMENTS ─────────────────────────────────────────────────── */}
      <section className="requirements-section">
        <div className="container">
          <div ref={reqHeaderRef} className="req-header anim-fade-up">
            <span className="section-label">Requirements</span>
            <h2 className="section-title">What You'll Need</h2>
            <p className="section-desc">Here's what you need to get started as a Stark Cabs driver partner in Kerala.</p>
          </div>
          <div className="req-grid">
            {REQUIREMENTS.map((r, i) => (
              <div ref={reqCardRefs[i]} className="req-card anim-fade-up" key={i}>
                <span className="req-icon">{r.icon}</span>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="drv-cta-section">
        <div className="container">
          <div ref={ctaBannerRef} className="cta-banner anim-scale-up">
            <h2>Ready to Start<br /><span>Driving &amp; Earning?</span></h2>
            <p>Download the Stark Driver App today and join our growing fleet of driver partners in Kerala. Your flexible income awaits.</p>
            <div className="cta-actions">
              <a href="https://play.google.com/store/apps/details?id=com.starkcabs.starkdriver" className="btn-primary">Download Driver App</a>
              <a href="/contact" className="btn-ghost">Have Questions? <span>→</span></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}