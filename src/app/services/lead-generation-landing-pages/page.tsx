import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardCheck,
  Code2,
  FormInput,
  LayoutTemplate,
  MessageSquareText,
  Route,
  ScanSearch,
  X,
} from "lucide-react";
import styles from "../b2b-lead-generation-services/page.module.css";
import local from "./page.module.css";

const path = "/services/lead-generation-landing-pages";
const title = "Lead Generation Landing Pages for B2B SaaS & Tech";
const description =
  "Turn campaign traffic into qualified next actions with B2B landing-page strategy, conversion copy, responsive design, form logic, tracking, and CRM routing.";

export const metadata: Metadata = {
  title: `${title} | Stratskye`,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: path,
    type: "website",
    images: [{
      url: "/images/services/lead-generation-landing-pages/landing-page-strategy.png",
      width: 1536,
      height: 1024,
      alt: "B2B conversion team reviewing a lead generation landing page",
    }],
  },
};

const decisionPoints = [
  ["Best for", "B2B companies with a live offer, identifiable audience, traffic plan, and sales capacity to follow up"],
  ["We handle", "Strategy, message hierarchy, copy direction, conversion structure, design, form logic, tracking, routing, and optimization"],
  ["You provide", "Offer details, customer insight, proof, brand assets, legal guidance, CMS and CRM access, approvals, and sales feedback"],
  ["Communication", "One main contact, agreed review stages, and an approved reporting cadence"],
  ["Pricing", "Custom scope based on pages, variants, research, copy, design, development, integrations, analytics, and testing"],
  ["Problem solved", "Campaign traffic reaching a fragmented conversion path that fails to produce measurable, qualified next actions"],
];

const conversionGaps = [
  ["Message mismatch", "The ad or outbound message makes one promise, while the page tells a different story. That gap costs trust before the copy gets a chance to work."],
  ["Feature-first value", "The page lists capabilities without showing relevance, differentiation, or a specific outcome tied to the visitor's situation."],
  ["Competing actions", "Navigation links and secondary offers pull attention away from the one action the campaign was built to drive."],
  ["Proof arrives late", "A technically sophisticated buyer sees claims without enough evidence, context, or customer proof to validate them."],
  ["Form friction", "The form asks for more information than the value of the offer justifies, or fails to explain what happens after submission."],
  ["Broken handoff", "Submissions reach sales without the context, ownership, qualification detail, or response speed needed to act."],
  ["Invisible drop-off", "Tracking gaps hide whether the problem is traffic quality, page behavior, form completion, or sales acceptance."],
];

const deliverables = [
  ["Conversion brief", "Audience, traffic source, offer, objective, qualification standard, evidence, owners, and measurement."],
  ["Message-match map", "Source promise, buyer context, landing-page promise, supporting proof, CTA, and post-conversion expectation."],
  ["Page architecture", "Information hierarchy, section sequence, trust placement, form location, CTA path, and mobile priorities."],
  ["Conversion copy", "Headline system, value proposition, benefits, proof, objections, microcopy, and CTA language."],
  ["Visual design", "Responsive desktop and mobile direction aligned with the brand and conversion hierarchy, when included."],
  ["Build and QA", "CMS implementation, responsive behavior, forms, accessibility, performance, and launch support, when included."],
  ["Lead capture and routing", "Fields, consent, qualification logic, notifications, CRM ownership, and confirmation flow."],
  ["Measurement plan", "Events, UTM handling, source capture, dashboards, baseline, reporting definitions, and a testing backlog."],
];

const fitFor = [
  "A live B2B SaaS, technology, AI, fintech, cybersecurity, or complex B2B offer",
  "A clear ICP, buyer context, and defined conversion goal",
  "Existing or planned traffic from paid media, outbound, LinkedIn, email, search, partners, or events",
  "Approved product details, customer proof, brand assets, and responsive reviewers",
  "CRM ownership and sales capacity to handle submissions",
];

const notFit = [
  "An unvalidated offer or constantly changing business direction",
  "A generic template requested without buyer or campaign context",
  "No traffic plan, proof, or follow-up process",
  "An expectation that the page alone will guarantee leads, conversions, or pipeline",
  "A need limited to a website redesign, app UI, or advanced CRM development",
];

const reasons = [
  ["Technical B2B fluency", "Complex products and longer decision cycles are handled around the buying group behind them, not a template built for a simpler sale."],
  ["Message before decoration", "Traffic source, buyer problem, offer, evidence, and CTA align before visual work begins."],
  ["Connected execution", "Copy, design, forms, routing, tracking, and optimization all follow the same conversion brief."],
  ["Lead quality over form volume", "Qualification and sales-acceptance criteria are defined before launch, so the page optimizes for conversations sales can use."],
  ["Built for the wider system", "The page can connect to LinkedIn, outbound, paid media, email, and content through confirmed scopes."],
];

const process = [
  ["Review", "Offer, ICP, traffic sources, current page, funnel, proof, analytics, CRM, sales process, and technical constraints."],
  ["Define", "Page objective, conversion action, source-to-page message match, qualification, routing, owners, and metrics."],
  ["Structure", "Message hierarchy, page sections, wireframe, CTA path, form strategy, and mobile priorities."],
  ["Create", "Conversion copy, design, microcopy, form states, confirmation experience, and the tracking plan."],
  ["Build and launch", "CMS implementation, integrations, analytics, responsive QA, performance review, and release."],
  ["Evaluate and improve", "Validate data, review traffic and lead quality, collect sales feedback, and prioritize the next useful test."],
];

const measurement = [
  ["Traffic quality", "Source, medium, campaign, segment, device, and new or returning status"],
  ["Page behavior", "Scroll depth, CTA clicks, form starts, field errors, and abandonment"],
  ["Conversion", "Primary conversion rate, secondary actions, form completion, and invalid submissions"],
  ["Lead quality", "ICP fit, role fit, use case, and qualification completeness"],
  ["Sales acceptance", "Accepted leads, rejection reasons, speed to follow-up, and meeting progression"],
  ["Economics and pipeline", "Cost per qualified lead, opportunities, pipeline, and ROI only when the data supports it"],
];

const costs = [
  ["Pages, audiences, offers, markets, and variants", "More research, message-match mapping, and copy variants."],
  ["Research and positioning depth", "More stakeholder interviews and proof development."],
  ["Wireframe and design complexity", "More responsive states, brand-system work, and revision rounds."],
  ["CMS or development environment", "More custom code, page-speed work, and release coordination."],
  ["Form length and conditional logic", "More field logic, consent handling, and confirmation states."],
  ["CRM and analytics integration", "More field mapping, tag-manager setup, and dashboard QA."],
  ["Experiment design and CRO", "More variant production and ongoing reporting."],
];

const related = [
  ["The connected targeting, data, and routing system", "B2B Lead Generation Services", "/services/b2b-lead-generation-services"],
  ["Decision-maker outreach to a focused page", "LinkedIn Lead Generation Services", "/services/linkedin-lead-generation-services"],
  ["Paid traffic aligned to the page message", "B2B Paid Media Agency", "/services/b2b-paid-media-agency"],
  ["Nurture, scoring, and CRM workflows", "B2B Marketing Automation Services", "/services/b2b-marketing-automation-services"],
  ["Proof and authority content", "Thought Leadership Marketing", "/services/thought-leadership-marketing"],
  ["Delivery and working model", "Our Approach", "/our-approach"],
];

const faqs = [
  ["What is a lead generation landing page?", "A focused page built to turn a specific traffic source into one measurable conversion action for a defined audience, rather than serving the broad navigation role of a standard website page."],
  ["How is a lead generation landing page different from a website page?", "A website page usually serves several goals and audiences at once. A landing page removes competing navigation and offers to focus on one conversion action tied to a specific campaign or traffic source."],
  ["What should a B2B lead generation landing page include?", "A clear value proposition, message match to the traffic source, relevant proof, a focused form, and one primary CTA. The exact structure depends on the offer, audience, and buying stage."],
  ["Can you build the page in our existing CMS or landing-page platform?", "In most cases, yes. Supported platforms and technical constraints are confirmed during the review phase before implementation begins."],
  ["How do you decide which form fields to use?", "Field selection balances the qualification data sales actually needs against the friction each field adds, calibrated to the buyer's stage and the commitment level of the offer."],
  ["Should we use a demo request, consultation form, gated asset, or another CTA?", "The right CTA depends on the offer, audience readiness, and sales motion. It is recommended during the define phase rather than defaulted to one format."],
  ["Can you create pages for paid media, outbound, LinkedIn, email, or events?", "Yes. Each page is built to match the message and context of the traffic source sending visitors there."],
  ["How do you measure conversion and lead quality?", "Measurement runs across traffic quality, page behavior, conversion, lead quality, and sales acceptance. Pipeline and ROI reporting are included only when CRM and attribution data support the connection."],
  ["How much does a lead generation landing page cost?", "Cost depends on the number of pages, research depth, design and development complexity, and integration requirements. Each engagement is scoped individually."],
  ["Can a landing page guarantee more leads or pipeline?", "No single page can guarantee lead volume or pipeline. Results also depend on traffic quality, offer strength, sales follow-up, and market conditions."],
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

export default function LeadGenerationLandingPagesPage() {
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: "Lead Generation Landing Pages", serviceType: "B2B landing page strategy, design, and development", description, url: `https://stratskye.com${path}`, provider: { "@id": "https://stratskye.com/#organization" }, areaServed: "Worldwide", audience: { "@type": "BusinessAudience", audienceType: "B2B SaaS and technology companies" } },
    { "@type": "BreadcrumbList", itemListElement: [["Home", "/"], ["Services", "/services"], ["B2B Lead Generation", "/services/b2b-lead-generation-services"], ["Lead Generation Landing Pages", path]].map(([name, url], index) => ({ "@type": "ListItem", position: index + 1, name, item: `https://stratskye.com${url}` })) },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] };

  return <main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

    <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true"/><div className={styles.shell}>
      <nav className={local.breadcrumb} aria-label="Breadcrumb"><Link href="/services">Services</Link><span>/</span><Link href="/services/b2b-lead-generation-services">Lead Generation</Link><span>/</span><span aria-current="page">Landing Pages</span></nav>
      <div className={styles.heroGrid}><div><p className={styles.kicker}>Focused conversion paths · B2B technology</p><h1 className={local.title}>Lead Generation Landing Pages <span>for B2B SaaS and Technology Companies</span></h1><p className={styles.lede}>A campaign brings someone to your site with a specific reason to be there. The page that greets them often loses that reason within seconds.</p><p className={local.heroCopy}>Stratskye carries the offer, message, and proof through to a form a qualified buyer actually completes—connecting strategy, copy, design, form logic, and routing in one path.</p><div className={styles.heroActions}><Cta/><Link className={local.secondaryLink} href="/work">View Relevant Work <ArrowUpRight size={17}/></Link></div></div>
      <div className={`${styles.heroVisual} ${local.heroVisual}`}><Image src="/images/services/lead-generation-landing-pages/landing-page-strategy.png" alt="B2B conversion team reviewing a lead generation landing page" fill sizes="(max-width: 900px) 100vw, 44vw" className={styles.coverImage} preload/><div className={styles.visualOverlay}/><div className={styles.pipelineCard}><div className={styles.pipelineTop}><span><LayoutTemplate size={18}/> Conversion path</span><span className={styles.liveDot}>One clear action</span></div><div className={styles.pipelineFlow}><span>Traffic</span><ArrowRight size={15}/><span>Message</span><ArrowRight size={15}/><span>Lead</span></div></div></div></div>
    </div></section>

    <section className={styles.lightSection}><div className={styles.shell}><Intro eyebrow="The service" title="One traffic source. One audience. One measurable action." copy="A lead generation landing page turns a specific traffic source into a focused conversion action for a defined B2B audience. It works best when the offer is live, the audience is clear, traffic is active or planned, and sales is ready to act."/></div></section>

    <section className={styles.decisionSection}><div className={styles.shell}><div className={styles.decisionGrid}><div className={styles.stickyIntro}><p className={styles.eyebrow}>Quick decision</p><h2>Know what the page needs before design begins.</h2><p>The working model is shaped around the campaign, conversion action, and systems the page has to connect.</p></div><div className={styles.decisionList}>{decisionPoints.map(([label, value], index) => <div className={styles.decisionItem} key={label}><span className={styles.decisionNumber}>{String(index + 1).padStart(2, "0")}</span><span className={styles.decisionLabel}>{label}</span><strong>{value}</strong></div>)}</div></div></div></section>

    <section className={styles.inputSection}><div className={styles.shell}><Intro eyebrow="Where conversion breaks" title="Traffic arrives. Qualified submissions do not." copy="The page often loses the intent the campaign worked to create. These are the gaps we look for first."/><div className={local.gapGrid}>{conversionGaps.map(([heading, text], index) => <article className={local.gapCard} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className={styles.servicesSection}><div className={styles.shell}><Intro eyebrow="What you receive" title="Every deliverable has a job in the conversion path." copy="The engagement produces named assets tied to strategy, persuasion, capture, handoff, or measurement—not disconnected files passed between vendors."/><div className={styles.serviceGrid}>{deliverables.map(([heading, text], index) => { const icons = [ClipboardCheck, Route, LayoutTemplate, MessageSquareText, ScanSearch, Code2, FormInput, ClipboardCheck]; const Icon = icons[index]; return <article className={`${styles.serviceCard} ${local.deliverable}`} key={heading}><div className={styles.serviceCardTop}><span>{String(index + 1).padStart(2, "0")}</span><Icon size={23}/></div><h3>{heading}</h3><p>{text}</p></article>; })}</div></div></section>

    <section className={styles.fitSection}><div className={styles.shell}><Intro eyebrow="Fit check" title="Who this landing-page service is for"/><div className={styles.fitGrid}><div className={`${styles.fitCard} ${styles.fitCardYes}`}><div className={styles.fitHeading}><Check size={22}/> Good fit</div><ul>{fitFor.map(item => <li key={item}>{item}</li>)}</ul></div><div className={`${styles.fitCard} ${styles.fitCardNo}`}><div className={styles.fitHeading}><X size={22}/> Not the right fit</div><ul>{notFit.map(item => <li key={item}>{item}</li>)}</ul></div></div></div></section>

    <section className={styles.whySection}><div className={styles.shell}><div className={styles.whyGrid}><div className={`${styles.whyVisual} ${local.analysisVisual}`}><Image src="/images/services/lead-generation-landing-pages/conversion-analysis.png" alt="Conversion strategist comparing a landing page wireframe with behavioral analytics" fill sizes="(max-width: 900px) 100vw, 42vw" className={styles.coverImage}/><div className={local.imageCaption}><span>Conversion is a chain</span><strong>Traffic → page → form → handoff</strong></div></div><div><Intro eyebrow="Why Stratskye" title="The page is only as strong as the system around it."/><div className={styles.reasonList}>{reasons.map(([heading, text], index) => <div className={styles.reasonItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></div>)}</div><div className={local.inlineCta}><Cta/></div></div></div></div></section>

    <section className={styles.processSection}><div className={styles.shell}><Intro eyebrow="The process" title="How Stratskye builds a lead generation landing page" copy="We define the objective and audience before design starts, so the page has a clear job from the first draft."/><div className={styles.processGrid}>{process.map(([heading, text], index) => <article className={styles.processCard} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div><p className={local.darkNote}>Your team provides product, customer, and offer detail, plus brand and legal guidance, traffic-source plans, CMS and CRM access where scoped, timely approvals, and sales feedback on lead quality.</p><div className={local.inlineCta}><Cta>Discuss Your Landing Page</Cta></div></div></section>

    <section className={styles.measureSection}><div className={styles.shell}><Intro eyebrow="Measurement" title="Conversion rate is only one layer." copy="A form completion says nothing about whether the visitor was a strong fit. Measurement separates traffic quality, behavior, conversion, lead quality, sales acceptance, and supported pipeline signals."/><DataTable rows={measurement}/><p className={local.lightNote}>Results depend on traffic quality and volume, offer strength, message match, page speed, form policy, and sales response time. Any test needs a defined hypothesis, primary metric, meaningful sample, and stopping rule.</p></div></section>

    <section className={styles.costSection}><div className={styles.shell}><Intro eyebrow="Engagement scope" title="What affects landing-page pricing" copy="One page for one audience is a different engagement from several variants across multiple markets with custom form logic. Pricing follows what the conversion path requires."/><div className={styles.costGrid}>{costs.map(([heading, text], index) => <div className={styles.costItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{heading}</strong><p>{text}</p></div></div>)}</div><p className={styles.costNote}>Media spend, traffic acquisition, third-party software, hosting, and advanced CRM work remain separate unless confirmed in scope.</p><div className={local.inlineCta}><Cta>Request a Custom Scope</Cta></div></div></section>

    <section className={styles.relatedSection}><div className={styles.shell}><Intro eyebrow="The wider system" title="A conversion point for traffic with intent." copy="A landing page performs best when it is part of a system already sending the right audience with the right message."/><div className={styles.relatedGrid}>{related.map(([need, label, href]) => <Link className={styles.relatedLink} href={href} key={label}><span>{need}</span><strong>{label}</strong><ArrowUpRight size={18}/></Link>)}</div></div></section>

    <section className={styles.faqSection}><div className={styles.shell}><Intro eyebrow="FAQ" title="Lead generation landing-page questions, answered."/><div className={styles.faqList}>{faqs.map(([question, answer], index) => <details className={styles.faqItem} key={question} open={index === 0}><summary><span>{question}</span><span className={styles.faqPlus} aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className={styles.finalCta}><div className={styles.finalGlow} aria-hidden="true"/><div className={styles.shell}><div className={styles.ctaInner}><p className={styles.eyebrow}>Make campaign intent count</p><h2>Build a landing page your lead generation system can actually use.</h2><p>Traffic should reach a conversion path built to turn interest into something sales can work with—not a page that quietly loses the visitors it worked to attract.</p><p>A strategy call covers your offer, audience, traffic source, current page, and the single gap between them worth fixing first.</p><Cta/></div></div></section>
  </main>;
}
