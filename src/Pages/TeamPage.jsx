import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const TeamPage = () => {
    const TeamData = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1742435456486-3a0059c05e38?w=500&auto=format&fit=crop&q=60",
            position: "Senior Developer",
            name: "User1",
            about: "Passionate about coding and innovation.",
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1742129726461-ea9c742d3860?w=500&auto=format&fit=crop&q=60",
            position: "Middle Developer",
            name: "User2",
            about: "Love creating smooth user experiences.",
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1742435456486-3a0059c05e38?w=500&auto=format&fit=crop&q=60",
            position: "Junior Developer",
            name: "User3",
            about: "Aspiring full-stack developer.",
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1742435456486-3a0059c05e38?w=500&auto=format&fit=crop&q=60",
            position: "Senior Developer",
            name: "User1",
            about: "Passionate about coding and innovation.",
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1742129726461-ea9c742d3860?w=500&auto=format&fit=crop&q=60",
            position: "Middle Developer",
            name: "User2",
            about: "Love creating smooth user experiences.",
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1742435456486-3a0059c05e38?w=500&auto=format&fit=crop&q=60",
            position: "Junior Developer",
            name: "User3",
            about: "Aspiring full-stack developer.",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center p-10">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-12">Meet Our Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {TeamData.map((member) => (
                    <div key={member.id} className="bg-white p-8 rounded-xl shadow-xl text-center w-80 transform hover:scale-105 transition duration-300">
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-50 h-50 object-cover rounded-full mx-auto "
                        />
                        <h3 className="text-2xl font-bold mt-4 text-gray-900">{member.name}</h3>
                        <p className="text-indigo-600 font-medium text-lg">{member.position}</p>
                        <p className="text-gray-700 mt-3 italic">{member.about}</p>
                        <div className="flex justify-center gap-6 mt-5 text-xl">
                            <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-200">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-200">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-pink-500 hover:text-pink-700 transition duration-200">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamPage;
