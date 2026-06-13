import Container from '@/components/public/Container';
import StatCard from '@/components/public/StatCard';
import ServiceCard from '@/components/public/ServiceCard';
import ScrollReveal from '@/components/public/ScrollReveal';
import CTA from '@/components/public/CTA';
import styles from './ServicesIndex.module.scss';

export const metadata = {
  title: 'Services | Productivity Gourmet',
  description: 'Explore our operational support services including client communications, customer service, social media inbox management, and virtual assistance.',
};


const indexServicesData = [
  {
    id: 'client-comms',
    title: 'Client Communications Management',
    subheading: 'Your inbox should not require your presence to function.',
    description: 'Professional email and client correspondence management for service providers and executives. Your leads followed up, your clients responded to, and your inbox organised, in your voice, to your standards. Whether you are at your desk or not.',
    href: '/services/client-communications',
    icon: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    price: 'From $700/month, after a one-time Inbox Reset'
  },
  {
    id: 'customer-service',
    title: 'Customer Service Management',
    subheading: 'Your customers should never feel like an afterthought.',
    description: 'Outsourced customer service for e-commerce brands and high-volume service businesses. I handle enquiries, ease anxious customers, and escalate what needs your attention, using Airtable-based systems built around how your business works.',
    href: '/services/customer-service',
    icon: <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
    price: 'From $900/month, after a one-time System Build'
  },
  {
    id: 'social-media',
    title: 'Social Media Inbox Management',
    subheading: 'Your next brand deal should not be rotting in a DM request.',
    description: 'DM and inbox management for content creators and influencers. I sort the brand deals from the noise, respond in your voice, and make sure no collaboration offer disappears into the backlog, across Instagram, Facebook, TikTok, LinkedIn, Threads, YouTube, and Twitter/X.',
    href: '/services/social-media',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
      </>
    ),
    price: 'From $800/month, after a one-time Inbox Reset'
  },
  {
    id: 'operations-support',
    title: 'Operations & Executive Support',
    subheading: 'Stay Ahead of the Pressure',
    description: 'End-to-end operations support built around how your business actually runs. Systems design, workflow management, process optimisation, CRM operations, documentation and automation. I handle the operational layer so you can focus on growth. At the executive level, I operate as a strategic partner with real authority over your backend.',
    icon: <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />,
    href: '/services/operations-support',
    price: 'From $700/month'
  }
];

export default function ServicesIndex() {
  console.log("STYLES OBJECT:", styles);
  return (
    <>
      <Container>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <ScrollReveal direction="up" delay={0}>
            <h1 className={styles.title}>Four Services. One Operational Partner.</h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={150}>
            <p className={styles.description}>
              Each service is built around a specific operational pressure point — 
              communications, customer support, social media inboxes, and broader business 
              operations. Find the one that matches where your business is breaking down, or 
              start with a Fit Call and I will figure it out on the call.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
            <div className={styles.navPills}>
              {indexServicesData.map((service) => (
                <a key={`nav-${service.id}`} href={`#${service.id}`} className={styles.pill}>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {service.icon}
                  </svg>
                  {service.title.replace(' Management', '').replace(' Services', '')}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* 4x GRID OF STATS */}
        <div className={styles.statsGrid}>
          <ScrollReveal direction="up" delay={300}>
            <StatCard value="4" label="Specialist Services" />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <StatCard value="24hr" label="Standard Response Time" />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={500}>
            <StatCard value="Always Covered" label="Even when you cannot be" />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={600}>
            <StatCard value="WAT" label="Async-First, Flexible Timezone" />
          </ScrollReveal>
        </div>

        {/* THE BANNER */}
        <ScrollReveal direction="up" delay={700}>
          <div className={styles.banner}>
            Serving clients across the US, UK, UAE, and EMEA — async-first, timezone-flexible
          </div>
        </ScrollReveal>

        {/* THE SERVICES GRID */}
        <section className={styles.servicesSection}>
          <div className={styles.sectionHeader}>
            <ScrollReveal direction="up" delay={0}>
              <h2>Where Do You Need Support?</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={150}>
              <p>
                Each service has its own page with full pricing, deliverables, FAQs, and a clear 
                picture of who it is built for. Start with the one that sounds most like your 
                current bottleneck.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.servicesGrid}>
            {indexServicesData.map((service, index) => (
              <div key={service.id} id={service.id} className={styles.anchorOffset}>
                <ScrollReveal key={service.id} direction="up" delay={300 + (index * 150)} className={styles.stretchReveal}>
                  <ServiceCard 
                    title={service.title}
                    subheading={service.subheading}
                    description={service.description}
                    href={service.href}
                    icon={service.icon}
                    price={service.price}
                  />
                </ScrollReveal>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* REUSED CTA WITH DYNAMIC COPY */}
      <CTA 
        title="Not Sure Which Service You Need?"
        description="That is what the Fit Call is for. Tell me where the pressure is and I will tell you which service or combination of services makes sense for your business right now."
        buttonText="Book a Fit Call"
        buttonHref="/contact"
      />
    </>
  );
}