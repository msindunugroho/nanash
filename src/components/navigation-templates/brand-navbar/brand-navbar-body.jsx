/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const BrandNavbarBody = ({ isActivePage, setIsActivePage, isDropdown }) => {
    return(
      <div className={`nav_body ${isDropdown? 'h-max py-4':'h-0 py-0'} flex flex-col transition-all duration-300 overflow-hidden md:flex-1 md:flex-row md:justify-end md:h-auto`}>
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
            onClick={() => setIsActivePage("contacts")}>contact</NavLink></li>
        </ol>
      </div>
    )
}

export default BrandNavbarBody;