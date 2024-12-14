/* eslint-disable react/prop-types */
const Header = ({ isMenuDropdown, setIsMenuDropdown }) => {
  return(
    <header 
      className="nav_header flex justify-between items-center w-full px-4 py-3 sm:px-8 md:flex-1 md:p-0">
            <h1 
              className="nav_brand text-primary-800 text-lg font-medium dark:text-tertiary-300 font-bruno_ace_sc">nanash.dev</h1>
            <button 
              className="w-6 h-6  md:hidden" 
              type="button" 
              onClick={() => setIsMenuDropdown(!isMenuDropdown)}>
              {   
              isMenuDropdown?
              <svg 
                className="w-full h-full" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg">
                  <path 
                    clipRule="evenodd" 
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" 
                    fillRule="evenodd" /></svg>
              :
              <svg 
                className="w-full h-full" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg">
                  <path 
                    clipRule="evenodd" 
                    d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" 
                    fillRule="evenodd" /></svg>
              }
            </button>
    </header>
  )
}

export default Header;