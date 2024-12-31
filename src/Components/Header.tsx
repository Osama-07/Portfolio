import { useEffect } from "react";

function Header() {
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

  return (
    <>
      <nav className="md:px-32 fixed w-full z-20 top-0 start-0 bg-black opacity-80">
        <div className="w-full flex flex-wrap items-center justify-around max-md:justify-between p-4">
          <a href="#home" className="flex items-center space-x-3">
            <span className="self-center text-3xl font-extrabold whitespace-nowrap dark:text-white">
              Osama <span className="text-orange-700">Abdulaziz</span>
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
            <ul className="flex flex-col md:bg-transparent  p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="#home"
                  className="text-xl block mx-3 py-2 px-3 text-white md:hover:text-orange-700 rounded md:bg-transparent md:p-0 max-md:hover:bg-orange-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-xl block mx-3 py-2 px-3 text-white md:hover:text-orange-700 rounded md:bg-transparent md:p-0 max-md:hover:bg-orange-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-xl block mx-3 py-2 px-3 text-white md:hover:text-orange-700 rounded md:bg-transparent md:p-0 max-md:hover:bg-orange-700"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-xl block mx-3 py-2 px-3 text-white md:hover:text-orange-700 rounded md:bg-transparent md:p-0  max-md:hover:bg-orange-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
