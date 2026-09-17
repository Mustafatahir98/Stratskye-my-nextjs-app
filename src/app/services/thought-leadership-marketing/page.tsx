import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Lightbulb } from "lucide-react";
import styles from "../b2b-lead-generation-services/page.module.css";
import local from "./page.module.css";

const path = "/services/thought-leadership-marketing";
const title = "Thought Leadership Marketing for B2B Technology Companies";
const description = "Turn founder and technical expertise into a defensible point of view with Stratskye's thought leadership marketing, content, distribution, and sales enablement.";
const heroImage = "/images/services/content-thought-leadership.jpg";

export const metadata: Metadata = {
  title: `${title} | Stratskye`,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: path,
    type: "website",
    images: [{ url: heroImage, alt: "Experts discussing an editorial strategy" }],
  },
};

const copy = {
  intro:
    "Most technical teams understand their category better than the marketing content ever shows. Getting that understanding into the market, not producing more of it, is the actual bottleneck.",
  hero:
    "Stratskye turns founder and subject-matter expertise into a point of view sharp enough to build authority, earn buyer trust, and give sales teams content that holds up in a technical conversation.",
  definition:
    "Thought leadership marketing turns what a company already knows into a defensible point of view, produces it as credible content, and distributes it to the buyers and stakeholders who need to see it, tied into demand generation rather than run as a side project.",
  problem:
    "A prospective buyer researching this space has no way to encounter what a company's engineers already know, since none of it has been turned into anything they could find.",
  deliverables:
    "Every deliverable below solves a specific piece of the problem above, built to work together rather than as separate assignments.",
  process:
    "Finding the actual point of view comes before any production starts. Producing content ahead of that step just adds volume to a message that was never sharp to begin with.",
  inputs:
    "Expert access, brand and compliance guidance, and timely approvals need to come from the client side throughout.",
  measurement:
    "Audience growth shows whether more of the right people are paying attention. Engagement quality shows whether they're actually reading and reacting. Neither one shows whether the market's perception of the company has genuinely shifted, which is a harder thing to measure and the actual point of the work.",
  attribution:
    "Attribution for thought leadership sits harder than direct-response channels, and reporting reflects that honestly rather than forcing every metric into a pipeline number it cannot actually support.",
  scope:
    "A single executive voice producing monthly content looks nothing like a program pulling from five subject-matter experts across multiple formats and channels, so pricing follows scope rather than a flat rate.",
  related:
    "Thought leadership rarely earns its full value as a standalone content stream. It works best feeding into a broader system and connecting to adjacent services.",
  closing:
    "Most technical teams understand their category better than the marketing content ever shows. Getting that understanding into the market, not producing more of it, is what this engagement builds toward.",
};

const quickOverview = [
  ["Best for", "B2B tech companies with strong internal expertise and no consistent way to make it visible"],
  ["We handle", "POV development, SME interviews, editorial planning, production, distribution, measurement"],
  ["You provide", "Expert access, brand and compliance guidance, timely approvals"],
  ["Timeline", "Follows Stratskye's standard engagement model"],
  ["Communication", "One main contact, weekly meetings and updates, monthly reporting"],
  ["Pricing", "Custom scope based on research depth, format mix, and distribution reach"],
  ["Main problem solved", "Expertise that never becomes content anyone outside the company sees"],
];

const gaps = [
  [
    "No defensible point of view",
    "Content covers what a product does instead of taking a position on the problem, which reads as marketing rather than expertise.",
  ],
  [
    "Whoever has time writes it",
    "The strongest technical insight lives in the heads of people with no time to write, so the content gets produced by whoever has a spare hour instead.",
  ],
  [
    "No consistent narrative",
    "A few strong posts, then a gap, then a different topic entirely, and no clear picture of what the company actually stands for ever forms.",
  ],
  [
    "Distribution stops at the blog",
    "Genuinely useful thinking gets published once and never repurposed anywhere a buyer or an internal champion would actually see it.",
  ],
  [
    "No connection to sales",
    "A skeptical stakeholder mid-deal gets a generic deck instead of the kind of evidence that would actually move a technical objection.",
  ],
  [
    "No way to know if any of it works",
    "Impressions get tracked. Whether the content is shifting how the market perceives the company does not.",
  ],
];

const deliverables = [
  [
    "Point-of-view strategy",
    "Defines the specific position a company will own in the market",
  ],
  [
    "SME and executive interviews",
    "Extracts real expertise from the people who actually have it",
  ],
  [
    "Editorial roadmap",
    "Keeps content tied to buyer questions and business priorities",
  ],
  [
    "Content production",
    "Turns interviews and research into publishable, credible material",
  ],
  [
    "Distribution and repurposing plan",
    "Gets one piece of thinking working across multiple channels",
  ],
  [
    "Sales enablement assets",
    "Gives sales teams content they can use mid-deal",
  ],
  [
    "Performance reporting",
    "Shows whether the work is building market authority",
  ],
];

const reasons = [
  [
    "Technical fluency, not generalist marketing",
    "Interviews and content briefs get built by people who can follow the actual technical substance, so the resulting content reads as credible to an audience that would spot a superficial take immediately.",
  ],
  [
    "A documented process for extracting expertise",
    "Most companies already have strong thinking sitting inside their team. Getting it out in a usable form is the actual bottleneck, and that extraction process is where real effort goes.",
  ],
  [
    "Distribution built in from the start",
    "Content gets planned to travel across LinkedIn, email, sales enablement, and other channels from day one instead of getting bolted on after a piece is already published.",
  ],
  [
    "Connected to the wider system",
    "Thought leadership under this engagement supports B2B Demand Generation Services instead of running as an isolated content stream with no link to pipeline.",
  ],
  [
    "Structured delivery",
    "One main contact, weekly updates, and monthly reporting run through the full engagement.",
  ],
];

const steps = [
  ["Research", "Audience, competitive narrative, and where a genuine gap in the current conversation exists."],
  ["Develop the POV", "Work with internal experts to define the specific position worth taking."],
  ["Interview and source", "Extract the actual thinking from the people who have it."],
  ["Plan editorially", "Map content to buyer questions and priority channels."],
  ["Produce", "Turn source material into credible, publishable content."],
  ["Distribute and optimize", "Get the work seen, then refine based on what lands."],
];

const measurement = [
  ["Audience", "Reach among target roles, branded search movement"],
  ["Engagement", "Comments, shares, saves, time on content"],
  ["Authority signals", "Share of voice, repeat engagement, inbound mentions"],
  ["Demand", "Referral traffic, inquiries, content-driven conversions"],
  ["Sales usefulness", "Asset usage in deals, sales feedback on content relevance"],
];

const costFactors = [
  ["Research and POV development depth", "More discovery before any content gets planned"],
  ["Number of experts involved", "More interviews, coordination, and validation"],
  ["Content format mix", "Written content, video, and audio each require different production"],
  ["Distribution channel count", "More platforms mean more adaptation and coordination"],
  ["Sales enablement scope", "Additional asset types built specifically for sales use"],
  ["Original research", "Surveys or proprietary data collection sit outside standard scope"],
];

const related = [
  ["A connected demand generation system", "B2B Demand Generation Services", "/services/b2b-demand-generation-services"],
  ["A multi-format content engine", "B2B Content Marketing Services", "/services/b2b-content-marketing-services"],
  ["Founder and executive LinkedIn presence", "LinkedIn Marketing Services", "/services/linkedin-marketing-services"],
  ["Organic discovery for published content", "B2B SEO Services", "/services/b2b-seo-services"],
  ["Paid amplification for key pieces", "B2B Paid Media", "/services/b2b-paid-media-agency"],
  ["Direct prospecting alongside authority building", "B2B Lead Generation Services", "/services/b2b-lead-generation-services"],
];

const faqs = [
  [
    "What does thought leadership marketing actually include?",
    "POV development, SME and executive interviews, editorial planning, content production, distribution across owned channels, sales enablement assets, and performance reporting. The exact mix gets scoped to the available experts and goals.",
  ],
  [
    "Does this require a specific executive to be the face of it?",
    "Not necessarily one fixed person, though consistent access to someone with strong subject-matter expertise, whether a founder, executive, or specialist, makes the content credible.",
  ],
  [
    "How does this differ from general content marketing?",
    "Content marketing covers a broad range of formats and topics built around search and demand capture. Thought leadership starts from a specific, defensible point of view and builds outward from there.",
  ],
  [
    "How much time do internal experts need to commit?",
    "Regular but limited access for interviews, typically structured around focused sessions rather than open-ended time commitments.",
  ],
  [
    "Can media coverage or speaking invitations be guaranteed?",
    "No. Stratskye controls research, strategy, production, and distribution. External recognition depends on factors beyond any agency's control.",
  ],
  [
    "Does this generate leads directly?",
    "Thought leadership builds authority and trust that supports demand generation and gives sales usable content, but it isn't a direct-response lead generation channel on its own.",
  ],
  [
    "How long before results show up?",
    "Building genuine market authority takes longer than a single content cycle. Most engagements show engagement and audience signals within the first 90 days, with authority-level shifts developing over a longer stretch.",
  ],
  [
    "What if internal experts don't have time to write?",
    "That's the standard starting point. The interview and extraction process exists specifically so experts contribute their thinking without doing the writing themselves.",
  ],
  [
    "How does measurement work when direct attribution is hard?",
    "Through layered measurement covering audience growth, engagement quality, authority signals, and sales feedback, reported honestly rather than forced into one pipeline number.",
  ],
  [
    "What affects the cost of an engagement?",
    "Research depth, number of experts involved, content format mix, distribution channels, and whether original research gets included. Pricing gets scoped after an initial conversation.",
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

export default function ThoughtLeadershipPage() {
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
          ["B2B Demand Generation", "/services/b2b-demand-generation-services"],
          ["Thought Leadership Marketing", path],
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
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
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
            <Link href="/services/b2b-demand-generation-services">Demand Generation</Link>
            <span>/</span>
            <span aria-current="page">Thought Leadership</span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <p className={styles.kicker}>Expertise into authority</p>
              <h1 className={local.title}>
                Thought Leadership Marketing <span>for B2B Technology Companies</span>
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
                alt="Experts working together to turn their knowledge into an editorial strategy"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
                className={styles.coverImage}
                preload
              />
              <div className={styles.visualOverlay} />
              <div className={styles.pipelineCard}>
                <div className={styles.pipelineTop}>
                  <span>Your expertise, made visible</span>
                  <Lightbulb size={20} aria-hidden="true" />
                </div>
                <div className={styles.pipelineFlow}>
                  <span>Insight</span>
                  <ArrowRight size={15} aria-hidden="true" />
                  <span>Authority</span>
                  <ArrowRight size={15} aria-hidden="true" />
                  <span>Trust</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.lightSection}>
        <div className={styles.shell}>
          <Intro
            eyebrow="Quick overview"
            title="Thought leadership marketing turns expertise into a market signal."
            copyText={copy.definition}
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
              <p className={styles.eyebrow}>Why expertise isn't building market authority</p>
              <h2>Your team knows it. Your market should too.</h2>
              <p>{copy.problem}</p>
            </div>

            <div className={styles.decisionList}>
              {gaps.map(([heading, text], i) => (
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

      <section className={styles.servicesSection}>
        <div className={styles.shell}>
          <Intro
            eyebrow="What gets delivered"
            title="From internal expertise to market authority."
            copyText={copy.deliverables}
          />

          <div className={styles.tableWrap}>
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
          <Intro eyebrow="Is this the right fit?" title="Designed for companies with real expertise to surface." />

          <div className={styles.fitGrid}>
            <div className={`${styles.fitCard} ${styles.fitCardYes}`}>
              <div className={styles.fitHeading}>
                <span>This Service Fits Companies That</span>
              </div>
              <ul>
                <li>Have real technical or category expertise</li>
                <li>Can commit someone to regular interviews</li>
                <li>Want authority connected to a wider demand system</li>
                <li>Can support a real engagement, not a one-off</li>
              </ul>
            </div>

            <div className={`${styles.fitCard} ${styles.fitCardNo}`}>
              <div className={styles.fitHeading}>
                <span>This May Not Fit If</span>
              </div>
              <ul>
                <li>The goal is generic content with no specific point of view</li>
                <li>Nobody has time for interviews or review</li>
                <li>A single post with no follow-through is the actual ask</li>
                <li>Guaranteed press or speaking invitations are the expectation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.shell}>
          <div className={styles.whyGrid}>
            <div className={styles.whyVisual}>
              <Image
                src="/images/services/demand-generation.jpg"
                alt="Writer turning research and interview notes into a clear editorial plan"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className={styles.coverImage}
              />
            </div>

            <div>
              <Intro eyebrow="Why companies choose Stratskye" title="Technical fluency, process, and distribution built in." />

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

      <section className={styles.processSection}>
        <div className={styles.shell}>
          <Intro eyebrow="How the program gets built" title="Find the point of view. Then build around it." />
          <p className={local.note}>{copy.process}</p>

          <div className={styles.processGrid}>
            {steps.map(([heading, text], i) => (
              <article className={styles.processCard} key={heading}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{heading}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.tableWrap}>
            <div className={styles.tableHead}>
              <span>Period</span>
              <span>Focus</span>
            </div>
            {[
              ["Days 1–30", "Research, POV development, editorial setup"],
              ["Days 31–60", "Interviews, production, first distribution"],
              ["Days 61–90", "Optimization, expanded distribution, reporting"],
            ].map(([period, focus]) => (
              <div className={styles.tableRow} key={period}>
                <strong>{period}</strong>
                <span>{focus}</span>
              </div>
            ))}
          </div>

          <p className={local.note}>{copy.inputs}</p>
        </div>
      </section>

      <section className={styles.measureSection}>
        <div className={styles.shell}>
          <Intro
            eyebrow="How performance gets measured"
            title="Measure the quality of attention, not just its volume."
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
        </div>
      </section>

      <section className={styles.costSection}>
        <div className={styles.shell}>
          <Intro eyebrow="What affects cost" title="Pricing follows scope rather than a flat rate." />
          <p className={local.note}>{copy.scope}</p>

          <div className={styles.tableWrap}>
            <div className={styles.tableHead}>
              <span>Pricing Factor</span>
              <span>Why It Changes Investment</span>
            </div>
            {costFactors.map(([factor, reason]) => (
              <div className={styles.tableRow} key={factor}>
                <strong>{factor}</strong>
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.shell}>
          <Intro
            eyebrow="How this fits the wider system"
            title="Let your thinking support the broader demand engine."
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
          <Intro eyebrow="Frequently Asked Questions" title="Your thought leadership questions, answered." />

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

      <section className={styles.finalCta}>
        <div className={styles.finalGlow} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.ctaInner}>
            <p className={styles.eyebrow}>Turn What&apos;s Already Known Internally Into Market Authority</p>
            <h2>Turn What&apos;s Already Known Internally Into Market Authority</h2>
            <p>{copy.closing}</p>
            <CallToAction />
            <span className={styles.proofLine}>
              Stratskye has worked with B2B technology companies across SaaS, fintech, and infrastructure since 2019.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
