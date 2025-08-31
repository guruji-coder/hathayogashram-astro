import rss from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Hatha Yogashram Blog - Yoga Wisdom & Insights",
    description:
      "Authentic yoga teachings, philosophy, and insights from experienced masters at Hatha Yogashram, Rishikesh. Learn about traditional yoga practices, Sanskrit mantras, and spiritual development.",
    site: context.site,
    items: [
      {
        title: "Understanding the 8 Limbs of Yoga - Patanjali's Ashtanga Path",
        link: "/blog/eight-limbs-of-yoga/",
        description:
          "Deep dive into Patanjali's Yoga Sutras and the classical eight-limbed path of yoga, from ethical guidelines to ultimate spiritual realization.",
        pubDate: new Date("2024-01-15"),
        categories: ["yoga-philosophy", "patanjali", "spiritual-practice"],
      },
      {
        title: "Hatha Yoga Pradipika: Ancient Manual for Modern Practitioners",
        link: "/blog/hatha-yoga-pradipika-guide/",
        description:
          "Explore the classical text of Hatha Yoga, its relevance for contemporary practice, and how ancient techniques can transform your yoga journey.",
        pubDate: new Date("2024-01-10"),
        categories: ["hatha-yoga", "classical-texts", "pranayama"],
      },
      {
        title: "Pranayama Techniques for Beginners: Your Complete Guide",
        link: "/blog/pranayama-techniques-beginners/",
        description:
          "Learn essential breathing techniques including Nadi Shodhana, Bhramari, and Kapalabhati. Step-by-step instructions with benefits and precautions.",
        pubDate: new Date("2024-01-05"),
        categories: ["pranayama", "breathing-techniques", "beginner-guide"],
      },
      {
        title: "Sanskrit Mantras: Sacred Sounds for Healing and Transformation",
        link: "/blog/sanskrit-mantras-healing/",
        description:
          "Discover the power of sacred Sanskrit mantras, their meanings, pronunciation, and how they can enhance your meditation and spiritual practice.",
        pubDate: new Date("2023-12-28"),
        categories: ["mantras", "sanskrit", "meditation", "healing"],
      },
      {
        title: "Ashtanga Yoga: Tradition, Practice, and Modern Application",
        link: "/blog/ashtanga-yoga-complete-guide/",
        description:
          "Comprehensive guide to Ashtanga Vinyasa Yoga, its history, primary series, and how this dynamic practice can transform body and mind.",
        pubDate: new Date("2023-12-20"),
        categories: ["ashtanga-yoga", "vinyasa", "dynamic-practice"],
      },
      {
        title: "Yoga Philosophy: Bhagavad Gita Teachings for Modern Life",
        link: "/blog/bhagavad-gita-modern-application/",
        description:
          "How the timeless wisdom of the Bhagavad Gita can guide us through modern challenges, with practical applications of Karma, Bhakti, and Jnana Yoga.",
        pubDate: new Date("2023-12-15"),
        categories: ["bhagavad-gita", "yoga-philosophy", "spiritual-wisdom"],
      },
    ],
    customData: `
      <language>en-us</language>
      <category>Education</category>
      <category>Health & Fitness</category>
      <category>Spirituality</category>
      <docs>https://hathayogashram.com/rss-info/</docs>
      <generator>Astro RSS Generator</generator>
      <managingEditor>info@hathayogashram.com (Hatha Yogashram)</managingEditor>
      <webMaster>tech@hathayogashram.com (Hatha Yogashram Tech Team)</webMaster>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <ttl>1440</ttl>
      <image>
        <url>https://hathayogashram.com/hya.jpg</url>
        <title>Hatha Yogashram</title>
        <link>https://hathayogashram.com</link>
        <description>Traditional Yoga School in Rishikesh</description>
        <width>144</width>
        <height>144</height>
      </image>
    `,
  });
}
