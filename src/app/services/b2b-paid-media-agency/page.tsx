import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  Clapperboard,
  Mail,
  Newspaper,
  RefreshCw,
  Search,
  Share2,
  Target,
  X,
} from "lucide-react";
import styles from "../b2b-lead-generation-services/page.module.css";
import paidStyles from "./page.module.css";

const pageUrl = "/services/b2b-paid-media-agency";
const heroImage = "/images/services/b2b-paid-media/paid-media-strategy-team.png";
const optimizationImage = "/images/services/b2b-paid-media/campaign-optimization-workspace.png";

export const metadata: Metadata = {
  title: "B2B Paid Media Agency for SaaS & Technology | Stratskye",
  description:
    "Turn ad spend into qualified pipeline with Stratskye, a B2B paid media agency for Google Ads, LinkedIn Ads, retargeting and tracking. Book a strategy call.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "B2B Paid Media Agency for SaaS & Technology | Stratskye",
    description:
      "Build a connected B2B paid media system around qualified audiences, conversion tracking, creative testing, and pipeline visibility.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: heroImage,
        width: 1694,
        height: 945,
        alt: "B2B paid media strategists planning campaigns around audience fit and pipeline quality",
      },
    ],
  },
};

const decisionPoints = [
  ["Best for", "Live product, defined sales process, weak lead quality or pipeline visibility"],
  ["We handle", "Diagnosis, audience and keyword planning, selected channels, tracking, optimization"],
  ["You provide", "Ad account access, ICP materials, media budget, sales feedback"],
  ["Timeline", "Minimum three months, 30/60/90-day progression"],
  ["Communication", "One contact, weekly meetings, monthly reporting"],
  ["Pricing", "Scoped by channels, campaign volume, and tracking needs"],
  ["Problem solved", "Ad spend producing clicks without qualified pipeline visibility"],
];

const scopeRows = [
  ["Paid media diagnosis and strategy", "Purchased intent data or original market research"],
  ["ICP, audience, and keyword alignment", "Media spend, publisher fees, and platform costs"],
  ["Channel and budget planning", "All eight services by default, each is scoped"],
  ["Creative and conversion-path alignment", "Large-scale ad or video production"],
  ["Tracking, testing, and optimization", "CRM cleanup or custom attribution engineering"],
  ["Regular reporting", "Sales closing or follow-up ownership"],
];

const subservices = [
  { number: "01", title: "Paid Search Management Services", role: "Keyword-led campaigns built around commercial intent and lead quality", icon: Search },
  { number: "02", title: "LinkedIn Ads Management Services", role: "Reaches defined roles and target accounts through sponsored campaigns and lead forms", icon: BriefcaseBusiness },
  { number: "03", title: "B2B Google Ads Services", role: "Manages account structure, targeting, bidding, and ongoing optimization", icon: Target },
  { number: "04", title: "B2B Retargeting Services", role: "Re-engages visitors and known audiences across longer buying cycles", icon: RefreshCw },
  { number: "05", title: "Paid Content Syndication Services", role: "Distributes content through publisher channels to reach relevant audiences", icon: Newspaper },
  { number: "06", title: "B2B YouTube Advertising", role: "Video advertising for awareness, buyer education, and retargeting audiences", icon: Clapperboard },
  { number: "07", title: "Sponsored Email Advertising B2B", role: "Sponsored placements in relevant third-party newsletters", icon: Mail },
  { number: "08", title: "B2B Social Media Advertising Services", role: "Paid social for awareness, demand capture, and retargeting", icon: Share2 },
];

const fitFor = [
  "Sell a live B2B tech, SaaS, AI, or fintech offer",
  "Need stronger lead quality or pipeline visibility",
  "Have a defined ICP or target-account direction",
  "Can share lead-stage and sales feedback",
  "Can support a three-month starting period",
];

const notFit = [
  "The product isn't live or the offer is unvalidated",
  "You want a one-off ad with no wider strategy",
  "You expect guaranteed leads, ROAS, or revenue",
  "Nobody can provide account access or tracking data",
  "Media budget or timely approvals aren't available",
];

const reasons = [
  {
    title: "Complex-product and buying-journey understanding",
    text: "Technical products, smaller audiences, and longer sales cycles change targeting and conversion paths. That shapes how campaigns get built and evaluated here.",
  },
  {
    title: "Strategy, execution, and measurement stay connected",
    text: "ICP, channel roles, creative, tracking, and CRM feedback run through one team.",
  },
  {
    title: "Lead quality before raw volume",
    text: "Search-term controls, audience exclusions, and CRM-stage feedback get used to improve fit, not just fill the top of the funnel.",
  },
  {
    title: "An integrated system, not isolated tactics",
    text: "Search, LinkedIn, retargeting, and paid social support different buyer moments instead of competing for the same budget.",
  },
  {
    title: "Structured delivery",
    text: "30/60/90-day framework, one main contact, weekly updates, monthly reporting.",
  },
  {
    title: "Real evidence",
    text: "60+ brands across B2B tech, fintech, and SaaS since 2019. Typical 2x reduction in sales-cycle length within six months.",
  },
];

const clientInputs = [
  ["Product, market, and customer information", "Supports ICP alignment and offer positioning"],
  ["Sales materials and current messaging", "Shows claims and proof usable in ads"],
  ["Ad account, analytics, and CRM access", "Supports audit, tracking, and attribution"],
  ["Target-account and exclusion criteria", "Defines best-fit companies and audiences"],
  ["Historical campaign and sales data", "Reveals baseline performance and lead quality"],
  ["Creative and compliance guidance", "Reduces rework in regulated categories"],
  ["Timely feedback and approvals", "Protects launch and testing timelines"],
  ["Sales feedback and follow-up ownership", "Lets us evaluate lead quality and pipeline movement"],
];

const processSteps = [
  ["Review", "Product, ICP, existing accounts, tracking, and campaign history."],
  ["Align", "Goals, channel roles, audiences, keywords, and budget logic."],
  ["Build", "Campaign structure, audience segments, and conversion tracking."],
  ["Launch", "Activate campaigns, collect early delivery and conversion signals."],
  ["Evaluate", "Lead fit, sales acceptance, and channel contribution."],
  ["Optimize", "Reallocate budget and refine based on CRM feedback."],
];

const cadence = [
  ["Days 1\u201330", "Audit, ICP alignment, tracking setup, strategy"],
  ["Days 31\u201360", "Launch, creative testing, early optimization"],
  ["Days 61\u201390", "Lead-quality review, budget reallocation, scaling"],
];

const measurementRows = [
  ["Delivery", "Impressions, reach, click-through rate"],
  ["Conversion", "Conversion rate, cost per conversion"],
  ["Lead quality", "ICP fit, qualification rate, sales acceptance"],
  ["Efficiency", "Cost per qualified lead, budget utilization"],
  ["Pipeline", "Influenced opportunities, stage progression"],
  ["Attribution", "Channel contribution within the agreed boundary"],
];

const costFactors = [
  ["Number of channels and platforms", "More setup, management, and coordination"],
  ["Campaign and creative volume", "More production, testing, and iteration"],
  ["Number of audiences or markets", "More segmentation and message variants"],
  ["Media spend and complexity", "More monitoring and budget control"],
  ["Landing pages and conversion tracking", "Additional design and implementation"],
  ["Syndication, sponsorships, or video", "Publisher fees and production costs"],
];

const relatedServices = [
  ["Sharper positioning", "Brand and Positioning Strategy", "/services"],
  ["Named-account targeting", "Account-Based Marketing", "/services"],
  ["Lead nurture", "Email Marketing", "/services"],
  ["Organic demand capture", "Inbound Marketing Services", "/services"],
  ["Founder or executive visibility", "LinkedIn Marketing Services", "/services"],
  ["Expert content for campaign authority", "Thought Leadership Marketing", "/services/b2b-content-marketing-services"],
  ["Previous outcomes", "Work / Case Studies", "/work"],
  ["Delivery details", "Our Approach", "/our-approach"],
];

const faqs = [
  {
    question: "What do Stratskye's B2B paid media agency services include?",
    answer: "Diagnosis, strategy, audience and keyword planning, selected channel workstreams, conversion tracking, budget management, testing, and optimization across eight services. The exact mix gets scoped to your gaps.",
  },
  {
    question: "How is B2B paid media different from general PPC or B2C advertising?",
    answer: "B2B campaigns typically target smaller account sets, professional roles, and buying committees with longer sales cycles. Measurement moves beyond clicks toward lead quality, opportunities, and pipeline where reliable data exists.",
  },
  {
    question: "Do we need every service listed here, and how are channels selected?",
    answer: "No. We select workstreams based on your ICP, current demand, campaign history, media budget, and tracking readiness.",
  },
  {
    question: "Can paid media generate qualified pipeline rather than just leads?",
    answer: "Paid media can contribute to qualified opportunities when targeting, offer, tracking, and sales follow-up are aligned. Campaigns alone don't control the pipeline, but downstream CRM data informs how media decisions get made.",
  },
  {
    question: "How do you reduce unqualified leads and wasted ad spend?",
    answer: "Keyword intent controls, negative keywords, role and company exclusions, form qualification, and CRM-stage feedback all play a role. Specific controls vary by platform and campaign.",
  },
  {
    question: "How long do onboarding, launch, and meaningful results take?",
    answer: "The first 30 days cover audit, alignment, and tracking setup. The following phases cover launch, testing, and optimization. Timeline to pipeline results depends on sales cycle and data volume.",
  },
  {
    question: "What does Stratskye need from our team?",
    answer: "Product context, ICP materials, ad account and CRM access, media budget, and sales feedback throughout.",
  },
  {
    question: "How is paid media connected to CRM opportunities and revenue?",
    answer: "Platform delivery and conversions feed into lead quality, sales acceptance, and pipeline data. Reliable attribution depends on tracking, CRM hygiene, and an agreed attribution boundary.",
  },
  {
    question: "What affects the cost, and is media spend included?",
    answer: "Channels, campaign volume, audiences, creative needs, and tracking complexity. Pricing is scoped after diagnosis, and media spend is separate unless explicitly included.",
  },
  {
    question: "Does Stratskye guarantee leads, pipeline, ROAS, or revenue?",
    answer: "No. We control strategy, execution, and optimization. Results also depend on your offer, market, budget, and sales follow-up.",
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
        { "@type": "ListItem", position: 3, name: "B2B Paid Media Agency", item: `https://stratskye.com${pageUrl}` },
      ],
    },
    {
      "@type": "Service",
      "@id": `https://stratskye.com${pageUrl}#service`,
      name: "B2B Paid Media Agency for SaaS and Technology Companies",
      serviceType: "B2B paid media management",
      url: `https://stratskye.com${pageUrl}`,
      provider: { "@id": "https://stratskye.com/#organization" },
      areaServed: "Worldwide",
      audience: { "@type": "BusinessAudience", audienceType: "B2B SaaS, AI, fintech, and technology companies" },
      description: "A connected B2B paid media system combining audience and keyword planning, paid search, LinkedIn, retargeting, paid social, tracking, budget management, testing, and optimization.",
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
      <p className={styles.eyebrow}>{eyebrow}</p><h2>{title}</h2>
      {copy ? <p className={styles.sectionCopy}>{copy}</p> : null}
    </div>
  );
}

function DataTable({ headings, rows }: { headings: [string, string]; rows: string[][] }) {
  return (
    <div className={styles.tableWrap}>
      <div className={`${styles.tableRow} ${styles.tableHead}`}><span>{headings[0]}</span><span>{headings[1]}</span></div>
      {rows.map(([first, second]) => <div className={styles.tableRow} key={first}><strong>{first}</strong><span>{second}</span></div>)}
    </div>
  );
}

export default function B2BPaidMediaAgencyPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.shell}><div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>B2B paid media agency</p>
            <h1>Your campaigns are spending. <span>The question is whether the traffic they bring in actually fits your ICP or turns into a pipeline you can point to.</span></h1>
            <p className={styles.lede}>Stratskye builds B2B paid media strategy that connects demand capture and demand creation channels around one audience plan, with tracking and testing built in from the start.</p>
            <div className={styles.heroActions}>
              <div className={paidStyles.heroButtons}>
                <Link className={styles.primaryButton} href="/contact-form">Book a Strategy Call <ArrowUpRight size={18} /></Link>
                <Link className={`${styles.primaryButton} ${paidStyles.secondaryButton}`} href="/our-approach">See Our Approach <ArrowRight size={18} /></Link>
              </div>
              <span className={styles.proofLine}>60+ brands across B2B tech, fintech, and SaaS since 2019.</span>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image src={heroImage} alt="B2B paid media strategists planning campaigns around audience fit and pipeline quality" fill sizes="(max-width: 900px) 100vw, 44vw" className={styles.coverImage} preload />
            <div className={styles.visualOverlay} />
            <div className={styles.pipelineCard}>
              <div className={styles.pipelineTop}><span>Paid media system</span><span className={styles.liveDot}>Qualified</span></div>
              <div className={styles.pipelineFlow}><span>Audience</span><ArrowRight size={15} /><span>Demand</span><ArrowRight size={15} /><span>Pipeline</span></div>
            </div>
          </div>
        </div></div>
      </section>

      <section className={styles.decisionSection}>
        <div className={styles.shell}><div className={styles.decisionGrid}>
          <div className={styles.stickyIntro}><p className={styles.eyebrow}>Quick decision</p><h2>Know what paid media needs to prove before adding another channel.</h2><p>The channel mix starts with buyer fit, demand state, and tracking readiness—not a default platform list.</p></div>
          <div className={styles.decisionList}>{decisionPoints.map(([label, value], index) => <div className={styles.decisionItem} key={label}><span className={styles.decisionNumber}>{String(index + 1).padStart(2, "0")}</span><span className={styles.decisionLabel}>{label}</span><strong>{value}</strong></div>)}</div>
        </div></div>
      </section>

      <section className={styles.lightSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Connected scope" title="What our B2B paid media agency services can include" copy="Paid media works as two coordinated functions. Demand capture reaches buyers already searching for a solution. Demand creation builds familiarity with buyers who aren't in the market yet but will be." />
          <p className={styles.supportingCopy}>Which channels make sense depends on your ICP, buying journey, campaign history, and how ready your tracking actually is. Stratskye scopes the mix, then runs audience strategy, conversion tracking, testing, and budget management as one connected system.</p>
          <DataTable headings={["Included", "Separate scope"]} rows={scopeRows} />
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Paid media workstreams" title="B2B paid media services we provide" copy="Not every engagement uses all eight. Stratskye scopes what fits your buyers and budget." />
          <div className={styles.serviceGrid}>{subservices.map((service) => { const Icon = service.icon; return <article className={styles.serviceCard} key={service.title}><div className={styles.serviceCardTop}><span>{service.number}</span><Icon size={24} strokeWidth={1.6} /></div><h3>{service.title}</h3><p>{service.role}</p><Link href="/contact-form">Explore {service.title} <ArrowUpRight size={17} /></Link></article>; })}</div>
        </div>
      </section>

      <section className={styles.fitSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Fit check" title="Is Stratskye the right B2B paid media partner for your company?" />
          <div className={styles.fitGrid}>
            <div className={`${styles.fitCard} ${styles.fitCardYes}`}><div className={styles.fitHeading}><Check size={22} /> This service is for companies that</div><ul>{fitFor.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className={`${styles.fitCard} ${styles.fitCardNo}`}><div className={styles.fitHeading}><X size={22} /> This may not be the right fit if</div><ul>{notFit.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.shell}><div className={styles.whyGrid}>
          <div className={styles.whyVisual}>
            <Image src={optimizationImage} alt="Paid media strategists reviewing creative tests, conversion signals, and pipeline attribution" fill sizes="(max-width: 900px) 100vw, 42vw" className={styles.coverImage} />
            <div className={styles.metricFloat}><span>Typical client outcome</span><strong>2x</strong><p>reduction in sales-cycle length within six months</p></div>
          </div>
          <div>
            <SectionIntro eyebrow="Why Stratskye" title="Why B2B technology companies choose Stratskye for paid media" />
            <div className={styles.reasonList}>{reasons.map((reason, index) => <div className={styles.reasonItem} key={reason.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{reason.title}</h3><p>{reason.text}</p></div></div>)}</div>
            <div className={styles.evidenceBar}><div><strong>60+</strong><span>brands since 2019</span></div><div><strong>30/60/90</strong><span>structured delivery</span></div></div>
          </div>
        </div></div>
      </section>

      <section className={styles.inputSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Shared inputs" title="What we need from your team to build the right paid media system" copy="Stratskye builds and optimizes the agreed system. Platform billing, product accuracy, approvals, and sales follow-up stay with you unless a separate scope says otherwise." />
          <DataTable headings={["Client input", "Why it matters"]} rows={clientInputs} />
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="The process" title="How Stratskye builds and optimizes a B2B paid media system" copy="We audit before recommending a channel. The right paid channel depends on the buyer moment, not a default platform list." />
          <div className={styles.processGrid}>{processSteps.map(([title, text], index) => <article className={styles.processCard} key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          <div className={styles.cadenceGrid}>{cadence.map(([period, focus]) => <div key={period}><strong>{period}</strong><span>{focus}</span></div>)}</div>
        </div>
      </section>

      <section className={styles.measureSection}>
        <div className={styles.shell}><div className={styles.measureGrid}>
          <div>
            <SectionIntro eyebrow="Measurement" title="How we measure B2B paid media performance" />
            <p className={styles.sectionCopy}>Impressions, clicks, and conversion rate come first, since they show whether campaigns are actually delivering. Lead quality and sales acceptance come next, since a cheap conversion that sales rejects isn&apos;t a win. Pipeline and revenue visibility depend on tracking accuracy, CRM hygiene, and an agreed attribution boundary, which isn&apos;t automatic just because campaigns are running.</p>
            <p className={styles.sectionCopy}>Results depend on tracking quality, sales follow-up, and buying-cycle length. Paid media alone doesn&apos;t control pipeline or revenue.</p>
            <div className={styles.caseNote}><BarChart3 size={24} /><p>For one Stratskye client in B2B technology, a coordinated paid media and marketing engagement contributed to a roughly <strong>2x reduction in sales-cycle length</strong> within the first six months, measured against the pre-engagement baseline.</p></div>
          </div>
          <DataTable headings={["Measurement layer", "Examples"]} rows={measurementRows} />
        </div></div>
      </section>

      <section className={styles.costSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Investment" title="What affects the cost of B2B paid media agency services" copy="A single-channel search campaign and a multi-platform program with syndication and video need very different levels of work, so pricing follows scope rather than a flat rate." />
          <div className={styles.costGrid}>{costFactors.map(([factor, reason], index) => <div className={styles.costItem} key={factor}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{factor}</strong><p>{reason}</p></div></div>)}</div>
          <p className={styles.costNote}>Most engagements start with a minimum three-month term. Media spend and publisher fees are separate unless explicitly included. Sales follow-up and closing stay with you.</p>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Related services" title="Connect paid media to the rest of your growth system" />
          <div className={styles.relatedGrid}>{relatedServices.map(([need, label, href]) => <Link className={styles.relatedLink} href={href} key={need}><span>{need}</span><strong>{label}</strong><ArrowUpRight size={18} /></Link>)}</div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="FAQ" title="Frequently asked questions about B2B paid media agency services" />
          <div className={styles.faqList}>{faqs.map((faq, index) => <details className={styles.faqItem} key={faq.question} open={index === 0}><summary><span>{faq.question}</span><span className={styles.faqPlus}>+</span></summary><p>{faq.answer}</p></details>)}</div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalGlow} aria-hidden="true" />
        <div className={styles.shell}><div className={styles.ctaInner}>
          <p className={styles.eyebrow}>Build what connects to pipeline</p>
          <h2>Build a paid media system that connects to real pipeline.</h2>
          <p>Your campaigns are active, but lead quality, channel coordination, or pipeline visibility is inconsistent. That&apos;s the gap this service closes.</p>
          <p>A strategy call covers your current channels, tracking, and the gaps with the most leverage. You&apos;ll get an honest fit assessment and, where it makes sense, a proposal built around what matters most.</p>
          <Link className={styles.primaryButton} href="/contact-form">Book a Strategy Call <ArrowUpRight size={18} /></Link>
          <span className={styles.proofLine}>60+ brands across B2B tech, fintech, and SaaS since 2019.</span>
        </div></div>
      </section>
    </main>
  );
}
