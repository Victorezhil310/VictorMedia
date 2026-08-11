import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA & Copyright Policy — VictorMedia',
  description: 'DMCA Takedown and Copyright Notice procedures for VictorMedia.net.',
};

export default function DmcaPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.25rem', maxWidth: '860px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>DMCA & Copyright Policy</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
        VictorMedia respects the intellectual property rights of others. If you believe your copyrighted work is accessible on VictorMedia.net in a way that constitutes copyright infringement, please notify us.
      </p>

      <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Designated Copyright Agent</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        Please send DMCA notices including details of the copyrighted work and contact info to:
      </p>
      <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
        <strong>Copyright Agent:</strong> VictorMedia Legal Team<br />
        <strong>Email:</strong> <a href="mailto:arasu9629hf@gmail.com" style={{ color: 'var(--accent-primary)' }}>arasu9629hf@gmail.com</a>
      </div>
    </div>
  );
}
