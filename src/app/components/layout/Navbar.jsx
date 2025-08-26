"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const categories = [
    
    {
      name: "ENVIRONMENTAL",
      hoverText: "WE OUTSIDE",
      id: "environments",
    },
    {
      name: "IMPRESSIONS",
      hoverText: "BASEMENT PRINTS",
      id: "impressions",
    },
    {
      name: "DEBRIS",
      hoverText: "FOUND & FOND",
      id: "debris",
    },
        {
      name: "TECHNOLOGIES",
      hoverText: "BUTTON PUSHING",
      id: "technologies",
    },
    {
      name: "COLLECTABLES",
      hoverText: "PLEASE BUY",
      id: "collectables",
    },
  ];

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100); // Hide main navbar after 100px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-100 relative z-50">
        {/* Main navbar - slides up when scrolled */}
        <div
          className={`transition-transform duration-300 ease-in-out ${
            isScrolled ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="flex items-center justify-center px-4 md:px-6 py-4">
            {/* Center - Logo only */}
            <Link
              href="/"
              className="font-bold tracking-tight text-black hover:opacity-75 transition-opacity underline"
              style={{
                fontStretch: "condensed",
                fontSize: "1.75rem",
              }}
            >
              HIGHGUISE
            </Link>
          </div>
        </div>

        {/* Categories bar - becomes sticky when scrolled */}
        <div
          className={`border-t border-gray-100 transition-all duration-300 ${
            isScrolled
              ? "fixed top-0 left-0 right-0 bg-white shadow-sm z-50"
              : "relative"
          }`}
        >
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center justify-center py-4 pl-6 pr-16 md:px-24 min-w-max">
              <div className="flex space-x-8 md:space-x-12 lg:space-x-16">
                {categories.map((category) => (
                  <CategoryButton
                    key={category.name}
                    category={category}
                    isActive={pathname.includes(`/${category.id}`)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer when categories become fixed - prevents content jump */}
      {isScrolled && (
        <div className="h-16" /> // Adjust height to match categories bar
      )}
    </>
  );
}

// CategoryButton with smooth opacity crossfade
function CategoryButton({ category, isActive }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/${category.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="tracking-wide transition-all duration-200 uppercase whitespace-nowrap relative block text-center text-black"
      style={{
        fontWeight: 600,
        fontStretch: "condensed",
        fontSize: "0.9rem",
        minWidth: "140px",
        height: "1.2em", // Fixed height to prevent layout shift
      }}
    >
      {/* Default text - fades out on hover, underlined when active */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-out ${
          isHovered ? "opacity-0" : "opacity-100"
        } ${
          isActive ? "underline" : ""
        }`}
      >
        {category.name}
      </span>

      {/* Hover text - fades in on hover (italic, underlined when hovered) */}
      <span
        className={`absolute inset-0 flex items-center justify-center italic transition-opacity duration-300 ease-out ${
          isHovered ? "opacity-100 underline" : "opacity-0"
        }`}
      >
        {category.hoverText}
      </span>
    </Link>
  );
}