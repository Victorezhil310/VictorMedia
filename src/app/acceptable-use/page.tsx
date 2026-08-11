/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acceptable Use Policy — VictorMedia',
  description: 'Acceptable Use Policy for accessing VictorMedia online tools and website infrastructure.',
};

export default function AcceptableUsePage() {
  return (
    <div className="container" style={{ padding: '4rem 1.25rem', maxWidth: '880px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Acceptable Use Policy</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
        Last Updated: August 12, 2026
      </p>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. Prohibited Conduct</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Users of VictorMedia agree not to launch automated Denial-of-Service (DoS) attacks, introduce malware, or attempt to compromise server infrastructure hosting our web pages.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>2. Fair Usage</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Because all tool calculations run locally inside your browser, there are no artificial limits on personal usage. However, excessive automated scraping of site assets is prohibited.
        </p>
      </section>
    </div>
  );
}
