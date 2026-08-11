/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — VictorMedia',
  description: 'Official Terms of Service for VictorMedia online utilities and services.',
};

export default function TermsPage() {
  return (
    <div className="container" style={{ padding: '4rem 1.25rem', maxWidth: '880px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Terms of Service</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
        Effective Date: August 12, 2026 | Last Updated: August 12, 2026
      </p>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. Acceptance of Terms</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          By accessing and using VictorMedia (https://victor-media.vercel.app and https://victormedia.net), you agree to be bound by these Terms of Service. If you do not agree with any portion of these terms, you should immediately discontinue use of our website and services.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>2. Use of Online Tools</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          VictorMedia grants you a free, non-exclusive, non-transferable license to access and use our online calculators, formatters, converters, and generators for personal, educational, and commercial workflows.
        </p>
        <p style={{ color: 'var(--text-secondary)' }}>
          You agree not to use our tools for any illegal, malicious, or unauthorized activities, including attempting to reverse engineer, scrape, or flood our infrastructure.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>3. Disclaimer of Warranties</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          All tools, calculations, and services on VictorMedia are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. While we strive for absolute calculation precision, we do not guarantee that outputs will be error-free or suitable for critical financial, legal, or medical decisions.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>4. Intellectual Property</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          All site designs, software scripts, brand logos, layouts, and textual content are the exclusive intellectual property of VictorMedia and protected under international copyright and trademark laws.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>5. Contact Us</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          If you have questions concerning these Terms, please contact us at: <a href="mailto:arasu9629hf@gmail.com" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>arasu9629hf@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
