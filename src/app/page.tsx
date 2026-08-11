import React from 'react';
import Link from 'next/link';
import { Search, Zap, Shield, Sparkles, ArrowRight, Wrench } from 'lucide-react';
import { getPopularTools, getFeaturedTools, CATEGORIES, TOOLS_REGISTRY } from '@/lib/tools-data';
import { ToolCard } from '@/components/ToolCard';
import { AdUnit } from '@/components/AdComponents';

export default function HomePage() {
  const popularTools = getPopularTools();
  const featuredTools = getFeaturedTools();

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '3.5rem', textAlign: 'center', background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.12) 0%, transparent 60%)' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-accent" style={{ marginBottom: '1.25rem', padding: '0.35rem 0.85rem' }}>
            ⚡ 100% Free & Browser-Processed Utilities
          </div>
          <h1 style={{ marginBottom: '1.25rem', tracking: '-0.02em' }}>
            Victor<span className="gradient-text">Mdeia</span> — Free, Fast & Useful Online Tools
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Empowering your daily workflow with over {TOOLS_REGISTRY.length}+ instant online calculators, converters, developer tools, text utilities, and generators.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/tools" className="btn btn-primary" style={{ padding: '0.8rem 1.75rem', fontSize: '1rem' }}>
              Explore All {TOOLS_REGISTRY.length}+ Tools <ArrowRight size={18} />
            </Link>
            <Link href="/categories" className="btn btn-secondary" style={{ padding: '0.8rem 1.5rem', fontSize: '1rem' }}>
              View Categories
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <AdUnit format="auto" />
      </div>

      {/* Popular Tools Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <div>
              <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>Most Used</span>
              <h2>Popular Online Tools</h2>
            </div>
            <Link href="/tools" className="btn btn-outline" style={{ fontSize: '0.88rem' }}>
              View All Tools <ArrowRight size={16} />
            </Link>
          </div>

          <div className="tools-grid">
            {popularTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--bg-card-border)', borderBottom: '1px solid var(--bg-card-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>Organized Directory</span>
            <h2>Browse Tools by Category</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
              Find the exact utility you need grouped by specialized domain.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {CATEGORIES.map((cat) => (
              <Link key={cat.name} href={`/categories#${cat.name.toLowerCase()}`} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{cat.name}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{cat.description}</p>
                </div>
                <div style={{ marginTop: '1.25rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>View Tools</span> <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>Handpicked</span>
            <h2>Featured Utilities</h2>
          </div>

          <div className="tools-grid">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose VictorMdeia */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
            <h2>Why Choose VictorMdeia?</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Built for speed, simplicity, and absolute data privacy.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                <Shield size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>100% Client-Side Privacy</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Your data, calculations, and images remain strictly inside your browser. Nothing is stored on remote servers.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Instant Load Speed</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Zero software downloads or registrations required. Open any tool and get immediate results.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Mobile-First Design</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Clean, accessible, and responsive interface optimized for smartphones, tablets, and desktop workstations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>

          <div className="faq-item">
            <div className="faq-question">Are VictorMdeia tools completely free to use?</div>
            <div className="faq-answer">Yes, 100% free with unlimited usage. No subscriptions, hidden fees, or registration limits.</div>
          </div>

          <div className="faq-item">
            <div className="faq-question">Is my text or image data saved on any server?</div>
            <div className="faq-answer">No! All processing (calculations, text formatting, image compression, QR generation) is executed locally inside your browser using modern Web API standards.</div>
          </div>

          <div className="faq-item">
            <div className="faq-question">Do these tools work on mobile devices?</div>
            <div className="faq-answer">Yes, VictorMdeia is built mobile-first and works seamlessly on Android, iOS, tablets, and desktop screens.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
