import React from "react";

const blogs = Array.from({ length: 30 }, (_, i) => ({
  title: `Amazing Blog Post ${i + 1}`,
  description:
    "This is a short preview of the blog post content. Click to read more...",
  image: `https://picsum.photos/600/400?random=${i + 1}`,
  date: `2025-08-${(i % 30) + 1}`,
  author: `Author ${i + 1}`,
}));

const BlogSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-14 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            Latest Blog Posts
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            Explore 30+ fresh blogs with modern design and smooth 3D effects
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl overflow-hidden shadow-xl transform transition duration-500 hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl hover:shadow-pink-500/20"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-48">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{blog.description}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 text-gray-500 text-xs">
                  <span>{blog.date}</span>
                  <span className="italic">{blog.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
