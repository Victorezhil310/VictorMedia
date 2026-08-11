'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Sparkles, ArrowRight, Search, Cpu, Zap } from 'lucide-react';
import { getPopularTools, getFeaturedTools, CATEGORIES, TOOLS_REGISTRY } from '@/lib/tools-data';
import { ToolCard } from '@/components/ToolCard';
import { AdUnit } from '@/components/AdComponents';

export default function HomePage() {
  const popularTools = getPopularTools();
  const featuredTools = getFeaturedTools();
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoriesList = ['All', ...CATEGORIES.map((c) => c.name)];

  const filteredTools = TOOLS_REGISTRY.filter((tool) => {
    const matchesQuery =
      tool.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      tool.shortDescription.toLowerCase().includes(filterQuery.toLowerCase()) ||
      tool.keywords.some((k) => k.toLowerCase().includes(filterQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All' || tool.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesQuery && matchesCategory;
  });

  return (
    <div>
      {/* Antigravity Hero Section */}
      <section
        className="section"
        style={{
          paddingTop: '5rem',
          paddingBottom: '4.5rem',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '920px' }}>
          <div
            className="badge badge-accent"
            style={{
              marginBottom: '1.5rem',
              padding: '0.4rem 1rem',
              fontSize: '0.8rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span className="pulse-dot" />
            <span>ANTIGRAVITY ENGINE • 100% PRIVATE CLIENT-SIDE PROCESSING</span>
          </div>

          <h1 style={{ marginBottom: '1.4rem', lineHeight: 1.15 }}>
            Next-Gen Suite of <span className="gradient-text">Instant Online Utilities</span>
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
              maxWidth: '750px',
              marginInline: 'auto',
              lineHeight: 1.6,
            }}
          >
            Empower your workflow with {TOOLS_REGISTRY.length}+ hyper-fast calculators, developer formats, text utilities, and generators operating with zero server latency.
          </p>

          {/* Interactive Search Bar in Hero */}
          <div
            className="glass-card"
            style={{
              padding: '0.6rem',
              maxWidth: '680px',
              margin: '0 auto 2.5rem auto',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <Search size={22} style={{ color: 'var(--accent-primary)', marginLeft: '0.75rem' }} />
            <input
              type="text"
              placeholder="Search any tool (e.g., QR Code, Word Counter, JSON, BMI, Unit)..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                background: 'transparent',
                color: 'var(--text-primary)',
                width: '100%',
                fontSize: '1rem',
                padding: '0.5rem',
              }}
            />
            {filterQuery && (
              <button
                onClick={() => setFilterQuery('')}
                style={{
                  background: 'var(--bg-tertiary)',
                  border: 'none',
                  color: 'var(--text-muted)',
                  borderRadius: '50%',
                  width: '26px',
                  height: '26px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '0.5rem',
                }}
              >
                ✕
              </button>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <Link href="/tools" className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1.02rem' }}>
              Explore All {TOOLS_REGISTRY.length}+ Tools <ArrowRight size={18} />
            </Link>
            <Link href="/categories" className="btn btn-secondary" style={{ padding: '0.85rem 1.8rem', fontSize: '1.02rem' }}>
              Browse Categories
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <AdUnit format="auto" />
      </div>

      {/* Filtered Search Results / Popular Tools Section */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>
                {filterQuery ? 'Search Results' : 'High Performance'}
              </span>
              <h2>{filterQuery ? `Results matching "${filterQuery}"` : 'Popular Utilities'}</h2>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {categoriesList.slice(0, 5).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '0.4rem 0.85rem', fontSize: '0.82rem', borderRadius: 'var(--radius-full)' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filterQuery || selectedCategory !== 'All' ? (
            filteredTools.length > 0 ? (
              <div className="tools-grid">
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            ) : (
              <div
                className="glass-card"
                style={{ textAlign: 'center', padding: '3rem 1.5rem', color: 'var(--text-muted)' }}
              >
                <Cpu size={40} style={{ margin: '0 auto 1rem auto', color: 'var(--accent-primary)' }} />
                <h3>No matching utilities found</h3>
                <p style={{ marginTop: '0.5rem' }}>Try searching with a different term like &quot;calc&quot;, &quot;unit&quot;, &quot;json&quot;, or &quot;text&quot;.</p>
              </div>
            )
          ) : (
            <div className="tools-grid">
              {popularTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section
        className="section"
        style={{
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--bg-card-border)',
          borderBottom: '1px solid var(--bg-card-border)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>Domain Collections</span>
            <h2>Structured Utility Directory</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
              Select a domain below to access dedicated tools optimized for developers, creators, students, and professionals.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                href={`/categories#${cat.name.toLowerCase()}`}
                className="glass-card"
                style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{cat.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{cat.description}</p>
                </div>
                <div
                  style={{
                    marginTop: '1.5rem',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span>Explore Tools</span> <ArrowRight size={16} />
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
            <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>Curated Selection</span>
            <h2>Featured Workflows</h2>
          </div>

          <div className="tools-grid">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Antigravity Architecture Highlights */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
            <h2>Architected for Pure Performance</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
              VictorMedia eliminates latency, registration walls, and cloud server vulnerabilities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2.25rem', textAlign: 'center' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--accent-light)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto',
                }}
              >
                <Shield size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>100% Client-Side Privacy</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                Your data, text, image files, and calculations never leave your computer. Everything runs locally in WebAssembly & JS sandbox.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2.25rem', textAlign: 'center' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--accent-light)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto',
                }}
              >
                <Zap size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Sub-Millisecond Speed</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                Instant calculations with zero network round-trips. No login screens, no rate limits, no annoying popups.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2.25rem', textAlign: 'center' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--accent-light)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto',
                }}
              >
                <Sparkles size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Antigravity Responsive UX</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                Crafted with fluid glassmorphism layout, responsive grid systems, and touch-ready controls across mobile and desktop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Frequently Asked Questions</h2>

          <div className="faq-item">
            <div className="faq-question">Are VictorMedia utilities 100% free?</div>
            <div className="faq-answer">
              Yes, all tools on VictorMedia are completely free with zero subscription fees, hidden limits, or paywalls.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">Does VictorMedia collect or store user data?</div>
            <div className="faq-answer">
              No. VictorMedia operates strictly client-side inside your web browser. No calculated figures, uploaded images, or text documents are sent to external databases.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">Is VictorMedia compliant with Google AdSense and search standards?</div>
            <div className="faq-answer">
              Yes, VictorMedia adheres strictly to official publisher guidelines, SSL security, web accessibility, and structured search engine schemas.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
