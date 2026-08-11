import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer — VictorMdeia Online Tools',
  description: 'General disclaimer regarding information, calculations, and medical/financial tool outputs on VictorMdeia.net.',
};

export default function DisclaimerPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.25rem', maxWidth: '860px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Disclaimer</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Last updated: August 2026</p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. General Informational Use</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          The calculators, converters, text tools, and generators on VictorMdeia.net are provided for general informational and productivity purposes only.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>2. Health & Medical Disclaimer (BMI Calculator)</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          The Body Mass Index (BMI) calculator provides general body mass estimates based on standard WHO formulas. It is not medical advice and should not replace consultation with a qualified medical professional.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>3. Financial & Math Calculations</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Discount and percentage tools provide general arithmetic calculations. Users should independently verify calculations prior to financial or commercial transactions.
        </p>
      </section>
    </div>
  );
}
