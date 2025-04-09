import { useState } from "react";
import { FaSearch } from "react-icons/fa";


export default function BlogPage() {
    const [email, setEmail] = useState("");
    const handleInputChange = (e) => setEmail(e.target.value);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 2;

    const posts = [
        {
            id: 1,
            title: "Successful completion of largest project in Europe.",
            image: "/blog/r1.jpg",
            description: "Quisque sodales metus eget dapibus laoreet.",
        },
        {
            id: 2,
            title: "Decorate your home with modern furnishings.",
            image: "/blog/r2.jpg",
            description: "Quisque sodales metus eget dapibus laoreet.",
        },
        {
            id: 3,
            title: "Some M1 Macs AffectedBy Fast User Switching Screensaver Bug.",
            image: "/blog/r3.jpg",
            description: "Quisque sodales metus eget dapibus laoreet.",
        },
        {
            id: 4,
            title: "Electrical technicians working on electronics parts.",
            image: "/blog/r4.webp",
            description: "Quisque sodales metus eget dapibus laoreet.",
        },
    ];

    const youtubeVideos = [
        {
            id: 3,
            title: "Latest Tech Innovations in 2025",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
            id: 4,
            title: "Top 10 Gadgets for Developers",
            videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
        },
    ];

    const recentPosts = [
        { id: 1, title: "Want more charitable resources", date: "APRIL 24, 2021", image: "/blog/r1.jpg" },
        { id: 2, title: "A quick tutorial for using", date: "APRIL 26, 2021", image: "/blog/r2.jpg" },
        { id: 3, title: "Informed donor is very effective", date: "APRIL 22, 2021", image: "/blog/r3.jpg" },
    ];
    // Pagination Logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const tags = ["Technology", "Innovation", "Web Design", "React", "Development", "Electronics"];

    return (
        <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10">
            {/* Left Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
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
                        <li className="flex justify-between hover:text-yellow-500">
                            <span>Accessories</span> <span>(5)</span>
                        </li>
                        <li className="flex justify-between hover:text-yellow-500">
                            <span>Automation</span> <span>(3)</span>
                        </li>
                        <li className="flex justify-between hover:text-yellow-500">
                            <span>Boxes</span> <span>(2)</span>
                        </li>
                        <li className="flex justify-between hover:text-yellow-500">
                            <span>Sensors</span> <span>(8)</span>
                        </li>
                        <li className="flex justify-between hover:text-yellow-500">
                            <span>Fittings</span> <span>(6)</span>
                        </li>
                        <li className="flex justify-between hover:text-yellow-500">
                            <span>Ballasts</span> <span>(3)</span>
                        </li>
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
                </div>

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
            </aside>

            {/* Right Side - Blog Posts & YouTube Videos */}
            <main className="lg:col-span-3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Blog Posts */}
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={post.image} alt={post.title} className="w-full h-62 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold hover:text-yellow-500">{post.title}</h2>
                                <p className="mt-2 text-gray-600">{post.description}</p>
                                <button className="mt-4 bg-black text-white px-4 py-2 hover:bg-gray-700">Read More</button>
                            </div>
                        </div>
                    ))}

                    {/* YouTube Videos */}
                    {youtubeVideos.map((video) => (
                        <div key={video.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="w-full h-62">
                                <iframe
                                    className="w-full h-full"
                                    src={video.videoUrl}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-bold">{video.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center space-x-2">
                    <button
                        className={`px-3 py-2 rounded-full ${currentPage === 1 ? "bg-yellow-500" : "bg-gray-200"}`}
                        onClick={() => setCurrentPage(1)}
                    >
                        1
                    </button>
                    <button
                        className={`px-3 py-2 rounded-full ${currentPage === 2 ? "bg-yellow-500" : "bg-gray-200"}`}
                        onClick={() => setCurrentPage(2)}
                    >
                        2
                    </button>
                </div>
            </main>
        </div>
    );
}
