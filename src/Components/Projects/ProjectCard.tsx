import React from "react";

interface CardProps {
  title: string;
  description: string;
  img: string;
  link: string;
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
      <div className="grid grid-cols-1 gap-4 rounded-xl flex-grow">
        <div className="w-full max-h-[155px] mb-3 bg-center bg-no-repeat aspect-video bg-cover rounded-xl">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex w-full min-w-72 flex-col items-stretch justify-center gap-1 pb-4 flex-grow">
          <h1 className="text-center mb-2 text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
            {title}
          </h1>
          <p className="text-[#b4856a] text-base mb-3 text-justify whitespace-pre-line leading-relaxed">
            {description}
          </p>
          <div className="flex items-end gap-3 justify-between mt-auto">
            <a
              href={link}
              target="_blank"
              className="relative flex min-w-[84px] max-w-[480px] h-8 items-center justify-center rounded-xl overflow-hidden text-sm font-medium text-white cursor-pointer group"
            >
              <span className="absolute inset-0 bg-[linear-gradient(135deg,#f97316,#27272a)] bg-[length:200%_200%] transition-all duration-700 ease-in-out group-hover:bg-[linear-gradient(135deg,#fb923c,#3f3f46)] group-hover:bg-right"></span>
              <span className="relative z-10 truncate px-4">See Code</span>
            </a>
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
    </div>
  );
};

export default ProjectCard;
// <div classNameName="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow">
//   <a href={webLink ? webLink : ""}>
//     <img classNameName="rounded-t-lg w-full h-56" src={img} alt="" />
//   </a>
//   <div classNameName="p-5">
//     <a href="#">
//       <h5 classNameName="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//         {title}
//       </h5>
//     </a>
//     <p classNameName="mb-3 font-normal text-gray-700 dark:text-gray-400">
//       {description}
//     </p>
//     <div classNameName="flex justify-between items-end">
//       <a
//         href={link}
//         target="_blank"
//         classNameName="duration-200 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-2 focus:outline-none focus:ring-orange-500"
//       >
//         See Code
//       </a>
//       {webLink && (
//         <a
//           href={webLink}
//           target="_blank"
//           classNameName="duration-200 inline-flex items-center text-md font-medium text-center text-blue-700 rounded-lg hover:text-orange-500 focus:outline-none"
//         >
//           Preview
//         </a>
//       )}
//     </div>
//   </div>
// </div>
