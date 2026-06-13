import Container from '@/components/public/Container';
import ScrollReveal from '@/components/public/ScrollReveal';
import { privacyData } from '@/data/privacy';
import styles from './Privacy.module.scss';

export const metadata = {
  title: 'Privacy Policy | Productivity Gourmet',
  description: 'How I collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <Container>
      {/* HERO */}
      <section className={styles.hero}>
        <ScrollReveal direction="up" delay={0}>
          <h1 className={styles.title}>{privacyData.hero.title}</h1>
          <p className={styles.description}>{privacyData.hero.description}</p>
        </ScrollReveal>
      </section>

      {/* DOCUMENT BODY */}
      <section className={styles.documentWrapper}>
        <ScrollReveal direction="up" delay={150}>
          <div className={styles.effectiveDate}>
            <strong>Effective Date:</strong> {privacyData.meta.effectiveDate}
          </div>
          <p className={styles.intro}>{privacyData.meta.intro}</p>
        </ScrollReveal>

        {/* DYNAMIC SECTIONS */}
        {privacyData.sections.map((section, index) => (
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
                          // Quick hack to bold text before a colon (e.g., "Service Providers: ...")
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