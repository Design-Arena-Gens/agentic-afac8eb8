import Head from 'next/head';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="badge">BETON</div>
          <h1 className="title">
            Build concrete results.
          </h1>
          <p className="subtitle">
            Beton is a crisp, fast, and minimal landing experience. No fluff?just signal.
          </p>
          <div className="cta">
            <a className="button primary" href="#about">Learn more</a>
            <a className="button ghost" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container grid">
          <div>
            <h2>Why Beton?</h2>
            <p>
              Beton means concrete. This site is designed to be concrete too?focused on clarity, speed,
              and modern aesthetics that work everywhere.
            </p>
          </div>
          <div>
            <ul className="checks">
              <li>Fast by default</li>
              <li>Responsive and accessible</li>
              <li>Zero configuration deployment</li>
              <li>Vercel-ready</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <span>? {new Date().getFullYear()} Beton</span>
          <span className="dot">?</span>
          <a href="https://agentic-afac8eb8.vercel.app">agentic-afac8eb8.vercel.app</a>
        </div>
      </footer>
    </main>
  );
}

