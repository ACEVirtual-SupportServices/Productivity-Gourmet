import Container from '@/components/public/Container';
import ScrollReveal from '@/components/public/ScrollReveal';
import ServiceCard from '@/components/public/ServiceCard';
import Blockquote from '@/components/public/Blockquote';
import Testimonial from '@/components/public/Testimonial';
import CTA from '@/components/public/CTA';
import { aboutData } from '@/data/about';
import styles from './About.module.scss';

export const metadata = {
  title: 'About | Productivity Gourmet',
  description: 'Learn about my approach to systems, productivity, and operational support for serious businesses.',
};

export default function AboutPage() {
  return (
    <>
      <Container>
        <section className={styles.section}>
          <div className={styles.bioGrid}>
            
            <div>
              <ScrollReveal direction="up" delay={0}>
                <p className={styles.eyebrow}>{aboutData.hero.eyebrow}</p>
                <h1 className={styles.title}>{aboutData.hero.title}</h1>
              </ScrollReveal>
            </div>

            <div className={styles.proseBlock}>
              {aboutData.hero.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <Blockquote text={aboutData.hero.quote} />

              {aboutData.secondaryBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
          </div>
        </section>

        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <h2>What I Actually Do Well</h2>
                <p>The specific capabilities behind each service</p>
            </div>

            <ScrollReveal direction="up" delay={200}>
                <div className={styles.capabilitiesGrid}>
                {aboutData.capabilities.map((cap) => (
                    <ServiceCard 
                    key={cap.id}
                    title={cap.title}
                    description={cap.description}
                    icon={cap.icon}
                    href={cap.href}
                    />
                ))}
                </div>
            </ScrollReveal>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <ScrollReveal direction="up" delay={0}>
              <h2>How I Work</h2>
              <p>Core principles that guide every client engagement</p>
            </ScrollReveal>
          </div>

          <div className={styles.principlesGrid}>
            {aboutData.principles.map((principle, index) => (
              <div key={index} className={styles.principle}>
                <div className={styles.number}>{principle.number}</div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.clients}`}>
          <div className={styles.sectionHeader}>
            <ScrollReveal direction="up" delay={0}>
              <h2>What Clients Say</h2>
            </ScrollReveal>
          </div>
          
          <Testimonial data={aboutData.testimonial} />
        </section>

      </Container>

      <CTA 
        title="If This Sounds Like What You Have Been Looking For"
        description="Tell me where the pressure is. I will tell you which service or combination of services makes sense for your business right now. Fill out a short form and I will be in touch to schedule a Fit Call."
        buttonText="Book a Fit Call"
        buttonHref="/contact"
      />
    </>
  );
}