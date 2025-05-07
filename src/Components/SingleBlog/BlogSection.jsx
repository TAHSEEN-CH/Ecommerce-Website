import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Successful completion of largest project in Europe.",
    image: "/blog/r1.jpg",
    description1: "Vestibulum quis risus non arcu imperdiet mollis. Donec vel nisl at purus dignissim eleifend in ut est. Etiam in metus vel nunc dictum interdum. Donec eget nulla et nunc eleifend porta. Integer sit amet dapibus nunc. Vestibulum id quam a tellus mollis pulvinar nec et neque. Pellentesque vulputate leo orci. Etiam tellus magna, dictum a congue nec, pellentesque eget purus. Maecenas aliquet ex sed faucibus rutrum. Vivamus venenatis mollis erat ac tristique. Maecenas et faucibus tortor. Integer facilisis eros nibh. Nunc sed lacinia arcu, ac sollicitudin diam. In aliquam ac purus sit amet commodo. Nullam at molestie est. Donec quis consectetur sem.",
    description2: "lacinia dignissim libero. Maecenas vitae dui et erat tempus vehicula vel in sapien. Etiam non lectus ac metus eleifend accumsan eget vel urna. Nulla accumsan massa sed erat luctus, in tristique libero scelerisque. Vestibulum finibus, felis eu rutrum efficitur, ligula lorem mattis libero, ac vulputate turpis orci faucibus elit. Nam faucibus enim eu tincidunt dapibus. Pellentesque a pharetra nibh. Fusce eu nisl porttitor, blandit nibh in, tristique erat. Duis non quam mauris. Nunc dui sapien, ultrices ac pulvinar at, pretium eget quam. Nam elementum ipsum a egestas scelerisque. In hac habitasse platea dictumst...",
  },
  {
    id: 2,
    title: "Decorate your home with modern furnishings.",
    image: "/blog/r2.jpg",
    description1: "Vestibulum quis risus non arcu imperdiet mollis. Donec vel nisl at purus dignissim eleifend in ut est. Etiam in metus vel nunc dictum interdum. Donec eget nulla et nunc eleifend porta. Integer sit amet dapibus nunc. Vestibulum id quam a tellus mollis pulvinar nec et neque. Pellentesque vulputate leo orci. Etiam tellus magna, dictum a congue nec, pellentesque eget purus. Maecenas aliquet ex sed faucibus rutrum. Vivamus venenatis mollis erat ac tristique. Maecenas et faucibus tortor. Integer facilisis eros nibh. Nunc sed lacinia arcu, ac sollicitudin diam. In aliquam ac purus sit amet commodo. Nullam at molestie est. Donec quis consectetur sem.",
    description2: "lacinia dignissim libero. Maecenas vitae dui et erat tempus vehicula vel in sapien. Etiam non lectus ac metus eleifend accumsan eget vel urna. Nulla accumsan massa sed erat luctus, in tristique libero scelerisque. Vestibulum finibus, felis eu rutrum efficitur, ligula lorem mattis libero, ac vulputate turpis orci faucibus elit. Nam faucibus enim eu tincidunt dapibus. Pellentesque a pharetra nibh. Fusce eu nisl porttitor, blandit nibh in, tristique erat. Duis non quam mauris. Nunc dui sapien, ultrices ac pulvinar at, pretium eget quam. Nam elementum ipsum a egestas scelerisque. In hac habitasse platea dictumst...",
  },
  {
    id: 3,
    title: "Some M1 Macs AffectedBy Fast User Switching Screensaver Bug.",
    image: "/blog/r3.jpg",
    description1: "Vestibulum quis risus non arcu imperdiet mollis. Donec vel nisl at purus dignissim eleifend in ut est. Etiam in metus vel nunc dictum interdum. Donec eget nulla et nunc eleifend porta. Integer sit amet dapibus nunc. Vestibulum id quam a tellus mollis pulvinar nec et neque. Pellentesque vulputate leo orci. Etiam tellus magna, dictum a congue nec, pellentesque eget purus. Maecenas aliquet ex sed faucibus rutrum. Vivamus venenatis mollis erat ac tristique. Maecenas et faucibus tortor. Integer facilisis eros nibh. Nunc sed lacinia arcu, ac sollicitudin diam. In aliquam ac purus sit amet commodo. Nullam at molestie est. Donec quis consectetur sem.",
    description2: "lacinia dignissim libero. Maecenas vitae dui et erat tempus vehicula vel in sapien. Etiam non lectus ac metus eleifend accumsan eget vel urna. Nulla accumsan massa sed erat luctus, in tristique libero scelerisque. Vestibulum finibus, felis eu rutrum efficitur, ligula lorem mattis libero, ac vulputate turpis orci faucibus elit. Nam faucibus enim eu tincidunt dapibus. Pellentesque a pharetra nibh. Fusce eu nisl porttitor, blandit nibh in, tristique erat. Duis non quam mauris. Nunc dui sapien, ultrices ac pulvinar at, pretium eget quam. Nam elementum ipsum a egestas scelerisque. In hac habitasse platea dictumst...",
  },
  {
    id: 4,
    title: "Electrical technicians working on electronics parts.",
    image: "/blog/r4.webp",
    description1: "Vestibulum quis risus non arcu imperdiet mollis. Donec vel nisl at purus dignissim eleifend in ut est. Etiam in metus vel nunc dictum interdum. Donec eget nulla et nunc eleifend porta. Integer sit amet dapibus nunc. Vestibulum id quam a tellus mollis pulvinar nec et neque. Pellentesque vulputate leo orci. Etiam tellus magna, dictum a congue nec, pellentesque eget purus. Maecenas aliquet ex sed faucibus rutrum. Vivamus venenatis mollis erat ac tristique. Maecenas et faucibus tortor. Integer facilisis eros nibh. Nunc sed lacinia arcu, ac sollicitudin diam. In aliquam ac purus sit amet commodo. Nullam at molestie est. Donec quis consectetur sem.",
    description2: "lacinia dignissim libero. Maecenas vitae dui et erat tempus vehicula vel in sapien. Etiam non lectus ac metus eleifend accumsan eget vel urna. Nulla accumsan massa sed erat luctus, in tristique libero scelerisque. Vestibulum finibus, felis eu rutrum efficitur, ligula lorem mattis libero, ac vulputate turpis orci faucibus elit. Nam faucibus enim eu tincidunt dapibus. Pellentesque a pharetra nibh. Fusce eu nisl porttitor, blandit nibh in, tristique erat. Duis non quam mauris. Nunc dui sapien, ultrices ac pulvinar at, pretium eget quam. Nam elementum ipsum a egestas scelerisque. In hac habitasse platea dictumst...",
  },
];

const BlogSection = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));
  if (!post) {
    return <div className="text-center text-red-500">Post not found</div>;
  }


  return (
    <div className="container mx-auto p-4 gap-6 mt-10">
      {/* Main Content */}
      <main className="">
        <img src={post.image} alt="Blog header" className="w-full h-82 object-cover rounded-md" />
        <p className="text-gray-700 text-sm mt-2">By Admin - 14 Dec 2020</p>
        <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-700">{post.description1}</p>
        <blockquote className="border-l-4 border-yellow-500 font-medium pl-4 italic text-gray-600 my-6">
          Sed elementum commodo lacus, non vestibulum libero commodo in. Nulla consectetur vehicula ligula, non semper lorem efficitur quis. Vestibulum nec efficitur risus. Aliquam elit felis, placerat non dui tempor
        </blockquote>
        <p className="text-gray-700">{post.description2}</p>
        {/* Related Posts */}
        <section className="mt-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700 uppercase">Related Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {posts
              .filter((item) => item.id !== post.id) // Exclude current post
              .slice(0, 3) // Only show first 3 remaining
              .map((post) => (
                <Link to={`/singleblog/${post.id}`} key={post.id}>
                  <div className="rounded p-4 border border-gray-200 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                    <img src={post.image} alt={post.title} className="w-full h-32 object-cover rounded-md" />
                    <p className="text-sm mt-2 text-gray-500">By: Admin</p>
                    <h3 className="mt-2 text-lg font-medium">{post.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>
    </div >
  );
};

export default BlogSection;
