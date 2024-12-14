/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavItemDropdown = ({ textContent, dropdownData, isActivePage, isActivePageHandler, isNavItemDropdown, navItemDropdownHandler }) => {
  const parentTextContent = textContent
  return(
    <li className={`flex items-end text-base capitalize px-4 transition-all duration-300 sm:px-8 md:relative md:h-full md:px-0 `}>
    <button
      aria-expanded={isNavItemDropdown}
      aria-label="expand nav link"
      className={`${isActivePage === parentTextContent && "text-primary-800 font-semibold dark:text-tertiary-300"} flex items-center gap-1 hover:text-primary-800 dark:hover:text-tertiary-300 md:h-full`}
      type="button"
      onClick={() => navItemDropdownHandler()}>{parentTextContent}
      <svg
        className={`${isNavItemDropdown && "rotate-180"} w-5 h-5 transition-transform duration-300`}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          clipRule="evenodd"
          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
          fillRule="evenodd" />
      </svg>
    </button>
    <ol className={`${isNavItemDropdown && "h-max py-4 bg-transparent-light-3 backdrop-blur-md dark:bg-transparent-dark-3 dark:shadow-transparent-light-1 md:shadow-sm md:shadow-transparent-dark-2"} flex flex-col gap-2 h-0 bg-natural-100 backdrop-blur-md overflow-hidden md:absolute md:top-[65px] md:left-0 md:w-36 md:px-4 md:rounded-lg`}>
      {
        dropdownData.map((item) => (
          <li key={item.textContent}><NavLink
            className={`text-sm capitalize px-2 hover:text-primary-800 dark:hover:text-tertiary-300 md:p-0`}
            to={item.path} 
            onClick={() => {isActivePageHandler(parentTextContent)}} >{item.textContent}</NavLink></li>
        ))
      }
    </ol>
  </li>
  )
}

export default NavItemDropdown;