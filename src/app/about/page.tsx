import React from 'react';
import { Metadata } from 'next';
import { Shield, Zap, Wrench, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — VictorMedia Online Tools',
  description: 'Learn about VictorMedia, our mission to provide free, private, browser-processed tools, and our technical architecture.',
};

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.25rem', maxWidth: '860px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>About VictorMedia</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
        VictorMedia is an independent digital tools and utility platform designed to deliver fast, reliable, accessible, and browser-based software utilities.
      </p>

      <div className="glass-card" style={{ padding: '2rem', marginBottom: '2.5rem', background: 'var(--bg-secondary)' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Wrench color="var(--accent-primary)" /> Our Mission
        </h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          Our goal is to make everyday digital tasks—calculating formulas, converting measurements, formatting code, measuring text, compressing images, and generating passwords—effortless and instantaneous.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-secondary)' }}>
          <Shield size={24} color="var(--accent-primary)" style={{ marginBottom: '0.5rem' }} />
          <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Client-Side Privacy</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            We prioritize user data privacy. All text calculations, image resizing, and conversions take place strictly inside your web browser.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-secondary)' }}>
          <Zap size={24} color="var(--accent-primary)" style={{ marginBottom: '0.5rem' }} />
          <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Zero Friction</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            No forced accounts, logins, or app downloads. Every utility is immediately usable in any modern web browser.
          </p>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '2rem', background: 'var(--bg-secondary)' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Contact & Operations</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          For inquiries, suggestions, or bug reports, feel free to reach out to our team:
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--accent-primary)' }}>
          <Mail size={18} />
          <a href="mailto:arasu9629hf@gmail.com">arasu9629hf@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
