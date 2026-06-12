import styles from './PricingPackage.module.scss';
import Button from './Button';
import ScrollReveal from './ScrollReveal';

export default function PricingPackage({ pkg }) {
  return (
    <ScrollReveal direction="up" delay={100}>
      <div className={styles.card}>
        {pkg.tag && <span className={styles.tag}>{pkg.tag}</span>}
        
        <div className={styles.grid}>
          {/* Left Column */}
          <div>
            <div className={styles.header}>
              <h3>{pkg.title}</h3>
              <p className={styles.price}>{pkg.price} <span>{pkg.billing}</span></p>
            </div>

            <div className={styles.paragraphs}>
              {pkg.description.map((paragraph, idx) => (
                // Use a slice of the string to avoid huge keys if they are long
                <p key={`desc-${idx}`}>{paragraph}</p>
              ))}
            </div>
            
            {/* <div className={styles.paragraphs}>
              {pkg.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div> */}

            <div className={styles.footer}>
              <Button href={pkg.buttonHref} variant="primary">{pkg.buttonText}</Button>
              {pkg.limitedSpotsWarning && <p>{pkg.limitedSpotsWarning}</p>}
            </div>
          </div>

          {/* Right Column: Checklist */}
          {pkg.features && (
            <ul className={styles.checklist}>
              {pkg.features.map((feature, idx) => (
                // Use the feature text itself as the key. 
                // If a feature string is identical to another, they are the same item anyway.
                <li key={feature}>
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          )}
          {/* {pkg.features && (
            <ul className={styles.checklist}>
              {pkg.features.map((feature, idx) => (
                <li key={idx}>
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          )} */}
        </div>
      </div>
    </ScrollReveal>
  );
}