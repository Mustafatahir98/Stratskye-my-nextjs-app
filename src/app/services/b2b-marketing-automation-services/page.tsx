import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  DatabaseZap,
  MailCheck,
  Map,
  ScanSearch,
  Workflow,
  X,
} from "lucide-react";
import styles from "../b2b-lead-generation-services/page.module.css";

const pageUrl = "/services/b2b-marketing-automation-services";
const heroImage = "/images/services/b2b-marketing-automation/automation-workflow-team.png";

export const metadata: Metadata = {
  title: "B2B Marketing Automation Services for SaaS & Tech | Stratskye",
  description:
    "Connect CRM, email and sales workflows with Stratskye's B2B marketing automation services for smarter lead routing and nurturing. Book a strategy call.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "B2B Marketing Automation Services for SaaS & Tech | Stratskye",
    description:
      "Build a governed automation system that connects your marketing platform, CRM, lifecycle workflows, and sales handoff.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: heroImage,
        width: 1792,
        height: 945,
        alt: "B2B marketing and RevOps team mapping a connected automation workflow",
      },
    ],
  },
};

const decisionPoints = [
  ["Best for", "Live product, existing platform or CRM, weak integration or adoption"],
  ["We handle", "Diagnosis, workflow design, CRM integration, email automation, journey mapping"],
  ["You provide", "Platform and CRM access, data context, technical owners"],
  ["Timeline", "Discovery through phased launch, minimum three-month term for ongoing work"],
  ["Communication", "One contact, weekly meetings, monthly reporting"],
  ["Pricing", "Scoped by platform count, integration complexity, and workflow volume"],
  ["Problem solved", "Tools and data that don't operate as one governed system"],
];

const scopeRows = [
  ["Diagnosis, roadmap, and priority use cases", "Software licenses or platform-selection projects"],
  ["Lifecycle stages and lead-management logic", "Full CRM redesign or revenue-process rebuild"],
  ["Workflow, trigger, and routing architecture", "Every possible workflow or use case"],
  ["Selected child-service workstreams", "All five services by default, each is scoped"],
  ["Configuration, QA, and documentation", "Custom API development or complex migration"],
  ["Reasonable data review for the agreed build", "Large-scale database remediation"],
];

const subservices = [
  {
    number: "01",
    title: "Marketing Automation Audit",
    role: "Reviews platform usage, data quality, and adoption, then produces a prioritized roadmap",
    icon: ScanSearch,
  },
  {
    number: "02",
    title: "Marketing Workflow Automation",
    role: "Turns agreed processes into trigger-based workflows with clear entry, exit, and ownership rules",
    icon: Workflow,
  },
  {
    number: "03",
    title: "CRM Integration Services",
    role: "Connects marketing and CRM data through field mapping, routing, and governance",
    icon: DatabaseZap,
  },
  {
    number: "04",
    title: "Email Automation Services",
    role: "Builds behavior-triggered nurture, follow-up, and re-engagement programs",
    icon: MailCheck,
  },
  {
    number: "05",
    title: "Customer Journey Mapping Services",
    role: "Maps buyer stages and stakeholders so workflows reflect how B2B buyers actually decide",
    icon: Map,
  },
];

const fitFor = [
  "Already use or plan to use a platform and CRM but lack integration or adoption",
  "Have a longer, multi-stakeholder buying journey",
  "Need marketing and sales working from shared lifecycle definitions",
  "Can provide system access and technical owners",
  "Can support a discovery-build-test cycle",
];

const notFit = [
  "The only need is a software license or vendor recommendation",
  "The request is a one-off email or isolated workflow",
  "You expect automation to fix weak positioning or low close rates",
  "Nobody can provide CRM ownership or platform access",
  "You need guaranteed leads, pipeline, or revenue",
];

const reasons = [
  {
    title: "Technical product fluency",
    text: "Complex B2B products get translated into automation briefs that reflect the actual buyer and the actual data.",
  },
  {
    title: "Strategy and implementation stay connected",
    text: "Buyer journeys, workflow logic, CRM data, and reporting run through one team, so nothing gets lost between vendors who each only see part of the picture.",
  },
  {
    title: "Process, data, and governance get addressed together",
    text: "A well-built workflow sitting on bad data still fails. Fixing one without the other rarely holds.",
  },
  {
    title: "Structured delivery",
    text: "30/60/90-day framework, one main contact, weekly updates, monthly reporting.",
  },
  {
    title: "Real evidence",
    text: "60+ brands across B2B tech, fintech, and SaaS since 2019. Typical 2x reduction in sales-cycle length within six months.",
  },
];

const clientInputs = [
  ["Business, ICP, and buying-group context", "Supports accurate lifecycle logic and journey mapping"],
  ["Sales process and qualification criteria", "Keeps automation logic aligned with the real handoff"],
  ["Platform, CRM, and analytics access", "Supports audit, field mapping, and testing"],
  ["Data model and consent status", "Reduces broken segmentation and privacy risk"],
  ["Existing campaigns and workflows", "Shows what to retain, fix, or retire"],
  ["Technical owner access (RevOps, IT, vendor)", "Provides decisions and escalation paths"],
  ["Timely approvals and testing participation", "Protects the launch sequence"],
];

const processSteps = [
  ["Review", "Business goals, current platform use, CRM structure, and data quality."],
  ["Align", "Priority use cases, lifecycle definitions, and technical owners."],
  ["Architect", "Buyer journey, triggers, workflow branches, and QA approach."],
  ["Build and integrate", "Configure workflows, CRM sync, and email programs."],
  ["Test and launch", "Validate logic, routing, and error handling before phased activation."],
  ["Measure and optimize", "Review engagement, lead quality, and sales feedback."],
];

const cadence = [
  ["Days 1\u201330", "Audit, alignment, lifecycle definitions, roadmap"],
  ["Days 31\u201360", "Configuration, integration, workflow builds, QA"],
  ["Days 61\u201390", "Monitoring, optimization, sales-feedback review"],
];

const measurementRows = [
  ["Operational efficiency", "Manual steps reduced, workflow coverage"],
  ["Data quality", "Sync accuracy, field completion, duplicate rate"],
  ["Routing", "Assignment accuracy, handoff time, exception rate"],
  ["Engagement", "Email response, nurture progression, re-engagement"],
  ["Qualification", "Lead-score accuracy, MQL-to-SQL conversion"],
  ["Pipeline visibility", "Stage movement, influenced opportunities"],
];

const costFactors = [
  ["Audit depth and current-state complexity", "More platforms and history to document"],
  ["Number and type of platforms", "Each system adds access and testing work"],
  ["CRM architecture complexity", "More objects, sync logic, and exceptions"],
  ["Database size and condition", "Duplicates and inconsistent data need review"],
  ["Workflow and journey volume", "More triggers, branches, and QA"],
  ["Migration or custom development", "Requires separate technical review"],
];

const relatedServices = [
  ["Broader awareness and demand system", "B2B Demand Generation Services", "/services/b2b-demand-generation-services"],
  ["Outbound support or contact-list development", "B2B Lead Generation Services", "/services/b2b-lead-generation-services"],
  ["Named-account targeting", "Account-Based Marketing", "/services"],
  ["Organic demand capture through content", "Inbound Marketing Services", "/services"],
  ["Sharper positioning or messaging", "Brand and Positioning Strategy", "/services"],
  ["Broader email campaign execution", "Email Marketing", "/services"],
  ["Previous outcomes", "Work / Case Studies", "/work"],
  ["Delivery details", "Our Approach", "/our-approach"],
];

const faqs = [
  {
    question: "What do Stratskye's marketing automation services include?",
    answer:
      "Diagnosis, roadmap, selected workflow automation, CRM integration, email automation, journey mapping, QA, reporting, and optimization across five services. The exact mix gets scoped after the audit.",
  },
  {
    question: "Is marketing automation software the same as hiring a provider?",
    answer:
      "No. Software gives you the platform. A provider defines the process, data, integrations, and governance that make the platform work.",
  },
  {
    question: "Do we need every service listed on this page?",
    answer: "No. We recommend the workstreams that match your current platform, data condition, and operational gaps.",
  },
  {
    question: "Can Stratskye work with our existing CRM and platform, or will we need to switch?",
    answer:
      "We assess the current stack first. Improvement is often possible without switching. Migration requires separate scope and technical review.",
  },
  {
    question: "What if our data and workflows are messy?",
    answer:
      "That's common, and it's usually a big part of why automation underperforms. The audit identifies the issues and dependencies. Large-scale cleanup may require separate scope.",
  },
  {
    question: "How long do the audit, integration, and launch process take?",
    answer:
      "Ongoing engagements follow a 30/60/90-day sequence, moving from review and architecture through build, testing, and launch. Timing depends on access, data condition, and integration complexity.",
  },
  {
    question: "Can Stratskye work with our in-house marketing, RevOps, or IT team?",
    answer:
      "Yes. We need system access, business context, technical owners, and timely approvals. Ownership boundaries get set clearly at the start.",
  },
  {
    question: "How is performance measured?",
    answer:
      "Separately across operational efficiency, data quality, engagement, qualification, and pipeline, depending on your tracking and CRM quality.",
  },
  {
    question: "What affects the cost, and does Stratskye guarantee results?",
    answer:
      "Audit depth, platforms, integrations, and workflow volume affect cost. Pricing follows diagnosis. We don't guarantee leads, pipeline, or revenue, since results also depend on your offer, demand, and sales process.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stratskye.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://stratskye.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "B2B Marketing Automation Services",
          item: `https://stratskye.com${pageUrl}`,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `https://stratskye.com${pageUrl}#service`,
      name: "Marketing Automation Services for SaaS and Technology Companies",
      serviceType: "B2B marketing automation",
      url: `https://stratskye.com${pageUrl}`,
      provider: { "@id": "https://stratskye.com/#organization" },
      areaServed: "Worldwide",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "B2B SaaS, AI, fintech, and technology companies",
      },
      description:
        "A governed B2B marketing automation system connecting workflow logic, CRM integration, email automation, customer journey mapping, QA, and measurement.",
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
      <div className={`${styles.tableRow} ${styles.tableHead}`}>
        <span>{headings[0]}</span><span>{headings[1]}</span>
      </div>
      {rows.map(([first, second]) => (
        <div className={styles.tableRow} key={first}>
          <strong>{first}</strong><span>{second}</span>
        </div>
      ))}
    </div>
  );
}

export default function B2BMarketingAutomationServicesPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>B2B marketing automation services</p>
              <h1>
                Somewhere between your marketing platform and your sales pipeline, <span>good leads are quietly going stale.</span>
              </h1>
              <p className={styles.lede}>
                Stratskye finds where that happens, fixes the workflows and CRM connections causing it,
                and builds the automation system that actually gets buyers to the right person at the right time.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href="/contact-form">Book a Strategy Call <ArrowUpRight size={18} /></Link>
                <span className={styles.proofLine}>60+ brands across B2B tech, fintech, and SaaS since 2019.</span>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <Image
                src={heroImage}
                alt="B2B marketing and RevOps team mapping a connected automation workflow"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
                className={styles.coverImage}
                preload
              />
              <div className={styles.visualOverlay} />
              <div className={styles.pipelineCard}>
                <div className={styles.pipelineTop}><span>Automation system</span><span className={styles.liveDot}>Connected</span></div>
                <div className={styles.pipelineFlow}><span>Platform</span><ArrowRight size={15} /><span>CRM</span><ArrowRight size={15} /><span>Sales</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.decisionSection}>
        <div className={styles.shell}><div className={styles.decisionGrid}>
          <div className={styles.stickyIntro}>
            <p className={styles.eyebrow}>Quick decision</p>
            <h2>Know what needs fixing before adding another tool or workflow.</h2>
            <p>The work starts with the system you already have, the gaps inside it, and the use cases worth solving first.</p>
          </div>
          <div className={styles.decisionList}>
            {decisionPoints.map(([label, value], index) => (
              <div className={styles.decisionItem} key={label}>
                <span className={styles.decisionNumber}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.decisionLabel}>{label}</span><strong>{value}</strong>
              </div>
            ))}
          </div>
        </div></div>
      </section>

      <section className={styles.lightSection}>
        <div className={styles.shell}>
          <SectionIntro
            eyebrow="Connected scope"
            title="What our marketing automation services can include"
            copy="Stratskye works across workflow logic, CRM integration, email automation, and journey mapping. What gets built depends on your current platform maturity, your data quality, and which parts of the process are actually broken versus just underused."
          />
          <p className={styles.supportingCopy}>The scope is set after review, not before it.</p>
          <DataTable headings={["Included", "Separate scope"]} rows={scopeRows} />
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.shell}>
          <SectionIntro
            eyebrow="Automation workstreams"
            title="Marketing automation services we provide"
            copy="Most engagements start with the audit. What comes after depends on what it finds."
          />
          <div className={styles.serviceGrid}>
            {subservices.map((service, index) => {
              const Icon = service.icon;
              return (
                <article className={`${styles.serviceCard} ${index === subservices.length - 1 ? styles.serviceCardWide : ""}`} key={service.title}>
                  <div className={styles.serviceCardTop}><span>{service.number}</span><Icon size={24} strokeWidth={1.6} /></div>
                  <h3>{service.title}</h3><p>{service.role}</p>
                  <Link href="/contact-form">Explore {service.title} <ArrowUpRight size={17} /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.fitSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Fit check" title="Is Stratskye the right marketing automation partner for your company?" />
          <div className={styles.fitGrid}>
            <div className={`${styles.fitCard} ${styles.fitCardYes}`}>
              <div className={styles.fitHeading}><Check size={22} /> This service is for companies that</div>
              <ul>{fitFor.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className={`${styles.fitCard} ${styles.fitCardNo}`}>
              <div className={styles.fitHeading}><X size={22} /> This may not be the right fit if</div>
              <ul>{notFit.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.shell}><div className={styles.whyGrid}>
          <div className={styles.whyVisual}>
            <Image
              src="/images/services/digital-growth-marketing 1.webp"
              alt="Connected marketing data and automation performance dashboard"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.coverImage}
            />
            <div className={styles.metricFloat}><span>Typical client outcome</span><strong>2x</strong><p>reduction in sales-cycle length within six months</p></div>
          </div>
          <div>
            <SectionIntro eyebrow="Why Stratskye" title="Why B2B technology companies choose Stratskye" />
            <div className={styles.reasonList}>
              {reasons.map((reason, index) => (
                <div className={styles.reasonItem} key={reason.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span><div><h3>{reason.title}</h3><p>{reason.text}</p></div>
                </div>
              ))}
            </div>
            <div className={styles.evidenceBar}>
              <div><strong>60+</strong><span>brands since 2019</span></div>
              <div><strong>30/60/90</strong><span>structured delivery</span></div>
            </div>
          </div>
        </div></div>
      </section>

      <section className={styles.inputSection}>
        <div className={styles.shell}>
          <SectionIntro
            eyebrow="Shared inputs"
            title="What we need from your team to build the right automation system"
            copy="Stratskye audits, designs, integrates, and optimizes the agreed system. Legal and privacy approval, consent and data rights, platform licensing, and sales follow-up stay with you unless a separate scope says otherwise."
          />
          <DataTable headings={["Client input", "Why it matters"]} rows={clientInputs} />
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.shell}>
          <SectionIntro
            eyebrow="The process"
            title="How Stratskye builds a connected marketing automation system"
            copy="We audit before we automate. Automating a broken process only makes it break faster."
          />
          <div className={styles.processGrid}>
            {processSteps.map(([title, text], index) => (
              <article className={styles.processCard} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <div className={styles.cadenceGrid}>
            {cadence.map(([period, focus]) => <div key={period}><strong>{period}</strong><span>{focus}</span></div>)}
          </div>
        </div>
      </section>

      <section className={styles.measureSection}>
        <div className={styles.shell}><div className={styles.measureGrid}>
          <div>
            <SectionIntro eyebrow="Measurement" title="How we measure marketing automation progress" />
            <p className={styles.sectionCopy}>
              Manual steps reduced and workflow coverage are the earliest signals. Data sync accuracy and routing accuracy follow.
              Lead-score accuracy and MQL-to-SQL conversion tell you whether sales trusts what marketing is sending them,
              which is a different question from whether the platform is technically running.
            </p>
            <p className={styles.sectionCopy}>
              Pipeline visibility depends on tracking and CRM quality being good enough to support it. Automation alone
              doesn&apos;t create demand or fix a weak offer.
            </p>
            <div className={styles.caseNote}>
              <BarChart3 size={24} />
              <p>For one Stratskye client in B2B technology, a coordinated automation and marketing engagement contributed to a roughly <strong>2x reduction in sales-cycle length</strong> within the first six months, measured against the pre-engagement baseline.</p>
            </div>
          </div>
          <DataTable headings={["Measurement layer", "Examples"]} rows={measurementRows} />
        </div></div>
      </section>

      <section className={styles.costSection}>
        <div className={styles.shell}>
          <SectionIntro
            eyebrow="Investment"
            title="What affects the cost of marketing automation services"
            copy="A single-platform cleanup and a multi-system CRM integration require very different amounts of work, so pricing follows the audit rather than a fixed package."
          />
          <div className={styles.costGrid}>
            {costFactors.map(([factor, reason], index) => (
              <div className={styles.costItem} key={factor}>
                <span>{String(index + 1).padStart(2, "0")}</span><div><strong>{factor}</strong><p>{reason}</p></div>
              </div>
            ))}
          </div>
          <p className={styles.costNote}>Most ongoing engagements start with a minimum three-month term. Platform licenses and third-party software fees are separate. Sales follow-up and closing stay with you.</p>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="Related services" title="Connect automation to the rest of your growth system" />
          <div className={styles.relatedGrid}>
            {relatedServices.map(([need, label, href]) => (
              <Link className={styles.relatedLink} href={href} key={need}>
                <span>{need}</span><strong>{label}</strong><ArrowUpRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.shell}>
          <SectionIntro eyebrow="FAQ" title="Frequently asked questions about marketing automation services" />
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details className={styles.faqItem} key={faq.question} open={index === 0}>
                <summary><span>{faq.question}</span><span className={styles.faqPlus}>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalGlow} aria-hidden="true" />
        <div className={styles.shell}><div className={styles.ctaInner}>
          <p className={styles.eyebrow}>Build what your team can trust</p>
          <h2>Build an automation system your team can actually trust.</h2>
          <p>You already have the tools, the data, and a sales process. They just aren&apos;t working as one system yet.</p>
          <p>A strategy call covers what should connect, what needs fixing first, and which workstreams are worth building. You&apos;ll get an honest fit assessment and a proposal built around the highest-leverage gaps.</p>
          <Link className={styles.primaryButton} href="/contact-form">Book a Strategy Call <ArrowUpRight size={18} /></Link>
          <span className={styles.proofLine}>60+ brands across B2B tech, fintech, and SaaS since 2019.</span>
        </div></div>
      </section>
    </main>
  );
}
