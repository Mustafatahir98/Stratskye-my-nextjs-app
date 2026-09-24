import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import styles from "../b2b-lead-generation-services/page.module.css";
import local from "./page.module.css";

const path = "/services/marketing-workflow-automation";
const title = "Marketing Workflow Automation for B2B Technology Companies";
const description = "Turn agreed marketing processes into owned, tested workflows. Stratskye designs triggers, routing, exits, QA, and handover in your existing platform.";

export const metadata: Metadata = {
  title: `${title} | Stratskye`,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: "website", images: [{ url: "/images/services/marketing-workflow-automation/workflow-planning.png", width: 1536, height: 1024, alt: "Marketing and revenue operations colleagues planning workflow handoffs" }] },
};

const decisionPoints = [
  ["Best for", "B2B teams with a repeatable process, an operational platform or CRM, accountable owners, and capacity to review and test"],
  ["We handle", "Agreed workflow requirements, logic design, configuration, testing, launch coordination, documentation, and scoped monitoring"],
  ["You provide", "System access, process and qualification rules, data context, technical owners, approved assets where needed, and timely acceptance"],
  ["Timeline", "Set collaboratively after discovery, following a prioritized build, QA, and phased launch"],
  ["Communication", "One main contact with an agreed review cadence, confirmed when the engagement is scoped"],
  ["Pricing", "Custom scope based on workflow volume, logic complexity, systems, data dependencies, testing, and support"],
  ["Problem solved", "Repeatable marketing actions depending on manual coordination or inconsistent rules instead of an owned, tested process"],
];
const gaps = [
  ["Handoffs go unowned", "A form submission or status change sits in a queue because the next action has no clear owner."],
  ["Routing differs by team", "Campaign and team rules conflict, sending qualified records to the wrong person or delaying follow-up."],
  ["Automations overlap", "Competing workflows update the same fields or create duplicate tasks and messages."],
  ["Records never exit", "Qualified or converted records continue through a sequence without a defined exit condition."],
  ["Bad data changes the path", "Incomplete or stale fields send records down the wrong branch or block entry altogether."],
  ["Failures stay invisible", "Without alerts, recovery steps, or change ownership, small changes can quietly break dependent workflows."],
];
const deliverables = [
  ["Use-case and requirements brief", "Defines the process, record type, desired action, priority, and acceptance criteria."],
  ["Current and future process map", "Shows what changes, where manual steps remain, and who owns each handoff."],
  ["Workflow logic specification", "Documents triggers, conditions, branches, actions, delays, exits, and exclusions."],
  ["Configured selected workflows", "Implements approved logic within the agreed platform and permissions."],
  ["Routing and ownership rules", "Defines assignment, deadlines, escalation, and exception responsibility."],
  ["Data dependency register", "Identifies required fields, owners, accepted values, and blockers."],
  ["QA plan and test evidence", "Records normal and edge-path tests, fixes, and launch readiness."],
  ["Launch and recovery plan", "Defines rollout, monitoring, pausing, and platform-appropriate recovery."],
  ["Documentation and handover", "Provides a workflow inventory, change notes, and agreed monitoring responsibilities."],
];
const fitFor = [
  "A repeatable process, existing systems, agreed owners, and usable data or a remediation plan",
  "Marketing and sales able to agree qualification, lifecycle, and routing rules before configuration",
  "Capacity to provide access, test records, and time for business acceptance",
  "Realistic testing and approval capacity within your team",
];
const notFit = [
  "A request limited to a tool recommendation or isolated shortcut",
  "An expectation of guaranteed demand or revenue from automation alone",
  "Nobody owns the process, source data, or platform involved",
  "An expectation of permanent, set-and-forget operation without ongoing ownership",
];
const reasons = [
  ["B2B context built into the logic", "Triggers and branches reflect real qualification and handoff decisions for a complex B2B buying process."],
  ["Process before configuration", "Each rule connects to a decision your team has agreed and an owner accountable for it."],
  ["Data-aware design", "Required fields and system dependencies are checked before configuration so missing data does not quietly derail the path."],
  ["QA and handover built in", "Normal paths, exceptions, acceptance, and operating documentation are visible throughout delivery."],
  ["Structured delivery", "A phased 30/60/90 sequence, one main contact, and a regular review cadence keep work predictable once scoped."],
];
const process = [
  ["Review and prioritize", "Identify the process, existing workflows, bottleneck, baseline, dependencies, and business owner."],
  ["Agree requirements", "Define record types, qualification and lifecycle rules, required fields, owners, and acceptance criteria."],
  ["Design the logic", "Document triggers, conditions, branches, timing, exclusions, exits, and recovery responsibilities for approval."],
  ["Configure and test", "Build in the agreed environment, inspect conflicts, test representative and edge cases, and document outcomes."],
  ["Approve and launch", "Complete business acceptance, confirm owners, and phase rollout with a platform-appropriate recovery plan."],
  ["Monitor and hand over", "Review exceptions and operational metrics, fix scoped issues, train owners, and document support limits."],
];
const cadence = [
  ["Days 1 to 30", "Review, process decisions, baseline, prioritized requirements, dependency check, first logic specification"],
  ["Days 31 to 60", "Configure priority workflows, run QA, resolve scoped defects, secure acceptance, phase launch where ready"],
  ["Days 61 to 90", "Review exceptions and baseline comparisons, refine agreed logic, document ownership, hand over or continue scoped support"],
];
const inputs = [
  ["Process and qualification decisions", "Define the business rules the workflow must execute"],
  ["Access and a technical owner", "Enable configuration and resolve system constraints"],
  ["Data model and sample records", "Support field validation, path testing, and exception design"],
  ["Existing workflow inventory", "Helps identify conflicts and dependencies before launch"],
  ["Approved assets and contact rules", "Support scoped customer-facing actions; your team owns consent approval"],
  ["Reviewers and an acceptance owner", "Provide timely approval of logic, tests, and launch readiness"],
];
const measurement = [
  ["Execution and QA", "Acceptance tests passed, records processed, action failures, and exception rates"],
  ["Routing and ownership", "Assignment accuracy, unowned records, and time to next action"],
  ["Operational effort", "Manual steps per process, exception workload, and maintained workflow coverage"],
  ["Data and governance", "Required-field completeness, conflicting updates, and documented changes"],
  ["Downstream outcomes, when trackable", "Progression and handoff outcomes using agreed CRM definitions, shown as context rather than guaranteed causation"],
];
const costs = [
  ["Workflow volume and complexity", "Number of use cases, branches, actions, timing rules, exits, and exceptions."],
  ["Platforms and dependencies", "System count, subscription capabilities, permissions, and integration requirements."],
  ["Data readiness", "Required fields, quality checks, and remediation dependencies."],
  ["Testing and approvals", "Record types, edge paths, environment constraints, and acceptance rounds."],
  ["Documentation and support", "Handover depth, training, monitoring period, and ongoing management."],
];
const related = [
  ["A wider connected automation program", "B2B Marketing Automation Services", "/services/b2b-marketing-automation-services"],
  ["Diagnosis and prioritized remediation before building", "Marketing Automation Audit", "/services/b2b-marketing-automation-services"],
  ["Cross-system fields and data movement", "CRM Integration Services", "/services/b2b-marketing-automation-services"],
  ["Customer-facing nurture and follow-up content", "Email Automation Services", "/services/b2b-marketing-automation-services"],
  ["Buyer stages and stakeholder decisions", "Customer Journey Mapping Services", "/services/b2b-marketing-automation-services"],
];
const faqs = [
  ["What is marketing workflow automation, and how is it different from broader marketing automation?", "Workflow automation configures a specific process into tested triggers, actions, and rules inside your existing platform. The parent marketing automation service covers wider strategy, multiple workstreams, and system-level decisions."],
  ["Which processes can you automate?", "Common examples include lead assignment, qualification handoffs, lifecycle updates, internal alerts, campaign tasks, and controlled entry or exit from follow-up programs. A feasibility review determines what fits your systems and data."],
  ["Can you work with our existing platform and CRM?", "Compatibility depends on subscription capabilities, permissions, and your data setup. Specific platform support is confirmed after review."],
  ["What must our team provide before work starts?", "System access, a technical owner, agreed process and qualification rules, field context, an existing workflow inventory, test records, and reviewers for logic and launch approval."],
  ["How long does a workflow build take?", "Timing depends on discovery, design and configuration complexity, and review speed. Your schedule is confirmed after discovery rather than set as one fixed turnaround."],
  ["How do you prevent conflicts, duplicate actions, and incorrect routing?", "We design exclusions, exit and re-entry logic, review existing workflows for conflicts, then test edge cases and monitor after launch. This reduces failures without making them impossible."],
  ["Are CRM integration, email copy, custom development, and data cleanup included?", "Their inclusion depends on what the selected workflows require. Core and optional work are separated during scoping."],
  ["Who owns and maintains workflows after launch?", "Documentation, handover, and an agreed monitoring period are part of the engagement. Ongoing management can continue under a separate scope."],
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

export default function MarketingWorkflowAutomationPage() {
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: title, serviceType: "Marketing workflow automation", description, url: `https://stratskye.com${path}`, provider: { "@id": "https://stratskye.com/#organization" }, areaServed: "Worldwide", audience: { "@type": "BusinessAudience", audienceType: "B2B technology companies" } },
    { "@type": "BreadcrumbList", itemListElement: [["Home", "/"], ["Services", "/services"], ["B2B Marketing Automation", "/services/b2b-marketing-automation-services"], ["Marketing Workflow Automation", path]].map(([name, url], index) => ({ "@type": "ListItem", position: index + 1, name, item: `https://stratskye.com${url}` })) },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] };

  return <main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true"/><div className={styles.shell}>
      <nav className={local.breadcrumb} aria-label="Breadcrumb"><Link href="/services">Services</Link><span>/</span><Link href="/services/b2b-marketing-automation-services">Marketing Automation</Link><span>/</span><span aria-current="page">Workflow Automation</span></nav>
      <div className={styles.heroGrid}><div><p className={styles.kicker}>B2B marketing operations · Workflow automation</p><h1 className={local.title}>Marketing Workflow Automation <span>for B2B Technology Companies</span></h1><p className={styles.lede}>A form gets submitted, a deal stage changes, or a trial expires. The next action depends on someone remembering it or on logic nobody owns.</p><p className={local.heroCopy}>Stratskye agrees the process with your team, defines the triggers and rules, configures the workflow in your existing platform, tests every path, and documents who owns it once live.</p><div className={styles.heroActions}><Cta/><Link className={local.secondaryLink} href="/case-study">View Relevant Work <ArrowUpRight size={17}/></Link></div></div>
      <div className={`${styles.heroVisual} ${local.heroVisual}`}><Image src="/images/services/marketing-workflow-automation/workflow-planning.png" alt="B2B operations colleagues planning lead handoffs and workflow rules" fill sizes="(max-width: 900px) 100vw, 44vw" className={styles.coverImage} preload/><div className={styles.visualOverlay}/><div className={styles.pipelineCard}><div className={styles.pipelineTop}><span>Workflow logic</span><span className={styles.liveDot}>Owned</span></div><div className={styles.pipelineFlow}><span>Trigger</span><ArrowRight size={15}/><span>Rule</span><ArrowRight size={15}/><span>Action</span></div></div></div></div>
    </div></section>
    <section className={styles.lightSection}><div className={styles.shell}><Intro eyebrow="The service" title="Give every repeatable action a rule and an owner." copy="Marketing workflow automation configures agreed triggers, conditions, actions, timing, and ownership so a repeatable process runs consistently in your existing systems. Use cases can include lead assignment, qualification handoffs, lifecycle updates, internal alerts, campaign tasks, and controlled follow-up entry."/><p className={styles.supportingCopy}>The selected workflows follow a review of your process and systems. Your team owns business decisions, data context, access, acceptance, and legal or consent approval for customer-facing actions.</p></div></section>
    <section className={styles.decisionSection}><div className={styles.shell}><div className={styles.decisionGrid}><div className={styles.stickyIntro}><p className={styles.eyebrow}>Quick decision</p><h2>Agree the process before configuring the platform.</h2><p>Useful automation starts with clear rules, accountable owners, usable data, and a way to test each path.</p></div><div className={styles.decisionList}>{decisionPoints.map(([label, value], index) => <div className={styles.decisionItem} key={label}><span className={styles.decisionNumber}>{String(index + 1).padStart(2, "0")}</span><span className={styles.decisionLabel}>{label}</span><strong>{value}</strong></div>)}</div></div></div></section>
    <section className={styles.inputSection}><div className={styles.shell}><Intro eyebrow="Where handoffs break" title="Manual steps and conflicting rules leave records stranded." copy="The gaps are often small in isolation. Together they make lead routing, follow-up, and CRM data harder to trust."/><div className={local.gapGrid}>{gaps.map(([heading, text], index) => <article className={local.gapCard} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div><div className={local.inlineCta}><Cta>Discuss Your Workflow Bottlenecks</Cta></div></div></section>
    <section className={styles.servicesSection}><div className={styles.shell}><Intro eyebrow="What you receive" title="A documented workflow from requirements through handover." copy="Your team reviews the process and logic before configuration. Testing, launch, recovery, and ownership are part of the build."/><div className={local.deliverableList}>{deliverables.map(([heading, purpose], index) => <article className={local.deliverableRow} key={heading}><span className={local.deliverableNumber}>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{purpose}</p></div></article>)}</div></div></section>
    <section className={styles.fitSection}><div className={styles.shell}><Intro eyebrow="Fit check" title="Who marketing workflow automation is for"/><div className={styles.fitGrid}><div className={`${styles.fitCard} ${styles.fitCardYes}`}><div className={styles.fitHeading}><Check size={22}/> Good fit</div><ul>{fitFor.map(item => <li key={item}>{item}</li>)}</ul></div><div className={`${styles.fitCard} ${styles.fitCardNo}`}><div className={styles.fitHeading}><X size={22}/> May not be the right fit</div><ul>{notFit.map(item => <li key={item}>{item}</li>)}</ul></div></div></div></section>
    <section className={styles.whySection}><div className={styles.shell}><div className={styles.whyGrid}><div className={`${styles.whyVisual} ${local.researchVisual}`}><Image src="/images/services/marketing-workflow-automation/workflow-qa-review.png" alt="Operations colleagues reviewing workflow logic and QA test paths" fill sizes="(max-width: 900px) 100vw, 42vw" className={styles.coverImage}/><div className={local.imageCaption}><span>Built to be operated</span><strong>Rules → testing → ownership</strong></div></div><div><Intro eyebrow="Why Stratskye" title="B2B process thinking before platform configuration."/><div className={styles.reasonList}>{reasons.map(([heading, text], index) => <div className={styles.reasonItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></div>)}</div><div className={local.inlineCta}><Cta/></div></div></div></div></section>
    <section className={styles.processSection}><div className={styles.shell}><Intro eyebrow="The process" title="How Stratskye builds and launches your workflows" copy="We review the current process before touching configuration, then build and test the rules your team has approved."/><div className={styles.processGrid}>{process.map(([heading, text], index) => <article className={styles.processCard} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{heading}</h3><p>{text}</p></div></article>)}</div><div className={styles.cadenceGrid}>{cadence.map(([period, focus]) => <div key={period}><strong>{period}</strong><span>{focus}</span></div>)}</div><div className={local.inputBlock}><h3>What we need from your team</h3><DataTable rows={inputs}/></div><div className={local.inlineCta}><Cta>Discuss Your First 90 Days</Cta></div></div></section>
    <section className={styles.measureSection}><div className={styles.shell}><Intro eyebrow="Measurement" title="Enrollment alone does not show whether a workflow works." copy="We agree a baseline, eligible record population, time window, and data owner before assessing improvement. Execution, routing, operational effort, and governance each show a different part of performance."/><DataTable rows={measurement}/><p className={local.lightNote}>Downstream progression or pipeline is discussed only where agreed CRM definitions and connected records support it. A workflow does not cause an outcome on its own.</p></div></section>
    <section className={styles.costSection}><div className={styles.shell}><Intro eyebrow="Engagement scope" title="What affects marketing workflow automation pricing" copy="Workflows that sound similar can differ substantially once branching, platform constraints, data dependencies, and testing are considered."/><div className={styles.costGrid}>{costs.map(([heading, text], index) => <div className={styles.costItem} key={heading}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{heading}</strong><p>{text}</p></div></div>)}</div><p className={styles.costNote}>Platform licenses, custom API work, migrations, large-scale data cleanup, full CRM redesign, and a complete email content program are scoped separately where needed.</p><div className={local.inlineCta}><Cta>Scope Your Workflows</Cta></div></div></section>
    <section className={styles.relatedSection}><div className={styles.shell}><Intro eyebrow="The wider system" title="Connect workflow builds to wider B2B marketing."/><div className={styles.relatedGrid}>{related.map(([need, label, href]) => <Link className={styles.relatedLink} href={href} key={need}><span>{need}</span><strong>{label}</strong><ArrowUpRight size={18}/></Link>)}</div></div></section>
    <section className={styles.faqSection}><div className={styles.shell}><Intro eyebrow="FAQ" title="Marketing workflow automation questions, answered."/><div className={styles.faqList}>{faqs.map(([question, answer], index) => <details className={styles.faqItem} key={question} open={index === 0}><summary><span>{question}</span><span className={styles.faqPlus} aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className={styles.finalCta}><div className={styles.finalGlow} aria-hidden="true"/><div className={styles.shell}><div className={styles.ctaInner}><p className={styles.eyebrow}>Give the next action an owner</p><h2>Give your next marketing action an owner, not a hope.</h2><p>The next step in your process should not depend on someone remembering it or on logic nobody currently owns.</p><p>A strategy call covers your process, platforms, dependencies, and whether a workflow build is the right next step.</p><Cta/></div></div></section>
  </main>;
}
