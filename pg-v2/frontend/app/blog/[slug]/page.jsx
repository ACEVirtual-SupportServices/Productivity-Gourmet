import { getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from './page.module.scss'

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Post Not Found | Productivity Gourmet" };

  return {
    title: `${post.title} | Productivity Gourmet`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.cover_image ? [post.cover_image] : [],
    }
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main id="main-content">
      <article className={styles.article} aria-labelledby="post-heading">
        
        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.created_at}>
              {new Date(post.created_at).toLocaleDateString("en-GB", {
                day: "numeric", month: "long", year: "numeric"
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span aria-label={`${post.read_time} minute read`}>
              {post.read_time} min read
            </span>
          </div>
          <h1 id="post-heading" className={styles.title}>{post.title}</h1>
        </header>

        {post.cover_image && (
          <div className={styles.cover} aria-hidden="true">
             <Image src={post.cover_image} alt="" fill className={styles.coverImg} />
          </div>
        )}

        {/* CRITICAL: dangerouslySetInnerHTML 
          Because your client will be writing posts using a rich text editor (Tiptap) in Stage 6, 
          the content is saved in the database as raw HTML strings (e.g., "<p>Hello <strong>world</strong></p>").
          React escapes HTML by default to prevent cross-site scripting (XSS). 
          This property tells React: "I trust this HTML, render it as actual DOM nodes."
        */}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />        
      </article>    
    </main>
  );
}