import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, X } from "lucide-react";
import styles from "../b2b-lead-generation-services/page.module.css";
import local from "./page.module.css";

const path = "/services/linkedin-ads-management-services";
const title = "LinkedIn Ads Management Services for B2B | Stratskye";
const description = "LinkedIn ads management services for B2B audience targeting, campaign delivery and lead-quality measurement. Book a strategy call with Stratskye.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: "website", images: [{ url: "/images/services/linkedin-ads-management/audience-planning.png", width: 1122, height: 1402, alt: "B2B marketers planning buying committee audiences for LinkedIn ads" }] },
};

const decisionPoints = [
  ["Best for", "A defined offer, identifiable buying roles or accounts, approved budget, and a usable conversion path"],
  ["We handle", "Planning, audience design, campaign structure, ad setup, testing, budget management, and reporting"],
  ["You provide", "ICP context, account access, spend, offers, compliance guidance, sales feedback, and approvals"],
  ["Campaign options", "Confirmed once discovery reviews your account, offer, and market"],
  ["Timeline", "Discovery, build or remediation, launch, learning, and ongoing optimization"],
  ["Pricing", "Separate from LinkedIn spend, full creative production, and CRM costs unless stated otherwise"],
  ["Main problem solved", "LinkedIn spend disconnected from audience quality, offer, conversion path, or lead feedback"],
];
const gaps = [
  ["Audience mismatch", "Targeting runs too broad, too narrow, or depends on one weak job-title assumption rather than the buying committee."],
  ["Objective mismatch", "The campaign rewards activity that does not reflect the commercial action your team needs."],
  ["Weak offer-message fit", "An audience is asked for a high-commitment action before the relevance or proof is clear."],
  ["Creative fatigue", "Repeated assets and generic claims reduce engagement and limit useful learning."],
  ["Conversion friction", "The ad promise, form or landing page, and next step do not make one coherent path."],
  ["Unreliable measurement", "Duplicates or spam are treated as qualified outcomes, distorting campaign decisions."],
  ["Budget diffusion", "Spend is scattered across too many audiences or formats to support clear decisions."],
  ["Missing lead feedback", "CRM stages and sales input never return to the account, leaving optimization at platform-reported leads."],
];
const deliverables = [
  ["Discovery and baseline", "Captures the offer, buying roles, account condition, and starting measures."],
  ["Audience and targeting framework", "Maps priority roles, company attributes, approved sources, and exclusions."],
  ["Campaign structure", "Separates activity by objective, offer, market, and budget."],
  ["Creative testing plan", "Defines approved claims, hooks, formats, and calls to action."],
  ["Conversion measurement plan", "Defines primary actions, form or website paths, and attribution context."],
  ["Form or landing-page recommendations", "Flags message, field, privacy, and tracking gaps."],
  ["Launch and QA record", "Checks settings, destinations, budgets, and approvals."],
  ["Reporting and optimization log", "Records delivery, findings, tests, and next actions."],
];
const fitFor = [
  "A defined offer and buying roles, feasible audience, and approved budget",
  "A usable conversion path, creative and proof inputs, and sales follow-up",
  "Capacity for a controlled test or ongoing program",
  "Account access and timely approval capacity",
];
const notFit = [
  "An unclear offer or audience, or no tracking access",
  "No owner available to evaluate lead quality",
  "An expectation of guaranteed reach, leads, or meetings",
  "An expectation of unlimited creative production inside management scope",
];
const reasons = [
  ["Buying-committee discipline", "ICP, account priorities, functions, and seniority become a feasible audience plan rather than one job-title list."],
  ["Audience-to-offer alignment", "Targeting, offer, format, message, and sales follow-up connect to the same buyer decision."],
  ["Creative testing with purpose", "Each hook, message, and format tests a specific hypothesis about the audience."],
  ["Measurement before optimization", "Meaningful conversion actions are defined and tracking validated before platform numbers become business evidence."],
  ["Controlled campaign management", "Changes, tests, budgets, and the reasoning behind next actions are documented."],
];
const process = [
  ["Diagnose", "Review objectives, buying roles, current campaigns, spend, creative, tracking, and lead-quality data."],
  ["Define audience and measurement", "Agree audience logic, exclusions, conversion actions, budget guardrails, and privacy requirements."],
  ["Build or restructure", "Create campaign hierarchy, audience segments, ads, forms, settings, and a testing plan."],
  ["Validate before launch", "Check access, audience settings, asset specifications, and conversion events."],
  ["Launch and control", "Monitor delivery, spend, reach, and conversion integrity without overreading limited data."],
  ["Optimize and report", "Refine audiences, creative, budgets, and forms using sufficient evidence and downstream feedback."],
];
const cadence = [
  ["Days 1 to 30", "Discovery, audience framework, campaign build, and launch readiness"],
  ["Days 31 to 60", "Controlled launch, conversion validation, and early tests"],
  ["Days 61 to 90", "Evidence-based refinements using lead-quality feedback"],
];
const inputs = [
  ["Offer, ICP, and buying roles", "Determine who should see the campaign"],
  ["Ad account and Page access", "Enable review and approved changes"],
  ["Analytics and conversion access", "Support validation and reporting"],
  ["Creative inputs and brand assets", "Provide credible messages to test"],
  ["Form or landing-page ownership", "Provide the conversion path"],
  ["Compliance guidance", "Define approved claims and data use"],
  ["CRM stages and sales feedback", "Connect leads to account fit"],
  ["Budget owner and reviewers", "Support spend control and approvals"],
];
const measurement = [
  ["Delivery and coverage", "Spend, impressions, reach, frequency, and CPM"],
  ["Attention and engagement", "Clicks, click-through rate, and cost per click"],
  ["Validated conversions", "Form submissions, conversion rate, duplicates, and spam"],
  ["Audience and lead quality", "Job or company fit, accepted leads, and rejected leads"],
  ["Commercial quality, when trackable", "Target-account engagement, pipeline, and return on ad spend"],
];
const costs = [
  ["Accounts and campaign breadth", "Number of accounts, objectives, and offers."],
  ["Markets and audience feasibility", "Geographic coverage and audience size."],
  ["Account condition", "Access issues, tracking defects, and rebuild effort."],
  ["Creative and testing volume", "Format count, asset variants, and experiment rounds."],
  ["Forms and conversion paths", "Setup, field logic, and production versus recommendations."],
  ["Measurement depth", "Insight Tag setup, CRM feedback, and attribution."],
  ["Reporting cadence", "Meeting frequency, stakeholders, and creative reviews."],
];
const related = [
  ["A coordinated multichannel program", "B2B Paid Media Agency", "/services/b2b-paid-media-agency"],
  ["Search-demand capture", "Paid Search Management Services", "/services/paid-search-management-services"],
  ["Organic LinkedIn presence", "LinkedIn Marketing Services", "/services/linkedin-marketing-services"],
  ["A conversion-focused page", "Lead Generation Landing Pages", "/services/lead-generation-landing-pages"],
  ["Lead routing and nurture", "B2B Marketing Automation Services", "/services/b2b-marketing-automation-services"],
  ["Outbound acquisition", "B2B Lead Generation Services", "/services/b2b-lead-generation-services"],
];
const faqs = [
  ["What do LinkedIn ads management services include?", "Discovery, audience and offer planning, campaign build or remediation, creative and form setup within scope, tracking review, budget decisions, testing, reporting, and optimization."],
  ["Which LinkedIn objectives, audiences, and ad formats do you manage?", "Capabilities are confirmed for the specific audience, offer, account, budget, and market during discovery."],
  ["Can Stratskye take over an existing ad account or build a new one?", "Both paths are supported. Existing accounts are reviewed for their baseline condition; new accounts follow the agreed discovery plan."],
  ["How do you build and test LinkedIn audiences?", "Audience logic follows ICP, buying roles, and company attributes, using approved matched data where relevant. Refinements follow sufficient evidence."],
  ["Do you create ad copy, design, video, document, and other assets?", "Creative direction and message testing are part of core scope. Full production requires a separate scope and confirmed client inputs."],
  ["Do you use LinkedIn Lead Gen Forms or website landing pages?", "The choice depends on the offer, information required, tracking needs, and sales follow-up process."],
  ["How do you track conversions and lead quality?", "Platform conversions or website events are validated; duplicates and spam are excluded from useful outcomes. CRM or sales feedback is used where available."],
  ["How much advertising budget is needed?", "Budget depends on audience scale, auction costs, markets, and sales economics. A specific recommendation follows account review."],
  ["How are management fees, media spend, and creative production handled?", "The agency fee is separate from platform ad spend paid directly to LinkedIn. Creative production and adjacent costs are itemized separately."],
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

export default function LinkedInAdsManagementServicesPage() {
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: "LinkedIn Ads Management Services for B2B Companies", serviceType: "B2B LinkedIn ads management", description, url: `https://stratskye.com${path}`, provider: { "@id": "https://stratskye.com/#organization" }, areaServed: "Worldwide", audience: { "@type": "BusinessAudience", audienceType: "B2B companies" } },
    { "@type": "BreadcrumbList", itemListElement: [["Home", "/"], ["Services", "/services"], ["B2B Paid Media", "/services/b2b-paid-media-agency"], ["LinkedIn Ads Management", path]].map(([name, url], index) => ({ "@type": "ListItem", position: index + 1, name, item: `https://stratskye.com${url}` })) },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] };

  return <main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true"/><div className={styles.shell}>
      <nav className={local.breadcrumb} aria-label="Breadcrumb"><Link href="/services">Services</Link><span>/</span><Link href="/services/b2b-paid-media-agency">Paid Media</Link><span>/</span><span aria-current="page">LinkedIn Ads Management</span></nav>
      <div className={styles.heroGrid}><div><p className={styles.kicker}>LinkedIn ads · B2B demand</p><h1 className={local.title}>LinkedIn Ads Management Services <span>for B2B Companies</span></h1><p className={styles.lede}>Reach on LinkedIn is easy to buy. Reaching the specific people who influence a B2B purchase is harder.</p><p className={local.heroCopy}>Stratskye builds campaigns around buying roles and account priorities, tests creative with a purpose, validates conversion paths, and uses commercial feedback when the data supports it.</p><div className={styles.heroActions}><Cta/></div></div>
      <div className={`${styles.heroVisual} ${local.heroVisual}`}><Image src="/images/services/linkedin-ads-management/audience-planning.png" alt="B2B marketers planning buying committee audiences for paid LinkedIn campaigns" fill sizes="(max-width: 980px) 100vw, 44vw" className={styles.coverImage} preload/><div className={styles.visualOverlay}/></div></div>
    </div></section>
    <section className={styles.lightSection}><div className={styles.shell}><Intro eyebrow="The service" title="Professional audience access with a commercial purpose." copy="LinkedIn ads management covers planning, setup or restructuring, audience development, campaign and ad management, tracking review, testing, reporting, and optimization. Work can include objectives, criteria, exclusions, approved Matched Audiences, formats, offers, Lead Gen Forms or landing pages, bids, budgets, and conversion actions."/><p className={styles.supportingCopy}>Supported options are confirmed for your account and market. Your team provides ICP context, access, budget, creative inputs, compliance guidance, conversion definitions, and sales feedback.</p></div></section>
    <section className={styles.decisionSection}><div className={styles.shell}><div className={styles.decisionGrid}><div className={styles.stickyIntro}><p className={styles.eyebrow}>Quick decision</p><h2>Start with the people and decision you need to influence.</h2><p>The campaign plan connects roles, offer, conversion path, spend, and a way to evaluate lead quality.</p></div><div className={styles.decisionList}>{decisionPoints.map(([label, value], index) => <div className={styles.decisionItem} key={label}><span className={styles.decisionNumber}>{String(index + 1).padStart(2, "0")}</span><span className={styles.decisionLabel}>{label}</span><strong>{value}</strong></div>)}</div></div></div></section>
    <section className={styles.inputSection}><div className={styles.shell}><Intro eyebrow="Where demand breaks" title="Why LinkedIn ads may not create qualified B2B demand." copy="Impressions, clicks, and forms can all rise while the campaign still misses the people or next action that matter."/><div className={local.gapGrid}>{gaps.map(([heading, text], index) => <article className={local.gapCard} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div><div className={local.inlineCta}><Cta>Discuss Your LinkedIn Ads Gaps</Cta></div></div></section>
    <section className={styles.servicesSection}><div className={styles.shell}><Intro eyebrow="What you receive" title="A reviewable plan for audience, creative, conversion, and learning." copy="Accounts, markets, formats, asset volume, and review cadence are confirmed in the proposal rather than assumed from a standard package."/><div className={local.deliverableList}>{deliverables.map(([heading, purpose], index) => <article className={local.deliverableRow} key={heading}><span className={local.deliverableNumber}>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{purpose}</p></div></article>)}</div></div></section>
    <section className={styles.fitSection}><div className={styles.shell}><Intro eyebrow="Fit check" title="Who LinkedIn ads management services are for"/><div className={styles.fitGrid}><div className={`${styles.fitCard} ${styles.fitCardYes}`}><div className={styles.fitHeading}><Check size={22}/> Good fit</div><ul>{fitFor.map(item => <li key={item}>{item}</li>)}</ul></div><div className={`${styles.fitCard} ${styles.fitCardNo}`}><div className={styles.fitHeading}><X size={22}/> May not fit yet</div><ul>{notFit.map(item => <li key={item}>{item}</li>)}</ul></div></div></div></section>
    <section className={styles.whySection}><div className={styles.shell}><div className={styles.whyGrid}><div className={`${styles.whyVisual} ${local.researchVisual}`}><Image src="/images/services/linkedin-ads-management/campaign-review.png" alt="Marketing specialists reviewing campaign creative and lead quality" fill sizes="(max-width: 980px) 100vw, 42vw" className={styles.coverImage}/><div className={local.imageCaption}><span>Audience-led campaigns</span><strong>Roles → message → lead quality</strong></div></div><div><Intro eyebrow="Why Stratskye" title="Buying-committee thinking behind every campaign."/><div className={styles.reasonList}>{reasons.map(([heading, text], index) => <div className={styles.reasonItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></div>)}</div><div className={local.inlineCta}><Cta/></div></div></div></div></section>
    <section className={styles.processSection}><div className={styles.shell}><Intro eyebrow="The process" title="How Stratskye manages LinkedIn ad campaigns" copy="Diagnosis of the offer, audience, and account comes before a setting changes, so campaign decisions follow available evidence."/><div className={styles.processGrid}>{process.map(([heading, text], index) => <article className={styles.processCard} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div><div className={styles.cadenceGrid}>{cadence.map(([period, focus]) => <div key={period}><strong>{period}</strong><span>{focus}</span></div>)}</div><div className={local.inputBlock}><h3>What we need from your team</h3><DataTable rows={inputs}/></div><div className={local.inlineCta}><Cta>Discuss Your LinkedIn Ads Plan</Cta></div></div></section>
    <section className={styles.measureSection}><div className={styles.shell}><Intro eyebrow="Measurement" title="Reach tells you who saw the ad, not who is ready to buy." copy="We agree the account, audience, period, budget, and conversion definitions before comparison. Delivery, attention, validated conversions, and lead quality each answer a different question."/><DataTable rows={measurement}/><p className={local.lightNote}>Commercial quality is reported only when CRM definitions, attribution, and data completeness support it. Duplicate or spam submissions are not counted as useful demand.</p><div className={local.inlineCta}><Cta>Discuss Your Measurement Plan</Cta></div></div></section>
    <section className={styles.costSection}><div className={styles.shell}><Intro eyebrow="Engagement scope" title="What affects LinkedIn ads management pricing" copy="Management is scoped after reviewing the objective, markets, account condition, and conversion path. Media spend is paid directly to LinkedIn and remains separate from the agency fee unless the proposal says otherwise."/><div className={styles.costGrid}>{costs.map(([heading, text], index) => <div className={styles.costItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{heading}</strong><p>{text}</p></div></div>)}</div><p className={styles.costNote}>Full creative production, landing-page development, CRM integration, and list procurement are outside core scope unless specifically included.</p><div className={local.inlineCta}><Cta>Scope Your LinkedIn Ads Program</Cta></div></div></section>
    <section className={styles.relatedSection}><div className={styles.shell}><Intro eyebrow="The wider system" title="Connect LinkedIn ads to the rest of B2B growth."/><div className={styles.relatedGrid}>{related.map(([need, label, href]) => <Link className={styles.relatedLink} href={href} key={need}><span>{need}</span><strong>{label}</strong><ArrowUpRight size={18}/></Link>)}</div></div></section>
    <section className={styles.faqSection}><div className={styles.shell}><Intro eyebrow="FAQ" title="LinkedIn ads management questions, answered."/><div className={styles.faqList}>{faqs.map(([question, answer], index) => <details className={styles.faqItem} key={question} open={index === 0}><summary><span>{question}</span><span className={styles.faqPlus} aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className={styles.finalCta}><div className={styles.finalGlow} aria-hidden="true"/><div className={styles.shell}><div className={styles.ctaInner}><p className={styles.eyebrow}>Make LinkedIn spend accountable</p><h2>Make LinkedIn spend answer to the people who actually buy.</h2><p>LinkedIn advertising works when it reaches the professionals sales needs to talk to and creates a follow-up path worth using.</p><p>A strategy call covers your offer, target audience, current account, budget, and likely next step.</p><Cta/></div></div></section>
  </main>;
}
