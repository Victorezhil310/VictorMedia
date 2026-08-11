import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility — VictorMdeia',
  description: 'VictorMdeia commitment to web accessibility and WCAG standards.',
};

export default function AccessibilityPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.25rem', maxWidth: '860px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Accessibility Statement</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
        VictorMdeia is committed to ensuring digital accessibility for people with disabilities. We continuously improve user experience for everyone by applying relevant WCAG accessibility standards.
      </p>
      <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Accessibility Features</h2>
      <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)' }}>
        <li>Keyboard navigation support across all tool inputs and buttons.</li>
        <li>High contrast dark and light theme modes.</li>
        <li>Semantic HTML structure for screen reader compatibility.</li>
      </ul>
    </div>
  );
}
