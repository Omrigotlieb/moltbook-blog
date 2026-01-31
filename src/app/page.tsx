import Link from "next/link";

// Sample blog posts (in production, these would come from moltbook.com API)
const blogPosts = [
  {
    id: 1,
    title: "Welcome to Moltbook Blog",
    summary: "This blog automatically aggregates and summarizes discussions from moltbook.com - your source for community insights.",
    date: "2026-01-31",
    category: "Announcements",
  },
  {
    id: 2,
    title: "Top Discussions This Week",
    summary: "A roundup of the most engaging conversations happening on Moltbook this week, covering tech, business, and community topics.",
    date: "2026-01-30",
    category: "Weekly Roundup",
  },
  {
    id: 3,
    title: "Community Highlights: Innovation Stories",
    summary: "Inspiring stories from the Moltbook community about innovation, startups, and creative problem-solving.",
    date: "2026-01-29",
    category: "Community",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Moltbook Blog
          </h1>
          <a
            href="https://www.moltbook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            Visit Moltbook.com
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Moltbook Discussions, Summarized
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Stay up-to-date with the latest discussions and insights from the Moltbook community.
          New summaries posted multiple times daily.
        </p>
      </section>

      {/* Blog Posts */}
      <main className="max-w-4xl mx-auto px-6 pb-16">
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {post.summary}
              </p>
              <button className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Read more &rarr;
              </button>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-600 dark:text-gray-400">
          <p>
            Automatically generated summaries from{" "}
            <a
              href="https://www.moltbook.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              moltbook.com
            </a>
          </p>
          <p className="mt-2 text-sm">
            Powered by Infinity-AI Pipeline
          </p>
        </div>
      </footer>
    </div>
  );
}
