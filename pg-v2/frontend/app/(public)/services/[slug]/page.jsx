// app/(public)/services/[slug]/page.jsx
import { notFound } from 'next/navigation';
import { servicesDatabase } from '@/data/services';
import Container from '@/components/public/Container';
import ScrollReveal from '@/components/public/ScrollReveal';
import CTA from '@/components/public/CTA';
import AvailabilityBar from '@/components/public/AvailabilityBar';
import PricingPackage from '@/components/public/PricingPackage';
import PricingTierCard from '@/components/public/PricingTierCard';
import ProseSection from '@/components/public/ProseSection';
import FaqSection from '@/components/public/FaqSection';
import styles from './ServicePage.module.scss'; 

export async function generateStaticParams() {
  return Object.keys(servicesDatabase).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = servicesDatabase[resolvedParams.slug];
  
  if (!service) return { title: 'Service Not Found' };
  
  return { title: `${service.title} | Productivity Gourmet` };
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const service = servicesDatabase[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  return (
    <article className={styles.article}>
      <Container>
        {/* HERO SECTION */}
        <div className={styles.hero}>
          <ScrollReveal direction="up" delay={0}>
            <h1 className={styles.title}>{service.title}</h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={100}>
            <p className={styles.eyebrow}>{service.eyebrow}</p>
          </ScrollReveal>

          {service.heroDescription?.map((paragraph, idx) => (
            <ScrollReveal key={idx} direction="up" delay={200 + (idx * 50)}>
              <p className={styles.heroDesc}>{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* CONDITIONALS: AVAILABILITY & WIDE PACKAGES */}
        {service.availability?.length > 0 && (
          <AvailabilityBar data={service.availability} />
        )}

        {service.packages?.length > 0 && (
          <div className={styles.packagesWrapper}>
            {service.packages.map((pkg, idx) => (
              <PricingPackage key={pkg.id || idx} pkg={pkg} />
            ))}
          </div>
        )}
        {service.pricingHeading && (
          <ScrollReveal direction="up" delay={0}>
            <div className={styles.pricingHeader}>
              <h2>{service.pricingHeading}</h2>
              {service.pricingSubheading && <p>{service.pricingSubheading}</p>}
            </div>
          </ScrollReveal>
        )}
        {/* CONDITIONALS: 3-COLUMN TIERS & PAYMENT TERMS */}
        {service.pricingTiers?.length > 0 && (
          <div className={styles.tiersGrid}>
            {service.pricingTiers.map((tier, idx) => (
              <PricingTierCard key={tier.id || idx} tier={tier} index={idx} />
            ))}
          </div>
        )}

        {service.paymentTerms && (
          <ScrollReveal direction="up" delay={200}>
            <div className={styles.paymentTerms}>
              <strong>Payment Terms:</strong> {service.paymentTerms}
            </div>
          </ScrollReveal>
        )}

        {/* CONDITIONALS: PROSE & FAQS */}
        {service.contentSections?.length > 0 && (
          <ProseSection sections={service.contentSections} />
        )}

        {service.faqs?.length > 0 && (
          <FaqSection faqs={service.faqs} />
        )}

      </Container>

      {/* REUSED CTA WITH DYNAMIC COPY */}
      <CTA 
        title="Ready to fix the breakdown?"
        description="Stop fighting your own operations. Let's build a system that works."
        buttonText="Book a Fit Call"
        buttonHref="/contact"
      />
    </article>
  );
}

// import { notFound } from 'next/navigation';
// import { servicesDatabase } from '@/data/services';
// import Container from '@/components/public/Container';
// import ScrollReveal from '@/components/public/ScrollReveal';
// import CTA from '@/components/public/CTA';
// import AvailabilityBar from '@/components/public/AvailabilityBar';
// import PricingPackage from '@/components/public/PricingPackage';
// import ProseSection from '@/components/public/ProseSection';

// // SCSS module specific to this page's layout tweaks (create this file with simple padding)
// import styles from './ServicePage.module.scss'; 

// // 1. Tell Next.js which routes to pre-build at compile time
// export function generateStaticParams() {
//   return Object.keys(servicesDatabase).map((slug) => ({
//     slug: slug,
//   }));
// }

// // 2. Dynamic Metadata for SEO
// export async function generateMetadata({ params }) {
//   const resolvedParams = await params;
//   const service = servicesDatabase[resolvedParams.slug];
//   if (!service) return { title: 'Service Not Found' };
  
//   return {
//     title: `${service.title} | Productivity Gourmet`,
//   };
// }

// // 3. The Main Page Component
// export default async function ServicePage({ params }) {
//   const resolvedParams = await params;
//   const service = servicesDatabase[resolvedParams.slug];

//   // Defensive routing: if they type a URL that doesn't exist in our DB, throw a 404
//   if (!service) {
//     notFound();
//   }

//   return (
//     <article className={styles.article}>
//       <Container>
//         {/* HERO SECTION */}
//         <div className={styles.hero}>
//           <ScrollReveal direction="up" delay={0}>
//             <h1 className={styles.title}>{service.title}</h1>
//           </ScrollReveal>
          
//           <ScrollReveal direction="up" delay={100}>
//             <p className={styles.eyebrow}>{service.eyebrow}</p>
//           </ScrollReveal>

//           {service.heroDescription.map((paragraph, idx) => (
//             <ScrollReveal key={idx} direction="up" delay={200 + (idx * 50)}>
//               <p className={styles.heroDesc}>{paragraph}</p>
//             </ScrollReveal>
//           ))}
//         </div>

//         {/* DATA COMPONENTS */}
//         <AvailabilityBar data={service.availability} />

//         <div className={styles.packagesWrapper}>
//           {service.packages?.map((pkg, idx) => (
//             <PricingPackage key={pkg.id || idx} pkg={pkg} />
//           ))}
//         </div>

//         <ProseSection sections={service.contentSections} />

//       </Container>

//       {/* REUSED CTA WITH DYNAMIC COPY */}
//       <CTA 
//         title="Ready to fix the breakdown?"
//         description="Stop fighting your own operations. Let's build a system that works."
//         buttonText="Book a Fit Call"
//         buttonHref="/contact"
//       />
//     </article>
//   );
// }