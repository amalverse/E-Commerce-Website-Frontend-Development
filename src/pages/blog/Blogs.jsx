import React, { useEffect, useState } from "react";

// Only these tags will be displayed
const ALLOWED_TAGS = ["beauty", "elegance", "color", "marketplace"];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogsByTags = async () => {
      try {
        let allPosts = [];

        // Fetch posts for each allowed tag
        for (const tag of ALLOWED_TAGS) {
          const res = await fetch(`https://dummyjson.com/posts/tag/${tag}`);
          const data = await res.json();
          allPosts = [...allPosts, ...data.posts];
        }

        // Remove duplicate posts (same id)
        const uniquePosts = Array.from(
          new Map(allPosts.map((post) => [post.id, post])).values()
        );

        // Limit to 4 posts only
        setBlogs(uniquePosts.slice(0, 4));
      } catch (error) {
        console.error("Error fetching filtered blogs:", error);
      }
    };

    fetchBlogsByTags();
  }, []);

  return (
    <section
      id="blog"
      className="max-w-11/12 mx-auto px-5 py-12 bg-slate-100 rounded-2xl my-12 scroll-mt-20"
    >
      <h2 className="mb-4 text-4xl font-extrabold text-slate-900 text-center">
        Latest From Blogs
      </h2>

      <p className="max-w-lg mx-auto text-center text-gray-700 mb-10">
        Elevate Your Wardrobe with our freshest style tips, trends, and
        inspiration on our blog.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl hover:scale-105 ease-in-out transition-all duration-300"
          >
            <h4 className="mb-3 text-xl font-semibold text-slate-900 hover:text-rose-600">
              {blog.title}
            </h4>

            <p className="text-slate-600 text-sm mb-4 line-clamp-4">
              {blog.body}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags
                .filter((tag) => ALLOWED_TAGS.includes(tag))
                .map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-semibold bg-red-100 text-rose-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            <div className="flex justify-between text-sm text-gray-500">
              <span>👍 {blog.reactions.likes}</span>
              <span>👎 {blog.reactions.dislikes}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;

//I have used dummy blog api to fetch the data -this doesn't have any pictures of the blog posts...can use any other api to fetch the data
