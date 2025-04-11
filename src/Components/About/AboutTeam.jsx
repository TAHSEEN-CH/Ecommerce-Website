import React from 'react';

const AboutTeam = () => {
  const teamMembers = [
    { name: "Nic Veronica", title: "UI/UX Designer", image: "/about/te1.jpg" },
    { name: "Mona Santos", title: "Frontend Developer", image: "/about/te2.jpg" },
    { name: "Lina Anders", title: "Project Manager", image: "/about/tes3.jpg" },
    { name: "Lisa Amelia", title: "CEO", image: "/about/te4.jpg" }
  ];

  return (
    <section className="p-6 md:p-12 bg-gray-100 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto rounded-full object-cover shadow-lg"
            />
            <h3 className="mt-4 text-lg md:text-xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-gray-700 font-medium text-sm md:text-base">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
