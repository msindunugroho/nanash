import assets from "../../assets/assets";
import RootButton from "../root-button/root-button";

const HomePageCarousel = () => {
    const { images } = assets;
    return(
        <figure className="carousel">
            <div className="carousel_container component-layout flex flex-col justify-center items-center gap-4 w-full md:flex-row-reverse md:min-h-screen">
                <div className="carousel_image flex justify-center items-center w-full max-h-[300px] overflow-hidden md:max-h-none md:flex-1">
                    <img src={images.carousel_image} alt="carousel image" className={`object-cover object-bottom`}/>
                </div>
                <figcaption className="flex flex-col gap-2 md:flex-1 md:gap-4">
                    <h1 className={`text-xl text-tertiary-500 font-semibold uppercase leading-15 dark:text-tertiary-100 md:text-15xl md:w-10/12 md:font-bold`}>Empowering Your Online Presence</h1>
                    <p className={`text-sm text-dark-300 dark:text-light-100 md:text-base`}>Custom web solutions tailored to your business needs. Let’s build something amazing together.</p>
                    <div className="buttons flex gap-2 md:gap-4">
                        <RootButton styleCustom="btn btn-tertiary">Components</RootButton>
                        <RootButton styleCustom="btn btn-primary">Typography</RootButton>
                    </div>
                </figcaption>
            </div>
        </figure>
    )
}

export default HomePageCarousel;