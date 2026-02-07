import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
// import { HiOutlineSearch } from "react-icons/hi2";

const categories = ["All", "AI", "Automation", "Case Studies", "Company News"];

const blogPosts = [
  {
    id: 1,
    title: "AI Transforming Businesses in 2025",
    excerpt:
      "Discover how AI agents automate workflows and increase efficiency.",
    category: "AI",
    date: "Dec 18, 2025",
    image:
      "https://cdn.prod.website-files.com/677ca44598d8bae2633f6c0c/6788c4a31d5db7654cc767e7_iStock-2177416324.jpg",
  },
  {
    id: 2,
    title: "Automation Tools That Save Time",
    excerpt: "Top automation tools for SMBs and enterprises.",
    category: "Automation",
    date: "Dec 10, 2025",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQEzLNef2Is2cg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1737565934588?e=2147483647&v=beta&t=Z7lhR1WrWG51w4HQCJZHyyyvc0j2gzR4Tdh34cM4Rhc",
  },
  {
    id: 3,
    title: "Syvairo Case Study: 200% ROI",
    excerpt: "How a client scaled revenue using AI automation.",
    category: "Case Studies",
    date: "Nov 30, 2025",
    image:
      "https://goodcrypto.app/wp-content/uploads/2025/08/DCA-case-pic-1.jpg",
  },
  {
    id: 4,
    title: "Company Updates & News",
    excerpt: "Latest news from Syvairo HQ.",
    category: "Company News",
    date: "Nov 25, 2025",
    image:
      "https://thumbs.dreamstime.com/b/company-news-chalkboard-background-concept-77312660.jpg",
  },
  // Add more posts...
];

const MediaBlog = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = blogPosts.filter(
    (post) =>
      (activeCategory === "All" || post.category === activeCategory) &&
      post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      className="bgGradient"
      style={{
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto  px-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl  font-bold text-center mb-20"
          style={{ color: "var(--text-primary)" }}
        >
          Media & Blog
        </motion.h1>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <HiOutlineSearch className="absolute top-3 left-3 text-secondary" />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
                color: "var(--text-primary)",
              }}
            />
          </div>

          {/* Categories */}
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  activeCategory === cat
                    ? "bg-accent text-black"
                    : "bg-card-bg text-secondary hover:bg-accent hover:text-black"
                }`}
                style={{
                  backgroundColor:
                    activeCategory === cat ? "var(--accent)" : "var(--card-bg)",
                  color:
                    activeCategory === cat ? "#000" : "var(--text-secondary)",
                  border: `1px solid var(--card-border)`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {filteredPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl overflow-hidden cursor-pointer shadow-md"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: `1px solid var(--card-border)`,
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p
                    className="text-sm font-semibold mb-2"
                    style={{ color: "var(--accent)" }}
                  >
                    {post.category} • {post.date}
                  </p>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-secondary">{post.excerpt}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-3">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className="px-4 py-2 rounded-xl border text-secondary hover:bg-accent hover:text-black transition"
              style={{
                borderColor: "var(--card-border)",
                backgroundColor: "var(--card-bg)",
              }}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaBlog;
