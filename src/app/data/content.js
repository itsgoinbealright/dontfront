// Central content database for the entire site

export const siteContent = {
  // Homepage featured content
  featured: [
    {
      id: 1,
      slug: "downtown-core",
      title: "DOWNTOWN INSTALLATION",
      description: "New street art piece exploring urban decay",
      image: "/images/environments/downtown-01.jpg",
      category: "environments",
      location: "Downtown Core",
      date: "March 2024",
      cardType: "jumbo", // Hero for homepage
      fullContent:
        "This installation marks a pivotal moment in urban street art evolution. Located at the intersection of 5th & Main, this piece transforms a forgotten corner into a canvas for social commentary. The work explores themes of urban decay, gentrification, and community resilience through bold typography and weathered textures.",
    },
    {
      id: 2,
      slug: "midnight-session",
      title: "MIDNIGHT SESSIONS",
      description: "Behind the scenes of late night creativity",
      image: "/images/impressions/midnight-01.jpg",
      category: "impressions",
      date: "Last Week",
      cardType: "medium-left", // Documentary style
      fullContent:
        "When the city sleeps, artists wake. This documentation captures the energy and focus of late-night creative sessions. There's something pure about working in the quiet hours - just you, your vision, and the wall. The darkness provides both cover and clarity, allowing for unfiltered expression.",
    },
    {
      id: 3,
      slug: "urban-decay",
      title: "URBAN DECAY SERIES",
      description: "Curated collection of street photography",
      images: [
        "/images/collectables/decay-01.jpg",
        "/images/collectables/decay-02.jpg",
        "/images/collectables/decay-03.jpg",
      ],
      category: "collectables",
      itemCount: 12,
      cardType: "medium-right", // Collection showcase
      fullContent:
        "Beauty exists in deterioration. This photographic series documents the elegant decay of urban environments - peeling paint that creates accidental art, rust patterns that rival any gallery piece, broken windows that frame new perspectives. Available as high-resolution digital downloads and limited edition prints.",
    },
  ],

  // Environments page content
  environments: {
    title: "ENVIRONMENTS",
    subtitle: "Urban landscapes transformed by art",
    content: [
      {
        id: 101,
        slug: "downtown-core",
        title: "DOWNTOWN CORE",
        description:
          "Intersection of 5th & Main - where the city's heartbeat meets creative expression",
        image: "/images/environments/downtown-01.jpg",
        location: "5th & Main St",
        date: "March 2024",
        tags: ["urban", "intersection", "public"],
        cardType: "jumbo", // Main environment feature
        fullContent:
          "This installation marks a pivotal moment in urban street art evolution. Located at the intersection of 5th & Main, this piece transforms a forgotten corner into a canvas for social commentary. The work explores themes of urban decay, gentrification, and community resilience through bold typography and weathered textures.",
      },
      {
        id: 102,
        slug: "warehouse-district",
        title: "WAREHOUSE DISTRICT",
        description:
          "Industrial canvas providing endless opportunities for large-scale works",
        image: "/images/environments/warehouse-01.jpg",
        location: "Industrial Zone",
        date: "February 2024",
        tags: ["industrial", "large-scale", "private"],
        cardType: "medium-right", // Industrial documentation
        fullContent:
          "The warehouse district offers what every street artist dreams of - massive walls and minimal interference. These industrial spaces become galleries where scale is the only limit. The weathered concrete and exposed brick provide texture and history that becomes part of the art itself.",
      },
      {
        id: 103,
        slug: "subway-tunnel",
        title: "SUBWAY TUNNEL",
        description: "Underground gallery where commuters become audience",
        image: "/images/environments/subway-01.jpg",
        location: "Metro Line 1",
        date: "January 2024",
        tags: ["underground", "transit", "hidden"],
        cardType: "standard", // Standard documentation
        fullContent:
          "Deep beneath the city, the subway tunnels host a different kind of gallery. Here, art exists in motion - glimpsed from train windows, discovered during late-night platform waits. The constant flow of commuters creates an ever-changing audience for these underground masterpieces.",
      },
    ],
  },

  // Impressions page content
  impressions: {
    title: "IMPRESSIONS",
    subtitle: "Moments captured in the creative process",
    content: [
      {
        id: 201,
        slug: "midnight-session",
        title: "MIDNIGHT SESSION",
        description:
          "The work begins after dark - when the city sleeps, artists wake",
        image: "/images/impressions/midnight-01.jpg",
        date: "Last Night",
        time: "2:30 AM",
        tags: ["night", "process", "solitude"],
        cardType: "medium-left", // Documentary style
        fullContent:
          "When the city sleeps, artists wake. This documentation captures the energy and focus of late-night creative sessions. There's something pure about working in the quiet hours - just you, your vision, and the wall. The darkness provides both cover and clarity, allowing for unfiltered expression.",
      },
      {
        id: 202,
        slug: "creative-process",
        title: "CREATIVE PROCESS",
        description: "From sketch to wall - documenting the transformation",
        image: "/images/impressions/process-01.jpg",
        images: [
          "/images/impressions/process-01.jpg",
          "/images/impressions/process-02.jpg",
          "/images/impressions/process-03.jpg",
          "/images/impressions/process-04.jpg",
        ],
        date: "This Week",
        duration: "4 hours",
        tags: ["process", "transformation", "dedication"],
        cardType: "carousel", // Process steps gallery
        fullContent:
          "Every piece starts as an idea, evolves through sketches, and finally manifests on the wall. This documentation follows that journey - from the first pencil lines in a blackbook to the final spray of paint. The process is as important as the result, revealing the dedication and craft behind each piece.",
      },
    ],
  },

  // Debris page content
  debris: {
    title: "DEBRIS",
    subtitle: "Found objects and cherished fragments",
    content: [
      {
        id: 601,
        slug: "found-objects",
        title: "FOUND OBJECTS",
        description: "Street artifacts with stories to tell",
        image: "/images/debris/found-01.jpg",
        images: [
          "/images/debris/found-01.jpg",
          "/images/debris/found-02.jpg",
          "/images/debris/found-03.jpg",
          "/images/debris/found-04.jpg",
          "/images/debris/found-05.jpg",
        ],
        category: "artifacts",
        date: "Various",
        tags: ["found", "artifacts", "street"],
        cardType: "carousel", // Gallery of found items
        fullContent:
          "These objects were discovered during documentation sessions - remnants of creative processes, forgotten tools, fragments of larger works. Each piece carries the DNA of street culture. Found but not taken, photographed and preserved digitally. A collection of the ephemeral made permanent.",
      },
      {
        id: 602,
        slug: "fond-memories",
        title: "FOND MEMORIES",
        description: "Nostalgic pieces from the culture",
        image: "/images/debris/fond-01.jpg",
        category: "memories",
        date: "Timeless",
        tags: ["nostalgia", "culture", "memories"],
        cardType: "medium-right", // Nostalgic presentation
        fullContent:
          "Some debris is emotional - memories of pieces that no longer exist, documentation of work that's been painted over, fragments of a culture that's constantly evolving. These are the fond memories, the moments we hold onto as the city changes around us.",
      },
    ],
  },

  // Technologies page content
  technologies: {
    title: "TECHNOLOGIES",
    subtitle: "Digital tools and button pushing",
    content: [
      {
        id: 701,
        slug: "button-pushing",
        title: "BUTTON PUSHING",
        description: "The art of digital creation and manipulation",
        image: "/images/technologies/buttons-01.jpg",
        category: "digital",
        date: "Always",
        tags: ["digital", "tools", "creation"],
        cardType: "jumbo", // Feature the concept
        fullContent:
          "Street art isn't just spray cans anymore. Digital tools, photo manipulation, social media distribution - it's all button pushing. This documentation exists because of technology. The smooth scrolling, the image optimization, the global distribution - all button pushing in service of street culture.",
      },
      {
        id: 702,
        slug: "digital-tools",
        title: "DIGITAL TOOLS",
        description: "Technology in service of authentic culture",
        image: "/images/technologies/tools-01.jpg",
        images: [
          "/images/technologies/tools-01.jpg",
          "/images/technologies/tools-02.jpg",
          "/images/technologies/tools-03.jpg",
        ],
        category: "tools",
        date: "2024",
        tags: ["software", "documentation", "preservation"],
        cardType: "carousel", // Tool showcase
        fullContent:
          "The cameras that capture the work, the software that preserves it, the websites that share it - technology amplifies street culture without replacing it. These digital tools don't create the art, they document and distribute it. Button pushing with purpose.",
      },
    ],
  },

  // Collectables page content
  collectables: {
    title: "COLLECTABLES",
    subtitle: "Curated series and limited drops",
    content: [
      {
        id: 401,
        slug: "urban-decay",
        title: "URBAN DECAY SERIES",
        description:
          "Beauty in deterioration - 12 piece photography collection",
        images: [
          "/images/collectables/decay-01.jpg",
          "/images/collectables/decay-02.jpg",
          "/images/collectables/decay-03.jpg",
          "/images/collectables/decay-04.jpg",
        ],
        category: "photography",
        itemCount: 12,
        price: 120,
        format: "Digital + Print",
        tags: ["photography", "urban", "decay"],
        cardType: "carousel", // Photo series gallery
        fullContent:
          "The Urban Decay Series captures the beautiful deterioration of urban environments. Shot over 6 months in abandoned buildings and forgotten corners of the city, this collection reveals the poetry in decay. Each photograph tells a story of time's passage and nature's reclamation. Available as high-resolution digital downloads and limited edition prints.",
      },
      {
        id: 402,
        slug: "night-shift",
        title: "NIGHT SHIFT DOCUMENTATION",
        description:
          "After hours street art documentation - when the city transforms",
        image: "/images/collectables/night-01.jpg",
        category: "photography",
        itemCount: 8,
        timeframe: "12AM - 6AM",
        tags: ["night", "documentation", "transformation"],
        cardType: "medium-left", // Documentary style
        fullContent:
          "Night Shift Documentation chronicles the underground art scene that emerges after midnight. When most of the city sleeps, artists transform walls, bridges, and forgotten spaces into galleries. This collection captures not just the art, but the energy, the community, and the raw creativity that defines street culture.",
      },
      {
        id: 403,
        slug: "tool-archaeology",
        title: "TOOL ARCHAEOLOGY",
        description:
          "Found objects from abandoned art sessions - each piece tells a story",
        image: "/images/collectables/tools-01.jpg",
        images: [
          "/images/collectables/tools-01.jpg",
          "/images/collectables/tools-02.jpg",
          "/images/collectables/tools-03.jpg",
          "/images/collectables/tools-04.jpg",
          "/images/collectables/tools-05.jpg",
        ],
        category: "artifacts",
        itemCount: 15,
        rarity: "Unique pieces",
        tags: ["found-objects", "history", "artifacts"],
        cardType: "medium-right", // Artifact presentation
        fullContent:
          "Tool Archaeology preserves the remnants of creative sessions - discarded spray cans, worn brushes, fragments of stencils. These objects carry the DNA of street art culture. Each piece is authenticated and documented with location and approximate date found. A tangible connection to the ephemeral world of street art.",
      },
    ],
  },
};

// Helper functions to get content
export const getFeaturedContent = () => siteContent.featured;

export const getPageContent = (pageId) => siteContent[pageId];

export const getContentBySlug = (slug) => {
  // Search through all content to find by slug
  for (const section of Object.values(siteContent)) {
    if (Array.isArray(section)) {
      const found = section.find((item) => item.slug === slug);
      if (found) return found;
    } else if (section.content) {
      const found = section.content.find((item) => item.slug === slug);
      if (found) return found;
    }
  }
  return null;
};

export const getAllContent = () => {
  // Get all content for static generation
  const allContent = [];

  for (const section of Object.values(siteContent)) {
    if (Array.isArray(section)) {
      allContent.push(...section);
    } else if (section.content) {
      allContent.push(...section.content);
    }
  }

  return allContent;
};

export const getContentByCategory = (category) => {
  const pageData = siteContent[category];
  return pageData?.content || [];
};
