/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, Sparkles, Cpu, Lock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — VictorMedia',
  description: 'Discover the mission, technology, and privacy architecture behind VictorMedia free online tools.',
};

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '4rem 1.25rem', maxWidth: '920px', lineHeight: 1.7 }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div className="badge badge-accent" style={{ marginBottom: '1rem' }}>
          <Sparkles size={14} /> Mission & Architecture
        </div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          About <span className="gradient-text">VictorMedia</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto' }}>
          Empowering users worldwide with fast, private, browser-processed web tools designed for maximum productivity with zero server latency.
        </p>
      </div>

      <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Why We Built VictorMedia</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          Many online tools on the web today force users through intrusive sign-up popups, slow server loading times, or silently upload sensitive user data (like passwords, images, or JSON documents) to unknown third-party cloud servers.
        </p>
        <p style={{ color: 'var(--text-secondary)' }}>
          VictorMedia was created to provide a <strong>radically transparent alternative</strong>: a modern suite of high-performance web utilities where 100% of data processing happens locally inside your web browser.
        </p>
      </div>

      <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2rem' }}>Core Engineering Principles</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
        <div className="glass-card" style={{ padding: '1.75rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Lock size={24} />
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Absolute Privacy</h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
            Your calculated values, text, and files never leave your computer. We operate with zero cloud backend storage for user tool data.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '1.75rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Zap size={24} />
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Zero Server Latency</h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
            Outputs are computed in sub-milliseconds directly in WebAssembly and JavaScript, eliminating network delays.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '1.75rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Cpu size={24} />
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Universal Accessibility</h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
            Fully responsive glassmorphic UI engineered to run smoothly across smartphones, tablets, laptops, and desktop workstations.
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link href="/tools" className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
          Explore All Tools <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
