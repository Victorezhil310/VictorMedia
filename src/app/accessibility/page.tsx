/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement — VictorMedia',
  description: 'Web content accessibility commitment for VictorMedia.',
};

export default function AccessibilityPage() {
  return (
    <div className="container" style={{ padding: '4rem 1.25rem', maxWidth: '880px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Accessibility Statement</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
        Last Updated: August 12, 2026
      </p>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. Commitment to Accessibility</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          VictorMedia is dedicated to ensuring digital accessibility for people of all abilities. We continuously apply relevant Web Content Accessibility Guidelines (WCAG 2.1 Level AA) standards to improve user experience across screen readers, high contrast displays, and mobile devices.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>2. Feedback</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          We welcome your feedback on the accessibility of VictorMedia. If you encounter any accessibility barriers, please inform us at: <a href="mailto:arasu9629hf@gmail.com" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>arasu9629hf@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
