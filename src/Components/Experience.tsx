import ExperienceCard from "./ExperienceCard";

const cardData = [
  {
    position: "Software Engineer Intern",
    company: "TechWin",
    startDate: "Apr 2025",
    endDate: "Present",
    description:
      "Contributed as a Software Engineer Intern focusing on web development and team collaboration.",

    benefits: [
      "Developed and maintained web applications using PHP and Laravel.",
      "Collaborated remotely with team members using GitHub and Jira for version control and task management.",
      "Contributed to API integration and optimized backend performance.",
    ],
    img: "/TechWin Logo.jpeg",
  },
];
export default function Experience() {
  return (
    <div id="experience" className="px-12 max-md:px-4 py-20">
      <h1 className="text-center bg-gradient-to-tr from-orange-500 via-white to-gray-500 bg-clip-text text-transparent text-6xl font-extrabold mb-10">
        Expe<span className="text-orange-500">rie</span>nce
      </h1>
      <div
        className={`mt-20 w-[90%] mx-auto grid gap-6 max-md:w-full
    ${"grid-cols-2 max-md:grid-cols-1"}
  `}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${
              cardData.length % 2 !== 0 && index === cardData.length - 1
                ? "md:col-span-2 w-1/2 mx-auto max-lg:w-full max-lg:mx-auto"
                : ""
            }`}
          >
            <div>
              <ExperienceCard
                position={card.position}
                company={card.company}
                startDate={card.startDate}
                endDate={card.endDate}
                description={card.description}
                benefits={card.benefits}
                img={card.img}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
