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
    dropdownData: [
      {
        textContent:"Product 1.1",
        path: "/",
      },
      {
        textContent:"Product 1.2",
        path: "/",
      },
      {
        textContent:"Product 1.3",
        path: "/",
      },
    ]
  },
  {
    textContent: "services",
    path: "/",
  },
];

const DropdownNavBar = () => {
    const [isHamburgerMenuDropdown, setIsHamburgerMenuDropdown] = useState(false);
    const [isActivePage, setIsActivePage] = useState("home");

    function isActivePageHandler(str) {
      setIsActivePage(str)
    }
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
              isActivePageHandler={isActivePageHandler}
              isHamburgerMenuDropdown={isHamburgerMenuDropdown}
              navItemData={navItemData}
              setIsActivePage={setIsActivePage} />
        </div>
      </nav>
    )
}

export default DropdownNavBar;