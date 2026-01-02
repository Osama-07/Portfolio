import { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  const el = useRef(null); // إنشاء مرجع للعنصر

  useEffect(() => {
    const options = {
      strings: [
        "<span class='text-primary'>Osama</span> Abdulaziz",
        "Software <span class='text-primary'>Engineer</span>",
      ],
      cursorChar: ".",
      typeSpeed: 40,
      backDelay: 3000,
      loop: true,
      contentType: "html",
    };

    const typed = new Typed(el.current, options); // تهيئة Typed

    return () => {
      typed.destroy(); // تنظيف عند إلغاء التركيب
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden" id="home">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85"></div> */}
      <div className="lg:pl-56 max-lg:text-center xl:w-[75%] px-3 absolute top-1/2 transform -translate-y-2/3">
        <h1 className="relative w-fit max-lg:m-auto max-lg:text-center mb-4 text-4xl font-extrabold leading-normal tracking-tight md:text-5xl lg:text-6xl text-white after:absolute after:w-1/2 after:h-1 after:bg-primary after:left-0 after:-bottom-5 max-md:after:left-1/4 max-md:after:right-1/4">
          <span ref={el} />
        </h1>
        <p className="!leading-loose w-2/4 max-lg:w-full md:w-3/4 max-lg:text-center max-lg:mx-auto mt-10 mb-6 p-0 text-lg font-normal text-secondaryForeground max-md:text-center">
          Passionate software engineer with hands-on experience building
          full-stack web applications, solving complex problems, and
          continuously learning new technologies. I enjoy turning ideas into
          real products that make a difference.
        </p>
        <a
          href="#projects"
          className="duration-200 px-5 py-3 inline-flex items-center justify-center text-base font-medium text-white bg-primary rounded-lg hover:scale-105"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="ml-4 duration-200 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary rounded-lg hover:scale-105"
        >
          Contact Me
        </a>
      </div>
      {/* <a
        href="https://wa.me/966554669791"
        target="_blank"
        className="max-md:opacity-30 hover:opacity-100 fixed w-16 h-16 bottom-10 right-6 duration-200 hover:scale-110 cursor-pointer z-10"
      >
        <FaWhatsapp color="white" size={70} />
      </a> */}
    </div>
  );
};

export default HeroSection;
