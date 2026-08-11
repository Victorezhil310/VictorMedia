/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — VictorMedia',
  description: 'Official Privacy Policy for VictorMedia. Learn how we handle client-side browser calculations, cookies, Google AdSense ads, and data privacy rights.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container" style={{ padding: '4rem 1.25rem', maxWidth: '880px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
        Effective Date: August 12, 2026 | Last Updated: August 12, 2026
      </p>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. Overview & Commitment to Privacy</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          At VictorMedia (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), accessible from <strong>https://victor-media.vercel.app</strong> and <strong>https://victormedia.net</strong>, protecting your online privacy is a fundamental commitment. This Privacy Policy details our data practices, how browser-based tool utilities operate, our use of cookies, and your rights under global privacy regulations including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>2. 100% Client-Side Tool Processing</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          The core utilities hosted on VictorMedia — including mathematical calculators, unit converters, text formatters, JSON validators, QR code generators, image compression tools, and password generators — run <strong>entirely inside your web browser</strong> (client-side JavaScript).
        </p>
        <p style={{ color: 'var(--text-secondary)' }}>
          Any numbers, text entries, files, or images you input into our tools remain strictly on your local device. We do not store, copy, upload, log, or transmit your inputs to external remote servers.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>3. Information We Collect</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          <strong>Voluntary Communications:</strong> When you send us an email or submit an inquiry via our Contact form, we receive your name, email address (e.g., <code>arasu9629hf@gmail.com</code>), and the contents of your message. We use this information strictly to respond to your request.
        </p>
        <p style={{ color: 'var(--text-secondary)' }}>
          <strong>Automated Technical Data:</strong> Like most web applications, our web hosting provider (Vercel) automatically logs standard server access headers including IP addresses, browser user-agent types, referring pages, and access timestamps for diagnostic security purposes.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>4. Google AdSense & Third-Party Advertising</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          We partner with Google AdSense (Publisher ID: <code>ca-pub-6751037211810646</code>) to serve advertisements on VictorMedia.
        </p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          Google uses cookies and web beacons to serve ads based on users&apos; previous visits to VictorMedia or other websites on the internet. Google&apos;s use of advertising cookies enables it and its partners to serve personalized or contextual advertisements.
        </p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          You may opt out of personalized advertising at any time by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>Google Ads Settings</a> or through <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>www.aboutads.info</a>.
        </p>
        <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-card-border)' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            For details on how Google processes data across partner sites, visit: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>How Google uses information from sites or apps that use our services</a>.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>5. Google Analytics</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          We use Google Analytics (Tag ID: <code>G-VMED1008080</code>) to analyze overall site traffic patterns, page views, and performance metrics. Google Analytics collects anonymized browser data. You can manage or disable performance cookies via our Cookie Consent banner at any time.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>6. Your Rights (GDPR & CCPA)</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Depending on your jurisdiction, you have the right to access, rectify, delete, or restrict the processing of your personal data. Because we do not store tool user data on our servers, there is no personal tool data to erase. For any inquiry regarding contact communications, please write to us.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>7. Contact Information</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          For any privacy concerns or policy inquiries, please email us directly at: <a href="mailto:arasu9629hf@gmail.com" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>arasu9629hf@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
