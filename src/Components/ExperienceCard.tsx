interface ExperienceCardProps {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  benefits: string[];
  img: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  position,
  company,
  startDate,
  endDate,
  description,
  benefits,
  img,
}) => {
  return (
    <div
      data-aos="fade-up"
      className="backdrop-blur bg-white/10 rounded-xl p-4 gap-6 flex max-xl:flex-col max-xl:items-center max-xl:justify-center"
    >
      <img src={img} className="h-full w-24 rounded-xl" alt="" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="flex text-center mb-2 text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
          {position} | {company}
        </h1>
        <h1 className="text-center mb-2 text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
          {startDate} - {endDate}
        </h1>
        <p className="text-[#b4856a] text-base mb-3 text-justify whitespace-pre-line leading-relaxed">
          {description}
        </p>
        <ul className="text-[#b4856a] list-disc text-base mb-3 whitespace-pre-line leading-relaxed">
          {benefits.map((benefit, index) => (
            <li key={index} className="mb-2 ml-5">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
