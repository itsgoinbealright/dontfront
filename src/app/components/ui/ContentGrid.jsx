import ContentCard from './ContentCard'

export default function ContentGrid({ content }) {
  if (!content || content.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No content available</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 w-full max-w-none mx-auto px-3 md:px-6 lg:px-12 xl:px-20">
      {content.map((item, index) => (
        <ContentCard 
          key={item.id || index}
          content={item}
          layout={item.cardType || 'standard'}
        />
      ))}
    </div>
  )
}