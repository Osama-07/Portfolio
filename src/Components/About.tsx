const About = () => {
  return (
    <div id="about" className="py-20 max-md:px-4 px-12">
      <h1 className="text-center text-6xl font-extrabold mb-20 bg-gradient-to-tr from-primary via-primaryForeground to-secondary bg-clip-text text-transparent">
        Ab<span className="text-primary">ou</span>t
      </h1>
      <div className="lg:p-5 lg:mx-14 max-md:mx-4 grid grid-cols-2 gap-y-10 max-lg:grid-cols-1 rounded-lg max-md:rounded-lg max-md:text-center">
        <div
          data-aos="fade-up"
          className="backdrop-blur-3xl bg-white/10 rounded-lg p-5 relative after:absolute after:w-1 after:h-3/4 after:top-1/2 after:-translate-y-1/2 after:bg-primary after:-right-2.5 after:rounded-lg max-lg:after:hidden"
        >
          <h1 className="relative w-fit text-primary max-md:w-full mb-8 text-3xl font-extrabold after:absolute after:w-1/2 after:h-1 after:rounded-lg after:bg-gradient-to-r after:from-transparent after:via-primary after:to-transparent after:-bottom-5 after:left-0 max-md:after:left-1/4">
            About Me
          </h1>
          <p className="text-lg text-secondaryForeground text-justify whitespace-pre-line leading-relaxed">
            I am Osama Abdulaziz Mohamed Abdulsalam, a{" "}
            <b>Full Stack Web Developer</b> specializing in creating modern and
            visually appealing interfaces using React, TypeScript, and Tailwind
            CSS. I have expertise in building efficient and elegant web
            applications while designing robust backend systems with ASP.NET
            Core and SQL Server databases. I am always eager to deliver
            innovative tech solutions that meet user needs and ensure a seamless
            experience.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="backdrop-blur-3xl bg-white/10 rounded-lg p-5 lg:ml-4"
        >
          <h1 className="relative w-fit text-primary max-md:w-full mb-8 text-3xl font-extrabold after:absolute after:w-1/2 after:h-1 after:rounded-lg after:bg-gradient-to-r after:from-transparent after:via-primary after:to-transparent after:-bottom-5 after:left-0 max-md:after:left-1/4">
            Technical Skills
          </h1>
          <ul className="text-lg list-disc ml-5">
            <li className="mb-4 text-left">
              React | TypeScript | JavaScript | Tailwind CSS | HTML | CSS.
            </li>
            <li className="mb-4 text-left">
              C# | ASP.NET Core | .NET Framework | RESTful APIs.
            </li>
            <li className="mb-4 text-left">SQL Server | T-SQL.</li>
            <li className="text-left">Git | Jira.</li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          className="backdrop-blur-3xl bg-white/10 rounded-lg p-5 max-md:text-center lg:col-span-2 lg:w-7/12 lg:mx-auto"
        >
          <h1 className="text-center text-primary relative w-full max-md:w-full mb-8 text-3xl font-extrabold after:absolute after:w-1/4 after:h-1 after:rounded-lg after:bg-gradient-to-r after:from-transparent after:via-primary after:to-transparent after:-bottom-5 after:left-1/2 after:-translate-x-1/2 max-md:after:left-1/2">
            Vision
          </h1>
          <p className="text-lg text-secondaryForeground mx-auto lg:m-0 lg-w-full text-justify whitespace-pre-line leading-relaxed">
            My vision is to become a skilled Full Stack Developer who can
            contribute to innovative projects and make a positive impact on the
            world. I am committed to continuous learning and staying up to date
            with the latest industry trends and technologies to deliver
            cutting-edge solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
