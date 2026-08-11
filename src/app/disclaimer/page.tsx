/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer — VictorMedia',
  description: 'Official legal disclaimer for VictorMedia online tools and calculators.',
};

export default function DisclaimerPage() {
  return (
    <div className="container" style={{ padding: '4rem 1.25rem', maxWidth: '880px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Disclaimer</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
        Last Updated: August 12, 2026
      </p>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. General Information Purpose</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          The calculations, conversions, text outputs, and utility tools provided on VictorMedia (https://victor-media.vercel.app and https://victormedia.net) are intended solely for general informational, educational, and workflow utility purposes.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>2. Financial & Health Disclaimer</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          <strong>Financial Calculators:</strong> Calculators such as loan repayment, mortgage, compound interest, and percentage tools produce estimates based on standard mathematical formulas. They do not constitute official financial advice or binding bank quotes.
        </p>
        <p style={{ color: 'var(--text-secondary)' }}>
          <strong>Health Calculators:</strong> Tools such as the BMI Calculator provide standard index estimates for general reference. They do not replace professional medical advice, diagnosis, or clinical evaluation.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>3. Contact</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          For inquiries about this disclaimer, contact: <a href="mailto:arasu9629hf@gmail.com" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>arasu9629hf@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
