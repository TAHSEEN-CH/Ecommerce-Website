import { useState } from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
    {
        id: 1,
        name: "White Lewis",
        rating: 5,
        comment: "Quisque varius sed purus ac euismod. Duis urna mauris, pharetra quis ultricies id, eleifend vitae ipsum. Mauris dui nisi, sagittis sit amet luctus ut, pellentesque quis risus.",
        avatar: "/SingleProduct/Review(1).png"
    },
    {
        id: 2,
        name: "White Lewis",
        rating: 5,
        comment: "Quisque varius sed purus ac euismod. Duis urna mauris, pharetra quis ultricies id, eleifend vitae ipsum. Mauris dui nisi, sagittis.",
        avatar: "/SingleProduct/Review(2).png"
    }
]
const Description = () => {
    const [activeTab, setActiveTab] = useState("2");

    return (
        <div className="container mx-auto px-2 md:px-10 lg:px-35 mt-1 py-20 ">
            {/* Tab Navigation */}
            <div className="flex max-md:gap-1 gap-5 px-2 justify-center ">
                {[
                    { id: "1", label: "Description" },
                    { id: "2", label: "Product Details" },
                    { id: "3", label: " Reviews (2)" },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        className={`py-2  text-nowrap px-3 pb-3 font-bold max-md:font-semibold max-md:text-lg text-2xl border-b-2 transition-colors duration-300 cursor-pointer hover:border-b-2 hover:border-yellow-500 hover:text-black ${activeTab === tab.id ? "border-yellow-500 text-black font-bold" : "border-transparent text-gray-700"
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="border-1 border-gray-300 p-2 md:p-10 lg:p-10">
                {activeTab === "1" && (
                    <div className=" flex flex-wrap gap-y-4">
                        <p className="">Morbi vel dictum mauris. Nullam leo dolor, mattis vel ullamcorper vitae</p>
                        <p>Donec non ligula mi. Aliquam erat volutpat. Sed pretium nisi fermentum, ullamcorper elit non, pellentesque metus. Morbi hendrerit vehicula justo, auctor luctus felis venenatis quis. Cras vehicula scelerisque felis vel vehicula.</p>

                    </div>
                )}
                {activeTab === "2" && (
                    <div className="space-y-3">
                        <div className=" flex gap-24">
                            <span className="font-semibold">Weight:</span>
                            <span className="">500 g</span>
                        </div>
                        <div className="flex gap-16">
                            <span className="font-semibold">Dimensions:</span>
                            <span className="">20 × 10 × 15 cm</span>
                        </div>
                        <div className="flex gap-20">
                            <span className="font-semibold">Materials:</span>
                            <span className="">50% cotton, 40% polyester</span>
                        </div>
                        <div className="flex gap-18">
                            <span className="font-semibold text-nowrap ">Other Info:</span>
                            <span className="">American heirloom kjean shorts pug seitan letterpress</span>
                        </div>
                    </div>
                )}
                {activeTab === "3" && (
                    <div className=" mt-10 space-y-6 grid lg:grid-cols-2 gap-10 ">

                        <div className="space-y-5 lg:pt-5">
                            {reviews.map(review => (
                                <div key={review.id} className="flex gap-4 items-start  pb-4">
                                    <img src={review.avatar} alt={review.name} className="w-20 h-20 rounded-full" />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <span className="font-semibold text-nowrap">{review.name}</span>
                                            <div className="flex text-yellow-500">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                            </div>
                                            <p className=" mx-auto mr-2 hover:text-yellow-500 cursor-pointer ">Reply</p>
                                        </div>
                                        <p className="text-gray-600 mt-2">{review.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add Review Form */}
                        <div>
                            <h3 className="text-xl font-semibold">Add a Review</h3>
                            <div className="flex gap-3 mt-2">
                                <label className="block font-medium">Your rating:</label>
                                <span className="text-yellow-500 text-lg">★★★★★</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <input type="text" placeholder="Name" className="border p-2 w-full" />
                                <input type="email" placeholder="Email" className="border p-2 w-full" />
                            </div>
                            <textarea placeholder="Message" className="border p-2 w-full mt-4 h-24"></textarea>
                            <button className="text-lg bg-yellow-500 hover:bg-yellow-600 transition cursor-pointer text-white px-6 py-2 mt-4">Submit</button>
                        </div>
                    </div>
                )}

            </div>
        </div>

    );
};

export default Description;
