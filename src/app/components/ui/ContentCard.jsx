"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContentCard({ content, layout = "standard" }) {
  const [imageError, setImageError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle multiple images for carousel
  const images = Array.isArray(content.images)
    ? content.images
    : [content.image];
  const hasMultipleImages = images.length > 1;

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Render different card types based on layout
  switch (layout) {
    case "jumbo":
      return (
        <JumboCard
          content={content}
          imageError={imageError}
          setImageError={setImageError}
        />
      );

    case "medium-left":
      return (
        <MediumCard
          content={content}
          imagePosition="left"
          imageError={imageError}
          setImageError={setImageError}
        />
      );

    case "medium-right":
      return (
        <MediumCard
          content={content}
          imagePosition="right"
          imageError={imageError}
          setImageError={setImageError}
        />
      );

    case "carousel":
      return (
        <CarouselCard
          content={content}
          images={images}
          currentImageIndex={currentImageIndex}
          nextImage={nextImage}
          prevImage={prevImage}
          setCurrentImageIndex={setCurrentImageIndex}
          imageError={imageError}
          setImageError={setImageError}
        />
      );

    default:
      return (
        <StandardCard
          content={content}
          imageError={imageError}
          setImageError={setImageError}
        />
      );
  }
}

// Jumbo Hero Card Component - TALLER
function JumboCard({ content, imageError, setImageError }) {
  return (
    <div className="col-span-full group">
      <Link href={`/${content.slug}`} className="block">
        <div className="relative overflow-hidden bg-white">
          {/* MUCH TALLER Image - now uses proper editorial proportions */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden">
            {!imageError && content.image ? (
              <Image
                src={content.image}
                alt={content.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-400 text-6xl">📷</span>
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Category badge */}
            <div className="absolute top-6 left-6">
              <span className="bg-white text-black text-xs font-semibold px-3 py-1.5 uppercase tracking-wider">
                {content.category}
              </span>
            </div>

            {/* Limited badge */}
            {content.limited && (
              <div className="absolute top-6 right-6">
                <span className="bg-red-600 text-white text-xs px-3 py-1.5 uppercase tracking-wider">
                  Limited
                </span>
              </div>
            )}

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  {content.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                  {content.description}
                </p>
                {content.price && (
                  <div className="text-3xl font-bold">${content.price}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Medium Horizontal Card Component - TALLER
function MediumCard({
  content,
  imagePosition = "left",
  imageError,
  setImageError,
}) {
  return (
    <div className="col-span-1 lg:col-span-2 group">
      <Link href={`/${content.slug}`} className="block h-full">
        <div className="bg-white overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
          <div
            className={`flex h-full min-h-[400px] md:min-h-[450px] lg:min-h-[500px] ${
              imagePosition === "right" ? "flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-1/2 relative overflow-hidden">
              {!imageError && content.image ? (
                <Image
                  src={content.image}
                  alt={content.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <span className="text-gray-400 text-4xl">📷</span>
                </div>
              )}

              {content.limited && (
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white text-xs px-2 py-1 uppercase tracking-wide">
                    Limited
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {content.category}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                {content.title}
              </h3>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {content.description}
              </p>

              {content.price && (
                <div className="mb-6">
                  <span className="text-3xl font-bold">${content.price}</span>
                  {content.inStock && (
                    <span className="ml-4 text-sm text-green-600 font-medium">
                      In Stock
                    </span>
                  )}
                </div>
              )}

              <div className="text-sm text-gray-400 italic">Read more →</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Carousel Product Card Component - TALLER
function CarouselCard({
  content,
  images,
  currentImageIndex,
  nextImage,
  prevImage,
  setCurrentImageIndex,
  imageError,
  setImageError,
}) {
  return (
    <div className="col-span-1 lg:col-span-2 group">
      <Link href={`/${content.slug}`} className="block h-full">
        <div className="bg-white overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
          {/* TALLER Carousel Image */}
          <div className="relative h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
            {!imageError && images[currentImageIndex] ? (
              <Image
                src={images[currentImageIndex]}
                alt={`${content.title} ${currentImageIndex + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-400 text-4xl">📷</span>
              </div>
            )}

            {/* Carousel controls */}
            {images.length > 1 && !imageError && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                >
                  <span className="text-lg">‹</span>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                >
                  <span className="text-lg">›</span>
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Category badge */}
            <div className="absolute top-6 left-6">
              <span className="bg-white text-black text-xs font-semibold px-3 py-1.5 uppercase tracking-wide">
                {content.category}
              </span>
            </div>

            {content.limited && (
              <div className="absolute top-6 right-6">
                <span className="bg-red-600 text-white text-xs px-3 py-1.5 uppercase tracking-wide">
                  Limited
                </span>
              </div>
            )}
          </div>

          {/* Content with more padding */}
          <div className="p-8">
            <h3 className="font-black text-3xl mb-4 leading-tight">
              {content.title}
            </h3>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {content.description}
            </p>

            <div className="flex items-center justify-between">
              {content.price && (
                <span className="font-bold text-2xl">${content.price}</span>
              )}
              {content.itemCount && (
                <span className="text-sm text-gray-500">
                  {content.itemCount} items
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Standard Card Component - TALLER
function StandardCard({ content, imageError, setImageError }) {
  return (
    <div className="col-span-1 group">
      <Link href={`/${content.slug}`} className="block h-full">
        <div className="bg-white overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
          {/* TALLER Image */}
          <div className="relative h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden">
            {!imageError && content.image ? (
              <Image
                src={content.image}
                alt={content.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-400 text-4xl">📷</span>
              </div>
            )}

            {/* Category badge */}
            <div className="absolute top-6 left-6">
              <span className="bg-white text-black text-xs font-semibold px-3 py-1.5 uppercase tracking-wide">
                {content.category}
              </span>
            </div>

            {content.limited && (
              <div className="absolute top-6 right-6">
                <span className="bg-red-600 text-white text-xs px-3 py-1.5 uppercase tracking-wide">
                  Limited
                </span>
              </div>
            )}
          </div>

          {/* Content with more padding */}
          <div className="p-8">
            <h3 className="font-black text-2xl mb-4 leading-tight">
              {content.title}
            </h3>

            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              {content.description}
            </p>

            {content.price && (
              <div className="flex items-center justify-between">
                <span className="font-bold text-xl">${content.price}</span>
                {content.inStock && (
                  <span className="text-xs bg-green-100 text-green-800 px-3 py-1.5 uppercase tracking-wide">
                    In Stock
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}