import Container from '@/components/public/Container';
import ScrollReveal from '@/components/public/ScrollReveal';
import { termsData } from '@/data/terms';
import styles from './Terms.module.scss'; // Ensure you mapped the copied SCSS here

export const metadata = {
  title: 'Terms of Service | Productivity Gourmet',
  description: 'Guidelines for using this website and engaging operational services.',
};

export default function TermsPage() {
  return (
    <Container>
      {/* HERO */}
      <section className={styles.hero}>
        <ScrollReveal direction="up" delay={0}>
          <h1 className={styles.title}>{termsData.hero.title}</h1>
          <p className={styles.description}>{termsData.hero.description}</p>
        </ScrollReveal>
      </section>

      {/* DOCUMENT BODY */}
      <section className={styles.documentWrapper}>
        <ScrollReveal direction="up" delay={150}>
          <div className={styles.effectiveDate}>
            <strong>Effective Date:</strong> {termsData.meta.effectiveDate}
          </div>
          <p className={styles.intro}>{termsData.meta.intro}</p>
        </ScrollReveal>

        {/* DYNAMIC SECTIONS */}
        {termsData.sections.map((section, index) => (
          <ScrollReveal key={section.id} direction="up" delay={200 + (index * 50)}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              
              {/* RENDER CONTENT BLOCKS BASED ON TYPE */}
              {section.content.map((block, blockIdx) => {
                switch (block.type) {
                  case 'subtitle':
                    return <h3 key={blockIdx} className={styles.subtitle}>{block.text}</h3>;
                  case 'paragraph':
                    return <p key={blockIdx} className={styles.paragraph}>{block.text}</p>;
                  case 'list':
                    return (
                      <ul key={blockIdx} className={styles.list}>
                        {block.items.map((item, i) => {
                          const parts = item.split(':');
                          if (parts.length > 1) {
                            return (
                              <li key={i}>
                                <strong>{parts[0]}:</strong>{parts.slice(1).join(':')}
                              </li>
                            );
                          }
                          return <li key={i}>{item}</li>;
                        })}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </ScrollReveal>
        ))}
      </section>
    </Container>
  );
}