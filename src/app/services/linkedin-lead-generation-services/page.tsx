import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  UserRoundSearch,
  X,
} from "lucide-react";
import styles from "../b2b-lead-generation-services/page.module.css";
import local from "./page.module.css";

const path = "/services/linkedin-lead-generation-services";
const title = "LinkedIn Lead Generation Services for SaaS & Tech";
const description =
  "Turn LinkedIn prospecting into qualified sales conversations with ICP research, credible outreach, follow-up, qualification, and CRM handoff.";

export const metadata: Metadata = {
  title: `${title} | Stratskye`,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: path,
    type: "website",
    images: [
      {
        url: "/images/services/b2b-lead-generation/team-collaboration.webp",
        width: 1800,
        height: 1200,
        alt: "B2B technology team planning a LinkedIn prospecting campaign",
      },
    ],
  },
};

const decisionPoints = [
  ["Best for", "B2B SaaS and technology companies with a definable ICP and identifiable buying roles"],
  ["We handle", "ICP alignment, account research, messaging, outreach, follow-up, qualification, handoff, and reporting"],
  ["You provide", "Product context, customer examples, approved proof, profile access, CRM information, approvals, and sales feedback"],
  ["Timeline", "Minimum three-month engagement with a 30/60/90-day cadence"],
  ["Communication", "One main contact, weekly updates or meetings, and monthly reporting"],
  ["Pricing", "Scoped around profiles, audiences, research depth, campaign complexity, reply handling, systems, and reporting"],
  ["Problem solved", "LinkedIn activity that creates connections without enough relevant conversations or usable sales handoffs"],
];

const problems = [
  ["ICP drift", "Broad or untested targeting puts outreach in front of companies that may never have a strong reason to buy."],
  ["Buying-role gaps", "Research can find the right company while missing the people who influence, evaluate, or approve the purchase."],
  ["Weak sender credibility", "Prospects often check the sender first. A profile without relevant context or proof creates friction before the conversation starts."],
  ["Generic messaging", "A first name or surface-level company fact is not useful personalization. Buyers need a relevant reason for the conversation."],
  ["Broken follow-up", "Inconsistent follow-up, unclear stop rules, and slow response handling leave genuine interest unanswered."],
  ["Unsafe execution", "Uncontrolled automation, overlapping outreach, and poor account-contact saturation create needless brand and account risk."],
  ["Poor qualification and handoff", "A reply is not automatically a lead. Sales needs fit, context, ownership, and a clear next action."],
  ["Vanity reporting", "Connection and response numbers need to be separated from positive replies, qualification, sales acceptance, and progression."],
];

const deliverables = [
  ["Campaign and ICP brief", "Defines the offer, audience, buying roles, qualification criteria, exclusions, proof, and measurement."],
  ["ICP and account criteria", "Establishes firmographic, technographic, trigger, inclusion, exclusion, and prioritization logic."],
  ["Buying-role map", "Identifies decision-makers, influencers, users, evaluators, and other buying stakeholders."],
  ["Sender-profile readiness", "Recommendations that help the sender establish relevance and credibility before outreach begins."],
  ["Message architecture", "Approved angles, evidence, personalized connection requests, follow-ups, objections, and next steps."],
  ["LinkedIn outreach sequence", "Timing, follow-up logic, stop rules, escalation, and account-contact controls."],
  ["Reply and CRM handoff playbook", "Response classification, qualification, referrals, opt-outs, ownership, context, and acceptance rules."],
  ["Campaign reviews and reporting", "Improves the campaign using response quality, objections, targeting accuracy, sales feedback, and downstream signals."],
];

const fitFor = [
  "B2B SaaS, AI, fintech, infrastructure, cybersecurity, deep-tech, or complex professional-service companies with a live offer",
  "A clear ideal customer profile, meaningful contract value, and identifiable buying roles",
  "Teams entering a new segment or adding LinkedIn to an existing outbound motion",
  "Companies able to provide proof, approvals, CRM visibility, and sales feedback",
  "Sales teams ready to act on relevant conversations",
];

const notFit = [
  "Pre-launch companies without a validated offer",
  "Companies primarily looking for cheap bulk data or connection volume",
  "Teams expecting guaranteed meetings or unattended automation",
  "Teams without a clear owner for sales follow-up",
  "Buyers looking for an SDR replacement, email-only service, or organic content program",
];

const reasons = [
  ["Technical B2B fluency", "We work from the product, buyer, business problem, and available evidence so outreach holds up with technical decision-makers."],
  ["Targeting before volume", "The ICP, target accounts, buying roles, exclusions, and qualification criteria are defined before activity expands."],
  ["Human-led relevance", "Personalization connects the prospect's role, company context, problem, or trigger to a credible reason for starting a conversation."],
  ["Strategy and execution stay connected", "Research informs messaging, replies inform qualification, and sales feedback shapes the next round of targeting."],
  ["LinkedIn fits the wider system", "LinkedIn can connect to data, landing pages, outbound, content, and paid media when those separately scoped channels make sense."],
];

const process = [
  ["Review", "Your product, offer, customers, market, profiles, current outreach, CRM, sales process, proof, and available data."],
  ["Define", "The ICP, account criteria, buying roles, exclusions, qualification rules, campaign objective, sender, CTA, and measurement model."],
  ["Prepare", "Target research, profile readiness, message variants, follow-up, objection handling, tracking, and handoff requirements."],
  ["Launch", "Approved outreach begins in controlled batches, with early account and response signals reviewed before expansion."],
  ["Engage and qualify", "Replies are classified by intent and relevant conversations are assessed against agreed qualification criteria."],
  ["Handoff and improve", "Sales receives the history, qualification context, owner, and next action; its feedback improves targeting and messaging."],
];

const cadence = [
  ["Days 1–30", "Research, ICP alignment, targeting, profile readiness, messaging, and measurement planning"],
  ["Days 31–60", "Research execution, campaign setup, controlled launch, reply handling, qualification, and early learning"],
  ["Days 61–90", "Sales feedback, audience and message optimization, reporting, and next-stage priorities"],
];

const measurement = [
  ["Targeting quality", "ICP and buying-role match, valid profiles, exclusions, duplicates, and routing accuracy"],
  ["Early activity", "Prospects researched, approved outreach, connection acceptance, and activity by segment"],
  ["Conversation quality", "Replies, positive responses, objections, referrals, and meaningful conversations"],
  ["Qualification and handoff", "ICP fit, qualification status, accepted handoffs, sales acceptance, and response time"],
  ["Meetings, when scoped", "Requested, booked, attended, disqualified, and progressed meetings"],
  ["Pipeline, when trackable", "Sourced or influenced opportunities, stage progression, pipeline value, and sales feedback"],
];

const costs = [
  ["Profiles and campaigns", "More profiles require additional setup, coordination, monitoring, and reporting."],
  ["Audiences and markets", "More segments and geographies increase research and message requirements."],
  ["Research and data depth", "Deeper validation, enrichment, prioritization, and QA require more work."],
  ["Activity and cadence", "More campaign operations increase review, testing, and monitoring requirements."],
  ["Profile and content support", "Additional readiness, proof development, or content expands the scope."],
  ["Reply handling and qualification", "More conversation management requires additional classification, routing, and sales coordination."],
  ["CRM and reporting", "Integrations, field mapping, attribution, dashboards, and QA add implementation work."],
  ["Third-party costs", "LinkedIn, Sales Navigator, data, automation, paid media, and other vendor costs remain separate unless scoped."],
];

const related = [
  ["A connected multi-channel system", "B2B Lead Generation Services", "/services/b2b-lead-generation-services"],
  ["Organic visibility and profile authority", "LinkedIn Marketing Services", "/services/linkedin-marketing-services"],
  ["Founder or SME authority", "Thought Leadership Marketing", "/services/thought-leadership-marketing"],
  ["Advanced nurture and routing", "B2B Marketing Automation Services", "/services/b2b-marketing-automation-services"],
  ["Paid acquisition or retargeting", "B2B Paid Media Agency", "/services/b2b-paid-media-agency"],
  ["Delivery and working model", "Our Approach", "/our-approach"],
];

const faqs = [
  ["What is included in Stratskye's B2B LinkedIn lead generation services?", "Stratskye can manage the agreed combination of ICP alignment, account and buying-role research, profile readiness, messaging, outreach, follow-up, qualification, sales handoff, and reporting. Scope depends on your audience, sender model, systems, and reply-handling requirements."],
  ["How is LinkedIn lead generation different from LinkedIn marketing?", "LinkedIn lead generation focuses on researched prospecting and direct, relationship-led outreach. LinkedIn marketing covers organic content, company-page activity, executive visibility, and engagement. They can support each other, but they are separate workstreams."],
  ["How do you define a qualified LinkedIn lead?", "Qualification criteria are agreed before launch and can include account fit, role relevance, expressed interest, problem relevance, timing, and sales acceptance. A profile, connection, or reply is not automatically a qualified lead."],
  ["Do you use LinkedIn Sales Navigator?", "Sales Navigator can support account and prospect research where it fits the engagement. License ownership and subscription costs are confirmed during scoping. The tool supports discovery; strategy still depends on the ICP, buying roles, research, and messaging."],
  ["Do you use LinkedIn automation or scraping?", "Stratskye does not position scraping or uncontrolled mass messaging as a service. Any technology used must fit the approved operating model, applicable platform requirements, account controls, and human-review process."],
  ["Who handles replies, qualification, and CRM handoff?", "Responsibilities are agreed during scoping. Stratskye can support reply monitoring, qualification, routing, and handoff where included. Appointment setting, advanced CRM implementation, and sales closing remain separate unless explicitly scoped."],
  ["How much do B2B LinkedIn lead generation services cost?", "There is no useful flat price because scope changes with sender count, audience breadth, research depth, markets, messaging complexity, reply handling, qualification, CRM work, and reporting."],
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

export default function LinkedInLeadGenerationPage() {
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: "B2B LinkedIn Lead Generation Services", serviceType: "LinkedIn lead generation", description, url: `https://stratskye.com${path}`, provider: { "@id": "https://stratskye.com/#organization" }, areaServed: "Worldwide", audience: { "@type": "BusinessAudience", audienceType: "B2B SaaS and technology companies" } },
    { "@type": "BreadcrumbList", itemListElement: [["Home", "/"], ["Services", "/services"], ["B2B Lead Generation", "/services/b2b-lead-generation-services"], ["LinkedIn Lead Generation", path]].map(([name, url], index) => ({ "@type": "ListItem", position: index + 1, name, item: `https://stratskye.com${url}` })) },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] };

  return <main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

    <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true" /><div className={styles.shell}>
      <nav className={local.breadcrumb} aria-label="Breadcrumb"><Link href="/services">Services</Link><span>/</span><Link href="/services/b2b-lead-generation-services">Lead Generation</Link><span>/</span><span aria-current="page">LinkedIn Lead Generation</span></nav>
      <div className={styles.heroGrid}><div><p className={styles.kicker}>LinkedIn prospecting · B2B technology</p><h1 className={local.title}>LinkedIn Lead Generation Services <span>for SaaS and Technology Companies</span></h1>
      <p className={styles.lede}>LinkedIn prospecting works better when the right people are identified before anyone starts messaging them.</p><p className={local.heroCopy}>Stratskye connects ICP alignment, account and buying-role research, credible outreach, relationship-led follow-up, qualification, and sales handoff into one focused workstream.</p>
      <div className={styles.heroActions}><Cta /><span className={styles.proofLine}>60+ brands across B2B tech, fintech, and SaaS since 2019.</span></div></div>
      <div className={styles.heroVisual}><Image src="/images/services/b2b-lead-generation/team-collaboration.webp" alt="B2B technology team planning a LinkedIn prospecting campaign" fill sizes="(max-width: 900px) 100vw, 44vw" className={styles.coverImage} preload /><div className={styles.visualOverlay} /><div className={styles.pipelineCard}><div className={styles.pipelineTop}><span><UserRoundSearch size={18} aria-hidden="true" /> Prospecting system</span><span className={styles.liveDot}>Human-led</span></div><div className={styles.pipelineFlow}><span>ICP</span><ArrowRight size={15}/><span>Conversation</span><ArrowRight size={15}/><span>Handoff</span></div></div></div></div>
    </div></section>

    <section className={styles.lightSection}><div className={styles.shell}><Intro eyebrow="The service" title="Research first. Relevant conversations next." copy="B2B LinkedIn lead generation is a managed prospecting service built around your offer, ideal customer profile, target accounts, and buying roles. We handle the research, messaging, outreach, follow-up, qualification, and handoff required to turn LinkedIn activity into useful sales conversations." /><p className={styles.supportingCopy}>The work is best suited to companies with a live offer, real validation, meaningful contract value, and sales capacity to follow up.</p></div></section>

    <section className={styles.decisionSection}><div className={styles.shell}><div className={styles.decisionGrid}><div className={styles.stickyIntro}><p className={styles.eyebrow}>Quick decision</p><h2>Know how the engagement works before the first message.</h2><p>LinkedIn is one focused workstream within a broader lead-generation system. Here is the shape of the engagement.</p></div><div className={styles.decisionList}>{decisionPoints.map(([label, value], index) => <div className={styles.decisionItem} key={label}><span className={styles.decisionNumber}>{String(index + 1).padStart(2, "0")}</span><span className={styles.decisionLabel}>{label}</span><strong>{value}</strong></div>)}</div></div></div></section>

    <section className={styles.inputSection}><div className={styles.shell}><Intro eyebrow="Where outreach breaks" title="Why LinkedIn activity is not creating qualified conversations" copy="Getting connections is easy to mistake for progress. The real issue usually sits in the targeting, message, follow-up, or handoff." /><div className={local.problemGrid}>{problems.map(([heading, text], index) => <article className={local.problem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className={styles.servicesSection}><div className={styles.shell}><Intro eyebrow="What you receive" title="Working assets, not a vague promise to “do outreach.”" copy="Every deliverable gives the campaign a clearer target, message, operating rule, or handoff point." /><div className={styles.serviceGrid}>{deliverables.map(([heading, text], index) => <article className={`${styles.serviceCard} ${local.deliverable}`} key={heading}><div className={styles.serviceCardTop}><span>{String(index + 1).padStart(2, "0")}</span>{index < 3 ? <SearchCheck size={23} aria-hidden="true" /> : index < 6 ? <MessageSquareText size={23} aria-hidden="true" /> : <ShieldCheck size={23} aria-hidden="true" />}</div><h3>{heading}</h3><p>{text}</p></article>)}</div><p className={local.darkNote}>Where available, LinkedIn Sales Navigator can support account and prospect research. The tool supports discovery, but it does not replace ICP strategy or human judgment.</p></div></section>

    <section className={styles.fitSection}><div className={styles.shell}><Intro eyebrow="Fit check" title="Who B2B LinkedIn lead generation is for" copy="The strongest fit is a company with enough commercial clarity for LinkedIn prospecting to have somewhere useful to go." /><div className={styles.fitGrid}><div className={`${styles.fitCard} ${styles.fitCardYes}`}><div className={styles.fitHeading}><Check size={22}/> Good fit</div><ul>{fitFor.map(item => <li key={item}>{item}</li>)}</ul></div><div className={`${styles.fitCard} ${styles.fitCardNo}`}><div className={styles.fitHeading}><X size={22}/> May not be the right fit</div><ul>{notFit.map(item => <li key={item}>{item}</li>)}</ul></div></div></div></section>

    <section className={styles.whySection}><div className={styles.shell}><Intro eyebrow="Why Stratskye" title="Technical fluency, controlled execution, and a usable handoff." /><div className={styles.reasonList}>{reasons.map(([heading, text], index) => <div className={styles.reasonItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></div>)}</div><div className={local.inlineCta}><Cta /></div></div></section>

    <section className={styles.processSection}><div className={styles.shell}><Intro eyebrow="The process" title="How Stratskye runs B2B LinkedIn lead generation" copy="The process starts with commercial context, then moves through targeting, preparation, controlled outreach, qualification, and sales feedback." /><div className={styles.processGrid}>{process.map(([heading, text], index) => <article className={styles.processCard} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div><div className={styles.cadenceGrid}>{cadence.map(([period, focus]) => <div key={period}><strong>{period}</strong><span>{focus}</span></div>)}</div><p className={local.darkNote}>Your team provides product and customer context, approved proof, required profile or operating access, CRM information where applicable, compliance guidance, timely approvals, and sales feedback.</p><div className={local.inlineCta}><Cta>Discuss Your LinkedIn Lead Generation Plan</Cta></div></div></section>

    <section className={styles.measureSection}><div className={styles.shell}><Intro eyebrow="Measurement" title="A connection is not a lead." copy="Measurement should show what happened at each stage. A reply is not automatically an opportunity, and activity should not be confused with qualification or pipeline." /><DataTable rows={measurement}/><p className={local.lightNote}>Results depend on offer strength, ICP accuracy, sender credibility, market size, messaging, response handling, and sales follow-up. Meetings and pipeline reporting apply when they are included and trackable.</p></div></section>

    <section className={styles.costSection}><div className={styles.shell}><Intro eyebrow="Engagement scope" title="What affects LinkedIn lead generation pricing" copy="Pricing follows the amount of research, campaign management, conversation handling, and system coordination required." /><div className={styles.costGrid}>{costs.map(([heading, text], index) => <div className={styles.costItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{heading}</strong><p>{text}</p></div></div>)}</div><div className={local.inlineCta}><Cta>Get a Scoped LinkedIn Lead Generation Plan</Cta></div></div></section>

    <section className={styles.relatedSection}><div className={styles.shell}><Intro eyebrow="The wider system" title="How this service connects to B2B lead generation" copy="These services solve different parts of the buyer journey. They can work together, but they are not automatic components of LinkedIn prospecting." /><div className={styles.relatedGrid}>{related.map(([need, label, href]) => <Link className={styles.relatedLink} href={href} key={label}><span>{need}</span><strong>{label}</strong><ArrowUpRight size={18} aria-hidden="true" /></Link>)}</div></div></section>

    <section className={styles.faqSection}><div className={styles.shell}><Intro eyebrow="FAQ" title="B2B LinkedIn lead generation questions, answered." /><div className={styles.faqList}>{faqs.map(([question, answer], index) => <details className={styles.faqItem} key={question} open={index === 0}><summary><span>{question}</span><span className={styles.faqPlus} aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className={styles.finalCta}><div className={styles.finalGlow} aria-hidden="true"/><div className={styles.shell}><div className={styles.ctaInner}><p className={styles.eyebrow}>Turn activity into conversations</p><h2>Make LinkedIn useful to sales.</h2><p>If LinkedIn is producing activity but not enough relevant conversations, the first question is whether the targeting, messaging, and handoff system is set up correctly.</p><p>A strategy call can review your ICP, buying roles, current outreach, sender profile, sales process, and scope requirements.</p><Cta /><span className={styles.proofLine}>60+ brands across B2B tech, fintech, and SaaS since 2019.</span></div></div></section>
  </main>;
}
