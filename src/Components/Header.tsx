import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const menu = document.querySelector(".menu");
    const handleClick = (e: MouseEvent) => {
      const isClickOutsideMenu = menu && !menu.contains(e.target as Node);
      const isMenuVisible = menu && !menu.classList.contains("hidden");

      if (isClickOutsideMenu && isMenuVisible) {
        console.log(e.target);
        menu?.classList.add("hidden");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg- backdrop-blur-md shadow-lg z-50 w-full mx-auto transition-all duration-500 ${
        isScrolled
          ? "md:w-full lg:w-3/4 2xl:w-1/2 md:rounded-full md:mt-5 md:px-6"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex flex-wrap items-center justify-around max-md:justify-between p-4">
        <a href="#home" className="flex items-center space-x-3">
          <span className="self-center text-3xl font-extrabold whitespace-nowrap dark:text-white">
            Osama <span className="text-primary">Abdulaziz</span>
          </span>
        </a>
        <div className="md:hidden flex md:order-2 space-x-3 md:space-x-0">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={(e) => {
              e.stopPropagation();
              const menu = document.querySelector(".menu");
              menu?.classList.toggle("hidden");
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="menu hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:bg-transparent p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0">
            {[
              { name: "About", href: "#about" },
              { name: "Experience", href: "#experience" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xl block mx-3 py-2 px-3 text-white md:hover:text-primary rounded md:bg-transparent md:p-0 max-md:hover:bg-primary transition-all"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
