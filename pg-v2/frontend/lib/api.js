const getBaseUrl = () => {
    // We add a fallback URL just in case the environment variable fails 
    // during the Vercel build phase. Replace the fallback with your actual Render URL.
    return process.env.NEXT_PUBLIC_API_URL || "https://productivity-gourmet.onrender.com";
};

export async function getPosts() {
    const baseUrl = getBaseUrl();

    try {
        const res = await fetch(`${baseUrl}/api/posts/`, {
            next: { revalidate: 60 },
            signal: AbortSignal.timeout(10000), // 10 seconds max
        });

        if (!res.ok) return [];
        return res.json();
    } catch (error) {
        console.error("getPosts failed:", error.message);
        return []; // Build continues with empty posts rather than crashing
    }
}
// export async function getPosts() {
//     const baseUrl = getBaseUrl();

//     const res = await fetch(`${baseUrl}/api/posts/`, {
//         next: { revalidate: 60 } 
//     });

//     if (!res.ok) {
//         throw new Error('Failed to fetch posts from the backend');
//     }

//     return res.json();
// }

export async function getPostBySlug(slug) {
    const baseUrl = getBaseUrl();

    try {
        const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
            next: { revalidate: 60 },
            signal: AbortSignal.timeout(10000),
        });

        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error(`getPostBySlug failed for ${slug}:`, error.message);
        return null;
    }
}
// export async function getPostBySlug(slug) {
//     const baseUrl = getBaseUrl();
    
//     const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
//         // We cache individual posts just like the main feed
//         next: { revalidate: 60 } 
//     });

//     if (!res.ok) {
//         if (res.status === 404) return null;
//         throw new Error(`Failed to fetch post: ${slug}`);
//     }

//     return res.json();
// }