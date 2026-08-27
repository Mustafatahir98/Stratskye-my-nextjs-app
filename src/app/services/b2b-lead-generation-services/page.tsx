import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Database,
  Mail,
  MousePointerClick,
  Users,
  X,
} from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "B2B Lead Generation Services for SaaS & Tech | Stratskye",
  description:
    "Reach ideal buyers with Stratskye's B2B lead generation services, combining ICP targeting, verified data, outreach and CRM routing. Book a strategy call.",
  alternates: {
    canonical: "/services/b2b-lead-generation-services",
  },
  openGraph: {
    title: "B2B Lead Generation Services for SaaS & Tech | Stratskye",
    description:
      "Build a repeatable lead generation system around your ICP, verified prospect data, coordinated outreach, conversion paths, and measurable CRM handoff.",
    url: "/services/b2b-lead-generation-services",
    type: "website",
    images: [
      {
        url: "/images/services/b2b-lead-generation/team-collaboration.webp",
        width: 1800,
        height: 1200,
        alt: "B2B technology team building a coordinated lead generation strategy",
      },
    ],
  },
};

const decisionPoints = [
  ["Best for", "Live product, real customers, definable ICP, inconsistent pipeline"],
  ["We handle", "Diagnosis, targeting, selected channels, routing, measurement"],
  ["You provide", "Product context, CRM access, sales feedback"],
  ["Timeline", "Minimum three months, 30/60/90-day cadence"],
  ["Communication", "One contact, weekly meetings, monthly reporting"],
  ["Pricing", "Scoped by audience, volume, and channel mix"],
  ["Problem solved", "No repeatable system for reaching buyers and building pipeline"],
];

const scopeRows = [
  ["Diagnosis and objective alignment", "Deep market research or full positioning work"],
  ["ICP and qualification alignment", "Purchased data, intent platforms, complex enrichment"],
  ["Channel and campaign planning", "Cold calling, SDR staffing, appointment setting"],
  ["Selected child-service workstreams", "All four services by default; each is scoped"],
  ["Messaging and lead-routing logic", "Website builds, advanced CRM implementation"],
  ["Measurement and optimization", "Sales follow-up, closing, revenue guarantees"],
  ["Communication and reporting", "Sending domains, data subscriptions, paid media"],
];

const subservices = [
  {
    number: "01",
    title: "LinkedIn Lead Generation Services",
    role: "Decision-maker discovery, credible outreach, relationship-led follow-up",
    icon: Users,
  },
  {
    number: "02",
    title: "Lead Generation Landing Pages",
    role: "Focused conversion paths with message match and lead routing",
    icon: MousePointerClick,
  },
  {
    number: "03",
    title: "Outbound Lead Generation Services",
    role: "ICP-led prospecting, sequenced messaging, sales handoff",
    icon: Mail,
  },
  {
    number: "04",
    title: "B2B Contact List Building",
    role: "Segmented account and contact lists, researched and verified",
    icon: Database,
  },
];

const fitFor = [
  "Sell a live B2B tech, SaaS, AI, or fintech offer",
  "Have a definable ICP and meaningful contract value",
  "Need LinkedIn, outbound, and data coordinated",
  "Want better control over targeting and lead quality",
  "Can support a three-month starting period",
];

const notFit = [
  "The product isn't live or validated",
  "The offer changes every week",
  "You want the cheapest possible lead volume",
  "Your team can't provide CRM access or feedback",
  "You expect guaranteed leads or pipeline",
];

const reasons = [
  {
    title: "Technical product fluency",
    text: "Built by engineers, for complex B2B products. Clearer ICPs, credible messaging, and prospect conversations that hold up under technical scrutiny.",
  },
  {
    title: "Strategy and execution stay connected",
    text: "Targeting, data, messaging, and reporting run under one coordinated plan, not scattered across vendors.",
  },
  {
    title: "A connected system",
    text: "Contact data, outreach, conversion paths, and qualification support different stages of the same pipeline instead of operating in isolation.",
  },
  {
    title: "Structured delivery",
    text: "A 30/60/90-day framework, one main contact, weekly updates, and monthly reporting keep the work moving.",
  },
];

const clientInputs = [
  ["Product and customer information", "Accurate ICP and buying-role mapping"],
  ["Sales materials and messaging", "Shows your value proposition and proof"],
  ["CRM and campaign data", "Supports diagnosis and routing"],
  ["Best-customer examples", "Defines strong-fit accounts"],
  ["Subject-matter expert access", "Real objection and call-feedback context"],
  ["Brand and compliance guidance", "Reduces rework, supports responsible data use"],
  ["Timely feedback and approvals", "Protects launch timelines"],
  ["Sales follow-up and quality feedback", "Lets us evaluate lead performance"],
];

const processSteps = [
  ["Review", "Product, market, current data, and CRM."],
  ["Define", "ICP, buying roles, lead stages, qualification standards."],
  ["Build", "Contact data, outreach assets, landing pages, and tracking."],
  ["Launch", "Activate workstreams and collect early signals."],
  ["Evaluate", "List accuracy, response quality, and sales acceptance."],
  ["Optimize", "Improve criteria, messaging, and routing."],
];

const cadence = [
  ["Days 1–30", "Research, ICP alignment, strategy, data planning"],
  ["Days 31–60", "List building, asset production, launch"],
  ["Days 61–90", "Sales feedback, optimization, next stage"],
];

const measurementRows = [
  ["Data quality", "Valid-contact rate, verification status, routing accuracy"],
  ["Early indicators", "Delivery rate, reply rate, landing-page conversion"],
  ["Qualified demand", "ICP fit, sales acceptance, cost per qualified lead"],
  ["Pipeline", "Sourced and influenced opportunities, pipeline velocity"],
  ["Efficiency", "Cost per valid contact, cost per qualified lead"],
];

const costFactors = [
  ["Number of workstreams and channels", "More setup and coordination"],
  ["Number of audiences or markets", "More research and messaging variants"],
  ["Account and contact volume", "More research and validation"],
  ["Data depth and verification", "More sources and accuracy checks"],
  ["Campaign complexity", "More sequences and testing"],
  ["Landing pages", "Added copy, design, and tracking"],
  ["CRM and automation", "Added integration work"],
  ["Sending infrastructure", "Additional domains and monitoring"],
];

const relatedServices = [
  ["Sharper positioning", "Brand and Positioning Strategy", "/services"],
  ["Named-account targeting", "Account-Based Marketing", "/services"],
  ["Ongoing nurture", "Email Marketing", "/services"],
  ["Organic demand capture", "Inbound Marketing Services", "/services"],
  ["Broader awareness before capture", "B2B Demand Generation Services", "/services"],
  ["Founder authority for outreach", "Thought Leadership Marketing", "/services"],
  ["Previous outcomes", "Work / Case Studies", "/work"],
  ["Delivery details", "Our Approach", "/our-approach"],
];

const faqs = [
  {
    question: "What do Stratskye's B2B lead generation services include?",
    answer:
      "Diagnosis, ICP alignment, selected child workstreams, conversion-path coordination, lead routing, measurement, and optimization across four services: LinkedIn lead generation, landing pages, outbound campaigns, and contact list building. The exact mix is scoped to your ICP and sales motion.",
  },
  {
    question: "How is lead generation different from demand generation, list building, and appointment setting?",
    answer:
      "Demand generation builds awareness. List building supplies prospect data. Lead generation identifies and captures potential buyers. Appointment setting turns qualified interest into a scheduled conversation. These aren't interchangeable terms.",
  },
  {
    question: "Do we need every lead generation service listed on this page?",
    answer: "No. We recommend the workstreams that match your ICP, market, and budget.",
  },
  {
    question: "Is this service suitable for an early-stage B2B technology company?",
    answer:
      "Yes, if the product is live with real customers or credible validation, the ICP is definable, and you have budget and sales capacity for a proper engagement.",
  },
  {
    question: "How long do onboarding and launch take?",
    answer:
      "Most engagements follow a 30/60/90-day progression, starting with research and data planning, then moving into launch and optimization. We don't promise a fixed pipeline timeline.",
  },
  {
    question: "How does Stratskye define and qualify a lead?",
    answer:
      "We agree on company fit, role, and sales-acceptance rules with you before launch. Contact, lead, MQL, SQL, and opportunity are treated as separate stages, not synonyms.",
  },
  {
    question: "Does Stratskye provide the contact list and prospect data?",
    answer:
      "B2B Contact List Building can be included. Data sources, verification, and ownership get confirmed in the scope. We don't promise exclusive or zero-bounce data.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stratskye.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://stratskye.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "B2B Lead Generation Services",
          item: "https://stratskye.com/services/b2b-lead-generation-services",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://stratskye.com/services/b2b-lead-generation-services#service",
      name: "B2B Lead Generation Services for SaaS and Technology Companies",
      serviceType: "B2B lead generation",
      url: "https://stratskye.com/services/b2b-lead-generation-services",
      provider: { "@id": "https://stratskye.com/#organization" },
      areaServed: "Worldwide",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "B2B SaaS, AI, fintech, and technology companies",
      },
      description:
        "A coordinated B2B lead generation system connecting ICP targeting, verified prospect data, LinkedIn and outbound outreach, landing pages, lead routing, measurement, and optimization.",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className={styles.sectionIntro}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className={styles.sectionCopy}>{copy}</p> : null}
    </div>
  );
}

function DataTable({
  headings,
  rows,
}: {
  headings: [string, string];
  rows: string[][];
}) {
  return (
    <div className={styles.tableWrap}>
      <div className={`${styles.tableRow} ${styles.tableHead}`}>
        <span>{headings[0]}</span>
        <span>{headings[1]}</span>
      </div>
      {rows.map(([first, second]) => (
        <div className={styles.tableRow} key={first}>
          <strong>{first}</strong>
          <span>{second}</span>
        </div>
      ))}
    </div>
  );
}

export default function B2BLeadGenerationServicesPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>B2B lead generation services</p>
              <h1>
                Your offer works. <span>The problem is what happens before someone ever hears about it.</span>
              </h1>
              <p className={styles.lede}>
                Stratskye connects targeting, verified prospect data, LinkedIn and outbound outreach,
                and conversion paths under one strategy, so your pipeline stops depending on referrals
                and founder-led selling.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href="/contact-form">
                  Book a Strategy Call <ArrowUpRight size={18} />
                </Link>
                <span className={styles.proofLine}>60+ brands across B2B tech, fintech, and SaaS since 2019.</span>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <Image
                src="/images/services/b2b-lead-generation/team-collaboration.webp"
                alt="Technology team discussing a coordinated B2B lead generation strategy"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
                className={styles.coverImage}
                preload
              />
              <div className={styles.visualOverlay} />
              <div className={styles.pipelineCard}>
                <div className={styles.pipelineTop}>
                  <span>Pipeline system</span>
                  <span className={styles.liveDot}>Live</span>
                </div>
                <div className={styles.pipelineFlow}>
                  <span>ICP</span><ArrowRight size={15} /><span>Data</span><ArrowRight size={15} /><span>Outreach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.decisionSection}>
        <div className={styles.shell}>
          <div className={styles.decisionGrid}>
            <div className={styles.stickyIntro}>
              <p className={styles.eyebrow}>Quick decision</p>
              <h2>Know the shape of the engagement before the first call.</h2>
              <p>No mystery package. No generic lead quota. Here is what the working relationship looks like.</p>
            </div>
            <div className={styles.decisionList}>
              {decisionPoints.map(([label, value], index) => (
                <div className={styles.decisionItem} key={label}>
                  <span className={styles.decisionNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.decisionLabel}>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.lightSection}>
        <div className={styles.shell}>
          <SectionIntro
            eyebrow="Connected scope"
            title="What our B2B lead generation services can include"
            copy="Lead generation only works as a connected system. Your ICP defines who you're targeting. Verified contact data makes outreach possible. LinkedIn and outbound campaigns start the conversation. Landing pages convert interest into something measurable."
          />
          <p className={styles.supportingCopy}>
            The right mix depends on your ICP, sales cycle, deal value, and internal sales capacity.
            Stratskye scopes it, then coordinates targeting, outreach, and CRM handoff as one system.
          </p>
          <DataTable headings={["Included", "Separate scope"]} rows={scopeRows} />
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.shell}>
          <SectionIntro
            eyebrow="Service system"
            title="B2B lead generation services we provide"
            copy="Not every engagement uses all four. Stratskye scopes what fits your ICP and budget."
          />
          <div className={styles.serviceGrid}>
            {subservices.map((service) => {
              const Icon = service.icon;
              return (
                <article className={styles.serviceCard} key={service.title}>
                  <div className={styles.serviceCardTop}>
                    <span>{service.number}</span>
                    <Icon size={24} strokeWidth={1.6} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.role}</p>
                  <Link href="/contact-form">
                    Explore {service.title} <ArrowUpRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.fitSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Fit check" title="Is Stratskye the right B2B lead generation partner for your company?" />
          <div className={styles.fitGrid}>
            <div className={`${styles.fitCard} ${styles.fitCardYes}`}>
              <div className={styles.fitHeading}><Check size={22} /> This service is for companies that</div>
              <ul>{fitFor.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className={`${styles.fitCard} ${styles.fitCardNo}`}>
              <div className={styles.fitHeading}><X size={22} /> This may not be the right fit if</div>
              <ul>{notFit.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.shell}>
          <div className={styles.whyGrid}>
            <div className={styles.whyVisual}>
              <Image
                src="/images/services/b2b-lead-generation/pipeline-analytics.webp"
                alt="Analytics dashboard used to measure B2B lead generation performance"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className={styles.coverImage}
              />
              <div className={styles.metricFloat}>
                <span>Typical client outcome</span>
                <strong>2×</strong>
                <p>reduction in sales-cycle length within six months</p>
              </div>
            </div>
            <div>
              <SectionIntro eyebrow="Why Stratskye" title="Why B2B technology companies choose Stratskye" />
              <div className={styles.reasonList}>
                {reasons.map((reason, index) => (
                  <div className={styles.reasonItem} key={reason.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><h3>{reason.title}</h3><p>{reason.text}</p></div>
                  </div>
                ))}
              </div>
              <div className={styles.evidenceBar}>
                <div><strong>60+</strong><span>brands since 2019</span></div>
                <div><strong>90%</strong><span>return or referral rate</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.inputSection}>
        <div className={styles.shell}>
          <SectionIntro
            eyebrow="Shared inputs"
            title="What we need from your team to build the right lead generation system"
            copy="Stratskye builds and optimizes the prospecting system. Product accuracy, approvals, sales follow-up, and closing stay with you unless scoped otherwise."
          />
          <DataTable headings={["Client input", "Why it matters"]} rows={clientInputs} />
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.shell}>
          <SectionIntro
            eyebrow="The process"
            title="How Stratskye builds a B2B lead generation system"
            copy="We research before we recommend, so targeting and outreach get built around agreed lead definitions, not guesswork."
          />
          <div className={styles.processGrid}>
            {processSteps.map(([title, text], index) => (
              <article className={styles.processCard} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <div className={styles.cadenceGrid}>
            {cadence.map(([period, focus]) => (
              <div key={period}><strong>{period}</strong><span>{focus}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.measureSection}>
        <div className={styles.shell}>
          <div className={styles.measureGrid}>
            <div>
              <SectionIntro eyebrow="Measurement" title="How we measure B2B lead generation progress" />
              <p className={styles.sectionCopy}>
                Contact, lead, MQL, SQL, and opportunity are not interchangeable. A contact is a researched
                record, not automatically a lead. We define qualification standards with you before launch.
                Results depend on tracking, CRM quality, and sales follow-up, so we don&apos;t promise marketing
                alone controls pipeline or revenue.
              </p>
              <div className={styles.caseNote}>
                <BarChart3 size={24} />
                <p>
                  For one Stratskye client in B2B technology, a coordinated engagement contributed to a roughly
                  <strong> 2x reduction in sales-cycle length</strong> within the first six months, measured against
                  the pre-engagement baseline.
                </p>
              </div>
            </div>
            <DataTable headings={["Layer", "Examples"]} rows={measurementRows} />
          </div>
        </div>
      </section>

      <section className={styles.costSection}>
        <div className={styles.shell}>
          <SectionIntro
            eyebrow="Investment"
            title="What affects the cost of B2B lead generation services"
            copy="Every engagement is scoped, not sold as a fixed package. Contact volume, data depth, and channel complexity vary too much for a flat price to make sense."
          />
          <div className={styles.costGrid}>
            {costFactors.map(([factor, reason], index) => (
              <div className={styles.costItem} key={factor}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{factor}</strong><p>{reason}</p></div>
              </div>
            ))}
          </div>
          <p className={styles.costNote}>
            Most clients start with a minimum three-month engagement. Data subscriptions and sending
            infrastructure are typically separate. Cold calling and SDR staffing require separate confirmation.
            Sales follow-up and closing stay with you.
          </p>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Related services" title="Build the rest of the growth system" />
          <div className={styles.relatedGrid}>
            {relatedServices.map(([need, label, href]) => (
              <Link className={styles.relatedLink} href={href} key={need}>
                <span>{need}</span><strong>{label}</strong><ArrowUpRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="FAQ" title="Frequently asked questions about B2B lead generation services" />
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details className={styles.faqItem} key={faq.question} open={index === 0}>
                <summary><span>{faq.question}</span><span className={styles.faqPlus}>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalGlow} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.ctaInner}>
            <p className={styles.eyebrow}>Build what sales can use</p>
            <h2>Build a lead generation system your sales team can actually use.</h2>
            <p>
              Your offer is viable, but targeting, data, or outreach is inconsistent. That&apos;s the gap this service closes.
            </p>
            <p>
              A strategy call covers your ICP, market, contact data, and the gaps with the most leverage. You&apos;ll get
              an honest fit assessment and, where it makes sense, a proposal built around what matters most.
            </p>
            <Link className={styles.primaryButton} href="/contact-form">
              Book a Strategy Call <ArrowUpRight size={18} />
            </Link>
            <span className={styles.proofLine}>60+ brands across B2B tech, fintech, and SaaS since 2019.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
