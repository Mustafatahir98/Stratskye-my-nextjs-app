import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import styles from "../b2b-lead-generation-services/page.module.css";
import local from "./page.module.css";

const path = "/services/crm-integration-services";
const title = "CRM Integration Services for B2B | Stratskye";
const description = "Connect your CRM and marketing systems with mapped, tested data flows. Stratskye plans CRM integrations around your B2B processes and ownership rules. Book a strategy call.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: "website", images: [{ url: "/images/services/crm-integration/integration-planning.png", width: 1672, height: 941, alt: "CRM and marketing operations colleagues planning connected data flows" }] },
};

const decisionPoints = [
  ["Best for", "B2B teams with identified systems, accountable owners, defined business processes, and a clear need for selected data to move between platforms"],
  ["We handle", "Requirements, field and object mapping, integration design, approved configuration, testing, launch coordination, documentation, and scoped monitoring"],
  ["You provide", "Authorized access, system owners, business definitions, security requirements, sample data, reviewers, and timely acceptance"],
  ["Timeline", "Discovery, technical validation, build, QA, and phased launch, with timing following complexity and dependencies"],
  ["Communication", "One main contact with a delivery cadence agreed once the engagement is scoped"],
  ["Pricing", "Custom scope based on systems, objects, fields, data direction, transformations, volume, testing, and support"],
  ["Main problem solved", "Critical CRM and marketing data does not move reliably or consistently between the systems your teams use"],
];
const gaps = [
  ["Disconnected records", "Lead, contact, account, and campaign data live in separate systems without dependable relationships between them."],
  ["Conflicting definitions", "Marketing and sales use different meanings for lifecycle stage, qualified lead, source, or owner."],
  ["Late or one-way updates", "A change reaches the next system too late, or never returns to the system where it is needed."],
  ["Weak field mappings", "Formats, picklists, identifiers, and required values do not match, dropping or distorting data during sync."],
  ["Duplicate identities", "Unmatched people and accounts fragment activity histories and reporting."],
  ["Hidden failures", "Errors have no useful alert, retry path, exception queue, or owner watching them."],
  ["Uncontrolled changes", "A field, connector, workflow, or permission changes without review of its dependencies."],
];
const deliverables = [
  ["Integration requirements brief", "Defines systems, business process, use cases, record populations, owners, constraints, and acceptance criteria."],
  ["Current and target data-flow map", "Shows how selected records and events move today and how the approved integration should work."],
  ["Object and field mapping specification", "Documents source and destination fields, identifiers, direction, transformations, defaults, and validation rules."],
  ["Source-of-truth and conflict rules", "Defines which system owns each value and how conflicting or stale updates are handled."],
  ["Configured integration components", "Implements the approved connector, middleware, API, or webhook scope within agreed permissions."],
  ["Test plan and evidence", "Records normal, boundary, failure, retry, duplicate, permission, and volume tests as applicable."],
  ["Launch and monitoring plan", "Defines rollout, alerts, exception handling, recovery responsibility, and launch acceptance."],
  ["Documentation and handover", "Provides configuration records, operating guidance, change notes, and agreed support responsibilities."],
];
const fitFor = [
  "Known systems and use case, accountable owners, defined records and fields, feasible access, representative test data, and review capacity",
  "An organization that can name the business process the integration supports",
  "Stakeholders who can agree ownership, match keys, and lifecycle definitions before build starts",
  "A team ready to provide security requirements and acceptance reviewers",
];
const notFit = [
  "A tool-selection-only need with no committed platform",
  "No authorized access or technical owner available to support the work",
  "Process definitions or data ownership decisions still unresolved internally",
  "An expectation of a universal plug-and-play connection without configuration or testing",
];
const reasons = [
  ["Grounded in your B2B process", "The connection serves qualification, campaign, lifecycle, ownership, and reporting decisions your team actually makes."],
  ["Business definitions first", "Objects, fields, source-of-truth rules, and acceptance criteria are agreed before configuration begins."],
  ["Integration-aware data design", "Identifiers, required fields, transformations, duplicates, consent, and failure paths are reviewed as part of design."],
  ["QA and ownership built in", "Normal and exception paths are tested, with named owners for monitoring, changes, and incident response."],
  ["Structured delivery", "A cadence, timeline, and support model are confirmed for the specific engagement."],
];
const process = [
  ["Review and prioritize", "Identify systems, business process, current flow, record populations, risks, owners, and intended outcome. A full CRM audit is scoped separately."],
  ["Agree requirements", "Approve objects, fields, identifiers, direction, timing, transformations, source-of-truth rules, permissions, and acceptance criteria."],
  ["Design the integration", "Select a feasible connection pattern and define dependencies, errors, monitoring, retries, duplicates, and recovery rules."],
  ["Configure and test", "Build in the agreed environment and test normal paths, edge cases, failures, permissions, transformations, and representative volume."],
  ["Approve and launch", "Complete business and technical acceptance, confirm treatment of current records, phase rollout, and activate alerts."],
  ["Monitor and hand over", "Review errors and data-quality signals, resolve scoped defects, document configuration, train owners, and confirm support limits."],
];
const cadence = [
  ["Days 1 to 30", "Discovery, access and feasibility review, definitions, mapping, risk review, and approved integration design"],
  ["Days 31 to 60", "Configuration, representative data tests, exception and permission tests, defect resolution, and acceptance preparation"],
  ["Days 61 to 90", "Phased launch where ready, monitoring, scoped refinements, documentation, training, and handover or agreed support"],
];
const inputs = [
  ["Business use case and definitions", "Determine what data must move and what each value means to marketing and sales"],
  ["Authorized system access and owners", "Allow technical validation, configuration, approvals, and issue resolution"],
  ["Data model and representative records", "Support field mapping, identity matching, transformations, and test coverage"],
  ["Security and compliance requirements", "Define permitted access, transfer, retention, review, and approval constraints"],
  ["Existing connectors and automation inventory", "Reveal dependencies, conflicts, duplicate actions, and change risks"],
  ["Technical and business acceptance reviewers", "Approve design, tests, launch readiness, and operating ownership"],
];
const measurement = [
  ["Processing and availability", "Eligible records attempted and completed, success and failure rates, connector availability where measurable"],
  ["Timeliness", "End-to-end synchronization latency, delayed queues, retry duration, and time to resolution"],
  ["Data quality", "Required-field completeness, mapping accuracy, invalid values, duplicate or unmatched records"],
  ["Exceptions and operations", "Error volume, retry success, quarantined records, alert response, and unresolved exception age"],
  ["Business use, when trackable", "Routing, lifecycle, campaign, and attribution coverage using agreed definitions"],
];
const costs = [
  ["Systems and connection method", "System count, native connectors, middleware, APIs, webhooks, authentication, and edition limits."],
  ["Objects, fields, and direction", "Record types, field count, one-way or bidirectional flow, identifiers, relationships, and source-of-truth rules."],
  ["Transformations and business logic", "Value conversions, conditional mappings, enrichment, routing dependencies, and conflict handling."],
  ["Data volume and readiness", "Historical and ongoing volume, duplicates, missing values, cleanup dependencies, and current-record treatment."],
  ["Testing, security, and environments", "Sandboxes, permissions, rate limits, security review, edge cases, load expectations, and acceptance rounds."],
  ["Monitoring, documentation, and support", "Alerting, exception queues, reporting, training, handover depth, support period, and change requests."],
];
const related = [
  ["A wider connected automation program", "B2B Marketing Automation Services", "/services/b2b-marketing-automation-services"],
  ["Diagnosis before building", "Marketing Automation Audit", "/services/b2b-marketing-automation-services"],
  ["Configured triggers, actions, and handoffs", "Marketing Workflow Automation", "/services/marketing-workflow-automation"],
  ["Customer-facing nurture and follow-up", "Email Automation Services", "/services/b2b-marketing-automation-services"],
  ["Buyer-stage and stakeholder alignment", "Customer Journey Mapping Services", "/services/b2b-marketing-automation-services"],
  ["Historical system replacement or consolidation", "Discuss a CRM Migration Scope", "/contact-form"],
];
const faqs = [
  ["What do CRM integration services include?", "Requirements gathering, field and object mapping, integration design, approved configuration, testing, launch coordination, documentation, and scoped monitoring. Exact systems, objects, and fields are confirmed in the signed scope."],
  ["Which systems can Stratskye integrate with our CRM?", "Feasibility depends on your CRM, other platforms, their editions, connectors, APIs, permissions, and security requirements. Supported tools are named after that review."],
  ["Can you support one-way and bidirectional synchronization?", "Yes, where feasible. Direction follows the business use case, source-of-truth rules, platform capabilities, and risk review."],
  ["How do you handle field mapping, duplicates, and conflicting updates?", "Mapping covers identifiers, normalization, transformations, match rules, defaults, and a conflict policy. It reduces errors without promising perfect data."],
  ["Are CRM migration and data cleanup included?", "Migration, bulk data cleansing, archival strategy, and major CRM redesign are separate unless the signed scope includes them."],
  ["How long does a CRM integration take?", "Timing depends on discovery, technical validation, mapping, configuration, and review speed. A timeline is confirmed once discovery is complete."],
  ["How do you test and monitor the integration?", "Testing uses representative records, edge cases, failures, retries, and permissions before launch. Agreed alerts and monitoring track post-launch exceptions."],
  ["What access and input does our team need to provide?", "Authorized access, named owners, field definitions, sample records, security requirements, and reviewers for design, testing, and launch acceptance."],
  ["Who maintains the integration after launch?", "Documentation, a monitoring owner, support terms, connector ownership, and change approvals are defined in the handover."],
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

export default function CRMIntegrationServicesPage() {
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: "CRM Integration Services for B2B", serviceType: "CRM integration services", description, url: `https://stratskye.com${path}`, provider: { "@id": "https://stratskye.com/#organization" }, areaServed: "Worldwide", audience: { "@type": "BusinessAudience", audienceType: "B2B technology companies" } },
    { "@type": "BreadcrumbList", itemListElement: [["Home", "/"], ["Services", "/services"], ["B2B Marketing Automation", "/services/b2b-marketing-automation-services"], ["CRM Integration Services", path]].map(([name, url], index) => ({ "@type": "ListItem", position: index + 1, name, item: `https://stratskye.com${url}` })) },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] };

  return <main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true"/><div className={styles.shell}>
      <nav className={local.breadcrumb} aria-label="Breadcrumb"><Link href="/services">Services</Link><span>/</span><Link href="/services/b2b-marketing-automation-services">Marketing Automation</Link><span>/</span><span aria-current="page">CRM Integration</span></nav>
      <div className={styles.heroGrid}><div><p className={styles.kicker}>B2B marketing operations · CRM integration</p><h1 className={local.title}>CRM Integration Services <span>for Connected B2B Marketing</span></h1><p className={styles.lede}>Ask three systems who a lead belongs to and you&apos;ll often get three different answers. The CRM says one owner, the marketing platform another, and the reconciliation spreadsheet says neither is right.</p><p className={local.heroCopy}>Stratskye maps the data your systems need to share, defines who owns each value, builds and tests the connection inside approved platforms, and documents how it is monitored once live.</p><div className={styles.heroActions}><Cta/></div></div>
      <div className={`${styles.heroVisual} ${local.heroVisual}`}><Image src="/images/services/crm-integration/integration-planning.png" alt="CRM and marketing operations team planning connected data flows" fill sizes="(max-width: 900px) 100vw, 44vw" className={styles.coverImage} preload/><div className={styles.visualOverlay}/><div className={styles.pipelineCard}><div className={styles.pipelineTop}><span>Connected records</span><span className={styles.liveDot}>Mapped</span></div><div className={styles.pipelineFlow}><span>CRM</span><ArrowRight size={15}/><span>Rules</span><ArrowRight size={15}/><span>Marketing</span></div></div></div></div>
    </div></section>
    <section className={styles.lightSection}><div className={styles.shell}><Intro eyebrow="The service" title="Data movement your team can trust." copy="CRM integration services plan, configure, test, and document agreed data flows between your CRM and marketing or operational systems. Scope can cover contacts, leads, accounts, opportunities, campaign responses, consent fields, lifecycle stages, activities, and ownership data."/><p className={styles.supportingCopy}>The signed scope names systems, objects, fields, direction, frequency, source-of-truth rules, transformations, and exception handling. Your team supplies access, system owners, definitions, security review, samples, and acceptance testing.</p></div></section>
    <section className={styles.decisionSection}><div className={styles.shell}><div className={styles.decisionGrid}><div className={styles.stickyIntro}><p className={styles.eyebrow}>Quick decision</p><h2>Define what each system owns before connecting them.</h2><p>The build starts with your business process, selected records, source-of-truth rules, and a practical acceptance plan.</p></div><div className={styles.decisionList}>{decisionPoints.map(([label, value], index) => <div className={styles.decisionItem} key={label}><span className={styles.decisionNumber}>{String(index + 1).padStart(2, "0")}</span><span className={styles.decisionLabel}>{label}</span><strong>{value}</strong></div>)}</div></div></div></section>
    <section className={styles.inputSection}><div className={styles.shell}><Intro eyebrow="Where data breaks" title="Why CRM data fails to flow reliably across systems." copy="A record that looks correct in one place and wrong in another usually traces back to a recurring gap in definitions, mapping, identity, timing, or ownership."/><div className={local.gapGrid}>{gaps.map(([heading, text], index) => <article className={local.gapCard} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div><div className={local.inlineCta}><Cta>Discuss Your Integration Gaps</Cta></div></div></section>
    <section className={styles.servicesSection}><div className={styles.shell}><Intro eyebrow="What you receive" title="Reviewable integration artifacts, not a vague promise to connect tools." copy="The exact systems, objects, fields, environments, review rounds, and support period are confirmed in your proposal."/><div className={local.deliverableList}>{deliverables.map(([heading, purpose], index) => <article className={local.deliverableRow} key={heading}><span className={local.deliverableNumber}>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{purpose}</p></div></article>)}</div></div></section>
    <section className={styles.fitSection}><div className={styles.shell}><Intro eyebrow="Fit check" title="Who CRM integration services are for"/><div className={styles.fitGrid}><div className={`${styles.fitCard} ${styles.fitCardYes}`}><div className={styles.fitHeading}><Check size={22}/> Good fit</div><ul>{fitFor.map(item => <li key={item}>{item}</li>)}</ul></div><div className={`${styles.fitCard} ${styles.fitCardNo}`}><div className={styles.fitHeading}><X size={22}/> May not be the right fit yet</div><ul>{notFit.map(item => <li key={item}>{item}</li>)}</ul></div></div></div></section>
    <section className={styles.whySection}><div className={styles.shell}><div className={styles.whyGrid}><div className={`${styles.whyVisual} ${local.researchVisual}`}><Image src="/images/services/crm-integration/field-mapping-review.png" alt="CRM specialists reviewing field mapping and integration test plans" fill sizes="(max-width: 900px) 100vw, 42vw" className={styles.coverImage}/><div className={local.imageCaption}><span>Trust the handoff</span><strong>Map → test → monitor</strong></div></div><div><Intro eyebrow="Why Stratskye" title="Integration design grounded in B2B business rules."/><div className={styles.reasonList}>{reasons.map(([heading, text], index) => <div className={styles.reasonItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></div>)}</div><div className={local.inlineCta}><Cta/></div></div></div></div></section>
    <section className={styles.processSection}><div className={styles.shell}><Intro eyebrow="The process" title="How Stratskye plans and implements CRM integrations" copy="We agree business rules before configuration so the connection reflects decisions your team has actually made."/><div className={styles.processGrid}>{process.map(([heading, text], index) => <article className={styles.processCard} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div><div className={styles.cadenceGrid}>{cadence.map(([period, focus]) => <div key={period}><strong>{period}</strong><span>{focus}</span></div>)}</div><div className={local.inputBlock}><h3>What we need from your team</h3><DataTable rows={inputs}/></div><div className={local.inlineCta}><Cta>Discuss Your Integration Plan</Cta></div></div></section>
    <section className={styles.measureSection}><div className={styles.shell}><Intro eyebrow="Measurement" title="A successful sync is only the first check." copy="Before measuring improvement, we agree the eligible record population, baseline, observation window, and data owner. Delivery, timeliness, data quality, and exception handling each matter."/><DataTable rows={measurement}/><p className={local.lightNote}>Business use is assessed where tracking supports it. A synchronized lead is not automatically a qualified lead, and human follow-up remains separate from technical delivery.</p><div className={local.inlineCta}><Cta>Discuss Your Success Criteria</Cta></div></div></section>
    <section className={styles.costSection}><div className={styles.shell}><Intro eyebrow="Engagement scope" title="What affects CRM integration services pricing" copy="Scope follows requirements and technical validation. The number of systems alone does not show the work involved in mapping, identity, transformations, error handling, and testing."/><div className={styles.costGrid}>{costs.map(([heading, text], index) => <div className={styles.costItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{heading}</strong><p>{text}</p></div></div>)}</div><p className={styles.costNote}>Subscriptions, middleware fees, custom application development, migrations, large-scale cleansing, CRM redesign, and indefinite administration are separate unless specifically included.</p><div className={local.inlineCta}><Cta>Scope Your CRM Integration</Cta></div></div></section>
    <section className={styles.relatedSection}><div className={styles.shell}><Intro eyebrow="The wider system" title="Connect CRM integration to the rest of B2B marketing."/><div className={styles.relatedGrid}>{related.map(([need, label, href]) => <Link className={styles.relatedLink} href={href} key={need}><span>{need}</span><strong>{label}</strong><ArrowUpRight size={18}/></Link>)}</div></div></section>
    <section className={styles.faqSection}><div className={styles.shell}><Intro eyebrow="FAQ" title="CRM integration services questions, answered."/><div className={styles.faqList}>{faqs.map(([question, answer], index) => <details className={styles.faqItem} key={question} open={index === 0}><summary><span>{question}</span><span className={styles.faqPlus} aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className={styles.finalCta}><div className={styles.finalGlow} aria-hidden="true"/><div className={styles.shell}><div className={styles.ctaInner}><p className={styles.eyebrow}>Connect your systems</p><h2>Get your systems speaking the same language.</h2><p>Important customer and campaign data should not depend on someone manually reconciling three systems that disagree.</p><p>A strategy call covers your current systems, the data flow you need, constraints, owners, and the most useful next step.</p><Cta/></div></div></section>
  </main>;
}
