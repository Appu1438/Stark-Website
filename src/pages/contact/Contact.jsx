import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import "./contact.css";
import PageHero from "../../components/pageHero/PageHero";

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

export default function Contact() {
    useReveal();

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            name: form.querySelector("[name='name']").value,
            phone: form.querySelector("[name='phone']").value,
            email: form.querySelector("[name='email']").value,
            subject: form.querySelector("[name='subject']").value,
            message: form.querySelector("[name='message']").value,
        };
        const btn = form.querySelector(".form-submit-btn");
        btn.textContent = "Redirecting...";
        const msg = `
╔════════════════════╗
     ✨ NEW WEBSITE LEAD ✨
╚════════════════════╝

👤 *Customer Details*

━━━━━━━━━━━━━━━━━━
🧑 Name     : ${data.name}
📞 Phone    : ${data.phone}
📧 Email    : ${data.email}
📝 Subject  : ${data.subject}
━━━━━━━━━━━━━━━━━━

💬 *Customer Message*

"${data.message}"

━━━━━━━━━━━━━━━━━━
🌐 Lead Received From Website
⏰ ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━━━━
`;
        window.open(`https://wa.me/917399200800?text=${encodeURIComponent(msg)}`, "_blank");
        btn.style.background = "#22c55e";
        btn.textContent = "✓ Sent to WhatsApp";
        form.reset();
    }

    return (
        <>
            <Helmet>
                <title>Contact Stark Cabs | Taxi &amp; Cab Service in Kerala</title>
                <meta name="description" content="Contact Stark Cabs for reliable taxi services in Kerala. Reach us for ride bookings, customer support, driver registration or service inquiries. Safe and affordable cab services." />
                <meta name="keywords" content="Contact Stark Cabs Kerala, Stark Cabs taxi service, Stark Cabs app, cab booking Kerala, taxi booking Kerala, online taxi booking Kerala, ride booking app Kerala, Kerala cab service, Kerala taxi service, airport taxi Kerala, local taxi Kerala, outstation taxi Kerala, chauffeur service Kerala, premium cab service Kerala, affordable taxi Kerala, 24/7 cab service Kerala, best taxi app Kerala, taxi near me Kerala, cab near me Kerala, ride sharing Kerala, car rental Kerala, airport pickup Kerala, airport drop Kerala, Kochi taxi service, Trivandrum taxi service, Calicut taxi service, Thrissur taxi service, Kannur taxi service, Kollam taxi service, Alappuzha taxi service, Kottayam taxi service, Palakkad taxi service, Malappuram taxi service, Kasaragod taxi service, Pathanamthitta taxi service, Idukki taxi service, Wayanad taxi service, Ernakulam taxi service, Kozhikode taxi service, Thiruvananthapuram taxi service" />
                <meta name="author" content="Stark Cabs" />
                <meta name="geo.region" content="IN-KL" />
                <meta name="geo.placename" content="Kerala" />
                <meta name="geo.position" content="9.4981;76.3388" />
                <meta name="ICBM" content="9.4981,76.3388" />
                <meta property="og:title" content="Contact Stark Cabs - Taxi Service in Kerala" />
                <meta property="og:description" content="Get in touch with Stark Cabs for ride booking, driver registration and customer support in Kerala." />
                <meta property="og:type" content="website" />
            </Helmet>

            {/* PAGE HERO */}
            <PageHero
                title={"Get in"}
                highlight={"Touch"}
                currentPage={'Contact'}
                backgroundImage={'assets/images/bg_2.jpg'}

            />

            {/* CONTACT MAIN */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">

                        {/* Info Cards */}
                        <div className="info-col">
                            <div className="info-card reveal">
                                <div className="info-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <div>
                                    <div className="info-label">Our Address</div>
                                    <div className="info-value">
                                        Stark OPC Pvt Ltd<br />
                                        6/955, Punnamada<br />
                                        Alappuzha, Kerala – 688006
                                    </div>
                                </div>
                            </div>

                            <div className="info-card reveal reveal-delay-1">
                                <div className="info-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.07 19.79 19.79 0 0 1 1.61.45 2 2 0 0 1 3.62 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div>
                                    <div className="info-label">Phone</div>
                                    <div className="info-value">
                                        <a href="tel:04772233377">0477 223 3377</a>
                                        <a href="tel:+917399200800">+91 7399 200 800</a>
                                    </div>
                                </div>
                            </div>

                            <div className="info-card reveal reveal-delay-2">
                                <div className="info-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </div>
                                <div>
                                    <div className="info-label">Email</div>
                                    <div className="info-value">
                                        <a href="mailto:starkopc@gmail.com">starkopc@gmail.com</a>
                                        <a href="mailto:starkopcpvtltd@gmail.com">starkopcpvtltd@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="info-card reveal reveal-delay-3">
                                <div className="info-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                </div>
                                <div>
                                    <div className="info-label">Working Hours</div>
                                    <div className="info-value">
                                        Available 24/7<br />
                                        <span className="info-sub">Rides available round the clock</span>
                                    </div>
                                </div>
                            </div>

                            <div className="info-card info-card--social reveal reveal-delay-4">
                                <div className="info-card-top">
                                    <div className="info-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                                    </div>
                                    <div>
                                        <div className="info-label">Follow Us</div>
                                        <div className="info-value">Stay connected with Stark Cabs</div>
                                    </div>
                                </div>
                                <div className="social-row">
                                    <a href="https://www.instagram.com/stark_cabs?igsh=MTFmN2Nwd3FieHJnMA%3D%3D&utm_source=qr" className="social-pill">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg>
                                        Instagram
                                    </a>
                                    <a href="https://www.instagram.com/stark_cabs?igsh=MTFmN2Nwd3FieHJnMA%3D%3D&utm_source=qr" className="social-pill">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                        Facebook
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="contact-form reveal reveal-delay-1" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input type="text" name="name" placeholder="e.g. Arjun Nair" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" placeholder="you@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>I'm contacting about</label>
                                <select name="subject" required defaultValue="">
                                    <option value="" disabled>Select a topic</option>
                                    <option value="Ride Booking Inquiry">Ride Booking Inquiry</option>
                                    <option value="Driver Registration">Driver Registration</option>
                                    <option value="Customer Support">Customer Support</option>
                                    <option value="Feedback">Feedback</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Your Message</label>
                                <textarea rows="5" name="message" placeholder="Tell us how we can help you..." required />
                            </div>
                            <div className="form-submit">
                                <button type="submit" className="btn-primary form-submit-btn">Send Message</button>
                            </div>
                            <p className="form-note">We typically respond within 24 hours. For urgent ride support, call us directly.</p>
                        </form>
                    </div>
                </div>
            </section>

            {/* QUICK CONTACT BAR */}
            <section className="quick-bar">
                <div className="container">
                    <div className="quick-inner">
                        <div className="quick-item reveal">
                            <span className="quick-emoji">📞</span>
                            <h4>Call Us Directly</h4>
                            <a href="tel:+917399200800">+91 7399 200 800</a>
                            <p>Available 24 hours a day</p>
                        </div>
                        <div className="quick-item reveal reveal-delay-1">
                            <span className="quick-emoji">✉️</span>
                            <h4>Email Support</h4>
                            <a href="mailto:starkopc@gmail.com">starkopc@gmail.com</a>
                            <p>We reply within 24 hours</p>
                        </div>
                        <div className="quick-item reveal reveal-delay-2">
                            <span className="quick-emoji">📱</span>
                            <h4>Book via App</h4>
                            <a href="/download">Download the Rider App</a>
                            <p>Fastest way to book a ride</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className="map-section">
                <div className="container">
                    <div className="map-header reveal">
                        <span className="section-label">Find Us</span>
                        <h3>Stark Cabs — Alappuzha, Kerala</h3>
                        <p>6/955, Punnamada, Alappuzha, Kerala – 688006</p>
                    </div>
                    <div className="map-wrap reveal reveal-delay-1">
                        <iframe
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.843379584604!2d76.3488001745036!3d9.522333581072733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08851e4556c969%3A0xe84fa28e43a5df40!2sSTARK!5e0!3m2!1sen!2sin!4v1770283619440!5m2!1sen!2sin"
                            title="Stark Cabs Location"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}