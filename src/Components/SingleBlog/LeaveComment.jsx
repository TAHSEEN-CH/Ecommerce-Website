import React, { useState } from "react";

const comments = [
  {
    id: 1,
    name: "Olivia",
    date: "January 10, 2025 at 1:30 am",
    text: "Vestibulum ante ipsum primis aucibus orci luctus et ultrices posuere cubilia Curae Suspendisse varius ut mauris. Mauris ultricies auctor vehicula. Phasellus quam nisi, congue id nulla.",
    avatar: "/blog/te1.jpg",
  },
  {
    id: 2,
    name: "Isabella",
    date: "February 15, 2025 at 2:30 pm",
    text: "Vestibulum ante ipsum primis aucibus orci luctus et ultrices posuere cubilia Curae Suspendisse varius ut mauris. Mauris ultricies auctor vehicula. Phasellus quam nisi, congue id nulla.",
    avatar: "/blog/tes3.jpg",
  },
  {
    id: 3,
    name: "Sophia",
    date: "March 23, 2025 at 12:00 am",
    text: "Vestibulum ante ipsum primis aucibus orci luctus et ultrices posuere cubilia Curae Suspendisse varius ut mauris. Mauris ultricies auctor vehicula. Phasellus quam nisi, congue id nulla.",
    avatar: "/blog/te4.jpg",
  },
];

const CommentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", website: "", comment: "" }); // Clear form after submission
  };

  return (
    <div className=" p-4 lg:px-20  md:px-10 flex justify-center mt-5">
      <div className="w-full ">
        <h2 className="text-3xl font-semibold mb-8  text-center ">3 Comments</h2>
        <div className="space-y-6 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 md:px-15 lg:px-15 gap-10 place-content-center ">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start justify-center  mx-auto space-x-4 border-b pb-4">
              <img
                src={comment.avatar}
                alt={comment.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1 border border-gray-400 p-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold">{comment.name}</h3>
                  <button className="text-sm text-gray-500 cursor-pointer hover:text-yellow-500 ">Reply</button>
                </div>
                <p className="text-sm font-semibold mt-2 text-gray-500">{comment.date}</p>
                <p className="mt-2 text-gray-700">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:px-15 mb-10 ">
          <h3 className="text-3xl text-gray-800 font-bold ">Leave A Reply</h3>
          <p className="mt-2 text-gray-600 font-medium">
            Your email address will not be published. Required fields are marked *
          </p>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className="w-full h-64 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Write a review"
            ></textarea>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                required
              />
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Website"
                className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white px-8 py-3 hover:bg-yellow-600 transition cursor-pointer w-full sm:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
