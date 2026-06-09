import styles from './Blockquote.module.scss';
import ScrollReveal from './ScrollReveal';

export default function Blockquote({ text }) {
  return (
    <ScrollReveal direction="left" delay={100}>
      <blockquote className={styles.quote}>
        &quot;{text}&quot;
      </blockquote>
    </ScrollReveal>
  );
}