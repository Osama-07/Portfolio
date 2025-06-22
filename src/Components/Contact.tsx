import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <footer id="contact" className="rounded-lg shadow py-14">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex justify-around sm:items-center max-sm:justify-center max-sm:flex-col py-10">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl max-md:hidden">
            Osama <span className="text-orange-500">Abdulaziz</span>
          </h1>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-white text-6xl font-extrabold mb-10">
              Con<span className="text-orange-500">ta</span>ct
            </h1>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="https://x.com/Osama_Dev0"
                  target="_blank"
                  className="hover:scale-105 ml-6 rounded-lg duration-200 p-2 bg-gradient-to-tr from-zinc-800 to-orange-500 text-center flex justify-center items-center"
                >
                  <FaXTwitter color="white" size={40} />
                  {/* X */}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/osama-abdulaziz-00a8332a7/"
                  target="_blank"
                  className="hover:scale-105 ml-6 rounded-lg duration-200 p-2 bg-gradient-to-tr from-zinc-800 to-orange-500 text-center flex justify-center items-center"
                >
                  <FaLinkedin color="white" size={40} />
                  {/* LinkedIn */}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Osama-07"
                  target="_blank"
                  className="hover:scale-105 ml-6 rounded-lg duration-200 p-2 bg-gradient-to-tr from-zinc-800 to-orange-500 text-center flex justify-center items-center"
                >
                  <FaGithub color="white" size={40} />
                  {/* GitHub */}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+966554669791"
                  target="_blank"
                  className="hover:scale-105 ml-6 rounded-lg duration-200 p-2 bg-gradient-to-tr from-zinc-800 to-orange-500 text-center flex justify-center items-center"
                >
                  <FaWhatsapp color="white" size={40} />
                  {/* GitHub */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
