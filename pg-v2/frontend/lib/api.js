const getBaseUrl = () => {
    if (typeof window === 'undefined') {
        // We are on the server (Server Component)
        return process.env.INTERNAL_API_URL;
    }
    // We are in the browser (Client Component)
    return process.env.NEXT_PUBLIC_API_URL;
};

export async function getPosts() {
    const baseUrl = getBaseUrl();

    const res = await fetch(`${baseUrl}/api/posts/`, {
        next: { revalidate: 60 } 
    });

    if (!res.ok) {
        throw new Error('Failed to fetch posts from the backend');
    }

    return res.json();
}

export async function getPostBySlug(slug) {
    const baseUrl = getBaseUrl();
    
    const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
        // We cache individual posts just like the main feed
        next: { revalidate: 60 } 
    });

    if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error(`Failed to fetch post: ${slug}`);
    }

    return res.json();
}