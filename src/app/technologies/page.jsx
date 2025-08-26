import { getPageContent } from "../data/content";
import CategoryPage from "../components/pages/CategoryPage";

export const metadata = {
  title: "TECHNOLOGIES - HIGHGUISE",
  description: "Digital tools and button pushing",
};

export default function TechnologiesPage() {
  const pageData = getPageContent("technologies");
  return <CategoryPage pageData={pageData} category="technologies" />;
}
