import { fetchGraphQL } from "@/lib/graphql"
import { Metadata } from "next"
import Link from "next/link"
import SinglePostClient from "./SinglePostClient"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const data = await fetchGraphQL(`
      {
        post(id: ${slug}, idType: DATABASE_ID) {
          title
          excerpt
        }
      }
    `)
    const post = data?.post
    if (!post) return { title: "Post not found" }
    return {
      title: post.title,
      description: post.excerpt ? post.excerpt.replace(/<[^>]*>/g, "").trim() : "",
    }
  } catch {
    return { title: "Post" }
  }
}

export default async function SinglePost({ params }: Props) {
  const { slug } = await params

  const data = await fetchGraphQL(`
    {
      post(id: ${slug}, idType: DATABASE_ID) {
        title
        content
        date
        featuredImage {
          node {
            mediaItemUrl
            altText
          }
        }
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  `)

  const post = data?.post

  if (!post) {
    return (
      <main className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/15 text-[10px] tracking-[0.5em] uppercase mb-4">404</p>
          <p className="text-white/40 mb-8">Post not found</p>
          <Link href="/blog" className="text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors border-b border-white/20 pb-1">
            ← Back to Journal
          </Link>
        </div>
      </main>
    )
  }

  return <SinglePostClient post={post} />
}
