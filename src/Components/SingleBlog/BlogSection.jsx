import React from "react";
import { FaSearch } from "react-icons/fa";

const BlogSection = () => {
  const recentPosts = [
    { id: 1, title: "Want more charitable resources", date: "APRIL 24, 2021", image: "/blog/r1.jpg" },
    { id: 2, title: "A quick tutorial for using", date: "APRIL 26, 2021", image: "/blog/r2.jpg" },
    { id: 3, title: "Informed donor is very effective", date: "APRIL 22, 2021", image: "/blog/r3.jpg" },
  ];

  const tags = ["Lamps", "Panels", "Boxes", "Wiring", "Sensors", "Automation"];

  const relatedPosts = [
    { id: 1, image: "/blog/r3.jpg", title: "Decorate your home with modern products", author: "Admin", date: "14 Dec 2028" },
    { id: 2, image: "/blog/r1.jpg", title: "Spatialize with accessories", author: "Admin", date: "15 Dec 2028" },
    { id: 3, image: "/blog/r2.jpg", title: "Unique products to impress your home", author: "Admin", date: "16 Dec 2028" },
  ];

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-10">
      {/* Sidebar */}
      <aside className="lg:col-span-3 space-y-6">
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Items Search..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none pr-14"
          />
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-r">
            <FaSearch className="text-white w-8 h-6" />
          </div>
        </div>
        {/* Categories */}
        <div>
          <h3 className="font-bold text-lg mb-2">Categories</h3>
          <ul className="space-y-2 text-gray-700">
            {['Accessories', 'Automation', 'Boxes', 'Sensors', 'Fittings', 'Ballasts'].map((category, index) => (
              <li key={index} className="flex justify-between hover:text-yellow-500">
                <span>{category}</span> <span>({index + 2})</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Recent Posts */}
        <div>
          <h3 className="font-bold text-lg mb-2">Recent Posts</h3>
          <ul className="space-y-4">
            {recentPosts.map((post) => (
              <li key={post.id} className="flex items-center space-x-3">
                <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded-md" />
                <div>
                  <p className="text-sm font-semibold">{post.title}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </li>
            ))}
          </ul>
          {/* Tags Section */}
          <div>
            <h3 className="font-bold text-lg mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <button key={index} className="px-3 py-1 text-sm bg-gray-200 rounded-full hover:bg-yellow-500 hover:text-white">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Instagram Feed */}
          <div>
            <h3 className="font-bold text-lg mb-2">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              <img src="/blog/l1.jpg" alt="Instagram 1" className="w-full h-16 object-cover rounded-md" />
              <img src="/blog/l2.jpg" alt="Instagram 2" className="w-full h-16 object-cover rounded-md" />
              <img src="/blog/l3.jpg" alt="Instagram 3" className="w-full h-16 object-cover rounded-md" />
              <img src="/blog/l4.webp" alt="Instagram 4" className="w-full h-16 object-cover rounded-md" />
              <img src="/blog/l5.jpg" alt="Instagram 5" className="w-full h-16 object-cover rounded-md" />
              <img src="/blog/l6.jpg" alt="Instagram 6" className="w-full h-16 object-cover rounded-md" />
            </div>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="lg:col-span-9">
        <img src="/blog/r3.jpg" alt="Blog header" className="w-full h-82 object-cover rounded-md" />
        <p className="text-gray-700 text-sm mt-2">By Admin - 14 Dec 2020</p>
        <h1 className="text-2xl md:text-3xl font-bold">Successful completion of largest project in Europe.</h1>
        <p className="text-gray-700">Vestibulum quis risus non arcu imperdiet mollis. Donec vel nisl at purus dignissim eleifend in ut est. Etiam in metus vel nunc dictum interdum. Donec eget nulla et nunc eleifend porta. Integer sit amet dapibus nunc. Vestibulum id quam a tellus mollis pulvinar nec et neque. Pellentesque vulputate leo orci. Etiam tellus magna, dictum a congue nec, pellentesque eget purus. Maecenas aliquet ex sed faucibus rutrum. Vivamus venenatis mollis erat ac tristique. Maecenas et faucibus tortor. Integer facilisis eros nibh. Nunc sed lacinia arcu, ac sollicitudin diam. In aliquam ac purus sit amet commodo. Nullam at molestie est. Donec quis consectetur sem.</p>
        <blockquote className="border-l-4 border-yellow-500 font-medium pl-4 italic text-gray-600 my-6">
          Sed elementum commodo lacus, non vestibulum libero commodo in. Nulla consectetur vehicula ligula, non semper lorem efficitur quis. Vestibulum nec efficitur risus. Aliquam elit felis, placerat non dui tempor
        </blockquote>
        <p className="text-gray-700">lacinia dignissim libero. Maecenas vitae dui et erat tempus vehicula vel in sapien. Etiam non lectus ac metus eleifend accumsan eget vel urna. Nulla accumsan massa sed erat luctus, in tristique libero scelerisque. Vestibulum finibus, felis eu rutrum efficitur, ligula lorem mattis libero, ac vulputate turpis orci faucibus elit. Nam faucibus enim eu tincidunt dapibus. Pellentesque a pharetra nibh. Fusce eu nisl porttitor, blandit nibh in, tristique erat. Duis non quam mauris. Nunc dui sapien, ultrices ac pulvinar at, pretium eget quam. Nam elementum ipsum a egestas scelerisque. In hac habitasse platea dictumst...</p>
        {/* Related Posts */}
        <section className="mt-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700 uppercase">Related Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedPosts.map((post) => (
              <div key={post.id} className="rounded p-4 border border-gray-200 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                <img src={post.image} alt={post.title} className="w-full h-32 object-cover rounded-md" />
                <p className="text-sm mt-2 text-gray-500">By: {post.author} On: {post.date}</p>
                <h3 className="mt-2 text-lg font-medium">{post.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogSection;
