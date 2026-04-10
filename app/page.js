'use client';

import PortfolioShell from './PortfolioShell';
import Link from 'next/link';

const marqueeWords = [
  'CISSP', 'AI GOVERNANCE', 'ENTERPRISE ARCHITECTURE', 'TECHNOLOGY RISK',
  'NIST AI RMF', 'CLOUD SECURITY', 'DIGITAL TRANSFORMATION', 'PROGRAM LEADERSHIP',
  'ADVERSARIAL ML', 'ZERO TRUST', 'RESILIENCE', 'COMPLIANCE',
];

const storyEras = [
  {
    period: 'THE FOUNDATION',
    years: '2000 — 2012',
    narrative: 'Started in the trenches. Network security, infrastructure builds, the kind of work where you learn what breaks and why. Fortune 500 environments taught me that scale creates complexity — and complexity is where risk hides. I built my instincts here.',
  },
  {
    period: 'THE SHIFT',
    years: '2012 — 2021',
    narrative: 'Moved into architecture and strategy. Cloud migrations, resilience programs, security transformation across distributed environments. This is where I learned that the hardest problems are never technical. They are alignment problems. People problems. Trust problems.',
  },
  {
    period: 'THE CURRENT',
    years: '2021 — PRESENT',
    narrative: 'AI changed the game. I saw organizations racing to adopt tools they did not understand, creating risk categories that did not exist two years ago. I built governance structures, risk frameworks, and evaluation models from scratch. This is where I operate now.',
  },
];

const frameworks = [
  {
    title: 'People, Process, Technology',
    desc: 'My operating philosophy. In that order. Always. Technology is the last mile, not the first decision. When you get the people and process right, the technology choices become obvious.',
    tags: ['LEADERSHIP', 'GOVERNANCE'],
  },
  {
    title: 'AI Risk Evaluation Model',
    desc: 'A structured framework for scoring AI deployment risk across legal, ethical, operational, and reputational dimensions. Not theoretical — built from real governance board decisions.',
    tags: ['AI GOVERNANCE', 'RISK'],
  },
  {
    title: 'Secure-by-Architecture',
    desc: 'Security is not a layer you add. It is a foundation you build on. Every architecture decision I make starts with threat modeling and ends with resilience testing.',
    tags: ['SECURITY', 'ARCHITECTURE'],
  },
  {
    title: 'Governance-First Adoption',
    desc: 'New technology without governance is just organized chaos. I establish oversight structures before deployment — not after the incident report lands on someone\'s desk.',
    tags: ['GOVERNANCE', 'STRATEGY'],
  },
];

const ventures = [
  {
    title: 'Enterprise AI Governance',
    role: 'Advisor & Architect',
    desc: 'Building governance structures and risk frameworks for organizations adopting AI at scale. Board-level risk visibility, evaluation models, cross-functional alignment.',
    status: 'active',
  },
  {
    title: 'Render Defense',
    role: 'Founder',
    desc: 'Security governance platform for growing businesses. Enterprise-grade security posture management, compliance tracking, and risk scoring — made accessible.',
    status: 'building',
  },
  {
    title: 'Adversarial ML Research',
    role: 'Collaborator',
    desc: 'Partnered with TrojAI on adversarial machine learning evaluation datasets. Real-world threat scenarios informing enterprise AI security controls.',
    status: 'active',
  },
  {
    title: 'Agentic AI Operations Platform',
    role: 'Architect',
    desc: 'Autonomous operations architecture built on agentic AI principles. Tiered model routing, cost optimization, and multi-workflow orchestration — a working system, not a concept.',
    status: 'active',
  },
  {
    title: 'Technology Risk Advisory',
    role: 'Independent Consultant',
    desc: 'Helping organizations navigate cloud migration, resilience improvements, and infrastructure modernization. Structured program management with phased execution.',
    status: 'ongoing',
  },
];

const writing = [
  {
    type: 'PERSPECTIVE',
    title: 'Why AI Governance Cannot Be an Afterthought',
    desc: 'Organizations deploying AI without governance structures are building on sand. Here is what I have seen go wrong — and how to fix it before the audit.',
    date: 'MAR 2026',
  },
  {
    type: 'FRAMEWORK',
    title: 'Risk-Informed Decision Making for AI Deployment',
    desc: 'Every AI deployment decision should be grounded in structured risk assessment. Not intuition. Not hype. Not what the vendor told you in the demo.',
    date: 'FEB 2026',
  },
  {
    type: 'CASE STUDY',
    title: 'Building an Enterprise AI Governance Board from Zero',
    desc: 'No precedent. No playbook. Fast-moving technology. Diverse stakeholders. Here is how we built a governance structure that actually works.',
    date: 'JAN 2026',
    href: '/case-studies/ai-governance-board',
  },
  {
    type: 'OPINION',
    title: 'The Biggest Mistake in Enterprise Architecture',
    desc: 'Effective architecture is not about diagrams. It is about enabling outcomes. Too many architects forget that the org chart matters more than the system diagram.',
    date: 'DEC 2025',
  },
];

export default function HomePage() {
  return (
    <PortfolioShell>
      <div style={{ fontFamily: "'Outfit', sans-serif" }}>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 1: HERO
            ═══════════════════════════════════════════════════════════ */}
        <section id="hero" style={{ padding: '120px 0', position: 'relative' }}>
          {/* Ambient glow */}
          <div className="ambient-glow" style={{ right: '-10%', top: '20%', position: 'absolute' }} />

          <div className="pf-hero-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 320px',
            gap: 60,
            alignItems: 'center',
            maxWidth: 1000,
          }}>
            <div>
              <span className="pf-section-label fade-up fade-up-delay-1">
                Larnel J Hight
              </span>

              <h1 className="fade-up fade-up-delay-1" style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(42px, 6vw, 76px)',
                letterSpacing: -3,
                lineHeight: 0.95,
                color: 'var(--text-primary)',
                marginTop: 0,
              }}>
                I build the governance<br />
                <span style={{ color: 'var(--accent-primary)' }}>
                  that makes innovation safe
                </span><br />
                at enterprise scale.
              </h1>

              <p className="fade-up fade-up-delay-2" style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 300,
                fontSize: 20,
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginTop: 32,
                maxWidth: 640,
              }}>
                25 years of security leadership, enterprise architecture, and hands-on building.
                Now focused on AI governance — because someone has to make sure the future
                does not break the present.
              </p>

              <div className="fade-up fade-up-delay-2" style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a href="#connect" className="pf-btn-primary">
                  LET&apos;S TALK
                </a>
                <a href="#story" className="pf-btn-secondary">
                  MY STORY
                </a>
              </div>
            </div>

            {/* Headshot */}
            <div className="pf-hero-headshot fade-up fade-up-delay-2" style={{
              position: 'relative',
            }}>
              <div style={{
                width: 320,
                height: 400,
                borderRadius: 16,
                overflow: 'hidden',
                border: '2px solid var(--bg-raised)',
                position: 'relative',
              }}>
                <img
                  src="/headshot.png"
                  alt="Larnel J Hight"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: 'grayscale(100%) contrast(1.1)',
                  }}
                />
                {/* Accent border overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: 'var(--accent-primary)',
                }} />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 2: MARQUEE
            ═══════════════════════════════════════════════════════════ */}
        <section style={{ overflow: 'hidden', padding: '40px 0', marginLeft: -60, marginRight: -60 }}>
          <div className="marquee-track">
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i} style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: 72,
                textTransform: 'uppercase',
                letterSpacing: -1,
                color: 'var(--bg-surface)',
                WebkitTextStroke: '1px #222',
                whiteSpace: 'nowrap',
                paddingRight: 60,
              }}>
                {word}
              </span>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 3: STORY
            ═══════════════════════════════════════════════════════════ */}
        <section id="story" className="reveal" style={{ padding: '120px 0', maxWidth: 900 }}>
          <span className="pf-section-label">The Arc</span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: 42,
            letterSpacing: -1.5,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: 48,
          }}>
            Three eras. One thread.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {storyEras.map((era, i) => (
              <div key={i} className="pf-story-row" style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: 40,
                padding: '40px 0',
                borderBottom: i < storyEras.length - 1 ? '1px solid var(--bg-raised)' : 'none',
              }}>
                <div>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                    color: 'var(--accent-primary)',
                    opacity: 0.8,
                  }}>
                    {era.period}
                  </span>
                  <p style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 11,
                    color: 'var(--text-muted)',
                    marginTop: 4,
                  }}>
                    {era.years}
                  </p>
                </div>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 300,
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                }}>
                  {era.narrative}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {['CISSP', 'AIGP (IN PROGRESS)'].map((cred) => (
              <span key={cred} className="pf-credential">{cred}</span>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 4: FRAMEWORKS
            ═══════════════════════════════════════════════════════════ */}
        <section id="frameworks" className="reveal" style={{ padding: '120px 0' }}>
          <span className="pf-section-label">Original Thinking</span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: 42,
            letterSpacing: -1.5,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: 48,
          }}>
            How I think about the work.
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}>
            {frameworks.map((fw, i) => (
              <div key={i} className="pf-card">
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: 1.3,
                  color: 'var(--text-primary)',
                  marginBottom: 12,
                }}>
                  {fw.title}
                </h3>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  marginBottom: 20,
                }}>
                  {fw.desc}
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {fw.tags.map((tag) => (
                    <span key={tag} className="pf-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 5: VENTURES
            ═══════════════════════════════════════════════════════════ */}
        <section id="ventures" className="reveal" style={{ padding: '120px 0' }}>
          <span className="pf-section-label">Active Ventures</span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: 42,
            letterSpacing: -1.5,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: 48,
          }}>
            What I am building right now.
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}>
            {ventures.map((v, i) => (
              <div key={i} className="pf-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      lineHeight: 1.3,
                      color: 'var(--text-primary)',
                    }}>
                      {v.title}
                    </h3>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 10,
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                    }}>
                      {v.role}
                    </span>
                  </div>
                  <span className={`pf-venture-status pf-venture-status--${v.status}`}>
                    <span className="pf-venture-dot" />
                    {v.status}
                  </span>
                </div>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 6: WRITING
            ═══════════════════════════════════════════════════════════ */}
        <section id="writing" className="reveal" style={{ padding: '120px 0', maxWidth: 900 }}>
          <span className="pf-section-label">Writing & Thinking</span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: 42,
            letterSpacing: -1.5,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: 48,
          }}>
            What is on my mind.
          </h2>

          <div>
            {writing.map((w, i) => {
              const content = (
                <div key={i} className="pf-writing-item">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 9,
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      color: 'var(--accent-primary)',
                      opacity: 0.8,
                    }}>
                      {w.type}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 9,
                        letterSpacing: 1.5,
                        color: 'var(--text-muted)',
                      }}>
                        {w.date}
                      </span>
                      {w.href && (
                        <span className="pf-writing-arrow" style={{ fontSize: 14 }}>→</span>
                      )}
                    </div>
                  </div>
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    lineHeight: 1.3,
                    color: 'var(--text-primary)',
                    marginTop: 8,
                    transition: 'color 0.2s',
                  }}>
                    {w.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 300,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    marginTop: 8,
                  }}>
                    {w.desc}
                  </p>
                </div>
              );
              return w.href ? (
                <Link key={i} href={w.href} className="pf-writing-link">{content}</Link>
              ) : (
                content
              );
            })}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 7: CONNECT
            ═══════════════════════════════════════════════════════════ */}
        <section id="connect" className="reveal" style={{ padding: '120px 0' }}>
          <span className="pf-section-label">Connect</span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)',
            letterSpacing: -2,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: 24,
          }}>
            I am not hard to find.<br />
            But I am selective about<br />
            <span style={{ color: 'var(--accent-primary)' }}>where I invest my time.</span>
          </h2>

          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 300,
            fontSize: 16,
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            maxWidth: 600,
            marginBottom: 48,
          }}>
            If you are serious about AI governance, security leadership, or building something
            that matters — reach out. No sales calls. No tire kickers. Real conversations only.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 80 }}>
            <a href="mailto:contact@example.com" className="pf-btn-primary">
              EMAIL ME
            </a>
            <a href="https://linkedin.com/in/larnelhight" target="_blank" rel="noopener noreferrer" className="pf-btn-secondary">
              LINKEDIN
            </a>
          </div>

          {/* Footer */}
          <footer style={{ borderTop: '1px solid var(--bg-raised)', paddingTop: 48 }}>
            <div className="pf-footer-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 40,
            }}>
              <div>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: 16,
                  display: 'block',
                }}>
                  Focus
                </span>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                }}>
                  AI Governance, Enterprise Architecture, Technology Risk, Security Leadership
                </p>
              </div>
              <div>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: 16,
                  display: 'block',
                }}>
                  Status
                </span>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                }}>
                  Open to Senior Manager / Principal IC roles at the intersection of AI security, governance, and cloud architecture. Remote-first.
                </p>
              </div>
              <div>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: 16,
                  display: 'block',
                }}>
                  Industries
                </span>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                }}>
                  Finance, Higher Education, Healthcare, Government, Trust-Sensitive Sectors
                </p>
              </div>
            </div>

            <div style={{
              marginTop: 48,
              paddingTop: 24,
              borderTop: '1px solid var(--bg-raised)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                letterSpacing: 2,
                color: 'var(--text-dead)',
              }}>
                &copy; {new Date().getFullYear()} LARNEL J HIGHT. ALL RIGHTS RESERVED.
              </span>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                letterSpacing: 2,
                color: 'var(--text-dead)',
              }}>
                PEOPLE. PROCESS. TECHNOLOGY.
              </span>
            </div>
          </footer>
        </section>
      </div>
    </PortfolioShell>
  );
}
