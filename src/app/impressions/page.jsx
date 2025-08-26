import { getPageContent } from '../data/content'
import CategoryPage from '../components/pages/CategoryPage'

export const metadata = {
  title: 'IMPRESSIONS - HIGHGUISE',
  description: 'Moments captured in the creative process',
}

export default function ImpressionsPage() {
  const pageData = getPageContent('impressions')
  return <CategoryPage pageData={pageData} category="impressions" />
}