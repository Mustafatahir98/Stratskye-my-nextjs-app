import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Lightbulb,
  Megaphone,
  Mic,
  Search,
  Users,
  Video,
  X,
} from "lucide-react";
import styles from "../b2b-lead-generation-services/page.module.css";

export const metadata: Metadata = {
  title: "B2B Demand Generation Services for SaaS & Tech | Stratskye",
  description:
    "Build a predictable SaaS pipeline with Stratskye's B2B demand generation services, connecting awareness, authority and demand capture. Book a strategy call.",
  alternates: {
    canonical: "/services/b2b-demand-generation-services",
  },
  openGraph: {
    title: "B2B Demand Generation Services for SaaS & Tech | Stratskye",
    description:
      "Build a connected demand system across awareness, authority, inbound capture, nurture, and measurable pipeline contribution.",
    url: "/services/b2b-demand-generation-services",
    type: "website",
    images: [
      {
        url: "/images/services/demand-generation 1.webp",
        width: 1200,
        height: 800,
        alt: "B2B technology team planning a demand generation strategy",
      },
    ],
  },
};

const decisionPoints = [
  ["Best for", "B2B tech companies with a live product, real customers, and inconsistent demand or pipeline"],
  ["We handle", "Diagnosis, demand strategy, channel planning, selected subservices, nurture, measurement, optimization"],
  ["You provide", "Product and market context, CRM and analytics access, subject-matter expertise, timely approvals"],
  ["Timeline", "Most engagements start with a minimum three-month term on a 30/60/90-day cadence"],
  ["Communication", "One main contact, weekly strategy meetings and updates, monthly reporting"],
  ["Pricing", "Custom scope based on channels, content volume, audiences, and technical complexity"],
  ["Main problem solved", "A strong product with no connected system for building demand and pipeline"],
];

const scopeRows = [
  ["Demand diagnosis and strategy", "Deep research or full rebrand if the existing foundation isn't usable"],
  ["ICP and buyer-journey alignment", "Original market research or purchased data outside approved scope"],
  ["Channel-role and campaign planning", "Paid media budget, platform fees, sponsorship costs"],
  ["Selected child-service workstreams", "All seven services at once; each is scoped individually"],
  ["Content and nurture coordination", "Large website builds, advanced automation, sales outreach execution"],
  ["Measurement and optimization", "CRM cleanup or custom attribution engineering"],
  ["Communication and reporting", "Sales closing, follow-up ownership, revenue guarantees"],
];

const subservices = [
  {
    number: "01",
    title: "LinkedIn Marketing Services",
    role: "Builds founder and company visibility where buyers validate expertise.",
    icon: Users,
  },
  {
    number: "02",
    title: "Inbound Marketing Services",
    role: "Attracts problem-aware buyers through search-led content and conversion paths.",
    icon: Search,
  },
  {
    number: "03",
    title: "Thought Leadership Marketing",
    role: "Turns technical expertise into authority and sales-supporting content.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Webinar Marketing Services",
    role: "Educates buyers, captures registrations, and fuels post-event nurture.",
    icon: Video,
  },
  {
    number: "05",
    title: "B2B Podcast Marketing",
    role: "Builds authority through expert conversations and reusable content.",
    icon: Mic,
  },
  {
    number: "06",
    title: "B2B Community Marketing",
    role: "Creates recurring engagement and trust with relevant audiences.",
    icon: Users,
  },
  {
    number: "07",
    title: "B2B Brand Awareness Campaigns",
    role: "Builds recognition before prospects enter an active buying cycle.",
    icon: Megaphone,
  },
];

const fitFor = [
  "Sell a live B2B tech, SaaS, AI, fintech, or complex professional-service offer",
  "Have real customers but inconsistent visibility, authority, or pipeline",
  "Need multiple demand workstreams coordinated around one plan",
  "Have a founder or SME who can contribute insight early on",
  "Can support a minimum three-month engagement and timely approvals",
];

const notFit = [
  "The product isn't live or validated yet",
  "You want a single post, webinar, or campaign with no wider strategy",
  "You expect guaranteed leads, pipeline, or revenue",
  "Your team can't provide access, data, or feedback",
];

const reasons = [
  {
    title: "Technical product fluency",
    text: "Built by engineers, for complex B2B products. That means sharper positioning and content that actually reads as credible to technical buyers.",
  },
  {
    title: "Strategy and execution stay connected",
    text: "Research, content, channels, and measurement run under one team, not scattered across departments that don't talk.",
  },
  {
    title: "One system, not isolated campaigns",
    text: "LinkedIn, inbound, thought leadership, webinars, podcasts, and community support different moments in the same buyer journey.",
  },
  {
    title: "Structured delivery",
    text: "A 30/60/90-day framework, one main contact, weekly meetings and updates, and monthly reporting keep delivery clear.",
  },
];

const clientInputs = [
  ["Product, market, and customer info", "Drives accurate positioning and messaging"],
  ["Sales materials and current messaging", "Shows your existing story and conversion path"],
  ["CRM, analytics, and campaign data", "Supports diagnosis and measurement"],
  ["Target-account or customer examples", "Defines best-fit accounts and use cases"],
  ["Subject-matter expert access", "Enables credible technical content"],
  ["Brand and compliance guidance", "Avoids inaccurate claims and rework"],
  ["Timely feedback and approvals", "Keeps the launch schedule on track"],
];

const processSteps = [
  ["Review", "Product, market, audience, funnel, and existing data."],
  ["Align", "ICP, priorities, message direction, and measurement plan."],
  ["Build", "Content, campaign assets, conversion paths, and tracking."],
  ["Launch", "Activate selected workstreams and collect early signals."],
  ["Evaluate", "Lead quality, sales feedback, and channel contribution."],
  ["Optimize", "Improve what's working and agree on the next stage."],
];

const cadence = [
  ["Days 1–30", "Research, alignment, strategy, setup"],
  ["Days 31–60", "Production, launch, early momentum"],
  ["Days 61–90", "Review, optimization, next-stage planning"],
];

const measurementRows = [
  ["Early demand indicators", "Audience reach, branded search, content engagement, event registrations"],
  ["Demand-capture indicators", "Organic conversions, demo requests, high-intent actions"],
  ["Qualified-demand metrics", "Lead fit, sales acceptance, SQLs, hand raisers"],
  ["Pipeline metrics", "Marketing-sourced and influenced pipeline, velocity, sales-cycle movement"],
  ["Efficiency metrics", "CAC, cost per qualified opportunity, channel contribution"],
];

const costFactors = [
  ["Number of channels", "More setup, assets, coordination"],
  ["Content volume", "More production, review, iteration"],
  ["Number of audiences", "More research and segmentation"],
  ["Product complexity", "More technical discovery and enablement"],
  ["Landing pages, CRM, automation", "Added strategy and implementation"],
  ["Webinars or podcasts", "Added coordination and production"],
  ["Community scope", "Setup, moderation, ongoing management"],
  ["Paid campaigns", "Creative volume and media budget"],
];

const relatedServices = [
  ["Sharper positioning", "Brand and Positioning Strategy", "/services"],
  ["Named-account targeting", "Account-Based Marketing", "/services"],
  ["Lead nurture", "Email Marketing", "/services"],
  ["Organic demand capture", "Inbound Marketing Services", "/services"],
  ["Founder visibility", "LinkedIn Marketing Services", "/services"],
  ["Expert authority", "Thought Leadership Marketing", "/services"],
  ["Previous outcomes", "Work / Case Studies", "/work"],
  ["Delivery details", "Our Approach", "/our-approach"],
];

const faqs = [
  {
    question: "What do Stratskye's B2B demand generation services include?",
    answer:
      "Diagnosis, strategy, selected channel workstreams, nurture, measurement, and optimization, drawing from seven child services. The exact mix is scoped to your gaps, not applied uniformly.",
  },
  {
    question: "How is demand generation different from lead generation?",
    answer:
      "Demand generation builds awareness before buyers are actively searching. Lead generation captures interest once it exists. Lead capture supports the system, but isn't the whole service.",
  },
  {
    question: "Do we need every demand generation service listed on this page?",
    answer:
      "No. We recommend the workstreams that match your gaps, buyers, sales cycle, and budget. Most engagements use a focused subset.",
  },
  {
    question: "Is this service suitable for an early-stage B2B technology company?",
    answer:
      "Yes, if the product is live with real customer validation and budget to support a proper engagement. Pre-launch products generally aren't the right fit yet.",
  },
  {
    question: "How long do onboarding and launch take?",
    answer:
      "Most engagements follow a 30/60/90-day progression, starting with research and strategy, then launch and optimization. Timeline to pipeline results depends on your sales cycle.",
  },
  {
    question: "What does Stratskye need from our internal team?",
    answer:
      "Product context, sales materials, CRM access, subject-matter expert access, and timely feedback throughout.",
  },
  {
    question: "How is B2B demand generation performance measured?",
    answer:
      "We track early demand indicators, qualified-demand metrics, and pipeline metrics separately. Accuracy depends on your tracking, CRM quality, and sales cycle.",
  },
  {
    question: "What affects the cost of a demand generation engagement?",
    answer:
      "Channel count, content volume, audience count, product complexity, and whether the engagement includes paid media, webinars, or CRM work. Pricing is scoped after diagnosis.",
  },
  {
    question: "Does Stratskye guarantee leads, pipeline, or revenue?",
    answer:
      "No. We control strategy, execution, and optimization. Results also depend on your offer, market, tracking, and sales follow-up.",
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
          name: "B2B Demand Generation Services",
          item: "https://stratskye.com/services/b2b-demand-generation-services",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://stratskye.com/services/b2b-demand-generation-services#service",
      name: "B2B Demand Generation Services for SaaS and Technology Companies",
      serviceType: "B2B demand generation",
      url: "https://stratskye.com/services/b2b-demand-generation-services",
      provider: { "@id": "https://stratskye.com/#organization" },
      areaServed: "Worldwide",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "B2B SaaS, AI, fintech, technology, and complex professional-service companies",
      },
      description:
        "A coordinated B2B demand generation system connecting awareness, authority, inbound capture, nurture, measurement, and optimization.",
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

function DataTable({ headings, rows }: { headings: [string, string]; rows: string[][] }) {
  return (
    <div className={styles.tableWrap}>
      <div className={`${styles.tableRow} ${styles.tableHead}`}>
        <span>{headings[0]}</span><span>{headings[1]}</span>
      </div>
      {rows.map(([first, second]) => (
        <div className={styles.tableRow} key={first}>
          <strong>{first}</strong><span>{second}</span>
        </div>
      ))}
    </div>
  );
}

export default function B2BDemandGenerationServicesPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>B2B demand generation services</p>
              <h1>
                Your product is solid. <span>Your pipeline shouldn&apos;t feel like a coin flip.</span>
              </h1>
              <p className={styles.lede}>
                Stratskye builds B2B demand generation systems for SaaS, AI, and technology companies,
                connecting awareness, authority, and demand capture under one strategy instead of running
                disconnected campaigns and hoping something sticks.
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
                src="/images/services/demand-generation 1.webp"
                alt="Technology team planning a B2B demand generation program"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
                className={styles.coverImage}
                preload
              />
              <div className={styles.visualOverlay} />
              <div className={styles.pipelineCard}>
                <div className={styles.pipelineTop}>
                  <span>Demand system</span><span className={styles.liveDot}>Connected</span>
                </div>
                <div className={styles.pipelineFlow}>
                  <span>Awareness</span><ArrowRight size={15} /><span>Authority</span><ArrowRight size={15} /><span>Capture</span>
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
              <h2>Know what the engagement needs before adding another channel.</h2>
              <p>No disconnected campaign menu. The work starts with the gap, then scopes the system around it.</p>
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
            title="What our B2B demand generation services can include"
            copy="Demand generation runs on two coordinated functions. Demand creation builds awareness among buyers who aren't searching yet. Demand capture reaches the ones who already are."
          />
          <p className={styles.supportingCopy}>
            Which channels make sense depends on your current gaps, how your buyers actually research, your budget,
            and your sales cycle. Stratskye scopes the right mix, then runs it as one connected system rather than a
            stack of separate campaigns.
          </p>
          <DataTable headings={["Included", "Conditional / separate scope"]} rows={scopeRows} />
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.shell}>
          <SectionIntro
            eyebrow="Demand workstreams"
            title="B2B demand generation services we provide"
            copy="Not every engagement uses all seven. Stratskye scopes what fits your gaps."
          />
          <div className={styles.serviceGrid}>
            {subservices.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  className={`${styles.serviceCard} ${index === subservices.length - 1 ? styles.serviceCardWide : ""}`}
                  key={service.title}
                >
                  <div className={styles.serviceCardTop}><span>{service.number}</span><Icon size={24} strokeWidth={1.6} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.role}</p>
                  <Link href="/contact-form">Explore {service.title} <ArrowUpRight size={17} /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.fitSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Fit check" title="Is Stratskye the right demand generation partner for your company?" />
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
                src="/images/services/digital-growth-marketing 1.webp"
                alt="Demand generation analytics dashboard showing marketing performance"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className={styles.coverImage}
              />
              <div className={styles.metricFloat}>
                <span>Typical client outcome</span><strong>2×</strong>
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
            title="What we need from your team to build the right demand system"
            copy="Stratskye builds and runs the system. Product accuracy, approvals, sales follow-up, and closing stay with you unless scoped otherwise."
          />
          <DataTable headings={["Client input / access", "Why it matters"]} rows={clientInputs} />
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.shell}>
          <SectionIntro
            eyebrow="The process"
            title="How Stratskye builds a B2B demand generation system"
            copy="We research before we recommend, so the right marketing gets built in the right order."
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
            {cadence.map(([period, focus]) => <div key={period}><strong>{period}</strong><span>{focus}</span></div>)}
          </div>
        </div>
      </section>

      <section className={styles.measureSection}>
        <div className={styles.shell}>
          <div className={styles.measureGrid}>
            <div>
              <SectionIntro eyebrow="Measurement" title="How we measure B2B demand generation progress" />
              <p className={styles.sectionCopy}>
                Results depend on tracking quality, CRM health, sales follow-up, and how long your sales cycle runs.
                We don&apos;t promise marketing alone controls pipeline or revenue.
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
            <DataTable headings={["Measurement layer", "Examples"]} rows={measurementRows} />
          </div>
        </div>
      </section>

      <section className={styles.costSection}>
        <div className={styles.shell}>
          <SectionIntro
            eyebrow="Investment"
            title="What affects the cost of B2B demand generation services"
            copy="Every engagement is scoped, not sold as a fixed package. A company with an existing content engine and one starting from zero need very different levels of work."
          />
          <div className={styles.costGrid}>
            {costFactors.map(([factor, reason], index) => (
              <div className={styles.costItem} key={factor}>
                <span>{String(index + 1).padStart(2, "0")}</span><div><strong>{factor}</strong><p>{reason}</p></div>
              </div>
            ))}
          </div>
          <p className={styles.costNote}>
            Most clients start with a minimum three-month engagement. Media spend, third-party software, and
            production vendors are typically separate. Large website builds, advanced automation, and sales execution
            require separate scope. Product accuracy and sales follow-up stay with you.
          </p>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Related services" title="Connect demand to the rest of your growth system" />
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
          <SectionIntro eyebrow="FAQ" title="Frequently asked questions about B2B demand generation services" />
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
            <h2>Build a demand system your sales team can actually use.</h2>
            <p>Live product, real customers, inconsistent demand? That&apos;s the gap this service closes.</p>
            <p>
              A strategy call covers your market presence, funnel, existing channels, and the gaps with the most leverage.
              You&apos;ll get an honest fit assessment and, where it makes sense, a proposal built around what matters most.
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
