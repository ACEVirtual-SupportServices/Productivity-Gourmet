import Link from 'next/link';

export const faqData = {
  hero: {
    title: "Questions Worth Answering Upfront",
    description: "Everything you need to know about how I work, how engagements are structured, and what to expect before, during, and after."
  },
  categories: [
    {
      id: "working-together",
      title: "WORKING TOGETHER",
      items: [
        {
          question: "Do you work with clients outside the US and UK?",
          answer: "Yes. I serve clients in the US, UK, UAE, and across EMEA. I work primarily async, which means timezone differences rarely affect delivery — you send it, I handle it, you come back to it done. If you prefer real-time collaboration in your timezone, I accommodate that too."
        },
        {
          question: "Do you take on multiple clients simultaneously?",
          answer: "Yes, but capacity is deliberately limited. I cap my total retainer commitment at 80 hours per month across all active clients. This is not about limiting income — it is about ensuring every client gets the quality and attention their business deserves. When that capacity is full, a waitlist opens."
        },
        {
          question: "Can I use more than one service?",
          answer: "Yes. Multiple services are covered under a single service agreement with separate deliverables and pricing for each outlined within it. Billing is combined into one monthly invoice rather than separate payments. How a combined engagement works in practice is something we work out during the Fit Call — some combinations make immediate sense, others depend on your specific situation."
        },
        {
          question: "How do we communicate day to day?",
          answer: "Email, Slack, or WhatsApp — whichever you are most comfortable with. We agree on the primary communication channel during onboarding and stick to it for consistency. I do not spread conversations across multiple platforms once we have agreed on one."
        },
        {
          question: "Do you work with clients in Nigeria or African markets?",
          answer: (
            <>
            Yes. Localised pricing is available for clients in Nigeria and select African markets. <Link href="/contact">Contact me directly</Link> to discuss rates.
            </>
          )
        }
      ]
    },
    {
      id: "contracts-and-commitments",
      title: "CONTRACTS & COMMITMENTS",
      items: [
        {
          question: "Is there a contract or service agreement?",
          answer: "Yes. A service agreement is signed before any work begins. It covers scope of work, deliverables, payment terms, confidentiality, and the responsibilities of both parties. Nothing starts without it."
        },
        {
          question: "Is there a minimum commitment period?",
          answer: "Yes. The minimum commitment for retainer services is 3 months at a minimum of 10 hours per week. This protects the onboarding investment on both sides and gives enough time for the engagement to produce meaningful results. One-time services like the Inbox Reset or System Build are not subject to a minimum commitment period."
        },
        {
          question: "Is there a trial period before committing?",
          answer: "No. My services require significant upfront setup — system builds, briefing documents, access configuration — none of which makes sense for a trial period. The Fit Call is where we establish whether this is the right match before any commitment is made. If it is not the right fit, neither of us moves forward."
        },
        {
          question: "What is your cancellation and offboarding process?",
          answer: "Two weeks written notice is required to end an engagement after the minimum commitment period. The final invoice is settled before the last working day, all access credentials are revoked immediately, and any documentation, system notes, or templates created during the engagement are handed back to you in full. You leave with everything that was built — nothing is held back."
        }
      ]
    },
    {
      id: "payment-and-billing",
      title: "PAYMENTS & BILLING",
      items: [
        {
          question: "What payment methods do you accept?",
          answer: "Bank transfer and cryptocurrency. US clients pay via ACH. International clients pay via SWIFT or Wise. These are the only payment methods currently accepted."
        },
        {
          question: "What currency do you invoice in?",
          answer: "All invoices are issued in USD. If you prefer to pay in GBP, AED, or EUR, you are welcome to pay the equivalent amount in your currency at the exchange rate on the invoice date."
        },
        {
          question: "Do you provide a W9 form?",
          answer: "No. I am not a US-based contractor and cannot provide a W9. US clients requiring foreign contractor documentation may request a W8-BEN, which I can provide on request. This certifies that I am a foreign contractor and exempt from US backup withholding."
        }
      ]
    },
    {
      id: "onboarding-and-setup",
      title: "ONBOARDING & SETUP",
      items: [
        {
          question: "How long does onboarding take?",
          answer: "Once the service agreement is signed and the first payment is received, onboarding takes 48 hours. That covers the Brand Voice or Client Communications Brief, access setup, and any system configuration required before work begins."
        },
        {
          question: "What tools do you use and will I need to buy any software?",
          answer: "I use AI tools for research and automation, Airtable for customer service systems, and standard communication platforms. Where a paid software plan is required for your specific setup, you own and pay for that account directly. My service fee covers the build, configuration, and ongoing management — not software subscriptions. Any tools required are discussed and agreed during onboarding before any costs are incurred."
        }
      ]
    },
    {
      id: "confidentiality-and-standards",
      title: "CONFIDENTIALITY & STANDARDS",
      items: [
        {
          question: "How do you handle confidentiality?",
          answer: "Confidentiality is covered in the service agreement signed before any work begins. In practice, I use a password manager, push for delegated platform access over shared credentials, work exclusively from a desktop — never a mobile device — and never forward or copy client data outside the working environment. Access is revoked immediately at the end of every engagement."
        },
        {
          question: "How do you handle mistakes or service failures?",
          answer: "Minor errors — wrong tone, a missed flag, a formatting issue — are corrected immediately without needing a conversation. Significant errors that caused inconvenience but no financial loss are acknowledged directly, corrected, and followed by a clear plan to prevent recurrence. If an error caused measurable financial loss, a credit is applied to the next invoice. I do not offer refunds as a default since work is delivered in good faith, but I take full accountability when something goes wrong and I do not hide from it."
        }
      ]
    }
  ]
};