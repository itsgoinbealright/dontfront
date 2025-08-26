"use client";
import ContentGrid from "../ui/ContentGrid";

export default function CategoryPage({ pageData, category }) {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* REMOVED max-width constraint - let ContentGrid handle its own width */}
      <div className="w-full pb-8">
        <ContentGrid content={pageData.content} category={category} />
      </div>
    </div>
  );
}
