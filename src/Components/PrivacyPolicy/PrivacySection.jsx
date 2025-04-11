import React from "react";

const PrivacySection = () => {
  const sections = [
    {
      title: "Who we are",
      content: (
        <>
          Our website address is:{" "}
          <a href="#" className="text-yellow-500 font-semibold">
            your-online-site-link-here
          </a>
        </>
      ),
    },
    {
      title: "What personal data we collect and why we collect it",
      content: null,
    },
    {
      title: "Comments",
      content:
        "Volutpat in purus id, faucibus dignissim tellus. Maecenas ut ipsum vitae nibh consequat rutrum vitae ac turpis. Nullam tempus et elit eget tincidunt.",
    },
    {
      title: "Media",
      content:
        "Proin elit elit eget urna mollis auctor id id dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      title: "Cookies",
      content:
        "Ut eu lacinia orci. Aliquam ac pharetra purus, sit amet ultricies metus. Nullam nulla ex, ultricies quis nulla eu, aliquet tincidunt arcu.",
    },
    {
      title: "Embedded content from other websites",
      content:
        "Proin nec diam eget orci porta hendrerit. Curabitur dictum vel ex a hendrerit. Aliquam eget nibh sapien.",
    },
    {
      title: "How long we retain your data",
      content:
        "Maecenas ut orci posuere erat egestas posuere quis et orci. Nulla consectetur eu felis vel dictum.",
    },
    {
      title: "What rights you have over your data",
      content:
        "Nulla cursus metus non tortor pellentesque. Etiam sollicitudin, ex in gravida dictum, erat magna sodales massa.",
    },
    {
      title: "Where we send your data",
      content:
        "Sed lectus ante, tincidunt ac gravida quis, malesuada id erat. Sed non mi venenatis.",
    },
  ];

  return (
    <div className=" min-h-screen py-12 px-6 lg:px-24">
      <div className="p-8">
        {sections.map((section, index) => (
          <div key={index} className="relative mb-4">
            <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">
              {section.title}
            </h2>
            {section.content && (
              <p className="text-gray-700 text-sm md:text-base">{section.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacySection;
