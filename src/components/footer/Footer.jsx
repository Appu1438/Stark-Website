import { Link } from 'react-router-dom';
import './footer.css';

/* ── SVG helpers ── */
function IconPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.07 19.79 19.79 0 0 1 1.61.45 2 2 0 0 1 3.62 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

const INSTAGRAM_URL =
  'https://www.instagram.com/stark_cabs?igsh=MTFmN2Nwd3FieHJnMA%3D%3D&utm_source=qr';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Stark <span>Cabs</span>
            </Link>
            <p>
              A modern ride booking platform providing reliable and affordable cab services in Kerala.
              Our mobile apps connect riders with nearby verified drivers instantly.
            </p>
            <div className="footer-socials">
              <a href={INSTAGRAM_URL} className="social-btn" aria-label="Instagram" target="_blank" rel="noreferrer">
                <IconInstagram />
              </a>
              <a href={INSTAGRAM_URL} className="social-btn" aria-label="Facebook" target="_blank" rel="noreferrer">
                <IconFacebook />
              </a>
              <a href={INSTAGRAM_URL} className="social-btn" aria-label="WhatsApp" target="_blank" rel="noreferrer">
                <IconWhatsApp />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Stark Cabs</Link></li>
              <li><Link to="/services">Cab Services</Link></li>
              <li><Link to="/driver">Become a Driver</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services">Local Taxi Service</Link></li>
              <li><Link to="/services">Airport Pickup &amp; Drop</Link></li>
              <li><Link to="/services">Outstation Trips</Link></li>
              <li><Link to="/services">Ride Booking App</Link></li>
              <li><Link to="/driver">Driver Partner Program</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <span className="contact-icon"><IconPin /></span>
              <span>Alappuzha, Kerala, India</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon"><IconPhone /></span>
              <a href="tel:+917399200800">+91 7399 200 800</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon"><IconMail /></span>
              <a href="mailto:starkopc@gmail.com">starkopc@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>&copy; {year} Stark Cabs. All rights reserved.</p>
          <div className="footer-bottom-links">
            Crafted with<span className="footer-heart">♥</span>by Adithyan
          </div>
        </div>
      </div>
    </footer>
  );
}