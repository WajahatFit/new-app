import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-2 px-4 bg-white rounded-lg shadow dark:bg-gray-800">
      <div className=" w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Ecommerce™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://flowbite.com/"
              className="hover:underline me-4 md:me-6"
            >
              About
            </a>
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
            <a href="https://flowbite.com/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
