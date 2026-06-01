import styles from './ProseSection.module.scss';
import ScrollReveal from './ScrollReveal';

export default function ProseSection({ sections }) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className={styles.prose}>
      {sections.map((section, idx) => (
        <ScrollReveal key={idx} direction="up" delay={idx * 150}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((p, pIdx) => (
            <p key={pIdx}>{p}</p>
          ))}
        </ScrollReveal>
      ))}
    </div>
  );
}