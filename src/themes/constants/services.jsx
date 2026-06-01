/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
export const SERVICES = [
    {
        num: '01',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        title: 'Instant Ride Booking',
        desc: 'Book rides in seconds using the Stark Rider App. Get matched with nearby drivers and confirm your trip instantly.',
    },
    {
        num: '02',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        title: 'Live GPS Tracking',
        desc: 'Track your cab in real time with precise GPS updates. Know exactly where your driver is at every moment.',
    },
    {
        num: '03',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        title: 'Local & Outstation Trips',
        desc: 'Whether a quick city ride or a long outstation journey, Stark Cabs gets you there safely and comfortably.',
    },
    {
        num: '04',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F96D00" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.07 19.79 19.79 0 0 1 1.61.45 2 2 0 0 1 3.62 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        title: '24/7 Ride Support',
        desc: 'Round-the-clock ride availability means you can book a Stark cab any time of day or night in Kerala.',
    },
];


export const WHY_CARDS = [
    {
        img: 'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315362/car-1_vtajtb.webp',
        alt: 'Fast ride booking with Stark Cabs Kerala',
        title: '⚡ Fast Ride Booking',
        desc: 'Book a cab instantly with quick driver matching anywhere in Kerala.'
    },

    {
        img: 'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315363/car-2_zwnoa9.webp',
        alt: 'Affordable taxi pricing in Kerala with Stark Cabs',
        title: '💰 Affordable Pricing',
        desc: 'Competitive fares with transparent pricing — no hidden charges.'
    },

    {
        img: 'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315363/car-3_rulung.webp',
        alt: 'Verified Stark Cabs drivers for safe travel',
        title: '✅ Verified Drivers',
        desc: 'All Stark drivers are background-checked for your safety.'
    },

    {
        img: 'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315363/car-4_iiu01w.webp',
        alt: 'Real-time taxi tracking in Stark Cabs app',
        title: '📍 Real-Time Tracking',
        desc: 'Track your ride live with GPS and instant driver location updates.'
    },

    {
        img: 'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315363/car-5_mv03ql.webp',
        alt: 'Local city taxi rides in Kerala',
        title: '🏙️ Local City Rides',
        desc: 'Quick rides within Kerala for daily commutes, shopping, and more.'
    },

    {
        img: 'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315362/car-6_qwvjyr.webp',
        alt: 'Airport pickup and drop taxi service in Kerala',
        title: '✈️ Airport Transfers',
        desc: 'Reliable pickup and drop services to and from nearby airports.'
    },

    {
        img: 'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315363/car-7_c9y8wx.webp',
        alt: 'Comfortable and clean vehicles from Stark Cabs',
        title: '🚗 Comfortable Vehicles',
        desc: 'Clean, well-maintained cars with professional, courteous drivers.'
    },

    {
        img: 'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315364/car-8_rxpera.webp',
        alt: '24 hour taxi booking service in Kerala',
        title: '🌙 24/7 Availability',
        desc: 'Book Stark Cabs any time of day or night — we\'re always ready.'
    },
];

export const DETAIL_SERVICES = [
    {
        img: 'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315363/car-5_mv03ql.webp',
        alt: 'Local City Rides in Kerala',
        tag: '🏙️ City Rides',
        title: 'Local City Rides',
        desc: 'Quick, comfortable rides within Kerala for your daily commute, shopping trips, medical visits, or any local travel need. Arrive on time, every time.',
        delay: '',
    },
    {
        img: 'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315362/car-6_qwvjyr.webp',
        alt: 'Airport Transfers from Kerala',
        tag: '✈️ Airport',
        title: 'Airport Transfers',
        desc: 'Stress-free pickup and drop services from Kerala to Cochin International Airport and other nearby airports. Never miss a flight again.',
        delay: 'reveal-delay-1',
    },
    {
        img: 'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315362/car-1_vtajtb.webp',
        alt: 'Outstation Trips from Kerala',
        tag: '🛣️ Outstation',
        title: 'Outstation Trips',
        desc: 'Planning a trip outside Kerala? Our verified drivers are available for comfortable, safe long-distance journeys to any destination in Kerala and beyond.',
        delay: '',
    },
    {
        img: 'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315363/car-2_zwnoa9.webp',
        alt: 'Daily Commute Rides in Kerala',
        tag: '🔁 Daily Commute',
        title: 'Daily Commute Rides',
        desc: 'Start and end your workday right with reliable, on-time cab service. Perfect for professionals who need a dependable ride every single day.',
        delay: 'reveal-delay-1',
    },
    {
        img: 'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315363/car-7_c9y8wx.webp',
        alt: 'Comfortable Vehicles with Stark Cabs',
        tag: '🚗 Premium Comfort',
        title: 'Comfortable Vehicles',
        desc: 'Travel in clean, well-maintained vehicles driven by professional, courteous drivers. Your comfort is our priority on every trip, no matter the distance.',
        delay: '',
    },
    {
        img: 'https://res.cloudinary.com/stark-and-nfly/image/upload/v1780315364/car-8_rxpera.webp',
        alt: '24/7 Cab Availability Kerala',
        tag: '🌙 Round the Clock',
        title: 'Night & Late Rides',
        desc: 'Need a cab late at night or early in the morning? Stark Cabs is available 24/7 with verified drivers ready to safely get you home at any hour.',
        delay: 'reveal-delay-1',
    },
];


