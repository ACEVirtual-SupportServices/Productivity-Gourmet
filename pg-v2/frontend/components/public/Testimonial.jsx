import styles from './Testimonial.module.scss';
import ScrollReveal from './ScrollReveal';

export default function Testimonial({ data }) {
  return (
    <ScrollReveal direction="up" delay={200}>
      <div className={styles.wrapper}>
        <span className={styles.decorativeQuote}>&quot;</span>
        <p className={styles.text}>&quot;{data.quote}&quot;</p>
        
        <div className={styles.authorBlock}>
          <div className={styles.avatar}>{data.initials}</div>
          <div>
            <p className={styles.name}>{data.author}</p>
            <p className={styles.role}>{data.role}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}