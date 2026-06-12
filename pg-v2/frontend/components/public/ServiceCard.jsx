import Link from 'next/link';
import styles from './ServiceCard.module.scss';

export default function ServiceCard({ title, subheading, description, href, icon, price }) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.iconWrapper}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {icon}
        </svg>
      </div>
      
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subheading}>{subheading}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.title}>{price}</p>
      
      <div className={styles.linkText}>
        Learn More
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
}