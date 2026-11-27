// /sitemap.xml: home, the blog index and every post.
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blog')
  const entries = [
    { path: '/', lastmod: undefined as Date | undefined },
    { path: '/blog/', lastmod: undefined },
    ...posts.map((p) => ({ path: `/blog/${p.id}/`, lastmod: p.data.date })),
  ]
  const urls = entries
    .map(({ path, lastmod }) => {
      const mod = lastmod ? `<lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : ''
      return `  <url><loc>${new URL(path, site).href}</loc>${mod}</url>`
    })
    .join('\n')
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  )
}
