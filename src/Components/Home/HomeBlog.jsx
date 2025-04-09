import React from "react";

const blogs = [
  {
    id: 1,
    title: "Successful completion of largest digital project.",
    user: "Admin",
    date: "March 23, 2024",
    image: "/blog/r1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a eros nec diam malesuada auctor...",
  },
  {
    id: 2,
    title: "Some M1 Macs Affected By Fast User Switching.",
    user: "Admin",
    date: "April 10, 2024",
    image: "/blog/r2.jpg",
    description: "Curabitur tempus dapibus ligula, sed tristique risus sagittis ut. Aenean vehicula nunc at mi posuere...",
  },
  {
    id: 3,
    title: "Electrical technicians working on electronics parts.",
    user: "Admin",
    date: "August 14, 2024",
    image: "/blog/r3.jpg",
    description: "Etiam vitae lacus at lacus convallis volutpat. Quisque elementum malesuada nulla, id tincidunt metus...",
  },
];

const HomeBlog = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Latest Blog</h2>
        <p className="text-gray-800 font-medium mt-2 text-lg">Learn more about our work and latest insights.</p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
            {/* Blog Image */}
            <img src={blog.image} alt={blog.title} className="w-full h-52 object-cover" />

            {/* Blog Content */}
            <div className="p-4 relative">
              {/* Author & Date Section */}
              <div className="flex items-center justify-between text-sm text-gray-900 mb-2">
                <span className="font-semibold">By: {blog.user}</span>
                <span className="font-semibold">{blog.date}</span>
              </div>

              <h3 className="text-xl font-bold mt-2">{blog.title}</h3>
              <p className="text-gray-800 text-sm mt-2">{blog.description}</p>

              {/* Read More Button */}
              <button className="mt-4 px-4 py-2 bg-black text-white text-sm font-medium hover:bg-gray-700">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBlog;