import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpenText,
  Check,
  Clapperboard,
  FileChartColumn,
  FileText,
  Mail,
  MessagesSquare,
  Newspaper,
  PenTool,
  Search,
  Share2,
  X,
} from "lucide-react";
import styles from "../b2b-lead-generation-services/page.module.css";

const pageUrl = "/services/b2b-content-marketing-services";
const heroImage = "/images/services/b2b-content-marketing/content-strategy-workshop.png";

export const metadata: Metadata = {
  title: "B2B Content Marketing Services for SaaS & Tech | Stratskye",
  description:
    "B2B content marketing services for SaaS and technology companies, connecting expert insight, SEO, editorial production, distribution, and measurement.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "B2B Content Marketing Services for SaaS & Tech | Stratskye",
    description:
      "Turn subject-matter expertise into a coordinated content system built for authority, discovery, and sales enablement.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: heroImage,
        width: 1792,
        height: 887,
        alt: "B2B technology experts planning a coordinated content marketing system",
      },
    ],
  },
};

const decisionPoints = [
  ["Best for", "Live product, real customers, complex subject matter"],
  ["We handle", "Strategy, selected formats, editorial coordination, measurement"],
  ["You provide", "SME access, customer proof, approvals"],
  ["Timeline", "Minimum three months, 30/60/90-day cadence"],
  ["Communication", "One contact, weekly meetings, monthly reporting"],
  ["Pricing", "Scoped by format, volume, and complexity"],
  ["Problem solved", "Expertise that never becomes usable content"],
];

const scopeRows = [
  ["Content diagnosis and strategy", "Original market research or rebranding"],
  ["ICP and topic alignment", "Large-scale customer research"],
  ["Editorial planning and SME interviews", "Unscheduled expert access"],
  ["Selected child-service workstreams", "All eleven services by default"],
  ["Editing and fact-checking", "Legal or regulatory review"],
  ["Distribution direction", "Paid amplification or PR outreach"],
  ["Measurement and optimization", "CRM cleanup or custom attribution"],
];

const subservices = [
  { number: "01", title: "B2B Content Strategy Services", role: "Defines audience, topics, and the plan behind the system", icon: PenTool },
  { number: "02", title: "B2B SEO Content Writing Services", role: "Intent-led pages that improve organic discovery", icon: Search },
  { number: "03", title: "White Paper Writing Services", role: "Long-form assets that build authority", icon: FileText },
  { number: "04", title: "B2B Case Study Writing Services", role: "Customer evidence that supports sales conversations", icon: MessagesSquare },
  { number: "05", title: "B2B Ebook Creation Services", role: "Long-form assets for lead capture and nurture", icon: BookOpenText },
  { number: "06", title: "Thought Leadership Content Writing", role: "Executive expertise turned into authority content", icon: Newspaper },
  { number: "07", title: "LinkedIn Content Creation Services", role: "Consistent founder and company visibility", icon: Share2 },
  { number: "08", title: "B2B Video Content Production", role: "Product knowledge turned into reusable video", icon: Clapperboard },
  { number: "09", title: "B2B Infographic Design Services", role: "Complex data turned into clear visuals", icon: FileChartColumn },
  { number: "10", title: "B2B Newsletter Writing Services", role: "Recurring communication that sustains relationships", icon: Mail },
  { number: "11", title: "B2B Content Distribution Services", role: "Gets approved assets actively used, not just published", icon: Share2 },
];

const fitFor = [
  "Sell a live B2B tech, SaaS, AI, or fintech offer",
  "Have real customers but inconsistent authority",
  "Need multiple formats coordinated together",
  "Have expert access for interviews and review",
  "Can support a three-month starting period",
];

const notFit = [
  "The product isn't live or validated",
  "You want the cheapest bulk article volume",
  "You expect us to invent expertise or evidence",
  "No one can approve factual claims",
  "You expect guaranteed rankings or revenue",
];

const reasons = [
  { title: "Technical-market understanding", text: "Complex-product experience shapes sharper interview questions and briefs, so content reads as credible to technical buyers." },
  { title: "Strategy and execution stay connected", text: "Research, production, distribution, and measurement run under one team." },
  { title: "Expertise becomes usable content", text: "A structured path moves every useful insight from SME interview through review and approval." },
  { title: "Multiple formats, one system", text: "A white paper, case study, and LinkedIn post support different buyer moments instead of duplicating one another." },
  { title: "Structured delivery", text: "A 30/60/90-day framework, one main contact, weekly updates, and monthly reporting keep work moving." },
];

const clientInputs = [
  ["Product and customer information", "Accurate audience alignment and terminology"],
  ["Existing messaging and sales materials", "Shows the current narrative and proof"],
  ["Content inventory and performance data", "Supports the audit and topic-gap analysis"],
  ["Subject-matter expert access", "Enables credible content across formats"],
  ["Customer permissions and results", "Keeps case studies accurate and publishable"],
  ["Brand and compliance guidance", "Reduces rework in regulated categories"],
  ["Timely feedback and approvals", "Protects the production calendar"],
];

const processSteps = [
  ["Review", "Product, buyers, existing content, and search visibility."],
  ["Align", "ICP, buyer-journey gaps, goals, and approval rules."],
  ["Plan", "Topics, formats, editorial calendar, and SME interviews."],
  ["Create", "Draft, design, fact-check, and approve."],
  ["Publish and distribute", "Activate channels and collect early signals."],
  ["Evaluate and optimize", "Review performance and improve the next cycle."],
];

const cadence = [
  ["Days 1–30", "Audit, alignment, strategy, editorial setup"],
  ["Days 31–60", "SME interviews, production, publishing"],
  ["Days 61–90", "Performance review, optimization, next stage"],
];

const measurementRows = [
  ["Delivery", "Brief completion, publication rate"],
  ["Visibility", "Organic impressions, rankings, backlinks"],
  ["Engagement", "Time on page, downloads, video completion"],
  ["Conversion", "Downloads, subscriptions, demo requests"],
  ["Sales enablement", "Asset usage by sales, objection coverage"],
  ["Pipeline influence", "Content-assisted opportunities"],
];

const costFactors = [
  ["Strategy and audit depth", "More discovery and journey mapping"],
  ["Formats and production volume", "More briefs, writing, design, and approvals"],
  ["Technical complexity", "More SME time and fact-checking"],
  ["Video production scope", "Scripting, filming, and editing"],
  ["Distribution and amplification", "Channel planning and paid promotion"],
];

const relatedServices = [
  ["Sharper positioning", "Brand and Positioning Strategy", "/services"],
  ["Broader demand system", "B2B Demand Generation Services", "/services/b2b-demand-generation-services"],
  ["Organic discovery beyond content", "Inbound Marketing Services", "/services"],
  ["Named-account content", "Account-Based Marketing", "/services"],
  ["Lifecycle nurture", "Email Marketing", "/services"],
  ["Broader LinkedIn strategy", "LinkedIn Marketing Services", "/services"],
  ["Pipeline capture", "B2B Lead Generation Services", "/services/b2b-lead-generation-services"],
  ["Previous outcomes", "Work / Case Studies", "/work"],
  ["Delivery details", "Our Approach", "/our-approach"],
];

const faqs = [
  { question: "What do Stratskye's B2B content marketing services include?", answer: "Diagnosis, strategy, selected formats, editorial coordination, distribution, and measurement across eleven services. The exact mix is scoped to your gaps." },
  { question: "Do we need every content service listed on this page?", answer: "No. We recommend the formats that match your buyers, gaps, distribution capacity, and budget." },
  { question: "How is this different from freelance writers or building in-house?", answer: "We coordinate strategy, SME workflow, multiple formats, and distribution under one team. A strong in-house team can still be the right call when strategy and delivery capacity already exist." },
  { question: "Can Stratskye create credible content for a technical product?", answer: "Yes, when approved source material and subject-matter expert access are available. We don't replace legal, regulatory, engineering, or product approval." },
  { question: "How much time will our subject-matter experts need to provide?", answer: "It depends on format and complexity. Focused interviews reduce friction, but credible expert input can't be eliminated." },
  { question: "Can Stratskye work with our existing content strategy or team?", answer: "Yes, when the foundation is usable. We can audit, fill gaps, and add capacity without replacing your team." },
  { question: "How long do onboarding and results take?", answer: "Most engagements follow a 30/60/90-day progression. Early assets can launch quickly, while visibility and pipeline influence depend on complexity and the buying cycle." },
  { question: "How is performance measured?", answer: "We separate production metrics from visibility, engagement, conversion, sales enablement, and pipeline influence, depending on analytics quality and the amount of published content." },
  { question: "What affects the cost of an engagement?", answer: "Strategy depth, formats, volume, technical complexity, and distribution needs. Pricing is scoped after diagnosis." },
  { question: "Does Stratskye use AI to create content?", answer: "AI may support research and workflow efficiency. Strategy, expert input, fact-checking, and final approval stay human-led." },
  { question: "Does Stratskye guarantee rankings, leads, or revenue?", answer: "No. We control strategy and execution. Outcomes also depend on your offer, competition, domain strength, distribution, and sales follow-up." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stratskye.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://stratskye.com/services" },
        { "@type": "ListItem", position: 3, name: "B2B Content Marketing Services", item: `https://stratskye.com${pageUrl}` },
      ],
    },
    {
      "@type": "Service",
      "@id": `https://stratskye.com${pageUrl}#service`,
      name: "B2B Content Marketing Services for SaaS and Technology Companies",
      serviceType: "B2B content marketing",
      url: `https://stratskye.com${pageUrl}`,
      provider: { "@id": "https://stratskye.com/#organization" },
      areaServed: "Worldwide",
      audience: { "@type": "BusinessAudience", audienceType: "B2B SaaS, AI, fintech, and technology companies" },
      description: "A coordinated B2B content marketing system connecting expert insight, search discovery, editorial production, distribution, sales enablement, measurement, and optimization.",
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
      <div className={`${styles.tableRow} ${styles.tableHead}`}><span>{headings[0]}</span><span>{headings[1]}</span></div>
      {rows.map(([first, second]) => (
        <div className={styles.tableRow} key={first}><strong>{first}</strong><span>{second}</span></div>
      ))}
    </div>
  );
}

export default function B2BContentMarketingServicesPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>B2B content marketing services</p>
              <h1>Your team knows more about this problem than almost anyone. <span>Most of that knowledge never makes it into anything a buyer reads.</span></h1>
              <p className={styles.lede}>Stratskye turns subject-matter expertise into a coordinated content system, built for authority, discovery, and content sales teams can actually use.</p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href="/contact-form">Book a Strategy Call <ArrowUpRight size={18} /></Link>
                <span className={styles.proofLine}>60+ brands across B2B tech, fintech, and SaaS since 2019.</span>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <Image src={heroImage} alt="B2B technology experts planning a coordinated content marketing system" fill sizes="(max-width: 900px) 100vw, 44vw" className={styles.coverImage} preload />
              <div className={styles.visualOverlay} />
              <div className={styles.pipelineCard}>
                <div className={styles.pipelineTop}><span>Content system</span><span className={styles.liveDot}>Connected</span></div>
                <div className={styles.pipelineFlow}><span>Expertise</span><ArrowRight size={15} /><span>Content</span><ArrowRight size={15} /><span>Demand</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.decisionSection}>
        <div className={styles.shell}><div className={styles.decisionGrid}>
          <div className={styles.stickyIntro}><p className={styles.eyebrow}>Quick decision</p><h2>Know what the engagement needs before adding another content format.</h2><p>The right scope begins with your authority and buyer-journey gaps, then builds the system around them.</p></div>
          <div className={styles.decisionList}>{decisionPoints.map(([label, value], index) => <div className={styles.decisionItem} key={label}><span className={styles.decisionNumber}>{String(index + 1).padStart(2, "0")}</span><span className={styles.decisionLabel}>{label}</span><strong>{value}</strong></div>)}</div>
        </div></div>
      </section>

      <section className={styles.lightSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Connected scope" title="What our B2B content marketing services can include" copy="Content works as a system, not a stack of assets. Strategy sets the audience and topics. Expertise gives it credibility. Distribution gets it seen. Measurement shows what's working." />
          <p className={styles.supportingCopy}>The right formats depend on your gaps, buyer journey, and distribution capacity. Stratskye scopes the mix, then coordinates it around one strategy.</p>
          <DataTable headings={["Included", "Separate scope"]} rows={scopeRows} />
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Content workstreams" title="B2B content marketing services we provide" copy="Not every engagement uses all eleven. Stratskye scopes what fits your gaps." />
          <div className={styles.serviceGrid}>{subservices.map((service, index) => { const Icon = service.icon; return <article className={`${styles.serviceCard} ${index === subservices.length - 1 ? styles.serviceCardWide : ""}`} key={service.title}><div className={styles.serviceCardTop}><span>{service.number}</span><Icon size={24} strokeWidth={1.6} /></div><h3>{service.title}</h3><p>{service.role}</p><Link href="/contact-form">Explore {service.title} <ArrowUpRight size={17} /></Link></article>; })}</div>
        </div>
      </section>

      <section className={styles.fitSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Fit check" title="Is Stratskye the right B2B content marketing partner for your company?" />
          <div className={styles.fitGrid}>
            <div className={`${styles.fitCard} ${styles.fitCardYes}`}><div className={styles.fitHeading}><Check size={22} /> This service is for companies that</div><ul>{fitFor.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className={`${styles.fitCard} ${styles.fitCardNo}`}><div className={styles.fitHeading}><X size={22} /> This may not be the right fit if</div><ul>{notFit.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.shell}><div className={styles.whyGrid}>
          <div className={styles.whyVisual}>
            <Image src="/images/services/content-thought-leadership 1.webp" alt="B2B technology content and thought leadership planning" fill sizes="(max-width: 900px) 100vw, 42vw" className={styles.coverImage} />
            <div className={styles.metricFloat}><span>Typical client outcome</span><strong>2×</strong><p>reduction in sales-cycle length within six months</p></div>
          </div>
          <div>
            <SectionIntro eyebrow="Why Stratskye" title="Why B2B technology companies choose Stratskye for content marketing" />
            <div className={styles.reasonList}>{reasons.map((reason, index) => <div className={styles.reasonItem} key={reason.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{reason.title}</h3><p>{reason.text}</p></div></div>)}</div>
            <div className={styles.evidenceBar}><div><strong>60+</strong><span>brands since 2019</span></div><div><strong>90%</strong><span>return or referral rate</span></div></div>
          </div>
        </div></div>
      </section>

      <section className={styles.inputSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Shared inputs" title="What we need from your team to build credible B2B content" copy="Stratskye researches, creates, and distributes the approved scope. Product accuracy, compliance approval, and sales follow-up stay with you. Credible expert content depends on access to real source material, not something we can invent." />
          <DataTable headings={["Client input", "Why it matters"]} rows={clientInputs} />
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="The process" title="How Stratskye builds a B2B content marketing system" copy="We research before we produce, so content gets built around one system, not isolated assets." />
          <div className={styles.processGrid}>{processSteps.map(([title, text], index) => <article className={styles.processCard} key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          <div className={styles.cadenceGrid}>{cadence.map(([period, focus]) => <div key={period}><strong>{period}</strong><span>{focus}</span></div>)}</div>
        </div>
      </section>

      <section className={styles.measureSection}>
        <div className={styles.shell}><div className={styles.measureGrid}>
          <div>
            <SectionIntro eyebrow="Measurement" title="How we measure B2B content marketing progress" />
            <p className={styles.sectionCopy}>Results depend on tracking, distribution, sales follow-up, and domain strength. We don&apos;t promise content alone controls rankings, pipeline, or revenue.</p>
            <div className={styles.caseNote}><BarChart3 size={24} /><p>For one Stratskye client in B2B technology, a coordinated engagement contributed to a roughly <strong>2× reduction in sales-cycle length</strong> within the first six months, measured against the pre-engagement baseline.</p></div>
          </div>
          <DataTable headings={["Measurement layer", "Examples"]} rows={measurementRows} />
        </div></div>
      </section>

      <section className={styles.costSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Investment" title="What affects the cost of B2B content marketing services" copy="Every engagement is scoped, not priced by word count. A single white paper and a full multi-format program need very different levels of work." />
          <div className={styles.costGrid}>{costFactors.map(([factor, reason], index) => <div className={styles.costItem} key={factor}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{factor}</strong><p>{reason}</p></div></div>)}</div>
          <p className={styles.costNote}>Most clients start with a minimum three-month engagement. Paid distribution and PR outreach are typically separate. Legal review requires separate scope. Sales follow-up stays with you.</p>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Related services" title="Connect content to the rest of your growth system" />
          <div className={styles.relatedGrid}>{relatedServices.map(([need, label, href]) => <Link className={styles.relatedLink} href={href} key={need}><span>{need}</span><strong>{label}</strong><ArrowUpRight size={18} /></Link>)}</div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="FAQ" title="Frequently asked questions about B2B content marketing services" />
          <div className={styles.faqList}>{faqs.map((faq, index) => <details className={styles.faqItem} key={faq.question} open={index === 0}><summary><span>{faq.question}</span><span className={styles.faqPlus}>+</span></summary><p>{faq.answer}</p></details>)}</div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalGlow} aria-hidden="true" />
        <div className={styles.shell}><div className={styles.ctaInner}>
          <p className={styles.eyebrow}>Build what sales can use</p>
          <h2>Build a content system your sales team can actually use.</h2>
          <p>Your company has real expertise. The content around it just isn&apos;t doing its job yet.</p>
          <p>A strategy call covers your buyers, existing content, and the gaps with the most leverage. You&apos;ll get an honest fit assessment and, where it makes sense, a proposal built around what matters most.</p>
          <Link className={styles.primaryButton} href="/contact-form">Book a Strategy Call <ArrowUpRight size={18} /></Link>
          <span className={styles.proofLine}>60+ brands across B2B tech, fintech, and SaaS since 2019.</span>
        </div></div>
      </section>
    </main>
  );
}
