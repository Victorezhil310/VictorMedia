import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy — VictorMdeia',
  description: 'Detailed Cookie Policy outlining essential, analytics, and advertising cookies at VictorMdeia.net.',
};

export default function CookiePolicyPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.25rem', maxWidth: '860px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Cookie Policy</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Last updated: August 2026</p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. What Are Cookies?</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Cookies are small text files placed on your device by your web browser when visiting websites. They store preferences (such as light/dark mode settings) and help optimize browser performance.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>2. Types of Cookies Used</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
          <strong>Essential Cookies:</strong> Used to save your selected theme preference and cookie consent settings.
        </p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
          <strong>Analytics Cookies:</strong> Provided by Google Analytics to collect anonymous traffic statistics.
        </p>
        <p style={{ color: 'var(--text-secondary)' }}>
          <strong>Advertising Cookies:</strong> Used by Google AdSense to serve relevant advertisements.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>3. Managing Cookies</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          You can adjust your cookie settings at any time using our on-screen Privacy Consent Banner or through your browser's security settings.
        </p>
      </section>
    </div>
  );
}
