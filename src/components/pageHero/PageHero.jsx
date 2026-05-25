import "./pageHero.css";
import { Link } from "react-router-dom";

const PageHero = ({
  title,
  highlight,
  subTitle,
  currentPage,
  backgroundImage,
}) => {
  return (
    <section className="page-hero">
      <div
        className="page-hero-bg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        aria-hidden="true"
      />

      <div className="page-hero-gradient" aria-hidden="true" />
      <div className="page-hero-orb" aria-hidden="true" />

      <div className="page-hero-inner">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <span className="breadcrumb-sep">›</span>
          </li>

          <li>
            <span className="breadcrumb-current">
              {currentPage}
            </span>
          </li>
        </nav>

        {/* Title */}
        <h1>
          {title} <span>{highlight}</span> {subTitle}
        </h1>
      </div>
    </section>
  );
};

export default PageHero;