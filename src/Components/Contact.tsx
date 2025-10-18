import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const socialLinks = [
    {
      name: "X",
      link: "https://x.com/Osama_Dev0",
      icon: FaXTwitter,
      delay: 0,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/osama-abdulaziz-00a8332a7/",
      icon: FaLinkedin,
      delay: 100,
    },
    {
      name: "GitHub",
      link: "https://github.com/Osama-07",
      icon: FaGithub,
      delay: 200,
    },
    {
      name: "WhatsApp",
      link: "https://wa.me/966554669791",
      icon: FaWhatsapp,
      delay: 300,
    },
  ];

  return (
    <footer id="contact" className="rounded-lg shadow py-14">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex justify-around sm:items-center max-sm:justify-center max-sm:flex-col py-10">
          <h1
            data-aos="fade-right"
            className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl max-md:hidden"
          >
            Osama <span className="text-orange-500">Abdulaziz</span>
          </h1>
          <div className="flex flex-col justify-center items-center">
            <h1
              data-aos="fade-right"
              className="text-center bg-gradient-to-tr from-orange-500 via-white to-gray-500 bg-clip-text text-transparent text-6xl font-extrabold mb-10"
            >
              Con<span className="text-orange-500">ta</span>ct
            </h1>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              {socialLinks &&
                socialLinks.map((link) => (
                  <li
                    data-aos="fade-up"
                    data-aos-delay={link.delay}
                    className="group"
                  >
                    <a
                      href={link.link}
                      target="_blank"
                      className="relative ml-6 rounded-lg p-2 overflow-hidden flex justify-center items-center hover:scale-105 transition-transform duration-200"
                    >
                      <span className="absolute inset-0 bg-[linear-gradient(135deg,#27272a,#f97316)] bg-[length:200%_200%] transition-all duration-700 ease-in-out group-hover:bg-[linear-gradient(135deg,#3f3f46,#fb923c)] group-hover:bg-right rounded-lg" />
                      {/* الأيقونة */}
                      <span className="relative z-10 transition-transform duration-500 group-hover:rotate-[360deg]">
                        {React.createElement(link.icon, {
                          color: "white",
                          size: "40",
                        })}
                      </span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
