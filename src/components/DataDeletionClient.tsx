'use client';

import React from 'react';

export default function DataDeletionClient() {
  return (
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
  );
}
