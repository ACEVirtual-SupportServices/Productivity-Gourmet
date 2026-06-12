import Link from 'next/link';

export const servicesDatabase = {
  // ── CLIENT COMMUNICATIONS DATA ──
  'client-communications': {
    title: "The Maitre D': Client Communications Management for Service Providers & Executives",
    eyebrow: "Your inbox should not require your presence to function.",
    heroDescription: [
      "Your clients followed up. Your leads responded to. Your inbox organised and under control. Whether you are watching the game, taking a proper holiday, or simply trying to do your best work without one eye permanently on your email. I handle the communications that keep your business moving, in your voice, to your standards."
    ],
    availability: [],
    startHere: "Start Here: One-Time Inbox Packages",
    startHereSubheading: "Monthly management requires a clean foundation. These one-time packages build it.",
    startHereTiers: [
      {
        id: "inbox-reset",
        title: "The Inbox Reset",
        sub: "Up to 2,000 emails",
        price: "$2,500",
        pricesub: "one-time",
        features: [
          "Full inbox audit covering patterns, volume and missed opportunities",
          "Custom folder and label architecture",
          "Smart filter setup to prevent future buildup",
          "Priority flagging and triage system",
          "Lead follow-up qualification framework",
          "Client Voice and Communications Brief",
          "Template library (10+ custom templates in your voice)",
          "Onboarding and access security setup",
          "Handoff documentation and walkthrough",
          "7-day post-setup support"
        ]
      },
      {
        id: "deep-clean",
        title: "The Deep Clean",
        sub: "2,001 to 5,000 emails",
        price: "$3,500",
        pricesub: "one-time",
        features: [
          "Everything in The Inbox Reset",
          "Extended pattern analysis across larger volume",
          "Advanced filter architecture for high-traffic inboxes",
          "Expanded template library (15+ templates)",
          "Inbox zero protocol documentation",
          "14-day post-setup support"
        ]
      },
      {
        id: "extreme-overhaul",
        title: "The Extreme Overhaul",
        sub: "5,000+ emails",
        price: "Custom Quote",
        features: [
          "Everything in The Deep Clean",
          "Scope and timeline confirmed at Fit Call",
          "Priced based on volume and complexity"
        ],
        link: "Book a fit call",
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
      }
    ],
    monthlyTerms: (
        <p>
          <strong>
            Monthly management plans require a completed Inbox Reset, Deep Clean or Extreme Overhaul, 
          </strong> 
            or a scope assessment at the Fit Call to confirm your inbox is ready for ongoing management.
        </p>
    ),
    // packages: [
    //   {
    //     id: "audit-build",
    //     tag: "START HERE",
    //     title: "Client Communications Audit & System Build",
    //     price: "$3,000",
    //     billing: "one-time",
    //     description: [
    //       "Before ongoing management can work, your client communications need a real foundation. This is a full audit — how you are currently showing up to leads and existing clients, what is getting missed, and what needs to change. You come out with a clean inbox, a system built around how you actually work, and a template library that sounds like you wrote every word yourself.",
    //       "For inboxes accumulated over several years — the kind where unread emails number in the tens of thousands — I offer a deeper Communications Overhaul at $5,000. The same outcome, built for a significantly larger scope of work.",
    //       "Most clients move straight to a monthly plan after the Audit. Think of it as the setup; the retainer is the maintenance."
    //     ],
    //     features: [
    //       "Full client communications audit across your inbox",
    //       "Custom folder structure and smart filter setup",
    //       "Priority labelling and flagging system",
    //       "Lead follow-up qualification framework",
    //       "Client Voice and Communications Brief",
    //       "Template library (20+ custom templates in your voice)",
    //       "No-forwarding and access security setup",
    //       "Handoff documentation and walkthrough",
    //       "7-day post-setup support included"
    //     ],
    //     buttonText: "Apply for a Spot",
    //     buttonHref: "/contact?package=audit-build",
    //     limitedSpotsWarning: "Spots are limited and filled first come, first served."
    //   }
    // ],
    pricingHeading: "Choose Your Monthly Plan",
    pricingSubheading: "Ongoing client communications management billed monthly. All plans include a weekly summary report.",
    pricingTiers: [
      {
        id: "daily-grind",
        title: "The Daily Grind",
        sub: "Standard, up to 2,000 emails",
        price: "$700/month",
        features: [
          "Primary inbox monitoring Monday to Friday",
          "Response drafting in your voice using approved templates",
          "Lead follow-up and client correspondence",
          "Priority flagging and inbox triage",
          "Weekly summary report",
          "Response time: 24hrs",
          "Additional inboxes: +$75/month"
        ]
      },
      {
        id: "full-plate",
        title: "The Full Plate",
        sub: "High Volume, up to 5,000 emails",
        price: "$1,100/month",
        
        features: [
          "Everything in The Daily Grind",
          "Daily Monday to Friday monitoring",
          "Expanded template library updates",
          "Full inbox organisation and archiving",
          "Bi-weekly performance report",
          "Response time: Same-day priority",
          "Additional inboxes: +$150/month"
        ]
      },
      {
        id: "chef-table",
        title: "The Chef's Table",
        sub: "Extreme, 5,000+ emails",
        price: "$1,600/month",
        
        features: [
          "Everything in The Full Plate",
          "Daily monitoring including urgent Saturday coverage",
          "Full inbox management with weekly inbox zero protocol",
          "Monthly strategy session",
          "Response time: Same-day priority, urgent flagging within 2hrs",
          "Additional inboxes: Custom quote"
        ]
      }
    ], 
    paymentTerms: [
      <>
      Monthly services invoiced on the 1st of the month, due within 5 days. One-time packages are billed in full upfront. All plans cover your primary business inbox. Additional inboxes or email accounts: +$75/month per inbox for standard volume, +$150/month per inbox for high-volume accounts (5,000+ emails). Confirmed at Fit Call. Need pricing for clients in Nigeria or select African markets? <Link href="/contact">Contact me</Link> for localised rates.
      </>,
    ], 
    contentSections: [
      {
        heading: "Who This Service Is For",
        paragraphs: [
          "Service providers, consultants, and executives in the US, UK, UAE, and across EMEA who are managing high-stakes client relationships and cannot afford for communications to slip. Professionals whose inbox is a direct reflection of their brand. A delayed response to the wrong person has real consequences.",
          "This service works particularly well for independent professionals and small firms with no dedicated communications support: consultants, designers, lawyers, financial advisors, and agency owners who need a capable, discreet operational partner handling their correspondence with the same care they would apply themselves.",
          "It is not right for someone who needs to approve every response before it goes out, whose communications involve primarily regulated or legally sensitive content requiring professional qualifications, or who is not genuinely ready to hand over inbox access. The Fit Call is where we establish whether this is the right fit, for both of us."
        ]
      },
      {
        heading: "You Might Also Need",
        paragraphs: [
          <>
          If you are managing client-level communications through this service, you may also have a separate stream of customer-facing communications: order issues, support requests, transactional enquiries that require a different kind of handling. That is a distinct service. I manage it separately under <Link href="/">Customer Service Management</Link>. Many businesses need both, and they work well together without overlap.
          </>,

          <>
          If you need broader operational support beyond the inbox: research, task management, process design, or automation. My <Link href="/">Operations & Executive Support</Link> covers that side of your business.
          </>,

          <>
          If you are also managing a social media presence with high DM volume, with brand enquiries, collaboration requests, or fan messages, I handle that separately under <Link href="/">Social Media Inbox Management</Link>.
          </>
        ]
      },
    ],
    faqs: [
      {
        question: "How do you learn how I communicate with my clients?",
        answer: "Before I respond to anything on your behalf I complete a detailed Client Voice and Communications Brief with you. This covers your professional tone, how you open and close emails, your preferences on response length and formality, which clients require a different level of care, and examples of real emails you have sent that felt right. It also defines which topics require your direct input before any response goes out: pricing, contracts, complaints, anything with legal or financial exposure. Nothing leaves your inbox under your name until I understand exactly how you sound and where the limits are."
      },
      {
        question: "How do you handle lead follow-up without overstepping?",
        answer: "We agree on a qualification framework before work begins: what stage a lead is at, what response they receive at each stage, and what triggers a flag to you before anything goes out. Budget discussions, scope decisions, and anything requiring a judgment call on your part get flagged first. Everything else is handled according to agreed templates and standards. You define the boundaries; I operate within them consistently."
      },
      {
        question: "Do you manage CRM platforms or project management tools?",
        answer: "No. This service is email only. I do not update CRM platforms, log communications in project management tools, or manage any software outside your email inbox. That boundary keeps the scope clean and the service focused on what it does best."
      },
      {
        question: "How do you handle confidential email content?",
        answer: "With the seriousness it deserves. I access your inbox through shared credentials via a password manager or delegated email access, never by forwarding to an external address. I never screenshot or copy email content outside the working environment. I work exclusively from a desktop, never a mobile device. When the engagement ends, access is revoked immediately through a clear offboarding process. A service agreement covering confidentiality is signed before any work begins."
      },
      {
        question: "What is the difference between Client Communications and Customer Service?",
        answer: "Client Communications is relationship-level communication: existing clients, warm leads, inbound enquiries from people who already know you. Higher stakes per message, voice-sensitive, represents you directly. Customer Service is transactional-level communication: customers with problems, questions, or complaints. Higher volume, more process-driven, less personal. If you are unsure which you need, the Fit Call will clarify it quickly. Some businesses use both."
      },
      {
        question: "Do I need to complete an Inbox Reset before starting a monthly plan?",
        answer: "Yes. Monthly management plans require a completed Inbox Reset, Deep Clean or Extreme Overhaul, or a scope assessment at the Fit Call to confirm your inbox is ready for ongoing management. This is not a gatekeeping step. It is what makes the ongoing work function properly."
      },
      {
        question: "What is the difference between The Inbox Reset, The Deep Clean, and The Extreme Overhaul?",
        answer: "The Inbox Reset at $2,500 is for inboxes with up to 2,000 emails. The Deep Clean at $3,500 covers 2,001 to 5,000 emails, with extended pattern analysis and a larger template library. The Extreme Overhaul handles 5,000+ emails and is custom-quoted at the Fit Call based on volume and complexity. All three result in the same outcome: a clean, organised inbox with a system built around how you work."
      },
      {
        question: "Who is this service not right for?",
        answer: "Someone who needs to approve every response before it goes out. The process defeats the purpose. Someone whose communications involve primarily regulated or legally sensitive content requiring professional qualifications to respond to. Someone who is not genuinely ready to delegate (not new to it, but resistant to it in practice). And someone looking only for a one-time cleanup with no interest in ongoing management. The one-time packages exist, but the real value is in the retainer."
      },
      {
        question: "What does getting started look like?",
        answer: "Fill out the enquiry form, we schedule a Fit Call to confirm it is the right fit, I send a proposal, you sign a service agreement, and the Inbox Reset, Deep Clean or Extreme Overhaul begins with full payment upfront. Once complete, monthly management begins with a 50% deposit for the first month and full payment from the second month onward."
      },
      {
        question: "Can I use this alongside your other services?",
        answer: "Yes. Client Communications pairs naturally with Customer Service management for businesses handling both relationship-level and transactional communications. It also works alongside Operations and Executive Support for clients who need broader operational coverage beyond the inbox. How that combination works in practice is something we work out during the Fit Call."
      }
    ],
    cta: {
      title: "Your Inbox Should Not Require Your Presence to Function",
      description: "Your clients and leads deserve consistent, professional responses whether you are at your desk or not. I make that happen.",
      buttonText: "Apply for a spot",
      buttonHref: "/contact"
    }
  },

  // ── CUSTOMER SERVICE DATA ──
  'customer-service': {
    title: "The Drive-Thru: Customer Service Management for E-Commerce & High-Volume Service Businesses",
    eyebrow: "Your customers should never feel like an afterthought.",
    heroDescription: [
      "More customers is the goal. The enquiries, complaints, and anxious delivery questions that come with them are not something your business should stumble over. I handle your customer service professionally, in your brand voice, using systems built around how your business actually works, so your customers feel looked after and you stay focused on running the thing.",
    ],
    availability: [],
    startHere: "Start Here: One-Time Inbox Packages",
    startHereSubheading: "Ongoing management requires the right infrastructure. These one-time packages build it.",
    startHereTiers: [
      {
        id: "system-build",
        title: "The System Build",
        sub: "Single brand, straightforward setup",
        price: "$2,500",
        pricesub: "one-time",
        features: [
          "Full customer service audit across current channels",
          "Airtable CRM build configured around your business",
          "Customer Service Brand Voice Brief",
          "Template library (15+ response templates in your voice)",
          "Escalation framework and decision authority map",
          "Order status and delivery enquiry response protocols",
          "Handoff documentation and walkthrough",
          "7-day post-setup support"
        ]
      },
      {
        id: "system-overhaul",
        title: "The System Overhaul",
        sub: "Multi-channel, data migration, team training",
        price: "$4,000",
        pricesub: "one-time",
        features: [
          "Everything in The System Build",
          "Multi-channel setup (3+ platforms)",
          "Existing data migration from current systems",
          "Small team training on new system",
          "Advanced escalation mapping across multiple channels",
          "Expanded template library (25+ templates)",
          "14-day post-setup support"
        ],
        link: "Book a fit call",
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
      }
    ],
    monthlyTerms: (
        <p>
          <strong>
            Monthly management plans require a completed System Build or System Overhaul. 
          </strong> 
            This is what makes ongoing management work: your CRM, templates, and escalation framework need to exist before there is anything to run.
        </p>
    ),
    
    pricingHeading: "Choose Your Monthly Plan",
    pricingSubheading: "Ongoing client communications management billed monthly. All plans include a weekly summary report.",
    pricingTiers: [
      {
        id: "the-usual",
        title: "The Usual",
        sub: "Up to 2 channels, Mon-Fri",
        price: "$900/month",
        features: [
          "Up to 2 channels or platforms",
          "Monday to Friday coverage",
          "Enquiry and complaint responses using approved templates",
          "Order status and delivery enquiry handling",
          "Escalation flagging within 2hrs for urgent situations",
          "Weekly summary report",
          "Response time: 24hr"
        ]
      },
      {
        id: "the-special",
        title: "The Special",
        sub: "Up to 3 channels, Mon-Sat",
        price: "$1,400/month",

        features: [
          "Everything in The Usual",
          "Up to 3 channels or platforms",
          "Monday to Friday plus Saturday monitoring",
          "Complaint and dispute handling using agreed resolution framework",
          "Bi-weekly performance report",
          "Response time: 12hr"
        ]
      },
      {
        id: "full-works",
        title: "The Full Works",
        sub: "Up to 5 channels, daily including weekends",
        price: "$2,200/month",
        features: [
          "Everything in The Special",
          "Up to 5 channels or platforms",
          "Daily monitoring including weekends",
          "Full customer service management including proactive follow-up on unresolved tickets",
          "Monthly strategy session to review patterns and improve response quality",
          "Response time: Same-day priority, urgent issues within 6hr"
        ]
      }
    ],
    paymentTerms: [
      <>
      Monthly services invoiced on the 1st of the month, due within 5 days. The System Build and System Overhaul are billed in full upfront. <i>Need pricing for clients in Nigeria or select African markets? <Link href="/contat">Contact me</Link> for localised rates.</i>
      </>,
    ], 
    contentSections: [
      {
        heading: "Who This Service Is For",
        paragraphs: [
          "E-commerce brands, subscription box businesses, service businesses with high client volume, event businesses, and hospitality or experience providers. The common thread is businesses that sell something people get anxious or impatient about, and whose customer enquiry volume has outgrown what the owner or a small team can handle without something slipping.",

          "This service works particularly well for growing businesses in the US, UK, UAE, and across EMEA that are at the stage where customer service is becoming a full-time job but hiring a full-time person does not yet make sense. You need professional, consistent, brand-accurate responses without adding to your headcount. That is exactly what this is.",

          "It is not right for businesses that need 24/7 round-the-clock coverage, sell regulated products where responses carry legal or compliance implications, have no product documentation for me to work from, or expect order processing, refund issuance, or payment system access. The Fit Call is where we establish whether this is the right match, for both of us."
        ]
      },
      {
        heading: "You Might Also Need",
        paragraphs: [
          <>
            Customer service handles the transactional layer of your communications: the questions, complaints, and status enquiries from people who have already bought. But your business also has a relationship layer: existing clients, warm leads, inbound enquiries from people who know you personally. That requires a different kind of handling. I manage it separately under <Link href="/services/client-communications">Client Communications Management.</Link> Many businesses need both and the two operate cleanly alongside each other without overlap.
          </>,

          <>
            If you also need broader operational support, research, task management, process design, or automation beyond what this service covers, my <Link href="/services/social-inbox">Operations & Executive Support</Link> handles that side of your business.
          </>
        ]
      }
    ],
    faqs: [
      {
        question: "What kinds of businesses is this service for?",
        answer: "E-commerce brands, subscription box businesses, service businesses with high client volume, event businesses, and hospitality or experience providers. The common thread is businesses that sell something people get anxious or impatient about, and whose customer enquiry volume has outgrown what the owner or a small team can handle well."
      },
      {
        question: "What do you actually handle?",
        answer: "Enquiry responses, order status questions, delivery anxiety, complaint de-escalation, and general customer support, all handled in your brand voice using agreed templates and response frameworks. I do not process orders, issue refunds, or access payment systems. I answer questions, ease anxious customers, and escalate decisions that require your authority."
      },
      {
        question: "What tools do you use to manage customer service?",
        answer: "I build customer service systems primarily in Airtable, which I know deeply, meaning your system is built well and I can maintain and improve it over time. If you already have an existing CRM or helpdesk tool, we discuss that during the Fit Call to determine the right approach for your situation."
      },
      {
        question: "How do you make sure responses sound like my brand?",
        answer: "I bring professional customer service standards: de-escalation technique, empathy, clear resolution-focused communication, and adapt them to your specific brand tone. Before work begins I complete a Customer Service Brand Voice Brief covering your tone with unhappy customers, phrases you never use, and what resolution authority I have without needing to consult you first. A luxury brand sounds warm and considered. A direct fitness brand sounds no-nonsense. The professionalism is consistent; the voice is yours."
      },
      {
        question: "What happens when a situation needs a decision only I can make?",
        answer: "I escalate proactively. You do not need to notice it yourself. Anything involving a refund above your agreed threshold, a legal complaint or threat, a public-facing crisis, or anything outside the agreed resolution framework gets flagged to you within 2 hours with full context and, where possible, a suggested course of action. You make the call; I handle the follow-through."
      },
      {
        question: "Do I need the System Build before starting a monthly plan?",
        answer: "Yes. Ongoing management only works when the infrastructure exists. The System Build sets up your Airtable CRM, creates your template library, documents your escalation framework, and completes your brand voice brief. Without it, I am managing chaos rather than a system. Most clients move straight to a monthly plan after the build."
      },
      {
        question: "What is the difference between the System Build and the System Overhaul?",
        answer: "The System Build at $2,500 is for businesses starting from scratch or with a straightforward single-channel setup: one brand, one primary channel, standard Airtable build, full template library, escalation framework, and 7-day post-setup support. The System Overhaul at $4,000 is for businesses with multiple channels, existing messy data to migrate, or a small team that needs training on the new system."
      },
      {
        question: "What is the difference between Customer Service and Client Communications?",
        answer: "Customer Service is transactional: enquiries, complaints, order status, and support requests from people who have already bought from you. Higher volume, more process-driven. Client Communications is relationship-level: existing clients, warm leads, and inbound enquiries from people who know you personally. Higher stakes per message, more voice-sensitive. Some businesses need both. They operate cleanly alongside each other without overlap."
      },
      {
        question: "Who is this service not right for?",
        answer: "Businesses that need 24/7 round-the-clock coverage. Businesses selling regulated products where customer responses carry legal or compliance implications. Businesses with no product documentation: if I cannot accurately answer a customer question, I cannot serve that customer well. Businesses expecting order processing, refund issuance, or payment system access. And businesses that want an on-demand agent rather than a structured retainer."
      },
      {
        question: "What does getting started look like?",
        answer: "Fill out the enquiry form, we schedule a Fit Call to confirm it is the right fit, I send a proposal, you sign a service agreement, and the System Build or Overhaul begins with full payment upfront. Once complete, monthly management begins with a 50% deposit for the first month and full payment from the second month onward."
      }
    ],
    // crossSells: ['client-communications', 'virtual-assistant']
    cta: {
      title: "Your Customers Deserve Better Than a Three-Day Wait",
      description: "Professional, brand-accurate customer service without adding to your headcount. I build the system and run it for you.",
      buttonText: "Apply for a spot",
      buttonHref: "/contact"
    }
  },
  
  // social inbox
  'social-media': {
    title: "Social Media Inbox Management for Creators",
    eyebrow: "The Feed: Social Media Inbox Management for Content Creators & Influencers",
    heroDescription: ["Your inbox is not just full. It is full of things that matter buried under things that do not. Brand deals, collaboration offers, speaking requests, genuine fan connections, all competing with spam, follow-for-follow requests, and noise. I sort it, manage it, and respond in your voice so nothing valuable disappears into the backlog."], 
    startHere: "Start Here: One-Time Inbox Packages",
    startHereSubheading: "Ongoing management requires the right infrastructure. These one-time packages build it.",
    startHereTiers: [
      {
        id: "inbox-audit",
        title: "Inbox Audit & Reset",
        sub: "Standard inbox cleanup and system build",
        price: "$1,500",
        pricesub: "one-time",

        features: [
          "Full audit across all active social platforms",
          "Missed brand deal and collaboration identification",
          "DM triage system and priority flagging framework",
          "Brand voice briefing and custom template library (10+ templates)",
          "Fan message vs. business opportunity sorting system",
          "Spam and irrelevant message cleanup",
          "Platform access setup via password manager or delegated access",
          "7-day post-setup support"
        ],
        link: "Book a fit call",
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
      },

      {
        id: "system-overhaul",
        title: "The System Overhaul",
        sub: "Multi-channel, data migration, team training",
        price: "$4,000",
        pricesub: "one-time",
        features: [
          "Everything in the Inbox Audit & Reset",
          "High-volume cleanup covering up to 6 months of messages",
          "Multi-platform setup",
          "Expanded template library (15+ templates)",
          "14-day post-setup support"
        ],

        link: "Book a fit call",
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
      }
    ],
    monthlyTerms: (
        <p>
          <strong>
            Monthly management plans require a completed Inbox Audit & Reset or Inbox Overhaul.  
          </strong> 
            Ongoing management only works well when built on a clean foundation.
        </p>
    ),
    
    pricingHeading: "Choose Your Monthly Plan",
    pricingSubheading: "Ongoing social media inbox management billed monthly. All plans include a weekly summary report.",
    pricingTiers: [
      {
        id: "creator-start",
        title: "Creator Start",
        sub: "Instagram and Facebook",
        price: "$800/month",
        features: [
          "Instagram and Facebook (Meta ecosystem)",
          "5x weekly inbox monitoring",
          "Brand deal identification and flagging",
          "Fan message responses using approved templates",
          "Brand voice briefing included",
          "Weekly summary report",
          "Response time: 48hr brands, 48hr fans"
        ]
      },
      {
        id: "creator-growth",
        title: "Creator Growth",
        sub: "Up to 3 platforms",
        price: "$1,100/month",

        features: [
          "Up to 3 platforms including LinkedIn, Threads, or TikTok",
          "5x weekly inbox monitoring",
          "Everything in Creator Start",
          "Expanded template library",
          "Comment monitoring included",
          "Weekly summary report",
          "Response time: 24hr brands, 24hr fans"
        ]
      },

      {
        id: "creator-pro",
        title: "Creator Pro",
        sub: "Up to 5 platforms",
        price: "$1,600/month",
        features: [
        "Up to 5 platforms including YouTube and Twitter/X",
        "Daily monitoring",
        "Everything in Creator Growth",
        "Full DM and comment management",
        "Brand deal opportunity flagging with suggested next steps",
        "Weekly summary report",
        "Response time: Same-day brands, 24hr fans"
        ]
      }
    ],
    paymentTerms: [
      <>
      Monthly services invoiced on the 1st of the month, due within 5 days. Inbox Audit & Reset and Inbox Overhaul are billed in full upfront. <i>Need pricing for clients in Nigeria or select African markets? <Link href="/contat">Contact me</Link> for localised rates.</i>
      </>,
    ], 
    contentSections: [
      {
        heading: "Who This Service Is For",
        paragraphs: [
        "Content creators, influencers, and UGC creators whose inboxes have become a second job. If you are spending more time sorting messages than creating content, something has gone wrong with how your business is set up, not with you.",
        
        "This service is particularly built for creators with growing or established audiences across Instagram, Facebook, TikTok, LinkedIn, Threads, YouTube, or Twitter/X who are receiving consistent brand enquiries, collaboration requests, and high fan message volume. If brand deals are arriving but getting lost, if your response time is suffering, or if you simply cannot face opening your DMs anymore, this is the right conversation to have.",

        "It is not built for creators who are just starting out and receiving occasional messages. The inbox needs enough volume to justify professional management. If you are unsure whether you are at that point, the Fit Call will tell us both quickly."
        ]
      },
      {
        heading: "You Might Also Need",
        paragraphs: [
          <>
            If your social media inboxes are chaotic, your email inbox is likely not far behind. Brand partnership offers, speaking requests, and collaboration proposals arrive via email just as often as they do via DMs, sometimes more formally and usually with higher stakes. I manage professional email and client communications separately under <Link href="/services/client-communications">Client Communications Management.</Link> Many creators find they need both, and the two work well together.
          </>,

          <>
            If you also need broader operational support: research, task management, process design, or automation, my <Link href="/services/operations-support">Operations & Executive Support</Link> handles that side of your business.
          </>
        ]
      }
    ],
    faqs: [
      {
        question: "How do you make sure responses sound like me?",
        answer: "Before I respond to anything on your behalf I complete a Brand Voice Briefing with you. This covers your tone, the words and phrases you use regularly, the ones you would never use, how you address your audience, and examples of responses you have sent that felt right. Nothing goes out until I understand how you sound. The briefing is part of onboarding for every client on this service."
      },
      {
        question: "What counts as a brand deal enquiry versus a regular DM?",
        answer: "We agree on qualifying standards before work begins: things like minimum offer value, platform relevance, campaign type, and timeline. Anything that meets your criteria gets flagged to you with context. Anything that does not gets handled or archived according to your preferences. You define the bar; I apply it consistently."
      },
      {
        question: "Which platforms do you manage?",
        answer: "Creator Start covers Instagram and Facebook via Meta Business Suite. Creator Growth adds up to one more platform including LinkedIn, Threads, or TikTok. Creator Pro covers up to 5 platforms including YouTube and Twitter/X. If your primary platform is not listed here, mention it on your enquiry form and we will figure out whether it works."
      },
      {
        question: "How do you get access to my accounts?",
        answer: "Through delegated platform access where the platform supports it. Meta Business Suite manager access, for example, means you never hand over your actual password. Where delegated access is not available, I use a password manager with shared credentials. I never work from a mobile device, so your account access is always handled in a controlled, secure environment."
      },
      {
        question: "What is the difference between the Inbox Audit & Reset and the Inbox Overhaul?",
        answer: "The Inbox Audit & Reset at $1,500 covers standard inbox cleanup across your active platforms. The Inbox Overhaul at $2,000 is for high-volume inboxes across multiple platforms with up to 6 months of messages to work through. If you are not sure which applies to you, the Fit Call will clarify it immediately."
      },
      {
        question: "Do I need the Inbox Audit & Reset before starting a monthly plan?",
        answer: "Yes. Ongoing management only works well when built on a clean foundation. Starting without it means managing chaos rather than preventing it, which is a worse experience for you and a harder job for me. The Audit & Reset or Overhaul is the prerequisite for every monthly plan."
      },
      {
        question: "What does getting started look like?",
        answer: "Fill out the enquiry form, we schedule a Fit Call to confirm it is the right fit, I send a proposal, you sign a service agreement, and the Inbox Audit & Reset or Overhaul begins with full payment upfront. Once that is complete, monthly management begins with a 50% deposit for the first month and full payment from the second month onward."
      },
      {
        question: "Can I combine this with your other services?",
        answer: "Yes. Several clients use more than one service. Social media inbox management alongside client communications management is a common combination for creators who are receiving high volume across both channels. How that works in practice is something we discuss during the Fit Call, including whether it makes sense as separate engagements or a combined arrangement."
      },
    ],
    // crossSells: ['client-communications', 'virtual-assistant']
    cta: {
      title: "Never Miss Another Brand Deal",
      description: "Your next collaboration offer should not be rotting in a DM request folder. I fix that.",
      buttonText: "Apply for a spot",
      buttonHref: "/contact"
    }
  },

  // operations & support
  'operations-support': {
    title: "Operations & Executive Support for Service Providers & Busy Professionals",
    eyebrow: "Stay Ahead of the Pressure",
    heroDescription: ["Work and life have a way of compressing until there is no margin left for the people, rest, or thinking that actually matter. I meet you at the level of support your business needs right now and push for better. Not a task list. A genuine operational partnership."], 
    startHere: "Standard Operations Support",
    startHereSubheading: "Consistent monthly support for business owners who need a capable operational partner handling the day-to-day. Reliable, structured, and built around your workflow.",
    startHereTiers: [
      {
        id: "standing-order",
        title: "The Standing Order",
        sub: "20 hours / month",
        price: "$700/month",
        // pricesub: "one-time",

        features: [
          "20 dedicated hours per month",
          "Task and project management",
          "Research and documentation",
          "Calendar and scheduling support",
          "Email drafting and correspondence",
          "Process documentation and SOP support",
          "Workflow organisation",
          "Weekly task summary",
          "Overage at $35/hr (pre-approved)"
        ],
      },

      {
        id: "open-order",
        title: "The Open Order",
        sub: "30 hours / month",
        price: "$1,050 / month",
        // pricesub: "one-time",
        features: [
          "Everything in The Standing Order",
          "30 dedicated hours per month",
          "Expanded operational coverage",
          "CRM data management and updates",
          "System monitoring and maintenance",
          "Bi-weekly summary report",
          "Overage at $35/hr (pre-approved)"
        ],

        link: "Book a fit call",
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
      },
    ],
    
    monthlyTerms: (
        <p>
          <strong>
            Payment Terms:  
          </strong> 
             Monthly services invoiced on the 1st of the month, due within 5 days. Additional hours beyond your monthly allocation are billed at $35/hr and must be pre-approved before being worked. <i>Need pricing for clients in Nigeria or select African markets? <Link href="/contact">Contact me</Link> for localised rates.</i>
        </p>
    ),
    
    pricingHeading: "For Founders Who Need More Than Task Support",
    pricingSubheading: "This is not a bigger operations package. It is a different kind of relationship entirely. Executive VA is for business owners who need someone operating with real authority: managing systems end-to-end, communicating on their behalf, making judgment calls, and proactively holding the operational layer of their business together. Limited to two retainer clients at a time.",
    pricingTiers: [
      {
        id: "sous-chef",
        title: "The Sous Chef",
        sub: "30 hours / month",
        price: "$2,800/month",
        features: [
          "30 hours of Executive VA support",
          "End-to-end systems management",
          "Client communications in your voice",
          "Proactive operational oversight",
          "CRM and workflow management",
          "Inbox and calendar management",
          "Content operations: newsletter scheduling and broadcast, social media post scheduling, blog publishing and formatting",
          "Independent decision-making within agreed parameters",
          "Proactive issue identification and resolution",
          "50% deposit month one, full payment from month two",
          "Overage at $47/hr (pre-approved)"
        ]
      },
      {
        id: "executive-chef",
        title: "The Executive Chef",
        sub: "40 hours / month",
        price: "$3,500/month",

        features: [
          "Everything in The Sous Chef",
          "40 hours of Executive VA support",
          "Full operational command of your backend",
          "Extended content operations: content calendar maintenance, YouTube video publishing (scheduling only, no content creation or design)",
          "Team and vendor coordination",
          "Project management oversight",
          "Monthly operational strategy session",
          "50% deposit month one, full payment from month two",
          "Overage at $47/hr (pre-approved)"
        ]
      },
    ],
    paymentTerms: [
      <>
        Need consistent capacity beyond your retainer every month? The Extra Course is a structured 20-hour block elected in advance and paid alongside your retainer. It reserves that additional capacity specifically for your business, not ad-hoc overage, but a committed extension of your partnership. Unused hours carry over once and expire at the end of the following month. Available to Executive VA retainer clients only.
      </>,
      <>
        <strong style={{ color: '#007A7A', fontSize: '30px' }}>$940/month</strong>
      </>
    ],
    paymentTermsII: [
      <>
        <strong>Executive VA Payment Terms</strong>
        First month begins with a 50% deposit. From the second month onward, full payment is due on the 1st, within 5 days. The Extra Course, if elected, is paid alongside your retainer. Additional hours at $47/hr must be pre-approved before being worked.
      </>
    ],
    contentSections: [
      {
        heading: "What This Operations Support Actually Involves",
        paragraphs: [
        "You may have tools. You may even have half-built automations. You are still doing everything yourself because none of it is set up around how your specific business actually runs.",
        
        "I come in, assess what is breaking your flow, and fix it. Research, analysis, documentation, task management, process design, automation, and CRM operations: built around your business, not borrowed from a template. Where your operations require human judgment and discretion, that is what you get.",
        
        "If you have no existing systems yet, that is not a problem. We build them together. I am experienced working with business owners who are new to delegation, and I approach that with the patience it deserves, not as a limitation but as part of the work.",
        
        "The goal is an operation that holds up when you step away from it, for an hour, a day, or a week, without anything unravelling behind you."
        ]
      },
      {
        heading: "Who The Operations Support Packages Are Built For",
        paragraphs: [
          <>
            Service providers, consultants, and professionals who are excellent at what they do and increasingly stretched by everything around it. Business owners in the US, UK, UAE, and across EMEA who need a capable operational partner, not someone to be micromanaged. People who need someone who notices problems before being told about them.
          </>
        ]
      },
      {
        heading: "Who The Executive VA Packages Are Built For",
        paragraphs: [
          <>
            Established founders and executives who have outgrown standard operations support and need someone operating at a higher level of trust and autonomy. Business owners whose communications, client relationships, and operational infrastructure require a partner who thinks ahead, not just someone who executes. If your business cannot afford for things to fall through the cracks, and you need someone in your corner who operates like an extension of you rather than a hired hand, this is the right level.
          </>,

          <>
            I also manage <Link href="/">client communications</Link>, <Link href="/">customer service</Link>, <Link href="/">customer service</Link>, and social media inboxes for clients who need support across more than one front.
          </>
        ]
      }
    ],
    faqs: [
      {
        question: "What does Operations Support from Productivity Gourmet actually involve?",
        answer: "It depends on where your business is and what it needs. I start with an honest assessment of what is breaking down operationally, then build support around that: research, task management, documentation, process design, automation, CRM operations, and general operational oversight. It is not a fixed menu. It is built around you."
      },
      {
        question: "What is the difference between The Retainer and The Partnership?",
        answer: "The Retainer packages, The Standing Order and The Open Order, are built for business owners who need reliable, capable task and operational support. The Partnership packages, The Sous Chef and The Executive Chef, are for founders and executives who need a high-trust operational partner operating with real authority: someone who manages systems, makes judgment calls, communicates on their behalf, and proactively identifies issues before being asked. The scope, the relationship, and the level of access are fundamentally different."
      },
      {
        question: "What is the difference between The Standing Order and The Open Order?",
        answer: "The Standing Order gives you 20 hours of consistent monthly support, solid for ongoing operational needs. The Open Order gives you 30 hours with expanded coverage including CRM data management, system monitoring, and a bi-weekly summary report. If your operational needs are growing and 20 hours is starting to feel tight, The Open Order is the natural next step."
      },
      {
        question: "What is The Extra Course add-on?",
        answer: "The Extra Course is a structured 20-hour monthly block available exclusively to Executive VA retainer clients. It is elected in advance and paid alongside your retainer, reserving that additional capacity specifically for your business. Unused hours carry over once and expire at the end of the following month. It is not ad-hoc overage; it is a committed extension of your retainer."
      },
      {
        question: "Is the $47/hr overage rate available to Operations Support clients?",
        answer: "No. The $47/hr rate applies exclusively to Executive VA retainer clients who need additional hours beyond their package. Operations Support packages carry an overage rate of $35/hr."
      },
      {
        question: "Do you create social media content or graphics?",
        answer:
          <>
            No. I do not provide content creation or graphic design. I can publish pre-approved content on your behalf, but content strategy, copywriting, and design are outside this service. If you need someone to manage your social media inboxes, DMs, comments, and brand enquiries, that is a separate service I offer under <Link href="/services/social-media">Social Media Inbox Management</Link>.
          </>
      },
      {
        question: "Can I start with a project engagement and move to a retainer later?",
        answer: "Yes. Project-based work is a sensible way to get a specific system built and test the working relationship before committing to ongoing support. Many clients make that transition once they see how the support fits their workflow."
      },
      {
        question: "What does getting started look like?",
        answer: "You fill out the enquiry form, we schedule a Fit Call to make sure there is a genuine match, I send a proposal, you sign a service agreement, and the first month begins with a 50% deposit. From the second month onward it is full payment. No surprises."
      },
      {
        question: "How do you handle confidential business information?",
        answer: "Carefully and deliberately. I use a password manager, always push for shared access over direct password sharing, and I never work from a mobile device, so your business information is only ever handled in a secure, controlled environment. A service agreement covering confidentiality is signed before work begins."
      },
      {
        question: "What timezone do you work in? Will that affect me?",
        answer: "I work remotely and asynchronously, which means your location and mine rarely matter. Tasks are turned around without requiring us to be online simultaneously. If you prefer real-time collaboration in your timezone, I accommodate that too."
      },
      {
        question: "What happens if you are unavailable?",
        answer: "I communicate ahead of time and provide alternatives. You are never left without notice or a plan.",
      },
      {
        question: "Do you work with clients who have no existing systems or processes?",
        answer: "Yes, and it is some of the most satisfying work I do. If you are new to delegation or building from scratch, we figure out the structure together. Starting without systems is not a disadvantage; it just means we build the right ones from the ground up."
      }
    ],
    // crossSells: ['client-communications', 'virtual-assistant']
    cta: {
      title: "Ready to Stop Running Your Business on Willpower Alone?",
      description: "Tell me where the pressure is. We will work out the right level of support from there.",
      buttonText: "Get Started",
      buttonHref: "/contact"
    }
  },
};