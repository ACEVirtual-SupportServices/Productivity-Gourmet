import styles from './AvailabilityBar.module.scss';
import ScrollReveal from './ScrollReveal';

export default function AvailabilityBar({ data }) {
  if (!data || data.length === 0) return null; // Defensive return if no data

  return (
    <ScrollReveal direction="up" delay={200}>
      <div className={styles.wrapper}>
        <span className={styles.heading}>This Month&apos;s Openings:</span>
        <ul className={styles.list}>
          {data.map((item, index) => (
            <li key={index} className={styles.item}>
              <span className={styles.count}>{item.count}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}