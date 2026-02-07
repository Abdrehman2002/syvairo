import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

// Example related posts (can also filter dynamically)
const relatedPosts = [
  {
    id: 2,
    title: "Automation Tools That Save Time",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQEzLNef2Is2cg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1737565934588?e=2147483647&v=beta&t=Z7lhR1WrWG51w4HQCJZHyyyvc0j2gzR4Tdh34cM4Rhc",
  },
  {
    id: 3,
    title: "Syvairo Case Study: 200% ROI",
    image:
      "https://goodcrypto.app/wp-content/uploads/2025/08/DCA-case-pic-1.jpg",
  },
];

// The same blogPosts array from MediaBlog.jsx
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
];

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) return <p className="text-center mt-20">Post not found</p>;

  return (
    <section
      className=""
      style={{
        color: "var(--text-primary)",
      }}
    >
      <div className="py-28 px-6 max-w-4xl mx-auto">
        {/* Blog Content */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          {post.title}
        </motion.h1>
        <p className="text-sm text-secondary mb-6">
          {post.category} • {post.date}
        </p>
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-2xl mb-6"
        />
        <p className="text-lg text-secondary leading-relaxed mb-12">
          {post.excerpt.repeat(5)}
        </p>

        {/* Social Share */}
        <div className="flex gap-4 mb-12">
          {["Facebook", "Twitter", "LinkedIn"].map((social) => (
            <button
              key={social}
              className="px-4 py-2 rounded-xl border hover:bg-accent hover:text-black transition"
              style={{
                borderColor: "var(--card-border)",
                backgroundColor: "var(--card-bg)",
                color: "var(--text-primary)",
              }}
            >
              Share on {social}
            </button>
          ))}
        </div>

        {/* Related Posts */}
        <h2
          className="text-2xl font-bold mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          Related Posts
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {relatedPosts.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -6, scale: 1.02 }}
              className="cursor-pointer rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "var(--card-bg)",
                border: `1px solid var(--card-border)`,
              }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3
                  className="font-semibold text-lg"
                  style={{ color: "var(--text-primary)" }}
                >
                  {p.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostPage;
