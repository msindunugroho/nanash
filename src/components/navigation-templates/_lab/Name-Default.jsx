import { useState } from "react";
import Header from "./header";
import Body from "./body";

const NameDefault = () => {
    const [isMenuDropdown, setIsMenuDropdown] = useState(false);
    const [isActivePage, setIsActivePage] = useState("home");
    const [isProductDropdown, setIsProductDropDown] = useState(false)
    return(
      <nav>
        <div 
          className="nav_container flex flex-col bg-transparent-light-3 backdrop-blur-md shadow-sm shadow-transparent-dark-2 dark:bg-transparent-dark-3 dark:shadow-transparent-light-1 md:flex-row md:justify-between md:h-[60px] md:px-14">
            <Header
              isActivePage={isActivePage}
              isMenuDropdown={isMenuDropdown}
              setIsActivePage={setIsActivePage}
              setIsMenuDropdown={setIsMenuDropdown} />
            <Body
              isActivePage={isActivePage}
              isMenuDropdown={isMenuDropdown}
              isProductDropdown={isProductDropdown}
              setIsActivePage={setIsActivePage}
              setIsProductDropDown={setIsProductDropDown} />
        </div>
      </nav>
    )
}

export default NameDefault;