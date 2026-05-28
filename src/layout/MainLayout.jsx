import { Outlet } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import BackToTop from "../components/backToTop/BackToTop";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      <BackToTop/>
    </>
  );
}