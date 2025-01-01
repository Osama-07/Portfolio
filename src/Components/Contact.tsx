import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <footer id="contact" className="bg-neutral-700 rounded-lg shadow py-14">
      <h1 className="text-center text-white text-6xl font-extrabold mb-20">
        Con<span className="text-orange-500">ta</span>ct
      </h1>
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-center">
          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://x.com/Osama_Dev0"
                target="_blank"
                className="hover:scale-125 ml-6 px-3 py-2 rounded-lg duration-200 bg-black text-center flex justify-center items-center"
              >
                <FontAwesomeIcon icon={faXTwitter} size="2x" color="white" />{" "}
                {/* X */}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/osama-abdulaziz-00a8332a7/"
                target="_blank"
                className="hover:scale-125 ml-6 px-3 py-2 rounded-lg duration-200 bg-[#0077B5] text-center flex justify-center items-center"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />{" "}
                {/* LinkedIn */}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Osama-07"
                target="_blank"
                className="hover:scale-125 ml-6 px-3 py-2 rounded-lg duration-200 bg-black text-center flex justify-center items-center"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" color="white" />{" "}
                {/* GitHub */}
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+966554669791"
                target="_blank"
                className="hover:scale-125 ml-6 px-3 py-2 rounded-lg duration-200 bg-green-500 text-center flex justify-center items-center"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" color="white" />{" "}
                {/* GitHub */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
