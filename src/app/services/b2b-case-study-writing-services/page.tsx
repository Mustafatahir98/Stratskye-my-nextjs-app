import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import styles from "../b2b-lead-generation-services/page.module.css";
import local from "./page.module.css";

const path = "/services/b2b-case-study-writing-services";
const title = "B2B Case Study Writing Services for SaaS and Technology Companies";
const description = "Turn real customer outcomes into credible B2B case studies through story qualification, interviews, evidence checks, writing, and approval coordination.";

export const metadata: Metadata = {
  title: `${title} | Stratskye`,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: "website", images: [{ url: "/images/services/b2b-case-study-writing/customer-interview.png", width: 1672, height: 941, alt: "Customer stakeholder discussing their experience in an interview" }] },
};

const decisionPoints = [
  ["Best for", "B2B technology companies with a live offer, successful customers, an identifiable buyer objection, approved evidence, and a use plan"],
  ["We handle", "Story strategy, research, interview preparation and interviews, narrative, writing, editing, evidence controls, review coordination, and final copy"],
  ["You provide", "Customer access and permission, account context, product facts, approved metrics, internal experts, reviewers, and factual approval"],
  ["Customer provides", "First-hand experience, approved quotations, outcome context, metric confirmation where available, and publication approval"],
  ["Timeline", "Set around customer access, interviews, evidence, reviews, and approval complexity"],
  ["Pricing", "Custom scope based on story count, research depth, interviews, technical complexity, formats, and revisions"],
  ["Problem solved", "Customer success that stays unstructured or unverified instead of becoming persuasive proof for buyers and sales"],
];

const gaps = [
  ["The logo leads the story", "A recognizable name gets featured without a clear connection to the objection a similar buyer is weighing."],
  ["The context is too thin", "The challenge, baseline, decision criteria, and implementation lack the detail a buyer needs to recognize their own situation."],
  ["The claims are hard to trust", "Vague percentages and rounded results appear without customer confirmation or publication approval."],
  ["The quotes sound scripted", "The interview misses the customer's own language, hesitations, and tradeoffs."],
  ["Approvals stall", "Internal and customer reviews begin without agreed facts, named reviewers, or clear approval gates."],
  ["The asset has no use plan", "A finished story goes live without sales guidance, derivative formats, or an owner to keep it current."],
];

const deliverables = [
  ["Case study brief", "Aligns the audience, objection, featured customer, angle, proof, and approval rules.", "Core when story strategy is included"],
  ["Story and evidence plan", "Tests whether the customer experience supports a credible, publishable story.", "Metric access and sensitivity confirmed"],
  ["Interview package", "Captures customer language, account context, implementation detail, and approved quotations.", "Participants and recording consent confirmed"],
  ["Narrative outline", "Controls the customer-led sequence and where evidence appears.", "Approval gate before drafting"],
  ["Draft case study", "Turns verified interviews into clear, buyer-relevant web or PDF-ready copy.", "Length, formats, and revisions confirmed"],
  ["Editorial and approval workflow", "Protects accuracy, permissions, and brand consistency.", "Client and customer own final factual approval"],
  ["Design and reuse assets", "Adapts approved proof for sales, social, video, or account-based use.", "Optional or separate unless confirmed"],
];

const fitFor = [
  "A live B2B SaaS, AI, fintech, cybersecurity, infrastructure, or deep-tech offer with successful customers",
  "A buyer segment or sales objection a specific customer experience can address",
  "Customer access, account context, approved outcome data, and timely reviews",
  "Marketing, advocacy, or sales teams needing credible proof for web, ABM, or live conversations",
];
const notFit = [
  "A pre-launch company or unvalidated offer with no usable customer evidence",
  "An expectation that quotations, results, or customer consent get invented",
  "Urgent bulk production or an unlimited-revision request",
  "A logo-led story with no buyer relevance or approval owner",
];
const reasons = [
  ["Technical B2B fluency", "Complex-product understanding leads to sharper interview questions, accurate terminology, and implementation detail that holds up with a technical reader."],
  ["Customer-first interviewing", "Structured preparation and open questions capture the customer's actual experience in their own words."],
  ["Evidence and approval discipline", "Claims, quotations, metrics, and timeframes connect to sources and a named approval path."],
  ["Narrative built for sales use", "Story selection and detail level answer a specific buyer objection, use case, or buying stage."],
  ["One content system", "Approved copy can connect to web publishing, design, derivative assets, and sales enablement through confirmed scopes."],
];
const process = [
  ["Select and scope", "Confirm the buyer audience, objection, featured customer, story angle, formats, and approval rules."],
  ["Research and prepare", "Review account history, product context, prior claims, and sensitivities; build tailored interview questions."],
  ["Interview and extract", "Conduct internal and customer interviews, capture first-hand language, and flag claims needing confirmation."],
  ["Structure", "Develop the customer-led narrative, choose evidence and quotations, and submit an outline when required."],
  ["Write and edit", "Draft the case study, attribute claims, and complete editorial and factual checks."],
  ["Review and approve", "Coordinate internal review and customer approval, resolve comments, and hand off final copy."],
];
const inputs = [
  ["Customer introduction and permission", "Opens the door to the interview and the story itself"],
  ["Account and product context", "Supports accuracy and technical credibility"],
  ["Internal experts and source materials", "Fills in details the customer interview alone cannot cover"],
  ["Reviewers and timely decisions", "Keeps approval gates from stalling the schedule"],
];
const measurement = [
  ["Production and governance", "Story qualification, interviews, evidence completeness, reviews, and approval timing"],
  ["Proof coverage", "Industries, segments, use cases, objections, and buyer stages represented"],
  ["Discovery and engagement", "Page views, referrals, search visibility, downloads, and shares"],
  ["Sales enablement", "Asset adoption, sends, stakeholder sharing, and seller feedback"],
  ["Conversion and progression", "CTA activity, assisted submissions, and next-step requests where tracking supports it"],
  ["Pipeline, when trackable", "Opportunities using the asset, stage movement, and win-loss context under an approved model"],
];
const costs = [
  ["Story volume and strategy", "More customer selection, buyer mapping, and editorial management."],
  ["Research and evidence", "More account review, metric validation, and source reconciliation."],
  ["Interviews", "More preparation, scheduling, transcription, and follow-up."],
  ["Technical and approval complexity", "More terminology control, confidentiality handling, and stakeholder coordination."],
  ["Formats and revisions", "More drafting, editing, and customer feedback rounds."],
  ["Design and media", "More layout, screenshots, charts, and production QA."],
  ["Reuse and activation", "More sales snippets, social assets, and distribution work."],
];
const related = [
  ["A coordinated multi-format content system", "B2B Content Marketing Services", "/services/b2b-content-marketing-services"],
  ["Proof-gap, buyer, and distribution planning", "B2B Content Strategy", "/services/b2b-content-marketing-services"],
  ["A research-led authority asset", "White Paper Writing Services", "/services/white-paper-writing-services"],
  ["Promotion across selected channels", "B2B Content Distribution", "/services/b2b-content-marketing-services"],
  ["Direct use in prospecting and pipeline conversations", "B2B Lead Generation Services", "/services/b2b-lead-generation-services"],
];
const faqs = [
  ["What do Stratskye's B2B case study writing services include?", "Story qualification, research, interviews, narrative development, writing, editing, evidence controls, and approval coordination. Design, video, and distribution are separate unless confirmed upfront."],
  ["What is the difference between a case study, a testimonial, and a white paper?", "A case study documents one customer's problem, decision, and outcome in detail. A testimonial is a short endorsement. A white paper builds a research-led argument that may use customer evidence without centering on one story."],
  ["Can Stratskye write for technical SaaS, AI, fintech, or infrastructure buyers?", "Yes. Technical fluency shapes the interview questions and terminology so the story holds up with specialist readers."],
  ["How do we choose the right customers and stories to feature?", "Selection starts with the buyer objection or segment, then finds customers whose experience genuinely supports the claim."],
  ["Who contacts the customer and obtains permission?", "Customer outreach and permission typically sit with your team, which owns the existing relationship."],
  ["How much time will our team and customer need?", "It depends on story complexity and reviewer count. The commitment is confirmed in the brief before interviews."],
  ["Can you work without publishable customer metrics?", "Yes. Qualitative outcomes and implementation details can support a credible story when hard metrics are unavailable or unapproved."],
  ["Can a case study be anonymized?", "Yes. An anonymized story can use descriptive details in place of a customer's name when publication rules require it."],
  ["How are interviews recorded and customer information protected?", "Interviews are recorded with consent. Quotations and details go through customer approval before publication."],
  ["Do you provide design, web publishing, or video case studies?", "These can be scoped separately or optionally alongside the core writing engagement."],
  ["How long should a B2B case study be?", "Length depends on the complexity and format, from a concise one-pager to a longer narrative."],
  ["How long does a case study take?", "Timing depends on customer availability, evidence complexity, and the number of approval stakeholders."],
  ["Can one interview become sales, social, or presentation assets?", "Yes, when that reuse is included in the engagement scope."],
  ["How is case study performance measured?", "Measurement covers production quality, discovery, sales use, and pipeline influence where an approved attribution model supports it."],
  ["How much does case study writing cost?", "Cost depends on story volume, research depth, interview complexity, formats, and reviews. Each project is scoped individually."],
  ["Does a case study guarantee leads or shorter sales cycles?", "No single asset guarantees those outcomes. Results depend on distribution, sales follow-up, and how the story is used."],
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

export default function B2BCaseStudyWritingServicesPage() {
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: title, serviceType: "B2B case study writing", description, url: `https://stratskye.com${path}`, provider: { "@id": "https://stratskye.com/#organization" }, areaServed: "Worldwide", audience: { "@type": "BusinessAudience", audienceType: "B2B SaaS and technology companies" } },
    { "@type": "BreadcrumbList", itemListElement: [["Home", "/"], ["Services", "/services"], ["B2B Content Marketing", "/services/b2b-content-marketing-services"], ["B2B Case Study Writing", path]].map(([name, url], index) => ({ "@type": "ListItem", position: index + 1, name, item: `https://stratskye.com${url}` })) },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] };

  return <main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true"/><div className={styles.shell}>
      <nav className={local.breadcrumb} aria-label="Breadcrumb"><Link href="/services">Services</Link><span>/</span><Link href="/services/b2b-content-marketing-services">Content Marketing</Link><span>/</span><span aria-current="page">Case Study Writing</span></nav>
      <div className={styles.heroGrid}><div><p className={styles.kicker}>Customer evidence · B2B technology</p><h1 className={local.title}>B2B Case Study Writing Services <span>for SaaS and Technology Companies</span></h1><p className={styles.lede}>A customer got real value from your product, but that story is still scattered across sales calls, support tickets, and someone&apos;s memory of a quarterly review.</p><p className={local.heroCopy}>Stratskye qualifies the right story, interviews the people who lived it, and turns verified outcomes into proof your buyers and sales team can use with confidence.</p><div className={styles.heroActions}><Cta/><Link className={local.secondaryLink} href="/case-study">View Relevant Work <ArrowUpRight size={17}/></Link></div></div>
      <div className={`${styles.heroVisual} ${local.heroVisual}`}><Image src="/images/services/b2b-case-study-writing/customer-interview.png" alt="Customer stakeholder sharing their experience in a case study interview" fill sizes="(max-width: 900px) 100vw, 44vw" className={styles.coverImage} preload/><div className={styles.visualOverlay}/><div className={styles.pipelineCard}><div className={styles.pipelineTop}><span>Customer proof</span><span className={styles.liveDot}>Verified</span></div><div className={styles.pipelineFlow}><span>Experience</span><ArrowRight size={15}/><span>Evidence</span><ArrowRight size={15}/><span>Buyer trust</span></div></div></div></div>
    </div></section>

    <section className={styles.lightSection}><div className={styles.shell}><Intro eyebrow="The service" title="Turn a real customer story into evidence a buyer can trust." copy="B2B case study writing turns a qualified customer experience into a credible asset built around a specific buyer objection. The core work covers story qualification, research, stakeholder interviews, narrative development, writing, evidence review, and approval coordination."/><p className={styles.supportingCopy}>Customer outreach, formal releases, design, video, and distribution are scoped separately unless confirmed upfront.</p></div></section>
    <section className={styles.decisionSection}><div className={styles.shell}><div className={styles.decisionGrid}><div className={styles.stickyIntro}><p className={styles.eyebrow}>Quick decision</p><h2>Start with the right story and a clear approval path.</h2><p>The strongest case studies connect an actual customer experience to a buyer question your team needs to answer.</p></div><div className={styles.decisionList}>{decisionPoints.map(([label, value], index) => <div className={styles.decisionItem} key={label}><span className={styles.decisionNumber}>{String(index + 1).padStart(2, "0")}</span><span className={styles.decisionLabel}>{label}</span><strong>{value}</strong></div>)}</div></div></div></section>
    <section className={styles.inputSection}><div className={styles.shell}><Intro eyebrow="Where trust breaks" title="Why your customer success stories may not build buyer confidence." copy="A logo and an upbeat quote are only a starting point. Buyers need enough context and verified detail to understand what changed and why."/><div className={local.gapGrid}>{gaps.map(([heading, text], index) => <article className={local.gapCard} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div><div className={local.inlineCta}><Cta>Discuss Your Case Study Pipeline</Cta></div></div></section>
    <section className={styles.servicesSection}><div className={styles.shell}><Intro eyebrow="What you receive" title="A clear path from interview to approved proof." copy="Each deliverable gives the story a defined audience, evidence base, narrative, and review step before publication."/><div className={local.deliverableList}>{deliverables.map(([heading, purpose, scope], index) => <article className={local.deliverableRow} key={heading}><span className={local.deliverableNumber}>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{purpose}</p></div><strong>{scope}</strong></article>)}</div></div></section>
    <section className={styles.fitSection}><div className={styles.shell}><Intro eyebrow="Fit check" title="Who B2B case study writing services are for"/><div className={styles.fitGrid}><div className={`${styles.fitCard} ${styles.fitCardYes}`}><div className={styles.fitHeading}><Check size={22}/> Good fit</div><ul>{fitFor.map(item => <li key={item}>{item}</li>)}</ul></div><div className={`${styles.fitCard} ${styles.fitCardNo}`}><div className={styles.fitHeading}><X size={22}/> May not be the right fit</div><ul>{notFit.map(item => <li key={item}>{item}</li>)}</ul></div></div></div></section>
    <section className={styles.whySection}><div className={styles.shell}><div className={styles.whyGrid}><div className={`${styles.whyVisual} ${local.researchVisual}`}><Image src="/images/services/b2b-case-study-writing/evidence-review.png" alt="Writer and strategist reviewing source material for a customer case study" fill sizes="(max-width: 900px) 100vw, 42vw" className={styles.coverImage}/><div className={local.imageCaption}><span>Customer-led proof</span><strong>Experience → evidence → approval</strong></div></div><div><Intro eyebrow="Why Stratskye" title="Technical fluency with customer and evidence discipline."/><div className={styles.reasonList}>{reasons.map(([heading, text], index) => <div className={styles.reasonItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></div>)}</div><div className={local.inlineCta}><Cta/></div></div></div></div></section>
    <section className={styles.processSection}><div className={styles.shell}><Intro eyebrow="The process" title="How Stratskye creates a B2B case study" copy="We qualify the story and confirm the buyer objection before scheduling interviews, so the finished piece has a clear job from the start."/><div className={styles.processGrid}>{process.map(([heading, text], index) => <article className={styles.processCard} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div><div className={local.inputBlock}><h3>What we need from your team</h3><DataTable rows={inputs}/></div><div className={local.inlineCta}><Cta>Discuss Your First Case Study</Cta></div></div></section>
    <section className={styles.measureSection}><div className={styles.shell}><Intro eyebrow="Measurement" title="A page view is only one signal." copy="Performance spans production quality, proof coverage, discovery, sales use, and buyer progression. A view or a sales send does not automatically become a qualified opportunity."/><DataTable rows={measurement}/><p className={local.lightNote}>Pipeline influence is reported only when the tracking and approved attribution model support that connection.</p></div></section>
    <section className={styles.costSection}><div className={styles.shell}><Intro eyebrow="Engagement scope" title="What affects B2B case study writing pricing" copy="A single story built from one straightforward interview and a library spanning multiple segments, regulated claims, and legal reviews involve different workloads."/><div className={styles.costGrid}>{costs.map(([heading, text], index) => <div className={styles.costItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{heading}</strong><p>{text}</p></div></div>)}</div><div className={local.inlineCta}><Cta>Request a Custom Scope</Cta></div></div></section>
    <section className={styles.relatedSection}><div className={styles.shell}><Intro eyebrow="The wider system" title="Connect customer proof to the rest of your content marketing."/><div className={styles.relatedGrid}>{related.map(([need, label, href]) => <Link className={styles.relatedLink} href={href} key={need}><span>{need}</span><strong>{label}</strong><ArrowUpRight size={18}/></Link>)}</div></div></section>
    <section className={styles.faqSection}><div className={styles.shell}><Intro eyebrow="FAQ" title="B2B case study writing questions, answered."/><div className={styles.faqList}>{faqs.map(([question, answer], index) => <details className={styles.faqItem} key={question} open={index === 0}><summary><span>{question}</span><span className={styles.faqPlus} aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className={styles.finalCta}><div className={styles.finalGlow} aria-hidden="true"/><div className={styles.shell}><div className={styles.ctaInner}><p className={styles.eyebrow}>Make customer success useful</p><h2>Turn your customer&apos;s success into proof buyers can use.</h2><p>Strong outcomes should not stay trapped in account notes and sales calls.</p><p>A strategy call covers your story candidates, target audience, customer access, and whether a case study is the right next step.</p><Cta/></div></div></section>
  </main>;
}
