const About = () => {
  return (
    <div id="about" className="bg-gray-200 py-20 max-md:py-10">
      <div className="container">
        <h1 className="text-center text-black text-6xl font-extrabold mb-20">
          Ab<span className="text-orange-500">ou</span>t
        </h1>
        <div className="p-5 mx-14 max-md:mx-4 grid grid-cols-2 gap-y-10 max-lg:grid-cols-1 rounded-lg bg-slate-100 max-md:rounded-lg max-md:text-center">
          <div className="bg-white rounded-lg p-5 max-md:text-center relative after:absolute after:w-1 after:h-3/4 after:top-1/2 after:-translate-y-1/2 after:bg-orange-500 after:-right-2.5 after:rounded-lg max-lg:after:hidden">
            <h1 className="relative w-fit max-md:w-full mb-8 text-black text-3xl font-extrabold after:absolute after:w-1/2 after:h-1 after:rounded-lg after:bg-orange-500 after:-bottom-5 after:left-0 max-md:after:left-1/4">
              About Me
            </h1>
            <p className="text-gray-600 text-lg">
              I am Osama Abdulaziz Mohamed Abdulsalam, a{" "}
              <b>Full Stack Web Developer</b> specializing in creating modern
              and visually appealing interfaces using React, TypeScript, and
              Tailwind CSS. I have expertise in building efficient and elegant
              web applications while designing robust backend systems with
              ASP.NET Core and SQL Server databases. I am always eager to
              deliver innovative tech solutions that meet user needs and ensure
              a seamless experience.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 lg:ml-4">
            <h1 className="relative w-fit max-md:w-full mb-8 text-black text-3xl font-extrabold after:absolute after:w-1/2 after:h-1 after:rounded-lg after:bg-orange-500 after:-bottom-5 after:left-0 max-md:after:left-1/4">
              Technical Skills
            </h1>
            <ul className="text-gray-600 text-lg list-disc ml-5">
              <li className="mb-4 text-left">
                <b className="text-black">Frontend:</b> React | TypeScript |
                JavaScript | Tailwind CSS | HTML | CSS.
              </li>
              <li className="mb-4 text-left">
                <b className="text-black">Backend:</b> C# | ASP.NET Core | .NET
                Framework | RESTful APIs.
              </li>
              <li className="mb-4 text-left">
                <b className="text-black">Database:</b> SQL Server | T-SQL.
              </li>
              <li className="text-left">
                <b className="text-black">Development Tools:</b> Git | Jira.
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-5 max-md:text-center lg:col-span-2 lg:w-7/12 lg:mx-auto">
            <h1 className="text-center relative w-full max-md:w-full mb-8 text-black text-3xl font-extrabold after:absolute after:w-1/4 after:h-1 after:rounded-lg after:bg-orange-500 after:-bottom-5 after:left-1/2 after:-translate-x-1/2 max-md:after:left-1/2">
              Vision
            </h1>
            <p className="text-gray-600 text-lg mx-auto lg:m-0 lg-w-full">
              My vision is to become a skilled Full Stack Developer who can
              contribute to innovative projects and make a positive impact on
              the world. I am committed to continuous learning and staying up to
              date with the latest industry trends and technologies to deliver
              cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
