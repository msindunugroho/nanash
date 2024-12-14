import { useState } from "react";
import BrandNavbarBody from "./brand-navbar-body";
import BrandNavbarHeader from "./brand-navbar-header";

const BrandNavBar = () => {
    const [isDropdown, setIsDropdown] = useState(false);
    const [isActivePage, setIsActivePage] = useState("home");
    return(
      <nav>
        <div className="nav_container flex flex-col bg-natural-100 backdrop-blur-md shadow-sm shadow-transparent-dark-1 dark:bg-primary-500 dark:shadow-transparent-light-1 md:flex-row md:justify-between md:px-14 md:py-4">
          {/* brand navbar header */}
          <BrandNavbarHeader 
            isDropdown={isDropdown}
            setIsDropdown={setIsDropdown} />
                
          {/* brand-navbar-body */}
          <BrandNavbarBody 
            isActivePage={isActivePage} 
            isDropdown={isDropdown} 
            setIsActivePage={setIsActivePage} />
        </div>
      </nav>
    )
}

export default BrandNavBar;