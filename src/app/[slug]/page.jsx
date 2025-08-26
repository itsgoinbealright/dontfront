import { notFound } from 'next/navigation'
import { getAllContent, getContentBySlug } from '../data/content'
import ContentPage from '../components/pages/ContentPage'

// Generate static params for all content
export async function generateStaticParams() {
  const allContent = getAllContent()
  
  return allContent.map((item) => ({
    slug: item.slug
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params  // ← Await params here
  const content = getContentBySlug(slug)
  
  if (!content) {
    return {
      title: 'Content Not Found - HIGHGUISE'
    }
  }

  return {
    title: `${content.title} - HIGHGUISE`,
    description: content.description,
    openGraph: {
      title: `${content.title} - HIGHGUISE`,
      description: content.description,
      images: content.image ? [content.image] : [],
      type: 'article'
    }
  }
}

export default async function ContentPageRoute({ params }) {
  const { slug } = await params  // ← Await params here too
  const content = getContentBySlug(slug)

  if (!content) {
    notFound()
  }

  return <ContentPage content={content} />
}