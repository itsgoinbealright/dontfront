// app/components/layout/Navbar.jsx - SIMPLE INSTANT STICKY
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      // Simple calculation: 70vh banner + main nav height (65px)
      const stickyPoint = window.innerHeight * 0.7 + 65;
      setIsSticky(window.scrollY >= stickyPoint);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white">
      {/* Main navbar - HIGHGUISE - always visible until scrolled past */}
      <div className="border-b border-gray-100">
        <div className="flex items-center justify-center px-4 md:px-6 py-4">
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

      {/* Categories bar - becomes sticky instantly when it reaches top */}
      <div className={isSticky ? "h-[57px]" : ""}>
        <div
          className={`border-b border-gray-100 bg-white ${
            isSticky
              ? "fixed top-0 left-0 right-0 shadow-sm z-50"
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
      </div>
    </nav>
  );
}

// CategoryButton stays the same
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
        fontSize: "1rem",
        minWidth: "140px",
        height: "3em",
      }}
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        } ${isActive ? "underline" : ""}`}
      >
        {category.name}
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center italic transition-opacity duration-300 ${
          isHovered ? "opacity-100 underline" : "opacity-0"
        }`}
      >
        {category.hoverText}
      </span>
    </Link>
  );
}