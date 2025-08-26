import { getPageContent } from '../data/content'
import CategoryPage from '../components/pages/CategoryPage'

export const metadata = {
  title: 'ENVIRONMENTS - HIGHGUISE',
  description: 'Urban landscapes transformed by art',
}

export default function EnvironmentsPage() {
  const pageData = getPageContent('environments')
  return <CategoryPage pageData={pageData} category="environments" />
}