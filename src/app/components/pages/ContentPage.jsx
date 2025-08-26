'use client'
import Link from 'next/link'
import Image from 'next/image'
import { getPageContent } from '../../data/content'

export default function ContentPage({ content }) {
  // Determine which category this content belongs to
  const categories = ['environments', 'impressions', 'debris', 'technologies', 'collectables']
  let parentCategory = null
  
  for (const cat of categories) {
    const pageData = getPageContent(cat)
    if (pageData?.content?.some(item => item.slug === content.slug)) {
      parentCategory = cat
      break
    }
  }

  return (
    <div className="min-h-screen bg-white pt-6">
      <div className="max-w-4xl mx-auto px-4 pb-8">
        
        {/* Back navigation */}
        {parentCategory && (
          <div className="mb-8">
            <Link 
              href={`/${parentCategory}`}
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors"
            >
              <span className="mr-2">←</span>
              Back to {parentCategory.charAt(0).toUpperCase() + parentCategory.slice(1)}
            </Link>
          </div>
        )}

        <article>
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-black tracking-wider text-black mb-4">
              {content.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {content.description}
            </p>
            
            {/* Metadata */}
            <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
              {content.date && <span>{content.date}</span>}
              {content.location && <span>• {content.location}</span>}
              {content.category && <span>• {content.category}</span>}
            </div>
          </div>

          {/* Images */}
          {content.images ? (
            // Multiple images (gallery)
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {content.images.map((image, index) => (
                <div key={index} className="aspect-square bg-gray-100 overflow-hidden relative">
                  <Image
                    src={image}
                    alt={`${content.title} ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          ) : content.image && (
            // Single image
            <div className="aspect-video bg-gray-100 overflow-hidden mb-8 relative">
              <Image
                src={content.image}
                alt={content.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Content Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {content.fullContent || content.description}
            </p>

            {/* Purchase section for products */}
            {content.price && (
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Purchase this piece</h3>
                    <p className="text-gray-600">
                      {content.limited ? 'Limited edition available' : 'Available now'}
                    </p>
                    {content.sizes && (
                      <p className="text-sm text-gray-500 mt-1">
                        Sizes: {content.sizes.join(', ')}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold mb-2">${content.price}</div>
                    <button className="bg-black text-white px-6 py-2 uppercase tracking-wide hover:bg-gray-800 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Additional info for collections */}
            {content.itemCount && (
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Collection Details</h3>
                <p className="text-sm text-gray-600">
                  {content.itemCount} items • {content.format || 'Digital format'}
                </p>
              </div>
            )}

            {/* Tags */}
            {content.tags && (
              <div className="flex flex-wrap gap-2 mt-6">
                {content.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  )
}