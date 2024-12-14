import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const RootNavigation = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);
    const [isPageActive, setIsPageActive] = useState("home");

    useEffect(() => {
        if(isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDarkMode])
    return(
      <nav className={`${isDropdown? "rounded-b-xl":"rounded-b-none"} fixed top-0 left-0 right-0 dark:bg-primary-500  backdrop-blur-md shadow-sm shadow-transparent-dark-2 dark:shadow-transparent-light-1`}>
        <div className="nav_container flex flex-col md:flex-row md:justify-between md:items-center md:px-12 md:py-4">
          <header className={`flex justify-between items-center px-4 py-3 md:p-0`}>
            <div className="nav_brand">
              <h1 className="text-tertiary-500 dark:text-tertiary-300 font-bruno_ace_sc md:text-lg">nanash.dev</h1>
            </div> 
            <ol className="action flex items-center gap-5 md:hidden">
              <li>
                <button
                  className="w-5 h-5"
                  type="button"
                  onClick={() => setIsDarkMode(!isDarkMode)}>
                  { isDarkMode?
                    <svg
                      className="w-full h-full fill-tertiary-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                    </svg>
                                :
                    <svg
                      className="w-full h-full fill-primary-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        clipRule="evenodd"
                        d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                        fillRule="evenodd" />
                    </svg>
                            }
                </button>
              </li>
              <li>
                <button
                  className="hamburger-menu w-6 h-6 md:hidden"
                  type="button"
                  onClick={() => setIsDropdown(!isDropdown)}>
                  { isDropdown?
                    <svg
                      className="w-full h-full fill-primary-500 dark:fill-tertiary-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        clipRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd" />
                    </svg>
                            :
                    <svg
                      className="w-full h-full fill-primary-500 dark:fill-tertiary-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        clipRule="evenodd"
                        d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                        fillRule="evenodd" />
                    </svg>
                        }
                </button>
              </li>
            </ol>
          </header>
          <div className={`nav_body ${isDropdown? "h-[230px] opacity-100" : "h-0 opacity-0"} flex flex-col w-full px-4 overflow-hidden transition-all duration-300 md:flex-row md:justify-end md:items-center gap-12 md:h-auto md:p-0 md:opacity-100`}>
            <ol className="nav_link flex flex-col gap-1 md:flex-row md:gap-4">
              <li><NavLink
                className={`${isPageActive === "home" && "text-tertiary-500 dark:text-tertiary-300"} text-dark-300 dark:text-light-100 text-xs capitalize font-medium hover:px-1 md:text-sm md:hover:px-0 `}
                to={``}
                onClick={() => setIsPageActive("home")}>home</NavLink></li>
              <li><NavLink
                className={`${isPageActive === "components" && "text-tertiary-500 dark:text-tertiary-300"} text-dark-300 dark:text-light-100 text-xs capitalize font-medium hover:px-1 md:text-sm md:hover:px-0 `}
                to={``}
                onClick={() => setIsPageActive("components")}>components</NavLink></li>
              <li><NavLink
                className={`${isPageActive === "typography" && "text-tertiary-500 dark:text-tertiary-300"} text-dark-300 dark:text-light-100 text-xs capitalize font-medium hover:px-1 md:text-sm md:hover:px-0 `}
                to={``}
                onClick={() => setIsPageActive("typography")}>typography</NavLink></li>
              <li><NavLink
                className={`${isPageActive === "icon" && "text-tertiary-500 dark:text-tertiary-300"} text-dark-300 dark:text-light-100 text-xs capitalize font-medium hover:px-1 md:text-sm md:hover:px-0 `}
                to={``}
                onClick={() => setIsPageActive("icon")}>icon</NavLink></li>
              <li><NavLink
                className={`${isPageActive === "notes" && "text-tertiary-500 dark:text-tertiary-300"} text-dark-300 dark:text-light-100 text-xs capitalize font-medium hover:px-1 md:text-sm md:hover:px-0 `}
                to={``}
                onClick={() => setIsPageActive("icon")}>notes</NavLink></li>
            </ol>
            <ol className="nav_action hidden md:block">
              <li className="md:flex md:justify-center md:items-center">
                <button
                  className="w-5 h-5"
                  type="button"
                  onClick={() => setIsDarkMode(!isDarkMode)}>
                  { isDarkMode?
                    <svg
                      className="w-full h-full fill-tertiary-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                    </svg>
                                :
                    <svg
                      className="w-full h-full fill-primary-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        clipRule="evenodd"
                        d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                        fillRule="evenodd" />
                    </svg>
                            }
                </button>
              </li>
            </ol>
          </div>
        </div>
      </nav>
    )
}

export default RootNavigation;