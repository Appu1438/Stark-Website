import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./blog.css";
import { Helmet } from "react-helmet-async";
import { BLOG_POSTS } from "../../themes/constants/blogs";
import PageHero from "../../components/pageHero/PageHero";



const topics = [
    {
        icon: "💡",
        title: "Ride Tips",
        desc: "Smart advice for getting the most out of every journey with Stark Cabs.",
        count: "3 Articles",
    },
    {
        icon: "🛡️",
        title: "Safety",
        desc: "How Stark Cabs keeps every ride safe with verified drivers and GPS tracking.",
        count: "2 Articles",
        delay: "reveal-delay-1",
    },
    {
        icon: "📱",
        title: "Technology",
        desc: "How modern ride booking apps are transforming transportation in Kerala.",
        count: "2 Articles",
        delay: "reveal-delay-2",
    },
    {
        icon: "🚗",
        title: "Driver Stories",
        desc: "Insights and tips for Stark Cabs driver partners across Kerala.",
        count: "1 Article",
        delay: "reveal-delay-3",
    },
];

// ── Scroll Reveal Hook ──
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

export default function Blog() {
    useReveal();

    const featuredPost = BLOG_POSTS[0];
    const gridPosts = BLOG_POSTS.slice(1);

    return (
        <>
            <Helmet>
                <title>Stark Cabs Blog | Taxi &amp; Ride Booking Updates in Kerala</title>
                <meta
                    name="description"
                    content="Read the latest updates from Stark Cabs including ride booking tips, taxi service news, travel advice and transportation updates in Kerala."
                />
                <meta
                    name="keywords"
                    content="Stark Cabs Kerala, Stark Cabs taxi service, Stark Cabs app, cab booking Kerala, taxi booking Kerala, online taxi booking Kerala, ride booking app Kerala, Kerala cab service, Kerala taxi service, airport taxi Kerala, local taxi Kerala, outstation taxi Kerala, chauffeur service Kerala, premium cab service Kerala, affordable taxi Kerala, 24/7 cab service Kerala, best taxi app Kerala, taxi near me Kerala, cab near me Kerala, ride sharing Kerala, car rental Kerala, airport pickup Kerala, airport drop Kerala, Kochi taxi service, Trivandrum taxi service, Calicut taxi service, Thrissur taxi service, Kannur taxi service, Kollam taxi service, Alappuzha taxi service, Kottayam taxi service, Palakkad taxi service, Malappuram taxi service, Kasaragod taxi service, Pathanamthitta taxi service, Idukki taxi service, Wayanad taxi service, Ernakulam taxi service, Kozhikode taxi service, Thiruvananthapuram taxi service, taxi service Thiruvananthapuram, taxi service Kollam, taxi service Pathanamthitta, taxi service Alappuzha, taxi service Kottayam, taxi service Idukki, taxi service Ernakulam, taxi service Thrissur, taxi service Palakkad, taxi service Malappuram, taxi service Kozhikode, taxi service Wayanad, taxi service Kannur, taxi service Kasaragod, cab service Kochi, cab service Trivandrum, cab service Kozhikode, cab service Thrissur, cab service Kerala airport, Kerala travel taxi, Kerala tourist cab, Kerala travel app, driver app Kerala, Stark Cabs India"
                />
                <meta name="author" content="Stark Cabs" />
                <meta name="geo.region" content="IN-KL" />
                <meta name="geo.placename" content="Kerala" />
                <meta name="geo.position" content="9.4981;76.3388" />
                <meta name="ICBM" content="9.4981,76.3388" />
                <meta property="og:title" content="Stark Cabs Blog - Taxi & Ride Booking Updates" />
                <meta
                    property="og:description"
                    content="Discover travel tips, ride booking advice and updates about taxi services in Kerala from Stark Cabs."
                />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://starkcabs.in/blog" />

                <link rel="icon" href="/assets/images/favicon.png" sizes="any" />
                <meta property="og:image" content="https://starkcabs.in/assets/images/favicon.png" />
                <meta property="og:image:width" content="512" />
                <meta property="og:image:height" content="512" />
                <meta property="og:image:type" content="image/png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://starkcabs.in/assets/images/favicon.png" />

            </Helmet>

            <div className="blog-page-wrapper">
                {/* ── PAGE HERO ── */}

                <PageHero
                    title={"Our"}
                    highlight={"Blogs"}
                    currentPage={'Blog'}
                    backgroundImage={'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315363/bg_2_xyc6ne.webp'}

                />

                {/* ── BLOG SECTION ── */}
                <section className="blog-section">
                    <div className="container">
                        <div className="blog-header">
                            <div className="reveal">
                                <span className="section-label">Latest Updates</span>
                                <h2 className="section-title">
                                    Ride Booking Tips &amp;
                                    <br />
                                    Stark Cabs News
                                </h2>
                            </div>
                            <p
                                className="section-desc reveal reveal-delay-1"
                                style={{ marginTop: 0, maxWidth: 320 }}
                            >
                                Stay up to date with the latest from Stark Cabs — travel tips, news, and updates
                                for Kerala.
                            </p>
                        </div>

                        {/* ── FEATURED POST ── */}
                        <Link to="/blog" className="featured-post reveal">
                            <div className="featured-img">
                                <img src={featuredPost.img} alt={featuredPost.alt} />
                                <div className="featured-img-overlay" />
                                <span className="featured-badge">Featured</span>
                            </div>
                            <div className="featured-body">
                                <div className="featured-meta">
                                    <span className="featured-tag">{featuredPost.tag}</span>
                                    <span className="featured-dot" />
                                    <span className="featured-date">{featuredPost.date}</span>
                                    <span className="featured-dot" />
                                    <span className="featured-author">Stark Cabs</span>
                                </div>
                                <h2>{featuredPost.title}</h2>
                                <p>{featuredPost.desc}</p>
                                <span className="featured-read">
                                    Read Article <span>→</span>
                                </span>
                            </div>
                        </Link>

                        {/* ── BLOG GRID ── */}
                        <div className="blog-grid blog-extra">
                            {gridPosts.map((post) => (
                                <Link
                                    to="/blog"
                                    key={post.id}
                                    className={`blog-card reveal${post.delay ? " " + post.delay : ""}`}
                                >
                                    <div className="blog-card-img">
                                        <img src={post.img} alt={post.alt} />
                                    </div>
                                    <div className="blog-card-body">
                                        <div className="blog-meta">
                                            <span className="blog-tag">{post.tag}</span>
                                            <span className="blog-date">{post.date}</span>
                                        </div>
                                        <h3>{post.title}</h3>
                                        <p>{post.desc}</p>
                                        <span className="blog-read">
                                            Read More <span>→</span>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── TOPICS SECTION ── */}
                <section className="topics-section">
                    <div className="container">
                        <div className="topics-header reveal">
                            <span className="section-label">Browse by Topic</span>
                            <h2 className="section-title">Explore Our Categories</h2>
                            <p className="section-desc">
                                Find articles on the topics that matter most to riders and drivers in Kerala.
                            </p>
                        </div>
                        <div className="topics-grid">
                            {topics.map((topic, i) => (
                                <div
                                    key={i}
                                    className={`topic-card reveal${topic.delay ? " " + topic.delay : ""}`}
                                >
                                    <span className="topic-icon">{topic.icon}</span>
                                    <h4>{topic.title}</h4>
                                    <p>{topic.desc}</p>
                                    <span className="topic-count">{topic.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── NEWSLETTER ── */}
                <section className="newsletter-section">
                    <div className="container">
                        <div className="newsletter-banner reveal">
                            <div className="newsletter-content">
                                <span className="section-label" style={{ marginBottom: 12 }}>
                                    Stay Updated
                                </span>
                                <h2>
                                    Get the Latest <span>Stark Cabs</span> News
                                </h2>
                                <p>
                                    Subscribe for travel tips, ride booking updates, and the latest news from Stark
                                    Cabs delivered straight to your inbox.
                                </p>
                            </div>
                            <div className="newsletter-form">
                                <div className="input-row">
                                    <input
                                        type="email"
                                        className="nl-input"
                                        placeholder="Enter your email address"
                                    />
                                    <button className="nl-btn">Subscribe</button>
                                </div>
                                <p>No spam. Unsubscribe anytime. We respect your privacy.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="cta-section">
                    <div className="container">
                        <div className="cta-banner reveal">
                            <div className="cta-text">
                                <h3>
                                    Ready to Book Your Next <span>Ride?</span>
                                </h3>
                                <p>
                                    Download the Stark Rider App and experience fast, safe, and affordable cab
                                    services anywhere in Kerala today.
                                </p>
                            </div>
                            <div className="cta-btns">
                                <Link to="/download" className="btn-primary">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                    Download App
                                </Link>
                                <Link to="/driver" className="btn-ghost">
                                    Become a Driver
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}