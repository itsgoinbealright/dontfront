import { getPageContent } from '../data/content'
import CategoryPage from '../components/pages/CategoryPage'

export const metadata = {
  title: 'DEBRIS - HIGHGUISE',
  description: 'Found objects and cherished fragments',
}

export default function DebrisPage() {
  const pageData = getPageContent('debris')
  return <CategoryPage pageData={pageData} category="debris" />
}