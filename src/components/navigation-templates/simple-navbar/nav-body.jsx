/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const NavBody = ({ navItemData, isHamburgerMenuDropdown, isActivePage, setIsActivePage }) => {
  
  return(
  <div 
    className={`nav_body ${isHamburgerMenuDropdown? 'h-max py-4':'h-0 py-0'} flex flex-col transition-all duration-300 overflow-hidden md:flex-1 md:flex-row md:justify-end md:h-auto md:p-0 md:overflow-visible`}
    id="nav_body">
    <ol className={`nav_link flex flex-col gap-2 md:flex-row md:justify-end md:gap-6`}>
      {
        navItemData.map((item, index) => (
            <li key={index}>
            <NavLink
              className={`${isActivePage === item.textContent && "text-primary-500 font-semibold dark:text-tertiary-300"} capitalize px-4 transition-all duration-300 hover:text-primary-800 dark:hover:text-tertiary-300 sm:px-8 md:flex md:items-center md:p-0 md:h-full`}
              to={item.path}
              onClick={() => setIsActivePage(item.textContent)}>{item.textContent}</NavLink>
          </li>
        ))
      }
    </ol>
  </div>
  )
}

export default NavBody;