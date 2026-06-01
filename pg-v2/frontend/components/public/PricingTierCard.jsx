import styles from './PricingTierCard.module.scss';
import ScrollReveal from './ScrollReveal';

export default function PricingTierCard({ tier, index }) {
  return (
    // Stagger animation based on column index
    <ScrollReveal direction="up" delay={index * 150}>
      <div className={styles.card}>
        <h3 className={styles.title}>{tier.title}</h3>
        <p className={styles.price}>{tier.price}</p>
        
        <ul className={styles.features}>
          {tier.features.map((feature, idx) => (
            <li key={idx}>
              <svg viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}