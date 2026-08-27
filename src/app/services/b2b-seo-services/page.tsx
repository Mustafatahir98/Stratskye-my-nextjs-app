import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  FileText,
  Globe2,
  Link2,
  MapPin,
  ScanSearch,
  Search,
  Target,
  X,
} from "lucide-react";
import styles from "../b2b-lead-generation-services/page.module.css";
import seoStyles from "./page.module.css";

const pageUrl = "/services/b2b-seo-services";
const heroImage = "/images/services/b2b-seo/buyer-intent-strategy-team.png";
const analysisImage = "/images/services/b2b-seo/technical-seo-analysis.png";

export const metadata: Metadata = {
  title: "B2B SEO Services for SaaS & Technology Companies | Stratskye",
  description:
    "Grow organic traffic with Stratskye's B2B SEO services, from technical and on-page SEO to buyer-intent content and link building. Book a strategy call.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "B2B SEO Services for SaaS & Technology Companies | Stratskye",
    description:
      "Build a connected B2B SEO system around commercial search intent, technical health, content authority, and qualified organic visibility.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: heroImage,
        width: 1694,
        height: 945,
        alt: "B2B SEO strategists mapping buyer intent and commercial search opportunities",
      },
    ],
  },
};

const decisionPoints = [
  ["Best for", "Live product, real customers, commercial search demand, weak organic visibility"],
  ["We handle", "Diagnosis, buyer-intent strategy, technical and content priorities, reporting"],
  ["You provide", "Website and analytics access, subject-matter expertise, CMS coordination"],
  ["Timeline", "Minimum three months, 30/60/90-day progression"],
  ["Communication", "One contact, weekly meetings, monthly reporting"],
  ["Pricing", "Scoped by site size, technical debt, and competition"],
  ["Problem solved", "A strong offer that the right buyers can't reliably find"],
];

const scopeRows = [
  ["Organic-search diagnosis and priority setting", "Full market research or customer interviews"],
  ["Buyer-intent, keyword, and competitor mapping", "Complete rebrand or new information architecture"],
  ["Technical and on-page SEO priorities", "Large website rebuilds or CMS replacement"],
  ["Selected content, authority, and reporting workstreams", "All eleven services by default, each is scoped"],
  ["Content briefs and approved implementation", "Unlimited content or guaranteed link placements"],
  ["Measurement and ongoing optimization", "CRM cleanup or custom attribution engineering"],
];

const subservices = [
  { number: "01", title: "Technical SEO Audit Services", role: "Finds the crawl, indexation, and performance issues quietly capping your visibility", icon: ScanSearch },
  { number: "02", title: "B2B Keyword Research Services", role: "Maps buyer-stage language and commercial queries by relevance, not just volume", icon: Search },
  { number: "03", title: "Competitor SEO Analysis Services", role: "Shows where competitors are winning and where the real gaps sit", icon: Target },
  { number: "04", title: "SEO Content Writing Services", role: "Expert-led content that answers real buyer questions across the journey", icon: FileText },
  { number: "05", title: "On-Page SEO Optimization Services", role: "Sharpens priority-page relevance, structure, and conversion paths", icon: Globe2 },
  { number: "06", title: "Link Building Services", role: "Builds relevant editorial authority that supports trust and rankings", icon: Link2 },
  { number: "07", title: "Answer Engine Optimization Services", role: "Structures content for AI-generated answers and featured responses", icon: Bot },
  { number: "08", title: "GEO SEO Services", role: "Builds generative-search readiness through entity clarity and evidence", icon: Globe2 },
  { number: "09", title: "Local SEO Services for B2B", role: "Strengthens visibility for companies with real offices or service areas", icon: MapPin },
  { number: "10", title: "SEO Reporting Services", role: "Connects rankings and traffic to conversions and commercial outcomes", icon: BarChart3 },
];

const fitFor = [
  "Sell a live B2B SaaS, AI, fintech, or complex offer",
  "Have real customers but inconsistent search visibility",
  "Have a longer buying journey with multiple stakeholders",
  "Can provide website access and technical implementation support",
  "Understand organic growth is cumulative, not immediate",
];

const notFit = [
  "The product isn't live or the offer is unvalidated",
  "The goal is bulk articles or a fixed backlink count",
  "You expect guaranteed rankings, AI citations, or revenue",
  "Nobody can provide access, approvals, or sales feedback",
  "There's no meaningful organic-search opportunity to validate",
];

const reasons = [
  { title: "Technical-market fluency", text: "Experience with complex B2B products means sharper buyer-language research and technical briefs that don't get lost in translation." },
  { title: "Buyer-journey SEO, not traffic-first SEO", text: "Keyword and content priorities get mapped to business relevance and buying stages, not raw search volume." },
  { title: "Strategy and execution stay connected", text: "Research, technical work, content, and reporting run through one coordinated team." },
  { title: "An integrated search system", text: "Technical health, content authority, and conversion paths reinforce each other instead of operating as disconnected deliverables." },
  { title: "Structured delivery", text: "30/60/90-day framework, one main contact, weekly updates, monthly reporting." },
  { title: "Real evidence", text: "60+ brands across B2B tech, fintech, and SaaS since 2019. Typical 2x reduction in sales-cycle length within six months." },
];

const clientInputs = [
  ["Product, market, and customer information", "Supports accurate commercial-intent mapping"],
  ["Sales materials and current messaging", "Reveals terminology prospects and sales actually use"],
  ["Search Console, GA4, and CRM access", "Supports diagnosis, tracking, and lead-stage review"],
  ["CMS, hosting, and technical contacts", "Clarifies implementation ownership"],
  ["Priority markets and lost-deal examples", "Helps define demand and qualification boundaries"],
  ["Subject-matter expert access", "Enables credible, technically accurate content"],
  ["Timely feedback and approvals", "Protects the audit and publishing schedule"],
];

const processSteps = [
  ["Review", "Site condition, competition, and current search opportunity."],
  ["Align", "Buyer-intent mapping, priorities, and measurement plan."],
  ["Prioritize", "Technical, content, and authority work by impact."],
  ["Implement", "Approved changes within the agreed ownership model."],
  ["Measure", "Search and technical signals, then qualified-conversion feedback."],
  ["Optimize", "Refine based on sales feedback and what's actually moving."],
];

const cadence = [
  ["Days 1\u201330", "Audit, buyer-intent research, strategy, setup"],
  ["Days 31\u201360", "Technical and content implementation"],
  ["Days 61\u201390", "Measurement, lead-quality review, next priorities"],
];

const measurementRows = [
  ["Visibility", "Impressions, rankings, search-feature presence"],
  ["Traffic quality", "Priority-page visits, engaged sessions"],
  ["Technical health", "Crawlability, indexation, performance"],
  ["Conversion", "Qualified form fills, demo requests, subscriptions"],
  ["Lead quality", "Target industry, role, and buying-stage fit"],
  ["Pipeline", "Organic-assisted opportunities where data permits"],
];

const costFactors = [
  ["Website size and complexity", "More pages and templates require more mapping"],
  ["Technical debt and platform constraints", "Deeper technical work and development support"],
  ["Search competition and authority gap", "More content depth and time to close the gap"],
  ["Content and page volume", "More briefs, SME interviews, and publishing"],
  ["Implementation ownership", "Execution requires more resources than advisory alone"],
  ["AEO, GEO, or local-search scope", "Specialized entity and citation-focused work"],
];

const relatedServices = [
  ["Sharper positioning", "Brand and Positioning Strategy", "/services"],
  ["Broader multi-channel demand creation", "B2B Demand Generation Services", "/services/b2b-demand-generation-services"],
  ["Conversion paths and nurture", "Inbound Marketing Services", "/services"],
  ["Named-account targeting", "Account-Based Marketing", "/services"],
  ["Lead nurture", "Email Marketing", "/services"],
  ["Founder or executive visibility", "LinkedIn Marketing Services", "/services"],
  ["Expert authority development", "Thought Leadership Marketing", "/services/b2b-content-marketing-services"],
  ["Previous outcomes", "Work / Case Studies", "/work"],
  ["Delivery details", "Our Approach", "/our-approach"],
];

const faqs = [
  { question: "What do Stratskye's B2B SEO services include?", answer: "Diagnosis, buyer-intent strategy, technical and on-page priorities, selected content, authority, AI-search, local-search, and reporting workstreams. The exact mix gets scoped to your site and buyers." },
  { question: "How is B2B SEO different from general or B2C SEO?", answer: "B2B involves longer sales cycles, multiple stakeholders, and lower-volume but higher-value queries. Content needs to support technical validation and decision-making, and attribution depends heavily on CRM data rather than clicks alone." },
  { question: "Do we need every SEO service listed on this page?", answer: "No. We recommend the workstreams that match your site condition, competition, and internal capability." },
  { question: "Can Stratskye work with our in-house marketing or development team?", answer: "Yes, when responsibilities are clearly defined. We can lead strategy, provide briefs or technical tickets, and coordinate measurement while your team retains agreed ownership." },
  { question: "Will Stratskye implement the recommendations or only provide an audit?", answer: "Implementation ownership is defined in the scope. Content, on-page, and technical implementation can be included, while large website builds and complex engineering may remain separate." },
  { question: "How long does B2B SEO take to show results?", answer: "The first 30 days cover audit and strategy. Visibility and pipeline results after that depend on your starting position, implementation speed, competition, and sales cycle. There's no guaranteed timeline." },
  { question: "Is link building safe, and do you guarantee a backlink count?", answer: "Relevant, editorial authority building is the goal. We don't promise a fixed link count or ranking outcome." },
  { question: "How do you measure qualified organic traffic and pipeline contribution?", answer: "Qualified traffic is defined by target industry, role, and buying stage. The measurement chain runs from Search Console and GA4 through conversion events, lead-stage definitions, and CRM data where quality permits." },
  { question: "What affects the cost of an SEO engagement?", answer: "Website size, technical debt, competition, content volume, and implementation ownership. Pricing is scoped after diagnosis." },
  { question: "Does Stratskye guarantee rankings, leads, AI citations, or revenue?", answer: "No. We control research, prioritization, and execution within scope. Outcomes also depend on market demand, competition, and your sales process." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stratskye.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://stratskye.com/services" },
        { "@type": "ListItem", position: 3, name: "B2B SEO Services", item: `https://stratskye.com${pageUrl}` },
      ],
    },
    {
      "@type": "Service",
      "@id": `https://stratskye.com${pageUrl}#service`,
      name: "B2B SEO Services for SaaS and Technology Companies",
      serviceType: "B2B search engine optimization",
      url: `https://stratskye.com${pageUrl}`,
      provider: { "@id": "https://stratskye.com/#organization" },
      areaServed: "Worldwide",
      audience: { "@type": "BusinessAudience", audienceType: "B2B SaaS, AI, fintech, and technology companies" },
      description: "A connected B2B SEO system combining buyer-intent strategy, technical and on-page SEO, expert content, authority building, AI-search readiness, local search, reporting, and optimization.",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    },
  ],
};

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className={styles.sectionIntro}><p className={styles.eyebrow}>{eyebrow}</p><h2>{title}</h2>{copy ? <p className={styles.sectionCopy}>{copy}</p> : null}</div>;
}

function DataTable({ headings, rows }: { headings: [string, string]; rows: string[][] }) {
  return <div className={styles.tableWrap}><div className={`${styles.tableRow} ${styles.tableHead}`}><span>{headings[0]}</span><span>{headings[1]}</span></div>{rows.map(([first, second]) => <div className={styles.tableRow} key={first}><strong>{first}</strong><span>{second}</span></div>)}</div>;
}

export default function B2BSeoServicesPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.shell}><div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>B2B SEO services</p>
            <h1>The buyers who&apos;d actually convert are searching right now. <span>The question is whether they find you or your competitor first.</span></h1>
            <p className={styles.lede}>Stratskye builds B2B SEO strategy around buyer intent, not just keyword volume, prioritizing the technical, content, and authority work that gets qualified organic visibility in front of the people who actually make purchasing decisions.</p>
            <div className={styles.heroActions}>
              <div className={seoStyles.heroButtons}>
                <Link className={styles.primaryButton} href="/contact-form">Book a Strategy Call <ArrowUpRight size={18} /></Link>
                <Link className={`${styles.primaryButton} ${seoStyles.secondaryButton}`} href="/our-approach">See Our Approach <ArrowRight size={18} /></Link>
              </div>
              <span className={styles.proofLine}>60+ brands across B2B tech, fintech, and SaaS since 2019.</span>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image src={heroImage} alt="B2B SEO strategists mapping buyer intent and commercial search opportunities" fill sizes="(max-width: 900px) 100vw, 44vw" className={styles.coverImage} preload />
            <div className={styles.visualOverlay} />
            <div className={styles.pipelineCard}><div className={styles.pipelineTop}><span>Organic growth system</span><span className={styles.liveDot}>Intent-led</span></div><div className={styles.pipelineFlow}><span>Search</span><ArrowRight size={15} /><span>Authority</span><ArrowRight size={15} /><span>Pipeline</span></div></div>
          </div>
        </div></div>
      </section>

      <section className={styles.decisionSection}>
        <div className={styles.shell}><div className={styles.decisionGrid}>
          <div className={styles.stickyIntro}><p className={styles.eyebrow}>Quick decision</p><h2>Know what organic search needs to prove before chasing more traffic.</h2><p>The work starts with commercial opportunity, site condition, and how real buyers search—not a generic keyword list.</p></div>
          <div className={styles.decisionList}>{decisionPoints.map(([label, value], index) => <div className={styles.decisionItem} key={label}><span className={styles.decisionNumber}>{String(index + 1).padStart(2, "0")}</span><span className={styles.decisionLabel}>{label}</span><strong>{value}</strong></div>)}</div>
        </div></div>
      </section>

      <section className={styles.lightSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Connected scope" title="What our B2B SEO services can include" copy="Good B2B SEO isn't a checklist. Technical health, buyer-intent content, page-level optimization, and authority building all reinforce each other, and none of them work in isolation for long." />
          <p className={styles.supportingCopy}>What actually gets prioritized depends on your site&apos;s current condition, the competition you&apos;re up against, and how your buyers search before they ever talk to sales. Stratskye scopes the mix, then runs it as one connected system.</p>
          <DataTable headings={["Included", "Separate scope"]} rows={scopeRows} />
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="SEO workstreams" title="B2B SEO services we provide" copy="Not every engagement uses all of these. Stratskye scopes what your site and buyers actually need." />
          <div className={styles.serviceGrid}>{subservices.map((service) => { const Icon = service.icon; return <article className={styles.serviceCard} key={service.title}><div className={styles.serviceCardTop}><span>{service.number}</span><Icon size={24} strokeWidth={1.6} /></div><h3>{service.title}</h3><p>{service.role}</p><Link href="/contact-form">Explore {service.title} <ArrowUpRight size={17} /></Link></article>; })}</div>
        </div>
      </section>

      <section className={styles.fitSection}>
        <div className={styles.shell}><SectionIntro eyebrow="Fit check" title="Is Stratskye the right B2B SEO partner for your company?" /><div className={styles.fitGrid}><div className={`${styles.fitCard} ${styles.fitCardYes}`}><div className={styles.fitHeading}><Check size={22} /> This service is for companies that</div><ul>{fitFor.map((item) => <li key={item}>{item}</li>)}</ul></div><div className={`${styles.fitCard} ${styles.fitCardNo}`}><div className={styles.fitHeading}><X size={22} /> This may not be the right fit if</div><ul>{notFit.map((item) => <li key={item}>{item}</li>)}</ul></div></div></div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.shell}><div className={styles.whyGrid}>
          <div className={styles.whyVisual}><Image src={analysisImage} alt="SEO specialists reviewing technical site architecture, content clusters, and organic conversion signals" fill sizes="(max-width: 900px) 100vw, 42vw" className={styles.coverImage} /><div className={styles.metricFloat}><span>Typical client outcome</span><strong>2x</strong><p>reduction in sales-cycle length within six months</p></div></div>
          <div><SectionIntro eyebrow="Why Stratskye" title="Why B2B technology companies choose Stratskye for SEO" /><div className={styles.reasonList}>{reasons.map((reason, index) => <div className={styles.reasonItem} key={reason.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{reason.title}</h3><p>{reason.text}</p></div></div>)}</div><div className={styles.evidenceBar}><div><strong>60+</strong><span>brands since 2019</span></div><div><strong>30/60/90</strong><span>structured delivery</span></div></div></div>
        </div></div>
      </section>

      <section className={styles.inputSection}>
        <div className={styles.shell}><SectionIntro eyebrow="Shared inputs" title="What we need from your team to build the right SEO system" copy="Stratskye researches, plans, and implements within the agreed ownership model. Product accuracy, internal development outside scope, and sales follow-up stay with you unless a separate scope says otherwise." /><DataTable headings={["Client input", "Why it matters"]} rows={clientInputs} /></div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.shell}><SectionIntro eyebrow="The process" title="How Stratskye builds a B2B SEO growth system" copy="We research before we recommend, and buyer intent gets prioritized ahead of raw search volume every time." /><div className={styles.processGrid}>{processSteps.map(([title, text], index) => <article className={styles.processCard} key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><div className={styles.cadenceGrid}>{cadence.map(([period, focus]) => <div key={period}><strong>{period}</strong><span>{focus}</span></div>)}</div></div>
      </section>

      <section className={styles.measureSection}>
        <div className={styles.shell}><div className={styles.measureGrid}>
          <div><SectionIntro eyebrow="Measurement" title="How we measure B2B SEO progress" /><p className={styles.sectionCopy}>Impressions and rankings tell you whether you&apos;re showing up. Traffic quality tells you whether the right people are landing on the right pages. Neither one tells you whether SEO is actually contributing to the pipeline, which is a separate question that depends on conversion tracking and CRM feedback working properly together.</p><p className={styles.sectionCopy}>Results depend on tracking accuracy, implementation speed, competition, and sales-cycle length. SEO alone doesn&apos;t control rankings, AI citations, or revenue.</p><div className={styles.caseNote}><BarChart3 size={24} /><p>For one Stratskye client in B2B technology, a coordinated SEO and marketing engagement contributed to a roughly <strong>2x reduction in sales-cycle length</strong> within the first six months, measured against the pre-engagement baseline.</p></div></div>
          <DataTable headings={["Measurement layer", "Examples"]} rows={measurementRows} />
        </div></div>
      </section>

      <section className={styles.costSection}>
        <div className={styles.shell}><SectionIntro eyebrow="Investment" title="What affects the cost of B2B SEO services" copy="A ten-page site with light competition and a five-hundred-page enterprise platform with heavy technical debt need very different levels of work, so pricing follows diagnosis rather than a flat rate." /><div className={styles.costGrid}>{costFactors.map(([factor, reason], index) => <div className={styles.costItem} key={factor}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{factor}</strong><p>{reason}</p></div></div>)}</div><p className={styles.costNote}>Most engagements start with a minimum three-month term. Development and paid publisher fees are typically separate. Sales follow-up and closing stay with you.</p></div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.shell}><SectionIntro eyebrow="Related services" title="Connect organic search to the rest of your growth system" /><div className={styles.relatedGrid}>{relatedServices.map(([need, label, href]) => <Link className={styles.relatedLink} href={href} key={need}><span>{need}</span><strong>{label}</strong><ArrowUpRight size={18} /></Link>)}</div></div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.shell}><SectionIntro eyebrow="FAQ" title="Frequently asked questions about B2B SEO services" /><div className={styles.faqList}>{faqs.map((faq, index) => <details className={styles.faqItem} key={faq.question} open={index === 0}><summary><span>{faq.question}</span><span className={styles.faqPlus}>+</span></summary><p>{faq.answer}</p></details>)}</div></div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalGlow} aria-hidden="true" />
        <div className={styles.shell}><div className={styles.ctaInner}><p className={styles.eyebrow}>Build qualified organic visibility</p><h2>Get found by the buyers who&apos;d actually convert.</h2><p>Your product is strong, but the right buyers don&apos;t consistently discover you through organic search. That&apos;s the gap this service closes.</p><p>A strategy call covers your current visibility, technical health, and the priorities with the most leverage. You&apos;ll get an honest fit assessment and, where it makes sense, a proposal built around what matters most.</p><Link className={styles.primaryButton} href="/contact-form">Book a Strategy Call <ArrowUpRight size={18} /></Link><span className={styles.proofLine}>60+ brands across B2B tech, fintech, and SaaS since 2019.</span></div></div>
      </section>
    </main>
  );
}
