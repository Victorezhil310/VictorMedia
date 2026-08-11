'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { TOOLS_REGISTRY, CATEGORIES } from '@/lib/tools-data';
import { ToolCard } from '@/components/ToolCard';

export default function AllToolsPage() {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const filtered = TOOLS_REGISTRY.filter((tool) => {
    const matchesCat = selectedCat === 'All' || tool.category === selectedCat;
    const matchesQuery =
      search.trim() === '' ||
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
      tool.keywords.some((k) => k.toLowerCase().includes(search.toLowerCase()));

    return matchesCat && matchesQuery;
  });

  return (
    <div className="container" style={{ padding: '3rem 1.25rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>All Online Tools</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Browse our complete catalog of {TOOLS_REGISTRY.length} browser-based tools.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', flex: '1 1 300px' }}>
          <input
            type="text"
            placeholder="Search by name, feature, or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field"
            style={{ paddingLeft: '2.5rem' }}
          />
          <Search size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
          <button
            onClick={() => setSelectedCat('All')}
            className={`btn ${selectedCat === 'All' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}
          >
            All ({TOOLS_REGISTRY.length})
          </button>
          {CATEGORIES.map((c) => {
            const count = TOOLS_REGISTRY.filter((t) => t.category === c.name).length;
            return (
              <button
                key={c.name}
                onClick={() => setSelectedCat(c.name)}
                className={`btn ${selectedCat === c.name ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
              >
                {c.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="tools-grid">
          {filtered.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
          <h3>No tools match your query &quot;{search}&quot;</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Try searching for calculators, converters, JSON, or password generators.</p>
        </div>
      )}
    </div>
  );
}
