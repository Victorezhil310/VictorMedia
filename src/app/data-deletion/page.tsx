/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Deletion Instructions — VictorMedia',
  description: 'Data Deletion Information & Instructions for VictorMedia users.',
};

export default function DataDeletionPage() {
  return (
    <div className="container" style={{ padding: '4rem 1.25rem', maxWidth: '880px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Data Deletion Policy & Instructions</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
        Last Updated: August 12, 2026
      </p>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. Zero Server-Stored Data</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          VictorMedia does not maintain user account databases, cloud user profiles, or store tool input records on remote servers. All tool calculations, text formatting, image compression, and QR code generations happen locally inside your browser runtime.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>2. How to Clear Local Browser Data</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          To erase any locally saved browser settings (such as dark mode preference or cached tool inputs):
        </p>
        <ol style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Open your browser settings menu (Chrome, Edge, Safari, Firefox).</li>
          <li>Navigate to <strong>Privacy & Security &gt; Clear Browsing Data</strong>.</li>
          <li>Select &quot;Cookies and other site data&quot; and click Clear Data.</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>3. Contact Inquiries Deletion</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          If you have previously emailed us and wish to have your email correspondence deleted from our inbox, email your request to: <a href="mailto:arasu9629hf@gmail.com" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>arasu9629hf@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
