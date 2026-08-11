import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getToolBySlug, TOOLS_REGISTRY } from '@/lib/tools-data';
import { ToolLayout } from '@/components/ToolLayout';
import { getToolComponent } from '@/components/tools';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return TOOLS_REGISTRY.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    return {
      title: 'Tool Not Found — VictorMedia',
    };
  }

  return {
    title: `${tool.name} — Free Online Tool | VictorMedia`,
    description: tool.shortDescription,
    keywords: tool.keywords,
    openGraph: {
      title: `${tool.name} — VictorMedia`,
      description: tool.shortDescription,
      url: `https://victormedia.net/tools/${tool.slug}`,
      siteName: 'VictorMedia',
      type: 'website',
    },
  };
}

export default function ToolPage({ params }: PageProps) {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    notFound();
  }

  // tool is guaranteed to be defined here since notFound() throws
  const resolvedTool = tool!;
  const ToolComponent = getToolComponent(params.slug);

  return (
    <ToolLayout tool={resolvedTool}>
      {ToolComponent ? (
        <ToolComponent />
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          Interactive module initialized for {resolvedTool.name}.
        </div>
      )}
    </ToolLayout>
  );
}
