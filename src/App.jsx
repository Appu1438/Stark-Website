import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Lazy-load pages for code-splitting
const Home = lazy(() => import('./pages/home/Home'));
// Stub pages – add real implementations as you build them out
const About = lazy(() => import('./pages/about/About'));
const Services= lazy(() => import('./pages/services/Services'));
const Driver  = lazy(() => import('./pages/driver/Driver'));
const Download= lazy(() => import('./pages/download/Download'));
const Blog    = lazy(() => import('./pages/blog/Blog'));
const Contact = lazy(() => import('./pages/contact/Contact'));

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader__spinner" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
             <Route path="/services"  element={<Services />} />
          <Route path="/driver"    element={<Driver />} />
            <Route path="/download"  element={<Download />} />
             <Route path="/blog"      element={<Blog />} />
            <Route path="/contact"   element={<Contact />} /> 
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}