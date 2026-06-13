import { getPosts } from "@/lib/api"; 
import CategoryFilter from "@/components/blog/CategoryFilter";
import PublicHeader from "@/components/public/PublicHeader";
import PublicFooter from "@/components/public/PublicFooter";
import CTA from "@/components/public/CTA";

export const metadata = {
  title: "The Plog | Productivity Gourmet",
  description: "Real talk on client communications, systems that actually work, and what it takes to run a service-based business without burning out."
};

const CATEGORIES = ["All", "Operations", "Client Communications", "Systems", "Mindset", "Tools"];

export default async function PlogPage() {
  const posts = await getPosts();

  return (
    <main id="main-content">
      <PublicHeader />
      <section aria-labelledby="plog-heading" style={{ padding: '4rem 1.5rem', background: 'var(--color-bg-hero)', textAlign: 'center' }}>
        <div>
          <p aria-hidden="true" style={{ color: '#00A8A8', fontWeight: 600 }}>— The Plog</p>
          <h1 id="plog-heading" style={{ marginBottom: '1rem' }}>
            Behind the{' '}
            <span
              style={{
                color: '#00A8A8',
                fontStyle: 'italic',
              }}
            >
              Operations
            </span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-muted)' }}>
            Real talk on client communications, systems that actually work, and what
            it takes to run a service-based business without burning out.
          </p>
        </div>
      </section>

      <section aria-label="Blog posts" style={{ padding: '4rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <CategoryFilter categories={CATEGORIES} allPosts={posts} />
      </section>
      <CTA 
        title="If Something Here Landed"
        description="Your inbox, your systems, your communications, that is exactly where I work. Book a Fit Call and I will figure out what needs fixing first."
        buttonText="Book a Fit Call"
        buttonHref="/contact"
      />
      <PublicFooter/>
    </main>
  );
}