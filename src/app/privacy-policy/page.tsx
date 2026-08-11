import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — VictorMdeia',
  description: 'Comprehensive Privacy Policy detailing data collection, cookies, Google AdSense, Google Analytics, and user privacy rights at VictorMdeia.net.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.25rem', maxWidth: '860px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Last updated: August 2026</p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. Introduction</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          At VictorMdeia (https://victormdeia.net), we respect your privacy. This Privacy Policy outlines what information is collected, how it is used, and your rights regarding your data.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>2. Data Collection & Processing</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          <strong>Browser-Processed Data:</strong> The primary service of VictorMdeia is providing online utilities (calculators, text counters, JSON formatters, image compressors). All data processed within these tools remains locally within your browser and is not stored or transmitted to our servers.
        </p>
        <p style={{ color: 'var(--text-secondary)' }}>
          <strong>Voluntary Submissions:</strong> When you send a message via our Contact form, we collect your name, email address, and message contents solely for responding to your inquiry.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>3. Third-Party Advertising & Google AdSense</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          We may use Google AdSense to serve advertisements on VictorMdeia.net. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites on the internet.
        </p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to VictorMdeia.net and/or other sites on the Internet.
        </p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>Google Ads Settings</a>.
        </p>
        <p style={{ color: 'var(--text-secondary)', background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
          To learn more about how Google collects and processes data when you use partner sites, please review: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>How Google uses information from sites or apps that use our services</a>.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>4. Analytics & Cookies</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          We use Google Analytics to measure site traffic and tool usage performance in an anonymous fashion. You can manage or disable optional performance cookies at any time using our Cookie Preferences banner.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>5. Contact Information</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          If you have questions regarding this Privacy Policy, please contact us at: <a href="mailto:arasu9629hf@gmail.com" style={{ color: 'var(--accent-primary)' }}>arasu9629hf@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
