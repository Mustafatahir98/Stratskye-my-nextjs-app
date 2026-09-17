import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Lightbulb } from "lucide-react";
import styles from "../b2b-lead-generation-services/page.module.css";
import local from "./page.module.css";

const path = "/services/b2b-webinar-marketing-services";
const title = "B2B Webinar Marketing Services for SaaS and Technology Companies";
const description =
  "Stratskye builds B2B webinar marketing programs that connect topic, audience, promotion, delivery, and follow-up into a measurable demand generation system.";
const heroImage = "/images/services/b2b-webinar-marketing/webinar-production.png";
const secondaryImage = "/images/services/b2b-webinar-marketing/webinar-strategy.png";

export const metadata: Metadata = {
  title: `${title} | Stratskye`,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: path,
    type: "website",
    images: [{ url: heroImage, alt: "B2B webinar team preparing a webinar strategy" }],
  },
};

const copy = {
  intro:
    "A webinar with strong attendance and a flat sales pipeline usually has the same root cause. The topic was chosen for internal convenience instead of a specific buyer question, so the room fills and nothing downstream moves.",
  hero:
    "Stratskye builds B2B webinar marketing programs that connect topic and audience selection through promotion, live delivery, and follow-up, run as one coordinated part of your demand generation system rather than a standalone event on the calendar.",
  overview:
    "B2B webinar marketing services plan, promote, deliver, and repurpose webinars that educate a defined buyer audience and produce measurable follow-up signals for marketing and sales. The service fits B2B technology companies with a live offer, an audience that can be defined with real specificity, and expertise inside the company worth turning into a session.",
  problem:
    "Registrations come in and attendance looks strong, but weeks later, sales still has no clear record of the conversations or opportunities that came from the event.",
  deliverables:
    "The engagement produces defined outputs across the webinar lifecycle, rather than a generic strategy document.",
  process:
    "We audit what already exists before building anything new, so the program addresses your actual gaps instead of a generic event template.",
  inputs:
    "Product and customer context, SME or speaker access, brand and compliance guidance, platform and CRM access, timely approvals, and sales follow-up to close the loop on lead quality.",
  measurement:
    "Registration counts and attendance numbers answer whether people showed up. They say nothing about whether the right people showed up or what happened after the session ended, which is why measurement runs across several distinct layers instead of one summary number.",
  attribution:
    "Results depend on offer strength, promotion runway, audience access, speaker quality, platform and tracking setup, nurture follow-through, and sales response.",
  scope:
    "A single quarterly panel discussion for one audience segment and a monthly multi-session series across three regions require very different levels of planning, production, and follow-up work. Pricing follows the scope required to run the program properly.",
  related:
    "A webinar rarely produces its full value in isolation. It works best connected to the audience, content, and nurture infrastructure already running across your marketing.",
  closing:
    "A strong webinar brings the right buyers into the conversation and gives the sales team useful context for follow-up.",
};

const quickOverview = [
  ["Best for", "B2B tech companies with a live offer, accessible SMEs, a defined audience, and a reason to educate buyers at scale"],
  ["We handle", "Strategy, topic and audience direction, campaign assets, promotion, speaker preparation, event coordination, follow-up planning, repurposing, and measurement according to scope"],
  ["You provide", "Product and customer context, SME and speaker access, brand and compliance guidance, platform and CRM access, timely approvals, and sales follow-up"],
  ["Timeline", "Follows the standard Stratskye engagement model, adjusted for event complexity, speaker availability, and promotion runway"],
  ["Communication", "One main contact, weekly meetings and updates, monthly reporting"],
  ["Pricing", "Custom scope based on webinar volume, format, audience count, promotion, production support, follow-up, repurposing, and reporting needs"],
  ["Problem solved", "Webinars disconnected from buyer needs, audience acquisition, post-event nurture, and measurable demand generation"],
];

const challenges = [
  [
    "Topics reflect internal convenience",
    "Titles and speakers fail to attract the right roles. Promotion starts too late, relies on one channel, and uses the same message across every segment.",
  ],
  [
    "Registration friction",
    "Registration pages add friction by asking for too much information. Speakers lack a clear narrative and next step.",
  ],
  [
    "Weak post-event follow-up",
    "After the event, no-shows, attendees, and highly engaged prospects often receive the same generic follow-up. The recording then sits unused instead of becoming content, sales material, or follow-up assets.",
  ],
  [
    "No evidence of downstream impact",
    "The result is a report focused on registrations and attendance, with little insight into whether the right companies attended or what happened after the event.",
  ],
];

const deliverables = [
  ["Webinar strategy brief", "Connects the audience, buyer problem, topic, format, offer, and success measures"],
  ["Topic and speaker direction", "Builds a credible session around useful expertise rather than a product pitch"],
  ["Registration and promotion plan", "Creates the conversion path, campaign calendar, channel roles, and message variants"],
  ["Speaker preparation and run of show", "Aligns narrative, timing, roles, rehearsal, interaction, and the next step"],
  ["Live-event coordination", "Supports delivery, moderation, engagement, and platform readiness within confirmed scope"],
  ["Follow-up and nurture plan", "Separates attendee, no-show, and engagement signals so the next message fits the behavior"],
  ["Repurposing plan", "Extends the recording and SME insight into on-demand, social, email, sales, and content assets"],
  ["Performance report", "Shows audience quality, conversion, engagement, follow-up response, and supported demand signals"],
];

const fitFor = [
  "B2B SaaS, AI, fintech, deep-tech, infrastructure, or complex professional-service companies with a live, validated offer",
  "Teams educating multi-person buying groups on a complex problem across a long sales cycle",
  "Companies with SMEs, customers, partners, or leaders who can contribute credible insight",
  "Marketing teams that can support approvals, platform access, data access, and sales follow-up",
  "Teams that want the webinar connected to nurture, content, and the wider demand system",
];

const notFit = [
  "Companies looking for a last-minute event flyer with no wider strategy",
  "Companies expecting a guaranteed registration quota",
  "Teams wanting a purchased attendee list instead of built audience access",
  "Companies searching for a platform-only vendor with no strategy involvement",
  "Companies treating a single webinar as a one-off task with no follow-through plan",
];

const reasons = [
  [
    "Technical B2B product fluency",
    "Stratskye's team works from experience with complex products, multi-stakeholder buying committees, and the kind of credibility-sensitive messaging that a webinar audience of technical buyers can spot as generic within the first two minutes.",
  ],
  [
    "Buyer-first webinar design",
    "Every element, from the topic to the speaker mix to the follow-up sequence, gets built around a defined audience and the specific commercial role that audience needs the event to play.",
  ],
  [
    "Strategy and execution under one team",
    "The people planning the topic are the same people writing the promotion, briefing the speakers, and building the follow-up sequence, which closes the gaps that appear when those functions sit with different vendors.",
  ],
  [
    "Webinars positioned inside demand generation",
    "The event supports awareness, authority, buyer education, demand capture, and nurture as connected functions, feeding into sales use rather than existing as an isolated broadcast.",
  ],
  [
    "Structured delivery",
    "30/60/90-day framework, one main contact, weekly meetings and updates, and monthly reporting.",
  ],
];

const processSteps = [
  ["Review", "Product, market, audience, existing webinar assets, platform, channels, CRM, sales process, and available data."],
  ["Align", "Objective, ICP and buying roles, buyer question, topic, format, speakers, offer, and measurement model."],
  ["Build", "Messaging, registration path, campaign assets, speaker brief, narrative support, run of show, tracking, and follow-up logic."],
  ["Promote and prepare", "Launch agreed channels, coordinate reminders, brief speakers and sales, test the platform, rehearse key moments."],
  ["Deliver", "Support live execution, moderation, audience interaction, CTA handling, and issue escalation within confirmed scope."],
  ["Follow up and repurpose", "Segment by behavior, activate agreed nurture, publish the on-demand path, and turn expert content into reusable assets."],
  ["Evaluate and optimize", "Review audience quality, registration conversion, attendance, engagement, follow-up actions, sales feedback, and pipeline signals where the data supports it."],
];

const cadence = [
  ["Days 1 to 30", "Audit, audience and topic alignment, offer, format, speaker plan, promotion path, measurement setup"],
  ["Days 31 to 60", "Asset production, registration launch, promotion, speaker preparation, rehearsal, first activation"],
  ["Days 61 to 90", "Follow-up, repurposing, performance review, optimization, next-program priorities"],
];

const measurement = [
  ["Promotion", "Channel reach and clicks, landing-page conversion, registration source, cost per registration when applicable"],
  ["Audience quality", "Company, industry, title and function, seniority, geography, target-account fit"],
  ["Attendance", "Registrations, live attendance, show rate, repeat attendance, on-demand viewing"],
  ["Engagement", "Watch time, polls, Q&A, chat, downloads, CTA clicks, topic response"],
  ["Demand response", "Follow-up engagement, return visits, content actions, demo or meeting requests"],
  ["Pipeline, when trackable", "Qualified responses, accepted leads, influenced opportunities, progression, sales feedback"],
];

const costFactors = [
  ["Webinar volume and cadence", "More planning, assets, coordination, delivery, and reporting"],
  ["Format and production complexity", "More platform work, rehearsal, moderation, editing, and vendor coordination"],
  ["Audience and geography count", "More research, segmentation, localization, and campaign variants"],
  ["Speaker and SME support", "More interviews, narrative development, preparation, and review"],
  ["Promotion and creative", "More landing-page, email, social, partner, and sales assets"],
  ["Follow-up and repurposing", "More behavioral segments, nurture paths, edits, and derivative content"],
  ["Measurement and integrations", "More CRM, automation, platform, and attribution complexity"],
];

const related = [
  ["A connected multi-channel demand system", "B2B Demand Generation Services", "/services/b2b-demand-generation-services"],
  ["A broader executive or SME authority program", "Thought Leadership Marketing", "/services/thought-leadership-marketing"],
  ["A larger content and repurposing engine", "B2B Content Marketing Services", "/services/b2b-content-marketing-services"],
  ["Organic LinkedIn distribution and executive visibility", "LinkedIn Marketing Services", "/services/linkedin-marketing-services"],
  ["Paid registration acquisition or retargeting", "B2B Paid Media Agency", "/services/b2b-paid-media-agency"],
  ["Advanced nurture, CRM workflows, or lead routing", "B2B Marketing Automation Services", "/services/b2b-marketing-automation-services"],
  ["Direct invitation outreach or prospecting", "B2B Lead Generation Services", "/services/b2b-lead-generation-services"],
];

const faqs = [
  [
    "What is included in Stratskye's B2B webinar marketing services?",
    "Strategy, topic and audience direction, speaker preparation, registration and promotion, live-event coordination, follow-up, repurposing, and measurement. The exact combination gets scoped to your audience, objective, and current systems during the strategy call.",
  ],
  [
    "Can Stratskye help choose webinar topics, formats, speakers, and offers?",
    "Yes. Topic, format, speaker mix, and offer direction come out of the strategy and alignment phase, built around the buyer question your audience actually needs answered rather than an internal talking point.",
  ],
  [
    "Do you create the registration page and promotional assets?",
    "Yes, registration-page messaging and conversion recommendations are part of the standard workstream, with promotional assets built for the specific channels your audience uses.",
  ],
  [
    "Which channels do you use to promote a B2B webinar?",
    "Channel selection follows your audience and existing systems, typically drawing from email, organic social, partner channels, and sales outreach, coordinated through one promotion calendar instead of run separately.",
  ],
  [
    "Do you manage the webinar platform and live technical production?",
    "Live-event coordination and platform support are included at the level confirmed in scope. Specialist AV production, studio work, and platform licensing sit outside the standard engagement unless explicitly added.",
  ],
  [
    "Do you prepare speakers, presentations, and the run of show?",
    "Yes. Speaker preparation covers the narrative outline, run of show, rehearsal, and interaction plan so the live session has a clear structure and a defined next step for the audience.",
  ],
  [
    "How far in advance should a B2B webinar be planned and promoted?",
    "Timing depends on event complexity, speaker availability, and the promotion runway your audience needs, which gets defined during the alignment phase rather than following a fixed universal timeline.",
  ],
  [
    "Can you support live, simulive, automated, and on-demand webinars?",
    "Format selection is part of the strategy phase and depends on your audience, objective, and internal capacity, with the specific formats supported confirmed once the scope is set.",
  ],
  [
    "What happens after the webinar for attendees and no-shows?",
    "Registrants, attendees, and no-shows receive separate follow-up sequences based on their actual behavior, connecting each segment to the nurture path that fits what they did or did not do.",
  ],
  [
    "Can the webinar be repurposed into other marketing and sales content?",
    "Yes, repurposing is a standard part of the workstream, turning the recording and speaker insight into on-demand content, social assets, email content, and sales material.",
  ],
  [
    "How do you measure registration quality, engagement, demand, and pipeline impact?",
    "Measurement runs across promotion, audience quality, attendance, engagement, demand response, and pipeline layers, with pipeline reporting conditional on CRM and attribution quality supporting it.",
  ],
  [
    "What does Stratskye need from our internal team?",
    "Product and customer context, SME or speaker access, brand and compliance guidance, platform and CRM access, timely approvals, and sales follow-up to close the loop on lead quality.",
  ],
  [
    "How much do B2B webinar marketing services cost?",
    "Pricing is scoped based on webinar volume, format complexity, audience count, promotion needs, and repurposing depth, with platform, media, and speaker fees priced separately from the marketing service itself.",
  ],
];

function Intro({ eyebrow, title, copyText }: { eyebrow: string; title: string; copyText?: string }) {
  return (
    <div className={styles.sectionIntro}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {copyText && <p className={styles.sectionCopy}>{copyText}</p>}
    </div>
  );
}

function CallToAction() {
  return (
    <Link className={styles.primaryButton} href="/contact-form">
      Book a Strategy Call <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}

export default function WebinarMarketingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: title,
        description,
        url: `https://stratskye.com${path}`,
        provider: {
          "@type": "Organization",
          name: "Stratskye",
          url: "https://stratskye.com",
        },
        isRelatedTo: {
          "@type": "Service",
          name: "B2B Demand Generation Services",
          url: "https://stratskye.com/services/b2b-demand-generation-services",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          ["Services", "/services"],
          ["B2B Webinar Marketing Services", path],
        ].map(([name, url], index) => ({
          "@type": "ListItem",
          position: index + 1,
          name,
          item: `https://stratskye.com${url}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />

      <section className={styles.hero}>
        <div className={styles.shell}>
          <nav className={local.breadcrumb} aria-label="Breadcrumb">
            <Link href="/services">Services</Link>
            <span>/</span>
            <span aria-current="page">B2B Webinar Marketing Services</span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <p className={styles.kicker}>B2B webinar marketing</p>
              <h1 className={local.title}>
                B2B Webinar Marketing Services <span>for SaaS and Technology Companies</span>
              </h1>
              <p className={styles.lede}>{copy.intro}</p>
              <p className={local.heroCopy}>{copy.hero}</p>

              <div className={local.heroButtons}>
                <CallToAction />
                <Link className={local.secondaryButton} href="/case-study/m1-performance">
                  View Relevant Work <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>

              <p className={local.proof}>60+ brands across B2B tech, fintech, and SaaS since 2019.</p>
            </div>

            <div className={styles.heroVisual}>
              <Image
                src={heroImage}
                alt="B2B webinar team preparing a webinar strategy"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
                className={styles.coverImage}
                priority
              />
              <div className={styles.visualOverlay} />
              <div className={styles.pipelineCard}>
                <div className={styles.pipelineTop}>
                  <span>Topic, audience, conversion</span>
                  <Lightbulb size={20} aria-hidden="true" />
                </div>
                <div className={styles.pipelineFlow}>
                  <span>Attention</span>
                  <ArrowRight size={15} aria-hidden="true" />
                  <span>Interest</span>
                  <ArrowRight size={15} aria-hidden="true" />
                  <span>Demand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.lightSection}>
        <div className={styles.shell}>
          <Intro
            eyebrow="What do B2B webinar marketing services include?"
            title="A webinar program built for buyer education and measurable demand." 
            copyText={copy.overview}
          />

          <div className={styles.tableWrap}>
            {quickOverview.map(([label, value]) => (
              <div className={styles.tableRow} key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.decisionSection}>
        <div className={styles.shell}>
          <div className={styles.decisionGrid}>
            <div className={styles.stickyIntro}>
              <p className={styles.eyebrow}>Why do B2B webinars struggle to create real demand?</p>
              <h2>Registrations alone are not the signal.</h2>
              <p>{copy.problem}</p>
            </div>

            <div className={styles.decisionList}>
              {challenges.map(([heading, text], i) => (
                <div className={local.gap} key={heading}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{heading}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.servicesSection} ${local.darkSection}`}>
        <div className={styles.shell}>
          <Intro
            eyebrow="What will your team receive?"
            title="Defined outputs across the webinar lifecycle."
            copyText={copy.deliverables}
          />

          <div className={`${styles.tableWrap} ${local.darkTable}`}>
            <div className={styles.tableHead}>
              <span>Deliverable</span>
              <span>Purpose</span>
            </div>
            {deliverables.map(([heading, text]) => (
              <div className={styles.tableRow} key={heading}>
                <strong>{heading}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.fitSection}>
        <div className={styles.shell}>
          <Intro eyebrow="Who are B2B webinar marketing services for?" title="Built for serious buyer education programs." />

          <div className={styles.fitGrid}>
            <div className={`${styles.fitCard} ${styles.fitCardYes}`}>
              <div className={styles.fitHeading}>
                <span>Good Fit</span>
              </div>
              <ul>
                {fitFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={`${styles.fitCard} ${styles.fitCardNo}`}>
              <div className={styles.fitHeading}>
                <span>May Not Be the Right Fit</span>
              </div>
              <ul>
                {notFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={local.centerButton}>
            <CallToAction />
          </div>
        </div>
      </section>

      <section className={`${styles.whySection} ${local.darkSection}`}>
        <div className={styles.shell}>
          <div className={styles.whyGrid}>
            <div className={styles.whyVisual}>
              <Image
                src={secondaryImage}
                alt="Strategy team mapping webinar audience and follow-up sequence"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className={styles.coverImage}
              />
            </div>

            <div>
              <Intro eyebrow="Why choose Stratskye" title="Technical fluency, process, and demand connection built in." />

              <div className={styles.reasonList}>
                {reasons.map(([heading, text], i) => (
                  <div className={styles.reasonItem} key={heading}>
                    <span>0{i + 1}</span>
                    <div>
                      <h3>{heading}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link className={local.textLink} href="/services/b2b-demand-generation-services">
                Explore the demand generation system <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.processSection} ${local.darkSection}`}>
        <div className={styles.shell}>
          <Intro eyebrow="How does Stratskye run a webinar program?" title="Audit first. Build around the real gap." />
          <p className={local.note}>{copy.process}</p>

          <div className={styles.processGrid}>
            {processSteps.map(([heading, text], i) => (
              <article className={styles.processCard} key={heading}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{heading}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={`${styles.tableWrap} ${local.darkTable}`}>
            <div className={styles.tableHead}>
              <span>Period</span>
              <span>Primary Focus</span>
            </div>
            {cadence.map(([period, focus]) => (
              <div className={styles.tableRow} key={period}>
                <strong>{period}</strong>
                <span>{focus}</span>
              </div>
            ))}
          </div>

          <div className={local.centerButton}>
            <Link className={local.primaryButton} href="/contact-form">
              See What the First 90 Days Could Look Like <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.measureSection}>
        <div className={styles.shell}>
          <Intro
            eyebrow="How will webinar performance be measured?"
            title="Registration and attendance are only the start."
            copyText={copy.measurement}
          />
          <p className={styles.sectionCopy}>{copy.attribution}</p>

          <div className={styles.tableWrap}>
            <div className={styles.tableHead}>
              <span>Measurement Layer</span>
              <span>Examples</span>
            </div>
            {measurement.map(([layer, example]) => (
              <div className={styles.tableRow} key={layer}>
                <strong>{layer}</strong>
                <span>{example}</span>
              </div>
            ))}
          </div>

          <div className={local.centerButton}>
            <Link className={local.primaryButton} href="/contact-form">
              Ask How We Would Measure Your Webinar Program <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.costSection} ${local.darkSection}`}>
        <div className={styles.shell}>
          <Intro eyebrow="What affects pricing?" title="Scope determines the work, not a flat rate." />
          <p className={local.note}>{copy.scope}</p>

          <div className={`${styles.tableWrap} ${local.darkTable}`}>
            <div className={styles.tableHead}>
              <span>Pricing Factor</span>
              <span>Why It Changes Scope</span>
            </div>
            {costFactors.map(([factor, reason]) => (
              <div className={styles.tableRow} key={factor}>
                <strong>{factor}</strong>
                <span>{reason}</span>
              </div>
            ))}
          </div>

          <div className={local.centerButton}>
            <Link className={local.primaryButton} href="/contact-form">
              Get a Scoped Webinar Marketing Plan <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.shell}>
          <Intro
            eyebrow="How does this service connect to your wider B2B marketing?"
            title="Let the webinar support the broader demand engine."
            copyText={copy.related}
          />

          <div className={styles.relatedGrid}>
            {related.map(([need, label, href]) => (
              <Link className={styles.relatedLink} href={href} key={href}>
                <span>{need}</span>
                <strong>{label}</strong>
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.shell}>
          <Intro eyebrow="FAQ" title="B2B Webinar Marketing Services FAQs" />

          <div className={styles.faqList}>
            {faqs.map(([question, answer], i) => (
              <details className={styles.faqItem} key={question} open={i === 0}>
                <summary>
                  <span>{question}</span>
                  <span className={styles.faqPlus} aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>

          <div className={local.faqAction}>
            <CallToAction />
          </div>
        </div>
      </section>

      <section className={`${styles.finalCta} ${local.finalCta}`}>
        <div className={styles.finalGlow} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.ctaInner}>
            <p className={`${styles.eyebrow} ${local.finalEyebrow}`}>
              Build webinars that give sales a clear next step
            </p>
            <h2>Build Webinars That Give Sales a Clear Next Step</h2>
            <p className={local.finalCopy}>{copy.closing}</p>
            <CallToAction />
            <span className={styles.proofLine}>
              60+ brands across B2B tech, fintech, and SaaS since 2019.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
