"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

type Post = {
  databaseId: number
  title: string
  slug: string
  excerpt?: string | null
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
  categories?: {
    nodes?: { name: string }[]
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

function stripHtml(value?: string | null) {
  return value?.replace(/<[^>]*>/g, "").trim() || ""
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    let mounted = true

    fetch("/api/posts")
      .then(async (response) => {
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data?.error || "Unable to fetch posts")
        }

        return data
      })
      .then((data) => {
        if (!mounted) return
        setPosts(data?.posts?.nodes || [])
        setLoaded(true)
      })
      .catch((fetchError) => {
        if (!mounted) return
        console.error("Unable to load blog posts", fetchError)
        setError("Unable to load posts")
        setLoaded(true)
      })

    return () => {
      mounted = false
    }
  }, [])

  const visiblePosts = posts.filter((post) => post.featuredImage?.node?.mediaItemUrl)

  return (
    <>
      <style>{`
        .blog-page {
          min-height: 100vh;
          background: #f4eee8;
          color: #07112c;
        }

        .blog-wrap {
          width: min(100% - 40px, 1120px);
          margin: 0 auto;
          padding: 128px 0 72px;
        }

        .blog-hero {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 0.95fr);
          gap: 48px;
          align-items: start;
        }

        .blog-title {
          max-width: 520px;
          margin: 0;
          font-size: clamp(38px, 4.9vw, 64px);
          line-height: 0.98;
          letter-spacing: 0;
          font-weight: 650;
          color: #07112c;
        }

        .blog-title span {
          color: #ff5d1f;
        }

        .blog-mark-wrap {
          padding-top: 18px;
        }

        .blog-mark {
          width: min(100%, 520px);
          height: auto;
          display: block;
        }

        .blog-copy {
          max-width: 410px;
          margin: 28px 0 0 72px;
          color: rgba(7, 17, 44, 0.64);
          font-size: 13px;
          line-height: 1.25;
        }

        .blog-grid-section {
          margin-top: 74px;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
        }

        .blog-card {
          position: relative;
          display: block;
          min-height: 382px;
          aspect-ratio: 1 / 1.04;
          overflow: hidden;
          border-radius: 16px;
          background: #07112c;
          color: #ffffff;
          text-decoration: none;
          isolation: isolate;
        }

        .blog-card-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .blog-card:hover .blog-card-image {
          transform: scale(1.045);
        }

        .blog-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.26) 26%, rgba(0, 0, 0, 0.02) 58%),
            radial-gradient(ellipse at bottom, rgba(255, 255, 255, 0.18), transparent 42%);
          z-index: 1;
        }

        .blog-card::before {
          content: "";
          position: absolute;
          left: 12%;
          right: 12%;
          bottom: 18px;
          height: 72px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.28);
          filter: blur(28px);
          opacity: 0.8;
          z-index: 2;
        }

        .blog-card-content {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 24px;
          z-index: 3;
          color: #ffffff;
        }

        .blog-date {
          display: block;
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.88);
          font-size: 10px;
          line-height: 1;
          font-weight: 600;
        }

        .blog-card-title {
          max-width: 390px;
          margin: 0;
          color: #ffffff;
          font-size: clamp(20px, 2vw, 26px);
          line-height: 0.98;
          letter-spacing: 0;
          font-weight: 700;
        }

        .blog-state {
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

        .blog-loading {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: rgba(7, 17, 44, 0.48);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .blog-spinner {
          width: 16px;
          height: 16px;
          border-radius: 999px;
          border: 1px solid rgba(7, 17, 44, 0.2);
          border-top-color: #ff5d1f;
          animation: blogSpin 0.8s linear infinite;
        }

        @keyframes blogSpin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 760px) {
          .blog-wrap {
            width: min(100% - 28px, 1120px);
            padding-top: 112px;
          }

          .blog-hero {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .blog-mark-wrap {
            padding-top: 0;
          }

          .blog-copy {
            margin-left: 0;
          }

          .blog-grid {
            grid-template-columns: 1fr;
          }

          .blog-card {
            min-height: 360px;
          }
        }
      `}</style>

      <main className="blog-page">
        <section className="blog-wrap">
          <div className="blog-hero">
            <h1 className="blog-title">
              Branding, Growth, and Everything <span>In Between</span>
            </h1>

            <div className="blog-mark-wrap">
              <img
                src="/images/we%E2%80%99ve%20got%20you%20coverd.png"
                alt="we've got you covered"
                className="blog-mark"
              />
              <p className="blog-copy">
                Cutting through the noise with straightforward insights on
                branding, positioning, and business growth.
              </p>
            </div>
          </div>

          <section className="blog-grid-section">
          {!loaded ? (
            <div className="blog-loading">
              <span className="blog-spinner" />
              <span>Loading</span>
            </div>
          ) : error ? (
            <div className="blog-state">{error}</div>
          ) : visiblePosts.length === 0 ? (
            <div className="blog-state">No posts found</div>
          ) : (
            <div className="blog-grid">
              {visiblePosts.map((post) => {
                const image = post.featuredImage?.node
                const date = formatDate(post.date)

                return (
                  <Link
                    key={post.databaseId}
                    href={`/blog/${post.databaseId}`}
                    className="blog-card"
                  >
                    <img
                      src={image?.mediaItemUrl || ""}
                      alt={image?.altText || post.title}
                      className="blog-card-image"
                    />
                    <div className="blog-card-content">
                      {date ? <span className="blog-date">{date}</span> : null}
                      <h2 className="blog-card-title">{post.title}</h2>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
          </section>
        </section>
      </main>
    </>
  )
}
