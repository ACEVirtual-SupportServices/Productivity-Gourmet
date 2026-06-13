import Container from '@/components/public/Container';
import ContactForm from '@/components/public/ContactForm';
import styles from './Contact.module.scss';

export const metadata = {
  title: 'Contact | Productivity Gourmet',
  description: 'Get in touch to discuss how I can support your business operations and client communications.',
};

const CONTACT_DETAILS = [
  {
    icon: '✉',
    label: 'Email',
    value: 'hello@productivitygourmet.com',
    href: 'mailto:hello@productivitygourmet.com',
  },
  {
    icon: '🌍',
    label: 'Location',
    value: 'EMEA Region — serving clients in the US, UK, UAE, and beyond',
  },
  {
    icon: '⏱',
    label: 'Response Time',
    value: 'Within 24 hours on business days',
  },
];

const NEXT_STEPS = [
  'Fill out the form with your needs',
  'I review and respond within 24 hours',
  'We schedule a Fit Call to confirm it is the right match',
];

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Get In Touch</p>
            <h1 className={styles.heroTitle}>
              24 Hours From Now,<br />
              <em>Everything Changes</em>
            </h1>
            <p className={styles.heroSub}>
              You will stop missing leads, dropping the ball on client follow-ups,
              and spending your best hours on work that someone else could handle.
            </p>
          </div>
        </Container>
      </section>

      <Container>
        <div className={styles.layout}>

          {/* Left — Info */}
          <aside className={styles.info}>
            <h2 className={styles.infoTitle}>Before You Fill This Out</h2>
            <p className={styles.infoBody}>
              If you are a service provider, executive, or creator who needs
              support with client communications, customer service, social media
              inboxes, or day-to-day operations — you are in the right place.
            </p>

            <ul className={styles.contactList}>
              {CONTACT_DETAILS.map(({ icon, label, value, href }) => (
                <li key={label} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{icon}</span>
                  <div>
                    <p className={styles.contactLabel}>{label}</p>
                    {href ? (
                      <a href={href} className={styles.contactValue}>{value}</a>
                    ) : (
                      <p className={styles.contactValue}>{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.nextSteps}>
              <p className={styles.nextStepsTitle}>Here is what happens next:</p>
              <ol className={styles.stepsList}>
                {NEXT_STEPS.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          </aside>

          {/* Right — Form */}
          <div className={styles.formWrapper}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2>Book a Fit Call</h2>
                <p>This takes 3–5 minutes and helps me send you personalised suggestions before we even talk.</p>
              </div>
              <ContactForm />
            </div>
          </div>

        </div>
      </Container>
    </>
  );
}