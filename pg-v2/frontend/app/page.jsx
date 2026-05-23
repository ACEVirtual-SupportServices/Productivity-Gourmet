import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main id="main-content" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <ThemeToggle />
      <h1>Productivity Gourmet Homepage</h1>
      <p style={{ marginBottom: '2rem' }}>We will build this in Stage 9.</p>
      
      {/* A quick link to get you to the blog we are actually working on */}
      <Link href="/blog" style={{ padding: '0.5rem 1rem', background: 'var(--color-primary)', color: 'white', borderRadius: '4px', textDecoration: 'none' }}>
        Go to The Plog →
      </Link>
    </main>
  );
}