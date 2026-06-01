import Link from 'next/link';

export const servicesDatabase = {
  // ── 1. CLIENT COMMUNICATIONS DATA ──
  'client-communications': {
    title: "Client Communications Management for Service Providers & Executives",
    eyebrow: "Your inbox should not require your presence to function.",
    heroDescription: [
      "Your clients followed up. Your leads responded to. Your inbox organised and under control. Whether you are watching the game, taking a proper holiday, or simply trying to do your best work without one eye permanently on your email — I handle the communications that keep your business moving, in your voice, to your standards."
    ],
    availability: [
      { count: 2, label: "Essential" },
      { count: 1, label: "Growth" },
      { count: 1, label: "Premium" },
      { count: 2, label: "Comms Audit" }
    ],
    packages: [
      {
        id: "audit-build",
        tag: "START HERE",
        title: "Client Communications Audit & System Build",
        price: "$3,000",
        billing: "one-time",
        description: [
          "Before ongoing management can work, your client communications need a real foundation. This is a full audit — how you are currently showing up to leads and existing clients, what is getting missed, and what needs to change. You come out with a clean inbox, a system built around how you actually work, and a template library that sounds like you wrote every word yourself.",
          "For inboxes accumulated over several years — the kind where unread emails number in the tens of thousands — I offer a deeper Communications Overhaul at $5,000. The same outcome, built for a significantly larger scope of work.",
          "Most clients move straight to a monthly plan after the Audit. Think of it as the setup; the retainer is the maintenance."
        ],
        features: [
          "Full client communications audit across your inbox",
          "Custom folder structure and smart filter setup",
          "Priority labelling and flagging system",
          "Lead follow-up qualification framework",
          "Client Voice and Communications Brief",
          "Template library (20+ custom templates in your voice)",
          "No-forwarding and access security setup",
          "Handoff documentation and walkthrough",
          "7-day post-setup support included"
        ],
        buttonText: "Apply for a Spot",
        buttonHref: "/contact?package=audit-build",
        limitedSpotsWarning: "Spots are limited and filled first come, first served."
      }
    ],
    pricingHeading: "Choose Your Monthly Plan",
    pricingSubheading: "Ongoing client communications management billed monthly. All plans include a weekly summary report.",
    pricingTiers: [
      {
        id: "core",
        title: "Core",
        price: "$900/month",
        features: [
          "1 inbox",
          "5x weekly monitoring Monday to Friday",
          "Lead follow-up and client correspondence",
          "Response drafting using approved voice and templates",
          "Priority flagging and inbox triage",
          "Weekly summary report",
          "Response time: 24hr"
        ]
      },
      {
        id: "growth",
        title: "Growth",
        price: "$1,400/month",
        features: [
          "2 inboxes",
          "Daily Monday to Friday monitoring",
          "Everything in Core",
          "Expanded template library",
          "Full inbox organisation and archiving",
          "Bi-weekly performance report",
          "Response time: Same-day priority"
        ]
      },
      {
        id: "scale",
        title: "Scale",
        price: "$2,000/month",
        features: [
          "Up to 3 inboxes",
          "Daily monitoring including urgent Saturday coverage",
          "Everything in Growth",
          "Full customer service management including proactive follow-up on unresolved tickets",
          "Monthly strategy session to review patterns and improve response quality",
          "Response time: Same-day priority, urgent flagging within 2hr"
        ]
      }
    ], 
    paymentTerms: "Monthly services invoiced 1st of month, due within 5 days. System Build and System Overhaul billed in full upfront.",
    contentSections: [
      {
        heading: "Who This Service Is For",
        paragraphs: [
          "Service providers, consultants, and executives in the US, UK, UAE, and across EMEA who are managing high-stakes client relationships and cannot afford for communications to slip. Professionals whose inbox is a direct reflection of their brand, where a delayed response to the wrong person has real consequences.",
          "This service works particularly well for independent professionals and small firms with no dedicated communications support, coaches, consultants, designers, lawyers, financial advisors, agency owners, who need a capable, discreet operational partner handling their correspondence with the same care they would apply themselves.",
          "It is not right for someone who needs to approve every response before it goes out, whose communications involve primarily regulated or legally sensitive content requiring professional qualifications, or who is not genuinely ready to hand over inbox access. The Fit Call is where we establish whether this is the right fit, for both of us."
        ]
      },
      {
        heading: "You Might Also Need",
        paragraphs: [
          <>
          If you are managing client-level communications through this service, you may also have a separate stream of customer-facing communications — order issues, support requests, transactional enquiries — that require a different kind of handling. That is a distinct service. I manage it separately under <Link href="/">Customer Service Management</Link>. Many businesses need both, and they work well together without overlap.
          </>,

          <>
          If you need broader operational support beyond the inbox — research, task management, process design, or automation — my <Link href="/">Virtual Assistant service</Link> covers that side of your business.
          </>,

          <>
          If you are also managing a social media presence with high DM volume — brand enquiries, collaboration requests, fan messages — I handle that separately under <Link href="/">Social Media Inbox Management</Link>.
          </>
        ]
      },
      {
        heading: "What This Service Actually Involves",
        paragraphs: [
          "Service providers, consultants, and executives in the US, UK, UAE, and across EMEA who are managing high-stakes client relationships and cannot afford for communications to slip. Professionals whose inbox is a direct reflection of their brand — where a delayed response to the wrong person has real consequences. This service works particularly well for independent professionals and small firms with no dedicated communications support — coaches, consultants, designers, lawyers, financial advisors, agency owners — who need a capable, discreet operational partner handling their correspondence with the same care they would apply themselves. It is not right for someone who needs to approve every response before it goes out, whose communications involve primarily regulated or legally sensitive content requiring professional qualifications, or who is not genuinely ready to hand over inbox access. The Fit Call is where we establish whether this is the right fit — for both of us."
        ]
      },
    ],
    faqs: [
      {
        question: "How do you learn how I communicate with my clients?",
        answer: "Before I respond to anything on your behalf I complete a detailed Client Voice and Communications Brief with you. This covers your professional tone, how you open and close emails, your preferences on response length and formality, which clients require a different level of care, and examples of real emails you have sent that felt right. It also defines which topics require your direct input before any response goes out; pricing, contracts, complaints, anything with legal or financial exposure. Nothing leaves your inbox under your name until I understand exactly how you sound and where the limits are."
      },
      {
        question: "How do you handle lead follow-up without overstepping?",
        answer: "We agree on a qualification framework before work begins; what stage a lead is at, what response they receive at each stage, and what triggers a flag to you before anything goes out. Budget discussions, scope decisions, and anything requiring a judgment call on your part get flagged first. Everything else is handled according to agreed templates and standards. You define the boundaries; I operate within them consistently."
      },
      {
        question: "Do you manage CRM platforms or project management tools?",
        answer: "No. This service is email only. I do not update CRM platforms, log communications in project management tools, or manage any software outside your email inbox. That boundary keeps the scope clean and the service focused on what it does best."
      },
      {
        question: "How do you handle confidential email content?",
        answer: "With the seriousness it deserves. I access your inbox through shared credentials via a password manager or delegated email access; never by forwarding to an external address. I never screenshot or copy email content outside the working environment. I work exclusively from a desktop, never a mobile device. When the engagement ends, access is revoked immediately through a clear offboarding process. A service agreement covering confidentiality is signed before any work begins."
      },
      {
        question: "What is the difference between Client Communications and Customer Service?",
        answer: "Client Communications is relationship-level communication; existing clients, warm leads, inbound enquiries from people who already know you. Higher stakes per message, voice-sensitive, represents you directly. Customer Service is transactional-level communication; customers with problems, questions, or complaints. Higher volume, more process-driven, less personal. If you are unsure which you need, the Fit Call will clarify it quickly. Some businesses use both."
      },
      {
        question: "What is the difference between the Audit and the Overhaul?",
        answer: "The Communications Audit and System Build at $3,000 is for inboxes with up to roughly 12 months of backlog. The Communications Overhaul at $5,000 is for multi-year accumulated inboxes, the kind where unread emails number in the tens of thousands and no system currently exists. Both result in the same outcome: a clean, organised inbox with a system built around how you work. The difference is scope and time."
      },
      {
        question: "Who is this service not right for?",
        answer: "Someone who needs to approve every response before it goes out, the process defeats the purpose. Someone whose communications involve primarily regulated or legally sensitive content requiring professional qualifications to respond to. Someone who is not genuinely ready to delegate, not new to it, but resistant to it in practice. And someone looking only for a one-time cleanup with no interest in ongoing management. The audit exists, but the real value is in the retainer."
      },
      {
        question: "What does getting started look like?",
        answer: "Fill out the enquiry form, we schedule a Fit Call to confirm it is the right fit, I send a proposal, you sign a service agreement, and the Communications Audit or Overhaul begins with full payment upfront. Once complete, monthly management begins with a 50% deposit for the first month and full payment from the second month onward."
      },
      {
        question: "Can I use this alongside your other services?",
        answer: "Yes. Client Communications pairs naturally with Customer Service management for businesses handling both relationship-level and transactional communications. It also works alongside Virtual Assistant support for clients who need broader operational coverage beyond the inbox. How that combination works in practice is something we work out during the Fit Call."
      }
    ],
    crossSells: ['customer-service', 'virtual-assistant']
  },

  // ── 2. CUSTOMER SERVICE DATA ──
  'customer-service': {
    title: "Customer Service Management for High-Volume Brands",
    eyebrow: "Your customers have questions. I have answers.",
    heroDescription: [
      "Outsourced customer service for e-commerce brands and high-volume service businesses. I handle enquiries, ease anxious customers, and escalate what needs your attention — using Airtable-based systems built around how your business works."
    ],
    availability: [], 
    packages: [
      {
        id: "audit-build",
        tag: "START HERE",
        title: "Client Communications Audit & System Build",
        price: "$3,000",
        billing: "one-time",
        description: [
          "Before ongoing management can work, your client communications need a real foundation. This is a full audit — how you are currently showing up to leads and existing clients, what is getting missed, and what needs to change. You come out with a clean inbox, a system built around how you actually work, and a template library that sounds like you wrote every word yourself.",
          "For inboxes accumulated over several years — the kind where unread emails number in the tens of thousands — I offer a deeper Communications Overhaul at $5,000. The same outcome, built for a significantly larger scope of work.",
          "Most clients move straight to a monthly plan after the Audit. Think of it as the setup; the retainer is the maintenance."
        ],
        features: [
          "Full client communications audit across your inbox",
          "Custom folder structure and smart filter setup",
          "Priority labelling and flagging system",
          "Lead follow-up qualification framework",
          "Client Voice and Communications Brief",
          "Template library (20+ custom templates in your voice)",
          "No-forwarding and access security setup",
          "Handoff documentation and walkthrough",
          "7-day post-setup support included"
        ],
        buttonText: "Apply for a Spot",
        buttonHref: "/contact?package=audit-build",
        limitedSpotsWarning: "Spots are limited and filled first come, first served."
      }
    ], 
    pricingTiers: [
      {
        id: "core",
        title: "Core",
        price: "$900/month",
        features: [
          "Up to 2 channels or platforms",
          "Monday to Friday coverage",
          "Enquiry and complaint responses using approved templates",
          "Order status and delivery enquiry handling",
          "Escalation flagging within 2hr for urgent situations",
          "Weekly summary report"
        ]
      },
      {
        id: "growth",
        title: "Growth",
        price: "$1,400/month",
        features: [
          "Up to 3 channels or platforms",
          "Monday to Friday plus Saturday monitoring",
          "Everything in Core",
          "Expanded template library",
          "Complaint and dispute handling using agreed resolution framework",
          "Bi-weekly performance report",
          "Response time: 12hr"
        ]
      },
      {
        id: "scale",
        title: "Scale",
        price: "$2,000/month",
        features: [
          "Up to 5 channels or platforms",
          "Daily monitoring including weekends",
          "Everything in Growth",
          "Full customer service management including proactive follow-up on unresolved tickets",
          "Monthly strategy session to review patterns and improve response quality"
        ]
      }
    ],
    paymentTerms: "Monthly services invoiced 1st of month, due within 5 days. System Build and System Overhaul billed in full upfront.",
    contentSections: [
      {
        heading: "Who This Service Is For",
        paragraphs: [
          "E-commerce brands, subscription box businesses, service businesses with high client volume, course creators and coaches running active programmes, event businesses, and hospitality or experience providers. The common thread is businesses that sell something people get anxious or impatient about — and whose customer enquiry volume has outgrown what the owner or a small team can handle without something slipping.",
          "This service works particularly well for growing businesses in the US, UK, UAE, and across EMEA that are at the stage where customer service is becoming a full-time job but hiring a full-time person does not yet make sense. You need professional, consistent, brand-accurate responses without adding to your headcount. That is exactly what this is.",
          "It is not right for businesses that need 24/7 round-the-clock coverage, sell regulated products where responses carry legal or compliance implications, have no product documentation for me to work from, or expect order processing, refund issuance, or payment system access. The Fit Call is where we establish whether this is the right match — for both of us."
        ]
      },
      {
        heading: "You Might Also Need",
        paragraphs: [
          "Customer service handles the transactional layer of your communications — the questions, complaints, and status enquiries from people who have already bought. But your business also has a relationship layer — existing clients, warm leads, inbound enquiries from people who know you personally. That requires a different kind of handling. I manage it separately under Client Communications Management. Many businesses need both and the two operate cleanly alongside each other without overlap.",
          "If you also need broader operational support — research, task management, process design, or automation beyond what this service covers — my Virtual Assistant service handles that side of your business."
        ]
      }
    ],
    faqs: [
      {
        question: "What kinds of businesses is this service for?",
        answer: "E-commerce brands, subscription box businesses, service businesses with high client volume, course creators and coaches running active programmes, event businesses, and hospitality or experience providers. The common thread is businesses that sell something people get anxious or impatient about — and whose customer enquiry volume has outgrown what the owner or a small team can handle well."
      },
      {
        question: "What do you actually handle?",
        answer: "Enquiry responses, order status questions, delivery anxiety, complaint de-escalation, and general customer support — all handled in your brand voice using agreed templates and response frameworks. I do not process orders, issue refunds, or access payment systems. I answer questions, ease anxious customers, and escalate decisions that require your authority."
      },
      {
        question: "What tools do you use to manage customer service?",
        answer: "I build customer service systems primarily in Airtable, which I know deeply — meaning your system is built well and I can maintain and improve it over time. If you already have an existing CRM or helpdesk tool, we discuss that during the Fit Call to determine the right approach for your situation."
      },
      {
        question: "How do you make sure responses sound like my brand?",
        answer: "I bring professional customer service standards — de-escalation technique, empathy, clear resolution-focused communication — and adapt them to your specific brand tone. Before work begins I complete a Customer Service Brand Voice Brief covering your tone with unhappy customers, phrases you never use, and what resolution authority I have without needing to consult you first. A luxury brand sounds warm and considered. A direct fitness brand sounds no-nonsense. The professionalism is consistent — the voice is yours."
      },
      {
        question: "What happens when a situation needs a decision only I can make?",
        answer: "I escalate proactively — you do not need to notice it yourself. Anything involving a refund above your agreed threshold, a legal complaint or threat, a public-facing crisis, or anything outside the agreed resolution framework gets flagged to you within 2 hours with full context and, where possible, a suggested course of action. You make the call; I handle the follow-through."
      },
      {
        question: "Do I need the System Build before starting a monthly plan?",
        answer: "Yes. Ongoing management only works when the infrastructure exists. The System Build sets up your Airtable CRM, creates your template library, documents your escalation framework, and completes your brand voice brief. Without it, I am managing chaos rather than a system. Most clients move straight to a monthly plan after the build."
      },
      {
        question: "What is the difference between the System Build and the System Overhaul?",
        answer: "The System Build at $2,500 is for businesses starting from scratch or with a straightforward single-channel setup — one brand, one primary channel, standard Airtable build, full template library, escalation framework, and 7-day post-setup support. The System Overhaul at $4,000 is for businesses with multiple channels, existing messy data to migrate, or a small team that needs training on the new system."
      },
      {
        question: "What is the difference between Customer Service and Client Communications?",
        answer: "Customer Service is transactional — enquiries, complaints, order status, and support requests from people who have already bought from you. Higher volume, more process-driven. Client Communications is relationship-level — existing clients, warm leads, and inbound enquiries from people who know you personally. Higher stakes per message, more voice-sensitive. Some businesses need both. They operate cleanly alongside each other without overlap."
      }
    ],
    crossSells: ['client-communications', 'virtual-assistant']
  },
  
  // ── 3. STUBS FOR REMAINING SERVICES ──
  'social-inbox': {
    title: "Social Media Inbox Management for Creators",
    eyebrow: "Your next brand deal should not be rotting in a DM request.",
    heroDescription: ["Details coming soon."], 
    availability: [],
    packages: [],
    pricingTiers: [],
    paymentTerms: null,
    contentSections: [],
    faqs: [],
    crossSells: []
  },

  'virtual-assistant': {
    title: "Executive Virtual Assistant Services",
    eyebrow: "Stay Ahead of the Pressure",
    heroDescription: ["Details coming soon."],
    availability: [],
    packages: [],
    pricingTiers: [],
    paymentTerms: null,
    contentSections: [],
    faqs: [],
    crossSells: []
  }
};