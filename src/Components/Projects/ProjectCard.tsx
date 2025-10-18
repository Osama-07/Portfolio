import React from "react";

interface CardProps {
  title: string;
  description: string;
  img: string;
  link: string | null;
  webLink: string | null;
}

const ProjectCard: React.FC<CardProps> = ({
  title,
  description,
  img,
  link,
  webLink,
}) => {
  return (
    <div
      data-aos="fade-up"
      className="h-full p-4 backdrop-blur bg-white/10 rounded-xl flex flex-col"
    >
      <div className="flex flex-col h-full rounded-xl">
        <div className="w-full max-h-[155px] bg-center bg-no-repeat aspect-video bg-cover rounded-xl">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="py-5">
          <h1 className="relative text-center pb-5 text-white text-2xl font-bold leading-tight tracking-[-0.015em] after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-3/4 after:h-[1px] after:rounded-xl after:bg-[#b4856a]">
            {title}
          </h1>
        </div>
        <div className="w-full min-w-72 justify-center gap-1 pb-4">
          <p className="text-[#b4856a] text-base mb-3 text-justify whitespace-pre-line leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex items-end gap-3 justify-between mt-auto">
          {link && (
            <a
              href={link}
              target="_blank"
              className="relative flex min-w-[84px] max-w-[480px] h-8 items-center justify-center rounded-xl overflow-hidden text-sm font-medium text-white cursor-pointer group"
            >
              <span className="absolute inset-0 bg-[linear-gradient(135deg,#f97316,#27272a)] bg-[length:200%_200%] transition-all duration-700 ease-in-out group-hover:bg-[linear-gradient(135deg,#fb923c,#3f3f46)] group-hover:bg-right"></span>
              <span className="relative z-10 truncate px-4">See Code</span>
            </a>
          )}
          {webLink && (
            <a
              href={webLink}
              target="_blank"
              className="relative flex min-w-[84px] max-w-[480px] h-8 items-center justify-center rounded-xl overflow-hidden text-sm font-medium text-white cursor-pointer group"
            >
              <span className="absolute inset-0 bg-[linear-gradient(135deg,#f97316,#27272a)] bg-[length:200%_200%] transition-all duration-700 ease-in-out group-hover:bg-[linear-gradient(135deg,#fb923c,#3f3f46)] group-hover:bg-right"></span>
              <span className="relative z-10 truncate px-4">View Web</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
