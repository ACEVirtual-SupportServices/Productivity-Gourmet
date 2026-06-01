import styles from './FaqSection.module.scss';
import ScrollReveal from './ScrollReveal';

export default function FaqSection({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <ScrollReveal direction="up" delay={0}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
      </ScrollReveal>

      <div>
        {faqs.map((faq, index) => (
          <ScrollReveal key={index} direction="up" delay={100}>
            <div className={styles.faqItem}>
              <h3 className={styles.question}>{faq.question}</h3>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}