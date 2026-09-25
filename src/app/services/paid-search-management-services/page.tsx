import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, X } from "lucide-react";
import styles from "../b2b-lead-generation-services/page.module.css";
import local from "./page.module.css";

const path = "/services/paid-search-management-services";
const title = "Paid Search Management Services for B2B | Stratskye";
const description = "Paid search management services for B2B campaigns built around query intent, conversion tracking and qualified demand. Book a strategy call with Stratskye.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: "website", images: [{ url: "/images/services/paid-search-management/paid-search-planning.png", width: 1122, height: 1402, alt: "B2B paid search team reviewing campaign intent and conversion data" }] },
};

const decisionPoints = [
  ["Best for", "B2B teams with a defined offer, real search demand, a working landing page, and budget approved to test or run search ads"],
  ["We handle", "Campaign planning, account structure, keyword and query control, ad management, bidding, tracking, and reporting"],
  ["You provide", "Offer and buyer context, account access, approved spend, sales feedback on lead quality, and timely approvals"],
  ["Platforms", "Confirmed for your account and market once discovery is complete"],
  ["Timeline", "Discovery and tracking review, then build or remediation, launch, and ongoing optimization"],
  ["Pricing", "Management fee only, separate from ad spend and platform costs unless stated otherwise"],
  ["Problem solved", "Search spend disconnected from buyer intent, reliable tracking, or usable lead quality"],
];
const gaps = [
  ["Intent mismatch", "Budget reaches informational, consumer, or employment searches unlikely to become B2B demand."],
  ["Weak query control", "Search terms go unreviewed while broad matching expands into irrelevant territory."],
  ["Blended campaign structure", "Brand, non-brand, and product demand share one average that hides different economics."],
  ["Ad-to-page mismatch", "The search result, ad, and landing page make different promises at the moment a buyer decides to act."],
  ["Unreliable conversions", "Page views, duplicate submissions, or spam are counted as meaningful outcomes."],
  ["Budget diffusion", "Spend is spread across too many campaigns to produce evidence for a sound decision."],
  ["Missing sales feedback", "Optimization stays focused on platform conversions because lead-quality signals never reach the account."],
];
const deliverables = [
  ["Discovery and baseline", "Captures the offer, audience, account condition, and starting measures."],
  ["Intent and keyword framework", "Maps priority query themes and a suitable match approach."],
  ["Campaign structure", "Separates activity by objective, market, and budget."],
  ["Ads and platform assets", "Develops approved search ads and assets within platform and brand requirements."],
  ["Conversion measurement plan", "Defines primary actions, validation rules, and attribution assumptions."],
  ["Landing-page recommendations", "Flags message, form, and tracking gaps that may limit performance."],
  ["Launch and QA record", "Checks settings, budgets, destinations, tracking, and launch conditions."],
  ["Reporting log", "Records performance, tests, decisions, and next actions."],
];
const fitFor = [
  "A defined offer, relevant search demand, and approved budget",
  "A usable landing path and sales follow-up owner",
  "Capacity to support a test or ongoing program",
  "Clearly defined target accounts or buyer segments",
];
const notFit = [
  "An unclear offer or no access to tracking",
  "No one available to evaluate lead quality",
  "An expectation of guaranteed ranking or lead volume",
  "An expectation of unlimited creative production within campaign management",
];
const reasons = [
  ["B2B intent discipline", "Commercial searches are separated from research, consumer, and other demand that will not fit your offer."],
  ["Offer-to-query alignment", "Keywords, ads, landing pages, and sales follow-up connect to the same buyer decision."],
  ["Measurement before optimization", "Conversion actions are defined and tracking validated before platform numbers guide decisions."],
  ["Lead-quality feedback", "CRM stages or sales feedback, where available, distinguish conversion volume from usable demand."],
  ["Controlled account management", "Changes, tests, budgets, and the reasoning behind next actions are documented."],
];
const process = [
  ["Diagnose", "Review the offer, search demand, current structure, spend, and tracking."],
  ["Define intent and measurement", "Agree priority queries, conversion actions, and budget guardrails."],
  ["Build or restructure", "Create campaign architecture, keywords, ads, and landing-page routes."],
  ["Validate before launch", "Test destinations, conversion events, and targeting."],
  ["Launch and control", "Monitor delivery, spend, and conversion integrity."],
  ["Optimize and report", "Refine queries, bids, and budgets using sufficient evidence."],
];
const cadence = [
  ["Days 1 to 30", "Discovery, campaign plan, and launch readiness"],
  ["Days 31 to 60", "Controlled launch and conversion validation"],
  ["Days 61 to 90", "Evidence-based refinements"],
];
const inputs = [
  ["Offer and market priorities", "Determine which searches deserve budget"],
  ["Account and billing access", "Allow review and approved changes"],
  ["Analytics and conversion access", "Support validation and reporting"],
  ["Landing pages and forms", "Provide matching conversion destinations"],
  ["Compliance guidance", "Define approved claims"],
  ["CRM stages and sales feedback", "Distinguish volume from qualified leads"],
  ["Budget owner and reviewers", "Support spend control and approvals"],
];
const measurement = [
  ["Delivery and coverage", "Spend, impressions, clicks, and pacing"],
  ["Query and traffic quality", "Relevant search terms and brand versus non-brand mix"],
  ["Engagement and cost", "Click-through rate and cost per click"],
  ["Validated conversions", "Conversion rate, duplicates, and spam treatment"],
  ["Commercial quality, when trackable", "Qualified leads, pipeline, and return on ad spend under agreed CRM definitions"],
];
const costs = [
  ["Platforms and campaign breadth", "Number of accounts and campaign types."],
  ["Markets and languages", "Geographic coverage and budget distribution."],
  ["Account condition", "Tracking defects and rebuild effort."],
  ["Keyword and testing volume", "Search-term review and experiment rounds."],
  ["Measurement depth", "Conversion setup and CRM stage analysis."],
  ["Landing pages and creative", "Recommendations versus production work."],
  ["Reporting cadence", "Meeting frequency and stakeholder needs."],
];
const related = [
  ["A coordinated multichannel program", "B2B Paid Media Agency", "/services/b2b-paid-media-agency"],
  ["Paid social campaign management", "LinkedIn Ads Management Services", "/services/b2b-paid-media-agency"],
  ["A conversion-focused page", "Lead Generation Landing Pages", "/services/lead-generation-landing-pages"],
  ["Organic search visibility", "B2B SEO Services", "/services/b2b-seo-services"],
  ["Lead routing and nurture", "B2B Marketing Automation Services", "/services/b2b-marketing-automation-services"],
  ["Outbound acquisition", "B2B Lead Generation Services", "/services/b2b-lead-generation-services"],
];
const faqs = [
  ["What do paid search management services include?", "Discovery, planning, build or remediation, tracking review, query control, budget decisions, testing, reporting, and optimization within the agreed scope."],
  ["Which advertising platforms and campaign types do you manage?", "Supported platforms are confirmed for your audience, account, budget, and market during discovery rather than assumed from a generic list."],
  ["Can Stratskye take over an existing account or build a new one?", "Both paths are supported. Existing accounts are reviewed for baseline condition; new accounts follow an agreed discovery plan."],
  ["How do you select keywords and manage search terms?", "Selection follows buyer intent and an appropriate match approach, with exclusions built from periodically reviewed search-term data."],
  ["How do you track conversions and lead quality?", "Primary actions are defined and validated; duplicates and spam are identified rather than counted as wins. CRM feedback is used where available."],
  ["Are landing-page copy, design, and development included?", "Landing-page alignment recommendations are part of core scope. Design and production require a separate scope unless explicitly included."],
  ["How much advertising budget is needed?", "Budget depends on search demand, click costs, and sales economics. A specific recommendation follows account review."],
  ["How long does paid search take to produce reliable findings?", "Timing depends on setup complexity, conversion volume, and data quality. Expectations are set after tracking review."],
  ["How are management fees and media spend handled?", "The agency management fee is separate from platform ad spend, paid directly to the advertising platform. Other costs are itemized separately."],
];

function Intro({ eyebrow, title: heading, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className={styles.sectionIntro}><p className={styles.eyebrow}>{eyebrow}</p><h2>{heading}</h2>{copy && <p className={styles.sectionCopy}>{copy}</p>}</div>;
}
function Cta({ children = "Book a Strategy Call" }: { children?: React.ReactNode }) {
  return <Link className={styles.primaryButton} href="/contact-form">{children} <ArrowUpRight size={18} aria-hidden="true" /></Link>;
}
function DataTable({ rows }: { rows: string[][] }) {
  return <div className={styles.tableWrap}>{rows.map(([heading, text]) => <div className={styles.tableRow} key={heading}><strong>{heading}</strong><span>{text}</span></div>)}</div>;
}

export default function PaidSearchManagementServicesPage() {
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: "Paid Search Management Services for B2B Companies", serviceType: "B2B paid search management", description, url: `https://stratskye.com${path}`, provider: { "@id": "https://stratskye.com/#organization" }, areaServed: "Worldwide", audience: { "@type": "BusinessAudience", audienceType: "B2B companies" } },
    { "@type": "BreadcrumbList", itemListElement: [["Home", "/"], ["Services", "/services"], ["B2B Paid Media", "/services/b2b-paid-media-agency"], ["Paid Search Management", path]].map(([name, url], index) => ({ "@type": "ListItem", position: index + 1, name, item: `https://stratskye.com${url}` })) },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] };

  return <main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true"/><div className={styles.shell}>
      <nav className={local.breadcrumb} aria-label="Breadcrumb"><Link href="/services">Services</Link><span>/</span><Link href="/services/b2b-paid-media-agency">Paid Media</Link><span>/</span><span aria-current="page">Paid Search Management</span></nav>
      <div className={styles.heroGrid}><div><p className={styles.kicker}>Paid search · B2B demand</p><h1 className={local.title}>Paid Search Management Services <span>for B2B Companies</span></h1><p className={styles.lede}>A paid search account can post strong click volume and still send almost nothing worth calling to sales.</p><p className={local.heroCopy}>Stratskye builds campaigns around queries actual buyers search, controls match types and spend, validates conversion tracking, and keeps the path from ad to landing page to form consistent. Search spend becomes accountable to more than a busy dashboard.</p><div className={styles.heroActions}><Cta/></div></div>
      <div className={`${styles.heroVisual} ${local.heroVisual}`}><Image src="/images/services/paid-search-management/paid-search-planning.png" alt="B2B paid search specialists reviewing campaign intent and conversion signals" fill sizes="(max-width: 980px) 100vw, 44vw" className={styles.coverImage} preload/><div className={styles.visualOverlay}/></div></div>
    </div></section>
    <section className={styles.lightSection}><div className={styles.shell}><Intro eyebrow="The service" title="Connect search activity to usable B2B demand." copy="Paid search management covers planning, setup or restructuring, tracking review, day-to-day control, testing, reporting, and optimization. Work can include account structure, keywords, negatives, ads, bids, budgets, conversion actions, landing-page alignment, and reporting."/><p className={styles.supportingCopy}>Supported platforms and campaign types are confirmed for your account and offer. Your team supplies offer context, access, approved budget, conversion definitions, compliance review, and sales feedback.</p></div></section>
    <section className={styles.decisionSection}><div className={styles.shell}><div className={styles.decisionGrid}><div className={styles.stickyIntro}><p className={styles.eyebrow}>Quick decision</p><h2>Know what search spend should produce before you increase it.</h2><p>The account plan starts with buyer intent, a usable conversion path, and measurements your team can trust.</p></div><div className={styles.decisionList}>{decisionPoints.map(([label, value], index) => <div className={styles.decisionItem} key={label}><span className={styles.decisionNumber}>{String(index + 1).padStart(2, "0")}</span><span className={styles.decisionLabel}>{label}</span><strong>{value}</strong></div>)}</div></div></div></section>
    <section className={styles.inputSection}><div className={styles.shell}><Intro eyebrow="Where demand breaks" title="Why paid search may not produce qualified B2B demand." copy="Most accounts carry several of these gaps at once, making clicks and form fills a weak measure of commercial value."/><div className={local.gapGrid}>{gaps.map(([heading, text], index) => <article className={local.gapCard} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div><div className={local.inlineCta}><Cta>Discuss Your Paid Search Gaps</Cta></div></div></section>
    <section className={styles.servicesSection}><div className={styles.shell}><Intro eyebrow="What you receive" title="An account plan you can review and measure." copy="Account size, platforms, ad volume, and review cadence are confirmed in the proposal rather than assumed from a standard package."/><div className={local.deliverableList}>{deliverables.map(([heading, purpose], index) => <article className={local.deliverableRow} key={heading}><span className={local.deliverableNumber}>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{purpose}</p></div></article>)}</div></div></section>
    <section className={styles.fitSection}><div className={styles.shell}><Intro eyebrow="Fit check" title="Who paid search management services are for"/><div className={styles.fitGrid}><div className={`${styles.fitCard} ${styles.fitCardYes}`}><div className={styles.fitHeading}><Check size={22}/> Good fit</div><ul>{fitFor.map(item => <li key={item}>{item}</li>)}</ul></div><div className={`${styles.fitCard} ${styles.fitCardNo}`}><div className={styles.fitHeading}><X size={22}/> May not fit yet</div><ul>{notFit.map(item => <li key={item}>{item}</li>)}</ul></div></div></div></section>
    <section className={styles.whySection}><div className={styles.shell}><div className={styles.whyGrid}><div className={`${styles.whyVisual} ${local.researchVisual}`}><Image src="/images/services/paid-search-management/search-performance-review.png" alt="Search specialists reviewing query relevance and conversion performance" fill sizes="(max-width: 980px) 100vw, 42vw" className={styles.coverImage}/><div className={local.imageCaption}><span>From click to customer</span><strong>Intent → action → lead quality</strong></div></div><div><Intro eyebrow="Why Stratskye" title="Buyer intent and lead quality guide the account."/><div className={styles.reasonList}>{reasons.map(([heading, text], index) => <div className={styles.reasonItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></div>)}</div><div className={local.inlineCta}><Cta/></div></div></div></div></section>
    <section className={styles.processSection}><div className={styles.shell}><Intro eyebrow="The process" title="How Stratskye manages paid search campaigns" copy="Diagnosis of the account and market comes before settings change, so build decisions follow from available evidence."/><div className={styles.processGrid}>{process.map(([heading, text], index) => <article className={styles.processCard} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div><div className={styles.cadenceGrid}>{cadence.map(([period, focus]) => <div key={period}><strong>{period}</strong><span>{focus}</span></div>)}</div><div className={local.inputBlock}><h3>What we need from your team</h3><DataTable rows={inputs}/></div><div className={local.inlineCta}><Cta>Discuss Your Paid Search Plan</Cta></div></div></section>
    <section className={styles.measureSection}><div className={styles.shell}><Intro eyebrow="Measurement" title="Clicks show delivery, not buyer quality." copy="We agree the account, time period, budget, and conversion definitions before comparing results. Search-term relevance and validated conversions matter alongside spend and traffic."/><DataTable rows={measurement}/><p className={local.lightNote}>Commercial quality is assessed only when CRM definitions and attribution support it. Spam or duplicate form fills are not treated as qualified demand.</p><div className={local.inlineCta}><Cta>Discuss Your Measurement Plan</Cta></div></div></section>
    <section className={styles.costSection}><div className={styles.shell}><Intro eyebrow="Engagement scope" title="What affects paid search management pricing" copy="Management is scoped after reviewing your objective, account condition, and tracking. Media spend is paid directly to the advertising platform and remains separate from management fees unless the proposal says otherwise."/><div className={styles.costGrid}>{costs.map(([heading, text], index) => <div className={styles.costItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{heading}</strong><p>{text}</p></div></div>)}</div><p className={styles.costNote}>Landing-page development, CRM integration, and creative production are outside core scope unless specifically included.</p><div className={local.inlineCta}><Cta>Scope Your Paid Search Program</Cta></div></div></section>
    <section className={styles.relatedSection}><div className={styles.shell}><Intro eyebrow="The wider system" title="Connect paid search to the rest of B2B growth."/><div className={styles.relatedGrid}>{related.map(([need, label, href]) => <Link className={styles.relatedLink} href={href} key={need}><span>{need}</span><strong>{label}</strong><ArrowUpRight size={18}/></Link>)}</div></div></section>
    <section className={styles.faqSection}><div className={styles.shell}><Intro eyebrow="FAQ" title="Paid search management questions, answered."/><div className={styles.faqList}>{faqs.map(([question, answer], index) => <details className={styles.faqItem} key={question} open={index === 0}><summary><span>{question}</span><span className={styles.faqPlus} aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className={styles.finalCta}><div className={styles.finalGlow} aria-hidden="true"/><div className={styles.shell}><div className={styles.ctaInner}><p className={styles.eyebrow}>Make search spend accountable</p><h2>Make search spend answer to the buyers who matter.</h2><p>Paid search should connect relevant queries, credible conversion data, and a defined commercial follow-up path.</p><p>A strategy call covers your objectives, search demand, account condition, and the most likely next step.</p><Cta/></div></div></section>
  </main>;
}
