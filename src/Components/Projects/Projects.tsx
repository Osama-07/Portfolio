import { useEffect, useRef, useState } from "react";
import Card from "./Card";

const cardData = [
  {
    title: "Prayers Timings",
    description:
      "A website developed to display prayer times for Muslims, built using Vite, React, and Tailwind CSS. The site provides accurate and timely prayer schedules based on the user's location, offering a clean and user-friendly interface. The use of Tailwind CSS ensures a responsive design, while Vite accelerates the development process for a fast, smooth user experience.",
    img: "/Prayers-Timings.png",
    link: "https://github.com/Osama-07/Prayers-Time",
    webLink: "https://strong-otter-32c7dd.netlify.app/",
  },
  {
    title: "Photographer Website",
    description:
      "A sleek and responsive portfolio website designed for a photographer, built using Vite, React, and Tailwind CSS. The site elegantly showcases the photographer's portfolio with a modern design, ensuring fast performance and an exceptional user experience. Tailwind CSS was used to create a clean, customizable layout, while Vite ensures quick development and smooth loading times.",
    img: "/Photographer-Portfolio.png",
    link: "https://github.com/Osama-07/Photographer-Portfolio",
    webLink:
      "https://photographer-portfolio-osamas-projects-b75d1734.vercel.app/",
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
    title: "DVLD",
    description:
      "A system for managing driving licenses using C# and SQL, based on a 3-Tier Architecture. It enables managing license-related data through ADO.NET for efficient and secure data access.",
    img: "/DVLD.png",
    link: "https://github.com/Osama-07/DVLD",
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
    title: "Hospital Management System",
    description:
      "A system for managing hospitals designed to improve workflows within healthcare facilities. I contributed to setting up the database and the data access layer using C#, and used Git and GitHub for team collaboration.",
    img: "/Hospital.png",
    link: "https://github.com/Osama-07/Hospital_Management_System",
    webLink: null,
  },
  {
    title: "Code Generator",
    description:
      "A Code Generator program designed to automate the creation of repetitive and boilerplate code for projects. Built using C#, this tool streamlines the development process by generating commonly used code patterns and structures, saving time and reducing errors. It's especially useful for enhancing productivity and maintaining consistency across multiple projects.",
    img: "/Code-Generator.png",
    link: "https://github.com/Osama-07/Code_Generator",
    webLink: null,
  },
  {
    title: "HTML_And_CSS-Design-One",
    description:
      "A modern and responsive design created using HTML and CSS. This design focuses on clean structure and seamless user experience, ideal for web pages requiring simplicity and functionality.",
    img: "/HTML_AND_CSS-First-Design.png",
    link: "https://github.com/Osama-07/HTML_And_CSS-First-Design",
    webLink: "https://osama-07.github.io/HTML_And_CSS-First-Design/",
  },
  {
    title: "HTML_And_CSS-Design-Two",
    description:
      "A stylish and visually appealing layout built with HTML and CSS. This design emphasizes elegant typography, spacing, and colors to provide a professional and polished look.",
    img: "/HTML_AND_CSS-Second-Design.png",
    link: "https://github.com/Osama-07/HTML_AND_CSS-Second-Design",
    webLink: "https://osama-07.github.io/HTML_AND_CSS-Second-Design/",
  },
  {
    title: "HTML_And_CSS-Design-Three",
    description:
      "A dynamic and engaging design created entirely with HTML and CSS. It incorporates responsive elements that adapt across devices, providing a smooth user experience on both mobile and desktop platforms.",
    img: "/HTML_AND_CSS-Third-Design.png",
    link: "https://github.com/Osama-07/HTML_AND_CSS-Third-Design",
    webLink: "https://osama-07.github.io/HTML_AND_CSS-Third-Design/",
  },
  {
    title: "HTML_And_CSS-Design-Four",
    description:
      "A minimalistic and user-friendly design using HTML and CSS. This design is focused on clarity and accessibility, making it suitable for both simple and content-driven websites.",
    img: "/HTML_AND_CSS-Fourth-Design.png",
    link: "https://github.com/Osama-07/HTML_CSS-Design-Four",
    webLink: "https://osama-07.github.io/HTML_CSS-Design-Four/",
  },
  {
    title: "DVLD API",
    description:
      "A modernized version of the DVLD License Management System. This time, the system is built as an API using Entity Framework Core for data access. It leverages RESTful principles to provide scalable and efficient management of driving licenses, with improved performance and flexibility compared to the previous version. This API enables easy integration with other systems and offers enhanced data handling capabilities.",
    img: "/API.jpg",
    link: "https://github.com/Osama-07/DVLD_API",
    webLink: null,
  },
  {
    title: "Special Design",
    description:
      "A training website developed using HTML, CSS, JavaScript, and TypeScript. The site offers interactive and educational content designed to teach the basics and advanced concepts of web development. It provides a responsive and user-friendly interface for learners to explore and practice web technologies effectively.",
    img: "/Special-Design.png",
    link: "https://github.com/Osama-07/Special-Design",
    webLink: "https://osama-07.github.io/Special-Design/",
  },
  {
    title: "My Portfolio",
    description:
      "A personal portfolio website built using Vite, React, TypeScript, and Tailwind CSS. The site showcases my skills, projects, and professional experience with a modern, responsive design. Utilizing Vite for fast development and Tailwind for efficient styling, the website offers an optimal user experience and serves as a comprehensive platform to present my work.",
    img: "/My-Portfolio.png",
    link: "https://github.com/Osama-07/Portfolio",
    webLink: "https://portfolio-osamas-projects-b75d1734.vercel.app/",
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const [visibleCards, setVisibleCards] = useState(
    cardData.slice(0, visibleCount)
  );

  const hasMoreCards = visibleCount < cardData.length;

  const lastCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lastCardRef.current && visibleCount > 3) {
      lastCardRef.current.scrollIntoView();
    }
  }, [visibleCards, visibleCount]);

  const LoadMoreCard = () => {
    const newCount = visibleCount + 3;
    setVisibleCount(newCount);
    setVisibleCards((prevCards) => [
      ...prevCards,
      ...cardData.slice(visibleCount, newCount),
    ]);
  };
  return (
    <div id="projects" className="bg-zinc-900 px-12 py-20 ">
      <h1 className="text-center text-white text-6xl font-extrabold mb-20">
        Pr<span className="text-orange-500">o</span>jects
      </h1>
      <div className="w-full grid lg:grid-cols-3 gap-y-9 gap-x-3 md:grid-cols-2 max-sm:grid-cols-1">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            ref={index === visibleCards.length - 1 ? lastCardRef : null} // الإشارة للكارت الأخير فقط
          >
            <Card
              title={card.title}
              description={card.description}
              img={card.img}
              link={card.link}
              webLink={card.webLink}
            />
          </div>
        ))}
        {hasMoreCards && (
          <button
            onClick={LoadMoreCard}
            className="relative text-white duration-200 m-auto text-center max-md:col-span-1 md:col-span-2 lg:col-span-3 w-fit text-xl hover:text-orange-500 before:absolute before:w-1/2 before:h-px before:bg-white before:-left-1/3 before:top-2/3 before:-translate-x-1/2 after:absolute after:w-1/2 after:h-px after:bg-white after:-right-1/3 after:top-2/3 after:translate-x-1/2 hover:after:bg-orange-500 hover:before:bg-orange-500 after:duration-200 before:duration-200"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
