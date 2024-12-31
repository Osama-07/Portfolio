import { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  const el = useRef(null); // إنشاء مرجع للعنصر

  useEffect(() => {
    const options = {
      strings: [
        "<span class='text-red-500'>Osama</span> Abdulaziz",
        "Full <span class='text-red-500'>Stack</span> Developer",
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
      <img
        className="w-full h-full object-cover"
        src="/Portfolio-Logo.png"
        alt="Landing Camera"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85"></div>
      <div className="md:pl-56 max-md:text-center w-full px-3 absolute top-1/2 transform -translate-y-1/2">
        <h1 className="relative w-fit max-md:m-auto max-md:text-center mb-4 text-4xl font-extrabold leading-normal tracking-tight md:text-5xl lg:text-6xl text-white after:absolute after:w-1/2 after:h-1 after:bg-orange-500 after:left-0 after:-bottom-5 max-md:after:left-1/4 max-md:after:right-1/4">
          <span ref={el} />
        </h1>
        <p className="!leading-loose w-2/4 max-md:w-full mt-10 mb-6 p-0 text-lg font-normal text-gray-500  max-md:text-center">
          A dedicated software developer with a passion for learning, solving
          problems, and creating impactful applications.
        </p>
        <a
          href="#about"
          className="duration-200 px-5 py-3 inline-flex items-center justify-center text-base font-medium text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-orange-700 dark:focus:ring-orange-700"
        >
          View Projects
        </a>
        <a
          href="#projects"
          className="ml-4 duration-200 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-orange-700 dark:focus:ring-orange-700"
        >
          Contact Me
        </a>
      </div>
      <a
        href="https://wa.me/966554669791"
        target="_blank"
        className="max-md:opacity-30 hover:opacity-100 fixed w-16 h-16 bottom-10 right-6 duration-200 hover:scale-110 cursor-pointer"
      >
        <img className="w-full" src="/Whatsapp-logo.png" alt="" />
      </a>
    </div>
  );
};

export default HeroSection;
