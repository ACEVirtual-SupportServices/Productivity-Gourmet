import { servicesDatabase } from '@/data/services';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  const ROUTE_PRIORITIES = {
    '': 1.0,
    '/services': 0.8,
    '/about': 0.8,
    '/contact': 0.8,
    '/blog': 0.8,
    '/faq': 0.4,
    '/privacy': 0.4,
    '/terms': 0.4,
  };

  const staticRoutes = Object.entries(ROUTE_PRIORITIES).map(([route, priority]) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: priority >= 0.8 ? 'weekly' : 'yearly',
    priority,
  }));

  const serviceRoutes = Object.keys(servicesDatabase).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  let postRoutes = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
    if (res.ok) {
      const posts = await res.json();
      postRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at || post.created_at).toISOString(),
        changeFrequency: 'monthly',
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.error("Failed to fetch posts for sitemap generation:", error);
  }

  return [...staticRoutes, ...serviceRoutes, ...postRoutes];
}