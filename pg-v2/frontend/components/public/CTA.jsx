import Container from './Container';
import Button from './Button';
import ScrollReveal from './ScrollReveal';
import styles from './CTA.module.scss';

// Now accepting dynamic props to render completely different copy per page
export default function CTA({ data, title, description, buttonText, buttonHref }) {
  const resolvedTitle = data?.title || title;
  const resolvedDescription = data?.description || description;
  const resolvedButtonText = data?.buttonText || buttonText;
  const resolvedButtonHref = data?.buttonHref || buttonHref;

  return (
    <section className={styles.section}>
      <Container>
        {/* Your protected inner wrapper */}
        <div className={styles.inner}>
          
          <ScrollReveal direction="up" delay={0}>
            <h2 className={styles.title}>{resolvedTitle}</h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <p className={styles.description}>{resolvedDescription}</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300} className={styles.action}>
            <Button href={resolvedButtonHref} variant="inverse">
              {resolvedButtonText}
            </Button>
          </ScrollReveal>
          
        </div>
      </Container>
    </section>
  );
}