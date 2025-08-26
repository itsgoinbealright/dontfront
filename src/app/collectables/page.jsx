import { getPageContent } from '../data/content'
import CategoryPage from '../components/pages/CategoryPage'

export const metadata = {
  title: 'COLLECTABLES - HIGHGUISE',
  description: 'Curated series and limited drops',
}

export default function CollectablesPage() {
  const pageData = getPageContent('collectables')
  return <CategoryPage pageData={pageData} category="collectables" />
}