import type { Metadata } from "next";
import Link from "next/link";
import styles from "../case-study.module.css";

export const metadata: Metadata = {
  title: "M1 Performance Growth Case Study | Stratskye",
  description:
    "How Stratskye built M1 Performance's founder-led pipeline through podcast and speaking outreach, LinkedIn, a new website, and SEO.",
  alternates: { canonical: "/case-study/m1-performance" },
};

const startingMetrics = [
  { value: "None", label: "Website or payment infrastructure" },
  { value: "0", label: "Podcast appearances" },
  { value: "0", label: "Working outbound channels" },
  { value: "12.2", label: "Starting average search position" },
];

const outreachStreams = [
  [
    "Podcast placements",
    "Relevant shows in trading, investment psychology, and performance were identified, then approached through structured cold outreach and scheduled follow-ups.",
  ],
  [
    "Speaking engagements",
    "Financial conferences, investment summits, and industry events were matched to the right contacts and approached through sequenced outreach.",
  ],
  [
    "LinkedIn prospecting",
    "Senior financial-sector executives were filtered by title, seniority, and geography, then contacted in the founder's own voice.",
  ],
];

const audienceMetrics = [
  { network: "LinkedIn", value: "7,120,391", label: "12-month impressions" },
  { network: "LinkedIn", value: "19,192", label: "total followers" },
  { network: "LinkedIn", value: "75,735", label: "social engagements" },
  { network: "Outreach", value: "4", label: "confirmed LinkedIn leads" },
];

const newsletterMetrics = [
  ["Average open rate", "28.4%", "66.30%", "+37.9 pts"],
  ["Average click rate", "5.9%", "31.09%", "+25.2 pts"],
  ["Emails sent, single campaign", "1,635", "4,837", "+2,960%"],
];

const websiteWork = [
  [
    "Custom payment integration",
    "A dedicated payment flow built into the application form with secure handling and validation.",
  ],
  [
    "Research-to-content pipeline",
    "An integrated industry-research feed gives new content a consistent and credible source base.",
  ],
  [
    "Site built from scratch",
    "A new site launched with a 95 performance score, supporting paid engagements and technical SEO.",
  ],
  [
    "Admin security hardening",
    "The default login path was replaced with a custom, non-guessable URL to reduce automated attacks.",
  ],
];

const seoMetrics = [
  ["Clicks", "323", "485", "+162"],
  ["Impressions", "7,100", "111,000", "+103,900"],
  ["Average position", "12.2", "8.7", "+3.5"],
];

const outcomes = [
  "Thirty-five completed podcast appearances built a public track record entirely through outreach, alongside interest from a wider pool of shows.",
  "Twenty-seven events expressed speaking interest, including a high-profile investment leadership summit.",
  "A tested LinkedIn sequence generated four confirmed leads in December 2025 after earlier structures produced no responses.",
  "LinkedIn content reached more than 7.1 million impressions and 75,735 engagements in 12 months.",
  "A website scoring 95 was built from scratch to support applications, secure payments, and ongoing content.",
  "Search impressions grew from 7,100 to 111,000 while average position improved from 12.2 to 8.7.",
];

export default function M1PerformanceCaseStudyPage() {
  return (
    <main className={styles.page}>
      <article>
        <header className={styles.detailHero}>
          <div className={styles.shell}>
            <Link href="/case-study" className={styles.backLink}>
              ← All case studies
            </Link>
            <p className={styles.eyebrow}>M1 Performance / Founder-led coaching</p>
            <h1>
              Building a founder&apos;s pipeline <span>from the ground up.</span>
            </h1>
            <p className={styles.detailLead}>
              Lead generation, website infrastructure, and search visibility
              built for a performance coaching practice serving the financial sector.
            </p>
            <dl className={styles.projectMeta}>
              <div><dt>Industry</dt><dd>Coaching</dd></div>
              <div><dt>Services</dt><dd>Lead Gen, Website Development, SEO</dd></div>
              <div><dt>Audience</dt><dd>Financial Sector</dd></div>
              <div><dt>Status</dt><dd>Active, since February 2024</dd></div>
            </dl>
          </div>
        </header>

        <section className={styles.overviewSection} aria-labelledby="m1-overview-title">
          <div className={`${styles.shell} ${styles.twoColumn}`}>
            <p className={styles.sectionLabel}>01 / Overview</p>
            <div className={styles.prose}>
              <h2 id="m1-overview-title">The founder was the brand, but the brand had no public infrastructure</h2>
              <p>
                M1 Performance is a founder-led coaching practice for professionals
                in the financial sector. The founder brought deep institutional-finance
                experience, but began with little more than an unused LinkedIn profile:
                no website, podcast history, speaking record, or outbound channel.
              </p>
              <p>
                Positioning also evolved during the engagement before narrowing to
                traders and investment professionals. Outreach and content therefore
                had to adapt in real time instead of launching against a fixed niche.
              </p>
            </div>
          </div>
          <div className={`${styles.shell} ${styles.statGrid}`}>
            {startingMetrics.map((metric) => (
              <div className={styles.statCard} key={metric.label}>
                <strong>{metric.value}</strong><span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.strategySection} aria-labelledby="m1-strategy-title">
          <div className={`${styles.shell} ${styles.twoColumn}`}>
            <p className={styles.sectionLabel}>02 / Strategy</p>
            <div className={styles.prose}>
              <h2 id="m1-strategy-title">Prioritize the channels where financial professionals already spend time</h2>
              <p>
                Podcasts, industry events, and direct professional networks carried
                most of the effort. Website development gave the growing audience a
                fast and credible place to convert, while SEO supported authority and
                branded discovery rather than chasing broad search volume.
              </p>
            </div>
          </div>
          <ol className={`${styles.shell} ${styles.phaseRail}`}>
            <li><span>01</span><strong>Outreach</strong><small>Build reach and conversations</small></li>
            <li><span>02</span><strong>Content</strong><small>Compound founder authority</small></li>
            <li><span>03</span><strong>Website</strong><small>Convert attention securely</small></li>
            <li><span>04</span><strong>Search</strong><small>Strengthen entity recognition</small></li>
          </ol>
        </section>

        <section className={styles.socialSection} aria-labelledby="m1-leadgen-title">
          <div className={styles.shell}>
            <div className={styles.phaseHeading}>
              <p className={styles.sectionLabel}>Phase 01 / Lead generation</p>
              <div className={styles.prose}>
                <h2 id="m1-leadgen-title">Three outreach streams, each built for a different audience</h2>
                <p>
                  Podcast placements, speaking engagements, and one-to-one coaching
                  prospects required separate lists, messages, and channels. Each
                  stream was tested and refined independently. Podcast outreach
                  secured interest across 70 opportunities, with 35 completed
                  appearances recorded in the reported results.
                </p>
              </div>
            </div>
            <div className={styles.deliverableGrid}>
              {outreachStreams.map(([title, copy], index) => (
                <div className={styles.deliverable} key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3><p>{copy}</p>
                </div>
              ))}
            </div>
            <div className={styles.socialGrid}>
              {audienceMetrics.map((metric) => (
                <div key={metric.label}>
                  <span>{metric.network}</span><strong>{metric.value}</strong><small>{metric.label}</small>
                </div>
              ))}
            </div>
            <div className={styles.miniResults}>
              <p><strong>35</strong> completed podcast appearances</p>
              <p><strong>27</strong> events expressed speaking interest</p>
              <p><strong>+334%</strong> LinkedIn impression growth</p>
              <p><strong>+66%</strong> follower growth year over year</p>
            </div>
          </div>
        </section>

        <section className={styles.lightSection} aria-labelledby="m1-inflection-title">
          <div className={styles.shell}>
            <div className={styles.phaseHeading}>
              <p className={styles.sectionLabel}>Testing / Inflection point</p>
              <div className={styles.prose}>
                <h2 id="m1-inflection-title">The breakthrough came from changing the sequence, not abandoning the channel</h2>
                <p>
                  Early LinkedIn outreach generated no responses despite sound
                  targeting. Separate sequence structures were tested until a
                  low-pressure connection opener broke through, generating four
                  confirmed leads in December 2025. Content also accelerated after
                  November 2025, rising from 1,983,966 impressions in the earlier
                  period to 5,340,691 in the next.
                </p>
              </div>
            </div>
            <div className={styles.callout}>
              <span>Content impressions</span><strong>1.98M → 5.34M</strong><small>169% increase after refinement</small>
            </div>
            <div className={styles.tableWrap}>
              <table>
                <thead><tr><th>Newsletter metric</th><th>Before</th><th>After</th><th>Change</th></tr></thead>
                <tbody>
                  {newsletterMetrics.map(([metric, before, after, change]) => (
                    <tr key={metric}><th scope="row">{metric}</th><td>{before}</td><td>{after}</td><td>{change}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={styles.workSection} aria-labelledby="m1-website-title">
          <div className={styles.shell}>
            <div className={styles.phaseHeading}>
              <p className={styles.sectionLabel}>Phase 02 / Website</p>
              <div className={styles.prose}>
                <h2 id="m1-website-title">Infrastructure built to turn growing attention into paid engagements</h2>
                <p>
                  The website was built alongside outreach, with secure payments,
                  an application flow, and a research-backed content pipeline at its core.
                </p>
              </div>
            </div>
            <div className={styles.deliverableGrid}>
              {websiteWork.map(([title, copy], index) => (
                <div className={styles.deliverable} key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3><p>{copy}</p>
                </div>
              ))}
            </div>
            <div className={styles.callout}>
              <span>Site performance</span><strong>No prior site → 95</strong><small>Built from scratch</small>
            </div>
          </div>
        </section>

        <section className={styles.lightSection} aria-labelledby="m1-seo-title">
          <div className={styles.shell}>
            <div className={styles.phaseHeading}>
              <p className={styles.sectionLabel}>Phase 03 / Search visibility</p>
              <div className={styles.prose}>
                <h2 id="m1-seo-title">Search supported the authority created elsewhere</h2>
                <p>
                  Branded search grew as outreach and content made the founder more
                  visible. Authority pages and targeted backlinks also helped Google
                  and AI systems recognize the practice as an entity in its specific
                  coaching category, not simply as another page targeting keywords.
                </p>
              </div>
            </div>
            <div className={styles.tableWrap}>
              <table>
                <thead><tr><th>Metric</th><th>Before</th><th>After</th><th>Change</th></tr></thead>
                <tbody>
                  {seoMetrics.map(([metric, before, after, change]) => (
                    <tr key={metric}><th scope="row">{metric}</th><td>{before}</td><td>{after}</td><td>{change}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={styles.resultsSection} aria-labelledby="m1-results-title">
          <div className={`${styles.shell} ${styles.twoColumn}`}>
            <p className={styles.sectionLabel}>03 / Results</p>
            <div>
              <div className={styles.prose}>
                <h2 id="m1-results-title">A founder-led growth system that now compounds across channels</h2>
                <p>
                  Outreach and content build credibility, the website converts it,
                  and search reinforces recognition. The work remains active as
                  podcast and speaking outreach scale, proven LinkedIn sequences
                  continue, and the founder&apos;s public identity grows stronger.
                </p>
              </div>
              <ol className={styles.outcomeList}>
                {outcomes.map((outcome, index) => (
                  <li key={outcome}><span>{String(index + 1).padStart(2, "0")}</span><p>{outcome}</p></li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <footer className={styles.detailCta}>
          <div className={styles.shell}>
            <p className={styles.eyebrow}>Build your growth system</p>
            <h2>Turn founder expertise into a working pipeline.</h2>
            <div>
              <Link href="/contact-form" className={styles.primaryLink}>Start a conversation <span aria-hidden="true">→</span></Link>
              <Link href="/case-study" className={styles.secondaryLink}>Back to case studies</Link>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
