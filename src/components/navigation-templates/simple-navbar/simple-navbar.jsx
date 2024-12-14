import { NavLink } from "react-router-dom";
import { useState } from "react";

const SimpleNavBar = () => {
    const [isDropdown, setIsDropdown] = useState(false);
    const [isActivePage, setIsActivePage] = useState("home");
    return(
      <nav>
        <div className="nav_container flex flex-col backdrop-blur-md shadow-sm shadow-transparent-dark-1 dark:bg-primary-500 dark:shadow-transparent-light-1 md:px-14 md:py-4">
          <header className="nav_header flex justify-end items-center w-full px-4 py-3 md:hidden">
            <button
              className="w-6 h-6"
              type="button"
              onClick={() => setIsDropdown(!isDropdown)}>
              { isDropdown?
                <svg
                  className="w-full h-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><path
                    clipRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    fillRule="evenodd" /></svg>
                            :
                <svg
                  className="w-full h-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><path
                    clipRule="evenodd"
                    d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    fillRule="evenodd" /></svg>
                        }
            </button>
          </header>
          <div className={`nav_body ${isDropdown? 'h-max py-4':'h-0 py-0'} flex flex-col transition-all duration-300 overflow-hidden md:flex-row md:justify-end md:h-auto`}>
            <ol className={`nav_link flex flex-col gap-2 md:flex-row md:justify-end md:gap-4`}>
              <li><NavLink
                className={`${isActivePage === "home" && "text-secondary-300 font-semibold dark:text-tertiary-100"} text-base capitalize px-4 transition-all duration-300 hover:pl-5 sm:px-8 sm:hover:pl-9 md:p-0`}
                to={``}
                onClick={() => setIsActivePage("home")}>home</NavLink></li>
              <li><NavLink
                className={`${isActivePage === "services" && "text-secondary-300 font-semibold dark:text-tertiary-100"} text-base capitalize px-4 transition-all duration-300 hover:pl-5 sm:px-8 sm:hover:pl-9 md:p-0`}
                to={``}
                onClick={() => setIsActivePage("services")}>services</NavLink></li>
              <li><NavLink
                className={`${isActivePage === "contacts" && "text-secondary-300 font-semibold dark:text-tertiary-100"} text-base capitalize px-4 transition-all duration-300 hover:pl-5 sm:px-8 sm:hover:pl-9 md:p-0`}
                to={``}
                onClick={() => setIsActivePage("contacts")}>contacts</NavLink></li>
            </ol>
          </div>
        </div>
      </nav>
    )
}

export default SimpleNavBar;