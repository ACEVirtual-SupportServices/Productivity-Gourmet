export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const staticRoutes = [
    '',
    '/services',
    '/about',
    '/contact',
    '/blog',
    '/faq',
    '/privacy',
    '/terms'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
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

  return [...staticRoutes, ...postRoutes];
}