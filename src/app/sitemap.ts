import { MetadataRoute } from 'next';
import { TOOLS_REGISTRY } from '@/lib/tools-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://victormdeia.net';

  const staticPages = [
    '',
    '/tools',
    '/categories',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
    '/cookie-policy',
    '/accessibility',
    '/acceptable-use',
    '/data-deletion',
    '/dmca',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const toolPages = TOOLS_REGISTRY.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: tool.popular ? 0.9 : 0.7,
  }));

  return [...staticPages, ...toolPages];
}
