/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA & Copyright Policy — VictorMedia',
  description: 'Digital Millennium Copyright Act (DMCA) policy and takedown instructions for VictorMedia.',
};

export default function DmcaPage() {
  return (
    <div className="container" style={{ padding: '4rem 1.25rem', maxWidth: '880px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>DMCA & Copyright Policy</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
        Last Updated: August 12, 2026
      </p>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. Copyright Respect</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          VictorMedia respects intellectual property rights and expects its users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond promptly to valid notices of alleged copyright infringement.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>2. Filing a Takedown Notice</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          If you believe that content hosted on VictorMedia infringes your copyright, please submit a written notification to our Designated Copyright Agent at <code>arasu9629hf@gmail.com</code> containing:
        </p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>A physical or electronic signature of the copyright owner or authorized representative.</li>
          <li>Identification of the copyrighted work claimed to have been infringed.</li>
          <li>Identification of the material claimed to be infringing and its specific URL on VictorMedia.</li>
          <li>Your contact information (name, address, telephone number, and email address).</li>
        </ul>
      </section>
    </div>
  );
}
