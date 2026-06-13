import Container from '@/components/public/Container';
import ScrollReveal from '@/components/public/ScrollReveal';
import CTA from '@/components/public/CTA';
import { faqData } from '@/data/faq';
import styles from './FaqPage.module.scss';

export const metadata = {
  title: 'Frequently Asked Questions | Productivity Gourmet',
  description: 'Everything you need to know about how engagements are structured, billing, and working together.',
};

export default function FaqPage() {
  return (
    <>
      <Container>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <ScrollReveal direction="up" delay={0}>
            <h1 className={styles.title}>{faqData.hero.title}</h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={150}>
            <p className={styles.description}>{faqData.hero.description}</p>
          </ScrollReveal>
        </section>

        {/* FAQ CONTENT */}
        <section className={styles.contentWrapper}>
          {faqData.categories.map((category, catIndex) => (
            <div key={category.id} className={styles.categoryBlock}>
              
              <ScrollReveal direction="up" delay={200}>
                <h2 className={styles.categoryTitle}>{category.title}</h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <div>
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={styles.faqItem}>
                      <h3 className={styles.question}>{item.question}</h3>
                      <p className={styles.answer}>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

            </div>
          ))}
        </section>
      </Container>

      {/* REUSED GLOBAL CTA */}
      <CTA 
        title="Still have questions?"
        description="If something is not covered here, the Fit Call is the right place to ask it."
        buttonText="Book a fit Call"
        buttonHref="/contact"
      />
    </>
  );
}