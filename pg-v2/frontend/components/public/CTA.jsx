import Container from './Container';
import Button from './Button';
import ScrollReveal from './ScrollReveal';
import styles from './CTA.module.scss';

// Now accepting dynamic props to render completely different copy per page
export default function CTA({ data }) {
  const title = data?.title || "Ready to get started?";
  const description = data?.description || "Let's build a system that works for you.";
  const buttonText = data?.buttonText || "Get in Touch";
  const buttonHref = data?.buttonHref || "/contact";

  return (
    <section className={styles.section}>
      <Container>
        {/* Your protected inner wrapper */}
        <div className={styles.inner}>
          
          <ScrollReveal direction="up" delay={0}>
            <h2 className={styles.title}>{title}</h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <p className={styles.description}>{description}</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300} className={styles.action}>
            <Button href={buttonHref} variant="inverse">
              {buttonText}
            </Button>
          </ScrollReveal>
          
        </div>
      </Container>
    </section>
  );
}

// import Container from './Container';
// import Button from './Button';
// import ScrollReveal from './ScrollReveal';
// import styles from './HomeCTA.module.scss';

// export default function HomeCTA() {
//   return (
//     <section className={styles.section}>
//       <Container className={styles.container}>
//         <div className={styles.inner}>
        
//             <ScrollReveal direction="up" delay={0}>
//             <h2 className={styles.title}>The Irony: Success Is Killing Your Business</h2>
//             </ScrollReveal>

//             <ScrollReveal direction="up" delay={150}>
//             <p className={styles.description}>
//                 More clients means more messages. More messages means less time
//                 delivering. Less delivery time means unhappy clients. I break this
//                 cycle.
//             </p>
//             </ScrollReveal>

//             <ScrollReveal direction="up" delay={300} className={styles.action}>
//             {/* Using the newly added inverse variant */}
//             <Button href="/contact" variant="inverse">
//                 Break Free
//             </Button>
//             </ScrollReveal>
//         </div>
//       </Container>
//     </section>
//   );
// }