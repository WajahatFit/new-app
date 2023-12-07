import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0 p-6 shadow dark:bg-gray-800">
      <div className=" w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className=" text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className=" hover:underline">
            Ecommerce™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/about">
              <span className="hover:underline me-4 md:me-6">About</span>
            </Link>
          </li>
          <li>
            <a
              href="https://flowbite.com/"
              className="hover:underline me-4 md:me-6"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#https://flowbite.com/"
              className="hover:underline me-4 md:me-6"
            >
              Licensing
            </a>
          </li>
          <li>
            <Link to="/contact">
              {" "}
              <span className="hover:underline">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
