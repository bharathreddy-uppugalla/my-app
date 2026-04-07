import React, { useState } from "react";

const reviews = [
  { name: "Alvaro Sanchez",         course: "Master of Professional Accounting" },
  { name: "Ben Blaess",             course: "Bachelor of Media Design" },
  { name: "Brendon (Buddika) Liyanage", course: "Dual MBA and Master of Public Health" },
  { name: "Carmela Leano",          course: "Dual MBA & Global Project Management" },
  { name: "Carolina Arango",        course: "Dual MBA & Master of Global Project Management" },
  { name: "Christian Nwankpa",      course: "Master of Professional Accounting (Advanced)" },
  { name: "Claudia Fernandez",      course: "Dual MBA & Global Project Management" },
  { name: "Daniele Arriel",         course: "Master of Professional Accounting (Advanced)" },
  { name: "David Murillo",          course: "Dual MBA & Global Project Management" },
  { name: "Ivan Almaraz",           course: "Dual MBA & Master of Global Project Management" },
  { name: "Joao Sousa",             course: "Master of Business Information Systems" },
  { name: "Jonathas Sousa",         course: "Dual MBA & Master of Global Project Management" },
  { name: "Leena Raj",              course: "Master of Professional Accounting (Advanced)" },
  { name: "Luis Mora",              course: "Dual MBA and Master of Public Health" },
  { name: "Meenakshi Thaman",       course: "Master of Professional Accounting" },
  { name: "Mily Ochoa",             course: "Master of Business Information Systems" },
  { name: "Mohsin Navodiya",        course: "Bachelor of Commerce" },
  { name: "Nadine Le",              course: "Bachelor of Business Administration" },
  { name: "Nina Bastos",            course: "Dual MBA & Master of Global Project Management" },
  { name: "Pedro Ferreira",         course: "Master of Professional Accounting" },
  { name: "Piotr Gierczak",         course: "Bachelor of Business (Marketing)" },
  { name: "Regina Concepcion",      course: "Master of Professional Accounting" },
  { name: "Ryan Birse",             course: "Bachelor of Business (Sports Management)" },
  { name: "Sachi Vidanagamage",     course: "Master of Business Information Systems" },
  { name: "Shravan Cunchala",       course: "Masters of Business Information Systems" },
  { name: "Sirirat Sukngamlert",    course: "Bachelor of Commerce" },
  { name: "Temi Ogunlusi",          course: "Master of Business Information Systems" },
  { name: "Yamileth Ruiz",          course: "Dual MBA & Master of Global Project Management" },
  { name: "Yenise Galindo",         course: "Master of Business Information Systems" },
  { name: "Yuri Osmani",            course: "Dual MBA & Master of Global Project Management" },
];

// Generate avatar initials + a consistent gradient per person
const gradients = [
  "linear-gradient(135deg, #6918DC, #B625B9)",
  "linear-gradient(135deg, #B625B9, #E94B6C)",
  "linear-gradient(135deg, #E94B6C, #F6A83D)",
  "linear-gradient(135deg, #6918DC, #E94B6C)",
  "linear-gradient(135deg, #F6A83D, #E94B6C)",
];

function getInitials(name) {
  return name.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase();
}

function Stars({ count = 5 }) {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F6A83D">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

const CARDS_PER_PAGE = 6;

export default function SuccessStories() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / CARDS_PER_PAGE);
  const current = reviews.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE);

  return (
    <section
      style={{
        background: "#f5f5fa",
        padding: "90px 0 100px",
        fontFamily: "Raleway, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800;900&display=swap');

        .ss-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Heading */
        .ss-heading {
          font-family: 'Raleway', sans-serif;
          font-weight: 900;
          font-size: 2.8rem;
          color: #0f0f1a;
          text-align: center;
          margin: 0 0 14px;
          letter-spacing: -0.01em;
        }
        .ss-heading span {
          background: linear-gradient(90deg, #6918DC 0%, #B625B9 40%, #E94B6C 80%, #F6A83D 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ss-subtext {
          font-family: 'Raleway', sans-serif;
          font-weight: 500;
          font-size: 1rem;
          color: #666677;
          text-align: center;
          margin: 0 0 20px;
          line-height: 1.7;
        }

        /* Count badge */
        .ss-count-badge {
          display: flex;
          justify-content: center;
          margin-bottom: 56px;
        }
        .ss-count-inner {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          border: 1.5px solid #ebebf0;
          border-radius: 999px;
          padding: 8px 20px;
          font-family: 'Raleway', sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: #555566;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .ss-count-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: linear-gradient(90deg, #6918DC, #E94B6C);
        }

        /* Grid */
        .ss-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }
        @media (max-width: 900px) {
          .ss-grid { grid-template-columns: repeat(2, 1fr); }
          .ss-heading { font-size: 2rem; }
        }
        @media (max-width: 580px) {
          .ss-grid { grid-template-columns: 1fr; }
        }

        /* Card */
        .ss-card {
          background: #ffffff;
          border: 1.5px solid #ebebf0;
          border-radius: 20px;
          padding: 28px 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          animation: cardIn 0.35s ease both;
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ss-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(105,24,220,0.12);
          border-color: #B625B944;
        }

        /* Quote text */
        .ss-quote {
          font-family: 'Raleway', sans-serif;
          font-weight: 500;
          font-size: 0.92rem;
          color: #444455;
          line-height: 1.7;
          margin: 0 0 24px;
          flex: 1;
        }

        /* Divider */
        .ss-divider {
          height: 1px;
          background: #f0f0f5;
          margin-bottom: 20px;
        }

        /* Author */
        .ss-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .ss-avatar {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Raleway', sans-serif;
          font-weight: 800;
          font-size: 15px;
          color: white;
          flex-shrink: 0;
          letter-spacing: 0.02em;
        }
        .ss-author-name {
          font-family: 'Raleway', sans-serif;
          font-weight: 800;
          font-size: 0.95rem;
          color: #0f0f1a;
          margin: 0 0 3px;
        }
        .ss-author-role {
          font-family: 'Raleway', sans-serif;
          font-weight: 500;
          font-size: 0.8rem;
          color: #888899;
          margin: 0;
          line-height: 1.4;
        }

        /* Google badge */
        .ss-google-badge {
          margin-left: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          flex-shrink: 0;
        }
        .ss-google-badge svg {
          width: 22px;
          height: 22px;
        }
        .ss-google-text {
          font-size: 9px;
          font-weight: 700;
          color: #aaaabc;
          letter-spacing: 0.05em;
          font-family: 'Raleway', sans-serif;
        }

        /* Pagination */
        .ss-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .ss-page-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid #dddde8;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          font-family: 'Raleway', sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: #555566;
        }
        .ss-page-btn:hover:not(:disabled) {
          border-color: #6918DC;
          color: #6918DC;
        }
        .ss-page-btn:disabled {
          opacity: 0.35;
          cursor: default;
        }
        .ss-page-btn.active {
          background: linear-gradient(90deg, #6918DC, #B625B9);
          border-color: transparent;
          color: white;
        }
        .ss-page-dots {
          display: flex;
          gap: 6px;
          align-items: center;
        }
        .ss-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #dddde8;
          transition: background 0.2s ease, width 0.2s ease;
        }
        .ss-dot.active {
          background: linear-gradient(90deg, #6918DC, #B625B9);
          width: 24px;
          border-radius: 4px;
        }
      `}</style>

      <div className="ss-container">

        {/* Heading */}
        <h2 className="ss-heading">
          Success Stories from <span>Our Clients</span>
        </h2>
        <p className="ss-subtext">
          See how we've helped aspiring professionals like you land their dream jobs.
        </p>

        {/* Count badge */}
        <div className="ss-count-badge">
          <div className="ss-count-inner">
            <div className="ss-count-dot" />
            {reviews.length} Happy Clients & Growing
          </div>
        </div>

        {/* Cards */}
        <div className="ss-grid" key={page}>
          {current.map((r, i) => (
            <div
              className="ss-card"
              key={r.name}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <Stars />

              <p className="ss-quote">
                "Visgrow gave me the confidence, skills, and connections I needed to land my internship. The coaching was tailored specifically to my background and goals — truly life-changing!"
              </p>

              <div className="ss-divider" />

              <div className="ss-author">
                <div
                  className="ss-avatar"
                  style={{ background: gradients[i % gradients.length] }}
                >
                  {getInitials(r.name)}
                </div>
                <div>
                  <p className="ss-author-name">{r.name}</p>
                  <p className="ss-author-role">{r.course}</p>
                </div>

                {/* Google G icon */}
                <div className="ss-google-badge">
                  <svg viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.7 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.7-.4-4z"/>
                    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4c-7.7 0-14.4 4.4-17.7 10.7z"/>
                    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.3 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7L6 33.6C9.3 39.6 16.1 44 24 44z"/>
                    <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.2-2.3 4.1-4.1 5.4l6.2 5.2C41 35.3 44 30 44 24c0-1.3-.1-2.7-.4-4z"/>
                  </svg>
                  <span className="ss-google-text">REVIEW</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="ss-pagination">
          <button
            className="ss-page-btn"
            onClick={() => setPage(p => p - 1)}
            disabled={page === 0}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="ss-page-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <div
                key={i}
                className={`ss-dot ${i === page ? "active" : ""}`}
                onClick={() => setPage(i)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>

          <button
            className="ss-page-btn"
            onClick={() => setPage(p => p + 1)}
            disabled={page === totalPages - 1}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}