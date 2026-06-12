import { useState, useEffect } from "react";
import "./download.css";
import { Helmet } from "react-helmet-async";
import PageHero from "../../components/pageHero/PageHero";
import { TESTIMONIALS } from "../../themes/constants/testimonials";

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}


const FEATURES = [
  "Quick Ride Booking", "Live GPS Tracking", "Verified Safe Drivers", "Transparent Pricing",
  "Ride History", "Driver Ratings", "Secure Booking", "Multiple Locations", "Instant Notifications",
  "Easy Interface", "Fast Driver Matching", "Comfortable Rides", "Affordable Travel",
  "Secure Platform", "24/7 Availability",
];

const STRIP_ITEMS = [
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>, title: "Instant Booking", sub: "Nearby Drivers" },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>, title: "Live Tracking", sub: "Real-time GPS" },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>, title: "Affordable Fares", sub: "Transparent Pricing" },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, title: "Driver Ratings", sub: "Verified Drivers" },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>, title: "24/7 Service", sub: "Anytime Rides" },
];

const HOW_STEPS = [
  { n: "1", t: "Download the App", p: "Install the Stark Rider App from Google Play Store or the App Store on your phone." },
  { n: "2", t: "Create an Account", p: "Sign up with your phone number and verify your account to get started in seconds." },
  { n: "3", t: "Set Your Location", p: "Enter your pickup location and destination within the app to see nearby drivers." },
  { n: "4", t: "Enjoy Your Ride", p: "Confirm your ride, get matched with a driver, and travel safely to your destination." },
];

export default function Download() {
  const [activeTab, setActiveTab] = useState("features");
  useReveal();

  return (
    <>
      <Helmet>
        <title>Download Stark Rider App | Book Rides in Kerala</title>
        <meta name="description" content="Download the Stark Rider App to book fast, safe and affordable taxi rides in Kerala. Track drivers in real time, enjoy reliable cab services and travel comfortably with Stark Cabs." />
        <meta name="keywords" content="Stark Cabs app download, cab booking Kerala, taxi booking Kerala, online taxi booking Kerala, ride booking app Kerala, Kerala cab service, Kerala taxi service, airport taxi Kerala, local taxi Kerala, outstation taxi Kerala, affordable taxi Kerala, 24/7 cab service Kerala, best taxi app Kerala, taxi near me Kerala, cab near me Kerala, Kochi taxi service, Trivandrum taxi service, Calicut taxi service, Thrissur taxi service, Alappuzha taxi service, Kottayam taxi service, Ernakulam taxi service, Kozhikode taxi service, Thiruvananthapuram taxi service, Kerala travel taxi, Kerala tourist cab, Kerala travel app, Stark Cabs India" />
        <meta name="author" content="Stark Cabs" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kerala" />
        <meta name="geo.position" content="9.4981;76.3388" />
        <meta name="ICBM" content="9.4981,76.3388" />
        <meta property="og:title" content="Download Stark Rider App - Taxi Booking in Kerala" />
        <meta property="og:description" content="Download the Stark Rider App and book rides instantly with verified drivers in Kerala." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://starkcabs.in/download" />

        <link rel="icon" href="https://starkcabs.in/assets/images/favicon.png" sizes="any" />
        <meta property="og:image" content="https://starkcabs.in/assets/images/favicon.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://starkcabs.in/assets/images/favicon.png" />

      </Helmet>

      {/* PAGE HERO */}
      <PageHero
        title={"Download Our"}
        highlight={"App"}
        currentPage={'Download App'}
        backgroundImage={'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315363/bg_2_xyc6ne.webp'}

      />

      {/* APP HERO BANNER */}
      <section className="app-hero">
        <div className="container">
          <div className="app-hero-inner reveal">
            <div className="app-hero-content">
              <div className="app-badge">Available Now on Android</div>
              <h2>Book Rides Instantly<br />in <span>Kerala</span></h2>
              <p>Download the Stark Rider App and get matched with a verified nearby driver in seconds. Fast, safe, affordable — all at your fingertips.</p>
              <div className="app-download-btns">
                <a href="https://play.google.com/store/apps/details?id=com.starkcabs.stark" className="app-dl-btn primary-dl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.22.98.15l12.08-12.08-3.33-3.33L3.18 23.76zM20.65 10.36l-2.95-1.67L14.34 12l3.36 3.36 2.95-1.67c.84-.48.84-2.85 0-3.33zM2.21 1.08C2.08 1.3 2 1.58 2 1.9v20.2c0 .32.08.6.21.82l.1.1L14.1 11.12v-.24L2.31.98l-.1.1zM3.18.24l9.73 9.73-3.33 3.33L3.18.24z" /></svg>
                  <div className="app-dl-text"><small>Get it on</small><strong>Google Play</strong></div>
                </a>
                <a href="#" className="app-dl-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.32.07 2.22.74 2.98.76 1.21-.15 2.35-.88 3.65-.74 1.55.18 2.73.83 3.5 2.05-3.24 1.93-2.77 6.03.47 7.45-.51 1.44-1.18 2.87-2.6 4.34zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                  <div className="app-dl-text"><small>Download on the</small><strong>App Store</strong></div>
                </a>
              </div>
            </div>
            <div className="app-hero-img">
              <img src="https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315362/bg_3_nyjtfd.webp" alt="Stark Rider App - Book Rides in Kerala" />
              <div className="app-hero-img-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="strip-section">
        <div className="container">
          <div className="strip-grid">
            {STRIP_ITEMS.map((item, i) => (
              <div className={`strip-item reveal reveal-delay-${i}`} key={i}>
                <div className="strip-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES TABS */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-header reveal">
            <span className="section-label">Stark Rider App</span>
            <h2 className="section-title">Everything You Need,<br />In One App</h2>
            <p className="section-desc">The Stark Rider App is designed to make booking a cab in Kerala as simple and quick as possible.</p>
          </div>
          <div className="tabs reveal reveal-delay-1">
            {["features", "description", "reviews"].map(t => (
              <button key={t} className={`tab-btn${activeTab === t ? " active" : ""}`} onClick={() => setActiveTab(t)}>
                {t === "features" ? "App Features" : t === "description" ? "Description" : "Rider Reviews"}
              </button>
            ))}
          </div>

          {activeTab === "features" && (
            <div className="feat-grid">
              {FEATURES.map((f, i) => (
                <div className={`feat-item reveal visible reveal-delay-${i % 3}`} key={i}>
                  <div className="feat-check"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg></div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "description" && (
            <div className="desc-grid">
              <div className="desc-img reveal visible">
                <img src="https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315362/bg_3_nyjtfd.webp" alt="Stark Rider App" />
              </div>
              <div className="desc-content reveal visible reveal-delay-1">
                <span className="section-label">About the Rider App</span>
                <h3>Your Travel Partner<br />Across Kerala</h3>
                <p>The Stark Rider App makes travel across Kerala simple and convenient. With just a few taps, you can book a ride, connect with nearby verified drivers and reach your destination safely.</p>
                <p>Our platform offers reliable taxi services with real-time tracking, verified drivers and affordable pricing. Whether it's a short city trip or a longer outstation ride, Stark Cabs ensures a smooth and comfortable journey every time.</p>
                <p>From the moment you open the app to the moment you arrive, every detail is designed to give you a seamless, stress-free travel experience in Kerala.</p>
                <a href="https://play.google.com/store/apps/details?id=com.starkcabs.stark" className="btn-primary" style={{ marginTop: "28px" }}>Download on Play Store</a>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="reviews-grid">
              {TESTIMONIALS.slice(0, 4).map((r, i) => (
                <div className={`review-card reveal visible reveal-delay-${i % 2}`} key={i}>
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

      {/* RATING SUMMARY */}
      <section className="rating-section">
        <div className="container">
          <div className="rating-grid">
            <div className="rating-big reveal visible">
              <div className="rating-number">4.8<span>★</span></div>
              <div className="rating-stars-big">{"★★★★".split("").map((s, i) => <span key={i} className="rating-star-big">{s}</span>)}<span className="rating-star-big" style={{ opacity: 0.4 }}>★</span></div>
              <div className="rating-count">Based on 35 Reviews</div>
            </div>
            <div className="rating-bars reveal visible reveal-delay-1">
              <div style={{ marginBottom: "20px" }}>
                <span className="section-label">App Ratings</span>
                <h3 className="rating-title">Riders Love<br />Stark Cabs</h3>
              </div>
              {[[5, "98%", "20 reviews"], [4, "85%", "10 reviews"], [3, "70%", "5 reviews"], [2, "10%", "0 reviews"], [1, "2%", "0 reviews"]].map(([stars, pct, count]) => (
                <div className="rating-row" key={stars}>
                  <div className="rating-label">{stars} <span>★</span></div>
                  <div className="rating-bar-wrap"><div className="rating-bar" style={{ width: pct, opacity: stars >= 3 ? 1 : stars === 2 ? 0.5 : 0.3 }} /></div>
                  <div className="rating-pct">{pct}</div>
                  <div className="rating-total">{count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO DOWNLOAD */}
      <section className="how-section">
        <div className="container">
          <div className="how-header reveal">
            <span className="section-label">Getting Started</span>
            <h2 className="section-title">How to Get Started</h2>
            <p className="section-desc">Download the Stark Rider App and book your first ride in Kerala in four simple steps.</p>
          </div>
          <div className="how-grid">
            {HOW_STEPS.map((s, i) => (
              <div className={`how-step reveal reveal-delay-${i}`} key={s.n}>
                <div className="how-num">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRIVER CTA */}
      <section className="also-driver">
        <div className="container">
          <div className="also-driver-card reveal">
            <div className="also-driver-text">
              <h3>Are You a Driver? Join as a <span>Stark Partner</span></h3>
              <p>Earn flexible income by accepting ride requests in Kerala. Download the Stark Driver App and start earning today on your own schedule.</p>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.starkcabs.starkdriver" className="btn-primary" style={{ flexShrink: 0 }}>Download Driver App</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dl-cta-section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Ready to Book Your<br /><span>First Ride?</span></h2>
            <p>Download the Stark Rider App now and experience the fastest, safest cab service in Kerala. Your ride is just a tap away.</p>
            <div className="cta-actions">
              <a href="https://play.google.com/store/apps/details?id=com.starkcabs.stark" className="btn-primary">Get the Rider App</a>
              <a href="/services" className="btn-ghost">View Our Services <span>→</span></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}