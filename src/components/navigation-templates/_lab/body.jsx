/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Body = ({ isMenuDropdown, isActivePage, setIsActivePage, isProductDropdown, setIsProductDropDown }) => {
  return(
  <div className={`nav_body ${isMenuDropdown? 'h-max py-4':'h-0 py-0'} flex flex-col transition-all duration-300 overflow-hidden md:flex-1 md:flex-row md:justify-end md:h-auto md:p-0 md:overflow-visible`}>
    <ol className={`nav_link flex flex-col gap-2 md:flex-row md:justify-end md:gap-6`}>
      <li>
        <NavLink
          className={`${isActivePage === "home" && "text-primary-800 font-semibold dark:text-tertiary-300"} text-base capitalize px-4 transition-all duration-300 hover:text-primary-800 dark:hover:text-tertiary-300 sm:px-8 md:flex md:items-center md:p-0 md:h-full`}
          to={``}
          onClick={() => setIsActivePage("home")}>home</NavLink>
      </li>
      <li>
        <NavLink
          className={`${isActivePage === "services" && "text-primary-800 font-semibold dark:text-tertiary-300"} text-base capitalize px-4 transition-all duration-300 hover:text-primary-800 dark:hover:text-tertiary-300 sm:px-8 md:flex md:items-center md:p-0 md:h-full`}
          to={``}
          onClick={() => setIsActivePage("services")}>services</NavLink></li>
      <li className={`${isActivePage === "products" && "text-primary-800 font-semibold dark:text-tertiary-300"} items-center text-base capitalize px-4 transition-all duration-300 sm:px-8 md:relative md:h-full md:px-0 `}>
        <button
          className={`${isActivePage === "product 1" || isActivePage === "product 2" || isActivePage === "product 3" && "text-primary-800 font-semibold dark:text-tertiary-300"} flex items-center gap-2 hover:text-primary-800 dark:hover:text-tertiary-300 md:h-full`}
          type="button"
          onClick={() => setIsProductDropDown(!isProductDropdown)}>Products
          <svg
            className={`${isProductDropdown && "rotate-180"} w-5 h-5 transition-transform duration-300`}
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              fillRule="evenodd" />
          </svg>
        </button>
        <ol className={`${isProductDropdown && "h-max py-4 bg-transparent-light-3 backdrop-blur-md shadow-sm shadow-transparent-dark-2 dark:bg-transparent-dark-3 dark:shadow-transparent-light-1"} flex flex-col gap-2 h-0 bg-natural-100 backdrop-blur-md overflow-hidden md:absolute md:top-[65px] md:left-0 md:w-36 md:px-4 md:rounded-lg`}>
          <li><NavLink
            className={`${isActivePage === "product 1" && "text-primary-800 font-semibold dark:text-tertiary-300"} text-sm capitalize px-2 hover:text-primary-800 dark:hover:text-tertiary-300 md:p-0`}
            to={`/`} >Product nndda 1</NavLink></li>
          <li><NavLink
            className={`${isActivePage === "product 2" && "text-primary-800 font-semibold dark:text-tertiary-300"} text-sm capitalize px-2 hover:text-primary-800 dark:hover:text-tertiary-300 md:p-0`}
            to={`/`} >Product 2</NavLink></li>
          <li><NavLink
            className={`${isActivePage === "product 3" && "text-primary-800 font-semibold dark:text-tertiary-300"} text-sm capitalize px-2 hover:text-primary-800 dark:hover:text-tertiary-300 md:p-0`}
            to={`/`} >Product 3</NavLink></li>
        </ol>
      </li>
    </ol>
  </div>
  )
}

export default Body;