'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AIGovernanceCaseStudy() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('pf-theme');
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('pf-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <div className="cs-page">
      {/* Top nav */}
      <nav className="cs-nav">
        <Link href="/" className="cs-nav-back">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 16L7 10L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a
            href="/ai-governance-board-case-study.pdf"
            download
            className="cs-download-btn"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v8m0 0L5 7m3 3l3-3M3 12v1a1 1 0 001 1h8a1 1 0 001-1v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            PDF
          </a>
          <button onClick={toggleTheme} className="cs-theme-btn" aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Article */}
      <article className="cs-article">
        <header className="cs-header">
          <div className="cs-meta">
            <span className="cs-tag">Case Study</span>
            <span className="cs-date">January 2026</span>
          </div>
          <h1 className="cs-title">
            Building an Enterprise AI Governance Board from Zero
          </h1>
          <p className="cs-subtitle">
            No precedent. No playbook. Fast-moving technology. Diverse stakeholders. Here is how we built a governance structure that actually works.
          </p>
          <div className="cs-author">
            <img src="/headshot.png" alt="Larnel Hight" className="cs-author-img" />
            <div>
              <span className="cs-author-name">Larnel Hight</span>
              <span className="cs-author-role">CISSP | Senior Information Security Engineer</span>
            </div>
          </div>
        </header>

        <div className="cs-body">
          <p className="cs-lede">
            There was no playbook. No template I could pull from a framework document and hand to leadership. When I stood up the AI Governance Board at Queens University of Charlotte, I was working from first principles and 25 years of watching organizations get technology adoption wrong.
          </p>
          <p>
            Most governance failures share the same root cause. Someone bought a tool, deployed it broadly, and asked the security team to figure out the risk after the fact. I was not going to let that happen with AI.
          </p>

          <h2>The Trigger</h2>
          <p>
            It started the way it always starts. Vendors showed up with demos. Leadership got excited. Departments started buying tools on their own.
          </p>
          <p>
            Within a few months, I was finding AI-powered products embedded in workflows that had never gone through a security review. Marketing had one. Admissions had one. Individual faculty members were feeding institutional data into tools they found on their own. Nobody was asking what data these tools were ingesting, where it was being stored, or what the vendor's training policies looked like.
          </p>
          <p>
            The behavior was not malicious. It was enthusiasm outrunning the process. But from a security perspective, shadow AI adoption is like shadow IT with a larger blast radius. A SaaS tool you did not approve might expose credentials. Your whole data environment could be exposed by an AI tool that you did not authorize.
          </p>
          <p>
            I did not need to build a theoretical case for governance. I just had to show leadership the list of AI tools already running in our environment that nobody in IT had approved. That conversation lasted about ten minutes before I had the mandate to build a governance structure.
          </p>

          <h2>The Build</h2>
          <p>
            I started with stakeholders, not technology. People, process, technology. In that order. Always.
          </p>
          <p>
            The board needed representation from IT, academic affairs, legal, HR, and student services. Not because I wanted a large committee. Because AI touches data flows across all of these functions, a governance structure that does not include the people who own the data is merely a security team talking to itself.
          </p>
          <p>
            I kept the initial scope narrow on purpose. We were not trying to write a comprehensive AI policy for higher education. We were trying to answer three questions:
          </p>

          <div className="cs-callout">
            <ol>
              <li>What AI tools are in our environment today?</li>
              <li>Who approved them, and under what criteria?</li>
              <li>What data are they accessing?</li>
            </ol>
            <p style={{ marginTop: 16, marginBottom: 0, fontStyle: 'italic', opacity: 0.8 }}>
              If you cannot answer those three questions, you are not ready for a policy discussion. You are still in discovery.
            </p>
          </div>

          <h2>The Framework</h2>
          <p>
            I mapped our governance model to NIST AI RMF because it gave us a shared vocabulary without requiring everyone on the board to become a security practitioner. The framework breaks AI risk into four functions: Govern, Map, Measure, Manage. That structure made it easy to assign ownership.
          </p>

          <div className="cs-grid-4">
            <div className="cs-grid-card">
              <h3>Govern</h3>
              <p>Belonged to the board itself. We set the charter, the meeting cadence, and the escalation paths.</p>
            </div>
            <div className="cs-grid-card">
              <h3>Map</h3>
              <p>My team's responsibility. We cataloged AI tools, data flows, and integration points across the environment.</p>
            </div>
            <div className="cs-grid-card">
              <h3>Measure</h3>
              <p>Required defining what "acceptable" looked like for our institution. We had to define our own risk tolerances.</p>
            </div>
            <div className="cs-grid-card">
              <h3>Manage</h3>
              <p>The ongoing work. Remediation tracking, exception handling, and periodic reassessment.</p>
            </div>
          </div>

          <h2>What I Would Do Differently</h2>
          <p>
            I underestimated the communication challenge. Technical people and academic leaders think about risk differently. I spent too much time in the first few months translating between those two worlds when I should have established a shared risk vocabulary from day one.
          </p>
          <p>
            I also should have started the data classification effort earlier. You cannot govern AI access to data you have not classified. We were doing governance and classification in parallel, which created friction that was avoidable.
          </p>
          <p>
            And I would have built the tool inventory faster. Every week you spend without a complete picture of what is running in your environment is a week where a new tool gets adopted without review. Speed matters here more than perfection.
          </p>

          <h2>The Takeaway</h2>
          <p>
            Standing up an AI Governance Board is not a technology project. It is an organizational change management effort that happens to involve technology. The technical controls matter. The risk frameworks matter. But the thing that determines success or failure is whether you can get a room full of people who do not report to each other to agree on how decisions get made.
          </p>
          <p>
            I have done this once now. The second time will be faster. Not because the technology is simpler, but because the organizational patterns repeat. Every enterprise has the same shadow AI problem. Every leadership team needs the same concrete inventory before they take AI risk seriously. Every governance board has to fight the same tendency to write policy before completing discovery.
          </p>

          <div className="cs-callout" style={{ borderLeftColor: 'var(--accent-primary)' }}>
            <p style={{ fontWeight: 600, fontSize: 18, marginBottom: 0 }}>
              If you are starting from zero, start with the inventory. Find every AI tool running in your environment that nobody approved. The rest follows.
            </p>
          </div>
        </div>

        {/* Author footer */}
        <footer className="cs-footer">
          <div className="cs-author" style={{ marginBottom: 24 }}>
            <img src="/headshot.png" alt="Larnel Hight" className="cs-author-img" />
            <div>
              <span className="cs-author-name">Larnel Hight</span>
              <span className="cs-author-role">
                CISSP-certified security professional and founder of Render Defense, a cybersecurity consultancy specializing in AI security governance. Currently serving as Senior Information Security Engineer at Queens University of Charlotte.
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="https://linkedin.com/in/larnelhight" target="_blank" rel="noopener noreferrer" className="cs-footer-btn">
              Connect on LinkedIn
            </a>
            <Link href="/" className="cs-footer-btn cs-footer-btn-secondary">
              View Portfolio
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
