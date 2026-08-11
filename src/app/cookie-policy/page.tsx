/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy — VictorMedia',
  description: 'Learn how VictorMedia uses cookies, local storage, Google AdSense cookies, and analytics tags.',
};

export default function CookiePolicyPage() {
  return (
    <div className="container" style={{ padding: '4rem 1.25rem', maxWidth: '880px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Cookie Policy</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
        Last Updated: August 12, 2026
      </p>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. What Are Cookies?</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Cookies are small text files placed on your device by your web browser when you visit websites. They help websites remember preferences (like dark/light theme choice) and measure visitor statistics.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>2. Types of Cookies We Use</h2>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <li>
            <strong>Essential Cookies & LocalStorage:</strong> Used to remember your UI color theme preference (dark/light mode) and cookie consent status.
          </li>
          <li>
            <strong>Advertising Cookies (Google AdSense):</strong> Third-party advertising partners (Google AdSense, Publisher ID: <code>ca-pub-6751037211810646</code>) place advertising cookies to display relevant ads.
          </li>
          <li>
            <strong>Analytics Cookies (Google Analytics):</strong> Used by Google Analytics (Tag ID: <code>G-VMED1008080</code>) to aggregate anonymous traffic statistics.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>3. How to Manage Cookies</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          You can accept or decline non-essential cookies via our website Consent Banner, or configure your browser settings to block third-party cookies at any time.
        </p>
      </section>
    </div>
  );
}
