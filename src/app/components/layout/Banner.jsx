// app/components/ui/Banner.jsx - WITH FULL PADDING
'use client'
import Image from 'next/image'

export default function Banner({ height = '70vh' }) {
  return (
    <div 
      className="relative w-full border-b border-gray-100" 
      style={{ height }}
    >
      {/* Container with padding on all sides */}
      <div className="relative h-full w-full p-3 md:p-4 lg:p-5 xl:p-6">
        {/* Inner content with border styling like cards */}
        <div className="relative h-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/banner/hero.jpg"
              alt="HIGHGUISE"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4">
                {/* HIGHGUISE */}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-light">
                MARQUEE CAMPAIGN
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
