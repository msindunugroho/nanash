import { useState } from "react";
import NavHeader from "./nav-header";
import NavBody from "./nav-body";

const navItemData = [
  {
    textContent: "home",
    path: "/",
  },
  {
    textContent: "Product",
    path: "/",
  },
  {
    textContent: "services",
    path: "/",
  },
];

const SimpleNavBar = () => {
    const [isHamburgerMenuDropdown, setIsHamburgerMenuDropdown] = useState(false);
    const [isActivePage, setIsActivePage] = useState("home");

    return(
      <nav
        aria-label="navigation">
        <div 
          className="nav_container flex flex-col bg-light-50 shadow-sm shadow-transparent-dark-2 dark:bg-transparent-dark-2 dark:shadow-transparent-light-1 md:flex-row md:justify-between md:h-[60px] md:px-14">
            <NavHeader
              isActivePage={isActivePage}
              isHamburgerMenuDropdown={isHamburgerMenuDropdown}
              setIsActivePage={setIsActivePage}
              setIsHamburgerMenuDropdown={setIsHamburgerMenuDropdown} />
            <NavBody
              isActivePage={isActivePage}
              isHamburgerMenuDropdown={isHamburgerMenuDropdown}
              navItemData={navItemData}
              setIsActivePage={setIsActivePage} />
        </div>
      </nav>
    )
}

export default SimpleNavBar;