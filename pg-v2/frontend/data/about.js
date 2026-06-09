export const aboutData = {
  hero: {
    eyebrow: "I Build Systems That Actually Work",
    title: "So you can indulge in your favorite activities without guilt or worry.",
    // We break the prose into an array so the UI can map <p> tags and stagger the scroll reveals
    bio: [
      "I am based in the EMEA region, and I help service providers, executives, and creators stop losing ground to operational chaos. Not with theory, but with systems that actually hold up when you step away from your desk.",
      "Everything I know is self-taught. I figured out productivity systems because I had to. No one teaches you how to manage 200 DMs a week, keep five clients happy simultaneously, or build a communications infrastructure that does not collapse the moment you step away from your desk.",
      "So I built systems, tested them, broke them, and rebuilt them until they worked. And I am still building, testing, and breaking, because your business deserves systems that evolve with it, not ones stuck in 2019."
    ],
    quote: "The moment you realise you can actually take a Wednesday off without panicking? That is what I am here for. Not productivity theatre but actual operational freedom."
  },
  
  secondaryBio: [
    "I also work with founders who are navigating chronic illness, neurodivergence, or periods of low capacity; people building serious businesses while managing conditions that most operational systems were not designed around. That requires a different kind of support: one that adapts to where you are, not where a generic framework assumes you should be. It is work I take seriously.",
    "I use AI tools for research, analysis, building automations, and generating multiple perspectives on a problem; which means faster turnaround without sacrificing accuracy or the human judgment your sensitive operations require. I have also picked up cybersecurity fundamentals through Cisco courses, which matters when people trust me with their business accounts.",
    "I work primarily async, which means your tasks are handled and turned around without requiring us to be online at the same time. For clients in the US, UK, UAE, and across EMEA, this works well. You send it, I handle it, you come back to it done."
  ],

  // Mapping directly to your existing ServiceCard component structure
  capabilities: [
    {
      id: 'cap-1',
      title: "Client Communications Management",
      description: "Managing professional email and client correspondence in your voice, to your standards. Lead follow-up, client responses, inbox organisation, and priority flagging, so your relationships never suffer because you were busy delivering.",
      icon: <svg viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      href: "/services/client-communications"
    },
    {
      id: 'cap-2',
      title: "Customer Service Operations",
      description: "Building and running customer service systems for high-volume businesses. Airtable-based CRM builds, response templates in your brand voice, escalation frameworks, and ongoing management.",
      icon: <svg viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
      href: "/services/customer-service"
    },
    {
      id: 'cap-3',
      title: "Social Media Inbox Management",
      description: "DM and inbox management for creators and influencers. Sorting brand deals from fan noise, responding in your voice, and making sure no collaboration offer disappears into the backlog.",
      icon: <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" /></svg>,
      href: "/services/social-inbox"
    },
    {
      id: 'cap-4',
      title: "AI-Assisted Virtual Support",
      description: "Research, documentation, task management, process design, and automation — built around your specific business using AI tools where they add speed and accuracy, and human judgment where required.",
      icon: <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" /></svg>,
      href: "/services/virtual-assistant"
    }
  ],

  principles: [
    {
      number: "01",
      title: "Your Secrets Stay Secret",
      description: "You are trusting me with your inbox, your customer conversations, and sometimes your most sensitive business information. I use a password manager, advocate for delegated access instead of shared credentials, work exclusively from a desktop, and sign a confidentiality agreement. Discretion is not optional. It is the foundation."
    },
    {
      number: "02",
      title: "I Actually Communicate",
      description: "You will not have to chase me down wondering what is happening. Updates arrive when they matter, problems are flagged before they become yours to solve, and honest conversations happen when something needs adjusting. Proactive communication is part of the service, not a bonus."
    },
    {
      number: "03",
      title: "It Gets Done Right",
      description: "Your brand voice stays your brand voice. Your customers receive the same care you would give them. Your systems are built around how you actually work, not borrowed from a template. No shortcuts, no approximations, just professional execution that does not require micromanagement."
    }
  ],

  testimonial: {
    quote: "Even before we started, she had already begun putting systems in place. She showed me I could rely on her before compensation ever came in. I no longer move through my weeks repeating the same tasks over and over again. Maybe once, but not three times like I used to.",
    author: "Elleonora Clay",
    role: "Content Marketer & Business Strategist",
    initials: "EC" // Replacing the image upload with a clean CSS initials badge
  }
};