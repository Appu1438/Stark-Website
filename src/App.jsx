import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLoader from './components/pageLoader/PageLoader';
import NotFound from './pages/notFound/NotFound';
import MainLayout from './layout/MainLayout';

// Lazy-load pages
const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const Services = lazy(() => import('./pages/services/Services'));
const Driver = lazy(() => import('./pages/driver/Driver'));
const Download = lazy(() => import('./pages/download/Download'));
const Blog = lazy(() => import('./pages/blog/Blog'));
const Contact = lazy(() => import('./pages/contact/Contact'));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Show loader for 2 seconds
  if (loading && !navigator.userAgent.includes("ReactSnap")) {
    return <PageLoader />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <main>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/driver" element={<Driver />} />
              <Route path="/download" element={<Download />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="*" element={<NotFound />} />
            </Route>

          </Routes>
        </main>

      </Suspense>
    </BrowserRouter>
  );
}