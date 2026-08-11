import React from 'react';
import { CATEGORIES, getToolsByCategory } from '@/lib/tools-data';
import { ToolCard } from '@/components/ToolCard';

export default function CategoriesPage() {
  return (
    <div className="container" style={{ padding: '3rem 1.25rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>Tool Categories</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Explore our specialized utilities organized by category.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        {CATEGORIES.map((cat) => {
          const catTools = getToolsByCategory(cat.name);
          return (
            <section key={cat.name} id={cat.name.toLowerCase()}>
              <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--accent-light)', paddingBottom: '0.75rem' }}>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>{cat.name}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{cat.description}</p>
              </div>

              <div className="tools-grid">
                {catTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
