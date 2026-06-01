import HomeHero from '@/components/public/HomeHero';
import HomeServices from '@/components/public/HomeService';
import CTA from '@/components/public/CTA';

export const metadata = {
  title: 'Productivity Gourmet | Operations Support',
  description: 'Operations & Executive support service providers, executives, and creators.',
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <CTA 
        title="The Irony: Success Is Killing Your Business"
        description="More clients means more messages. More messages means less time delivering. Less delivery time means unhappy clients. I break this cycle."
        buttonText="Break Free"
        buttonHref="/contact"
      />
    </>
  );
}