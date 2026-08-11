import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Deletion Instructions — VictorMedia',
  description: 'How to request data deletion at VictorMedia.net.',
};

export default function DataDeletionPage() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.25rem', maxWidth: '860px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>User Data Deletion Policy</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
        Because VictorMedia online utilities run client-side in your browser, no tool input data or uploaded files are stored on our servers.
      </p>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
        To delete your local browser state (theme preferences, recent tool history, saved items), simply click the button below:
      </p>

      <button
        onClick={() => {
          localStorage.clear();
          alert('Local storage cleared successfully!');
        }}
        className="btn btn-secondary"
        style={{ marginBottom: '2rem' }}
      >
        Clear Local Browser Data
      </button>

      <p style={{ color: 'var(--text-secondary)' }}>
        If you have previously submitted a Contact Form message and wish to request removal of your submission email from our records, please email <a href="mailto:arasu9629hf@gmail.com" style={{ color: 'var(--accent-primary)' }}>arasu9629hf@gmail.com</a> with the subject "Data Deletion Request".
      </p>
    </div>
  );
}
