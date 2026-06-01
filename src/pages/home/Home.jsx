import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './home.css';
import { SERVICES, WHY_CARDS } from '../../themes/constants/services';
import { TESTIMONIALS } from '../../themes/constants/testimonials';
import { BLOG_POSTS } from '../../themes/constants/blogs';

/* ─────────────────────────────────────────
   Tiny SVG icon helpers (inline, no deps)
───────────────────────────────────────── */
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
function IconPin() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2">
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
        </svg>
    );
}
function IconDrop() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
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
function IconCheck() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    );
}
function IconApple() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.32.07 2.22.74 2.98.76 1.21-.15 2.35-.88 3.65-.74 1.55.18 2.73.83 3.5 2.05-3.24 1.93-2.77 6.03.47 7.45-.51 1.44-1.18 2.87-2.6 4.34zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
    );
}
function IconAndroid() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.18 23.76c.3.17.64.22.98.15l12.08-12.08-3.33-3.33L3.18 23.76zM20.65 10.36l-2.95-1.67L14.34 12l3.36 3.36 2.95-1.67c.84-.48.84-2.85 0-3.33zM2.21 1.08C2.08 1.3 2 1.58 2 1.9v20.2c0 .32.08.6.21.82l.1.1L14.1 11.12v-.24L2.31.98l-.1.1zM3.18.24l9.73 9.73-3.33 3.33L3.18.24z" />
        </svg>
    );
}

/* ─────────────────────────────────────────
   useScrollReveal hook
───────────────────────────────────────── */
function useScrollReveal() {
    useEffect(() => {

        const elements = document.querySelectorAll('.reveal');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');

                        observer.unobserve(entry.target);
                    }

                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();

    }, []);
}


/* ─────────────────────────────────────────
   Stars helper
───────────────────────────────────────── */
function Stars() {
    return (
        <div className="testi-stars">
            {[...Array(5)].map((_, i) => <span key={i} className="testi-star">★</span>)}
        </div>
    );
}

/* ═══════════════════════════════════════
   HOME PAGE COMPONENT
═══════════════════════════════════════ */
export default function Home() {
    useScrollReveal();

    function handleBookRide() {
        alert('Download the Stark Rider App to book your ride!');
    }

    return (
        <>
            <Helmet>
                <title>Stark Cabs Kerala | Online Taxi &amp; Cab Booking Service</title>
                <meta name="description" content="Stark Cabs is a reliable ride booking service in Kerala offering fast, affordable and safe cab services. Book rides instantly through the Stark Rider App or drive and earn with Stark Driver App in Kerala." />
                <meta name="keywords"
                    content="Stark Cabs Kerala, Stark Cabs taxi service, Stark Cabs app, cab booking Kerala, taxi booking Kerala, online taxi booking Kerala, ride booking app Kerala, Kerala cab service, Kerala taxi service, airport taxi Kerala, local taxi Kerala, outstation taxi Kerala, chauffeur service Kerala, premium cab service Kerala, affordable taxi Kerala, 24/7 cab service Kerala, best taxi app Kerala, taxi near me Kerala, cab near me Kerala, ride sharing Kerala, car rental Kerala, airport pickup Kerala, airport drop Kerala, Kochi taxi service, Trivandrum taxi service, Calicut taxi service, Thrissur taxi service, Kannur taxi service, Kollam taxi service, Alappuzha taxi service, Kottayam taxi service, Palakkad taxi service, Malappuram taxi service, Kasaragod taxi service, Pathanamthitta taxi service, Idukki taxi service, Wayanad taxi service, Ernakulam taxi service, Kozhikode taxi service, Thiruvananthapuram taxi service, taxi service Thiruvananthapuram, taxi service Kollam, taxi service Pathanamthitta, taxi service Alappuzha, taxi service Kottayam, taxi service Idukki, taxi service Ernakulam, taxi service Thrissur, taxi service Palakkad, taxi service Malappuram, taxi service Kozhikode, taxi service Wayanad, taxi service Kannur, taxi service Kasaragod, cab service Kochi, cab service Trivandrum, cab service Kozhikode, cab service Thrissur, cab service Kerala airport, Kerala travel taxi, Kerala tourist cab, Kerala travel app, driver app Kerala, Stark Cabs India" />
                <meta property="og:title" content="Stark Cabs Kerala | Online Taxi & Cab Booking Service" />
                <meta property="og:description" content="Fast, safe, and affordable cab services in Kerala. Book instantly with the Stark Rider App." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://starkcabs.in/" />
                <meta name="geo.region" content="IN-KL" />
                <meta name="geo.placename" content="Kerala" />
                <link rel="canonical" href="https://starkcabs.in/" />

                <link rel="icon" href="/assets/images/favicon.png" sizes="any" />
                <meta property="og:image" content="https://starkcabs.in/assets/images/favicon.png" />
                <meta property="og:image:width" content="512" />
                <meta property="og:image:height" content="512" />
                <meta property="og:image:type" content="image/png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://starkcabs.in/assets/images/favicon.png" />

            </Helmet>

            {/* ── HERO ── */}
            <section className="hero" id="home">
                {/* <div className="hero-bg" aria-hidden="true" /> */}
                <img
                    src="https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315364/hero_bg_1_jsik8h.webp"
                    alt="Stark Cabs Kerala"
                    className="hero-bg"
                    fetchPriority="high"
                    decoding="async"
                />
                <div className="hero-gradient" aria-hidden="true" />
                <div className="hero-orb" aria-hidden="true" />
                <div className="hero-inner">
                    {/* Left content */}
                    <div className="hero-content">
                        <div className="hero-badge">Now in Kerala</div>
                        <h1>
                            Your Ride,<br />
                            <em>Anywhere</em> in<br />
                            Kerala.
                        </h1>
                        <p className="hero-desc">
                            Fast, safe, and affordable cab services at your fingertips. Book instantly with the Stark
                            Rider App and travel comfortably with verified drivers.
                        </p>
                        <div className="hero-actions">
                            <Link to="/download" className="btn-primary">
                                <IconDownload />
                                Download Rider App
                            </Link>
                            <Link to="/driver" className="btn-ghost">
                                Become a Driver <IconArrow />
                            </Link>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-num">500<span>+</span></div>
                                <div className="stat-label">Happy Riders</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-num">24<span>/7</span></div>
                                <div className="stat-label">Availability</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-num">100<span>%</span></div>
                                <div className="stat-label">Verified Drivers</div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Book Card */}
                    <div className="hero-card" aria-label="Quick book form">
                        <h3>Quick Book a Ride</h3>
                        <p>Enter your pickup &amp; drop location to get started</p>
                        <div className="input-group">
                            <label htmlFor="pickup">Pickup Location</label>
                            <div className="input-group-inner">
                                <IconPin />
                                <input id="pickup" type="text" placeholder="Enter pickup location" />
                            </div>
                        </div>
                        <div className="route-line">
                            <div className="route-line-bar" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="dropoff">Drop-off Location</label>
                            <div className="input-group-inner">
                                <IconDrop />
                                <input id="dropoff" type="text" placeholder="Enter destination" />
                            </div>
                        </div>
                        <button className="book-btn" onClick={handleBookRide}>
                            Book My Ride →
                        </button>
                        <p className="book-note">Or download the app for instant booking</p>
                    </div>
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section className="about-section">
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
                        <div className="about-content reveal reveal-delay-1">
                            <span className="section-label">About Stark Cabs</span>
                            <h2 className="section-title">Reliable Rides,<br />Right Where You Are.</h2>
                            <p className="section-desc">
                                Stark Cabs is a modern ride booking platform based in Kerala. We connect passengers
                                with nearby verified drivers instantly through our smart mobile apps — making every
                                journey safe, comfortable, and stress-free.
                            </p>
                            <div className="about-features">
                                <div className="about-feature">
                                    <div className="about-feature-icon"><IconShield /></div>
                                    <div>
                                        <strong>Verified Drivers</strong>
                                        <p>All our driver partners undergo thorough background checks and training before onboarding.</p>
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
                                        <p>No hidden fees or surge surprises. See your estimated fare before you confirm the ride.</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '36px' }}>
                                <Link to="/about" className="btn-primary">Learn More About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICES ── */}
            <section className="services-section">
                <div className="container">
                    <div className="services-header">
                        <div className="reveal">
                            <span className="section-label">What We Offer</span>
                            <h2 className="section-title">Our Cab Services<br />in Kerala</h2>
                        </div>
                        <Link to="/services" className="btn-ghost reveal reveal-delay-1" style={{ flexShrink: 0 }}>
                            All Services <IconArrow />
                        </Link>
                    </div>
                    <div className="services-grid">
                        {SERVICES.map((s, i) => (
                            <div
                                key={s.num}
                                className={`service-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}
                            >
                                <div className="service-num">{s.num}</div>
                                <div className="service-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW IT WORKS ── */}
            <section className="how-section">
                <div className="container">
                    <div className="how-header reveal">
                        <span className="section-label">Simple Process</span>
                        <h2 className="section-title">How Stark Cabs Works</h2>
                        <p className="section-desc">
                            Getting a reliable ride in Kerala takes just four simple steps through the Stark Rider App.
                        </p>
                    </div>
                    <div className="how-grid">
                        {[
                            { n: '1', title: 'Download the App', desc: 'Install the Stark Rider App from the Play Store or App Store to start your journey.' },
                            { n: '2', title: 'Set Pickup & Drop', desc: 'Enter your pickup point and destination easily within the app interface.' },
                            { n: '3', title: 'Get Matched', desc: 'Nearby verified drivers instantly receive your ride request and accept it.' },
                            { n: '4', title: 'Enjoy Your Ride', desc: 'Travel safely and comfortably to your destination with Stark Cabs.' },
                        ].map((step, i) => (
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

            {/* ── WHY CHOOSE US ── */}
            <section className="why-section">
                <div className="container">
                    <div className="reveal" style={{ textAlign: 'center', marginBottom: '16px' }}>
                        <span className="section-label">Why Choose Us</span>
                        <h2 className="section-title">Why Riders Love Stark Cabs</h2>
                        <p className="section-desc" style={{ margin: '16px auto 0' }}>
                            We combine technology, safety, and local expertise to deliver the best ride experience in Kerala.
                        </p>
                    </div>
                    <div className="why-grid">
                        {WHY_CARDS.map((c, i) => (
                            <div key={c.title} className={`why-card reveal${i % 4 > 0 ? ` reveal-delay-${i % 4}` : ''}`}>
                                <img src={c.img} alt={c.title}
                                    className="why-img"
                                    loading="lazy"
                                    decoding="async" />
                                <div className="why-body">
                                    <h3>{c.title}</h3>
                                    <p>{c.desc}</p>
                                </div>
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
                            Thousands of riders trust Stark Cabs daily for safe and reliable cab services across Kerala.
                        </p>
                    </div>
                    <div className="testimonials-grid">
                        {TESTIMONIALS.map((t, i) => (
                            <div key={t.name} className={`testi-card reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''}`}>
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

            {/* ── APP DOWNLOAD ── */}
            <section className="app-section">
                <div className="container">
                    <div className="app-banner reveal">
                        <div>
                            <span className="section-label">Get the App</span>
                            <h2>Book Your Ride<br />with <span>Stark Cabs</span> Today</h2>
                            <p>
                                Download the Stark Rider App for instant ride booking, real-time tracking, and affordable
                                travel anywhere in Kerala.
                            </p>
                            <div className="app-buttons">
                                <Link to="/download" className="app-btn">
                                    <IconApple />
                                    <div className="app-btn-text">
                                        <small>Download on the</small>
                                        <strong>App Store</strong>
                                    </div>
                                </Link>
                                <Link to="/download" className="app-btn">
                                    <IconAndroid />
                                    <div className="app-btn-text">
                                        <small>Get it on</small>
                                        <strong>Google Play</strong>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="driver-cta">
                            <p>Are you a driver?<br />Join our growing fleet.</p>
                            <Link to="/driver">
                                Become a Driver <IconArrow />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BLOG ── */}
            <section className="blog-section">
                <div className="container">
                    <div className="blog-header">
                        <div className="reveal">
                            <span className="section-label">Blog</span>
                            <h2 className="section-title">Latest Updates</h2>
                        </div>
                        <Link to="/blog" className="btn-ghost reveal reveal-delay-1" style={{ flexShrink: 0 }}>
                            View All Posts <IconArrow />
                        </Link>
                    </div>
                    <div className="blog-grid">
                        {BLOG_POSTS.slice(0, 3).map((post, i) => (
                            <Link
                                key={post.title}
                                to="/blog"
                                className={`blog-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}
                            >
                                <img src={post.img} alt={post.alt} className="blog-img" />
                                <div className="blog-body">
                                    <div className="blog-meta">
                                        <span className="blog-tag">{post.tag}</span>
                                        <span className="blog-date">{post.date}</span>
                                    </div>
                                    <div className="blog-title">{post.title}</div>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <div className="blog-arrow">Read More <span>→</span></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}