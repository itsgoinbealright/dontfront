import ContentGrid from "./components/ui/ContentGrid";
import { getFeaturedContent } from "./data/content";
import Banner from "./components/layout/Banner";

export default function HomePage() {
  const featuredContent = getFeaturedContent();

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <ContentGrid content={featuredContent} layout="mixed" />
      </div>
    </div>
  );
}
