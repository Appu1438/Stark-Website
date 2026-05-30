
// ── Date helpers ──
function fmt(d) {
    return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}
function daysAgo(n) {
    const x = new Date();
    x.setDate(x.getDate() - n);
    return x;
}

const today = new Date();


export const BLOG_POSTS = [
    {
        id: 1,
        tag: "Tips",
        date: fmt(today),
        title: "Why Stark Cabs is the Best Ride Booking Service in Kerala",
        desc: "Stark Cabs provides fast and reliable cab services in Kerala with easy ride booking, real-time tracking and fully verified drivers. Here's what makes us stand out from the rest.",
        img: "/assets/images/image_1.webp",
        alt: "Why Stark Cabs is the Best Ride Booking Service in Kerala",
        featured: true,
    },
    {
        id: 2,
        tag: "Safety",
        date: fmt(daysAgo(1)),
        title: "Safe and Affordable Taxi Services in Kerala",
        desc: "Travel safely across Kerala with Stark Cabs. Our verified drivers and well-maintained vehicles ensure a comfortable and reliable ride experience every time.",
        img: "assets/images/image_2.webp",
        alt: "Safe and Affordable Taxi Services in Kerala",
    },
    {
        id: 3,
        tag: "Technology",
        date: fmt(daysAgo(2)),
        title: "How Ride Booking Apps Are Changing Transportation",
        desc: "Ride booking platforms like Stark Cabs are transforming local transportation in Kerala with smart technology, instant driver matching, and GPS-powered tracking.",
        img: "assets/images/image_3.webp",
        alt: "How Ride Booking Apps Are Changing Transportation",
        delay: "reveal-delay-1",
    },
    {
        id: 4,
        tag: "Travel Tips",
        date: fmt(daysAgo(4)),
        title: "5 Tips for a Smooth Cab Ride in Kerala",
        desc: "From confirming your pickup location to tracking your driver in real time, here are five simple tips to make every Stark Cabs journey as smooth as possible.",
        img: "/assets/images/image_1.webp",
        alt: "Tips for a Smooth Cab Ride in Kerala",
        delay: "reveal-delay-2",
    },
    {
        id: 5,
        tag: "Airport",
        date: fmt(daysAgo(6)),
        title: "Stress-Free Airport Transfers from Kerala",
        desc: "Never miss a flight again. Learn how Stark Cabs makes airport pickups and drops from Kerala easy, punctual, and affordable with verified professional drivers.",
        img: "assets/images/image_2.webp",
        alt: "Airport Transfers from Kerala",
    },
    {
        id: 6,
        tag: "Drivers",
        date: fmt(daysAgo(9)),
        title: "How to Earn More as a Driver Partner in Kerala",
        desc: "Join Stark Cabs as a driver partner and unlock flexible income in Kerala. Here's everything you need to know about getting started with the Stark Driver App.",
        img: "assets/images/image_3.webp",
        alt: "Drive with Stark Cabs and earn more",
        delay: "reveal-delay-1",
    },
    {
        id: 7,
        tag: "Guide",
        date: fmt(daysAgo(12)),
        title: "Local vs Outstation Rides — Which Is Right for You?",
        desc: "Not sure whether to book a local or outstation ride? We break down the differences, pricing, and what to expect so you can choose the perfect trip with Stark Cabs.",
        img: "/assets/images/image_1.webp",
        alt: "Local vs Outstation rides",
        delay: "reveal-delay-2",
    },
];