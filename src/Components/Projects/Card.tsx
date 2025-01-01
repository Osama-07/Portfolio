import React from "react";

interface CardProps {
  title: string;
  description: string;
  img: string;
  link: string;
  webLink: string | null;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  img,
  link,
  webLink,
}) => {
  return (
    <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow">
      <a href={webLink ? webLink : ""}>
        <img className="rounded-t-lg w-full h-56" src={img} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-between items-end">
          <a
            href={link}
            target="_blank"
            className="duration-200 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-2 focus:outline-none focus:ring-orange-500"
          >
            See Code
          </a>
          {webLink && (
            <a
              href={webLink}
              target="_blank"
              className="duration-200 inline-flex items-center text-md font-medium text-center text-blue-700 rounded-lg hover:text-orange-500 focus:outline-none"
            >
              Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
