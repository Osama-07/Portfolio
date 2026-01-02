import ProjectCard from "./ProjectCard";

const cardData = [
  {
    title: "hanfi-ihsa",
    description:
      "A specialized web platform for presenting Islamic jurisprudence topics. I developed the backend architecture and contributed enhancements to the frontend, focusing on improving user experience and functionality.",
    img: "/hanfi.png",
    link: null,
    webLink: "https://hanfi-ihsa.com/",
  },
  {
    title: "Photographer Website",
    description:
      "A sleek and responsive portfolio website designed for a photographer, built using Vite, React, and Tailwind CSS. The site elegantly showcases the photographer's portfolio with a modern design, ensuring fast performance and an exceptional user experience. Tailwind CSS was used to create a clean, customizable layout, while Vite ensures quick development and smooth loading times.",
    img: "/Photographer Portfolio.png",
    link: null,
    webLink: "https://photography-portfolio-one-dun.vercel.app/",
  },
  {
    title: "Solar Fix",
    description:
      "A full-stack web platform that connects clients with certified solar technicians. Clients can register, book services, track request status, and rate technicians. Technicians manage incoming requests, accept jobs, and close completed orders.",
    img: "/SolarFix.png",
    link: "https://github.com/Osama-07/SolarFix-API",
    webLink:
      "https://solar-fix-git-main-osamas-projects-b75d1734.vercel.app/login",
  },
  {
    title: "Prayers Timings",
    description:
      "A website developed to display prayer times for Muslims, built using Vite, React, and Tailwind CSS. The site provides accurate and timely prayer schedules based on the user's location, offering a clean and user-friendly interface. The use of Tailwind CSS ensures a responsive design, while Vite accelerates the development process for a fast, smooth user experience.",
    img: "/Prayers-Timings.png",
    link: "https://github.com/Osama-07/Prayers-Time",
    webLink: "https://strong-otter-32c7dd.netlify.app/",
  },
  {
    title: "Restaurant Management System",
    description:
      "A system for managing restaurants allowing customers to sit at any available table. It uses the RestaurantDB database to manage orders, meals, and customer details. The system is designed to provide a seamless and efficient experience for both the restaurant and its customers.",
    img: "/Restuarant.png",
    link: "https://github.com/Osama-07/RestaurantAPI_Project",
    webLink: null,
  },
  {
    title: "Library Management System",
    description:
      "A system for managing libraries using C#, SQL, and T-SQL. It includes features like book rentals, reservations, and email notifications for users.",
    img: "/Library.png",
    link: "https://github.com/Osama-07/Library_Management",
    webLink: null,
  },
  {
    title: "DVLD API",
    description:
      "A modernized version of the DVLD License Management System. This time, the system is built as an API using Entity Framework Core for data access. It leverages RESTful principles to provide scalable and efficient management of driving licenses, with improved performance and flexibility compared to the previous version. This API enables easy integration with other systems and offers enhanced data handling capabilities.",
    img: "/API.jpg",
    link: "https://github.com/Osama-07/DVLD_API",
    webLink: null,
  },
];

const Projects = () => {
  return (
    <div id="projects" className="px-12 max-md:px-4 py-20 ">
      <h1 className="text-center text-6xl font-extrabold mb-20 p-3 bg-gradient-to-tr from-primary via-primaryForeground to-secondary bg-clip-text text-transparent">
        Pr<span className="text-primary">o</span>jects
      </h1>
      <div className="w-full grid lg:grid-cols-3 gap-y-9 gap-x-3 md:grid-cols-2 max-sm:grid-cols-1">
        {cardData.map((card, index) => (
          <div key={index}>
            <ProjectCard
              title={card.title}
              description={card.description}
              img={card.img}
              link={card.link}
              webLink={card.webLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
