import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./notFound.css";

export default function NotFound() {
    const canvasRef = useRef(null);
    const [counted, setCounted] = useState(false);

    /* ── Particle canvas ── */
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animId;
        let W = (canvas.width = window.innerWidth);
        let H = (canvas.height = window.innerHeight);

        const PARTICLE_COUNT = 60;
        const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.8 + 0.4,
            dx: (Math.random() - 0.5) * 0.35,
            dy: (Math.random() - 0.5) * 0.35,
            alpha: Math.random() * 0.4 + 0.1,
        }));

        function draw() {
            ctx.clearRect(0, 0, W, H);
            particles.forEach((p) => {
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0) p.x = W;
                if (p.x > W) p.x = 0;
                if (p.y < 0) p.y = H;
                if (p.y > H) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(249,109,0,${p.alpha})`;
                ctx.fill();
            });
            animId = requestAnimationFrame(draw);
        }
        draw();

        const onResize = () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", onResize);
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    /* ── Count-up for the 404 digits ── */
    useEffect(() => {
        const t = setTimeout(() => setCounted(true), 300);
        return () => clearTimeout(t);
    }, []);

    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Stark Cabs Kerala</title>

                <meta
                    name="description"
                    content="Sorry, the page you are looking for could not be found. Explore Stark Cabs for reliable taxi services, airport transfers, and outstation rides across Kerala."
                />

                <meta
                    name="keywords"
                    content="404, page not found, Stark Cabs, Kerala taxi service, cab booking Kerala"
                />

                <meta name="robots" content="noindex, nofollow" />

                <meta property="og:type" content="website" />

                <meta
                    property="og:title"
                    content="404 - Page Not Found | Stark Cabs"
                />

                <meta
                    property="og:description"
                    content="The page you requested does not exist. Visit Stark Cabs to book comfortable and affordable rides across Kerala."
                />

                <meta
                    property="og:url"
                    content="https://starkcabs.in/404"
                />

                <meta property="og:image" content="https://starkcabs.in/assets/images/favicon.png" />
                <link rel="icon" href="https://starkcabs.in/assets/images/favicon.png" sizes="any" />
                <meta property="og:image:width" content="512" />
                <meta property="og:image:height" content="512" />
                <meta property="og:image:type" content="image/png" />


                <meta name="twitter:card" content="summary_large_image" />

                <meta
                    name="twitter:title"
                    content="404 - Page Not Found | Stark Cabs"
                />

                <meta
                    name="twitter:description"
                    content="The page you requested could not be found. Visit Stark Cabs for premium cab services in Kerala."
                />


                <link rel="canonical" href="https://starkcabs.in/404" />
            </Helmet>
            <div className="nf-root">
                {/* particle canvas */}
                <canvas ref={canvasRef} className="nf-canvas" />

                {/* radial glow blobs */}
                <div className="nf-blob nf-blob--1" />
                <div className="nf-blob nf-blob--2" />

                {/* main content */}
                <div className="nf-content">

                    {/* 404 heading */}
                    <div className={`nf-404${counted ? " counted" : ""}`}>
                        <span className="nf-digit">4</span>
                        <span className="nf-digit nf-digit--zero">0</span>
                        <span className="nf-digit">4</span>
                    </div>

                    <div className="nf-badge">Wrong Turn</div>

                    <h1 className="nf-title">
                        Looks Like You've<br />
                        <span>Lost Your Way</span>
                    </h1>
                    <p className="nf-desc">
                        The page you're looking for doesn't exist or has been moved.
                        Let us drive you back to the right destination.
                    </p>

                    {/* actions */}
                    <div className="nf-actions">
                        <Link to="/" className="nf-btn-primary">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            Back to Home
                        </Link>
                        <Link to="/contact" className="nf-btn-ghost">
                            Contact Support
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>

                    {/* quick links */}
                    <div className="nf-links">
                        <span className="nf-links-label">Quick links</span>
                        <div className="nf-links-row">
                            {[
                                { to: "/services", label: "Services" },
                                { to: "/download", label: "Download App" },
                                { to: "/driver", label: "Drive With Us" },
                                { to: "/blog", label: "Blog" },
                            ].map(({ to, label }) => (
                                <Link key={to} to={to} className="nf-quick-link">{label}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}