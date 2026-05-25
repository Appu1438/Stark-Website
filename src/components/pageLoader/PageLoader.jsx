import "./pageLoader.css";

export default function PageLoader() {
  return (
    <div className="page-loader-wrap">
      
      {/* Brand */}
      <div className="loader-brand">
        STARK<span> CABS</span>
      </div>

      {/* Scene */}
      <div className="loader-scene">
        
        {/* Car */}
        <div className="car-wrap">
          
          {/* Speed Lines */}
          <div className="speed-lines">
            <div className="sline" />
            <div className="sline" />
            <div className="sline" />
          </div>

          {/* Exhaust */}
          <div className="exhaust">
            <div className="puff" />
            <div className="puff" />
            <div className="puff" />
          </div>

          {/* Car SVG */}
          <svg
            width="110"
            height="58"
            viewBox="0 0 100 52"
            fill="none"
          >
            <rect
              x="6"
              y="22"
              width="88"
              height="22"
              rx="5"
              fill="#1e1e24"
              stroke="#F96D00"
              strokeWidth="1"
            />

            <path
              d="M22 22 L28 8 L68 8 L76 22 Z"
              fill="#16161a"
              stroke="#F96D00"
              strokeWidth="1"
            />

            <path
              d="M30 21 L34 10 L51 10 L51 21 Z"
              fill="#F96D00"
              fillOpacity="0.2"
            />

            <path
              d="M53 21 L53 10 L66 10 L70 21 Z"
              fill="#F96D00"
              fillOpacity="0.2"
            />

            <line
              x1="52"
              y1="10"
              x2="52"
              y2="21"
              stroke="#F96D00"
              strokeWidth="0.8"
              strokeOpacity="0.6"
            />

            <rect
              x="88"
              y="27"
              width="6"
              height="6"
              rx="2"
              fill="#F96D00"
              fillOpacity="0.9"
            />

            <rect
              x="90"
              y="28"
              width="4"
              height="4"
              rx="1"
              fill="#ff8c2a"
            />

            <rect
              x="6"
              y="27"
              width="5"
              height="5"
              rx="1.5"
              fill="#F96D00"
              fillOpacity="0.5"
            />

            <circle
              cx="24"
              cy="44"
              r="8"
              fill="#111114"
              stroke="#333338"
              strokeWidth="1.5"
            />

            <circle
              cx="24"
              cy="44"
              r="4"
              fill="#1e1e24"
              stroke="#F96D00"
              strokeWidth="1"
            />

            <circle
              cx="24"
              cy="44"
              r="1.5"
              fill="#F96D00"
            />

            <circle
              cx="75"
              cy="44"
              r="8"
              fill="#111114"
              stroke="#333338"
              strokeWidth="1.5"
            />

            <circle
              cx="75"
              cy="44"
              r="4"
              fill="#1e1e24"
              stroke="#F96D00"
              strokeWidth="1"
            />

            <circle
              cx="75"
              cy="44"
              r="1.5"
              fill="#F96D00"
            />

            <line
              x1="50"
              y1="23"
              x2="50"
              y2="43"
              stroke="#333338"
              strokeWidth="0.8"
            />

            <rect
              x="58"
              y="31"
              width="7"
              height="2"
              rx="1"
              fill="#333338"
            />

            <rect
              x="30"
              y="31"
              width="7"
              height="2"
              rx="1"
              fill="#333338"
            />
          </svg>
        </div>

        {/* Road */}
        <div className="road">
          <div className="road-line" />
          <div className="road-line" />
          <div className="road-line" />
        </div>
      </div>

      {/* Dots */}
      <div className="loader-dots">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>

      {/* Label */}
      <p className="loader-label">Loading</p>
    </div>
  );
}