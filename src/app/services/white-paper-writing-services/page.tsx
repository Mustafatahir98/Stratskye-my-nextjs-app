import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Check,
  FileCheck2,
  FileText,
  Library,
  MessagesSquare,
  PenTool,
  SearchCheck,
  X,
} from "lucide-react";
import styles from "../b2b-lead-generation-services/page.module.css";
import local from "./page.module.css";

const path = "/services/white-paper-writing-services";
const title = "White Paper Writing Services for B2B SaaS & Tech";
const description = "Turn approved expertise and research into a credible B2B white paper with audience strategy, SME interviews, source control, writing, and editorial review.";

export const metadata: Metadata = {
  title: `${title} | Stratskye`,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: path,
    type: "website",
    images: [{ url: "/images/services/white-paper-writing/white-paper-collaboration.png", width: 1536, height: 1024, alt: "Technical expert and editor developing a B2B white paper" }],
  },
};

const decisionPoints = [
  ["Best for", "B2B technology companies with a live offer, expert knowledge, a defined audience, approved evidence, and a distribution or sales-use plan"],
  ["We handle", "Briefing, audience and topic alignment, research, SME interviews, outline, writing, editing, source control, and final copy"],
  ["You provide", "Product and customer context, experts, approved sources, proof, brand and compliance guidance, permissions, feedback, and factual approval"],
  ["Timeline", "Set collaboratively around research depth, interviews, review complexity, and design needs"],
  ["Communication", "One main contact, agreed review stages, named reviewers, and a confirmed update cadence"],
  ["Pricing", "Custom scope based on research depth, length, interviews, technical complexity, evidence, design, and revisions"],
  ["Problem solved", "Useful internal expertise that never becomes a credible asset buyers understand and sales can use"],
];

const authorityGaps = [
  ["The topic is too broad", "The paper sits too close to a product pitch or too far from the specific question a buyer is trying to answer at their stage of evaluation."],
  ["The point of view is missing", "It repeats what is already public instead of offering an argument or evidence that only your company and experts can supply."],
  ["Technical depth gets flattened", "Useful detail becomes generality—or gets buried in jargon that loses the reader the paper was meant to reach."],
  ["The argument has no evidence path", "Claims appear without a clear thread that lets a skeptical technical reader follow the logic from problem to conclusion."],
  ["Sources weaken credibility", "Data, quotations, and citations are inconsistent, poorly attributed, or outdated exactly where scrutiny is highest."],
  ["There is no activation plan", "A substantial research effort gets published without owners for promotion, follow-up, reuse, or sales enablement."],
];

const deliverables = [
  ["White paper brief", "Aligns the audience, buying stage, problem, thesis, commercial use, evidence, and approval rules.", "Core when strategy is included"],
  ["Research and source plan", "Defines the evidence base, gaps, source quality, licensing needs, and citation method.", "Research depth confirmed in scope"],
  ["SME interview package", "Extracts expert knowledge, examples, objections, terminology, and your distinct point of view.", "Interview count and access confirmed"],
  ["Outline and narrative", "Controls the argument, evidence sequence, executive-summary direction, and reader progression.", "Approval gate before drafting"],
  ["Draft manuscript", "Turns the approved thesis and evidence into clear, credible long-form copy.", "Length and revisions confirmed"],
  ["Editorial and fact review", "Improves clarity and consistency while protecting the facts and claims attached to your company.", "Client owns final technical or legal approval"],
  ["Design and activation assets", "Prepares the paper for layout, lead capture, promotion, derivative content, or sales use.", "Optional or separate unless confirmed"],
];

const fitFor = [
  "A live B2B SaaS, AI, fintech, cybersecurity, infrastructure, or deep-tech offer",
  "A defined audience and an important buyer question worth addressing at length",
  "Usable expertise, evidence, customer knowledge, or market insight your team can share",
  "A need for an authority asset supporting lead capture, nurture, sales enablement, ABM, or events",
  "SME access, approved sources, factual reviewers, and timely feedback",
];

const notFit = [
  "A generic PDF requested to fill a campaign calendar with no audience or thesis",
  "An expectation that the writer invents research, expert opinions, or customer results",
  "Urgent bulk production or an unlimited-revision, low-cost word-count purchase",
  "No SME access, approved sources, or reviewer available for factual sign-off",
  "An expectation of guaranteed downloads, leads, or pipeline from the asset alone",
];

const reasons = [
  ["Technical B2B fluency", "Complex-product understanding leads to sharper interview questions, more accurate terminology, and evidence choices that hold up with technical readers."],
  ["Insight extraction before drafting", "Approved SME knowledge and source material become a distinct thesis during the outline stage, not a general category summary."],
  ["Research and claim discipline", "Source quality, attribution, fact-checking, and client approval stay part of the process from brief to final copy."],
  ["Narrative and commercial use stay connected", "The paper educates a technical reader while supporting the marketing and sales job your team assigned to it."],
  ["A place in the wider content system", "Distribution, derivative content, landing pages, and sales enablement can be coordinated through confirmed scopes."],
];

const process = [
  ["Define", "Audience, buying stage, topic, thesis, commercial use, CTA, evidence needs, format, and approval rules."],
  ["Research", "Internal materials, external sources, evidence gaps, and whether interviews or original research are needed."],
  ["Interview and extract", "Expert knowledge, examples, objections, terminology, and the approved point of view."],
  ["Structure", "Narrative, detailed outline, executive-summary direction, and evidence sequence for approval."],
  ["Write and edit", "Manuscript drafting, source attribution, claim control, and editorial review."],
  ["Review and finalize", "Factual, product, and compliance review, comment resolution, and final copy handoff."],
];

const clientInputs = [
  ["Objectives and audience context", "Anchors the thesis and evidence to a real buyer question"],
  ["Product and market context", "Supports accuracy and technical credibility throughout"],
  ["Expert access and source materials", "Provides the raw evidence research and interviews build from"],
  ["Brand, compliance, and legal guidance", "Protects approved claims and terminology"],
  ["Timely review and approval", "Keeps the schedule intact through every gate"],
];

const measurement = [
  ["Production and quality", "Brief, evidence, interviews, reviews, factual approval, and publication readiness"],
  ["Reach and discovery", "Landing-page visits, search visibility, referrals, campaign reach, and target-account exposure"],
  ["Engagement", "Views, downloads, reading or completion signals, shares, and return visits"],
  ["Conversion and nurture", "Valid form submissions, qualified downloads, subscriptions, and next actions"],
  ["Sales enablement", "Asset adoption, sends, stakeholder sharing, objection coverage, and sales feedback"],
  ["Pipeline, when trackable", "Accepted leads, opportunities, influenced pipeline, and revenue under an approved model"],
];

const costs = [
  ["Strategy and format", "More discovery, audience work, thesis development, and structural planning."],
  ["Research and evidence", "More source review, verification, licensing, and gap resolution."],
  ["SME interviews", "More preparation, scheduling, extraction, and expert approval."],
  ["Technical complexity", "More terminology control, specialist review, and claim governance."],
  ["Length and revisions", "More drafting, editing, stakeholder coordination, and version control."],
  ["Design and visuals", "More layout, charts, illustrations, and production QA."],
  ["Activation", "More landing-page, form, distribution, derivative-content, and measurement work."],
];

const related = [
  ["A coordinated multi-format content system", "B2B Content Marketing Services", "/services/b2b-content-marketing-services"],
  ["A broader expert or executive authority program", "Thought Leadership Marketing", "/services/thought-leadership-marketing"],
  ["A conversion path for the finished asset", "Lead Generation Landing Pages", "/services/lead-generation-landing-pages"],
  ["Paid promotion and retargeting", "B2B Paid Media Agency", "/services/b2b-paid-media-agency"],
  ["Automated nurture after download", "B2B Marketing Automation Services", "/services/b2b-marketing-automation-services"],
  ["Delivery and review model", "Our Approach", "/our-approach"],
];

const faqs = [
  ["What do Stratskye's white paper writing services include?", "Strategy, audience and topic alignment, research, SME interviews, outline development, writing, editing, source control, and final copy. Design and activation assets are scoped separately unless confirmed upfront."],
  ["How is a B2B white paper different from an ebook or case study?", "A white paper is an evidence-led, argument-driven asset that helps a technical buyer understand a problem and evaluate an approach. An ebook is usually more accessible and guide-led, while a case study proves a specific outcome through one customer's results."],
  ["How much subject-matter expert time will our team need?", "That depends on the topic's complexity and the amount of usable internal material already available. The requirement is confirmed during the brief before interviews are scheduled."],
  ["Can Stratskye conduct original research, surveys, or data analysis?", "Original research, survey design, and data analysis can be scoped separately once the team knows whether existing evidence is sufficient or new data is required."],
  ["Do you provide white paper design and layout?", "Design and layout are available as an optional or separate scope, confirmed alongside the writing engagement rather than bundled by default."],
  ["How long does a white paper take?", "The timeline depends on research depth, interview scheduling, review complexity, and design requirements. It is set collaboratively once the brief is confirmed."],
  ["Can a white paper guarantee leads, pipeline, or revenue?", "No single asset can guarantee downloads, lead volume, pipeline, or revenue. Results depend on distribution, audience fit, offer strength, and how the paper is used after publication."],
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

export default function WhitePaperWritingServicesPage() {
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: "White Paper Writing Services", serviceType: "B2B white paper research and writing", description, url: `https://stratskye.com${path}`, provider: { "@id": "https://stratskye.com/#organization" }, areaServed: "Worldwide", audience: { "@type": "BusinessAudience", audienceType: "B2B SaaS and technology companies" } },
    { "@type": "BreadcrumbList", itemListElement: [["Home", "/"], ["Services", "/services"], ["B2B Content Marketing", "/services/b2b-content-marketing-services"], ["White Paper Writing", path]].map(([name, url], index) => ({ "@type": "ListItem", position: index + 1, name, item: `https://stratskye.com${url}` })) },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] };

  return <main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

    <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true"/><div className={styles.shell}>
      <nav className={local.breadcrumb} aria-label="Breadcrumb"><Link href="/services">Services</Link><span>/</span><Link href="/services/b2b-content-marketing-services">Content Marketing</Link><span>/</span><span aria-current="page">White Paper Writing</span></nav>
      <div className={styles.heroGrid}><div><p className={styles.kicker}>Evidence-led content · B2B technology</p><h1 className={local.title}>White Paper Writing Services <span>for B2B SaaS and Technology Companies</span></h1><p className={styles.lede}>Most technology companies already have the expertise a white paper needs. It rarely reaches the page in a form a technical buyer trusts.</p><p className={local.heroCopy}>Stratskye pairs audience and topic strategy with SME interviews, structured research, and editorial review—turning approved expertise into an asset built for authority, buyer education, and sales use.</p><div className={styles.heroActions}><Cta/><Link className={local.secondaryLink} href="/work">View Relevant Work <ArrowUpRight size={17}/></Link></div></div>
      <div className={`${styles.heroVisual} ${local.heroVisual}`}><Image src="/images/services/white-paper-writing/white-paper-collaboration.png" alt="Technical expert and editor developing a B2B white paper" fill sizes="(max-width: 900px) 100vw, 44vw" className={styles.coverImage} preload/><div className={styles.visualOverlay}/><div className={styles.pipelineCard}><div className={styles.pipelineTop}><span><FileText size={18}/> White paper system</span><span className={styles.liveDot}>Evidence-led</span></div><div className={styles.pipelineFlow}><span>Expertise</span><ArrowRight size={15}/><span>Argument</span><ArrowRight size={15}/><span>Authority</span></div></div></div></div>
    </div></section>

    <section className={styles.lightSection}><div className={styles.shell}><Intro eyebrow="The service" title="A focused answer to a serious buyer question." copy="White paper writing services turn approved research, subject-matter expertise, and a defined point of view into a long-form asset. The core work covers strategy, research, SME extraction, outline development, manuscript writing, editorial review, and final handoff."/><p className={styles.supportingCopy}>Design, original research, landing pages, and distribution are scoped separately unless confirmed upfront.</p></div></section>

    <section className={styles.decisionSection}><div className={styles.shell}><div className={styles.decisionGrid}><div className={styles.stickyIntro}><p className={styles.eyebrow}>Quick decision</p><h2>Define the thesis before the first draft.</h2><p>The strongest engagements begin with approved expertise, evidence, and a clear plan for how the paper will be used.</p></div><div className={styles.decisionList}>{decisionPoints.map(([label, value], index) => <div className={styles.decisionItem} key={label}><span className={styles.decisionNumber}>{String(index + 1).padStart(2, "0")}</span><span className={styles.decisionLabel}>{label}</span><strong>{value}</strong></div>)}</div></div></div></section>

    <section className={styles.inputSection}><div className={styles.shell}><Intro eyebrow="Where authority breaks" title="A polished PDF is not the same as a trusted argument." copy="The paper has to leave a technical buyer more confident in your expertise than they were before. These are the gaps that usually stop it."/><div className={local.gapGrid}>{authorityGaps.map(([heading, text], index) => <article className={local.gapCard} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div><div className={local.lightAction}><Cta>Discuss Your White Paper Brief</Cta></div></div></section>

    <section className={styles.servicesSection}><div className={styles.shell}><Intro eyebrow="What you receive" title="A controlled path from raw expertise to final copy." copy="Every deliverable has a specific role in protecting the argument, evidence, approvals, and commercial use of the asset."/><div className={local.deliverableList}>{deliverables.map(([heading, purpose, scope], index) => { const icons = [FileCheck2, Library, MessagesSquare, BookOpenCheck, PenTool, SearchCheck, FileText]; const Icon = icons[index]; return <article className={local.deliverableRow} key={heading}><span className={local.deliverableNumber}>{String(index + 1).padStart(2, "0")}</span><Icon size={22}/><div><h3>{heading}</h3><p>{purpose}</p></div><strong>{scope}</strong></article>; })}</div></div></section>

    <section className={styles.fitSection}><div className={styles.shell}><Intro eyebrow="Fit check" title="Who white paper writing services are for"/><div className={styles.fitGrid}><div className={`${styles.fitCard} ${styles.fitCardYes}`}><div className={styles.fitHeading}><Check size={22}/> Good fit</div><ul>{fitFor.map(item => <li key={item}>{item}</li>)}</ul></div><div className={`${styles.fitCard} ${styles.fitCardNo}`}><div className={styles.fitHeading}><X size={22}/> May not be the right fit</div><ul>{notFit.map(item => <li key={item}>{item}</li>)}</ul></div></div></div></section>

    <section className={styles.whySection}><div className={styles.shell}><div className={styles.whyGrid}><div className={`${styles.whyVisual} ${local.researchVisual}`}><Image src="/images/services/white-paper-writing/research-editorial-review.png" alt="Researcher organizing sources and reviewing a technical white paper manuscript" fill sizes="(max-width: 900px) 100vw, 42vw" className={styles.coverImage}/><div className={local.imageCaption}><span>Editorial discipline</span><strong>Sources → thesis → evidence → review</strong></div></div><div><Intro eyebrow="Why Stratskye" title="Technical fluency with research discipline."/><div className={styles.reasonList}>{reasons.map(([heading, text], index) => <div className={styles.reasonItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></div>)}</div><div className={local.inlineCta}><Cta/></div></div></div></div></section>

    <section className={styles.processSection}><div className={styles.shell}><Intro eyebrow="The process" title="How Stratskye creates a B2B white paper" copy="We confirm the audience and thesis before research begins, so the paper is built around a specific argument from the first outline."/><div className={styles.processGrid}>{process.map(([heading, text], index) => <article className={styles.processCard} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div><div className={local.inputBlock}><h3>What we need from your team</h3><DataTable rows={clientInputs}/></div><div className={local.inlineCta}><Cta>Discuss Your White Paper Project</Cta></div></div></section>

    <section className={styles.measureSection}><div className={styles.shell}><Intro eyebrow="Measurement" title="A download is not the final outcome." copy="Measurement separates production quality, discovery, engagement, conversion, sales use, and supported pipeline signals. A raw download is never treated as a qualified lead by default."/><DataTable rows={measurement}/><p className={local.lightNote}>Pipeline influence is reported only when distribution, CRM, attribution, and time-window data genuinely support that connection.</p></div></section>

    <section className={styles.costSection}><div className={styles.shell}><Intro eyebrow="Engagement scope" title="What affects white paper writing pricing" copy="A short brief built from existing internal material and a long technical paper built on interviews, original evidence, visuals, and several review rounds require very different production workloads."/><div className={styles.costGrid}>{costs.map(([heading, text], index) => <div className={styles.costItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{heading}</strong><p>{text}</p></div></div>)}</div><div className={local.inlineCta}><Cta>Request a Custom Scope</Cta></div></div></section>

    <section className={styles.relatedSection}><div className={styles.shell}><Intro eyebrow="The wider system" title="One authority asset inside a coordinated content system." copy="A white paper works best when its audience, activation, derivative content, and sales use are planned alongside the manuscript itself."/><div className={styles.relatedGrid}>{related.map(([need, label, href]) => <Link className={styles.relatedLink} href={href} key={label}><span>{need}</span><strong>{label}</strong><ArrowUpRight size={18}/></Link>)}</div></div></section>

    <section className={styles.faqSection}><div className={styles.shell}><Intro eyebrow="FAQ" title="White paper writing questions, answered."/><div className={styles.faqList}>{faqs.map(([question, answer], index) => <details className={styles.faqItem} key={question} open={index === 0}><summary><span>{question}</span><span className={styles.faqPlus} aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className={styles.finalCta}><div className={styles.finalGlow} aria-hidden="true"/><div className={styles.shell}><div className={styles.ctaInner}><p className={styles.eyebrow}>Turn expertise into authority</p><h2>Turn what your experts know into an asset buyers actually use.</h2><p>Valuable expertise should not stay trapped in interviews, internal documents, or drafts that never land with a technical reader.</p><p>A strategy call covers your audience, the buyer question worth addressing, available evidence, expert access, and whether a white paper is the right format.</p><Cta/></div></div></section>
  </main>;
}
