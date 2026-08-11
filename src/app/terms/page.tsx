/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — VictorMedia',
  description: 'Terms of Service governing usage of VictorMedia.net online tools and services.',
};

export default function TermsPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.25rem', maxWidth: '860px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Terms of Service</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Effective Date: August 2026</p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. Acceptance of Terms</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          By accessing and using VictorMedia.net ("Website"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our tools or services.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>2. Use of Online Utilities</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          VictorMedia provides online utilities for general informational and productivity purposes. While we strive for absolute precision in our calculators and converters, all results are provided "as-is" without warranty of any kind.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>3. Intellectual Property</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          All original website code, layout design, branding, and graphics on VictorMedia.net are the property of VictorMedia. Content you input or upload into tools remains strictly your own property.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>4. Contact</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Questions regarding these Terms may be directed to <a href="mailto:arasu9629hf@gmail.com" style={{ color: 'var(--accent-primary)' }}>arasu9629hf@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
