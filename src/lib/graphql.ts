const GRAPHQL_ENDPOINT =
  process.env.WORDPRESS_GRAPHQL_ENDPOINT || "https://stratskye-my-nextjs-app.vercel.app/blog/graphql"

export async function fetchGraphQL<T = any>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`GraphQL request failed with status ${response.status}`)
  }

  const result = await response.json()

  if (result.errors?.length) {
    throw new Error(result.errors[0]?.message || "GraphQL request failed")
  }

  return result.data
}
