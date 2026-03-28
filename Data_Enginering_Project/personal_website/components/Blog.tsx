import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Building Scalable Web Applications with Next.js",
      excerpt:
        "Learn how to build production-ready web applications using Next.js and best practices for scaling.",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      slug: "nextjs-scalability",
      category: "Backend",
    },
    {
      id: 2,
      title: "My Journey to Becoming a Better Developer",
      excerpt:
        "Reflections on learning, persistence, and continuous improvement in my software engineering journey.",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      slug: "developer-journey",
      category: "Personal",
    },
    {
      id: 3,
      title: "Mastering React Hooks: A Deep Dive",
      excerpt:
        "Understanding React hooks, custom hooks, and how to use them effectively in modern applications.",
      date: "Mar 5, 2024",
      readTime: "10 min read",
      slug: "react-hooks",
      category: "Frontend",
    },
  ];

  return (
    <section id="blog" className="section bg-white">
      <div className="container-max px-4 md:px-8">
        <h2 className="text-4xl font-bold text-spirit-900 mb-4">
          Latest Blog Posts
        </h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl">
          Insights, tutorials, and reflections on software engineering, learning,
          and building products. Updated regularly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="card bg-white hover:shadow-lg transition-shadow"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-spirit-700 bg-spirit-100 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-spirit-900 mb-2 line-clamp-2">
                <Link href={`/blog/${post.slug}`} className="hover:accent-text">
                  {post.title}
                </Link>
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              {/* Read More Link */}
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-spirit-700 font-semibold hover:accent-text transition"
              >
                Read Article →
              </Link>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/blog" className="btn-primary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
