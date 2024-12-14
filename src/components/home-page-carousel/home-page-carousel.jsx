import { NavLink } from "react-router-dom";
import assets from "../../assets/assets";
import RootButton from "../root-button/root-button";

const HomePageCarousel = () => {
    const { images } = assets;
    return(
      <figure className="carousel">
        <div className="carousel_container component-layout flex flex-col justify-center items-center gap-4 w-full md:flex-row-reverse md:min-h-screen">
          <div className="carousel_image flex justify-center items-center w-full max-h-[300px] overflow-hidden md:max-h-none md:flex-1">
            <img
              alt="carousel image"
              className={`object-cover object-bottom`}
              src={images.carousel_image} />
          </div>
          <figcaption className="flex flex-col gap-4 md:flex-1">
            <h1 className={`text-primary-500 font-semibold uppercase leading-12 dark:text-tertiary-100 md:w-10/12 md:font-bold`}>Empowering Your Online Presence</h1>
            <p>Custom web solutions tailored to your business needs. Let’s build something amazing together.</p>
            <div className="buttons flex gap-4">
              <NavLink to={`/components/navigation-templates#dropdown-navbar`}>
                <RootButton 
                  ariaLabel={"components"}
                  styleCustom="btn btn-secondary"
                  >components</RootButton>
              </NavLink>
              <RootButton 
                ariaLabel={"typography"}
                styleCustom="btn btn-primary"
                >typography</RootButton>
            </div>
          </figcaption>
        </div>
      </figure>
    )
}

export default HomePageCarousel;