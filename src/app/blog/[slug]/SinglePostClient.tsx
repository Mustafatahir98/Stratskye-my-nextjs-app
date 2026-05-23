"use client"

import Link from "next/link"

type SinglePost = {
  title: string
  content?: string | null
  date?: string | null
  featuredImage?: {
    node?: {
      mediaItemUrl?: string | null
      altText?: string | null
    } | null
  } | null
  author?: {
    node?: {
      name?: string | null
    } | null
  } | null
}

function formatDate(date?: string | null) {
  if (!date) return ""

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}

function renderTitle(title: string) {
  const highlight = "More Than Your Logo"

  if (!title.includes(highlight)) return title

  const [before] = title.split(highlight)

  return (
    <>
      {before}
      <span>{highlight}</span>
    </>
  )
}

export default function SinglePostClient({ post }: { post: SinglePost }) {
  const image = post.featuredImage?.node
  const author = post.author?.node?.name || "StratSkye"

  return (
    <>
      <style>{`
        .single-blog {
          min-height: 100vh;
          background: #f4eee8;
          color: #07112c;
        }

        .single-wrap {
          width: min(100% - 40px, 1280px);
          margin: 0 auto;
          padding: 116px 0 88px;
        }

        .single-header {
          width: min(100%, 565px);
          margin: 0 auto 44px;
        }

        .single-date {
          display: block;
          margin-bottom: 14px;
          color: rgba(7, 17, 44, 0.58);
          font-size: 11px;
          line-height: 1;
          font-weight: 600;
        }

        .single-title {
          margin: 0;
          color: #07112c;
          font-size: clamp(34px, 4.4vw, 58px);
          line-height: 0.98;
          letter-spacing: 0;
          font-weight: 700;
        }

        .single-title span {
          color: #ff5d1f;
        }

        .single-dek {
          margin: 22px 0 0;
          max-width: 540px;
          color: rgba(7, 17, 44, 0.7);
          font-size: 14px;
          line-height: 1.35;
        }

        .single-hero-row {
          position: relative;
          display: grid;
          grid-template-columns: 188px minmax(0, 1fr);
          gap: 28px;
          align-items: start;
          margin-bottom: 128px;
        }

        .single-author {
          position: sticky;
          top: 112px;
          display: flex;
          gap: 10px;
          align-items: center;
          padding-top: 12px;
          color: #07112c;
        }

        .single-avatar {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: #07112c;
          color: #f4eee8;
          font-size: 11px;
          line-height: 1;
          font-weight: 700;
          text-transform: uppercase;
        }

        .single-author-name {
          display: block;
          color: rgba(7, 17, 44, 0.72);
          font-size: 11px;
          line-height: 1.2;
          font-weight: 700;
        }

        .single-author-role {
          display: block;
          margin-top: 2px;
          color: rgba(7, 17, 44, 0.46);
          font-size: 10px;
          line-height: 1.2;
          font-weight: 600;
        }

        .single-hero {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          background: #07112c;
          aspect-ratio: 2.04 / 1;
        }

        .single-hero img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .single-hero-empty {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #101a38, #31405a);
        }

        .single-body-grid {
          display: grid;
          grid-template-columns: 188px minmax(0, 1fr);
          gap: 28px;
        }

        .single-content {
          width: min(100%, 650px);
          margin: 0 auto;
          color: #07112c;
          font-size: 14px;
          line-height: 1.55;
        }

        .single-content > *:first-child {
          margin-top: 0;
        }

        .single-content h1,
        .single-content h2,
        .single-content h3,
        .single-content h4 {
          color: #07112c;
          letter-spacing: 0;
          font-weight: 750;
        }

        .single-content h2 {
          margin: 0 0 18px;
          padding-top: 54px;
          font-size: clamp(22px, 2vw, 30px);
          line-height: 1.04;
        }

        .single-content h3 {
          margin: 0 0 16px;
          padding-top: 42px;
          font-size: clamp(19px, 1.7vw, 25px);
          line-height: 1.08;
        }

        .single-content p {
          margin: 0 0 18px;
          color: rgba(7, 17, 44, 0.76);
        }

        .single-content a {
          color: #ff5d1f;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .single-content ul,
        .single-content ol {
          margin: 0 0 22px 20px;
          padding: 0;
          color: rgba(7, 17, 44, 0.76);
        }

        .single-content li {
          margin-bottom: 8px;
        }

        .single-content img {
          max-width: 100%;
          height: auto;
          border-radius: 16px;
        }

        .single-empty {
          border: 1px solid rgba(7, 17, 44, 0.12);
          border-radius: 8px;
          padding: 56px 24px;
          text-align: center;
          color: rgba(7, 17, 44, 0.48);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .single-cta {
          display: grid;
          grid-template-columns: 188px minmax(0, 1fr);
          gap: 28px;
          align-items: end;
          margin-top: 120px;
        }

        .single-cta-title {
          margin: 0;
          max-width: 190px;
          color: #07112c;
          font-size: clamp(30px, 3.1vw, 48px);
          line-height: 0.94;
          letter-spacing: 0;
          font-weight: 750;
        }

        .single-cta-content {
          width: min(100%, 650px);
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          gap: 28px;
          align-items: end;
          color: rgba(7, 17, 44, 0.58);
          font-size: 12px;
          line-height: 1.35;
        }

        .single-back,
        .single-contact {
          color: #07112c;
          text-decoration: none;
          font-size: 10px;
          line-height: 1;
          font-weight: 750;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .single-contact {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .single-wrap {
            width: min(100% - 28px, 1280px);
            padding-top: 108px;
          }

          .single-header {
            margin-left: 0;
          }

          .single-hero-row,
          .single-body-grid,
          .single-cta {
            grid-template-columns: 1fr;
          }

          .single-author {
            position: static;
            padding-top: 0;
            order: 2;
          }

          .single-hero {
            order: 1;
            aspect-ratio: 1.45 / 1;
          }

          .single-hero-row {
            margin-bottom: 72px;
          }

          .single-content,
          .single-cta-content {
            width: 100%;
            margin: 0;
          }

          .single-cta {
            margin-top: 76px;
          }

          .single-cta-content {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <main className="single-blog">
        <div className="single-wrap">
          <header className="single-header">
            {post.date ? (
              <span className="single-date">{formatDate(post.date)}</span>
            ) : null}
            <h1 className="single-title">{renderTitle(post.title)}</h1>
            <p className="single-dek">
              Logos are important, but they are only one piece of the visual
              puzzle. A strong brand identity goes deeper, creating clarity,
              consistency, and trust.
            </p>
          </header>

          <section className="single-hero-row">
            <aside className="single-author" aria-label="Author">
              <span className="single-avatar">{author.charAt(0)}</span>
              <span>
                <span className="single-author-name">{author}</span>
                <span className="single-author-role">Author</span>
              </span>
            </aside>

            <div className="single-hero">
              {image?.mediaItemUrl ? (
                <img src={image.mediaItemUrl} alt={image.altText || post.title} />
              ) : (
                <div className="single-hero-empty" />
              )}
            </div>
          </section>

          <section className="single-body-grid">
            <div />
            {post.content ? (
              <article
                className="single-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className="single-content single-empty">
                No content available
              </div>
            )}
          </section>

          <section className="single-cta">
            <h2 className="single-cta-title">Let&apos;s work together</h2>
            <div className="single-cta-content">
              <p>
                Work with us if branding is more than the post.
                <br />
                Bring the vision, we&apos;ll build the momentum.
              </p>
              <Link href="/blog" className="single-back">
                All Articles
              </Link>
              <Link href="/contact-form" className="single-contact">
                You can say hello <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
