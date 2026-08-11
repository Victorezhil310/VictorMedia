import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acceptable Use Policy — VictorMdeia',
  description: 'Acceptable Use Policy outlining prohibited activities on VictorMdeia.net.',
};

export default function AcceptableUsePage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.25rem', maxWidth: '860px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Acceptable Use Policy</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
        You may use VictorMdeia.net only for lawful purposes. You agree not to attempt automated denial-of-service attacks, reverse engineering malicious payloads, or abusing server APIs.
      </p>
    </div>
  );
}
